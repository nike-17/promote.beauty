import { Campaign } from '../types/campaign';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const campaignApi = {
  async getCampaigns(token: string): Promise<Campaign[]> {
    const response = await fetch(`${API_URL}/campaigns`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch campaigns');
    }
    
    return response.json();
  },

  async createCampaign(campaign: Omit<Campaign, 'id'>, token: string): Promise<Campaign> {
    const response = await fetch(`${API_URL}/campaigns`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(campaign)
    });

    if (!response.ok) {
      throw new Error('Failed to create campaign');
    }

    return response.json();
  },

  async updateCampaign(id: string, campaign: Partial<Campaign>, token: string): Promise<Campaign> {
    const response = await fetch(`${API_URL}/campaigns/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(campaign)
    });

    if (!response.ok) {
      throw new Error('Failed to update campaign');
    }

    return response.json();
  },

  async deleteCampaign(id: string, token: string): Promise<void> {
    const response = await fetch(`${API_URL}/campaigns/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete campaign');
    }
  }
};