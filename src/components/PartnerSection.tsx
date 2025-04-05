
import React from 'react';
import Button from './Button';
import GymCard from './GymCard';

const PartnerSection = () => {
  const partnerGyms = [
    {
      name: "FitLife Studio",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      location: "New York, NY",
      amenities: ["24/7 Access", "Sauna", "Personal Training"]
    },
    {
      name: "Elevation Fitness",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.6,
      location: "Los Angeles, CA",
      amenities: ["Pool", "Group Classes", "Nutrition"]
    },
    {
      name: "PowerHouse Gym",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      location: "Chicago, IL",
      amenities: ["CrossFit", "Heavy Weights", "Boxing"]
    },
    {
      name: "Zen Wellness Center",
      image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      location: "Austin, TX",
      amenities: ["Yoga", "Meditation", "Spa"]
    }
  ];

  const partnerLogos = [
    "Equinox", "Planet Fitness", "Gold's Gym", "Anytime Fitness", 
    "LA Fitness", "24 Hour Fitness", "Crunch Fitness", "Orange Theory"
  ];

  return (
    <section id="partners" className="py-24 relative bg-gymstr-navy/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gradient font-bold mb-4">Trusted Partners</h2>
          <p className="text-gymstr-beige/70 max-w-2xl mx-auto text-lg">
            Join the network of 5,000+ fitness locations providing members with seamless access.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerGyms.map((gym, index) => (
            <GymCard
              key={index}
              name={gym.name}
              image={gym.image}
              rating={gym.rating}
              location={gym.location}
              amenities={gym.amenities}
            />
          ))}
        </div>

        <div className="text-center mb-12">
          <Button size="lg">
            Browse All Gyms
          </Button>
        </div>

        <div className="mt-24">
          <p className="text-center text-gymstr-beige/50 text-sm uppercase tracking-wider mb-8">
            Major fitness chains available on our network
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {partnerLogos.map((logo, index) => (
              <div 
                key={index}
                className="text-gymstr-beige/40 hover:text-gymstr-beige transition-colors duration-300"
              >
                <div className="font-bold text-xl md:text-2xl">{logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
