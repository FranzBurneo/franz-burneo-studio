import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { MaintenanceSection } from "@/components/MaintenanceSection";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TechStackSection } from "@/components/TechStackSection";
import { TrustBar } from "@/components/TrustBar";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <PricingSection />
        <MaintenanceSection />
        <AboutSection />
        <TechStackSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
