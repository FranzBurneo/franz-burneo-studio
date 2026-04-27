import { contact } from "@/data/contact";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export function JsonLd() {
  const serviceCatalog = services.map((service) => ({
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
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "es-EC",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: SITE_URL,
      email: contact.email,
      telephone: `+${contact.phone}`,
      areaServed: "Ecuador",
      address: {
        "@type": "PostalAddress",
        addressCountry: "EC",
        addressRegion: "Loja",
      },
      description:
        "Desarrollo páginas web, menús digitales, agendas online y sistemas personalizados para negocios en Ecuador.",
      sameAs: [],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de desarrollo web y software",
        itemListElement: serviceCatalog,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
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
