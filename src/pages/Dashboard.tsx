
import { useCallback, useEffect, useState } from "react";
import { bech32 } from "bech32";
import axios from "axios";
import {
  MapPin,
  Dumbbell,
  Award,
  BarChart2,
  CalendarDays,
  CheckCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  // User data
  const [user, setUser] = useState({
    name: "Alex Johnson",
    location: "São Paulo, Brazil",
    memberSince: "January 2024",
    avatarUrl: "/lovable-uploads/35320248-e39b-4528-ac5c-40dce0880d8b.png",
    bio: "Fitness enthusiast with a passion for weightlifting and functional training. Always looking for new gyms to try out while traveling.",
    stats: {
      workouts: 137,
      gymsVisited: 12,
      achievements: 8,
      streak: 14
    },
    lastCheckIn: {
      gym: "PowerFit Gym",
      date: "April 5, 2025",
      time: "08:45 AM"
    },
    activeMembership: {
      gym: "PowerFit Gym",
      startDate: "March 1, 2025",
      endDate: "April 30, 2025"
    },
    interests: ["Weightlifting", "Functional Training", "CrossFit"]
  });

  const pubkeyToNpub = useCallback((pubkeyHex: string) => {
    const bytes = hexToBytes(pubkeyHex);
    const words = bech32.toWords(bytes);
    return bech32.encode("npub", words);
  }, []);

  const hexToBytes = (hex: string) =>
    hex
      ? Uint8Array.from(hex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)))
      : [];
      
  const fetchNostrData = async (npub: string) => {
    const { data: nostrData } = await axios.get(
      `https://nostrhttp.com/${npub}`,
    );
    console.log(nostrData);
    return {
      displayName: JSON.parse(nostrData.profileEvent.content).display_name,
    };
  };
  
  const getUserDetails = useCallback(async () => {
    try {
      const pubKey = await (window as any).nostr.getPublicKey();
      const npub = pubkeyToNpub(pubKey);
      const { displayName } = await fetchNostrData(npub);
      setUser({ ...user, name: displayName });
    } catch (error) {
      console.log("Could not fetch Nostr details:", error);
    }
  }, [pubkeyToNpub, user]);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  return (
    <div className="flex flex-col min-h-screen bg-[#111827] text-gymstr-beige">
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
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="bg-[#141e33] rounded-xl p-8 shadow-lg max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column - Avatar and user info */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="relative">
                <Avatar className="w-28 h-28 border-2 border-gymstr-orange">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5 border-2 border-[#141e33]">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="space-y-2 text-center md:text-left">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                
                <div className="flex items-center justify-center md:justify-start space-x-2 text-gymstr-beige/70">
                  <MapPin size={16} />
                  <span>{user.location}</span>
                </div>
                
                <div className="flex items-center justify-center md:justify-start space-x-2 text-gymstr-beige/70">
                  <CalendarDays size={16} />
                  <span>Member since {user.memberSince}</span>
                </div>
                
                <p className="mt-4 text-gymstr-beige/90 max-w-md">
                  {user.bio}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
                  {user.interests.map((interest, i) => (
                    <Badge key={i} className="bg-gymstr-orange/20 text-gymstr-orange hover:bg-gymstr-orange/30">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#0f172a] rounded-lg p-4 w-full">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gymstr-orange" size={20} />
                  <div>
                    <div className="text-base font-medium">Last Check-in: {user.lastCheckIn.gym}</div>
                    <div className="text-sm text-gymstr-beige/70">
                      {user.lastCheckIn.date} • {user.lastCheckIn.time}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Stats and membership */}
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#0f172a] p-5 rounded-lg text-center">
                  <Dumbbell className="mx-auto mb-2 text-gymstr-orange" size={24} />
                  <div className="text-2xl font-bold">{user.stats.workouts}</div>
                  <div className="text-sm text-gymstr-beige/70">Workouts</div>
                </div>
                
                <div className="bg-[#0f172a] p-5 rounded-lg text-center">
                  <MapPin className="mx-auto mb-2 text-gymstr-orange" size={24} />
                  <div className="text-2xl font-bold">{user.stats.gymsVisited}</div>
                  <div className="text-sm text-gymstr-beige/70">Gyms</div>
                </div>
                
                <div className="bg-[#0f172a] p-5 rounded-lg text-center">
                  <Award className="mx-auto mb-2 text-gymstr-orange" size={24} />
                  <div className="text-2xl font-bold">{user.stats.achievements}</div>
                  <div className="text-sm text-gymstr-beige/70">Achievements</div>
                </div>
                
                <div className="bg-[#0f172a] p-5 rounded-lg text-center">
                  <BarChart2 className="mx-auto mb-2 text-gymstr-orange" size={24} />
                  <div className="text-2xl font-bold">{user.stats.streak}</div>
                  <div className="text-sm text-gymstr-beige/70">Day Streak</div>
                </div>
              </div>
              
              <div className="bg-[#0f172a] p-5 rounded-lg">
                <h2 className="text-gymstr-orange font-medium text-lg mb-2">Active Membership</h2>
                <div className="text-lg font-medium">{user.activeMembership.gym}</div>
                <div className="text-sm text-gymstr-beige/70 flex items-center gap-1 mt-1">
                  <CalendarDays size={16} className="shrink-0" />
                  <span>{user.activeMembership.startDate} - {user.activeMembership.endDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
