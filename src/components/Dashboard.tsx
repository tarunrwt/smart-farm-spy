import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Droplets, Thermometer, Wind, TrendingUp, Activity } from "lucide-react";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Real-Time Farm Dashboard
          </h2>
          <p className="text-lg text-muted-foreground">
            Monitor crop health, weather conditions, and get smart recommendations all in one place
          </p>
        </div>
        
        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Weather Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Temperature</CardTitle>
                  <Thermometer className="h-4 w-4 text-secondary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">28°C</div>
                <p className="text-xs text-muted-foreground mt-1">Optimal for growth</p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Humidity</CardTitle>
                  <Droplets className="h-4 w-4 text-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">65%</div>
                <p className="text-xs text-muted-foreground mt-1">Good conditions</p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Wind Speed</CardTitle>
                  <Wind className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12 km/h</div>
                <p className="text-xs text-muted-foreground mt-1">Light breeze</p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Rain Forecast</CardTitle>
                  <Cloud className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">20%</div>
                <p className="text-xs text-muted-foreground mt-1">Next 24 hours</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Scans */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Recent Crop Scans</CardTitle>
              <CardDescription>Latest AI analysis results from your farm</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "Today, 2:30 PM", crop: "Tomato Field A", status: "healthy", confidence: 98.5 },
                  { date: "Today, 10:15 AM", crop: "Wheat Section B", status: "healthy", confidence: 96.2 },
                  { date: "Yesterday, 4:45 PM", crop: "Corn Field C", status: "warning", confidence: 89.1 },
                ].map((scan, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        scan.status === "healthy" ? "bg-primary/10" : "bg-secondary/10"
                      }`}>
                        <Activity className={`h-5 w-5 ${
                          scan.status === "healthy" ? "text-primary" : "text-secondary"
                        }`} />
                      </div>
                      <div>
                        <div className="font-medium">{scan.crop}</div>
                        <div className="text-sm text-muted-foreground">{scan.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${
                        scan.status === "healthy" ? "text-primary" : "text-secondary"
                      }`}>
                        {scan.status === "healthy" ? "Healthy" : "Monitor"}
                      </div>
                      <div className="text-xs text-muted-foreground">{scan.confidence}% confident</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Smart Recommendations */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-l-4 border-l-primary bg-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <CardTitle>Irrigation Recommendation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Based on current weather conditions and soil moisture levels, increase watering by 15% for optimal crop growth.
                </p>
                <div className="text-sm font-medium text-primary">Action: Schedule watering for tomorrow morning</div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-secondary bg-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-secondary" />
                  <CardTitle>Fertilizer Alert</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Nitrogen levels are slightly low in Field C. Consider applying balanced NPK fertilizer within the next week.
                </p>
                <div className="text-sm font-medium text-secondary">Action: Order fertilizer supplies</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
