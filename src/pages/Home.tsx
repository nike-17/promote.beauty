import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Terms from '../components/Terms';
import Privacy from '../components/Privacy';
import Contact from '../components/Contact';

export default function Home() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('main');

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <div className="bg-white">
      {currentSection === 'main' ? (
        <>
          <Hero onGetStarted={handleGetStarted} />
          <Statistics />
          <HowItWorks />
          <Features />
          <Testimonials />
          <Pricing />
          <CTA />
        </>
      ) : currentSection === 'terms' ? (
        <Terms />
      ) : currentSection === 'privacy' ? (
        <Privacy />
      ) : currentSection === 'contact' ? (
        <Contact />
      ) : null}
      
      <Footer onSectionChange={setCurrentSection} />
    </div>
  );
}