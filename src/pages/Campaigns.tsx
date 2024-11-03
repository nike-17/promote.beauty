import { useAuth0 } from '@auth0/auth0-react';
import CampaignDashboard from '../components/campaigns/CampaignDashboard';

export default function Campaigns() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return <CampaignDashboard />;
}