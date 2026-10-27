"use client";

import { useState } from "react";
import { useLanguage } from "../i18n/Language";
import { LOCALE_LABELS, type Locale } from "../i18n/Translations";

const LOCALES: Locale[] = ["es", "en", "pt"];


function LanguageSwitcher({
  locale,
  setLocale,
  className = "",
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`sticker-btn rounded-full px-3 py-1.5 font-pixel text-[9px] transition-colors ${
            locale === l ? "bg-neon text-white" : "bg-tarjeta text-tinta"
          }`}
        >
          {LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const LINKS = [
    { href: "#inicio", label: t.nav.inicio },
    { href: "#sobre-mi", label: t.nav.sobreMi },
    { href: "#habilidades", label: t.nav.habilidades },
    { href: "#proyectos", label: t.nav.proyectos },
    { href: "#certificados", label: t.nav.certificados },
    { href: "#contacto", label: t.nav.contacto },
  ];

  return (
    <header className="sticky top-0 z-50 overflow-x-hidden border-b-[3px] border-tinta bg-celeste/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-3">
        <a
          href="#inicio"
          className="sticker-btn whitespace-nowrap rounded-xl bg-neon px-3 py-2 font-display text-sm text-white sm:text-lg"
        >
          PORTFOLIO
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-tinta transition-colors hover:bg-rosa/40"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <LanguageSwitcher locale={locale} setLocale={setLocale} className="hidden lg:flex" />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menú"
          className="sticker-btn flex size-10 shrink-0 items-center justify-center rounded-xl bg-tarjeta lg:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t-[3px] border-tinta bg-crema px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-full px-4 py-2 text-sm font-medium text-tinta hover:bg-rosa/40"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher locale={locale} setLocale={setLocale} />
        </div>
      )}
    </header>
  );
}