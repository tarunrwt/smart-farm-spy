import { Button } from "@/components/ui/button";
import { Camera, Cloud, MessageSquare, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              AI-Powered Agricultural Solution
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Protect Your Crops with{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Smart AI Detection
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl">
              Early disease detection powered by advanced AI. Simply capture a photo of your crops, 
              and get instant analysis with actionable recommendations to maximize your yield.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="lg" className="gap-2">
                <Camera className="h-5 w-5" />
                Start Scanning
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">99.2%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Farmers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
            <img
              src={heroImage}
              alt="Farmer using smartphone for crop monitoring"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Yield Increased</div>
                  <div className="text-xs text-muted-foreground">+35% This Season</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
