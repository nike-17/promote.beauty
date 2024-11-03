import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../Button';
import CampaignList from './CampaignList';
import CampaignModal from './CampaignModal';
import { useCampaigns } from '../../hooks/useCampaigns';

export default function CampaignDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { campaigns, loading, error, createCampaign } = useCampaigns();

  const handleCreateCampaign = async (campaignData: any) => {
    try {
      await createCampaign(campaignData);
      setIsModalOpen(false);
    } catch (err) {
      console.error('Failed to create campaign:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">Failed to load campaigns. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Your Campaigns</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Campaign
        </Button>
      </div>

      <CampaignList campaigns={campaigns} />
      
      <CampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateCampaign}
      />
    </div>
  );
}