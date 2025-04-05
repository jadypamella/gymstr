
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, MapPin, Award, Dumbbell, BarChart2, Clock, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

const Profile = () => {
  // Mock user data - in a real app this would come from an API or context
  const user = {
    name: "Alex Johnson",
    location: "São Paulo, Brazil",
    memberSince: "January 2024",
    image: "/lovable-uploads/e24a2bfd-3ee7-4cb4-8510-f1d3f413f874.png", // Updated image URL
    bio: "Fitness enthusiast with a passion for weightlifting and functional training. Always looking for new gyms to try out while traveling.",
    stats: {
      workouts: 137,
      gymsVisited: 12,
      achievements: 8,
      streak: 14
    }
  };

  // Mock data for history
  const workoutHistory = [
    { date: "April 4, 2025", gym: "PowerFit Gym", workout: "Full Body Strength", duration: "68 min" },
    { date: "April 2, 2025", gym: "CrossTrain Center", workout: "HIIT Session", duration: "45 min" },
    { date: "March 30, 2025", gym: "FlexZone", workout: "Upper Body", duration: "55 min" },
    { date: "March 28, 2025", gym: "PowerFit Gym", workout: "Leg Day", duration: "62 min" },
    { date: "March 26, 2025", gym: "Iron Temple", workout: "Core & Cardio", duration: "40 min" },
  ];

  const membershipHistory = [
    { gym: "PowerFit Gym", type: "Monthly", status: "Active", startDate: "March 1, 2025", endDate: "April 30, 2025" },
    { gym: "CrossTrain Center", type: "Drop-in", status: "Completed", startDate: "February 14, 2025", endDate: "February 14, 2025" },
    { gym: "Yoga Harmony", type: "Weekly", status: "Expired", startDate: "January 10, 2025", endDate: "January 31, 2025" },
  ];

  const achievements = [
    { name: "Early Bird", description: "Complete 5 workouts before 8am", date: "March 15, 2025", icon: "🌅" },
    { name: "Gym Explorer", description: "Visit 10 different gyms", date: "March 5, 2025", icon: "🧭" },
    { name: "Consistency King", description: "Maintain a 14-day streak", date: "February 28, 2025", icon: "👑" },
    { name: "Heavy Lifter", description: "Log a personal best in weightlifting", date: "February 10, 2025", icon: "💪" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gymstr-navy text-gymstr-beige">
      {/* Header/Navigation Bar - similar to Dashboard */}
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
            <a href="/dashboard" className="font-medium text-[#E2E8F0] hover:text-white transition-colors">Dashboard</a>
            <a href="/profile" className="font-medium text-gymstr-orange hover:text-gymstr-orange/80 transition-colors">Profile</a>
            <Button variant="outline" size="sm">
              Log out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Profile Header Section */}
        <div className="bg-[#1E293B] rounded-xl p-6 mb-8 border border-white/10">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-gymstr-orange">
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-[#22C55E] rounded-full p-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            
            {/* User info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
              <div className="flex flex-col md:flex-row gap-2 md:items-center mb-4">
                <div className="flex items-center justify-center md:justify-start gap-1 text-gymstr-beige/70">
                  <MapPin size={16} />
                  <span>{user.location}</span>
                </div>
                <div className="hidden md:block text-gymstr-beige/50">•</div>
                <div className="flex items-center justify-center md:justify-start gap-1 text-gymstr-beige/70">
                  <CalendarDays size={16} />
                  <span>Member since {user.memberSince}</span>
                </div>
              </div>
              <p className="text-gymstr-beige/80 max-w-2xl mb-4">{user.bio}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Badge className="bg-gymstr-orange/20 text-gymstr-orange hover:bg-gymstr-orange/30">Weightlifting</Badge>
                <Badge className="bg-gymstr-orange/20 text-gymstr-orange hover:bg-gymstr-orange/30">Functional Training</Badge>
                <Badge className="bg-gymstr-orange/20 text-gymstr-orange hover:bg-gymstr-orange/30">CrossFit</Badge>
              </div>
            </div>
            
            {/* User stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
              <div className="bg-[#111827] p-4 rounded-lg text-center">
                <Dumbbell className="mx-auto mb-2 text-gymstr-orange" size={24} />
                <div className="text-xl font-bold">{user.stats.workouts}</div>
                <div className="text-xs text-gymstr-beige/70">Workouts</div>
              </div>
              <div className="bg-[#111827] p-4 rounded-lg text-center">
                <MapPin className="mx-auto mb-2 text-gymstr-orange" size={24} />
                <div className="text-xl font-bold">{user.stats.gymsVisited}</div>
                <div className="text-xs text-gymstr-beige/70">Gyms</div>
              </div>
              <div className="bg-[#111827] p-4 rounded-lg text-center">
                <Award className="mx-auto mb-2 text-gymstr-orange" size={24} />
                <div className="text-xl font-bold">{user.stats.achievements}</div>
                <div className="text-xs text-gymstr-beige/70">Achievements</div>
              </div>
              <div className="bg-[#111827] p-4 rounded-lg text-center">
                <BarChart2 className="mx-auto mb-2 text-gymstr-orange" size={24} />
                <div className="text-xl font-bold">{user.stats.streak}</div>
                <div className="text-xs text-gymstr-beige/70">Day Streak</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs for different sections */}
        <Tabs defaultValue="workouts" className="space-y-6">
          <TabsList className="bg-[#1E293B] border border-white/10">
            <TabsTrigger value="workouts" className="data-[state=active]:bg-gymstr-orange data-[state=active]:text-white">Workout History</TabsTrigger>
            <TabsTrigger value="memberships" className="data-[state=active]:bg-gymstr-orange data-[state=active]:text-white">Memberships</TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-gymstr-orange data-[state=active]:text-white">Achievements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="workouts" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Recent Workouts</h2>
            {workoutHistory.map((workout, index) => (
              <Card key={index} className="bg-[#1E293B] border-white/10">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                    <div>
                      <div className="font-medium">{workout.workout}</div>
                      <div className="text-sm text-gymstr-beige/70">{workout.gym}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center text-sm text-gymstr-beige/70">
                        <CalendarDays size={14} className="mr-1" />
                        {workout.date}
                      </div>
                      <div className="flex items-center text-sm text-gymstr-beige/70">
                        <Clock size={14} className="mr-1" />
                        {workout.duration}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="memberships" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Membership History</h2>
            {membershipHistory.map((membership, index) => (
              <Card key={index} className="bg-[#1E293B] border-white/10">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-medium">{membership.gym}</div>
                        <Badge 
                          className={
                            membership.status === 'Active' ? "bg-[#22C55E]/20 text-[#22C55E]" :
                            membership.status === 'Expired' ? "bg-red-500/20 text-red-500" : 
                            "bg-blue-500/20 text-blue-500"
                          }
                        >
                          {membership.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gymstr-beige/70">{membership.type} Membership</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gymstr-beige/70">
                      <CalendarDays size={14} className="mr-1" />
                      {`${membership.startDate} - ${membership.endDate}`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="achievements" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-[#1E293B] border-white/10">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-4xl mb-3">{achievement.icon}</div>
                      <div className="font-medium">{achievement.name}</div>
                      <div className="text-sm text-gymstr-beige/70 mb-2">{achievement.description}</div>
                      <div className="text-xs text-gymstr-beige/50 flex items-center">
                        <CalendarDays size={12} className="mr-1" />
                        Achieved on {achievement.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
