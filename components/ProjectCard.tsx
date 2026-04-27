import fs from "fs";
import path from "path";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/types/project";

function getExistingPublicImage(candidates: string[]) {
  return candidates.find((candidate) => {
    const localPath = path.join(process.cwd(), "public", candidate.replace(/^\//, ""));
    return fs.existsSync(localPath);
  });
}

export function ProjectCard({ project }: { project: Project }) {
  const image = getExistingPublicImage(project.imageCandidates);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Ver demo de ${project.name}`}
      className="group block h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {image ? (
          <Image
            src={image}
            alt={`Captura de ${project.name}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full flex-col justify-between bg-[linear-gradient(135deg,#0f172a,#1d4ed8)] p-5 text-white">
            <div className="h-3 w-24 rounded-full bg-white/70" />
            <div>
              <div className="mb-3 h-20 rounded-lg bg-white/15" />
              <div className="h-3 w-3/4 rounded-full bg-white/45" />
              <div className="mt-2 h-3 w-1/2 rounded-full bg-white/25" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-sm font-bold text-blue-600">{project.category}</p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">{project.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition group-hover:bg-blue-600">
          Ver demo
          <ExternalLink size={17} aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
