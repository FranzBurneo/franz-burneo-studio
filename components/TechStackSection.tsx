import { SectionHeader } from "./SectionHeader";

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

export function TechStackSection() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Tecnologías con las que trabajo"
          description="El stack se elige según el tipo de proyecto, presupuesto y necesidades del negocio."
        />
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
