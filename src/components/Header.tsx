import { Sprout, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Sprout className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">AgriScan AI</span>
            <span className="text-xs text-muted-foreground">Smart Crop Monitoring</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#scan" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Scan Crop
          </a>
          <a href="#dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="#chatbot" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            AI Assistant
          </a>
          <Button variant="hero" size="sm">Get Started</Button>
        </nav>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
