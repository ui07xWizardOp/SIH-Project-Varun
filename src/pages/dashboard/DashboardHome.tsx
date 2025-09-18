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
  Heart, 
  MessageCircle,
  Download,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

export default function DashboardHome() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Whats Up, Dmytro?</h1>
            <p className="text-slate-600">Today you have good financial activity</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search ..." 
                className="pl-10 w-64 bg-white border-slate-200"
              />
            </div>
            
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                9
              </span>
            </Button>
            
            {/* Profile */}
            <Avatar className="w-8 h-8">
              <AvatarImage src="/avatars/user.jpg" />
              <AvatarFallback className="bg-purple-500 text-white">D</AvatarFallback>
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
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">245.812</div>
                  <div className="text-sm text-slate-600">Views</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">245.812</div>
                  <div className="text-sm text-slate-600">Likes</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">245.812</div>
                  <div className="text-sm text-slate-600">Comments</div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Card */}
            <Card className="bg-white border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Optimized Project Management Without Harming The Environment
                    </h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                      RECOMMENDATION
                    </Badge>
                  </div>
                </div>
                
                {/* Video/Content Preview */}
                <div className="relative bg-gradient-to-br from-purple-400 via-blue-400 to-purple-300 rounded-2xl p-8 mb-6 overflow-hidden">
                  {/* Abstract wave pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                      <path
                        d="M0,100 Q50,50 100,100 T200,100 Q250,50 300,100 T400,100 L400,200 L0,200 Z"
                        fill="url(#gradient)"
                        className="animate-pulse"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
                          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  {/* Play button */}
                  <div className="relative z-10 flex items-center justify-center">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-full w-16 h-16"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Get the App Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Get the App</h4>
                  <p className="text-sm text-slate-600 mb-4">
                    In addition to the web version, we provide access to the mobile and desktop versions.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-400 to-purple-400 border-0">
                <CardContent className="p-6 text-white">
                  <div className="text-3xl font-bold mb-1">450M</div>
                  <div className="text-sm opacity-90">Downloads</div>
                  <div className="mt-4 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/40 rounded-xl"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar - Calendar */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">December</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-slate-600">2024-2025</span>
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

                {/* Weekly Schedule */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-slate-900">10 December 2024</h4>
                    <Badge variant="outline" className="text-xs">Weekly</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Monday</span>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-slate-100 text-slate-700 text-xs">Logotype</Badge>
                        <Badge className="bg-slate-100 text-slate-700 text-xs">CRM System</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Tuesday</span>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-slate-900 text-white text-xs">New Project</Badge>
                        <Badge className="bg-slate-100 text-slate-700 text-xs rounded-full">Nitro</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Wednesday</span>
                      <Badge className="bg-pink-400 text-white text-xs">Fashion Landing</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Thursday</span>
                      <Badge className="bg-slate-100 text-slate-700 text-xs">Abstract Shapes</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Friday</span>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-slate-900 text-white text-xs">Mycy Project</Badge>
                        <Badge className="bg-pink-400 text-white text-xs">Shopinstyl</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Saturday</span>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-slate-100 text-slate-700 text-xs">Nestwa</Badge>
                        <Badge className="bg-slate-900 text-white text-xs">Healty</Badge>
                      </div>
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