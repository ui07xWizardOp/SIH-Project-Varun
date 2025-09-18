import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Activity,
  Waves,
  Zap,
  Wind,
  Thermometer,
  Signal,
  WifiOff,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface SensorData {
  id: string;
  name: string;
  type: "wave" | "weather" | "temperature" | "seismic";
  status: "online" | "offline" | "warning";
  lastUpdate: string;
  value: number;
  unit: string;
  trend: "up" | "down" | "stable";
  location: string;
}

const sensorsData: SensorData[] = [
  {
    id: "WV-001",
    name: "Wave Height Monitor",
    type: "wave",
    status: "online",
    lastUpdate: "30s ago",
    value: 2.4,
    unit: "m",
    trend: "up",
    location: "Pacific Buoy 1",
  },
  {
    id: "WS-001", 
    name: "Wind Speed Station",
    type: "weather",
    status: "online",
    lastUpdate: "1m ago",
    value: 15.2,
    unit: "mph",
    trend: "stable",
    location: "Coast Station A",
  },
  {
    id: "TS-001",
    name: "Water Temperature",
    type: "temperature", 
    status: "warning",
    lastUpdate: "2m ago",
    value: 18.5,
    unit: "°C",
    trend: "down",
    location: "Thermal Sensor 1",
  },
  {
    id: "SS-001",
    name: "Seismic Monitor",
    type: "seismic",
    status: "offline",
    lastUpdate: "15m ago", 
    value: 0.0,
    unit: "Richter",
    trend: "stable",
    location: "Seismic Station 1",
  },
];

const liveFeeds = [
  {
    id: "feed-1",
    title: "Real-time Wave Data Stream",
    description: "Live wave height and period measurements from Pacific monitoring stations",
    status: "active",
    dataPoints: 1247,
    updateRate: "5s",
  },
  {
    id: "feed-2", 
    title: "Weather Conditions Feed",
    description: "Wind speed, direction, and atmospheric pressure from coastal weather stations",
    status: "active",
    dataPoints: 892,
    updateRate: "10s",
  },
  {
    id: "feed-3",
    title: "Social Media Monitoring",
    description: "Automated scanning of social platforms for coastal hazard reports",
    status: "active", 
    dataPoints: 456,
    updateRate: "30s",
  },
  {
    id: "feed-4",
    title: "Emergency Services Radio",
    description: "Monitoring emergency service communications for coastal incidents",
    status: "warning",
    dataPoints: 123,
    updateRate: "continuous",
  },
];

export default function DashboardMonitoring() {
  const [sensors] = useState<SensorData[]>(sensorsData);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online": return <CheckCircle className="w-4 h-4 text-success" />;
      case "warning": return <AlertCircle className="w-4 h-4 text-warning" />;
      case "offline": return <WifiOff className="w-4 h-4 text-destructive" />;
      default: return <Signal className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "wave": return <Waves className="w-5 h-5 text-blue-400" />;
      case "weather": return <Wind className="w-5 h-5 text-green-400" />;
      case "temperature": return <Thermometer className="w-5 h-5 text-orange-400" />;
      case "seismic": return <Zap className="w-5 h-5 text-purple-400" />;
      default: return <Activity className="w-5 h-5 text-gray-400" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="w-4 h-4 text-success" />;
      case "down": return <TrendingDown className="w-4 h-4 text-destructive" />;
      default: return <Activity className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const onlineSensors = sensors.filter(s => s.status === "online").length;
  const totalSensors = sensors.length;
  const warningCount = sensors.filter(s => s.status === "warning").length;
  const offlineCount = sensors.filter(s => s.status === "offline").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Real-time Monitoring</h1>
          <p className="text-muted-foreground">
            Live sensor data and monitoring feeds from coastal networks
          </p>
        </div>
        <Button variant="ocean" size="sm">
          <Activity className="w-4 h-4 mr-2" />
          System Diagnostics
        </Button>
      </div>

      {/* System Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Online Sensors</p>
                <p className="text-2xl font-bold text-success">{onlineSensors}/{totalSensors}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <Progress value={(onlineSensors / totalSensors) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Warnings</p>
                <p className="text-2xl font-bold text-warning">{warningCount}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-warning" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Sensors need attention</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Offline</p>
                <p className="text-2xl font-bold text-destructive">{offlineCount}</p>
              </div>
              <WifiOff className="w-8 h-8 text-destructive" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Require maintenance</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Data Rate</p>
                <p className="text-2xl font-bold text-primary">2.4k/min</p>
              </div>
              <Activity className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Data points received</p>
          </CardContent>
        </Card>
      </div>

      {/* Sensor Network Status */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Signal className="w-5 h-5 mr-2" />
            Sensor Network Status
          </CardTitle>
          <CardDescription>
            Real-time status and readings from all monitoring sensors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sensors.map((sensor) => (
              <Card key={sensor.id} className="bg-muted/30 border-border/30">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center">
                        {getTypeIcon(sensor.type)}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{sensor.name}</h4>
                        <p className="text-xs text-muted-foreground">{sensor.location}</p>
                      </div>
                    </div>
                    {getStatusIcon(sensor.status)}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-foreground">
                        {sensor.value}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {sensor.unit}
                      </span>
                      {getTrendIcon(sensor.trend)}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">ID: {sensor.id}</p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {sensor.lastUpdate}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Live Data Feeds */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Live Data Feeds
          </CardTitle>
          <CardDescription>
            Active monitoring feeds and data ingestion pipelines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {liveFeeds.map((feed) => (
              <div key={feed.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/30">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-medium text-foreground">{feed.title}</h4>
                    <Badge 
                      variant={feed.status === "active" ? "secondary" : "destructive"}
                      className={feed.status === "active" ? "bg-success/10 text-success" : ""}
                    >
                      {feed.status.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{feed.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{feed.dataPoints.toLocaleString()} data points</span>
                    <span>Updates every {feed.updateRate}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View Feed
                  </Button>
                  <Button variant="ghost" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real-time Activity Log */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Recent Activity
          </CardTitle>
          <CardDescription>
            Latest sensor readings and system events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-2 bg-success/5 rounded border-l-2 border-success">
              <CheckCircle className="w-4 h-4 text-success" />
              <div className="flex-1">
                <p className="text-sm">Wave sensor WV-001 reported normal readings</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-2 bg-warning/5 rounded border-l-2 border-warning">
              <AlertCircle className="w-4 h-4 text-warning" />
              <div className="flex-1">
                <p className="text-sm">Temperature sensor TS-001 showing elevated readings</p>
                <p className="text-xs text-muted-foreground">5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-2 bg-destructive/5 rounded border-l-2 border-destructive">
              <WifiOff className="w-4 h-4 text-destructive" />
              <div className="flex-1">
                <p className="text-sm">Seismic sensor SS-001 connection lost</p>
                <p className="text-xs text-muted-foreground">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-2 bg-success/5 rounded border-l-2 border-success">
              <Activity className="w-4 h-4 text-success" />
              <div className="flex-1">
                <p className="text-sm">Data feed synchronization completed</p>
                <p className="text-xs text-muted-foreground">18 minutes ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}