import React from 'react';
import { Sparkles, BarChart3, Target, Users } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Targeting',
    description: 'Our intelligent targeting system analyzes beauty consumer behavior to reach your ideal clients with 92% accuracy.',
    icon: Target,
    stats: '2.4x higher engagement'
  },
  {
    name: 'Real-time Analytics',
    description: 'Track campaign performance with detailed metrics and actionable insights. Average ROI improvement of 47%.',
    icon: BarChart3,
    stats: '47% ROI increase'
  },
  {
    name: 'Easy Campaign Creation',
    description: 'Create professional beauty ad campaigns in minutes with our intuitive drag-and-drop interface. No design skills needed.',
    icon: Sparkles,
    stats: '15 min setup time'
  },
  {
    name: 'Client Insights',
    description: 'Understand your target market with detailed demographic and behavioral data specific to the beauty industry.',
    icon: Users,
    stats: '85% client match rate'
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center fade-in">
          <h2 className="text-base font-semibold leading-7 text-pink-500">Grow Your Beauty Business</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Complete Beauty Marketing Solution
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools beauty professionals need to create successful advertising campaigns
            that consistently bring in high-value clients.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className={`flex flex-col feature-card p-6 rounded-xl fade-in delay-${index * 200}`}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-pink-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-4 text-sm font-medium text-pink-600">{feature.stats}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}