
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { 
  User, 
  Home,
  CheckCircle
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

export function DashboardSidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // User data - simplified version of what's in the Dashboard
  const user = {
    name: "Alex Johnson",
    avatarUrl: "/lovable-uploads/35320248-e39b-4528-ac5c-40dce0880d8b.png"
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
        <div className="flex items-center p-4">
          <div className="relative mr-3">
            <Avatar className="w-10 h-10 border-2 border-gymstr-orange">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-[#22C55E] rounded-full p-0.5">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          </div>
          <h2 className="text-xl font-bold">FitPass</h2>
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
