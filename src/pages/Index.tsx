import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ScanSection from "@/components/ScanSection";
import Dashboard from "@/components/Dashboard";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <ScanSection />
        <Dashboard />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
