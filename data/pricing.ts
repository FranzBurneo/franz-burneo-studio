import type { PricingPlan } from "@/types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Web esencial",
    price: "Desde $180",
    idealFor: "Negocios que necesitan una presencia profesional en internet.",
    includes: [
      "Landing page responsive",
      "Hasta 5 secciones",
      "Botón de WhatsApp",
      "Ubicación",
      "SEO básico",
      "Publicación inicial",
    ],
  },
  {
    name: "Menú digital",
    price: "Desde $220",
    idealFor: "Restaurantes, cafeterías y negocios de comida.",
    includes: [
      "Menú online",
      "Categorías",
      "Productos y precios",
      "Botón de pedido por WhatsApp",
      "Preparado para QR",
      "Diseño mobile-first",
    ],
    featured: true,
  },
  {
    name: "Agenda online",
    price: "Desde $450",
    idealFor: "Negocios que trabajan con citas.",
    includes: [
      "Servicios",
      "Selección de fecha y hora",
      "Formulario de reserva",
      "Confirmación por WhatsApp",
      "Panel administrativo básico",
      "Estados de citas",
    ],
  },
  {
    name: "Sistema personalizado",
    price: "Desde $700",
    idealFor: "Procesos internos o necesidades específicas.",
    includes: [
      "Análisis de requerimientos",
      "Diseño de solución",
      "Desarrollo web",
      "Panel administrativo",
      "Reportes o integraciones según alcance",
    ],
  },
];

export const maintenancePlans = [
  {
    name: "Básico",
    price: "Desde $25/mes",
    description: "Incluye hosting/monitoreo básico y cambios menores simples.",
  },
  {
    name: "Estándar",
    price: "Desde $50/mes",
    description: "Incluye soporte, ajustes mensuales y revisión de funcionamiento.",
  },
  {
    name: "Avanzado",
    price: "Bajo cotización",
    description:
      "Para sistemas con mejoras constantes o soporte más frecuente.",
  },
];
