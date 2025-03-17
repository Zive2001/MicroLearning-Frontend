import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import NavigationCardsSection from '../components/NavigationCardsSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      <main>
        <HeroSection />
        <NavigationCardsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Landing;