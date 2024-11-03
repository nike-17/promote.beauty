import React from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const stats = [
  { name: 'Active Salons', value: '1,000+', icon: Users, description: 'Beauty professionals trust us' },
  { name: 'Average ROI', value: '320%', icon: TrendingUp, description: 'Return on ad spend' },
  { name: 'Client Satisfaction', value: '98%', icon: Award, description: 'Happy customers' },
  { name: 'Global Reach', value: '25+', icon: Globe, description: 'Countries served' },
];

export default function Statistics() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Beauty Professionals Worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our platform delivers measurable results for salons of all sizes
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col bg-gray-50 p-8 hover:bg-gray-100 transition-colors">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-pink-600">
                  <stat.icon className="h-6 w-6 mx-auto mb-2" />
                  {stat.value}
                </dd>
                <dd className="text-sm text-gray-500 mt-1">{stat.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}