import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Search, 
  Filter, 
  Home, 
  Wallet, 
  User,
  LogOut, 
  Star,
  X,
  Check,
  Globe,
  Lock,
  Zap
} from 'lucide-react';
import Footer from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedGym, setSelectedGym] = useState<any>(null);
  const [showMembershipDialog, setShowMembershipDialog] = useState(false);
  const [showGymDetails, setShowGymDetails] = useState(false);
  
  const user = {
    name: "Alex Johnson",
    location: "São Paulo, Brazil",
    membershipActive: true,
    lastCheckIn: "Today, 8:30am",
    avatarUrl: "/lovable-uploads/35320248-e39b-4528-ac5c-40dce0880d8b.png"
  };
  
  const nearbyGyms = [
    {
      id: 1,
      name: 'PowerFit Gym',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.8,
      location: 'Downtown',
      distance: '0.8 km',
      acceptsLightning: true,
      amenities: ['Free Wifi', 'Shower', 'Parking'],
      description: 'A modern fitness center with state-of-the-art equipment and experienced trainers.',
      gallery: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      ]
    },
    {
      id: 2,
      name: 'CrossTrain Center',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.6,
      location: 'Midtown',
      distance: '1.2 km',
      acceptsLightning: false,
      amenities: ['Towels', 'Sauna', 'Protein Bar'],
      description: 'Specialized in high-intensity functional training and CrossFit classes.',
      gallery: [
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      ]
    },
    {
      id: 3,
      name: 'FlexZone',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.9,
      location: 'Westside',
      distance: '2.5 km',
      acceptsLightning: true,
      amenities: ['Pool', '24/7 Access', 'Personal Trainers'],
      description: 'A premium fitness club with pool, spa facilities, and comprehensive training programs.',
      gallery: [
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      ]
    },
    {
      id: 4,
      name: 'Iron Temple',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.7,
      location: 'North District',
      distance: '3.1 km',
      acceptsLightning: true,
      amenities: ['Classes', 'Boxing Ring', 'Supplements'],
      description: 'Focused on weightlifting and strength training with expert coaches.',
      gallery: [
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      ]
    }
  ];

  const allGyms = [
    {
      id: 5,
      name: 'Yoga Harmony',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.9,
      location: 'São Paulo',
      amenities: ['#Yoga', '#Meditation', '#Wellness'],
      acceptsLightning: true,
      description: 'A peaceful sanctuary offering various yoga styles and meditation practices.',
      gallery: [
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      ]
    },
    {
      id: 6,
      name: 'Digital Fitness',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.5,
      location: 'Online',
      amenities: ['#HIIT', '#Virtual', '#Coaching'],
      acceptsLightning: false,
      description: 'Access virtual training sessions and personalized coaching from anywhere.',
      gallery: [
        'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      ]
    },
    {
      id: 7,
      name: 'MMA Center',
      image: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.7,
      location: 'Rio de Janeiro',
      amenities: ['#MMA', '#Boxing', '#Wrestling'],
      acceptsLightning: true,
      description: 'Comprehensive mixed martial arts training for all levels.',
      gallery: [
        'https://images.unsplash.com/photo-1564415637254-92c66292cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      ]
    },
    {
      id: 8,
      name: 'Alpine Fitness',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.8,
      location: 'Belo Horizonte',
      amenities: ['#Crossfit', '#Strength', '#Cardio'],
      acceptsLightning: true,
      description: 'High-altitude training and modern equipment for optimum fitness results.',
      gallery: [
        'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1564415637254-92c66292cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      ]
    },
    {
      id: 9,
      name: 'Urban Fitness Hub',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.6,
      location: 'São Paulo',
      amenities: ['#Functional', '#Group', '#Circuit'],
      acceptsLightning: false,
      description: 'Downtown fitness center specializing in group classes and circuit training.',
      gallery: [
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      ]
    },
    {
      id: 10,
      name: 'Mindful Movement',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4.9,
      location: 'Brasilia',
      amenities: ['#Pilates', '#Yoga', '#Rehab'],
      acceptsLightning: true,
      description: 'Focused on pilates, rehabilitation and mindful movement practices.',
      gallery: [
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1564415637254-92c66292cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      ]
    }
  ];

  const openGymDetails = (gym) => {
    setSelectedGym(gym);
    setShowGymDetails(true);
  };

  const openMembershipDialog = (gym) => {
    setSelectedGym(gym);
    setShowMembershipDialog(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-[#E2E8F0]">
      <header className="sticky top-0 z-30 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/05cc5987-1dba-47d1-b472-86707d23fd9d.png" 
              alt="Gymstr" 
              className="h-8 md:h-10"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="font-medium text-[#E2E8F0] hover:text-white transition-colors">Home</a>
            <a href="/dashboard" className="font-medium text-gymstr-orange hover:text-gymstr-orange/80 transition-colors">Dashboard</a>
            <a href="#wallet" className="font-medium text-[#E2E8F0] hover:text-white transition-colors">Wallet</a>
            <a href="/profile" className="font-medium text-[#E2E8F0] hover:text-white transition-colors">Profile</a>
            <button className="font-medium text-[#E2E8F0] hover:text-white transition-colors flex items-center gap-1">
              <LogOut size={18} /> Log out
            </button>
          </div>
          
          <div className="flex md:hidden items-center space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  <User className="h-5 w-5" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="bg-[#1E293B] border-white/10 text-[#E2E8F0] w-52">
                <div className="flex flex-col space-y-2">
                  <a href="/" className="px-3 py-2 hover:bg-white/10 rounded-md flex items-center gap-2">
                    <Home size={16} /> Home
                  </a>
                  <a href="/dashboard" className="px-3 py-2 bg-white/10 rounded-md flex items-center gap-2 text-gymstr-orange">
                    <Home size={16} /> Dashboard
                  </a>
                  <a href="#wallet" className="px-3 py-2 hover:bg-white/10 rounded-md flex items-center gap-2">
                    <Wallet size={16} /> Wallet
                  </a>
                  <a href="/profile" className="px-3 py-2 hover:bg-white/10 rounded-md flex items-center gap-2">
                    <User size={16} /> Profile
                  </a>
                  <button className="px-3 py-2 hover:bg-white/10 rounded-md flex items-center gap-2 text-left">
                    <LogOut size={16} /> Log out
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-6 space-y-10">
          <section className="bg-[#1E293B] rounded-lg p-6 border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage 
                    src={user.avatarUrl} 
                    alt={user.name} 
                    className="object-cover"
                  />
                  <AvatarFallback>
                    <User className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-[#E2E8F0]/70 flex items-center gap-1">
                    <MapPin size={16} /> {user.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div className="bg-[#22C55E]/20 text-[#22C55E] px-3 py-1 rounded-full text-sm font-medium">
                  {user.membershipActive ? "Active Membership" : "No Active Membership"}
                </div>
                <p className="text-sm text-[#E2E8F0]/70 mt-1">Last check-in: {user.lastCheckIn}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Gyms Near You</h2>
            
            <div className="relative w-full h-[400px] mb-6 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14628.393635398498!2d-46.65841!3d-23.56478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1617718615377!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                className="border-0"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              {nearbyGyms.map((gym) => (
                <Popover key={gym.id}>
                  <PopoverTrigger asChild>
                    <button 
                      className="absolute z-20 bg-gymstr-orange text-white p-1 rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                      style={{ 
                        top: `${Math.random() * 60 + 20}%`, 
                        left: `${Math.random() * 60 + 20}%` 
                      }}
                    >
                      <MapPin size={18} fill="currentColor" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-0 bg-[#1E293B] border-white/10">
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{gym.name}</h3>
                      <div className="flex justify-between items-center mt-1 mb-2">
                        <div className="flex items-center text-sm">
                          <MapPin size={14} className="mr-1 text-gymstr-beige/70" />
                          <span>{gym.distance}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Star size={14} className="mr-1 text-yellow-500 fill-yellow-500" />
                          <span>{gym.rating}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1 bg-transparent text-[#F7931A] border-[#F7931A] hover:bg-[#F7931A]/10"
                          onClick={() => openGymDetails(gym)}
                        >
                          View Details
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1 bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
                          onClick={() => openMembershipDialog(gym)}
                        >
                          Join
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
            
            <h3 className="text-xl font-medium mb-4">Top Picks Nearby</h3>
            <ScrollArea className="w-full">
              <div className="flex space-x-4 pb-4 pt-2 px-1">
                {nearbyGyms.map((gym) => (
                  <div key={gym.id} className="min-w-[280px] w-[280px]">
                    <Card className="bg-[#1E293B] border-white/10 overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <img 
                          src={gym.image} 
                          alt={gym.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute top-3 right-3">
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <Star className="text-yellow-500 fill-yellow-500 mr-1" size={16} />
                              <span className="text-white font-medium">{gym.rating}</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm text-white py-1 px-2 rounded-md text-xs">
                              {gym.distance}
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg">{gym.name}</h3>
                        <div className="flex items-center text-[#E2E8F0]/70 mb-2">
                          <MapPin size={14} className="mr-1" />
                          <span className="text-sm">{gym.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {gym.amenities.map((amenity, index) => (
                            <span 
                              key={index} 
                              className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-[#E2E8F0]/80"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex gap-2">
                        <Button 
                          variant="outline" 
                          className="flex-1 bg-transparent text-[#F7931A] border-[#F7931A] hover:bg-[#F7931A]/10"
                          onClick={() => openGymDetails(gym)}
                        >
                          View Details
                        </Button>
                        <Button 
                          className="flex-1 bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
                          onClick={() => openMembershipDialog(gym)}
                        >
                          Join
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Explore All Gyms</h2>
              
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="h-4 w-4 absolute top-1/2 left-3 transform -translate-y-1/2 text-[#E2E8F0]/50" />
                  <input
                    type="text"
                    placeholder="Search gyms..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-[#E2E8F0] placeholder:text-[#E2E8F0]/50 focus:outline-none focus:ring-1 focus:ring-gymstr-orange/50"
                  />
                </div>
                <Button variant="outline" size="icon" className="border-white/10">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allGyms.map((gym) => (
                <Card key={gym.id} className="bg-[#1E293B] border-white/10 overflow-hidden">
                  <div className="aspect-video relative">
                    <img 
                      src={gym.image} 
                      alt={gym.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      {gym.acceptsLightning && (
                        <div className="bg-[#F7931A] text-white p-1 rounded-md">
                          <Zap size={16} className="fill-current" />
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center">
                        <Star className="text-yellow-500 fill-yellow-500 mr-1" size={16} />
                        <span className="text-white font-medium">{gym.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{gym.name}</h3>
                    <div className="flex items-center text-[#E2E8F0]/70 mb-3">
                      <MapPin size={14} className="mr-1" />
                      <span className="text-sm">{gym.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {gym.amenities.map((amenity, index) => (
                        <span 
                          key={index} 
                          className="text-sm px-2 py-0.5 rounded-full bg-white/10 text-[#E2E8F0]/80"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex gap-2">
                    <Button 
                      variant="outline" 
                      className="w-1/2 bg-transparent text-[#F7931A] border-[#F7931A] hover:bg-[#F7931A]/10"
                      onClick={() => openGymDetails(gym)}
                    >
                      View Details
                    </Button>
                    <Button 
                      className="w-1/2 bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
                      onClick={() => openMembershipDialog(gym)}
                    >
                      Join
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {selectedGym && (
        <Dialog open={showGymDetails} onOpenChange={setShowGymDetails}>
          <DialogContent className="bg-[#1E293B] text-[#E2E8F0] border-white/10 max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedGym.name}</DialogTitle>
              <DialogDescription className="text-[#E2E8F0]/70 flex items-center">
                <MapPin size={14} className="mr-1" />
                {selectedGym.location}
                {selectedGym.distance && ` (${selectedGym.distance})`}
              </DialogDescription>
            </DialogHeader>
            
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img 
                src={selectedGym.gallery[0]} 
                alt={selectedGym.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 flex gap-1">
                {selectedGym.gallery.slice(1).map((image, idx) => (
                  <div key={idx} className="w-12 h-8 rounded overflow-hidden border-2 border-white/80">
                    <img 
                      src={image} 
                      alt={`${selectedGym.name} ${idx + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="text-yellow-500 fill-yellow-500 mr-1" size={18} />
                <span className="text-lg font-medium">{selectedGym.rating}</span>
                <span className="text-[#E2E8F0]/70 ml-2 text-sm">Excellent</span>
              </div>
              {selectedGym.acceptsLightning && (
                <div className="flex items-center gap-2 text-sm">
                  <Zap size={16} className="text-[#F7931A]" />
                  <span>Lightning payments accepted</span>
                </div>
              )}
            </div>
            
            <p className="text-[#E2E8F0]/90">{selectedGym.description}</p>
            
            <div>
              <h4 className="font-medium mb-2">Amenities</h4>
              <div className="flex flex-wrap gap-2">
                {selectedGym.amenities.map((amenity, index) => (
                  <span 
                    key={index} 
                    className="text-sm px-3 py-1 rounded-full bg-white/10 text-[#E2E8F0]/80"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3 justify-end mt-4">
              <Button
                variant="outline"
                className="bg-transparent"
                onClick={() => setShowGymDetails(false)}
              >
                Close
              </Button>
              <Button
                className="bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
                onClick={() => {
                  setShowGymDetails(false);
                  openMembershipDialog(selectedGym);
                }}
              >
                Join
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {selectedGym && (
        <Sheet open={showMembershipDialog} onOpenChange={setShowMembershipDialog}>
          <SheetContent className="sm:max-w-md bg-[#1E293B] text-[#E2E8F0] border-l-white/10">
            <SheetHeader>
              <SheetTitle className="text-[#E2E8F0]">Start Membership</SheetTitle>
              <SheetDescription className="text-[#E2E8F0]/70">
                Subscribe to {selectedGym.name}
              </SheetDescription>
            </SheetHeader>
            
            <div className="py-6">
              <div className="bg-[#111827] rounded-lg p-4 mb-6 border border-white/10">
                <h3 className="font-medium mb-3">{selectedGym.name}</h3>
                <div className="flex justify-between mb-3">
                  <span className="text-[#E2E8F0]/70">Monthly Membership</span>
                  <span className="font-medium">$29.99</span>
                </div>
                <div className="flex justify-between mb-4 text-sm">
                  <span className="text-[#E2E8F0]/70">≈ 83,000 sats</span>
                  <span className="text-[#F7931A]">0.00083000 BTC</span>
                </div>
                
                <div className="rounded-lg bg-white p-4 flex justify-center">
                  <div className="w-36 h-36 bg-black flex items-center justify-center">
                    <Zap size={48} className="text-white" />
                  </div>
                </div>
                <button className="mt-3 text-sm text-center w-full py-2 border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                  Copy Invoice
                </button>
              </div>
              
              <div className="bg-[#1F2937] rounded-lg p-4 border border-white/10">
                <h4 className="font-medium mb-3">Nostr-Powered Payment Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-[#22C55E]/20 rounded-full">
                      <Check size={12} className="text-[#22C55E]" />
                    </div>
                    <div>
                      <span className="font-medium">Decentralized</span>
                      <p className="text-sm text-[#E2E8F0]/70">No middlemen. The payment goes directly to the gym.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-[#22C55E]/20 rounded-full">
                      <Lock size={12} className="text-[#22C55E]" />
                    </div>
                    <div>
                      <span className="font-medium">Privacy-first</span>
                      <p className="text-sm text-[#E2E8F0]/70">You use your cryptographic identity — no emails or passwords needed.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-[#22C55E]/20 rounded-full">
                      <Zap size={12} className="text-[#22C55E]" />
                    </div>
                    <div>
                      <span className="font-medium">Fast & low fees</span>
                      <p className="text-sm text-[#E2E8F0]/70">Payments are done instantly with the Lightning Network.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-[#22C55E]/20 rounded-full">
                      <Check size={12} className="text-[#22C55E]" />
                    </div>
                    <div>
                      <span className="font-medium">Proven ownership</span>
                      <p className="text-sm text-[#E2E8F0]/70">Your booking is signed with your Nostr key.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-[#22C55E]/20 rounded-full">
                      <Globe size={12} className="text-[#22C55E]" />
                    </div>
                    <div>
                      <span className="font-medium">Global & open</span>
                      <p className="text-sm text-[#E2E8F0]/70">Anyone, anywhere can participate.</p>
                    </div>
                  </li>
                </ul>
                <p className="text-sm text-center mt-4 text-[#E2E8F0]/70">
                  This transaction is verified through Nostr. You own the proof.
                </p>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowMembershipDialog(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
                >
                  Confirm and Pay
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};

export default Dashboard;
