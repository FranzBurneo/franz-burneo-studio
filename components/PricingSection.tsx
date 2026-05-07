import { CheckCircle2 } from "lucide-react";
import type { SiteContent } from "@/content/site-content";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

export function PricingSection({
  content,
}: {
  content: SiteContent["pricingSection"];
}) {
  return (
    <section id="precios" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={content.title}
          description={content.description}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "flex h-full flex-col rounded-lg border bg-white p-6 shadow-sm",
                plan.featured
                  ? "border-blue-500 ring-4 ring-blue-100"
                  : "border-slate-200",
              )}
            >
              {plan.featured ? (
                <p className="mb-3 w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                  {content.popular}
                </p>
              ) : null}
              <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3>
              <p className="mt-3 text-3xl font-bold text-slate-950">{plan.price}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {content.idealForLabel} {plan.idealFor}
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-center text-sm leading-6 text-slate-600">
          {content.note}
        </p>
      </div>
    </section>
  );
}
