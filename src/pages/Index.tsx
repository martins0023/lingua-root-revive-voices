
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CommunityPortal } from "@/components/CommunityPortal";
import { LearningModules } from "@/components/LearningModules";
import { CulturalRepository } from "@/components/CulturalRepository";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      <Hero />
      <Features />
      <CommunityPortal />
      <LearningModules />
      <CulturalRepository />
      <Footer />
    </div>
  );
};

export default Index;
