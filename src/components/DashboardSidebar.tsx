import React from "react";
import { useLocation, Link } from "react-router-dom";
import { 
  User, 
  Home,
  CheckCircle, 
  Dumbbell,
  MapPin, 
  BarChart2, 
  Award, 
  CalendarDays
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function DashboardSidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // User data - simplified version of what's in the Dashboard
  const user = {
    name: "Alex Johnson",
    avatarUrl: "/lovable-uploads/35320248-e39b-4528-ac5c-40dce0880d8b.png",
    location: "São Paulo, Brazil",
    memberSince: "January 2024",
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
  };

  // Dashboard navigation items
  const navItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: Home,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: User,
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <div className="relative mr-3">
              <Avatar className="w-12 h-12 border-2 border-gymstr-orange">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h2 className="text-lg font-bold">{user.name}</h2>
              <div className="flex items-center text-sm text-gymstr-beige/70">
                <MapPin size={14} className="mr-1" />
                <span>{user.location}</span>
              </div>
            </div>
          </div>

          <div className="text-sm mb-2 flex items-center">
            <CalendarDays className="w-4 h-4 mr-1.5 text-gymstr-beige/70" />
            <span className="text-gymstr-beige/70">Member since {user.memberSince}</span>
          </div>

          <div className="mb-3">
            <p className="text-sm text-gymstr-beige/80">{user.bio}</p>
          </div>

          <div className="flex gap-1 mb-4 flex-wrap">
            {user.interests.map((interest, i) => (
              <Badge key={i} className="bg-gymstr-orange/20 text-gymstr-orange hover:bg-gymstr-orange/30">
                {interest}
              </Badge>
            ))}
          </div>

          <div className="bg-[#111827]/70 p-3 rounded-lg mb-3">
            <div className="text-sm font-medium mb-1 flex items-center">
              <CheckCircle size={14} className="text-gymstr-orange mr-1.5" />
              Last Check-in: {user.lastCheckIn.gym}
            </div>
            <div className="text-xs text-gymstr-beige/70 flex items-center">
              <CalendarDays size={12} className="mr-1" /> 
              {user.lastCheckIn.date} • {user.lastCheckIn.time}
            </div>
          </div>

          <div className="bg-[#111827]/70 p-3 rounded-lg">
            <div className="text-sm font-medium mb-1">Active Membership</div>
            <div>{user.activeMembership.gym}</div>
            <div className="text-xs text-gymstr-beige/70 flex items-center gap-1 mt-1">
              <CalendarDays size={12} className="shrink-0" />
              <span>{user.activeMembership.startDate} - {user.activeMembership.endDate}</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 mt-4">
            <div className="bg-[#111827]/70 p-2 rounded-lg text-center">
              <Dumbbell className="mx-auto mb-1 text-gymstr-orange" size={18} />
              <div className="text-base font-bold">{user.stats.workouts}</div>
              <div className="text-[10px] text-gymstr-beige/70">Workouts</div>
            </div>
            <div className="bg-[#111827]/70 p-2 rounded-lg text-center">
              <MapPin className="mx-auto mb-1 text-gymstr-orange" size={18} />
              <div className="text-base font-bold">{user.stats.gymsVisited}</div>
              <div className="text-[10px] text-gymstr-beige/70">Gyms</div>
            </div>
            <div className="bg-[#111827]/70 p-2 rounded-lg text-center">
              <Award className="mx-auto mb-1 text-gymstr-orange" size={18} />
              <div className="text-base font-bold">{user.stats.achievements}</div>
              <div className="text-[10px] text-gymstr-beige/70">Achievements</div>
            </div>
            <div className="bg-[#111827]/70 p-2 rounded-lg text-center">
              <BarChart2 className="mx-auto mb-1 text-gymstr-orange" size={18} />
              <div className="text-base font-bold">{user.stats.streak}</div>
              <div className="text-[10px] text-gymstr-beige/70">Day Streak</div>
            </div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={isActive(item.path)}
                    asChild
                    tooltip={item.title}
                  >
                    <Link to={item.path}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} FitPass</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default DashboardSidebar;
