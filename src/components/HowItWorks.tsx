import React from 'react';
import { Target, BarChart, Sparkles } from 'lucide-react';

const steps = [
  {
    title: 'Create Your Campaign',
    description: 'Design beautiful ads that resonate with your target audience using our intuitive campaign builder.',
    icon: Sparkles,
  },
  {
    title: 'Target Your Audience',
    description: 'Reach potential clients in your area with precise targeting options and AI-powered optimization.',
    icon: Target,
  },
  {
    title: 'Track Results',
    description: 'Monitor campaign performance in real-time and make data-driven decisions to maximize ROI.',
    icon: BarChart,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-pink-600">Simple Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Promote.Beauty Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get your beauty business in front of more clients with our easy-to-use platform
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-lg bg-pink-100 p-4">
                  <step.icon className="h-6 w-6 text-pink-600" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  <span className="text-pink-600 mr-2">{index + 1}.</span>
                  {step.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}