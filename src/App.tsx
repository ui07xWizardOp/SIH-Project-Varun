import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignInPage from "./components/SignInPage";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Dashboard";
import DashboardAnalytics from "./pages/dashboard/DashboardAnalytics";
import DashboardAlerts from "./pages/dashboard/DashboardAlerts";
import DashboardReports from "./pages/dashboard/DashboardReports";
import DashboardMonitoring from "./pages/dashboard/DashboardMonitoring";
import DashboardUsers from "./pages/dashboard/DashboardUsers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="map" element={<Dashboard />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
            <Route path="alerts" element={<DashboardAlerts />} />
            <Route path="reports" element={<DashboardReports />} />
            <Route path="monitoring" element={<DashboardMonitoring />} />
            <Route path="weather" element={<DashboardMonitoring />} />
            <Route path="ocean" element={<DashboardMonitoring />} />
            <Route path="sensors" element={<DashboardMonitoring />} />
            <Route path="users" element={<DashboardUsers />} />
            <Route path="events" element={<DashboardReports />} />
            <Route path="notifications" element={<DashboardAlerts />} />
            <Route path="settings" element={<DashboardUsers />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
