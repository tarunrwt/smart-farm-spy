import { Sprout, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-medium">
            <Sprout className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">AgriScan AI</span>
            <span className="text-xs text-muted-foreground font-medium">Smart Crop Monitoring</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#scan" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
            Scan Crop
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
            Dashboard
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#chatbot" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
            AI Assistant
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <Button variant="hero" size="sm" className="ml-2 shadow-medium hover:shadow-elevated transition-all duration-300">Get Started</Button>
        </nav>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
