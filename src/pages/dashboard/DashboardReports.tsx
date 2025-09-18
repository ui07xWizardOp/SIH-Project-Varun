import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  Plus,
  Search,
  Download,
  Calendar,
  MapPin,
  User,
  Eye,
  Edit,
  Trash2,
  Upload,
} from "lucide-react";

interface Report {
  id: string;
  title: string;
  type: "incident" | "maintenance" | "assessment" | "summary";
  author: string;
  date: string;
  status: "draft" | "published" | "archived";
  location: string;
  description: string;
  attachments: number;
}

const reportsData: Report[] = [
  {
    id: "RPT-001",
    title: "Monthly Coastal Hazard Assessment - November 2024",
    type: "assessment",
    author: "Dr. Sarah Chen",
    date: "2024-11-15",
    status: "published",
    location: "Pacific Coast Region",
    description: "Comprehensive assessment of coastal conditions and hazard levels across the Pacific coast region.",
    attachments: 3,
  },
  {
    id: "RPT-002",
    title: "Tsunami Warning System Maintenance Report",
    type: "maintenance",
    author: "Tech Team",
    date: "2024-11-12",
    status: "published",
    location: "All Sensor Networks",
    description: "Routine maintenance and calibration of tsunami detection sensors and communication systems.",
    attachments: 1,
  },
  {
    id: "RPT-003",
    title: "Storm Surge Incident - Hurricane Maya",
    type: "incident",
    author: "Emergency Response Team",
    date: "2024-11-08",
    status: "draft",
    location: "Florida Coast",
    description: "Detailed analysis of storm surge impacts during Hurricane Maya landfall.",
    attachments: 7,
  },
  {
    id: "RPT-004",
    title: "Weekly Operations Summary",
    type: "summary",
    author: "Operations Manager",
    date: "2024-11-10",
    status: "published",
    location: "All Regions",
    description: "Summary of monitoring activities, alerts processed, and system performance metrics.",
    attachments: 2,
  },
];

export default function DashboardReports() {
  const [reports] = useState<Report[]>(reportsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isNewReportOpen, setIsNewReportOpen] = useState(false);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "incident": return "bg-red-500/10 text-red-400 border-red-500/20";
      case "maintenance": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "assessment": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "summary": return "bg-green-500/10 text-green-400 border-green-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "published": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "archived": return "bg-gray-500/10 text-gray-400 border-gray-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || report.type === typeFilter;
    const matchesStatus = statusFilter === "all" || report.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalReports = reports.length;
  const publishedReports = reports.filter(report => report.status === "published").length;
  const draftReports = reports.filter(report => report.status === "draft").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports Management</h1>
          <p className="text-muted-foreground">
            Create, manage, and distribute coastal monitoring reports
          </p>
        </div>
        <Dialog open={isNewReportOpen} onOpenChange={setIsNewReportOpen}>
          <DialogTrigger asChild>
            <Button variant="ocean" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New Report
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Report</DialogTitle>
              <DialogDescription>
                Generate a new coastal monitoring report
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Report Title</label>
                  <Input placeholder="Enter report title" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Report Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="incident">Incident Report</SelectItem>
                      <SelectItem value="maintenance">Maintenance Report</SelectItem>
                      <SelectItem value="assessment">Assessment Report</SelectItem>
                      <SelectItem value="summary">Summary Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Location</label>
                <Input placeholder="Geographic location or region" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <Textarea 
                  placeholder="Brief description of the report content"
                  rows={4}
                />
              </div>
              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setIsNewReportOpen(false)}>
                  Cancel
                </Button>
                <Button variant="ocean">
                  Create Report
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Reports Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Reports</p>
                <p className="text-3xl font-bold text-foreground">{totalReports}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Published</p>
                <p className="text-3xl font-bold text-success">{publishedReports}</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Drafts</p>
                <p className="text-3xl font-bold text-warning">{draftReports}</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Edit className="w-6 h-6 text-warning" />
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
                  placeholder="Search reports by title, author, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="incident">Incident</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="assessment">Assessment</SelectItem>
                <SelectItem value="summary">Summary</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReports.map((report) => (
          <Card key={report.id} className="border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-foreground">{report.title}</h3>
                    <Badge className={getTypeColor(report.type)}>
                      {report.type.toUpperCase()}
                    </Badge>
                    <Badge className={getStatusColor(report.status)}>
                      {report.status.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {report.author}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {report.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(report.date).toLocaleDateString()}
                    </span>
                    {report.attachments > 0 && (
                      <span className="flex items-center">
                        <Upload className="w-3 h-3 mr-1" />
                        {report.attachments} attachment{report.attachments !== 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <span className="text-xs text-muted-foreground">
                  Report ID: {report.id}
                </span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-3 h-3 mr-1" />
                    Export
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="w-3 h-3 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No reports found</h3>
            <p className="text-muted-foreground">
              No reports match your current search criteria. Try adjusting your filters or create a new report.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}