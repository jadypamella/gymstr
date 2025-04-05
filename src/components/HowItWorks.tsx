
import React from 'react';
import { UserPlus, MapPin, CheckCircle, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="text-gymstr-orange" size={48} />,
      title: "Create your decentralized profile",
      description: "Sign up with Nostr for complete ownership and privacy of your fitness data."
    },
    {
      icon: <MapPin className="text-gymstr-orange" size={48} />,
      title: "Find local gyms and studios",
      description: "Discover thousands of participating fitness locations worldwide."
    },
    {
      icon: <CheckCircle className="text-gymstr-orange" size={48} />,
      title: "Check in with one tap",
      description: "Frictionless entry with secure QR code verification."
    },
    {
      icon: <BarChart3 className="text-gymstr-orange" size={48} />,
      title: "Track progress and earn rewards",
      description: "Monitor your fitness journey and earn exclusive benefits."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gymstr-navy via-gymstr-navy/95 to-gymstr-navy z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gradient font-bold mb-4">How It Works</h2>
          <p className="text-gymstr-beige/70 max-w-2xl mx-auto text-lg">
            GYMSTR makes accessing fitness facilities seamless through decentralized technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass rounded-xl p-6 border border-gymstr-beige/10 hover:border-gymstr-orange/30 transition-all duration-300 hover-scale"
            >
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-gymstr-orange/10 p-4">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
              <p className="text-gymstr-beige/70 text-center">{step.description}</p>
              <div className="mt-6 flex justify-center">
                <span className="bg-gymstr-orange/20 text-gymstr-orange rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
