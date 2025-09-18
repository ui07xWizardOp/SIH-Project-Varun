import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Waves, 
  AlertTriangle, 
  MapPin, 
  Filter,
  ChevronDown,
  Circle
} from "lucide-react";

interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  severity: "critical" | "high" | "medium" | "low";
  type: string;
}

const MapComponent = () => {
  const markers: MapMarker[] = [
    { id: "1", lat: 25.7617, lng: -80.1918, severity: "critical", type: "Tsunami Warning" },
    { id: "2", lat: 28.5383, lng: -81.3792, severity: "high", type: "Storm Surge" },
    { id: "3", lat: 30.3322, lng: -81.6557, severity: "medium", type: "Coastal Flooding" },
    { id: "4", lat: 26.1224, lng: -80.1373, severity: "low", type: "High Tide" },
    { id: "5", lat: 24.5557, lng: -81.7842, severity: "high", type: "Hurricane Path" },
  ];

  const getMarkerColor = (severity: string) => {
    switch (severity) {
      case "critical": return "hsl(var(--destructive))";
      case "high": return "hsl(var(--warning))";
      case "medium": return "hsl(var(--warning))";
      case "low": return "hsl(var(--success))";
      default: return "hsl(var(--muted-foreground))";
    }
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 overflow-hidden">
      {/* Simulated Coastal/Satellite Map Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 40%, rgba(34, 197, 94, 0.1) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%),
            radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Coastal line effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-transparent to-green-200/30" />
      
      {/* Map Markers */}
      {markers.map((marker, index) => (
        <div
          key={marker.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-all duration-200 z-10"
          style={{
            left: `${20 + (index * 15) + (index % 2 === 0 ? 10 : -5)}%`,
            top: `${30 + (index * 12) + (index % 3 === 0 ? 15 : 5)}%`,
          }}
        >
          <div 
            className="w-10 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center relative"
            style={{ backgroundColor: getMarkerColor(marker.severity) }}
          >
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getMarkerColor(marker.severity) }}
              />
            </div>
            {/* Pulse animation for critical markers */}
            {marker.severity === "critical" && (
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ backgroundColor: getMarkerColor(marker.severity) }}
              />
            )}
          </div>
        </div>
      ))}
      
      {/* Atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

const FilterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="absolute top-4 left-4 z-20">
      <Card className="bg-black/70 backdrop-blur-md border-white/10 text-white min-w-[200px]">
        <CardContent className="p-4">
          {/* Filters Header */}
          <Button
            variant="ghost"
            className="w-full justify-between text-white hover:bg-white/10 mb-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
          
          {/* Legend */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-2">Legend:</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 fill-red-500 text-red-500" />
                    <span className="text-sm">Critical</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 fill-orange-500 text-orange-500" />
                    <span className="text-sm">Medium</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm">High</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 fill-green-500 text-green-500" />
                    <span className="text-sm">Low</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isOpen && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:bg-white/10">
                  Show All
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:bg-white/10">
                  Critical Only
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:bg-white/10">
                  Last 24h
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const EmergencyPanel = () => {
  return (
    <div className="absolute top-4 right-4 z-20 w-80">
      <Card className="bg-slate-200/90 backdrop-blur-md border-slate-300/20">
        <CardContent className="p-0">
          {/* Emergency Header */}
          <div className="bg-slate-800 text-white p-4 rounded-t-lg">
            <h2 className="font-bold text-lg text-center">EMERGENCY OF THE MOMENT</h2>
          </div>
          
          {/* Content Area */}
          <div className="p-4 h-48 flex items-center justify-center">
            <div className="text-center text-slate-600">
              <AlertTriangle className="w-12 h-12 mx-auto mb-3 text-slate-400" />
              <p className="text-sm">No active emergencies</p>
              <p className="text-xs text-slate-500 mt-1">Monitoring coastal conditions...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-background">
      {/* Full Screen Map */}
      <div className="absolute inset-0">
        <MapComponent />
      </div>
      
      {/* Filter Sidebar */}
      <FilterSidebar />
      
      {/* Emergency Panel */}
      <EmergencyPanel />
      
      {/* Bottom Navigation/Status Bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <Card className="bg-black/70 backdrop-blur-md border-white/10">
          <CardContent className="px-6 py-3">
            <div className="flex items-center space-x-6 text-white">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-ocean rounded-lg flex items-center justify-center">
                  <Waves className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold">OceanSafe</span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  System Online
                </Badge>
                <span className="text-white/70">5 Active Monitors</span>
                <span className="text-white/70">Last Update: 30s ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;