
"use client";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Fotocv from "../assets/fotoCv.png";
import { useLanguage } from "@/i18n/Language";



export default function About() {

  const {t} = useLanguage();

  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          emoji="🌸"
          label={t.about.label}
          title={t.about.title}
          accent="rosa"
        />

        <div className="sticker rounded-3xl bg-tarjeta p-8 sm:p-10">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            
            <div className="sticker-btn flex size-28 shrink-0 items-center justify-center rounded-full bg-rosa text-5xl">
              <Image src={Fotocv} alt="Foto de perfil" width={112}></Image>
            </div>
 
 
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
        </div>
      </div>
    </section>
  );
}
 
       

              
  
