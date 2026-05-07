import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Desarrollo web y software para negocios`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "desarrollo web Ecuador",
    "desarrollo web Loja",
    "páginas web para negocios",
    "páginas web Ecuador",
    "páginas web Loja",
    "menús digitales",
    "menú QR",
    "menú digital para restaurantes",
    "pedidos por WhatsApp",
    "agenda online",
    "sistema de reservas",
    "software para negocios",
    "sistemas web personalizados",
    "desarrollo web freelance",
    "Franz Burneo",
    "Franz Burneo Studio",
  ],
  authors: [{ name: "Franz Burneo", url: SITE_URL }],
  creator: "Franz Burneo",
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
    languages: {
      es: `${SITE_URL}/`,
      en: `${SITE_URL}/en`,
      "x-default": `${SITE_URL}/`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} | Desarrollo web y software para negocios`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Franz Burneo Studio - Desarrollo web y software para negocios",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Desarrollo web y software para negocios`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/twitter-image`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get("x-current-pathname") || "/";
  const lang = pathname.startsWith("/en") ? "en" : "es";

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
