import type { Locale, SiteContent } from "@/content/site-content";
import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { LaunchOfferSection } from "@/components/LaunchOfferSection";
import { MaintenanceSection } from "@/components/MaintenanceSection";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TechStackSection } from "@/components/TechStackSection";
import { TrustBar } from "@/components/TrustBar";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { WhyWorkWithMeSection } from "@/components/WhyWorkWithMeSection";

type LandingPageProps = {
  content: SiteContent;
  locale: Locale;
};

export function LandingPage({ content, locale }: LandingPageProps) {
  return (
    <>
      <JsonLd content={content} />
      <Navbar
        content={content.nav}
        locale={locale}
        quoteMessage={content.whatsappMessages.quote}
      />
      <main>
        <HeroSection
          content={content.hero}
          quoteMessage={content.whatsappMessages.quote}
        />
        <TrustBar items={content.trustBar} />
        <ServicesSection content={content.servicesSection} />
        <ProjectsSection content={content.projectsSection} />
        <ProcessSection content={content.processSection} />
        <AboutSection
          content={content.aboutSection}
          mainMessage={content.whatsappMessages.main}
        />
        <WhyWorkWithMeSection content={content.whyWorkWithMeSection} />
        <LaunchOfferSection content={content.launchOfferSection} />
        <PricingSection content={content.pricingSection} />
        <MaintenanceSection content={content.maintenanceSection} />
        <TechStackSection content={content.techStackSection} />
        <FaqSection content={content.faqSection} />
        <FinalCtaSection
          content={content.finalCtaSection}
          quoteMessage={content.whatsappMessages.quote}
        />
      </main>
      <Footer
        content={content.footer}
        locale={locale}
        mainMessage={content.whatsappMessages.main}
      />
      <WhatsAppFloatingButton
        content={content.whatsappFloating}
        mainMessage={content.whatsappMessages.main}
      />
    </>
  );
}
