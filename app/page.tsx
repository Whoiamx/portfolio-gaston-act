import { CTASection } from "./components/CTASection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TechnologiesSection } from "./components/TechnologiesSection";
import { LocaleProvider } from "@/components/locale-provider";

export default function Home() {
  return (
    <LocaleProvider>
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <HeroSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ExperienceSection />
        <CTASection />
        <Footer />
      </main>
    </LocaleProvider>
  );
}
