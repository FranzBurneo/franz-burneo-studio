"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Locale, SiteContent } from "@/content/site-content";
import { contact } from "@/data/contact";
import { cn } from "@/lib/utils";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

type NavbarProps = {
  content: SiteContent["nav"];
  locale: Locale;
  quoteMessage: string;
};

function sectionHref(locale: Locale, href: string) {
  return locale === "en" ? `/en${href}` : href;
}

function LanguageSwitcher({ locale }: { locale: Locale }) {
  const options: Array<{ locale: Locale; label: string; href: string }> = [
    { locale: "es", label: "ES", href: "/" },
    { locale: "en", label: "EN", href: "/en" },
  ];

  return (
    <div
      className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1"
      aria-label={locale === "en" ? "Language selector" : "Selector de idioma"}
    >
      {options.map((option) => (
        <Link
          key={option.locale}
          href={option.href}
          hrefLang={option.locale}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
            locale === option.locale
              ? "bg-slate-950 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-950",
          )}
          aria-current={locale === option.locale ? "page" : undefined}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
}

export function Navbar({ content, locale, quoteMessage }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const quoteUrl = generateWhatsAppUrl(contact.phone, quoteMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label={locale === "en" ? "Main navigation" : "Navegación principal"}
      >
        <Link
          href={locale === "en" ? "/en#inicio" : "#inicio"}
          className="flex items-center gap-3 text-base font-bold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black tracking-tighter text-white shadow-sm"
            aria-hidden="true"
          >
            FB
          </span>
          <span>Franz Burneo Studio</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {content.links.map((link) => (
            <Link
              key={link.href}
              href={sectionHref(locale, link.href)}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <a
            href={quoteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            <MessageCircle size={17} aria-hidden="true" />
            {content.quote}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 lg:hidden"
          aria-label={open ? content.menuLabelClose : content.menuLabelOpen}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {content.links.map((link) => (
              <Link
                key={link.href}
                href={sectionHref(locale, link.href)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <LanguageSwitcher locale={locale} />
            </div>
            <a
              href={quoteUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              <MessageCircle size={17} aria-hidden="true" />
              {content.quote}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
