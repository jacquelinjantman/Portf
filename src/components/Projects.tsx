"use client";

import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading emoji="🎮" label="Save file" title="Projects" accent="rosa" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="sticker-hover flex flex-col rounded-2xl bg-tarjeta p-6">
              <span className="mb-3 inline-block w-fit rounded-full bg-tinta px-3 py-1 font-pixel text-[9px] text-crema">
                {p.mission}
              </span>

              <h3 className="font-display text-xl text-tinta">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-tinta/75">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-azul/60 px-3 py-1 text-xs font-medium text-tinta"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {p.demo && (
                  
                  <a  href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sticker-btn rounded-full bg-azul px-5 py-2 text-sm text-white"
                  >
                    Ver demo
                  </a>
                )}
                {p.code && (
                  
                    <a href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sticker-btn rounded-full bg-tarjeta px-5 py-2 text-sm text-tinta"
                  >
                    Código
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}