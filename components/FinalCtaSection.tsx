import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { SiteContent } from "@/content/site-content";
import { contact } from "@/data/contact";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCtaSection({
  content,
  quoteMessage,
}: {
  content: SiteContent["finalCtaSection"];
  quoteMessage: string;
}) {
  const url = generateWhatsAppUrl(contact.phone, quoteMessage);

  return (
    <section id="contacto" className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          {content.text}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            <MessageCircle size={18} aria-hidden="true" />
            {content.quoteCta}
          </a>
          <Link
            href="#demos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            {content.demosCta}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
