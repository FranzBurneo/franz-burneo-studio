import type { LucideIcon } from "lucide-react";

export type Locale = "es" | "en";

export type NavLink = {
  label: string;
  href: string;
};

export type ServiceContent = {
  title: string;
  description: string;
  includes: string[];
  price: string;
  cta: string;
  whatsappMessage: string;
};

export type ProjectContent = {
  name: string;
  category: string;
  description: string;
  url: string;
  imageCandidates: string[];
  cta: string;
  ariaLabel: string;
  imageAlt: string;
};

export type PricingPlanContent = {
  name: string;
  price: string;
  idealFor: string;
  includes: string[];
  featured?: boolean;
};

export type MaintenancePlanContent = {
  name: string;
  price: string;
  description: string;
};

export type FaqContent = {
  question: string;
  answer: string;
};

export type HeroProductContent = {
  title: string;
  detail: string;
  cta: string;
  url: string;
  ariaLabel: string;
};

export type TrustItemContent = {
  label: string;
  iconName: "badge" | "monitor" | "rocket" | "headphones";
};

export type SiteContent = {
  locale: Locale;
  htmlLang: string;
  path: "/" | "/en";
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
  };
  nav: {
    links: NavLink[];
    quote: string;
    menuLabelOpen: string;
    menuLabelClose: string;
  };
  whatsappMessages: {
    main: string;
    quote: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    quoteCta: string;
    demosCta: string;
    trustItems: string[];
    panelEyebrow: string;
    panelTitle: string;
    panelTag: string;
    products: HeroProductContent[];
    noteTitle: string;
    noteText: string;
  };
  trustBar: TrustItemContent[];
  servicesSection: {
    title: string;
    description: string;
    services: ServiceContent[];
  };
  projectsSection: {
    title: string;
    description: string;
    projects: ProjectContent[];
  };
  processSection: {
    title: string;
    steps: Array<{ title: string; description: string }>;
  };
  whyWorkWithMeSection: {
    title: string;
    items: Array<{
      iconName: "badge" | "code" | "message" | "monitor" | "rocket";
      title: string;
      text: string;
    }>;
  };
  launchOfferSection: {
    title: string;
    text: string;
    points: string[];
    cta: string;
    whatsappMessage: string;
  };
  pricingSection: {
    title: string;
    description: string;
    popular: string;
    idealForLabel: string;
    note: string;
    plans: PricingPlanContent[];
  };
  maintenanceSection: {
    title: string;
    description: string;
    note: string;
    plans: MaintenancePlanContent[];
  };
  aboutSection: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
    trustCards: Array<{
      iconName: "code" | "target" | "handshake";
      title: string;
      text: string;
    }>;
    profileText: string;
    links: Array<{ label: string; href: string }>;
  };
  techStackSection: {
    title: string;
    description: string;
    technologies: string[];
  };
  faqSection: {
    title: string;
    faqs: FaqContent[];
  };
  finalCtaSection: {
    eyebrow: string;
    title: string;
    text: string;
    quoteCta: string;
    demosCta: string;
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    contactTitle: string;
    rights: string;
  };
  whatsappFloating: {
    label: string;
    ariaLabel: string;
  };
  jsonLd: {
    language: string;
    description: string;
    catalogName: string;
    areaServed: string;
  };
};

const projectImages = {
  stayLoja: ["/images/projects/stay-loja.jpg", "/images/projects/stay-loja.png"],
  cafeAndino: [
    "/images/projects/cafe-andino.jpg",
    "/images/projects/cafe-andino.png",
  ],
  reservaPro: [
    "/images/projects/reservapro.jpg",
    "/images/projects/reservapro.png",
  ],
};

const demoUrls = {
  stayLoja: "https://stayloja.com/",
  cafeAndino: "https://cafe-andino-six.vercel.app/",
  reservaPro: "https://reservapro-demo.vercel.app/",
};

const technologies = [
  "Next.js",
  "React",
  "Angular",
  ".NET",
  "SQL Server",
  "PostgreSQL",
  "Docker",
  "Azure",
  "GitHub",
  "Vercel",
];

export const siteContent: Record<Locale, SiteContent> = {
  es: {
    locale: "es",
    htmlLang: "es-EC",
    path: "/",
    metadata: {
      title: "Franz Burneo Studio | Desarrollo web y software para negocios",
      description:
        "Desarrollo páginas web, menús digitales, agendas online y sistemas personalizados para negocios en Ecuador. Soluciones web para vender, recibir pedidos, gestionar reservas y organizar mejor tu negocio.",
      keywords: [
        "desarrollo web Ecuador",
        "desarrollo web Loja",
        "páginas web para negocios",
        "páginas web Ecuador",
        "páginas web Loja",
        "menús digitales",
        "menú QR",
        "menú digital para restaurantes",
        "pedidos por WhatsApp",
        "agenda online",
        "sistema de reservas",
        "software para negocios",
        "sistemas web personalizados",
        "desarrollo web freelance",
        "Franz Burneo",
        "Franz Burneo Studio",
      ],
      ogLocale: "es_EC",
    },
    nav: {
      links: [
        { label: "Servicios", href: "#servicios" },
        { label: "Demos", href: "#demos" },
        { label: "Proceso", href: "#proceso" },
        { label: "Precios", href: "#precios" },
        { label: "Sobre mí", href: "#sobre-mi" },
        { label: "Contacto", href: "#contacto" },
      ],
      quote: "Solicitar cotización",
      menuLabelOpen: "Abrir menú",
      menuLabelClose: "Cerrar menú",
    },
    whatsappMessages: {
      main:
        "Hola Franz, me interesa una página web o sistema para mi negocio. Me gustaría recibir información.",
      quote:
        "Hola Franz, quiero solicitar una cotización para una página web o sistema para mi negocio.",
    },
    hero: {
      badge: "Soluciones web para negocios en Ecuador",
      title:
        "Desarrollo páginas web y sistemas simples para que tu negocio venda y se organice mejor",
      subtitle:
        "Creo páginas web, menús digitales, agendas online y sistemas web para negocios que quieren captar clientes, recibir pedidos, gestionar reservas y mejorar su presencia digital.",
      quoteCta: "Solicitar cotización",
      demosCta: "Ver demos",
      trustItems: [
        "Desarrollo responsive",
        "Contacto por WhatsApp",
        "Publicación en dominio propio",
        "Soporte inicial incluido",
      ],
      panelEyebrow: "Oferta digital",
      panelTitle: "Soluciones para vender mejor",
      panelTag: "Ecuador",
      products: [
        {
          title: "Landing para alojamiento",
          detail: "Galería, ubicación, servicios y reservas",
          cta: "Ver landing",
          url: demoUrls.stayLoja,
          ariaLabel: "Ver demo de landing para alojamiento Stay Loja",
        },
        {
          title: "Menú digital QR",
          detail: "Categorías, productos y pedido por WhatsApp",
          cta: "Ver menú",
          url: demoUrls.cafeAndino,
          ariaLabel: "Ver demo de menú digital QR Café Andino",
        },
        {
          title: "Agenda online",
          detail: "Citas, horarios y panel administrativo",
          cta: "Ver agenda",
          url: demoUrls.reservaPro,
          ariaLabel: "Ver demo de agenda online ReservaPro",
        },
      ],
      noteTitle: "Desde una idea clara",
      noteText: "hasta una web publicada.",
    },
    trustBar: [
      { iconName: "badge", label: "Ideal para negocios locales" },
      { iconName: "monitor", label: "Diseño responsive" },
      { iconName: "rocket", label: "Publicación en Vercel/dominio" },
      { iconName: "headphones", label: "Soporte y mantenimiento opcional" },
    ],
    servicesSection: {
      title: "Servicios para digitalizar tu negocio",
      description:
        "Soluciones pensadas para negocios que necesitan atraer clientes, recibir pedidos, gestionar reservas o mejorar procesos sin complicarse con tecnología innecesaria.",
      services: [
        {
          title: "Landing pages para negocios",
          description:
            "Páginas web profesionales para alojamientos, consultorios, restaurantes, servicios profesionales y emprendimientos que necesitan presentarse mejor y recibir contactos por WhatsApp.",
          includes: [
            "Diseño responsive",
            "Secciones informativas",
            "Galería o servicios",
            "Botón de WhatsApp",
            "Ubicación",
            "SEO básico",
            "Publicación web",
          ],
          price: "Desde $180",
          cta: "Cotizar landing page",
          whatsappMessage:
            "Hola Franz, quiero cotizar una landing page para mi negocio.",
        },
        {
          title: "Menús digitales QR",
          description:
            "Menús digitales para restaurantes y cafeterías con categorías, productos, precios, promociones y pedidos directos por WhatsApp.",
          includes: [
            "Categorías de productos",
            "Precios",
            "Fotos",
            "Botón de pedido",
            "QR para mesas o redes",
            "Diseño mobile-first",
          ],
          price: "Desde $220",
          cta: "Cotizar menú digital",
          whatsappMessage:
            "Hola Franz, quiero cotizar un menú digital QR para mi negocio.",
        },
        {
          title: "Agenda online y reservas",
          description:
            "Sistemas de reserva para centros estéticos, consultorios, barberías, psicólogos, odontólogos y negocios que trabajan con citas.",
          includes: [
            "Servicios",
            "Horarios",
            "Formulario de reserva",
            "Confirmación por WhatsApp",
            "Panel administrativo demo",
            "Estados de citas",
          ],
          price: "Desde $450",
          cta: "Cotizar agenda online",
          whatsappMessage:
            "Hola Franz, quiero cotizar una agenda online para mi negocio.",
        },
        {
          title: "Sistemas web personalizados",
          description:
            "Desarrollo soluciones web a medida para organizar procesos internos, registros, reportes, catálogos, inventarios o flujos específicos del negocio.",
          includes: [
            "Análisis de requerimientos",
            "Diseño funcional",
            "Desarrollo web",
            "Panel administrativo",
            "Reportes o exportaciones",
            "Integraciones según alcance",
          ],
          price: "Desde $700 / bajo cotización",
          cta: "Hablar sobre mi proyecto",
          whatsappMessage:
            "Hola Franz, quiero conversar sobre un sistema web personalizado para mi negocio.",
        },
      ],
    },
    projectsSection: {
      title: "Demos reales que puedes revisar",
      description:
        "Estas demos muestran cómo podría verse una solución aplicada a tu negocio. Cada proyecto puede adaptarse a tu marca, servicios, colores y necesidades.",
      projects: [
        {
          name: "Stay Loja",
          category: "Alojamiento turístico",
          description:
            "Landing real para un departamento tipo Airbnb en Loja, con galería, servicios, ubicación, reglas, WhatsApp y enlace a Airbnb.",
          url: demoUrls.stayLoja,
          imageCandidates: projectImages.stayLoja,
          cta: "Ver demo",
          ariaLabel: "Ver demo de Stay Loja",
          imageAlt: "Captura de Stay Loja",
        },
        {
          name: "Café Andino",
          category: "Menú digital QR",
          description:
            "Demo de menú digital para restaurantes con categorías, productos, carrito y pedido directo por WhatsApp.",
          url: demoUrls.cafeAndino,
          imageCandidates: projectImages.cafeAndino,
          cta: "Ver demo",
          ariaLabel: "Ver demo de Café Andino",
          imageAlt: "Captura de Café Andino",
        },
        {
          name: "ReservaPro",
          category: "Agenda online",
          description:
            "Demo de sistema de citas para negocios, con flujo de reserva y panel administrativo.",
          url: demoUrls.reservaPro,
          imageCandidates: projectImages.reservaPro,
          cta: "Ver demo",
          ariaLabel: "Ver demo de ReservaPro",
          imageAlt: "Captura de ReservaPro",
        },
      ],
    },
    processSection: {
      title: "Proceso simple y claro",
      steps: [
        {
          title: "Conversamos sobre tu negocio",
          description:
            "Entiendo qué necesitas, qué vendes y qué objetivo tiene la web o sistema.",
        },
        {
          title: "Definimos alcance y propuesta",
          description: "Te explico qué incluye, tiempos, precio y forma de trabajo.",
        },
        {
          title: "Diseño y desarrollo",
          description: "Construyo una versión funcional para revisión.",
        },
        {
          title: "Revisión y ajustes",
          description: "Realizamos cambios acordados antes de publicar.",
        },
        {
          title: "Publicación",
          description:
            "Dejo tu sitio listo en internet con dominio, hosting o despliegue acordado.",
        },
        {
          title: "Soporte inicial",
          description:
            "Te acompaño con ajustes menores y dudas después de la entrega.",
        },
      ],
    },
    whyWorkWithMeSection: {
      title: "Por qué trabajar conmigo",
      items: [
        {
          iconName: "badge",
          title: "Demos reales publicadas",
          text: "Puedes revisar ejemplos funcionales antes de decidir qué solución se adapta mejor a tu negocio.",
        },
        {
          iconName: "code",
          title: "Experiencia en desarrollo de software",
          text: "Trabajo con sistemas web, APIs, integraciones y soluciones aplicadas a procesos reales.",
        },
        {
          iconName: "message",
          title: "Comunicación directa por WhatsApp",
          text: "Tienes un canal claro para resolver dudas, revisar avances y coordinar ajustes.",
        },
        {
          iconName: "monitor",
          title: "Diseño responsive",
          text: "La web se prepara para verse bien en móvil, tablet y escritorio.",
        },
        {
          iconName: "rocket",
          title: "Acompañamiento hasta publicación",
          text: "Te ayudo a dejar el sitio listo en internet, con soporte inicial incluido.",
        },
      ],
    },
    launchOfferSection: {
      title: "Oferta de lanzamiento",
      text:
        "Estoy tomando los primeros proyectos con precio especial para negocios que quieran mejorar su presencia digital con una web, menú digital o agenda online.",
      points: [
        "Precio especial para primeros clientes",
        "Propuesta ajustada al alcance",
        "Acompañamiento hasta publicación",
        "Soporte inicial incluido",
      ],
      cta: "Quiero aprovechar la oferta",
      whatsappMessage:
        "Hola Franz, vi la oferta de lanzamiento y me interesa una web o sistema para mi negocio.",
    },
    pricingSection: {
      title: "Planes iniciales",
      description:
        "Precios referenciales pensados para negocios locales. El valor final depende del alcance, contenido, funcionalidades, dominio, hosting y soporte requerido.",
      popular: "Popular",
      idealForLabel: "Ideal para:",
      note:
        "Los precios son referenciales para proyectos iniciales. Se puede ajustar una propuesta según presupuesto y necesidades.",
      plans: [
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
      ],
    },
    maintenanceSection: {
      title: "También puedo ayudarte después de publicar",
      description:
        "No tienes que preocuparte solo por la parte técnica. Puedo ayudarte con soporte, cambios menores, mantenimiento y mejoras continuas.",
      note:
        "Dominio, herramientas externas o servicios de terceros pueden tener costos adicionales.",
      plans: [
        {
          name: "Básico",
          price: "Desde $25/mes",
          description:
            "Incluye hosting/monitoreo básico y cambios menores simples.",
        },
        {
          name: "Estándar",
          price: "Desde $50/mes",
          description:
            "Incluye soporte, ajustes mensuales y revisión de funcionamiento.",
        },
        {
          name: "Avanzado",
          price: "Bajo cotización",
          description:
            "Para sistemas con mejoras constantes o soporte más frecuente.",
        },
      ],
    },
    aboutSection: {
      eyebrow: "Sobre mí",
      title: "Experiencia técnica aplicada a negocios reales",
      text:
        "Soy desarrollador full stack con experiencia creando sistemas web, APIs, integraciones y soluciones internas para empresas. Hoy aplico esa experiencia para ayudar a negocios locales a tener páginas web, menús digitales, agendas online y sistemas simples que les permitan vender, reservar y organizarse mejor.",
      cta: "Conversemos sobre tu idea",
      trustCards: [
        {
          iconName: "code",
          title: "Desarrollo de software",
          text:
            "Experiencia construyendo aplicaciones web, APIs, integraciones y funcionalidades para procesos reales.",
        },
        {
          iconName: "target",
          title: "Enfoque de negocio",
          text:
            "Cada solución se plantea según el objetivo del negocio: captar clientes, recibir pedidos, gestionar reservas u organizar información.",
        },
        {
          iconName: "handshake",
          title: "Acompañamiento",
          text:
            "Puedo ayudarte con la publicación, dominio, ajustes iniciales, soporte y mejoras posteriores.",
        },
      ],
      profileText:
        "También puedes revisar mi perfil profesional completo en LinkedIn o mis proyectos en GitHub.",
      links: [
        {
          label: "Ver LinkedIn",
          href: "https://www.linkedin.com/in/franz-burneo-monteros-7422a7187/",
        },
        { label: "Ver GitHub", href: "https://github.com/FranzBurneo" },
      ],
    },
    techStackSection: {
      title: "Tecnologías con las que trabajo",
      description:
        "El stack se elige según el tipo de proyecto, presupuesto y necesidades del negocio.",
      technologies,
    },
    faqSection: {
      title: "Preguntas frecuentes",
      faqs: [
        {
          question: "¿Cuánto tarda una página web?",
          answer:
            "Una landing page sencilla puede tomar entre 1 y 2 semanas, dependiendo del contenido, revisiones y alcance.",
        },
        {
          question: "¿El precio incluye dominio y hosting?",
          answer:
            "Depende del plan. Puedo ayudarte a configurar dominio y hosting, pero algunos servicios externos pueden tener costos adicionales.",
        },
        {
          question: "¿Puedo pedir cambios después de publicada?",
          answer:
            "Sí. Se pueden incluir ajustes iniciales y también contratar mantenimiento mensual.",
        },
        {
          question: "¿Trabajas solo con negocios de Loja?",
          answer:
            "No. Puedo trabajar con negocios de cualquier ciudad de Ecuador o de forma remota.",
        },
        {
          question: "¿Puedo tener una web similar a una de las demos?",
          answer:
            "Sí. Las demos sirven como base visual y funcional, pero se adaptan a tu marca, contenido y necesidades.",
        },
        {
          question: "¿Haces sistemas con panel administrativo?",
          answer:
            "Sí. Dependiendo del alcance, puedo desarrollar paneles para gestionar citas, productos, reservas, reportes o información del negocio.",
        },
        {
          question: "¿El sistema puede crecer después?",
          answer:
            "Sí. Podemos iniciar con una versión simple y luego agregar funcionalidades como pagos, usuarios, reportes, integraciones o automatizaciones.",
        },
        {
          question: "¿Cómo se realiza el pago?",
          answer:
            "Generalmente se trabaja con un anticipo para iniciar y un saldo contra entrega o por hitos, según el tamaño del proyecto.",
        },
      ],
    },
    finalCtaSection: {
      eyebrow: "Empecemos por lo importante",
      title: "¿Listo para digitalizar tu negocio?",
      text:
        "Cuéntame qué necesitas y te ayudo a elegir la solución más adecuada para tu negocio, presupuesto y etapa actual.",
      quoteCta: "Solicitar cotización por WhatsApp",
      demosCta: "Ver demos",
    },
    footer: {
      tagline: "Desarrollo web y software para negocios",
      quickLinksTitle: "Links rápidos",
      contactTitle: "Contacto",
      rights: "© 2026 Franz Burneo Studio. Todos los derechos reservados.",
    },
    whatsappFloating: {
      label: "WhatsApp",
      ariaLabel: "Cotizar por WhatsApp",
    },
    jsonLd: {
      language: "es-EC",
      description:
        "Desarrollo páginas web, menús digitales, agendas online y sistemas personalizados para negocios en Ecuador.",
      catalogName: "Servicios de desarrollo web y software",
      areaServed: "Ecuador",
    },
  },
  en: {
    locale: "en",
    htmlLang: "en",
    path: "/en",
    metadata: {
      title: "Franz Burneo Studio | Web development and software for businesses",
      description:
        "I build websites, digital menus, online booking systems, and custom web software for businesses in Ecuador. Web solutions to sell, receive orders, manage bookings, and organize your business better.",
      keywords: [
        "web development Ecuador",
        "web development Loja",
        "websites for businesses",
        "business websites Ecuador",
        "business websites Loja",
        "digital menus",
        "QR menu",
        "digital menu for restaurants",
        "WhatsApp orders",
        "online booking",
        "booking system",
        "business software",
        "custom web systems",
        "freelance web development",
        "Franz Burneo",
        "Franz Burneo Studio",
      ],
      ogLocale: "en_US",
    },
    nav: {
      links: [
        { label: "Services", href: "#servicios" },
        { label: "Demos", href: "#demos" },
        { label: "Process", href: "#proceso" },
        { label: "Pricing", href: "#precios" },
        { label: "About", href: "#sobre-mi" },
        { label: "Contact", href: "#contacto" },
      ],
      quote: "Request a quote",
      menuLabelOpen: "Open menu",
      menuLabelClose: "Close menu",
    },
    whatsappMessages: {
      main:
        "Hi Franz, I’m interested in a website or system for my business. I’d like to receive more information.",
      quote:
        "Hi Franz, I want to request a quote for a website or system for my business.",
    },
    hero: {
      badge: "Web solutions for businesses in Ecuador",
      title:
        "I build websites and simple systems so your business can sell and stay organized",
      subtitle:
        "I build websites, digital menus, online booking systems and simple web tools for businesses that want to get more clients, receive orders, manage bookings and improve their digital presence.",
      quoteCta: "Request a quote",
      demosCta: "View demos",
      trustItems: [
        "Responsive development",
        "WhatsApp contact",
        "Publishing on your own domain",
        "Initial support included",
      ],
      panelEyebrow: "Digital offer",
      panelTitle: "Solutions to sell better",
      panelTag: "Ecuador",
      products: [
        {
          title: "Accommodation landing page",
          detail: "Gallery, location, services, and bookings",
          cta: "View landing",
          url: demoUrls.stayLoja,
          ariaLabel: "View Stay Loja accommodation landing page demo",
        },
        {
          title: "Digital QR menu",
          detail: "Categories, products, and WhatsApp orders",
          cta: "View menu",
          url: demoUrls.cafeAndino,
          ariaLabel: "View Café Andino digital QR menu demo",
        },
        {
          title: "Online booking",
          detail: "Appointments, schedules, and admin panel",
          cta: "View booking",
          url: demoUrls.reservaPro,
          ariaLabel: "View ReservaPro online booking demo",
        },
      ],
      noteTitle: "From a clear idea",
      noteText: "to a published website.",
    },
    trustBar: [
      { iconName: "badge", label: "Ideal for local businesses" },
      { iconName: "monitor", label: "Responsive design" },
      { iconName: "rocket", label: "Vercel/domain publishing" },
      { iconName: "headphones", label: "Optional support and maintenance" },
    ],
    servicesSection: {
      title: "Services to digitize your business",
      description:
        "Solutions for businesses that need to attract customers, receive orders, manage bookings, or improve processes without unnecessary technical complexity.",
      services: [
        {
          title: "Landing pages for businesses",
          description:
            "Professional websites for accommodations, clinics, restaurants, professional services, and entrepreneurs that need a stronger online presence and WhatsApp leads.",
          includes: [
            "Responsive design",
            "Informational sections",
            "Gallery or services",
            "WhatsApp button",
            "Location",
            "Basic SEO",
            "Website publishing",
          ],
          price: "From $180",
          cta: "Quote landing page",
          whatsappMessage:
            "Hi Franz, I want a quote for a landing page for my business.",
        },
        {
          title: "Digital QR menus",
          description:
            "Digital menus for restaurants and coffee shops with categories, products, prices, promotions, and direct WhatsApp orders.",
          includes: [
            "Product categories",
            "Prices",
            "Photos",
            "Order button",
            "QR for tables or social media",
            "Mobile-first design",
          ],
          price: "From $220",
          cta: "Quote digital menu",
          whatsappMessage:
            "Hi Franz, I want a quote for a digital QR menu for my business.",
        },
        {
          title: "Online booking and appointments",
          description:
            "Booking systems for beauty centers, clinics, barbershops, psychologists, dentists, and businesses that work with appointments.",
          includes: [
            "Services",
            "Schedules",
            "Booking form",
            "WhatsApp confirmation",
            "Demo admin panel",
            "Appointment statuses",
          ],
          price: "From $450",
          cta: "Quote online booking",
          whatsappMessage:
            "Hi Franz, I want a quote for an online booking system for my business.",
        },
        {
          title: "Custom web systems",
          description:
            "Custom web solutions to organize internal processes, records, reports, catalogs, inventory, or specific business workflows.",
          includes: [
            "Requirements analysis",
            "Functional design",
            "Web development",
            "Admin panel",
            "Reports or exports",
            "Integrations depending on scope",
          ],
          price: "From $700 / quoted by scope",
          cta: "Talk about my project",
          whatsappMessage:
            "Hi Franz, I want to talk about a custom web system for my business.",
        },
      ],
    },
    projectsSection: {
      title: "Real demos you can review",
      description:
        "These demos show how a solution could look when applied to your business. Each project can be adapted to your brand, services, colors, and needs.",
      projects: [
        {
          name: "Stay Loja",
          category: "Tourist accommodation",
          description:
            "Real landing page for an Airbnb-style apartment in Loja, with gallery, services, location, rules, WhatsApp, and Airbnb link.",
          url: demoUrls.stayLoja,
          imageCandidates: projectImages.stayLoja,
          cta: "View demo",
          ariaLabel: "View Stay Loja demo",
          imageAlt: "Screenshot of Stay Loja",
        },
        {
          name: "Café Andino",
          category: "Digital QR menu",
          description:
            "Digital menu demo for restaurants with categories, products, cart, and direct WhatsApp order.",
          url: demoUrls.cafeAndino,
          imageCandidates: projectImages.cafeAndino,
          cta: "View demo",
          ariaLabel: "View Café Andino demo",
          imageAlt: "Screenshot of Café Andino",
        },
        {
          name: "ReservaPro",
          category: "Online booking",
          description:
            "Appointment system demo for businesses, with booking flow and admin panel.",
          url: demoUrls.reservaPro,
          imageCandidates: projectImages.reservaPro,
          cta: "View demo",
          ariaLabel: "View ReservaPro demo",
          imageAlt: "Screenshot of ReservaPro",
        },
      ],
    },
    processSection: {
      title: "A simple and clear process",
      steps: [
        {
          title: "We talk about your business",
          description:
            "I understand what you need, what you sell, and the goal of the website or system.",
        },
        {
          title: "We define scope and proposal",
          description:
            "I explain what is included, timelines, pricing, and how we will work.",
        },
        {
          title: "Design and development",
          description: "I build a functional version for review.",
        },
        {
          title: "Review and adjustments",
          description: "We make agreed changes before publishing.",
        },
        {
          title: "Publishing",
          description:
            "I leave your site ready online with the agreed domain, hosting, or deployment.",
        },
        {
          title: "Initial support",
          description:
            "I help with minor adjustments and questions after delivery.",
        },
      ],
    },
    whyWorkWithMeSection: {
      title: "Why work with me",
      items: [
        {
          iconName: "badge",
          title: "Published real demos",
          text: "You can review functional examples before deciding which solution fits your business best.",
        },
        {
          iconName: "code",
          title: "Software development experience",
          text: "I work with web systems, APIs, integrations, and solutions applied to real processes.",
        },
        {
          iconName: "message",
          title: "Direct WhatsApp communication",
          text: "You have a clear channel to ask questions, review progress, and coordinate adjustments.",
        },
        {
          iconName: "monitor",
          title: "Responsive design",
          text: "The website is prepared to look good on mobile, tablet, and desktop.",
        },
        {
          iconName: "rocket",
          title: "Support through publishing",
          text: "I help you get the site ready online, with initial support included.",
        },
      ],
    },
    launchOfferSection: {
      title: "Launch offer",
      text:
        "I’m currently taking the first projects with special pricing for businesses that want to improve their digital presence with a website, digital menu or online booking system.",
      points: [
        "Special pricing for first clients",
        "Proposal adjusted to scope",
        "Support through publishing",
        "Initial support included",
      ],
      cta: "I want the launch offer",
      whatsappMessage:
        "Hi Franz, I saw the launch offer and I’m interested in a website or system for my business.",
    },
    pricingSection: {
      title: "Starter plans",
      description:
        "Reference prices designed for local businesses. The final value depends on scope, content, features, domain, hosting, and required support.",
      popular: "Popular",
      idealForLabel: "Ideal for:",
      note:
        "Prices are reference values for starter projects. A proposal can be adjusted according to budget and needs.",
      plans: [
        {
          name: "Essential website",
          price: "From $180",
          idealFor: "Businesses that need a professional online presence.",
          includes: [
            "Responsive landing page",
            "Up to 5 sections",
            "WhatsApp button",
            "Location",
            "Basic SEO",
            "Initial publishing",
          ],
        },
        {
          name: "Digital menu",
          price: "From $220",
          idealFor: "Restaurants, coffee shops, and food businesses.",
          includes: [
            "Online menu",
            "Categories",
            "Products and prices",
            "WhatsApp order button",
            "Ready for QR",
            "Mobile-first design",
          ],
          featured: true,
        },
        {
          name: "Online booking",
          price: "From $450",
          idealFor: "Businesses that work with appointments.",
          includes: [
            "Services",
            "Date and time selection",
            "Booking form",
            "WhatsApp confirmation",
            "Basic admin panel",
            "Appointment statuses",
          ],
        },
        {
          name: "Custom system",
          price: "From $700",
          idealFor: "Internal processes or specific needs.",
          includes: [
            "Requirements analysis",
            "Solution design",
            "Web development",
            "Admin panel",
            "Reports or integrations depending on scope",
          ],
        },
      ],
    },
    maintenanceSection: {
      title: "I can also help after publishing",
      description:
        "You do not have to handle the technical side alone. I can help with support, minor changes, maintenance, and continuous improvements.",
      note:
        "Domain, external tools, or third-party services may have additional costs.",
      plans: [
        {
          name: "Basic",
          price: "From $25/month",
          description:
            "Includes basic hosting/monitoring and simple minor changes.",
        },
        {
          name: "Standard",
          price: "From $50/month",
          description:
            "Includes support, monthly adjustments, and functionality checks.",
        },
        {
          name: "Advanced",
          price: "Quoted by scope",
          description:
            "For systems with ongoing improvements or more frequent support.",
        },
      ],
    },
    aboutSection: {
      eyebrow: "About",
      title: "Technical experience applied to real businesses",
      text:
        "I am a full stack developer with experience building web systems, APIs, integrations, and internal solutions for companies. Today I apply that experience to help local businesses get websites, digital menus, online booking systems, and simple tools that help them sell, book, and stay organized.",
      cta: "Let's talk about your idea",
      trustCards: [
        {
          iconName: "code",
          title: "Software development",
          text:
            "Experience building web applications, APIs, integrations, and features for real processes.",
        },
        {
          iconName: "target",
          title: "Business focus",
          text:
            "Each solution is planned around the business goal: attracting customers, receiving orders, managing bookings, or organizing information.",
        },
        {
          iconName: "handshake",
          title: "Ongoing support",
          text:
            "I can help with publishing, domain setup, initial adjustments, support, and later improvements.",
        },
      ],
      profileText:
        "You can also review my full professional profile on LinkedIn or my projects on GitHub.",
      links: [
        {
          label: "View LinkedIn",
          href: "https://www.linkedin.com/in/franz-burneo-monteros-7422a7187/",
        },
        { label: "View GitHub", href: "https://github.com/FranzBurneo" },
      ],
    },
    techStackSection: {
      title: "Technologies I work with",
      description:
        "The stack is chosen based on the project type, budget, and business needs.",
      technologies,
    },
    faqSection: {
      title: "Frequently asked questions",
      faqs: [
        {
          question: "How long does a website take?",
          answer:
            "A simple landing page can take between 1 and 2 weeks, depending on content, revisions, and scope.",
        },
        {
          question: "Does the price include domain and hosting?",
          answer:
            "It depends on the plan. I can help configure domain and hosting, but some external services may have additional costs.",
        },
        {
          question: "Can I request changes after publishing?",
          answer:
            "Yes. Initial adjustments can be included, and monthly maintenance can also be hired.",
        },
        {
          question: "Do you only work with businesses in Loja?",
          answer:
            "No. I can work with businesses from any city in Ecuador or remotely.",
        },
        {
          question: "Can I have a website similar to one of the demos?",
          answer:
            "Yes. The demos can serve as a visual and functional base, but they are adapted to your brand, content, and needs.",
        },
        {
          question: "Do you build systems with admin panels?",
          answer:
            "Yes. Depending on the scope, I can build panels to manage appointments, products, bookings, reports, or business information.",
        },
        {
          question: "Can the system grow later?",
          answer:
            "Yes. We can start with a simple version and later add features such as payments, users, reports, integrations, or automations.",
        },
        {
          question: "How is payment handled?",
          answer:
            "Usually projects start with an upfront payment and the balance is paid on delivery or by milestones, depending on project size.",
        },
      ],
    },
    finalCtaSection: {
      eyebrow: "Let's start with what matters",
      title: "Ready to digitize your business?",
      text:
        "Tell me what you need and I will help you choose the right solution for your business, budget, and current stage.",
      quoteCta: "Request a quote on WhatsApp",
      demosCta: "View demos",
    },
    footer: {
      tagline: "Web development and software for businesses",
      quickLinksTitle: "Quick links",
      contactTitle: "Contact",
      rights: "© 2026 Franz Burneo Studio. All rights reserved.",
    },
    whatsappFloating: {
      label: "WhatsApp",
      ariaLabel: "Request a quote on WhatsApp",
    },
    jsonLd: {
      language: "en",
      description:
        "Websites, digital menus, online booking systems, and custom web software for businesses in Ecuador.",
      catalogName: "Web development and software services",
      areaServed: "Ecuador",
    },
  },
};

export function localizedHref(locale: Locale, hash: string) {
  return locale === "en" ? `/en${hash}` : hash;
}

export type IconMap<T extends string> = Record<T, LucideIcon>;
