import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Bookings",
    url: "/admin/bookings",
    icon: Inbox,
  },
  {
    title: "Hotels",
    url: "/admin/hotels",
    icon: Calendar,
  },
  {
    title: "Add a Hotel",
    url: "/admin/new-hotel",
    icon: Search,
  },
  {
    title: "Go to home",
    url: "/",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="bg-gray-200 p-6 mb-9 rounded-2xl text-xl font-semibold">Le Luxe</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter className="mt-auto mx-2 p-4 bg-gray-200 rounded-2xl mb-6">
          Profile
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
