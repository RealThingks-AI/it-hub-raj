import { useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Headphones,
  Package,
  Settings,
  Wifi,
  FileText,
  BarChart3,
  Bell,
  Shield,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Support Center", url: "/support", icon: Headphones },
  { title: "Inventory & Procurement", url: "/inventory", icon: Package },
  { title: "System & Updates", url: "/system-updates", icon: Settings },
  { title: "Network & Connectivity", url: "/network", icon: Wifi },
  { title: "Access Control", url: "/access", icon: Shield },
  { title: "Audit", url: "/audit", icon: FileText },
  { title: "Reports & Analytics", url: "/reports", icon: BarChart3 },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Admin Console", url: "/admin", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4 border-b border-sidebar-border">
          <h1 className="text-xl font-bold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            RealThingks IT
          </h1>
          <div className="text-xl font-bold text-sidebar-foreground text-center hidden group-data-[collapsible=icon]:block">
            RT
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Operations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      tooltip={item.title}
                    >
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
