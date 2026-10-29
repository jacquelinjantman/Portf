"use client";

import { useLanguage } from "@/i18n/Language";

const EMAIL = "jacquelinjantman@gmail.com";
const GITHUB = "https://github.com/jacquelinjantman";
const LINKEDIN = "https://www.linkedin.com/in/jacquelin-jantman-362365227/";

export default function Contact() {
  const { t} = useLanguage();

  return (
    <section id="contacto" className="px-6 py-24">
      <div className="sticker mx-auto max-w-xl rounded-3xl bg-tarjeta px-8 py-12 text-center">
        <span className="sticker-btn inline-flex items-center gap-2 rounded-full bg-menta px-4 py-1.5 font-display text-sm">
          💌 {t.contact.label}
        </span>
        <h2 className="mt-5 font-display text-3xl text-tinta sm:text-4xl">{t.contact.title}</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-tinta/75">{t.contact.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href={`mailto:${EMAIL}`} className="sticker-btn rounded-full bg-neon px-6 py-3 text-sm text-tinta">
            {t.contact.email}
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-btn rounded-full bg-tarjeta px-6 py-3 text-sm text-tinta"
          >
            {t.contact.github}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-btn rounded-full bg-tarjeta px-6 py-3 text-sm text-tinta"
          >
            {t.contact.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}