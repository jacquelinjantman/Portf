"use client";

import { useState } from "react";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#certificados", label: "Certificados" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-tinta bg-crema/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
       
        
         <a href="#inicio"
          className="sticker-btn flex size-10 items-center justify-center rounded-xl bg-neon font-display text-lg text-white"
        >
          J
        </a>

        <ul className="hidden items-center gap-2 sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              
               <a href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-tinta transition-colors hover:bg-rosa/40"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menú"
          className="sticker-btn flex size-10 items-center justify-center rounded-xl bg-tarjeta sm:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t-[3px] border-tinta bg-crema px-6 py-4 sm:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              
               <a href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-full px-4 py-2 text-sm font-medium text-tinta hover:bg-rosa/40"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
