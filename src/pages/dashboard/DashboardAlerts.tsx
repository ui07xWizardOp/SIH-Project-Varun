import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertTriangle,
  Search,
  Filter,
  Clock,
  MapPin,
  User,
  CheckCircle,
  XCircle,
  Eye,
  Zap,
  Waves,
  Wind,
  Thermometer,
} from "lucide-react";

interface Alert {
  id: string;
  title: string;
  type: "tsunami" | "flood" | "storm" | "temperature";
  severity: "critical" | "high" | "medium" | "low";
  location: string;
  reporter: string;
  time: string;
  status: "active" | "resolved" | "investigating";
  description: string;
  verified: boolean;
}

const alertsData: Alert[] = [
  {
    id: "ALT-001",
    title: "Tsunami Warning - Samoa Coast",
    type: "tsunami",
    severity: "critical",
    location: "Samoa, Pacific Ocean",
    reporter: "@OceanWatch_Samoa",
    time: "2 min ago",
    status: "active",
    description: "Large wave activity detected. Immediate evacuation recommended for coastal areas.",
    verified: true,
  },
  {
    id: "ALT-002",
    title: "Coastal Flooding - Wailuku",
    type: "flood",
    severity: "high",
    location: "Wailuku, Maui, Hawaii",
    reporter: "@HawaiiCoastal",
    time: "15 min ago",
    status: "investigating",
    description: "Rising water levels observed near coastal road. Multiple reports from residents.",
    verified: false,
  },
  {
    id: "ALT-003",
    title: "Storm Surge Alert",
    type: "storm",
    severity: "medium",
    location: "Miami Beach, Florida",
    reporter: "Emergency Services",
    time: "1 hour ago",
    status: "active",
    description: "Moderate storm surge expected. Beach access restricted until further notice.",
    verified: true,
  },
  {
    id: "ALT-004",
    title: "Temperature Anomaly",
    type: "temperature",
    severity: "low",
    location: "San Diego Coast",
    reporter: "@SDCoastalWatch",
    time: "3 hours ago",
    status: "resolved",
    description: "Unusual water temperature readings detected by sensors. Now normalized.",
    verified: true,
  },
];

export default function DashboardAlerts() {
  const [alerts] = useState<Alert[]>(alertsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "tsunami": return <Waves className="w-4 h-4" />;
      case "flood": return <Waves className="w-4 h-4" />;
      case "storm": return <Wind className="w-4 h-4" />;
      case "temperature": return <Thermometer className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-500/10 text-red-400 border-red-500/20";
      case "high": return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      case "medium": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "low": return "bg-green-500/10 text-green-400 border-green-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-red-500/10 text-red-400 border-red-500/20";
      case "investigating": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "resolved": return "bg-green-500/10 text-green-400 border-green-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const filteredAlerts = alerts.filter((alert) => {
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === "all" || alert.severity === severityFilter;
    const matchesStatus = statusFilter === "all" || alert.status === statusFilter;
    
    return matchesSearch && matchesSeverity && matchesStatus;
  });

  const activeAlerts = alerts.filter(alert => alert.status === "active").length;
  const criticalAlerts = alerts.filter(alert => alert.severity === "critical").length;
  const unverifiedAlerts = alerts.filter(alert => !alert.verified).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Alert Management</h1>
          <p className="text-muted-foreground">
            Monitor and manage coastal hazard alerts and warnings
          </p>
        </div>
      </div>

      {/* Alert Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Alerts</p>
                <p className="text-3xl font-bold text-destructive">{activeAlerts}</p>
              </div>
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Critical Alerts</p>
                <p className="text-3xl font-bold text-red-400">{criticalAlerts}</p>
              </div>
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Unverified</p>
                <p className="text-3xl font-bold text-warning">{unverifiedAlerts}</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search alerts by title or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="investigating">Investigating</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <Card key={alert.id} className="border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center">
                    {getTypeIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-foreground">{alert.title}</h3>
                      {alert.verified && (
                        <CheckCircle className="w-4 h-4 text-success" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                    
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {alert.reporter}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {alert.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {alert.time}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Badge className={getSeverityColor(alert.severity)}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                  <Badge className={getStatusColor(alert.status)}>
                    {alert.status.toUpperCase()}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <span className="text-xs text-muted-foreground">
                  Alert ID: {alert.id}
                </span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {alert.status === "active" && (
                    <Button variant="destructive" size="sm">
                      Escalate
                    </Button>
                  )}
                  {!alert.verified && (
                    <Button variant="success" size="sm">
                      Verify
                    </Button>
                  )}
                  {alert.status === "active" && (
                    <Button variant="ghost" size="sm">
                      Resolve
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <AlertTriangle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No alerts found</h3>
            <p className="text-muted-foreground">
              No alerts match your current search criteria. Try adjusting your filters.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}