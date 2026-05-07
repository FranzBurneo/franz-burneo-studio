import { Settings } from "lucide-react";
import type { SiteContent } from "@/content/site-content";
import { SectionHeader } from "./SectionHeader";

export function MaintenanceSection({
  content,
}: {
  content: SiteContent["maintenanceSection"];
}) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={content.title}
          description={content.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {content.plans.map((plan) => (
            <article key={plan.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Settings size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">{plan.name}</h3>
              <p className="mt-2 text-2xl font-bold text-blue-600">{plan.price}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{plan.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          {content.note}
        </p>
      </div>
    </section>
  );
}
