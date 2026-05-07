import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { siteContent } from "@/content/site-content";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const content = siteContent.en;

export const metadata: Metadata = {
  title: {
    absolute: content.metadata.title,
  },
  description: content.metadata.description,
  keywords: content.metadata.keywords,
  alternates: {
    canonical: "/en",
    languages: {
      es: `${SITE_URL}/`,
      en: `${SITE_URL}/en`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: content.metadata.title,
    description: content.metadata.description,
    url: `${SITE_URL}/en`,
    siteName: SITE_NAME,
    locale: content.metadata.ogLocale,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Web development and software for businesses`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.metadata.title,
    description: content.metadata.description,
    images: [`${SITE_URL}/twitter-image`],
  },
};

export default function EnglishHome() {
  return <LandingPage content={content} locale="en" />;
}
