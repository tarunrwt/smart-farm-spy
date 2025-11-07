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
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Complete Crop Health Solution
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to protect your crops and maximize yield in one powerful platform
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
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
