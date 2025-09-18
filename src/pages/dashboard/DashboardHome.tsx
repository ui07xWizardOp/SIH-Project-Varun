import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { 
  Search, 
  Bell, 
  Eye, 
  AlertTriangle, 
  Users,
  Download,
  ChevronLeft,
  ChevronRight,
  Play,
  Waves,
  Activity,
  MapPin,
} from "lucide-react";

export default function DashboardHome() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Ocean Hazard Dashboard</h1>
            <p className="text-slate-600">Real-time coastal monitoring and hazard reporting</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search hazards..." 
                className="pl-10 w-64 bg-white border-slate-200"
              />
            </div>
            
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            
            {/* Profile */}
            <Avatar className="w-8 h-8">
              <AvatarImage src="/avatars/user.jpg" />
              <AvatarFallback className="bg-blue-500 text-white">OM</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Content - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">1,247</div>
                  <div className="text-sm text-slate-600">Active Monitors</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">12</div>
                  <div className="text-sm text-slate-600">Active Alerts</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">8,342</div>
                  <div className="text-sm text-slate-600">Citizen Reports</div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Card */}
            <Card className="bg-white border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Integrated Ocean Hazard Monitoring System
                    </h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                      REAL-TIME MONITORING
                    </Badge>
                  </div>
                </div>
                
                {/* Interactive Map Preview */}
                <div className="relative bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-2xl p-8 mb-6 overflow-hidden">
                  {/* Ocean wave pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                      <path
                        d="M0,100 Q50,80 100,100 T200,100 Q250,80 300,100 T400,100 L400,200 L0,200 Z"
                        fill="url(#oceanGradient)"
                        className="animate-pulse"
                      />
                      <defs>
                        <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                          <stop offset="50%" stopColor="rgba(6, 182, 212, 0.4)" />
                          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  {/* Map button */}
                  <div className="relative z-10 flex items-center justify-center">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-full w-16 h-16"
                    >
                      <MapPin className="w-6 h-6" />
                    </Button>
                  </div>
                  
                  {/* Floating indicators */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
                    <span className="text-white text-sm">Live Updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Status Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Mobile App</h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Download the INCOIS Ocean Monitor app for real-time hazard reporting and alerts.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download App
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 border-0">
                <CardContent className="p-6 text-white">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-90">Monitoring</div>
                  <div className="mt-4 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar - System Status */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">System Status</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-slate-600">Today</span>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Calendar */}
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-0 p-0"
                />

                {/* Active Incidents */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-slate-900">Active Incidents</h4>
                    <Badge variant="outline" className="text-xs">Live</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Tsunami Warning</span>
                      <Badge className="bg-red-100 text-red-700 text-xs">Critical</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Storm Surge</span>
                      <Badge className="bg-orange-100 text-orange-700 text-xs">High</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Coastal Flooding</span>
                      <Badge className="bg-yellow-100 text-yellow-700 text-xs">Medium</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">High Tide Alert</span>
                      <Badge className="bg-blue-100 text-blue-700 text-xs">Low</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Sensor Network</span>
                      <Badge className="bg-green-100 text-green-700 text-xs">Operational</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Data Collection</span>
                      <Badge className="bg-green-100 text-green-700 text-xs">Active</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}