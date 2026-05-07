import { ArrowUpRight, Check } from "lucide-react";
import type { ServiceContent } from "@/content/site-content";
import { contact } from "@/data/contact";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function ServiceCard({ service }: { service: ServiceContent }) {
  const url = generateWhatsAppUrl(contact.phone, service.whatsappMessage);

  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <div className="flex flex-1 flex-col">
        <p className="text-sm font-bold text-blue-600">{service.price}</p>
        <h3 className="mt-3 text-xl font-bold text-slate-950">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
        <ul className="mt-5 space-y-2">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-slate-700">
              <Check size={17} className="mt-0.5 shrink-0 text-emerald-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
      >
        {service.cta}
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </article>
  );
}
