
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { 
  User, 
  Home
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

export function DashboardSidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Dashboard navigation items - settings menu removed
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
        <div className="flex items-center p-2">
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
