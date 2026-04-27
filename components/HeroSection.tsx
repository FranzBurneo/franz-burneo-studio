import { ArrowRight, CheckCircle2, ExternalLink, MessageCircle } from "lucide-react";
import Link from "next/link";
import { contact } from "@/data/contact";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

const trustItems = [
  "Desarrollo responsive",
  "Contacto por WhatsApp",
  "Publicación en dominio propio",
  "Soporte inicial incluido",
];

const productCards = [
  {
    title: "Landing para alojamiento",
    detail: "Galería, ubicación, servicios y reservas",
    cta: "Ver landing",
    url: "https://stayloja.com/",
    ariaLabel: "Ver demo de landing para alojamiento Stay Loja",
  },
  {
    title: "Menú digital QR",
    detail: "Categorías, productos y pedido por WhatsApp",
    cta: "Ver menú",
    url: "https://cafe-andino-six.vercel.app/",
    ariaLabel: "Ver demo de menú digital QR Café Andino",
  },
  {
    title: "Agenda online",
    detail: "Citas, horarios y panel administrativo",
    cta: "Ver agenda",
    url: "https://reservapro-demo.vercel.app/",
    ariaLabel: "Ver demo de agenda online ReservaPro",
  },
];

export function HeroSection() {
  const quoteUrl = generateWhatsAppUrl(
    contact.phone,
    contact.quoteWhatsAppMessage,
  );

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_46%,#eef6ff_100%)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Soluciones web para negocios en Ecuador
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Desarrollo páginas web y sistemas simples para que tu negocio venda
            y se organice mejor
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Creo landing pages, menús digitales, agendas online y sistemas web
            para negocios que quieren captar clientes, recibir pedidos,
            gestionar reservas por WhatsApp y mejorar su presencia digital.
            Trabajo desarrollo web en Ecuador y Loja para páginas web para
            negocios locales, menús digitales para restaurantes y sistemas web
            personalizados.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Solicitar cotización
            </a>
            <Link
              href="#demos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:border-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              Ver demos
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 size={18} className="text-emerald-500" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70">
            <div className="rounded-[1.5rem] bg-slate-950 p-4 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Oferta digital
                  </p>
                  <p className="mt-1 text-lg font-bold">Soluciones para vender mejor</p>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Ecuador
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {productCards.map((card, index) => (
                  <a
                    key={card.title}
                    href={card.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={card.ariaLabel}
                    className="block cursor-pointer rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:-translate-y-0.5 hover:border-blue-300/60 hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold">{card.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          {card.detail}
                        </p>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-950">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-white p-3 text-slate-950">
                      <span className="text-sm font-semibold">{card.cta}</span>
                      <ExternalLink size={16} aria-hidden="true" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
            <p className="text-sm font-bold text-slate-950">Desde una idea clara</p>
            <p className="mt-1 text-sm text-slate-600">hasta una web publicada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
