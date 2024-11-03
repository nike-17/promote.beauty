import React from 'react';
import { Calendar, DollarSign, Target, BarChart2 } from 'lucide-react';
import { Campaign } from '../../types/campaign';

interface CampaignListProps {
  campaigns: Campaign[];
}

export default function CampaignList({ campaigns }: CampaignListProps) {
  if (campaigns.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
        <h3 className="mt-2 text-sm font-semibold text-gray-900">No campaigns yet</h3>
        <p className="mt-1 text-sm text-gray-500">Create your first campaign to get started</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((campaign) => (
        <div
          key={campaign.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              campaign.status === 'active' ? 'bg-green-100 text-green-800' :
              campaign.status === 'draft' ? 'bg-gray-100 text-gray-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{campaign.objective}</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(campaign.startDate).toLocaleDateString()}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <DollarSign className="h-4 w-4 mr-2" />
              ${campaign.budget}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Target className="h-4 w-4 mr-2" />
              {campaign.audience.split(',')[0]}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <BarChart2 className="h-4 w-4 mr-2" />
              {campaign.impressions.toLocaleString()} views
            </div>
          </div>

          <button className="mt-4 text-pink-600 hover:text-pink-700 text-sm font-medium">
            View Details →
          </button>
        </div>
      ))}
    </div>
  );
}