import { BadgeCheck, Headphones, MonitorSmartphone, Rocket } from "lucide-react";
import type { IconMap, SiteContent } from "@/content/site-content";

const icons: IconMap<SiteContent["trustBar"][number]["iconName"]> = {
  badge: BadgeCheck,
  monitor: MonitorSmartphone,
  rocket: Rocket,
  headphones: Headphones,
};

export function TrustBar({ items }: { items: SiteContent["trustBar"] }) {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map(({ iconName, label }) => {
          const Icon = icons[iconName];

          return (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Icon size={19} aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-slate-800">{label}</p>
          </div>
        );
        })}
      </div>
    </section>
  );
}
