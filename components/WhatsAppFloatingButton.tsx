import { MessageCircle } from "lucide-react";
import { contact } from "@/data/contact";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  const url = generateWhatsAppUrl(contact.phone, contact.mainWhatsAppMessage);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-500/30 transition hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
    >
      <MessageCircle size={19} aria-hidden="true" />
      WhatsApp
    </a>
  );
}
