
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import PartnerSection from '@/components/PartnerSection';
import AppPreview from '@/components/AppPreview';
import NostrSection from '@/components/NostrSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gymstr-navy text-gymstr-beige overflow-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <PartnerSection />
      <AppPreview />
      <NostrSection />
      <Footer />
    </div>
  );
};

export default Index;
