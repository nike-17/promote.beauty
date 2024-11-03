export interface Campaign {
  id: string;
  name: string;
  objective: string;
  budget: string;
  audience: string;
  startDate: string;
  endDate: string;
  status: 'draft' | 'active' | 'completed';
  impressions: number;
  clicks?: number;
  conversions?: number;
}