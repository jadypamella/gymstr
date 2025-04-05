import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Search, 
  Filter, 
  User, 
  Home, 
  Compass, 
  CalendarCheck, 
  Wallet, 
  Zap
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import GymCard from '@/components/GymCard';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Alex'); // This would come from user auth in a real app
  
  // Mock data for gyms - in a real app this would come from an API
  const nearbyGyms = [
    {
      id: 1,
      name: 'PowerFit Gym',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.8,
      location: 'Downtown',
      distance: '0.8 km',
      acceptsLightning: true,
      amenities: ['Free Wifi', 'Shower', 'Parking']
    },
    {
      id: 2,
      name: 'CrossTrain Center',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.6,
      location: 'Midtown',
      distance: '1.2 km',
      acceptsLightning: false,
      amenities: ['Towels', 'Sauna', 'Protein Bar']
    },
    {
      id: 3,
      name: 'FlexZone',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.9,
      location: 'Westside',
      distance: '2.5 km',
      acceptsLightning: true,
      amenities: ['Pool', '24/7 Access', 'Personal Trainers']
    },
    {
      id: 4,
      name: 'Iron Temple',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.7,
      location: 'North District',
      distance: '3.1 km',
      acceptsLightning: true,
      amenities: ['Classes', 'Boxing Ring', 'Supplements']
    }
  ];
  
  const allGyms = [
    {
      id: 5,
      name: 'Yoga Harmony',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.9,
      location: 'São Paulo',
      amenities: ['#Yoga', '#Meditation', '#Wellness']
    },
    {
      id: 6,
      name: 'Digital Fitness',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.5,
      location: 'Online',
      amenities: ['#HIIT', '#Virtual', '#Coaching']
    },
    {
      id: 7,
      name: 'MMA Center',
      image: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.7,
      location: 'Rio de Janeiro',
      amenities: ['#MMA', '#Boxing', '#Wrestling']
    },
    {
      id: 8,
      name: 'Alpine Fitness',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.8,
      location: 'Belo Horizonte',
      amenities: ['#Crossfit', '#Strength', '#Cardio']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gymstr-navy">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-gymstr-navy/90 backdrop-blur-md border-b border-gymstr-beige/10 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gymstr-beige">
              Welcome, <span className="text-gymstr-orange">{userName}</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gymstr-navy hover:bg-gymstr-beige/10 transition-colors">
              <MapPin className="h-5 w-5 text-gymstr-beige" />
            </button>
            <button className="p-2 rounded-full bg-gymstr-navy hover:bg-gymstr-beige/10 transition-colors">
              <User className="h-5 w-5 text-gymstr-beige" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-20">
        <div className="container mx-auto px-4 py-6 space-y-8">
          {/* Search and Filter */}
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gymstr-beige/50" />
              </div>
              <input
                type="text"
                placeholder="Search gyms, classes, trainers..."
                className="w-full bg-gymstr-navy/70 border border-gymstr-beige/20 rounded-lg py-2 pl-10 pr-4 text-gymstr-beige placeholder:text-gymstr-beige/50 focus:outline-none focus:ring-1 focus:ring-gymstr-orange/50"
              />
            </div>
            <button className="p-2 rounded-lg bg-gymstr-navy border border-gymstr-beige/20 hover:bg-gymstr-beige/10 transition-colors">
              <Filter className="h-5 w-5 text-gymstr-beige" />
            </button>
          </div>

          {/* Nearby Gyms Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gymstr-beige">Nearby Gyms</h2>
                <p className="text-sm text-gymstr-beige/70">Based on your current location</p>
              </div>
            </div>
            
            <ScrollArea className="w-full">
              <div className="flex space-x-4 pb-4 pt-2 px-1">
                {nearbyGyms.map((gym) => (
                  <div key={gym.id} className="min-w-[280px] w-[280px]">
                    <GymCard 
                      name={gym.name}
                      image={gym.image}
                      rating={gym.rating}
                      location={gym.location}
                      amenities={gym.amenities}
                      distance={gym.distance}
                      acceptsLightning={gym.acceptsLightning}
                    />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </section>

          {/* All Gyms Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gymstr-beige">Explore All Gyms</h2>
                <p className="text-sm text-gymstr-beige/70">Discover other options in our network</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {allGyms.map((gym) => (
                <div key={gym.id}>
                  <GymCard 
                    name={gym.name}
                    image={gym.image}
                    rating={gym.rating}
                    location={gym.location}
                    amenities={gym.amenities}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-gymstr-navy/90 backdrop-blur-md border-t border-gymstr-beige/10 px-2 pt-2 pb-6">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center justify-center p-2 text-gymstr-orange">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center p-2 text-gymstr-beige/70 hover:text-gymstr-beige">
            <Compass className="h-5 w-5" />
            <span className="text-xs mt-1">Discover</span>
          </button>
          <button className="flex flex-col items-center justify-center p-2 text-gymstr-beige/70 hover:text-gymstr-beige">
            <CalendarCheck className="h-5 w-5" />
            <span className="text-xs mt-1">Bookings</span>
          </button>
          <button className="flex flex-col items-center justify-center p-2 text-gymstr-beige/70 hover:text-gymstr-beige">
            <Wallet className="h-5 w-5" />
            <span className="text-xs mt-1">Wallet</span>
          </button>
          <button className="flex flex-col items-center justify-center p-2 text-gymstr-beige/70 hover:text-gymstr-beige">
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
