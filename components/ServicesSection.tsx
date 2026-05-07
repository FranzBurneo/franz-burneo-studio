import type { SiteContent } from "@/content/site-content";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection({
  content,
}: {
  content: SiteContent["servicesSection"];
}) {
  return (
    <section id="servicios" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={content.title}
          description={content.description}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
