import SectionHeading from "./SectionHeading";


const CATEGORIES: {
  name: string;
  skills: { name: string; emoji: string; level: number }[];
}[] = [
  {
    name: "Lenguajes",
    skills: [
      { name: "JavaScript", emoji: "⚡", level: 7 },
      { name: "TypeScript", emoji: "🔷", level: 6 },
      { name: "Python", emoji: "🐍", level: 5 },
      { name: "PHP", emoji: "🐘", level: 4 },
      { name: "Java", emoji: "☕", level: 6 },
      { name: "C#", emoji: "🎯", level: 8 },
    ],
  },
  {
    name: "Frameworks y librerías",
    skills: [
      { name: "React", emoji: "⚛️", level: 7 },
      { name: "Next.js", emoji: "▲", level: 7 },
      { name: "Tailwind CSS", emoji: "🎨", level: 7 },
      { name: "Node.js", emoji: "🟢", level: 5 },
    ],
  },
  {
    name: "Herramientas",
    skills: [
      { name: "Git", emoji: "🌿", level: 6 },
      { name: "Figma", emoji: "🖌️", level: 4 },
    ],
  },
];

const MAX_LEVEL = 8;

function StatBar({ name, emoji, level }: { name: string; emoji: string; level: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 font-display text-sm text-tinta">
          <span aria-hidden="true">{emoji}</span>
          {name}
        </span>
        <span className="font-pixel text-[10px] text-tinta/60">
          {level}/{MAX_LEVEL}
        </span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: MAX_LEVEL }).map((_, i) => (
          <span
            key={i}
            className={`h-4 flex-1 rounded-sm border-2 border-tinta ${
              i < level ? "bg-azul" : "bg-tarjeta"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading emoji="✦" label="Skill tree" title="My Skills" accent="cielo" />

        <div className="sticker rounded-3xl bg-tarjeta p-8 sm:p-10">
          <div className="mb-8 flex items-center justify-between border-b-[3px] border-dashed border-tinta/25 pb-5">
            <p className="font-display text-lg text-tinta sm:text-xl">Jacquelin</p>
            <span className="sticker-btn rounded-full bg-neon px-3 py-1 font-pixel text-[10px] text-white">
              LV 99
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {CATEGORIES.map((cat) => (
              <div key={cat.name}>
                <p className="mb-4 font-pixel text-[10px] uppercase tracking-wide text-tinta/50">
                  {cat.name}
                </p>
                <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {cat.skills.map((s) => (
                    <StatBar key={s.name} {...s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}