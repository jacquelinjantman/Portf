"use client";

import { motion } from "framer-motion";


const techStack = [
  "C/ C++ / C#/PYTHON/JAVA",
  "HTML/CSS",
  "JavaScript / TypeScript",
  "Angular",
  "React / Next.js",
  "Node.js / Express",
  "PostgreSQL / MongoDB",
  "REST APIs / GraphQL",
  "Docker / Git / CI-CD",
  "Postman",
  "Jira",
  "API RESTful",
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Clean Code",
  "Agile / Scrum",
  "Communicatión",
  "Adaptability",
];

const education = [
  {
    title: "Analista en Programacion",
    place: "Universidad Abierta Interamericana",
    year: "2026",
  },
  { title: "Principio de Ciberseguridad", place: "Coursera", year: "2025" },
  { title: "Introduccion a la Robotica", place: "Clubargentec", year: "2026" },
];

function Win95Window({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#ffb3da",
        borderTop: "3px solid #ffd9ee",
        borderLeft: "3px solid #ffd9ee",
        borderBottom: "3px solid var(--pink-dark)",
        borderRight: "3px solid var(--pink-dark)",
        minWidth: "400px",
        flex: 1,
        maxWidth: "480px",
        fontFamily: "'Press Start 2P', monospace",
      }}
    >
      {/* BARRA TÍTULO */}
      <div
        style={{
          background: "linear-gradient(90deg, var(--pink-dark), var(--purple))",
          padding: "4px 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
          fontSize: "9px",
        }}
      >
        <span>{title}</span>
        <div style={{ display: "flex", gap: "4px" }}>
          {["_", "□", "✕"].map((b) => (
            <div
              key={b}
              style={{
                width: "14px",
                height: "14px",
                background: "#ffb3da",
                borderTop: "2px solid #ffd9ee",
                borderLeft: "2px solid #ffd9ee",
                borderBottom: "2px solid var(--pink-dark)",
                borderRight: "2px solid var(--pink-dark)",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3a003a",
                cursor: "pointer",
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
      {/* CONTENIDO */}
      <div
        style={{
          padding: "14px 16px",
          fontSize: "9px",
          color: "#3a003a",
          lineHeight: "2.4",
        }}
      >
        {children}
      </div>
    </div>
  );
}
export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 40px 60px",
        position: "relative",
        zIndex: 1,
        gap: "48px",
      }}
    >
      {/* LEVEL BADGE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "18px",
          color: "var(--green)",
          textShadow: "0 0 8px var(--green)",
          animation: "blink 1.2s step-end infinite",
        }}
      >
        ▶ LEVEL 02 — WEAPONS MASTERY
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontSize: "28px",
          color: "var(--pink)",
          textShadow: "3px 3px 0 var(--pink-dark)",
          textAlign: "center",
        }}
      >
        Skills
      </motion.h2>

      <p
        style={{
          fontSize: "13px",
          color: "var(--pink-light)",
          textAlign: "center",
          lineHeight: 2,
        }}
      >
        Tools unlocked in inventory
      </p>
      {/* VENTANAS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 5, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1500px",
        }}
      >
        {/* TECH STACK */}
        <Win95Window title="⚔ Tech Stack">
          {techStack.map((s) => (
            <p key={s}>▸ {s}</p>
          ))}
        </Win95Window>

        {/* SOFT SKILLS */}
        <Win95Window title="✨ Soft Skills">
          {softSkills.map((s) => (
            <p key={s}>▸ {s}</p>
          ))}
        </Win95Window>

        {/* EDUCATION */}
        <Win95Window title="🎮 Training Log">
          {education.map((e) => (
            <div key={e.title} style={{ marginBottom: "12px" }}>
              <p style={{ color: "var(--pink-dark)" }}>{e.title}</p>
              <p style={{ fontSize: "8px", color: "#666" }}>{e.place}</p>
              <p style={{ fontSize: "8px", color: "#999" }}>▸ {e.year}</p>
            </div>
          ))}
        </Win95Window>
      </motion.div>
    </section>
  );
}
