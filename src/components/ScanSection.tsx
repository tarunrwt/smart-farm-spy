import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, Loader2, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import cropAnalysisImage from "@/assets/crop-analysis.jpg";

const ScanSection = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<"none" | "healthy" | "disease">("none");

  const handleScan = () => {
    setIsScanning(true);
    setScanResult("none");
    
    // Simulate AI processing
    setTimeout(() => {
      setIsScanning(false);
      setScanResult("healthy");
    }, 2500);
  };

  return (
    <section id="scan" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Scan Your Crops in Seconds
          </h2>
          <p className="text-lg text-muted-foreground">
            Upload a photo or take a picture directly from your mobile device for instant AI analysis
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          <Card className="border-2 border-dashed border-primary/30 bg-gradient-to-br from-card to-muted/30">
            <CardHeader>
              <CardTitle>Upload Crop Image</CardTitle>
              <CardDescription>
                Take a clear photo of the affected crop leaves for best results
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                <img
                  src={cropAnalysisImage}
                  alt="Crop analysis preview"
                  className="w-full h-full object-cover"
                />
                {isScanning && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <Loader2 className="h-12 w-12 animate-spin mx-auto mb-3" />
                      <p className="text-sm font-medium">Analyzing crop health...</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={handleScan}
                  disabled={isScanning}
                >
                  <Upload className="h-4 w-4" />
                  Upload Photo
                </Button>
                <Button
                  variant="default"
                  className="w-full gap-2"
                  onClick={handleScan}
                  disabled={isScanning}
                >
                  <Camera className="h-4 w-4" />
                  Take Photo
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
              <CardDescription>
                AI-powered disease detection and treatment recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {scanResult === "none" && (
                <div className="text-center py-12 text-muted-foreground">
                  <Camera className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Upload or capture an image to begin analysis</p>
                </div>
              )}
              
              {scanResult === "healthy" && (
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Healthy Crop Detected</h3>
                      <p className="text-sm text-muted-foreground">
                        No signs of disease found. Your crop appears to be in excellent condition.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Confidence Score</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Healthy</span>
                        <span className="font-medium">98.5%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-[98.5%]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Recommendations</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Continue regular watering schedule
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Monitor for any changes in leaf color
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Apply balanced fertilizer next week
                      </li>
                    </ul>
                  </div>
                  
                  <Button variant="hero" className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Ask AI Assistant
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScanSection;
