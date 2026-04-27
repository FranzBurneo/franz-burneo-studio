export const contact = {
  brand: "Franz Burneo Studio",
  subtitle: "Desarrollo web y software para negocios",
  phone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "593961100356",
  phoneDisplay: "+593 96 110 0356",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "franzdavidburneo@gmail.com",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://franzburneo.com",
  mainWhatsAppMessage:
    "Hola Franz, me interesa una página web o sistema para mi negocio. Me gustaría recibir información.",
  quoteWhatsAppMessage:
    "Hola Franz, quiero solicitar una cotización para una página web o sistema para mi negocio.",
};
