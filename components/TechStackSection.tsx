import type { SiteContent } from "@/content/site-content";
import { SectionHeader } from "./SectionHeader";

export function TechStackSection({
  content,
}: {
  content: SiteContent["techStackSection"];
}) {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={content.title}
          description={content.description}
        />
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {content.technologies.map((tech) => (
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
