import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
        <div className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Data Collection</h2>
          <p>
            We collect information that you provide directly to us, including personal information such as your name, email address, and business details.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Use of Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Process your transactions</li>
            <li>Send you technical notices and support messages</li>
            <li>Communicate with you about products, services, and events</li>
          </ul>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cookie Policy</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our service and hold certain information.
          </p>
        </div>
      </div>
    </div>
  );
}