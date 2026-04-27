import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { contact } from "@/data/contact";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCtaSection() {
  const url = generateWhatsAppUrl(contact.phone, contact.quoteWhatsAppMessage);

  return (
    <section id="contacto" className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
          Empecemos por lo importante
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          ¿Listo para digitalizar tu negocio?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Cuéntame qué necesitas y te ayudo a elegir la solución más adecuada
          para tu negocio, presupuesto y etapa actual.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Solicitar cotización por WhatsApp
          </a>
          <Link
            href="#demos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            Ver demos
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
