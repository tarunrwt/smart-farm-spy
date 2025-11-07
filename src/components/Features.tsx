import { Camera, Cloud, MessageSquare, LineChart, Droplets, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "AI Image Analysis",
    description: "Advanced CNN and YOLOv8 models detect diseases with 99%+ accuracy from smartphone photos",
  },
  {
    icon: Cloud,
    title: "Weather Integration",
    description: "Real-time weather data helps predict disease risks and optimize irrigation schedules",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Assistant",
    description: "24/7 expert advice through intelligent conversations about crop health and treatment",
  },
  {
    icon: LineChart,
    title: "Historical Dashboard",
    description: "Track crop health trends over time and monitor treatment effectiveness",
  },
  {
    icon: Droplets,
    title: "Smart Irrigation",
    description: "Optimize water usage based on crop needs, weather, and soil conditions",
  },
  {
    icon: AlertTriangle,
    title: "Early Warnings",
    description: "Get instant alerts about potential diseases before they spread across your fields",
  },
];

const Features = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Complete Crop Health Solution
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to protect your crops and maximize yield in one powerful platform
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 bg-card backdrop-blur hover:border-primary/30 transition-all duration-300 hover:shadow-elevated group">
                <CardHeader className="space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
