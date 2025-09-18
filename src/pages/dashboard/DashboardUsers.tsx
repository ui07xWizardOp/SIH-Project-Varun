import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Users,
  UserPlus,
  Search,
  Shield,
  Clock,
  MapPin,
  Mail,
  Phone,
  Edit,
  Trash2,
  MoreHorizontal,
  UserCog,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Settings,
  Activity,
  Crown,
  Wrench,
  BarChart3,
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "super_admin" | "admin" | "operator" | "analyst" | "viewer" | "moderator";
  status: "active" | "inactive" | "pending" | "suspended";
  location: string;
  department: string;
  lastActive: string;
  reportsSubmitted: number;
  verifiedReports: number;
  avatar?: string;
  joinedDate: string;
  permissions: string[];
  isOnline: boolean;
}

const usersData: User[] = [
  {
    id: "USR-001",
    name: "Dr. Sarah Chen",
    email: "sarah.chen@oceansafe.gov",
    phone: "+1-555-0101",
    role: "super_admin",
    status: "active",
    location: "Pacific Coast HQ",
    department: "Administration",
    lastActive: "5 minutes ago",
    reportsSubmitted: 47,
    verifiedReports: 45,
    avatar: "/avatars/sarah.jpg",
    joinedDate: "2023-01-15",
    permissions: ["all"],
    isOnline: true,
  },
  {
    id: "USR-002", 
    name: "Marcus Rodriguez",
    email: "m.rodriguez@oceansafe.gov",
    phone: "+1-555-0102",
    role: "admin",
    status: "active",
    location: "Hawaii Station",
    department: "Operations",
    lastActive: "2 hours ago",
    reportsSubmitted: 23,
    verifiedReports: 22,
    joinedDate: "2023-02-20",
    permissions: ["manage_users", "view_reports", "approve_reports"],
    isOnline: true,
  },
  {
    id: "USR-003",
    name: "Emma Thompson",
    email: "emma.t@oceansafe.gov",
    phone: "+1-555-0103",
    role: "analyst",
    status: "inactive",
    location: "California Coast",
    department: "Data Analysis",
    lastActive: "1 day ago",
    reportsSubmitted: 89,
    verifiedReports: 87,
    joinedDate: "2023-03-10",
    permissions: ["view_reports", "analyze_data"],
    isOnline: false,
  },
  {
    id: "USR-004",
    name: "James Park", 
    email: "j.park@oceansafe.gov",
    phone: "+1-555-0104",
    role: "operator",
    status: "pending",
    location: "Remote",
    department: "Field Operations",
    lastActive: "Never",
    reportsSubmitted: 0,
    verifiedReports: 0,
    joinedDate: "2024-01-05",
    permissions: ["submit_reports"],
    isOnline: false,
  },
  {
    id: "USR-005",
    name: "Dr. Rajesh Patel",
    email: "r.patel@oceansafe.gov",
    phone: "+1-555-0105",
    role: "analyst",
    status: "active",
    location: "Mumbai Research Center",
    department: "Marine Biology",
    lastActive: "30 minutes ago",
    reportsSubmitted: 156,
    verifiedReports: 152,
    joinedDate: "2022-11-12",
    permissions: ["view_reports", "analyze_data", "research_access"],
    isOnline: true,
  },
  {
    id: "USR-006",
    name: "Lisa Wang",
    email: "l.wang@oceansafe.gov", 
    phone: "+1-555-0106",
    role: "moderator",
    status: "active",
    location: "Singapore Station",
    department: "Community Relations",
    lastActive: "1 hour ago",
    reportsSubmitted: 34,
    verifiedReports: 32,
    joinedDate: "2023-06-18",
    permissions: ["moderate_reports", "community_management"],
    isOnline: true,
  },
  {
    id: "USR-007",
    name: "Captain Torres",
    email: "torres@oceansafe.gov",
    phone: "+1-555-0107",
    role: "operator",
    status: "suspended",
    location: "Atlantic Fleet",
    department: "Maritime Operations",
    lastActive: "5 days ago",
    reportsSubmitted: 78,
    verifiedReports: 70,
    joinedDate: "2023-04-22",
    permissions: ["submit_reports", "field_operations"],
    isOnline: false,
  },
  {
    id: "USR-008",
    name: "Dr. Priya Sharma",
    email: "p.sharma@oceansafe.gov",
    phone: "+1-555-0108", 
    role: "viewer",
    status: "active",
    location: "Chennai Coastal Lab",
    department: "Research",
    lastActive: "3 hours ago",
    reportsSubmitted: 12,
    verifiedReports: 10,
    joinedDate: "2024-02-14",
    permissions: ["view_reports"],
    isOnline: true,
  },
];

export default function DashboardUsers() {
  const [users, setUsers] = useState<User[]>(usersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [departmentFilter, setDepartmentFilter] = useState<string>("all");
  const [isNewUserOpen, setIsNewUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isRoleChangeDialogOpen, setIsRoleChangeDialogOpen] = useState(false);
  const [newRole, setNewRole] = useState<User['role']>("viewer");
  const [isDemo, setIsDemo] = useState(true);
  const { toast } = useToast();

  // Demo mode - simulate real-time updates
  useEffect(() => {
    if (!isDemo) return;
    
    const interval = setInterval(() => {
      setUsers(prevUsers => 
        prevUsers.map(user => ({
          ...user,
          isOnline: Math.random() > 0.7,
          lastActive: user.isOnline ? "Just now" : user.lastActive,
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [isDemo]);

  const getRoleColor = (role: string) => {
    switch (role) {
      case "super_admin": return "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30";
      case "admin": return "bg-red-500/10 text-red-400 border-red-500/20";
      case "operator": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "analyst": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "moderator": return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      case "viewer": return "bg-gray-500/10 text-gray-400 border-gray-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "inactive": return "bg-gray-500/10 text-gray-400 border-gray-500/20";
      case "pending": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "suspended": return "bg-red-500/10 text-red-400 border-red-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "super_admin": return Crown;
      case "admin": return Settings;
      case "operator": return Wrench;
      case "analyst": return BarChart3;
      case "moderator": return Shield;
      case "viewer": return Eye;
      default: return Eye;
    }
  };

  const getRoleDescription = (role: string) => {
    switch (role) {
      case "super_admin": return "Full system access and control";
      case "admin": return "Administrative privileges and user management";
      case "operator": return "Field operations and report management";
      case "analyst": return "Data analysis and reporting tools";
      case "moderator": return "Community management and content moderation";
      case "viewer": return "Read-only access to reports and data";
      default: return "Basic access";
    }
  };

  const changeUserRole = (userId: string, newRole: User['role']) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
    
    const user = users.find(u => u.id === userId);
    toast({
      title: "✅ Role Updated Successfully",
      description: `${user?.name}'s role has been changed to ${newRole.replace('_', ' ').toUpperCase()}. ${getRoleDescription(newRole)}`,
    });
    setIsRoleChangeDialogOpen(false);
    setSelectedUser(null);
  };

  const changeUserStatus = (userId: string, newStatus: User['status']) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
    
    const user = users.find(u => u.id === userId);
    const statusAction = newStatus === 'active' ? 'activated' : newStatus === 'suspended' ? 'suspended' : newStatus;
    toast({
      title: `User ${statusAction}`,
      description: `${user?.name} has been ${statusAction}`,
    });
  };

  const deleteUser = (userId: string) => {
    const user = users.find(u => u.id === userId);
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    toast({
      title: "User Deleted",
      description: `${user?.name} has been removed from the system`,
      variant: "destructive",
    });
    setIsDeleteDialogOpen(false);
    setSelectedUser(null);
  };

  const approveUser = (userId: string) => {
    changeUserStatus(userId, 'active');
    toast({
      title: "✅ User Approved",
      description: "User has been approved and activated",
    });
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    const matchesDepartment = departmentFilter === "all" || user.department === departmentFilter; 
    
    return matchesSearch && matchesRole && matchesStatus && matchesDepartment;
  });

  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.status === "active").length;
  const pendingUsers = users.filter(user => user.status === "pending").length;
  const suspendedUsers = users.filter(user => user.status === "suspended").length;
  const onlineUsers = users.filter(user => user.isOnline).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground">
            Manage system users, roles, and permissions
          </p>
        </div>
        <Dialog open={isNewUserOpen} onOpenChange={setIsNewUserOpen}>
          <DialogTrigger asChild>
            <Button variant="ocean" size="sm">
              <UserPlus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Create a new user account with appropriate permissions
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input placeholder="Enter full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input placeholder="user@oceansafe.gov" type="email" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Role</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="viewer">Viewer</SelectItem>
                      <SelectItem value="analyst">Analyst</SelectItem>
                      <SelectItem value="operator">Operator</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input placeholder="Work location or station" />
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setIsNewUserOpen(false)}>
                  Cancel
                </Button>
                <Button variant="ocean">
                  Create User
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* User Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-3xl font-bold text-foreground">{totalUsers}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                <p className="text-3xl font-bold text-success">{activeUsers}</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-3xl font-bold text-warning">{pendingUsers}</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Online Now</p>
                <p className="text-3xl font-bold text-success">{onlineUsers}</p>
                <p className="text-xs text-muted-foreground mt-1">Real-time status</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Suspended</p>
                <p className="text-3xl font-bold text-destructive">{suspendedUsers}</p>
                <p className="text-xs text-muted-foreground mt-1">Require attention</p>
              </div>
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-destructive" />
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
                  placeholder="Search users by name, email, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="operator">Operator</SelectItem>
                <SelectItem value="analyst">Analyst</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Administration">Administration</SelectItem>
                <SelectItem value="Operations">Operations</SelectItem>
                <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                <SelectItem value="Field Operations">Field Operations</SelectItem>
                <SelectItem value="Marine Biology">Marine Biology</SelectItem>
                <SelectItem value="Community Relations">Community Relations</SelectItem>
                <SelectItem value="Maritime Operations">Maritime Operations</SelectItem>
                <SelectItem value="Research">Research</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-muted">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {user.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h3 className="font-semibold text-foreground flex items-center">
                        {user.name}
                        {user.isOnline && <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>}
                      </h3>
                      <Badge className={getRoleColor(user.role)} variant="outline">
                        {(() => {
                          const IconComponent = getRoleIcon(user.role);
                          return <IconComponent className="w-3 h-3 mr-1" />;
                        })()}
                        {user.role.replace('_', ' ').toUpperCase()}
                      </Badge>
                      <Badge className={getStatusColor(user.status)} variant="outline">
                        {user.status === 'active' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {user.status === 'pending' && <Clock className="w-3 h-3 mr-1" />}
                        {user.status === 'suspended' && <XCircle className="w-3 h-3 mr-1" />}
                        {user.status === 'inactive' && <AlertCircle className="w-3 h-3 mr-1" />}
                        {user.status.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {user.email}
                      </span>
                      <span className="flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {user.phone}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {user.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {user.lastActive}
                      </span>
                      <span className="flex items-center">
                        <Shield className="w-3 h-3 mr-1" />
                        {user.reportsSubmitted} reports
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <span className="font-medium">{user.department}</span> • Joined {user.joinedDate} • {user.verifiedReports} verified reports
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSelectedUser(user);
                      setNewRole(user.role);
                      setIsRoleChangeDialogOpen(true);
                    }}
                  >
                    <UserCog className="w-3 h-3 mr-1" />
                    Change Role
                  </Button>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Settings className="w-3 h-3 mr-1" />
                        Actions
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>User Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      
                      {user.status === 'pending' && (
                        <DropdownMenuItem onClick={() => approveUser(user.id)}>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve User
                        </DropdownMenuItem>
                      )}
                      
                      {user.status === 'active' && (
                        <DropdownMenuItem onClick={() => changeUserStatus(user.id, 'suspended')}>
                          <XCircle className="w-4 h-4 mr-2" />
                          Suspend User
                        </DropdownMenuItem>
                      )}
                      
                      {user.status === 'suspended' && (
                        <DropdownMenuItem onClick={() => changeUserStatus(user.id, 'active')}>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Reactivate User
                        </DropdownMenuItem>
                      )}
                      
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        className="text-destructive"
                        onClick={() => {
                          setSelectedUser(user);
                          setIsDeleteDialogOpen(true);
                        }}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/30">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span>User ID: {user.id}</span>
                    <span className="flex items-center">
                      Status: {user.isOnline ? (
                        <span className="flex items-center ml-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Online
                        </span>
                      ) : (
                        <span className="flex items-center ml-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
                          Offline
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      <Activity className="w-3 h-3 mr-1" />
                      Activity Log
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      Reset Password
                    </Button>
                    {user.status === "pending" && (
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="h-8 text-xs bg-success hover:bg-success/90"
                        onClick={() => approveUser(user.id)}
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Approve
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No users found</h3>
            <p className="text-muted-foreground">
              No users match your current search criteria. Try adjusting your filters or add a new user.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Role Change Dialog */}
      <AlertDialog open={isRoleChangeDialogOpen} onOpenChange={setIsRoleChangeDialogOpen}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Change User Role</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4">
              <div>Change role for <strong>{selectedUser?.name}</strong>?</div>
              <div className="space-y-3">
                <label className="text-sm font-medium block">Select New Role:</label>
                <Select value={newRole} onValueChange={(value: User['role']) => setNewRole(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="super_admin">
                      <div className="flex items-center">
                        <Crown className="w-4 h-4 mr-2" />
                        <div>
                          <div className="font-medium">Super Administrator</div>
                          <div className="text-xs text-muted-foreground">Full system access and control</div>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="admin">
                      <div className="flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        <div>
                          <div className="font-medium">Administrator</div>
                          <div className="text-xs text-muted-foreground">Administrative privileges and user management</div>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="operator">
                      <div className="flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        <div>
                          <div className="font-medium">Operator</div>
                          <div className="text-xs text-muted-foreground">Field operations and report management</div>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="analyst">
                      <div className="flex items-center">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        <div>
                          <div className="font-medium">Analyst</div>
                          <div className="text-xs text-muted-foreground">Data analysis and reporting tools</div>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="moderator">
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        <div>
                          <div className="font-medium">Moderator</div>
                          <div className="text-xs text-muted-foreground">Community management and content moderation</div>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="viewer">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        <div>
                          <div className="font-medium">Viewer</div>
                          <div className="text-xs text-muted-foreground">Read-only access to reports and data</div>
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => selectedUser && changeUserRole(selectedUser.id, newRole)}
              disabled={selectedUser?.role === newRole}
            >
              Change Role
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete User Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete User</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete <strong>{selectedUser?.name}</strong>? 
              This action cannot be undone and will permanently remove all user data and activity.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => selectedUser && deleteUser(selectedUser.id)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete User
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}