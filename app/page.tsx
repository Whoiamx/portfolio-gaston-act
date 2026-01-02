import { CTASection } from "./components/CTASection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TechnologiesSection } from "./components/TechnologiesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechnologiesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
