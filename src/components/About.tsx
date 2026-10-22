import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Fotocv from "../assets/fotoCv.png";

const BIO =
  "Soy Desarrolladora Fullstack, construyo desde lo que es la base de datos hasta el ultimo detalle de la interfaz, trabaje con React, Next.js, Node.js, Java/Spring Boot , C# y SQL SERVER. Me gusta el codigo limpio y soluciones que verdaderamente resuelvan problemas. ";

// ✏️ Datos curiosos o intereses, se muestran como chips
const FUN_FACTS = [
  { emoji: "🌿", label: "Coleccionista de plantas exóticas" },
  { emoji: "☕", label: "Café antes que nada" },
  { emoji: "📖", label: "Fan de los libros de cualquier genero" },
  { emoji: "📚", label: "Siempre aprendiendo algo nuevo" },
];


const CV_PATH = "\public\Jacquelin_Jantman_CV.pdf";

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          emoji="🌸"
          label="Character info"
          title="Sobre mí"
          accent="rosa"
        />

        <div className="sticker rounded-3xl bg-tarjeta p-8 sm:p-10">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            
            <div className="sticker-btn flex size-28 shrink-0 items-center justify-center rounded-full bg-rosa text-5xl">
              <Image src={Fotocv} alt="Foto de perfil" width={112}></Image>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-base leading-relaxed text-tinta/85 sm:text-lg">
                {BIO}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
                {FUN_FACTS.map((fact) => (
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
                href={CV_PATH}
                download
                className="sticker-btn mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 font-display text-sm text-tinta"
              >
                ⬇ Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
