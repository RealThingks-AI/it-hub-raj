import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import Dashboard from "./pages/Dashboard";
import SupportCenter from "./pages/SupportCenter";
import InventoryProcurement from "./pages/InventoryProcurement";
import SystemUpdates from "./pages/SystemUpdates";
import NetworkConnectivity from "./pages/NetworkConnectivity";
import Access from "./pages/Access";
import Audit from "./pages/Audit";
import ReportsAnalytics from "./pages/ReportsAnalytics";
import NotificationsApprovals from "./pages/NotificationsApprovals";
import AdminConsole from "./pages/AdminConsole";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <DashboardHeader />
              <main className="flex-1 p-6 bg-gradient-subtle">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/support" element={<SupportCenter />} />
                  <Route path="/inventory" element={<InventoryProcurement />} />
                  <Route path="/system-updates" element={<SystemUpdates />} />
                  <Route path="/network" element={<NetworkConnectivity />} />
                  <Route path="/access" element={<Access />} />
                  <Route path="/audit" element={<Audit />} />
                  <Route path="/reports" element={<ReportsAnalytics />} />
                  <Route path="/notifications" element={<NotificationsApprovals />} />
                  <Route path="/admin" element={<AdminConsole />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
