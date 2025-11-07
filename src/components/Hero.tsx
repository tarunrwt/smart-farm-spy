import { Button } from "@/components/ui/button";
import { Camera, Cloud, MessageSquare, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-primary">AI-Powered Crop Health Monitoring</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Protect Your Crops with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Smart AI</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Detect crop diseases instantly using your smartphone camera. Get real-time recommendations,
              weather insights, and expert advice to maximize your harvest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 shadow-elevated hover:shadow-featured transition-all duration-300">
                Start Scanning
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 hover:bg-muted/50 transition-all duration-300">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-12 pt-8 border-t border-border/40">
              <div>
                <div className="text-4xl font-bold text-foreground mb-1">99.2%</div>
                <div className="text-sm text-muted-foreground">Detection Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Active Farmers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-featured border border-border/50 backdrop-blur">
              <img
                src={heroImage}
                alt="Farmer using smartphone for crop analysis"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-elevated">
                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-medium">
                    <TrendingUp className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">+45%</div>
                    <div className="text-sm text-muted-foreground font-medium">Yield Increased</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 h-32 w-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 h-40 w-40 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
