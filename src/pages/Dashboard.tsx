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
  User,
  Zap
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import GymCard from '@/components/GymCard';
import Footer from '@/components/Footer';
import GymMap from '@/components/GymMap';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isMembershipDialogOpen, setIsMembershipDialogOpen] = useState(false);
  const [selectedGym, setSelectedGym] = useState(null);
  const [selectedMembershipType, setSelectedMembershipType] = useState('monthly');

  const filters = ['All', 'Nearby', 'Popular', 'New', 'Weights', 'Cardio', 'Yoga'];

  const dummyGyms = [
    {
      id: 1,
      name: "PowerFit Gym",
      rating: 4.8,
      location: "Downtown São Paulo",
      distance: "0.8",
      image: "/lovable-uploads/e8254a03-16a8-46f7-9106-d7639107e343.png",
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
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=300&h=200",
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
      image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=300&h=200",
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
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=300&h=200",
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
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=300&h=200",
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
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=300&h=200",
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
    setSelectedMembershipType('monthly');
    setIsMembershipDialogOpen(true);
  };

  const user = {
    name: "Alex Johnson",
    location: "São Paulo, Brazil",
    image: "/lovable-uploads/c7611c1a-24d3-4994-971a-b8d2a8cf74e5.png",
    workouts: 137,
    gymsVisited: 12,
    achievements: 8,
    streak: 14
  };

  return (
    <div className="flex flex-col min-h-screen bg-gymstr-navy text-gymstr-beige">
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

          <button 
            className="md:hidden text-gymstr-beige p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

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

      <main className="flex-1 container mx-auto px-4 py-6">
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

        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Nearby Gyms Map</h2>
          </div>
          
          <GymMap />
        </section>

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
              <GymCard
                key={gym.id}
                name={gym.name}
                image={gym.image}
                rating={gym.rating}
                location={gym.location}
                amenities={gym.features}
                distance={gym.distance}
                acceptsLightning={true}
                onViewDetails={() => openDetailsDialog(gym)}
                onStartMembership={() => openMembershipDialog(gym)}
              />
            ))}
          </div>
        </section>

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
                      className="w-1/2 text-sm bg-transparent hover:bg-gymstr-beige/10"
                      onClick={() => openDetailsDialog(gym)}
                    >
                      View Details
                    </Button>
                    <Button 
                      className="w-1/2 text-sm bg-[#22C55E] hover:bg-[#22C55E]/80 text-white"
                      onClick={() => openMembershipDialog(gym)}
                    >
                      Start Membership
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </section>

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
                        className="text-sm bg-transparent hover:bg-gymstr-beige/10"
                        onClick={() => openDetailsDialog(gym)} 
                      >
                        View Details
                      </Button>
                      <Button 
                        className="bg-[#22C55E] hover:bg-[#22C55E]/80 text-white text-sm"
                        onClick={() => openMembershipDialog(gym)}
                      >
                        Start Membership
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

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
                  className="flex-1 bg-transparent hover:bg-gymstr-beige/10"
                  onClick={() => {
                    setIsDetailsDialogOpen(false);
                  }}
                >
                  Close
                </Button>
                <Button 
                  className="flex-1 bg-[#22C55E] hover:bg-[#22C55E]/80 text-white"
                  onClick={() => {
                    setIsDetailsDialogOpen(false);
                    openMembershipDialog(selectedGym);
                  }}
                >
                  Start Membership
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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
              <RadioGroup 
                value={selectedMembershipType} 
                onValueChange={setSelectedMembershipType}
                className="space-y-3"
              >
                <div className={`bg-gymstr-beige/5 p-4 rounded-md border ${
                  selectedMembershipType === 'monthly' ? 'border-gymstr-orange' : 'border-white/10'
                } flex justify-between items-center relative`}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="monthly" id="monthly" className="text-gymstr-orange" />
                    <div>
                      <Label htmlFor="monthly" className="text-base font-medium">Monthly Membership</Label>
                      <p className="text-sm text-gymstr-beige/60">Full access to all facilities</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$50/month</div>
                    <div className="text-xs text-gymstr-beige/60">No commitment</div>
                  </div>
                </div>
                
                <div className={`bg-gymstr-beige/5 p-4 rounded-md border ${
                  selectedMembershipType === 'annual' ? 'border-gymstr-orange' : 'border-white/10'
                } flex justify-between items-center relative`}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="annual" id="annual" className="text-gymstr-orange" />
                    <div>
                      <Label htmlFor="annual" className="text-base font-medium">Annual Membership</Label>
                      <p className="text-sm text-gymstr-beige/60">Save 20% with annual billing</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$480/year</div>
                    <div className="text-xs text-gymstr-beige/60">$40/month equivalent</div>
                  </div>
                </div>
                
                <div className={`bg-gymstr-beige/5 p-4 rounded-md border ${
                  selectedMembershipType === 'daypass' ? 'border-gymstr-orange' : 'border-white/10'
                } flex justify-between items-center relative`}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="daypass" id="daypass" className="text-gymstr-orange" />
                    <div>
                      <Label htmlFor="daypass" className="text-base font-medium">Day Pass</Label>
                      <p className="text-sm text-gymstr-beige/60">24-hour access</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$15</div>
                    <div className="text-xs text-gymstr-beige/60">One-time payment</div>
                  </div>
                </div>
              </RadioGroup>
              
              <div className="bg-gymstr-beige/5 p-4 rounded-md border-white/10">
                <h3 className="font-medium mb-3">Payment Method</h3>
                <div className="flex items-center gap-3 p-3 bg-gymstr-navy/50 rounded-md border border-gymstr-orange/30">
                  <Zap size={24} className="text-gymstr-orange fill-gymstr-orange/30" />
                  <div>
                    <div className="font-medium">Pay with Nostr Protocol</div>
                    <div className="text-xs text-gymstr-beige/60">Quick, secure payments via the Nostr protocol</div>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
                onClick={() => setIsMembershipDialogOpen(false)}
              >
                Continue with Nostr
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Dashboard;
