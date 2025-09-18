import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
import {
  LayoutDashboard,
  MapPin,
  BarChart3,
  AlertTriangle,
  Users,
  Settings,
  Bell,
  Calendar,
  FileText,
  Activity,
  Waves,
  Zap,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const dashboardItems = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
  { title: "Live Map", url: "/dashboard/map", icon: MapPin },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Alerts", url: "/dashboard/alerts", icon: AlertTriangle },
  { title: "Reports", url: "/dashboard/reports", icon: FileText },
];

const monitoringItems = [
  { title: "Real-time Feed", url: "/dashboard/monitoring", icon: Activity },
  { title: "Weather Data", url: "/dashboard/weather", icon: Zap },
  { title: "Ocean Conditions", url: "/dashboard/ocean", icon: Waves },
  { title: "Sensors", url: "/dashboard/sensors", icon: Globe },
];

const managementItems = [
  { title: "Users", url: "/dashboard/users", icon: Users },
  { title: "Events", url: "/dashboard/events", icon: Calendar },
  { title: "Notifications", url: "/dashboard/notifications", icon: Bell },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/dashboard" && currentPath === "/dashboard") return true;
    if (path !== "/dashboard" && currentPath.startsWith(path)) return true;
    return false;
  };

  const getNavCls = (path: string) =>
    isActive(path) 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card/50 backdrop-blur-sm border-r border-border/20">
        {/* Logo Section */}
        <div className="p-4 border-b border-border/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-ocean rounded-lg flex items-center justify-center shadow-glow-primary">
              <Waves className="w-4 h-4 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-foreground">OceanSafe</h2>
                <p className="text-xs text-muted-foreground">Coastal Monitoring</p>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Section */}
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="transition-all duration-200">
                    <NavLink to={item.url} end className={getNavCls(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                      {item.title === "Alerts" && !collapsed && (
                        <Badge variant="destructive" className="ml-auto h-5 w-5 p-0 text-xs">
                          3
                        </Badge>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Monitoring Section */}
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Monitoring
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {monitoringItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="transition-all duration-200">
                    <NavLink to={item.url} className={getNavCls(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Management Section */}
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="transition-all duration-200">
                    <NavLink to={item.url} className={getNavCls(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Status Section */}
        {!collapsed && (
          <div className="mt-auto p-4 border-t border-border/20">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">System Status</span>
                <Badge variant="secondary" className="bg-success/10 text-success">
                  Online
                </Badge>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Active Sensors</span>
                <span className="font-medium">24/25</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Last Update</span>
                <span className="font-medium">2m ago</span>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}