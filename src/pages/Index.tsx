
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import PartnerSection from '@/components/PartnerSection';
import AppPreview from '@/components/AppPreview';
import NostrSection from '@/components/NostrSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import NostrLogin from '@/components/NostrLogin';

const Index = () => {
  return (
    <div className="min-h-screen bg-gymstr-navy text-gymstr-beige overflow-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <PartnerSection />
      <AppPreview />
      <NostrSection />
      
      {/* Add NostrLogin Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gymstr-navy/90 via-gymstr-navy to-gymstr-navy/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-gradient font-bold mb-4">Access Your GYMSTR Account</h2>
            <p className="text-gymstr-beige/70 max-w-2xl mx-auto text-lg">
              Sign in with your Nostr identity for a decentralized fitness experience
            </p>
          </div>
          
          <NostrLogin />
        </div>
      </section>
      
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
