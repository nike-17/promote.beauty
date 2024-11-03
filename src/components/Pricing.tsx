import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Pay-As-You-Go',
    description: 'Perfect for small salons starting their advertising journey.',
    price: '0',
    features: [
      '$50 free starter credit',
      'No monthly fees',
      'Basic targeting options',
      'Core analytics dashboard',
      'Pay only for what you use',
      'Sliding fee scale (5-10%)',
    ],
    cta: 'Start for free',
    featured: false,
  },
  {
    name: 'Standard',
    description: 'Best for growing salons with consistent ad needs.',
    price: '99',
    features: [
      '$100 monthly ad credit',
      '5% platform fee on extra spend',
      '200 included clicks',
      'Advanced targeting',
      'Full analytics suite',
      'Priority support',
    ],
    cta: 'Get started',
    featured: true,
  },
  {
    name: 'Pro',
    description: 'For established salons seeking maximum growth.',
    price: '399',
    features: [
      '$500 monthly ad credit',
      '3% platform fee on extra spend',
      '1,000 clicks + 100 conversions',
      'Premium targeting',
      'Advanced analytics & reporting',
      'Dedicated support manager',
    ],
    cta: 'Contact sales',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center fade-in">
          <h2 className="text-base font-semibold leading-7 text-pink-500">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the perfect plan for your salon
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 fade-in delay-200">
          Start with $50 in free credits and choose a plan that grows with your business
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 ring-1 pricing-card fade-in delay-${index * 200} ${
                tier.featured
                  ? 'bg-gray-900 ring-gray-900 lg:order-none'
                  : 'ring-gray-200 lg:order-none'
              }`}
            >
              <h3
                className={`text-lg font-semibold leading-8 ${
                  tier.featured ? 'text-white' : 'text-gray-900'
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-4 text-sm leading-6 ${
                  tier.featured ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.featured ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  ${tier.price}
                </span>
                {tier.price !== '0' && (
                  <span
                    className={`text-sm font-semibold leading-6 ${
                      tier.featured ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    /month
                  </span>
                )}
              </p>
              <ul
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tier.featured ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={`h-6 w-5 flex-none ${
                        tier.featured ? 'text-white' : 'text-pink-500'
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold button-pop focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline-white'
                    : 'bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline-gray-900'
                }`}
              >
                {tier.cta} <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 fade-in delay-600">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Enterprise Solutions
          </h3>
          <div className="rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-200 pricing-card">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">
                Custom Enterprise Plans
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Perfect for large salon chains and beauty brands with high ad spend needs
              </p>
              <button className="mt-6 rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 button-pop">
                Contact our sales team <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}