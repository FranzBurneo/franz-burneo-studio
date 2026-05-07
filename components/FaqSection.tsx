"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { SiteContent } from "@/content/site-content";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

export function FaqSection({ content }: { content: SiteContent["faqSection"] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title={content.title} />
        <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {content.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold text-slate-950 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-blue-600"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className={cn("shrink-0 transition", isOpen && "rotate-180")}
                    aria-hidden="true"
                  />
                </button>
                {isOpen ? (
                  <div className="px-5 pb-5 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
