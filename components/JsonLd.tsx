import { contact } from "@/data/contact";
import type { SiteContent } from "@/content/site-content";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function JsonLd({ content }: { content: SiteContent }) {
  const serviceCatalog = content.servicesSection.services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      areaServed: "Ecuador",
      provider: {
        "@type": "ProfessionalService",
        name: SITE_NAME,
      },
    },
  }));

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${SITE_URL}${content.path === "/" ? "" : content.path}`,
      description: content.metadata.description,
      inLanguage: content.jsonLd.language,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: `${SITE_URL}${content.path === "/" ? "" : content.path}`,
      email: contact.email,
      telephone: `+${contact.phone}`,
      areaServed: content.jsonLd.areaServed,
      address: {
        "@type": "PostalAddress",
        addressCountry: "EC",
        addressRegion: "Loja",
      },
      description: content.jsonLd.description,
      sameAs: [],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: content.jsonLd.catalogName,
        itemListElement: serviceCatalog,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqSection.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
