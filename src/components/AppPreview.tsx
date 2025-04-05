
import React from 'react';
import Button from './Button';
import { MapPin, ShieldCheck, Wallet, Smartphone } from 'lucide-react';

const AppPreview = () => {
  const features = [
    {
      icon: <MapPin className="text-gymstr-orange bg-gymstr-orange/10 p-2 rounded-lg" size={48} />,
      title: "Gym Finder",
      description: "Discover nearby gyms and filter by amenities, hours, and more."
    },
    {
      icon: <ShieldCheck className="text-gymstr-orange bg-gymstr-orange/10 p-2 rounded-lg" size={48} />,
      title: "Secure Check-in",
      description: "Contactless entry with QR code verification."
    },
    {
      icon: <Wallet className="text-gymstr-orange bg-gymstr-orange/10 p-2 rounded-lg" size={48} />,
      title: "Nostr Wallet",
      description: "Integrated payments and rewards system."
    }
  ];

  return (
    <section id="app" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gymstr-navy/95 via-gymstr-navy to-gymstr-navy/95 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXY1aC0xdi01em0xNi0xM2gxdjFoLTF2LTF6bTAtMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-gradient font-bold mb-4">Power in Your Pocket</h2>
          <p className="text-gymstr-beige/70 max-w-2xl mx-auto text-lg">
            The GYMSTR mobile app gives you everything you need for a seamless fitness experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Phone mockup with gradient glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gymstr-orange to-gymstr-redOrange rounded-3xl blur-lg opacity-40 animate-pulse"></div>
              
              <div className="relative border-8 border-gymstr-navy/80 rounded-[2.5rem] overflow-hidden bg-black shadow-lg">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gymstr-navy/80 rounded-b-xl z-10"></div>
                <div className="w-64 md:w-72 aspect-[9/19]">
                  {/* App screen mockup */}
                  <div className="w-full h-full relative bg-gymstr-navy/90">
                    {/* App UI elements */}
                    <div className="flex flex-col h-full">
                      {/* Status bar */}
                      <div className="p-2 flex justify-between items-center">
                        <span className="text-xs text-gymstr-beige">9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 rounded-full bg-gymstr-orange"></div>
                          <div className="w-3 h-3 rounded-full bg-gymstr-beige"></div>
                        </div>
                      </div>
                      
                      {/* App content */}
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-center mb-6">
                          <div>
                            <p className="text-xs text-gymstr-beige/70">Hello,</p>
                            <p className="text-lg font-bold text-gymstr-beige">Alex</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gymstr-orange flex items-center justify-center">
                            <span className="text-sm font-bold">A</span>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3 mb-4">
                          <p className="text-xs text-gymstr-beige/70">ACTIVE MEMBERSHIP</p>
                          <p className="text-sm font-bold text-gymstr-beige">Unlimited Pro</p>
                          <div className="mt-2 w-full bg-black/20 rounded-full h-1.5">
                            <div className="bg-gymstr-orange h-1.5 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <p className="text-xs text-gymstr-beige/70 mt-1">22 days remaining</p>
                        </div>
                        
                        <p className="text-xs text-gymstr-beige/70 mb-2">NEARBY GYMS</p>
                        
                        <div className="space-y-3">
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex justify-between">
                              <div>
                                <p className="text-sm font-semibold text-gymstr-beige">FitLife Studio</p>
                                <p className="text-xs text-gymstr-beige/70">0.8 miles away</p>
                              </div>
                              <button className="bg-gymstr-orange text-white text-xs px-3 py-1 rounded-full">
                                Check In
                              </button>
                            </div>
                          </div>
                          
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex justify-between">
                              <div>
                                <p className="text-sm font-semibold text-gymstr-beige">PowerHouse Gym</p>
                                <p className="text-xs text-gymstr-beige/70">1.2 miles away</p>
                              </div>
                              <button className="bg-gymstr-orange text-white text-xs px-3 py-1 rounded-full">
                                Check In
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom nav */}
                      <div className="p-2 border-t border-white/10 flex justify-around">
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-gymstr-orange"></div>
                          <span className="text-xs text-gymstr-orange">Home</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-white/20"></div>
                          <span className="text-xs text-gymstr-beige/50">Explore</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-white/20"></div>
                          <span className="text-xs text-gymstr-beige/50">Profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-3xl font-bold text-gymstr-beige">Everything You Need in One App</h3>
            <p className="text-gymstr-beige/70">
              The GYMSTR app puts the power of decentralized fitness in your pocket. Find, access, and manage your gym experience with ease.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gymstr-beige mb-1">{feature.title}</h4>
                    <p className="text-gymstr-beige/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button>
                <Smartphone size={18} className="mr-2" />
                Download App
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
