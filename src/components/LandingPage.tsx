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
  ArrowRight
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
      <nav className="relative z-50 border-b border-border/20 bg-card/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-ocean rounded-lg flex items-center justify-center shadow-glow-primary">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-foreground">OceanSafe</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#platform" className="text-muted-foreground hover:text-foreground transition-colors">Platform</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <Link to="/signin">
                <Button variant="ocean" size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-deep opacity-80" />
        
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              Real-time Ocean Monitoring
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Integrated Platform for{" "}
              <span className="bg-gradient-ocean bg-clip-text text-transparent">
                Ocean Hazard Reporting
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Empowering coastal communities with real-time crowdsourced reporting and AI-powered 
              social media analytics for comprehensive ocean hazard monitoring and disaster management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Launch Dashboard
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="floating" size="xl">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${abstractWaves})` }}
        />
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Ocean Monitoring
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets community engagement for unparalleled coastal hazard awareness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-6 h-6 text-primary" />}
              title="Crowdsourced Reporting"
              description="Citizens report real-time hazards with geotagged photos, videos, and detailed descriptions directly from affected areas."
            />
            
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6 text-primary" />}
              title="Social Media Analytics"
              description="AI-powered NLP analyzes public social feeds to detect trends, sentiment, and unreported incidents across platforms."
            />
            
            <FeatureCard
              icon={<Eye className="w-6 h-6 text-primary" />}
              title="Real-time Dashboard"
              description="Unified command center providing disaster management agencies with comprehensive situational awareness."
            />
            
            <FeatureCard
              icon={<AlertTriangle className="w-6 h-6 text-warning" />}
              title="Early Warning System"
              description="Validate official warnings with ground-truth data and enable faster, more targeted emergency responses."
            />
            
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-primary" />}
              title="Geospatial Intelligence"
              description="Advanced mapping and geographic analysis of hazard patterns across India's extensive coastline."
            />
            
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-success" />}
              title="Data Verification"
              description="Multi-layer verification system ensures data accuracy and filters out misinformation during critical events."
            />
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