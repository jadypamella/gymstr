
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Search, 
  Filter, 
  Home, 
  User,
  LogOut, 
  Star,
  X,
  Check,
  Globe,
  Lock,
  Zap,
  CheckCircle,
  CalendarDays,
  Dumbbell,
  Award,
  BarChart2
} from 'lucide-react';
import Footer from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import LoginModal from '@/components/LoginModal';
import { DashboardSidebar } from '@/components/DashboardSidebar';

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedGym, setSelectedGym] = useState<any>(null);
  const [showMembershipDialog, setShowMembershipDialog] = useState(false);
  const [showGymDetails, setShowGymDetails] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState('monthly');
  
  const membershipOptions = {
    monthly: {
      name: "Monthly Membership",
      price: "$29.99",
      sats: "83,000",
      btc: "0.00083000"
    },
    annual: {
      name: "Annual Membership",
      price: "$249.99",
      sats: "695,000",
      btc: "0.00695000"
    },
    daily: {
      name: "Day Pass",
      price: "$9.99",
      sats: "27,000",
      btc: "0.00027000"
    }
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
            <a href="/profile" className="font-medium text-[#E2E8F0] hover:text-white transition-colors">Profile</a>
            <LoginModal>
              <Button variant="outline" size="sm">
                Log out
              </Button>
            </LoginModal>
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

      {/* Gym Details Dialog */}
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
                  <div key={idx} className="w-12 h-12 rounded-md overflow-hidden bg-white/10">
                    <img 
                      src={image} 
                      alt={`${selectedGym.name} gallery ${idx + 2}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-lg mb-2">About</h3>
              <p className="text-[#E2E8F0]/80">{selectedGym.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedGym.amenities.map((amenity, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-white/10 hover:bg-white/20">
                    {amenity}
                  </Badge>
                ))}
              </div>
              
              <div className="flex justify-end mt-4 gap-2">
                <Button 
                  variant="outline" 
                  className="bg-transparent text-[#E2E8F0] border-white/20"
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
                  Join This Gym
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Membership Dialog */}
      {selectedGym && (
        <Dialog open={showMembershipDialog} onOpenChange={setShowMembershipDialog}>
          <DialogContent className="bg-[#1E293B] text-[#E2E8F0] border-white/10">
            <DialogHeader>
              <DialogTitle className="text-2xl">Join {selectedGym.name}</DialogTitle>
              <DialogDescription className="text-[#E2E8F0]/70">
                Choose your membership plan
              </DialogDescription>
            </DialogHeader>
            
            <Tabs defaultValue="monthly" value={selectedMembership} onValueChange={setSelectedMembership}>
              <TabsList className="grid grid-cols-3 bg-white/5 mb-4">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">Annual</TabsTrigger>
                <TabsTrigger value="daily">Day Pass</TabsTrigger>
              </TabsList>
              
              <TabsContent value="monthly" className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-lg">{membershipOptions.monthly.name}</h3>
                    <div className="text-2xl font-bold text-gymstr-orange">{membershipOptions.monthly.price}</div>
                  </div>
                  <div className="text-sm text-[#E2E8F0]/70">Per month, cancel anytime</div>
                  <div className="mt-4 flex items-center text-sm text-[#E2E8F0]/70">
                    <Zap size={16} className="mr-1 text-[#F7931A] fill-[#F7931A]" />
                    <span>Pay with Lightning: {membershipOptions.monthly.sats} sats</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle size={18} className="mr-2 text-[#22C55E]" />
                    <span>Unlimited access to {selectedGym.name}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="mr-2 text-[#22C55E]" />
                    <span>Access to all basic equipment and areas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="mr-2 text-[#22C55E]" />
                    <span>Free fitness assessment</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="annual" className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#22C55E] text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                    Best Value
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-lg">{membershipOptions.annual.name}</h3>
                    <div className="text-2xl font-bold text-gymstr-orange">{membershipOptions.annual.price}</div>
                  </div>
                  <div className="text-sm text-[#E2E8F0]/70">Save 30% vs monthly</div>
                  <div className="mt-4 flex items-center text-sm text-[#E2E8F0]/70">
                    <Zap size={16} className="mr-1 text-[#F7931A] fill-[#F7931A]" />
                    <span>Pay with Lightning: {membershipOptions.annual.sats} sats</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle size={18} className="mr-2 text-[#22C55E]" />
                    <span>Everything in Monthly plan</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="mr-2 text-[#22C55E]" />
                    <span>2 free personal training sessions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="mr-2 text-[#22C55E]" />
                    <span>Access to premium classes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="mr-2 text-[#22C55E]" />
                    <span>Guest passes (2 per month)</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="daily" className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-lg">{membershipOptions.daily.name}</h3>
                    <div className="text-2xl font-bold text-gymstr-orange">{membershipOptions.daily.price}</div>
                  </div>
                  <div className="text-sm text-[#E2E8F0]/70">Single day access</div>
                  <div className="mt-4 flex items-center text-sm text-[#E2E8F0]/70">
                    <Zap size={16} className="mr-1 text-[#F7931A] fill-[#F7931A]" />
                    <span>Pay with Lightning: {membershipOptions.daily.sats} sats</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle size={18} className="mr-2 text-[#22C55E]" />
                    <span>24-hour access to {selectedGym.name}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="mr-2 text-[#22C55E]" />
                    <span>Access to all basic equipment and areas</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex items-center justify-end mt-4 gap-2">
              <Button 
                variant="outline" 
                className="bg-transparent text-[#E2E8F0] border-white/20"
                onClick={() => setShowMembershipDialog(false)}
              >
                Cancel
              </Button>
              <Button className="bg-[#F7931A] hover:bg-[#F7931A]/90 text-white">
                <Zap size={16} className="mr-2" />
                Pay with Lightning
              </Button>
              <Button className="bg-[#22C55E] hover:bg-[#22C55E]/90 text-white">
                <Check size={16} className="mr-2" />
                Pay with Card
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Dashboard;
