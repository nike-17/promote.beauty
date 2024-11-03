import React from 'react';

interface FooterProps {
  onSectionChange: (section: string) => void;
}

export default function Footer({ onSectionChange }: FooterProps) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <button
            onClick={() => onSectionChange('terms')}
            className="text-gray-400 hover:text-gray-500"
          >
            Terms
          </button>
          <button
            onClick={() => onSectionChange('privacy')}
            className="text-gray-400 hover:text-gray-500"
          >
            Privacy
          </button>
          <button
            onClick={() => onSectionChange('contact')}
            className="text-gray-400 hover:text-gray-500"
          >
            Contact
          </button>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <button
            onClick={() => onSectionChange('main')}
            className="text-center text-xs leading-5 text-gray-500 hover:text-gray-600"
          >
            &copy; {new Date().getFullYear()} Promote.Beauty. All rights reserved.
          </button>
        </div>
      </div>
    </footer>
  );
}