import { ReactNode } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Shield } from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="border-b bg-primary/5 px-6 py-2 flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Administrator Mode</span>
          </div>
          <main className="flex-1 p-6 bg-gradient-subtle">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
