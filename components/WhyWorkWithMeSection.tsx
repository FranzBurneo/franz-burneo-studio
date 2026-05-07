import {
  BadgeCheck,
  Code2,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
} from "lucide-react";
import type { IconMap, SiteContent } from "@/content/site-content";
import { SectionHeader } from "./SectionHeader";

const icons: IconMap<
  SiteContent["whyWorkWithMeSection"]["items"][number]["iconName"]
> = {
  badge: BadgeCheck,
  code: Code2,
  message: MessageCircle,
  monitor: MonitorSmartphone,
  rocket: Rocket,
};

export function WhyWorkWithMeSection({
  content,
}: {
  content: SiteContent["whyWorkWithMeSection"];
}) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title={content.title} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {content.items.map(({ iconName, title, text }) => {
            const Icon = icons[iconName];

            return (
              <article
                key={title}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon size={19} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
