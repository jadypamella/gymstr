
import React, { useState } from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for casual gym-goers",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Access to 500+ gyms",
        "1 check-in per day",
        "Basic fitness tracking",
        "Nostr identity integration"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      description: "For regular fitness enthusiasts",
      monthlyPrice: 59,
      annualPrice: 590,
      features: [
        "Access to 2,000+ gyms",
        "3 check-ins per day",
        "Advanced fitness tracking",
        "Nostr identity integration",
        "Class reservations",
        "Fitness assessment tools"
      ],
      highlighted: false
    },
    {
      name: "Unlimited",
      description: "Ultimate flexibility for fitness lovers",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Access to 5,000+ gyms worldwide",
        "Unlimited check-ins",
        "Premium fitness tracking",
        "Nostr identity integration",
        "Priority class reservations",
        "Fitness assessment tools",
        "Personal training discounts",
        "Premium partner benefits"
      ],
      highlighted: true
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gymstr-navy/95 via-gymstr-navy/90 to-gymstr-navy/95 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gradient font-bold mb-4">Pricing Plans</h2>
          <p className="text-gymstr-beige/70 max-w-2xl mx-auto text-lg">
            Choose a plan that works for your fitness lifestyle.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center bg-gymstr-navy/50 p-1 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-gymstr-orange text-white'
                  : 'text-gymstr-beige/70 hover:text-gymstr-beige'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'annual'
                  ? 'bg-gymstr-orange text-white'
                  : 'text-gymstr-beige/70 hover:text-gymstr-beige'
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            
            return (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-gymstr-orange to-gymstr-redOrange translate-y-0 hover:-translate-y-2 shadow-xl shadow-gymstr-orange/20'
                    : 'glass border border-gymstr-beige/10 hover:border-gymstr-orange/20 hover:-translate-y-2'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-gymstr-redOrange text-white py-2 text-center text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-6 md:p-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gymstr-beige'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.highlighted ? 'text-white/80' : 'text-gymstr-beige/70'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gymstr-beige'}`}>
                      ${price}
                    </span>
                    <span className={`ml-2 ${plan.highlighted ? 'text-white/80' : 'text-gymstr-beige/70'}`}>
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  
                  <Button
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    className={`w-full mb-8 ${plan.highlighted ? 'bg-white text-gymstr-orange hover:bg-white/90' : ''}`}
                  >
                    Choose {plan.name}
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check
                          className={`mr-3 mt-1 flex-shrink-0 ${
                            plan.highlighted ? 'text-white' : 'text-gymstr-orange'
                          }`}
                          size={18}
                        />
                        <span className={plan.highlighted ? 'text-white/90' : 'text-gymstr-beige/80'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-4 border-t border-white/10">
                    <div className={`flex items-center ${
                      plan.highlighted ? 'text-white/80' : 'text-gymstr-beige/70'
                    }`}>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Pay with Nostr wallet</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
