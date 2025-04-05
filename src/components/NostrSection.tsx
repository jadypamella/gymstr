
import React from 'react';
import { Shield, Lock, UserCog, Zap } from 'lucide-react';
import Button from './Button';

const NostrSection = () => {
  const benefits = [
    {
      icon: <Shield className="text-gymstr-orange" size={32} />,
      title: "Enhanced Privacy",
      description: "Your fitness data belongs to you, not corporations. Nostr ensures your workout history stays private."
    },
    {
      icon: <Lock className="text-gymstr-orange" size={32} />,
      title: "Self-Custody",
      description: "Own your identity and data with cryptographic keys only you control."
    },
    {
      icon: <UserCog className="text-gymstr-orange" size={32} />,
      title: "User Control",
      description: "You decide what information to share and with whom."
    },
    {
      icon: <Zap className="text-gymstr-orange" size={32} />,
      title: "Lightning Fast",
      description: "Seamless authentication and payments with Lightning Network integration."
    }
  ];

  return (
    <section id="nostr" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gymstr-navy/95 via-gymstr-navy/90 to-gymstr-navy/95 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gradient font-bold mb-4">Nostr Protocol Integration</h2>
          <p className="text-gymstr-beige/70 max-w-2xl mx-auto text-lg">
            You're in control. Not the algorithm.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="glass rounded-xl p-6 md:p-8 border border-gymstr-beige/10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gymstr-orange/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-gymstr-redOrange/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gymstr-beige mb-6">How Nostr Works with GYMSTR</h3>
              
              {/* Improved Diagram with visual connections */}
              <div className="relative my-8 bg-black/20 p-6 rounded-lg">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gymstr-orange via-gymstr-orange/50 to-transparent"></div>
                
                {/* Step 1 */}
                <div className="mb-10 ml-16 relative">
                  <div className="absolute -left-16 w-8 h-8 rounded-full bg-gymstr-orange flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div className="absolute -left-8 top-4 w-8 h-0.5 bg-gymstr-orange/70"></div>
                  <h4 className="text-lg font-semibold text-gymstr-beige mb-2">Create your Nostr identity</h4>
                  <p className="text-gymstr-beige/70">Generate your cryptographic keys that uniquely identify you on the network.</p>
                </div>
                
                {/* Step 2 */}
                <div className="mb-10 ml-16 relative">
                  <div className="absolute -left-16 w-8 h-8 rounded-full bg-gymstr-orange flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div className="absolute -left-8 top-4 w-8 h-0.5 bg-gymstr-orange/70"></div>
                  <h4 className="text-lg font-semibold text-gymstr-beige mb-2">Authenticate with GYMSTR</h4>
                  <p className="text-gymstr-beige/70">Securely log in without passwords using your Nostr keys.</p>
                </div>
                
                {/* Step 3 */}
                <div className="mb-10 ml-16 relative">
                  <div className="absolute -left-16 w-8 h-8 rounded-full bg-gymstr-orange flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div className="absolute -left-8 top-4 w-8 h-0.5 bg-gymstr-orange/70"></div>
                  <h4 className="text-lg font-semibold text-gymstr-beige mb-2">Access fitness facilities</h4>
                  <p className="text-gymstr-beige/70">Your encrypted Nostr identity grants you access to GYMSTR partner locations.</p>
                </div>
                
                {/* Step 4 */}
                <div className="ml-16 relative">
                  <div className="absolute -left-16 w-8 h-8 rounded-full bg-gymstr-orange flex items-center justify-center">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div className="absolute -left-8 top-4 w-8 h-0.5 bg-gymstr-orange/70"></div>
                  <h4 className="text-lg font-semibold text-gymstr-beige mb-2">Process payments</h4>
                  <p className="text-gymstr-beige/70">Use Lightning Network for fast, secure, and low-fee payments.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="inline-block px-3 py-1 bg-gymstr-orange/20 text-gymstr-orange rounded-full text-sm font-medium">
                  Nostr Verified Identity
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-3xl font-bold text-gymstr-beige">Why Nostr Matters</h3>
            <p className="text-gymstr-beige/70">
              The Nostr protocol puts you in complete control of your fitness journey, providing unprecedented privacy and security in a way that traditional centralized fitness platforms cannot match.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass rounded-lg p-5 border border-gymstr-beige/10 hover:border-gymstr-orange/20 transition-all duration-300">
                  <div className="mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-semibold text-gymstr-beige mb-2">{benefit.title}</h4>
                  <p className="text-gymstr-beige/70 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <Button>
              Learn More About Nostr
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NostrSection;
