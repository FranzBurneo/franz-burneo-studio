import type { SiteContent } from "@/content/site-content";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function ProjectsSection({
  content,
}: {
  content: SiteContent["projectsSection"];
}) {
  return (
    <section id="demos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={content.title}
          description={content.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
