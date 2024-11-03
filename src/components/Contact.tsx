import React, { useState } from 'react';
import Button from './Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
            <Mail className="h-8 w-8 text-pink-500" />
            <h3 className="mt-4 text-lg font-semibold">Email</h3>
            <p className="mt-2 text-gray-600">support@promote.beauty</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
            <Phone className="h-8 w-8 text-pink-500" />
            <h3 className="mt-4 text-lg font-semibold">Phone</h3>
            <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
            <MapPin className="h-8 w-8 text-pink-500" />
            <h3 className="mt-4 text-lg font-semibold">Office</h3>
            <p className="mt-2 text-gray-600">Seattle, WA</p>
          </div>
        </div>

        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
}