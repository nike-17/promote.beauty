import React from 'react';

export default function Terms() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms of Service</h1>
        <div className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">1. Acceptance of Terms</h2>
          <p>
            By accessing and using BeautyAds, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">2. Service Description</h2>
          <p>
            BeautyAds provides digital advertising services specifically designed for beauty professionals and salons. Our platform enables users to create, manage, and optimize advertising campaigns.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">3. User Obligations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Use the service in a manner consistent with these terms</li>
          </ul>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">4. Payment Terms</h2>
          <p>
            Users agree to pay all fees associated with their chosen plan. All payments are non-refundable unless otherwise specified in our refund policy.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">5. Intellectual Property</h2>
          <p>
            All content and materials available on BeautyAds are protected by intellectual property rights. Users may not copy, modify, or distribute our content without permission.
          </p>
        </div>
      </div>
    </div>
  );
}