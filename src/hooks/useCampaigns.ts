import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Campaign } from '../types/campaign';
import { campaignApi } from '../services/api';

export function useCampaigns() {
  const { getAccessTokenSilently } = useAuth0();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
    try {
      const token = await getAccessTokenSilently();
      const data = await campaignApi.getCampaigns(token);
      setCampaigns(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load campaigns'));
    } finally {
      setLoading(false);
    }
  };

  const createCampaign = async (campaign: Omit<Campaign, 'id'>) => {
    try {
      const token = await getAccessTokenSilently();
      const newCampaign = await campaignApi.createCampaign(campaign, token);
      setCampaigns([...campaigns, newCampaign]);
      return newCampaign;
    } catch (err) {
      throw new Error('Failed to create campaign');
    }
  };

  const updateCampaign = async (id: string, updates: Partial<Campaign>) => {
    try {
      const token = await getAccessTokenSilently();
      const updatedCampaign = await campaignApi.updateCampaign(id, updates, token);
      setCampaigns(campaigns.map(c => c.id === id ? updatedCampaign : c));
      return updatedCampaign;
    } catch (err) {
      throw new Error('Failed to update campaign');
    }
  };

  const deleteCampaign = async (id: string) => {
    try {
      const token = await getAccessTokenSilently();
      await campaignApi.deleteCampaign(id, token);
      setCampaigns(campaigns.filter(c => c.id !== id));
    } catch (err) {
      throw new Error('Failed to delete campaign');
    }
  };

  return {
    campaigns,
    loading,
    error,
    createCampaign,
    updateCampaign,
    deleteCampaign,
    refresh: loadCampaigns,
  };
}