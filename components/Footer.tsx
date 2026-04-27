import Link from "next/link";
import { contact } from "@/data/contact";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

const quickLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Demos", href: "#demos" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const whatsappUrl = generateWhatsAppUrl(
    contact.phone,
    contact.mainWhatsAppMessage,
  );

  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-bold text-slate-950">Franz Burneo Studio</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
            Desarrollo web y software para negocios
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-950">Links rápidos</p>
          <div className="mt-3 flex flex-col gap-2">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-950">Contacto</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-blue-600">
              WhatsApp: {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-blue-600">
              {contact.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500">
        © 2026 Franz Burneo Studio. Todos los derechos reservados.
      </div>
    </footer>
  );
}
