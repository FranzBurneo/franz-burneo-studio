import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function ProjectsSection() {
  return (
    <section id="demos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Demos reales que puedes revisar"
          description="Estas demos muestran cómo podría verse una solución aplicada a tu negocio. Cada proyecto puede adaptarse a tu marca, servicios, colores y necesidades."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
