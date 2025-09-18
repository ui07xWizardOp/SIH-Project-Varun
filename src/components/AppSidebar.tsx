import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home,
  Wallet,
  MessageSquare,
  Calendar,
  Settings,
  Sun,
  Moon,
} from "lucide-react";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Wallets",
    url: "/dashboard/wallets", 
    icon: Wallet,
  },
  {
    title: "Chats",
    url: "/dashboard/chats",
    icon: MessageSquare,
    badge: "9",
  },
  {
    title: "Calendar",
    url: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <Sidebar className="border-r-0 bg-slate-900 text-white">
      <SidebarContent className="bg-transparent">
        {/* Logo/Brand */}
        <div className="p-6">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8">
            <div className="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center">
              <div className="w-4 h-2 bg-white rounded-full"></div>
              <div className="w-4 h-1 bg-white rounded-full mt-1"></div>
            </div>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`rounded-xl p-3 relative ${
                      currentPath === item.url 
                        ? 'bg-white text-slate-900 font-medium' 
                        : 'hover:bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    <Link to={item.url} className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto bg-slate-700 text-white text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Theme Toggle */}
        <div className="mt-auto p-4">
          <div className="flex items-center justify-between bg-slate-800 rounded-xl p-3">
            <div className="flex items-center space-x-3">
              <Sun className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-300">Light</span>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-12 h-6 bg-slate-700 rounded-full relative transition-colors"
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                isDarkMode ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-slate-300">Dark</span>
              <Moon className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}