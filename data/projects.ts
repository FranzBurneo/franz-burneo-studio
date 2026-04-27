import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "Stay Loja",
    category: "Alojamiento turístico",
    description:
      "Landing real para un departamento tipo Airbnb en Loja, con galería, servicios, ubicación, reglas, WhatsApp y enlace a Airbnb.",
    url: "https://stayloja.com/",
    imageCandidates: [
      "/images/projects/stay-loja.jpg",
      "/images/projects/stay-loja.png",
    ],
  },
  {
    name: "Café Andino",
    category: "Menú digital QR",
    description:
      "Demo de menú digital para restaurantes con categorías, productos, carrito y pedido directo por WhatsApp.",
    url: "https://cafe-andino-six.vercel.app/",
    imageCandidates: [
      "/images/projects/cafe-andino.jpg",
      "/images/projects/cafe-andino.png",
    ],
  },
  {
    name: "ReservaPro",
    category: "Agenda online",
    description:
      "Demo de sistema de citas para negocios, con flujo de reserva y panel administrativo.",
    url: "https://reservapro-demo.vercel.app/",
    imageCandidates: [
      "/images/projects/reservapro.jpg",
      "/images/projects/reservapro.png",
    ],
  },
];
