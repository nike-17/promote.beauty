import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Button from './Button';
import VideoModal from './VideoModal';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 50%, rgba(255,255,255,1) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-gray-900 sm:text-7xl fade-in">
          Beauty Marketing Platform for Salons
          <span className="relative whitespace-nowrap text-pink-500">
            <span className="relative"> That Works</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 fade-in delay-200">
          Launch professional ad campaigns that attract more clients to your salon. 
          Our platform makes it easy to create, manage, and optimize your beauty business advertising with proven results.
        </p>
        <div className="mt-10 flex justify-center gap-x-6 fade-in delay-400">
          <Button onClick={onGetStarted}>
            Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="secondary" onClick={() => setIsVideoModalOpen(true)}>
            Watch Success Stories <Play className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-8 text-sm text-gray-500 fade-in delay-600">
          <p>Trusted by 1,000+ beauty professionals</p>
          <p>Average ROI: 3.2x | Client satisfaction: 98%</p>
        </div>
      </div>

      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </div>
  );
}