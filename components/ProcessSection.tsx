import { SectionHeader } from "./SectionHeader";

const steps = [
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
];

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Proceso simple y claro" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
