
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ListFilter, 
  Search, 
  ChevronDown, 
  Menu as MenuIcon, 
  X, 
  MapPin, 
  Star, 
  Users, 
  Dumbbell, 
  CircleUser,
  LogOut,
  User
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import GymCard from '@/components/GymCard';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isMembershipDialogOpen, setIsMembershipDialogOpen] = useState(false);
  const [selectedGym, setSelectedGym] = useState(null);

  const filters = ['All', 'Nearby', 'Popular', 'New', 'Weights', 'Cardio', 'Yoga'];

  const dummyGyms = [
    {
      id: 1,
      name: "PowerFit Gym",
      rating: 4.8,
      location: "Downtown São Paulo",
      distance: "0.8",
      image: "/lovable-uploads/a9d713a6-e3a0-4bdb-95b9-414ba01b8439.png",
      features: ["24/7 Access", "Personal Trainers", "Sauna"],
      pricing: "From $50/month",
      popularity: "Very High",
      tags: ['Weights', 'Popular']
    },
    {
      id: 2,
      name: "CrossTrain Center",
      rating: 4.6,
      location: "Pinheiros, São Paulo",
      distance: "1.2",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=300&h=200",
      features: ["Group Classes", "CrossFit Equipment", "Nutrition Consulting"],
      pricing: "From $65/month",
      popularity: "High",
      tags: ['Cardio', 'New']
    },
    {
      id: 3,
      name: "FlexZone",
      rating: 4.5,
      location: "Moema, São Paulo",
      distance: "1.5",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=300&h=200",
      features: ["Premium Equipment", "Swimming Pool", "Spa"],
      pricing: "From $75/month",
      popularity: "Moderate",
      tags: ['Weights', 'Nearby']
    },
    {
      id: 4,
      name: "Iron Temple",
      rating: 4.7,
      location: "Vila Mariana, São Paulo",
      distance: "2.3",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=300&h=200",
      features: ["Bodybuilding Focus", "Free Weights", "Supplements Shop"],
      pricing: "From $45/month",
      popularity: "High",
      tags: ['Weights', 'Popular']
    },
    {
      id: 5,
      name: "Yoga Harmony",
      rating: 4.9,
      location: "Jardins, São Paulo",
      distance: "1.7",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=300&h=200",
      features: ["Hot Yoga", "Meditation Classes", "Wellness Programs"],
      pricing: "From $60/month",
      popularity: "Moderate",
      tags: ['Yoga', 'New']
    },
    {
      id: 6,
      name: "Cardio Kings",
      rating: 4.4,
      location: "Itaim Bibi, São Paulo",
      distance: "2.8",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=300&h=200",
      features: ["Treadmill Zone", "Spin Classes", "Heart Rate Monitoring"],
      pricing: "From $55/month",
      popularity: "Moderate",
      tags: ['Cardio', 'Nearby']
    },
  ];

  const filteredGyms = selectedFilter === 'All' 
    ? dummyGyms 
    : dummyGyms.filter(gym => gym.tags.includes(selectedFilter));

  const openDetailsDialog = (gym) => {
    setSelectedGym(gym);
    setIsDetailsDialogOpen(true);
  };
  
  const openMembershipDialog = (gym) => {
    setSelectedGym(gym);
    setIsMembershipDialogOpen(true);
  };

  // User data
  const user = {
    name: "Alex Johnson",
    location: "São Paulo, Brazil",
    image: "/lovable-uploads/a9d713a6-e3a0-4bdb-95b9-414ba01b8439.png",
    workouts: 137,
    gymsVisited: 12,
    achievements: 8,
    streak: 14
  };

  return (
    <div className="flex flex-col min-h-screen bg-gymstr-navy text-gymstr-beige">
      {/* Header/Navigation Bar */}
      <header className="sticky top-0 z-30 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/dashboard" className="flex items-center">
            <img 
              src="/lovable-uploads/05cc5987-1dba-47d1-b472-86707d23fd9d.png" 
              alt="Gymstr" 
              className="h-8 md:h-10"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="/dashboard" className="font-medium text-gymstr-orange hover:text-gymstr-orange/80 transition-colors">Dashboard</a>
            <a href="/profile" className="font-medium text-[#E2E8F0] hover:text-white transition-colors">Profile</a>
            <Button variant="outline" size="sm" className="font-medium flex items-center gap-1">
              <LogOut size={18} /> Log out
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gymstr-beige p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-[#0F172A]/95 backdrop-blur-md border-b border-white/10 z-20">
            <div className="container mx-auto py-4 px-4">
              <nav className="flex flex-col space-y-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.image} />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <a href="/dashboard" className="px-3 py-2 bg-white/10 rounded-md flex items-center gap-2">
                    <Dumbbell size={16} /> Dashboard
                  </a>
                  <a href="/profile" className="px-3 py-2 hover:bg-white/10 rounded-md flex items-center gap-2">
                    <User size={16} /> Profile
                  </a>
                  <button className="w-full px-3 py-2 hover:bg-white/10 rounded-md flex items-center gap-2 text-left">
                    <LogOut size={16} /> Log out
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Welcome Section */}
      <div className="bg-[#1A2235] p-4 md:p-6 border-b border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <Avatar className="h-16 w-16 md:h-20 md:w-20 border-2 border-gymstr-orange">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">Welcome, {user.name}</h1>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gym-beige/70 mt-1">
                <MapPin size={18} className="text-gymstr-beige/60" />
                <span className="text-gymstr-beige/60">{user.location}</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                <div className="bg-[#111827] p-3 rounded-lg text-center">
                  <div className="text-xl font-bold">{user.workouts}</div>
                  <div className="text-xs text-gymstr-beige/70">Workouts</div>
                </div>
                <div className="bg-[#111827] p-3 rounded-lg text-center">
                  <div className="text-xl font-bold">{user.gymsVisited}</div>
                  <div className="text-xs text-gymstr-beige/70">Gyms</div>
                </div>
                <div className="bg-[#111827] p-3 rounded-lg text-center">
                  <div className="text-xl font-bold">{user.achievements}</div>
                  <div className="text-xs text-gymstr-beige/70">Achievements</div>
                </div>
                <div className="bg-[#111827] p-3 rounded-lg text-center">
                  <div className="text-xl font-bold">{user.streak}</div>
                  <div className="text-xs text-gymstr-beige/70">Day Streak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Search and filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gymstr-beige/50" size={18} />
            <Input 
              placeholder="Search for gyms..." 
              className="pl-10 bg-[#1A2235] border-white/10 focus:border-gymstr-orange"
            />
          </div>
          
          <Drawer open={isFilterDrawerOpen} onOpenChange={setIsFilterDrawerOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline" className="sm:w-auto w-full flex gap-2 items-center">
                <ListFilter size={18} />
                <span>{selectedFilter !== 'All' ? selectedFilter : 'Filters'}</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Filter Gyms</DrawerTitle>
                <DrawerDescription>Select a category to filter the gym list</DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {filters.map(filter => (
                    <Button
                      key={filter}
                      variant={selectedFilter === filter ? "default" : "outline"}
                      onClick={() => {
                        setSelectedFilter(filter);
                        setIsFilterDrawerOpen(false);
                      }}
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Top Picks Section */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Top Picks</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  Sort by <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Distance</DropdownMenuItem>
                <DropdownMenuItem>Rating</DropdownMenuItem>
                <DropdownMenuItem>Popularity</DropdownMenuItem>
                <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGyms.slice(0, 3).map((gym) => (
              <Card key={gym.id} className="flex flex-col bg-[#1A2235] border-white/10 overflow-hidden h-full">
                <img 
                  src={gym.image} 
                  alt={gym.name} 
                  className="w-full h-36 object-cover"
                />
                <CardHeader className="pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{gym.name}</CardTitle>
                      <CardDescription className="text-gymstr-beige/60 flex items-center gap-1">
                        <MapPin size={14} /> {gym.location} ({gym.distance} km)
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 bg-gymstr-beige/10 py-1 px-2 rounded">
                      <Star size={14} className="fill-gymstr-orange text-gymstr-orange" />
                      <span className="text-sm font-medium">{gym.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-3">
                  <div className="flex flex-wrap gap-2">
                    {gym.features.slice(0, 2).map((feature, i) => (
                      <Badge key={i} variant="outline" className="bg-gymstr-beige/5">
                        {feature}
                      </Badge>
                    ))}
                    {gym.features.length > 2 && (
                      <Badge variant="outline" className="bg-gymstr-beige/5">
                        +{gym.features.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 mt-auto flex gap-2">
                  <Button 
                    variant="outline" 
                    className="w-1/2" 
                    onClick={() => openDetailsDialog(gym)}
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

        {/* Nearby Gyms Section */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Nearby Gyms</h2>
            <Button variant="ghost" size="sm">See all</Button>
          </div>

          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex space-x-4">
              {filteredGyms.filter(gym => gym.tags.includes('Nearby')).map((gym) => (
                <Card key={gym.id} className="w-72 flex-shrink-0 bg-[#1A2235] border-white/10">
                  <img 
                    src={gym.image} 
                    alt={gym.name} 
                    className="w-full h-36 object-cover"
                  />
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle className="text-base">{gym.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-gymstr-orange text-gymstr-orange" />
                        <span className="text-sm">{gym.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-gymstr-beige/60 text-xs flex items-center gap-1">
                      <MapPin size={12} /> {gym.distance} km away
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0 flex gap-2">
                    <Button 
                      variant="outline" 
                      className="w-1/2 text-sm" 
                      onClick={() => openDetailsDialog(gym)}
                    >
                      View Details
                    </Button>
                    <Button 
                      className="w-1/2 text-sm bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
                      onClick={() => openMembershipDialog(gym)}
                    >
                      Join
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </section>

        {/* Popular Gyms Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Popular Gyms</h2>
            <Button variant="ghost" size="sm">See all</Button>
          </div>

          <div className="space-y-3">
            {filteredGyms.filter(gym => gym.tags.includes('Popular')).map((gym) => (
              <Card key={gym.id} className="bg-[#1A2235] border-white/10">
                <div className="flex flex-col md:flex-row">
                  <img 
                    src={gym.image} 
                    alt={gym.name} 
                    className="w-full md:w-32 h-32 object-cover md:rounded-l"
                  />
                  <div className="flex flex-col flex-1 p-4">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{gym.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-gymstr-orange text-gymstr-orange" />
                        <span className="text-sm">{gym.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gymstr-beige/60 flex items-center gap-1 mt-1">
                      <MapPin size={14} /> {gym.location} ({gym.distance} km)
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="bg-gymstr-beige/5">
                        <Users size={12} className="mr-1" /> {gym.popularity}
                      </Badge>
                      <Badge variant="outline" className="bg-gymstr-beige/5">
                        {gym.pricing}
                      </Badge>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button 
                        variant="outline" 
                        className="text-sm"
                        onClick={() => openDetailsDialog(gym)} 
                      >
                        View Details
                      </Button>
                      <Button 
                        className="bg-[#22C55E] hover:bg-[#22C55E]/90 text-white text-sm"
                        onClick={() => openMembershipDialog(gym)}
                      >
                        Join
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Gym Details Dialog */}
      <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
        <DialogContent className="bg-[#1A2235] text-gymstr-beige border-white/10 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{selectedGym?.name}</DialogTitle>
            <DialogDescription className="text-gymstr-beige/60 flex items-center gap-1">
              <MapPin size={14} /> {selectedGym?.location} ({selectedGym?.distance} km)
            </DialogDescription>
          </DialogHeader>
          
          {selectedGym && (
            <>
              <img 
                src={selectedGym.image} 
                alt={selectedGym.name} 
                className="w-full h-48 object-cover rounded-md"
              />
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-gymstr-beige/5 p-3 rounded-md">
                  <div className="text-xs text-gymstr-beige/60">Rating</div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-gymstr-orange text-gymstr-orange" />
                    <span className="font-medium">{selectedGym.rating}/5.0</span>
                  </div>
                </div>
                <div className="bg-gymstr-beige/5 p-3 rounded-md">
                  <div className="text-xs text-gymstr-beige/60">Popularity</div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span className="font-medium">{selectedGym.popularity}</span>
                  </div>
                </div>
                <div className="bg-gymstr-beige/5 p-3 rounded-md">
                  <div className="text-xs text-gymstr-beige/60">Distance</div>
                  <div className="font-medium">{selectedGym.distance} kilometers</div>
                </div>
                <div className="bg-gymstr-beige/5 p-3 rounded-md">
                  <div className="text-xs text-gymstr-beige/60">Pricing</div>
                  <div className="font-medium">{selectedGym.pricing}</div>
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-medium mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedGym.features.map((feature, i) => (
                    <Badge key={i} variant="outline" className="bg-gymstr-beige/5">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => {
                    setIsDetailsDialogOpen(false);
                  }}
                >
                  Close
                </Button>
                <Button 
                  className="flex-1 bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
                  onClick={() => {
                    setIsDetailsDialogOpen(false);
                    openMembershipDialog(selectedGym);
                  }}
                >
                  Join
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Membership Dialog */}
      <Dialog open={isMembershipDialogOpen} onOpenChange={setIsMembershipDialogOpen}>
        <DialogContent className="bg-[#1A2235] text-gymstr-beige border-white/10">
          <DialogHeader>
            <DialogTitle>Start Membership</DialogTitle>
            <DialogDescription className="text-gymstr-beige/60">
              Choose a membership plan for {selectedGym?.name}
            </DialogDescription>
          </DialogHeader>
          
          {selectedGym && (
            <div className="space-y-4">
              {/* Membership plans would go here */}
              <div className="bg-gymstr-beige/5 p-4 rounded-md border border-white/10 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Monthly Membership</h3>
                  <p className="text-sm text-gymstr-beige/60">Full access to all facilities</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">$50/month</div>
                  <div className="text-xs text-gymstr-beige/60">No commitment</div>
                </div>
              </div>
              
              <div className="bg-gymstr-beige/5 p-4 rounded-md border border-white/10 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Annual Membership</h3>
                  <p className="text-sm text-gymstr-beige/60">Save 20% with annual billing</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">$480/year</div>
                  <div className="text-xs text-gymstr-beige/60">$40/month equivalent</div>
                </div>
              </div>
              
              <div className="bg-gymstr-beige/5 p-4 rounded-md border border-white/10 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Day Pass</h3>
                  <p className="text-sm text-gymstr-beige/60">24-hour access</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">$15</div>
                  <div className="text-xs text-gymstr-beige/60">One-time payment</div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
                onClick={() => setIsMembershipDialogOpen(false)}
              >
                Continue to Payment
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
