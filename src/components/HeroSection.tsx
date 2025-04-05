
import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gymstr-navy via-gymstr-navy/95 to-gymstr-navy z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXY1aC0xdi01em0xNi0xM2gxdjFoLTF2LTF6bTAtMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-gradient font-extrabold leading-tight">
              Reclaim Your Routine.<br />
              <span className="text-gymstr-orange">Anywhere. Anytime.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gymstr-beige/80 max-w-lg">
              Decentralize your workout with GYMSTR. Access thousands of gyms worldwide with blockchain-powered freedom.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Explore Gyms
              </Button>
            </div>
            <p className="text-gymstr-beige/60 text-sm">
              No credit card required. Cancel anytime.
            </p>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              {/* Animated gradient glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gymstr-orange to-gymstr-redOrange rounded-2xl blur-lg opacity-50 animate-pulse"></div>
              
              {/* Hero image */}
              <div className="relative bg-gradient-to-br from-gymstr-navy/80 to-gymstr-navy rounded-2xl overflow-hidden border border-gymstr-beige/10">
                <div className="aspect-[4/3] md:aspect-[16/9]">
                  <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Fitness enthusiast at the gym" 
                    className="w-full h-full object-cover object-center opacity-70"
                  />
                </div>
                
                {/* Overlay elements */}
                <div className="absolute inset-0 flex items-end p-6 md:p-8">
                  <div className="glass rounded-lg p-4 md:p-6 w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gymstr-beige/80">NEAREST GYM</p>
                        <p className="font-bold text-lg">FitLife Studio</p>
                        <p className="text-sm text-gymstr-beige/70">0.8 miles away</p>
                      </div>
                      <Button>Check In Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-gymstr-beige/60 text-sm mb-2">Scroll to explore</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
