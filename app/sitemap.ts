import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  // Cuando existan páginas reales como /servicios o /demos, agregarlas aquí.
  // En esta one-page landing los anchors no se indexan como URLs independientes.
}
