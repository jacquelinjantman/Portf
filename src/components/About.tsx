"use client";

import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/i18n/Language";
import Image from "next/image";
import Photo from "../assets/fotoCv.png";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading emoji="🌸" label={t.about.label} title={t.about.title} accent="rosa" />

    
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        
         <Image
  src={Photo}
  alt="Foto de Jacquelin Jantman"
  className="sticker-btn size-40 shrink-0 rounded-2xl object-cover sm:size-48"
/>

          <div className="text-center sm:text-left">
            <p className="text-base leading-relaxed text-tinta/85 sm:text-lg">{t.about.bio}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
              {t.about.funFacts.map((fact) => (
                <span
                  key={fact.label}
                  className="sticker-btn inline-flex items-center gap-2 rounded-full bg-cielo px-3 py-1.5 text-xs font-medium text-tinta"
                >
                  <span aria-hidden="true">{fact.emoji}</span>
                  {fact.label}
                </span>
              ))}
            </div>

            <a
              href={t.about.cvPath}
              download
              className="sticker-btn mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 font-display text-sm text-white"
            >
              ⬇ {t.about.cvButton}
            </a>
          </div>
        </div>

      
        <div className="mt-12 grid grid-cols-3 gap-4">
          {t.about.stats.map((stat) => (
            <div
              key={stat.label}
              className="sticker-btn flex flex-col items-center gap-1 rounded-2xl bg-tarjeta px-4 py-6"
            >
              <span className="font-display text-3xl text-neon sm:text-4xl">{stat.value}</span>
              <span className="text-xs font-medium text-tinta/70 sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
              
  
