import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import { NotificationPanel } from "@/components/NotificationPanel";
import { ThemeToggle } from "@/components/ThemeToggle";

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border bg-background sticky top-0 z-10">
      <div className="h-full px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tickets, assets, users..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <NotificationPanel />
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
