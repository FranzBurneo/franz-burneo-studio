import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Handshake,
  Target,
} from "lucide-react";
import type { IconMap, SiteContent } from "@/content/site-content";
import { contact } from "@/data/contact";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeader } from "./SectionHeader";

const icons: IconMap<SiteContent["aboutSection"]["trustCards"][number]["iconName"]> = {
  code: Code2,
  target: Target,
  handshake: Handshake,
};

export function AboutSection({
  content,
  mainMessage,
}: {
  content: SiteContent["aboutSection"];
  mainMessage: string;
}) {
  const url = generateWhatsAppUrl(contact.phone, mainMessage);

  return (
    <section id="sobre-mi" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={content.eyebrow}
              title={content.title}
              align="left"
            />
            <p className="text-lg leading-8 text-slate-600">
              {content.text}
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              {content.cta}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {content.trustCards.map(({ iconName, title, text }) => {
                const Icon = icons[iconName];

                return (
                <article
                  key={title}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </article>
                );
              })}
            </div>

            <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <BriefcaseBusiness size={20} aria-hidden="true" />
                  </div>
                  <p className="text-sm leading-7 text-slate-600">
                    {content.profileText}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  {content.links.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:border-blue-600 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                    >
                      {label}
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
