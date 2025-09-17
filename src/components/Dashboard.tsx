import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Waves, 
  AlertTriangle, 
  Users, 
  Eye, 
  MapPin, 
  Clock, 
  TrendingUp,
  Activity,
  Bell,
  Settings,
  Home,
  Globe,
  Command,
  Heart,
  Brain,
  Zap,
  MessageSquare,
  X,
  Check,
  Navigation,
  Thermometer
} from "lucide-react";

interface AlertCardProps {
  level: "high" | "medium" | "low";
  title: string;
  location: string;
  time: string;
  reporter: string;
  avatar?: string;
  children?: React.ReactNode;
}

const AlertCard = ({ level, title, location, time, reporter, avatar, children }: AlertCardProps) => {
  const levelColors = {
    high: "destructive",
    medium: "secondary", 
    low: "secondary"
  } as const;

  return (
    <Card className="mb-4 hover:shadow-float transition-all duration-300 border-border/50 bg-card/90 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={avatar} />
              <AvatarFallback className="text-xs bg-muted">
                {reporter.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm">{reporter}</p>
              <p className="text-xs text-muted-foreground flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {location}
              </p>
            </div>
          </div>
          <Badge variant={levelColors[level]} className="text-xs">
            {level.toUpperCase()}
          </Badge>
        </div>
        
        <h4 className="font-medium text-foreground mb-2">{title}</h4>
        
        {children}
        
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/30">
          <p className="text-xs text-muted-foreground flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {time}
          </p>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="h-7 px-3 text-xs">
              <Check className="w-3 h-3 mr-1" />
              Verify
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-3 text-xs">
              Escalate
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "overview", label: "Overview", icon: Activity },
    { id: "command", label: "Command Center", icon: Command },
    { id: "heart", label: "Heart", icon: Heart },
    { id: "brain", label: "Brain", icon: Brain },
    { id: "lungs", label: "Lungs", icon: Zap },
    { id: "digestive", label: "Digestive", icon: TrendingUp },
    { id: "cancer", label: "Cancer", icon: AlertTriangle },
    { id: "hormones", label: "Hormones", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-deep">
      {/* Header */}
      <header className="border-b border-border/20 bg-card/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-ocean rounded-lg flex items-center justify-center shadow-glow-primary">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-foreground">OceanSafe</h1>
            </div>
            
            {/* Navigation Tabs */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={selectedTab === item.id ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedTab(item.id)}
                    className="text-sm"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                AD
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar - Live Reports */}
        <aside className="w-80 border-r border-border/20 bg-card/50 backdrop-blur-sm h-[calc(100vh-73px)] overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-foreground flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Live Field Reports (Social Pulse)
              </h2>
              <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                24 Active
              </Badge>
            </div>
            
            <div className="space-y-3">
              <AlertCard
                level="high" 
                title="Pools of rising water near Wailuku(surf)"
                location="Contraband Alley"
                time="2 min ago"
                reporter="@OceanWatcher"
              >
                <div className="my-2">
                  <div className="w-full h-20 bg-muted/50 rounded-md mb-2 flex items-center justify-center">
                    <Waves className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <Button variant="alert" size="sm" className="w-full">
                    Escalate
                  </Button>
                </div>
              </AlertCard>

              <AlertCard
                level="medium"
                title="Photo of rising water near Wailuku, Maui (flood)"
                location="@HawaiiWATCH09"
                time="15 min ago"
                reporter="Field Reporter"
              >
                <div className="flex space-x-2 mt-2">
                  <Button variant="success" size="sm" className="text-xs">
                    Verify
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Dismiss
                  </Button>
                </div>
              </AlertCard>

              <AlertCard
                level="low"
                title="Beachgoer/surfer foamline, normal conditions"
                location="Tsunami Alley"
                time="1 hour ago"
                reporter="@HawaiiXAX008"
              >
                <div className="flex space-x-2 mt-2">
                  <Button variant="success" size="sm" className="text-xs">
                    Verify
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Escalate
                  </Button>
                </div>
              </AlertCard>

              <AlertCard
                level="high"
                title="Road covered on sand Ami Beach road #HawaiiFlood"
                location="@HawaiiSocDev"
                time="2 hours ago"
                reporter="Emergency Services"
              >
                <div className="flex space-x-2 mt-2">
                  <Button variant="success" size="sm" className="text-xs">
                    Verify
                  </Button>
                  <Button variant="alert" size="sm" className="text-xs">
                    Dismiss
                  </Button>
                </div>
              </AlertCard>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 h-[calc(100vh-73px)] overflow-y-auto">
          <div className="p-6">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Hawaii Coastal Hazard Dashboard
                </h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Activity className="w-4 h-4 mr-1" />
                    Live Data Stream
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Last Updated: 2 min ago
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  Diagnostics
                </Button>
                <Button variant="ocean" size="sm">
                  <Navigation className="w-4 h-4 mr-2" />
                  Treatment Plan
                </Button>
              </div>
            </div>

            {/* Map Placeholder - Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="h-96 border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)] opacity-50" />
                      
                      {/* Map Interface Elements */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <div className="space-y-2">
                          <Badge variant="secondary" className="bg-card/80 backdrop-blur-sm">
                            <MapPin className="w-3 h-3 mr-1" />
                            Hawaii, USA
                          </Badge>
                          <Badge variant="destructive" className="bg-destructive/90 backdrop-blur-sm">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            High Risk Zone
                          </Badge>
                        </div>
                        
                        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-2 text-xs">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            <span>Critical</span>
                            <div className="w-2 h-2 bg-warning rounded-full" />
                            <span>Warning</span>
                            <div className="w-2 h-2 bg-success rounded-full" />
                            <span>Normal</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Mock Map Points */}
                      <div className="absolute top-20 left-1/3 w-3 h-3 bg-destructive rounded-full shadow-glow-accent animate-pulse" />
                      <div className="absolute top-32 right-1/4 w-3 h-3 bg-warning rounded-full shadow-sm" />
                      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-destructive rounded-full shadow-glow-accent animate-pulse" />
                      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-success rounded-full shadow-sm" />
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Globe className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                          <p className="text-muted-foreground text-lg">Interactive Map View</p>
                          <p className="text-muted-foreground/70 text-sm">Real-time hazard monitoring</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4">
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2 text-warning" />
                      Tsunami Watch - Samoa
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-video bg-muted/50 rounded border"></div>
                        <div className="aspect-video bg-muted/50 rounded border"></div>
                      </div>
                      <div className="aspect-video bg-muted/50 rounded border"></div>
                      
                      <div className="text-sm">
                        <p className="font-medium mb-1">Road covered on an Ann Beach road #HawaiiFlood</p>
                        <div className="flex space-x-2">
                          <Button variant="success" size="sm" className="text-xs flex-1">
                            Verify
                          </Button>
                          <Button variant="outline" size="sm" className="text-xs flex-1">
                            Escalate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Speed Spotter</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold">1/20</span>
                      <Thermometer className="w-5 h-5 text-primary" />
                    </div>
                    <Progress value={5} className="mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Trend State: Light • Automatic Fail-safe Patrol
                    </p>
                    <Button variant="ocean" size="sm" className="w-full mt-3">
                      Initiate Response Protocol
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Reports</p>
                      <p className="text-2xl font-bold text-foreground">1,247</p>
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-xs">
                    <TrendingUp className="w-3 h-3 mr-1 text-success" />
                    <span className="text-success">+12.3%</span>
                    <span className="text-muted-foreground ml-1">from last hour</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Critical Alerts</p>
                      <p className="text-2xl font-bold text-destructive">23</p>
                    </div>
                    <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-xs">
                    <TrendingUp className="w-3 h-3 mr-1 text-destructive" />
                    <span className="text-destructive">+5</span>
                    <span className="text-muted-foreground ml-1">in last 30 min</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Verified Reports</p>
                      <p className="text-2xl font-bold text-success">892</p>
                    </div>
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <Check className="w-5 h-5 text-success" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-xs">
                    <span className="text-success">71.5%</span>
                    <span className="text-muted-foreground ml-1">verification rate</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                      <p className="text-2xl font-bold text-primary">3,429</p>
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-xs">
                    <Activity className="w-3 h-3 mr-1 text-muted-foreground" />
                    <span className="text-muted-foreground">Online now</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;