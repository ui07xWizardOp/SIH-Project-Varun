import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Waves, 
  Globe, 
  Users, 
  AlertTriangle, 
  Zap, 
  Eye, 
  MessageSquare,
  ChevronRight,
  Play,
  ArrowRight,
  BarChart3
} from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";
import abstractWaves from "@/assets/abstract-waves.jpg";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="group hover:shadow-float transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm">
    <CardContent className="p-6">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-card-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-deep">
      {/* Navigation */}
      <nav className="relative z-50 bg-gray-800/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">FOUN</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors font-medium">Features</a>
              <a href="#platform" className="text-white/80 hover:text-white transition-colors font-medium">Platform</a>
              <Link to="/dashboard">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold">
                  REPORT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-teal-900/80" />
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-5xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Integrated<br />
              Platform for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Ocean Hazard<br />
                Reporting
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              Empowering coastal communities with real-time 
              crowdsourced reporting and AI-powered social 
              media analytics for comprehensive ocean hazard 
              monitoring and disaster management.
            </p>
            
            <Link to="/dashboard">
              <Button 
                size="xl" 
                className="bg-white/20 hover:bg-white/30 border-2 border-white/30 text-white backdrop-blur-sm text-lg px-12 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                LAUNCH DEMO
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            
            {/* Main Hero Feature Card */}
            <div className="lg:col-span-1">
              <Card className="h-full bg-gradient-to-br from-cyan-400 to-blue-500 border-0 text-white shadow-2xl overflow-hidden">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Real-time Ocean Monitoring</h2>
                  </div>
                  
                  {/* Illustration Placeholder */}
                  <div className="flex-1 bg-white/10 rounded-2xl mb-6 p-6 backdrop-blur-sm border border-white/20">
                    <div className="w-full h-48 bg-gradient-to-b from-cyan-300/30 to-blue-400/30 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="w-16 h-16 text-white/70 mx-auto mb-4" />
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Waves className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed">
                    Real-time Ocean Monitoring continuously tracks ocean conditions and threats using sensors, 
                    satellites, and crowdsourced data. It enables rapid analysis of hazards like storms or tsunamis, 
                    providing immediate alerts and actionable insights to protect coastal communities and guide emergency response.
                  </p>
                  
                  {/* Bottom Logo */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <Waves className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feature Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Social Media Analytics */}
              <Card className="bg-gradient-to-br from-blue-600 to-purple-700 border-0 text-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <MessageSquare className="w-8 h-8 mr-3" />
                      <h3 className="text-xl font-bold">Social Media Analytics</h3>
                    </div>
                    <ArrowRight className="w-6 h-6 bg-white/20 rounded-full p-1" />
                  </div>
                  
                  <p className="text-white/90 mb-4 text-sm">
                    AI-powered NLP analyzes public social feeds to detect trends, 
                    sentiment, and unreported incidents across platforms.
                  </p>
                  
                  <div className="w-full h-20 bg-white/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white/70" />
                  </div>
                </CardContent>
              </Card>

              {/* Crowdsourced Reporting */}
              <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 text-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Users className="w-8 h-8 mr-3" />
                      <h3 className="text-xl font-bold">Crowdsourced Reporting</h3>
                    </div>
                    <ArrowRight className="w-6 h-6 bg-white/20 rounded-full p-1" />
                  </div>
                  
                  <p className="text-white/90 mb-4 text-sm">
                    Citizens report real-time hazards with geotagged photos, 
                    videos, and detailed descriptions directly from affected areas.
                  </p>
                  
                  <div className="w-full h-20 bg-white/10 rounded-lg flex items-center justify-center">
                    <Users className="w-8 h-8 text-white/70" />
                  </div>
                </CardContent>
              </Card>

              {/* Data Verification */}
              <Card className="bg-gradient-to-br from-cyan-500 to-blue-600 border-0 text-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Shield className="w-8 h-8 mr-3" />
                      <h3 className="text-xl font-bold">Data Verification</h3>
                    </div>
                    <ArrowRight className="w-6 h-6 bg-white/20 rounded-full p-1" />
                  </div>
                  
                  <p className="text-white/90 mb-4 text-sm">
                    Multi-layer verification system ensures data accuracy and filters 
                    out misinformation during critical events.
                  </p>
                  
                  <div className="w-full h-20 bg-white/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white/70" />
                  </div>
                </CardContent>
              </Card>

              {/* Real-time Dashboard */}
              <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 border-0 text-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Eye className="w-8 h-8 mr-3" />
                      <h3 className="text-xl font-bold">Real-time Dashboard</h3>
                    </div>
                    <ArrowRight className="w-6 h-6 bg-white/20 rounded-full p-1" />
                  </div>
                  
                  <p className="text-white/90 mb-4 text-sm">
                    Unified command center providing disaster management agencies 
                    with comprehensive situational awareness.
                  </p>
                  
                  <div className="w-full h-20 bg-white/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white/70" />
                  </div>
                </CardContent>
              </Card>

              {/* Geospatial Intelligence */}
              <Card className="bg-gradient-to-br from-teal-500 to-green-600 border-0 text-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Globe className="w-8 h-8 mr-3" />
                      <h3 className="text-xl font-bold">Geospatial Intelligence</h3>
                    </div>
                    <ArrowRight className="w-6 h-6 bg-white/20 rounded-full p-1" />
                  </div>
                  
                  <p className="text-white/90 mb-4 text-sm">
                    Advanced mapping and geographic analysis of hazard patterns 
                    across India's extensive coastline.
                  </p>
                  
                  <div className="w-full h-20 bg-white/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white/70" />
                  </div>
                </CardContent>
              </Card>

              {/* Early Warning System */}
              <Card className="bg-gradient-to-br from-orange-500 to-red-600 border-0 text-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <AlertTriangle className="w-8 h-8 mr-3" />
                      <h3 className="text-xl font-bold">Early Warning System</h3>
                    </div>
                    <ArrowRight className="w-6 h-6 bg-white/20 rounded-full p-1" />
                  </div>
                  
                  <p className="text-white/90 mb-4 text-sm">
                    Validate official warnings with ground-truth data and enable 
                    faster, more targeted emergency responses.
                  </p>
                  
                  <div className="w-full h-20 bg-white/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-white/70" />
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Built for INCOIS
              </h2>
              <p className="text-xl text-muted-foreground">
                Supporting the Indian National Centre for Ocean Information Services 
                with cutting-edge technology for coastal community safety
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Community Empowerment</h3>
                    <p className="text-muted-foreground">Involves citizens in their own safety, fostering community resilience and local knowledge integration.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Last-Mile Intelligence</h3>
                    <p className="text-muted-foreground">Bridges the critical gap between official warnings and ground-truth reality during disasters.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Multi-Modal Data</h3>
                    <p className="text-muted-foreground">Combines active reporting with passive social media monitoring for comprehensive coverage.</p>
                  </div>
                </div>
              </div>
              
              <Card className="p-8 bg-gradient-ocean text-white border-0 shadow-depth">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
                  <CardDescription className="text-white/80">
                    Join the next generation of ocean monitoring and coastal community protection.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Link to="/signin">
                    <Button variant="hero" size="lg" className="w-full bg-white/20 hover:bg-white/30 border-white/30">
                      Access Dashboard
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-ocean rounded-lg flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">OceanSafe</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                © 2024 OceanSafe. Supporting INCOIS and coastal communities.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;