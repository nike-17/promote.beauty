import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import Button from './Button';

const Step1 = ({ onNext }: { onNext?: () => void }) => (
  <div className="text-center fade-in">
    <h2 className="text-2xl font-bold text-gray-900">Welcome to Promote.Beauty</h2>
    <p className="mt-4 text-lg text-gray-600">
      Let's get your beauty business ready to reach more customers through targeted advertising.
    </p>
    <div className="mt-8 flex justify-end">
      <Button onClick={onNext}>
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </div>
);

const Step2 = ({ onNext, onBack }: { onNext?: () => void; onBack?: () => void }) => (
  <div className="text-center fade-in">
    <h2 className="text-2xl font-bold text-gray-900">Choose Your Plan</h2>
    <p className="mt-4 text-lg text-gray-600">
      Select the advertising plan that best fits your salon's needs.
    </p>
    <div className="mt-8 flex justify-between">
      <Button variant="secondary" onClick={onBack}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <Button onClick={onNext}>
        Continue <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </div>
);

const Step3 = ({ onBack }: { onBack?: () => void }) => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = () => {
    loginWithRedirect({
      appState: { returnTo: '/campaigns' },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  return (
    <div className="text-center fade-in">
      <h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
      <p className="mt-4 text-lg text-gray-600">
        Set up your account to start creating beautiful ad campaigns.
      </p>
      <div className="mt-8 flex justify-between">
        <Button variant="secondary" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button onClick={handleSignUp}>
          Sign Up <Check className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {currentStep === 1 && <Step1 onNext={handleNext} />}
        {currentStep === 2 && <Step2 onNext={handleNext} onBack={handleBack} />}
        {currentStep === 3 && <Step3 onBack={handleBack} />}
      </div>
    </div>
  );
}