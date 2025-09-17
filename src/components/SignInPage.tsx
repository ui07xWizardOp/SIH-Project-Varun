import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Waves, 
  Eye, 
  EyeOff, 
  Shield, 
  Users, 
  AlertTriangle,
  ArrowLeft 
} from "lucide-react";
import abstractWaves from "@/assets/abstract-waves.jpg";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to dashboard after sign in
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-gradient-deep relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${abstractWaves})` }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Back to Landing */}
      <div className="absolute top-6 left-6 z-10">
        <Link to="/">
          <Button variant="floating" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-ocean rounded-xl flex items-center justify-center shadow-glow-primary">
                <Waves className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">OceanSafe</h1>
            </div>
            
            <Badge variant="secondary" className="mb-4 px-3 py-1 bg-primary/10 text-primary border-primary/20">
              <Shield className="w-4 h-4 mr-2" />
              Secure Access Portal
            </Badge>
            
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Welcome Back
            </h2>
            <p className="text-muted-foreground">
              Sign in to access the ocean monitoring dashboard
            </p>
          </div>

          {/* Sign In Form */}
          <Card className="shadow-depth border-border/50 bg-card/80 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-xl text-center">Sign In</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to continue
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSignIn} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@incois.gov.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-11 bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-11 px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <Eye className="w-4 h-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-border/50 bg-input/50 text-primary focus:ring-primary/20" 
                    />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    Forgot password?
                  </a>
                </div>

                <Button 
                  type="submit" 
                  variant="ocean" 
                  size="lg" 
                  className="w-full"
                >
                  Sign In to Dashboard
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full bg-border/50" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <Button variant="floating" size="lg" className="w-full">
                    <Shield className="w-4 h-4 mr-2" />
                    INCOIS Single Sign-On
                  </Button>
                  
                  <Button variant="floating" size="lg" className="w-full">
                    <Users className="w-4 h-4 mr-2" />
                    Emergency Access
                  </Button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-warning">Emergency Access</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      For disaster response teams: Contact your administrator for immediate access during critical events.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            By signing in, you agree to our{" "}
            <a href="#" className="text-primary hover:text-primary/80">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-primary hover:text-primary/80">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;