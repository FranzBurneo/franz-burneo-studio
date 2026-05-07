import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { SiteContent } from "@/content/site-content";
import { contact } from "@/data/contact";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function LaunchOfferSection({
  content,
}: {
  content: SiteContent["launchOfferSection"];
}) {
  const url = generateWhatsAppUrl(contact.phone, content.whatsappMessage);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-blue-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_58%,#ecfdf5_100%)] p-6 shadow-sm sm:p-8 lg:grid lg:grid-cols-[1fr_0.72fr] lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
              {content.title}
            </p>
            <p className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
              {content.text}
            </p>
          </div>
          <div className="mt-7 lg:mt-0">
            <ul className="space-y-3">
              {content.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-500"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              {content.cta}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
