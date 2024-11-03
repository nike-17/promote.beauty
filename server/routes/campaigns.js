import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// In-memory storage for campaigns (replace with a database in production)
let campaigns = [];

// Get all campaigns for a user
router.get('/', (req, res) => {
  try {
    const userId = req.auth.sub;
    const userCampaigns = campaigns.filter(campaign => campaign.userId === userId);
    res.json(userCampaigns);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch campaigns' });
  }
});

// Create a new campaign
router.post('/', (req, res) => {
  try {
    const userId = req.auth.sub;
    const campaign = {
      id: uuidv4(),
      userId,
      ...req.body,
      impressions: 0,
      clicks: 0,
      conversions: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    campaigns.push(campaign);
    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create campaign' });
  }
});

// Update a campaign
router.put('/:id', (req, res) => {
  try {
    const userId = req.auth.sub;
    const campaignId = req.params.id;
    
    const index = campaigns.findIndex(c => c.id === campaignId && c.userId === userId);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Campaign not found' });
    }
    
    campaigns[index] = {
      ...campaigns[index],
      ...req.body,
      updatedAt: new Date().toISOString(),
    };
    
    res.json(campaigns[index]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update campaign' });
  }
});

// Delete a campaign
router.delete('/:id', (req, res) => {
  try {
    const userId = req.auth.sub;
    const campaignId = req.params.id;
    
    const index = campaigns.findIndex(c => c.id === campaignId && c.userId === userId);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Campaign not found' });
    }
    
    campaigns = campaigns.filter(c => !(c.id === campaignId && c.userId === userId));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete campaign' });
  }
});

export { router as campaignRoutes };