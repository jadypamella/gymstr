
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dumbbell, MapPin, Calendar, Trophy, Users, Settings, LogOut } from 'lucide-react';
import Footer from '@/components/Footer';

const Profile = () => {
  // Sample user data
  const user = {
    name: "Alex Johnson",
    location: "São Paulo, Brazil",
    memberSince: "January 2024",
    image: "/lovable-uploads/c7611c1a-24d3-4994-971a-b8d2a8cf74e5.png",
    bio: "Fitness enthusiast with a passion for weightlifting and functional training. Always looking for new gyms to try out while traveling.",
    stats: {
      workouts: 137,
      streak: 14,
      gymsVisited: 12,
      achievements: 8
    },
    recentWorkouts: [
      { date: "2024-04-03", type: "Strength", duration: "45 min", gym: "PowerFit Gym" },
      { date: "2024-04-01", type: "Cardio", duration: "30 min", gym: "FlexZone" },
      { date: "2024-03-29", type: "Yoga", duration: "60 min", gym: "Yoga Harmony" }
    ],
    achievements: [
      { name: "Early Bird", description: "Complete 5 workouts before 8 AM", date: "2024-02-15", icon: "🌅" },
      { name: "Gym Explorer", description: "Visit 10 different gyms", date: "2024-03-10", icon: "🧭" },
      { name: "Consistency King", description: "Work out 3 times a week for a month", date: "2024-03-28", icon: "👑" }
    ]
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
            <a href="/dashboard" className="font-medium text-[#E2E8F0] hover:text-white transition-colors">Dashboard</a>
            <a href="/profile" className="font-medium text-gymstr-orange hover:text-gymstr-orange/80 transition-colors">Profile</a>
            <Button variant="outline" size="sm" className="font-medium flex items-center gap-1">
              <LogOut size={18} /> Log out
            </Button>
          </div>

          <Button variant="ghost" className="md:hidden p-2">
            <Settings size={24} />
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="bg-[#1A2235] rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-gymstr-orange">
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full">Edit Profile</Button>
                <Button variant="ghost" className="w-full">Settings</Button>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">{user.name}</h1>
                <Badge variant="outline" className="md:self-start bg-gymstr-orange/10 text-gymstr-orange border-gymstr-orange/20 mb-2 md:mb-0">
                  Premium Member
                </Badge>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-gymstr-beige/70 mb-2">
                <MapPin size={16} className="text-gymstr-beige/60" />
                <span>{user.location}</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-gymstr-beige/70 mb-4">
                <Calendar size={16} className="text-gymstr-beige/60" />
                <span>Member since {user.memberSince}</span>
              </div>
              
              <p className="text-gymstr-beige/80 mb-6">{user.bio}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-[#111827] p-3 rounded-lg text-center">
                  <div className="text-xl font-bold">{user.stats.workouts}</div>
                  <div className="text-xs text-gymstr-beige/70">Workouts</div>
                </div>
                <div className="bg-[#111827] p-3 rounded-lg text-center">
                  <div className="text-xl font-bold">{user.stats.streak}</div>
                  <div className="text-xs text-gymstr-beige/70">Day Streak</div>
                </div>
                <div className="bg-[#111827] p-3 rounded-lg text-center">
                  <div className="text-xl font-bold">{user.stats.gymsVisited}</div>
                  <div className="text-xs text-gymstr-beige/70">Gyms</div>
                </div>
                <div className="bg-[#111827] p-3 rounded-lg text-center">
                  <div className="text-xl font-bold">{user.stats.achievements}</div>
                  <div className="text-xs text-gymstr-beige/70">Achievements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Dumbbell className="text-gymstr-orange" size={20} /> Recent Workouts
            </h2>
            <div className="bg-[#1A2235] rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-gymstr-beige/70">Date</th>
                      <th className="text-left p-4 text-gymstr-beige/70">Type</th>
                      <th className="text-left p-4 text-gymstr-beige/70">Duration</th>
                      <th className="text-left p-4 text-gymstr-beige/70">Gym</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.recentWorkouts.map((workout, i) => (
                      <tr key={i} className="border-b border-white/10 hover:bg-gymstr-beige/5">
                        <td className="p-4">{new Date(workout.date).toLocaleDateString()}</td>
                        <td className="p-4">{workout.type}</td>
                        <td className="p-4">{workout.duration}</td>
                        <td className="p-4">{workout.gym}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 flex justify-center">
                <Button variant="ghost">View All Workouts</Button>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="text-gymstr-orange" size={20} /> Achievements
            </h2>
            <div className="bg-[#1A2235] rounded-xl p-4 space-y-4">
              {user.achievements.map((achievement, i) => (
                <div key={i} className="flex items-center p-3 border border-white/10 rounded-lg hover:border-gymstr-orange/30 transition-colors">
                  <div className="text-3xl mr-3">{achievement.icon}</div>
                  <div>
                    <h3 className="font-medium">{achievement.name}</h3>
                    <p className="text-sm text-gymstr-beige/70">{achievement.description}</p>
                    <p className="text-xs text-gymstr-beige/50 mt-1">Earned on {new Date(achievement.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full">View All Achievements</Button>
            </div>
            
            <h2 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2">
              <Users className="text-gymstr-orange" size={20} /> Gym Buddies
            </h2>
            <div className="bg-[#1A2235] rounded-xl p-6 text-center">
              <p className="text-gymstr-beige/70 mb-4">Connect with gym buddies to motivate each other and share progress.</p>
              <Button>Find Gym Buddies</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
