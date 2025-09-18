import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Settings } from "lucide-react";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-100">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-slate-100">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}