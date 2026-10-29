"use client";

import { PixelFrame } from "./PixelFrame";
import FlowerField from "./FlowerField";
import { useLanguage } from "@/i18n/Language";


const NAME = "Jacquelin Jantman";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center px-6 py-28"
    >
      <FlowerField />

      <div className="hero-pop sticker relative w-full max-w-2xl rounded-3xl bg-tarjeta px-8 py-14 text-center sm:px-14">
        <PixelFrame className="inset-0" />

        <span
          className="wiggle sticker-btn absolute -top-6 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-merino px-4 py-2 font-display text-sm"
          style={{ animationDelay: "0.1s" }}
        >
          {t.hero.greeting}
        </span>

        <h1 className="bubble-text hero-bounce-in mt-4 font-display text-5xl leading-[1.3] sm:text-6xl md:text-7xl">
          {NAME}
        </h1>
<div
  className="hero-rise sticker-btn mx-auto mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-menta px-4 py-1.5"
  style={{ animationDelay: "0.05s" }}
>
  <span className="pulse-dot size-2 rounded-full bg-tinta" aria-hidden="true" />
  <span className="text-xs font-medium text-tinta sm:text-sm">{t.hero.availability}</span>
</div>
        <p
          className="hero-bounce-in sticker-btn mx-auto mt-6 inline-block rounded-full bg-merino px-6 py-2 font-display text-lg sm:text-xl"
          style={{ animationDelay: "0.15s" }}
        >
          {t.hero.role}
        </p>

        <p
          className="hero-bounce-in mx-auto mt-6 max-w-md text-base text-tinta/80 sm:text-lg"
          style={{ animationDelay: "0.25s" }}
        >
          {t.hero.intro}
        </p>

        <div
          className="hero-bounce-in mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.35s" }}
        >
          <a
            href="#proyectos"
            className="sticker-btn rounded-full bg-azul px-7 py-3 font-display text-sm text-white sm:text-base"
          >
            {t.hero.ctaProjects}
          </a>

          <a
            href="#contacto"
            className="sticker-btn rounded-full bg-celeste px-7 py-3 font-display text-sm text-tinta sm:text-base"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}