import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <Stats />
      <Testimonials />
    </div>
  );
};

export default Index;