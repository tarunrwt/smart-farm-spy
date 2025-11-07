import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI farming assistant. I can help you with crop disease diagnosis, treatment recommendations, irrigation schedules, and more. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on the image analysis, I recommend applying a copper-based fungicide within 24 hours. Make sure to spray early morning or late evening to avoid leaf burn.",
        "The weather forecast shows high humidity in the next 3 days, which increases fungal disease risk. Consider preventive spraying and ensure good air circulation around plants.",
        "Your crops are showing excellent health! Continue with the current watering schedule. I'd suggest adding organic compost next week to boost nutrient levels.",
      ];
      const assistantMessage: Message = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <section id="chatbot" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            AI Farming Assistant
          </h2>
          <p className="text-lg text-muted-foreground">
            Get instant expert advice on crop diseases, treatments, and farming best practices
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-border bg-card">
          <CardHeader className="border-b border-border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>AgriScan AI Assistant</CardTitle>
                <CardDescription>Powered by advanced agricultural knowledge base</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[500px] overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask about crop diseases, treatments, or farming tips..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1"
                />
                <Button onClick={handleSend} variant="hero" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 px-1">
                💡 Try asking: "How do I treat early blight?" or "What's the best watering schedule?"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Chatbot;
