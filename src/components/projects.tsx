"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
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
        background: "rgba(0,0,0,0.2)",
      }}
    >
      {/* LEVEL BADGE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "11px",
          color: "var(--green)",
          textShadow: "0 0 8px var(--green)",
          animation: "blink 1.2s step-end infinite",
        }}
      >
        ▶ LEVEL 03 — MISSIONS
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontSize: "18px",
          color: "var(--pink)",
          textShadow: "3px 3px 0 var(--pink-dark)",
          textAlign: "center",
        }}
      >
        Proyects
      </motion.h2>

      <p
        style={{
          fontSize: "9px",
          color: "var(--pink-light)",
          textAlign: "center",
          lineHeight: 2,
        }}
      >
        Missions completed in production
      </p>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -4 }}
            style={{
              background: "#0d001f",
              border: "2px solid var(--pink)",
              boxShadow: "4px 4px 0 var(--pink-dark)",
              padding: "18px",
              cursor: "pointer",
            }}
          >
            {/* MISSION TAG */}
            <p
              style={{
                fontSize: "12px",
                color: "var(--cyan)",
                marginBottom: "11px",
              }}
            >
              ▸ {project.mission}
            </p>

            {/* TÍTULO */}
            <p
              style={{
                fontSize: "11px",
                color: "var(--yellow)",
                textShadow: "2px 2px 0 #7a6000",
                marginBottom: "14px",
                lineHeight: "1.8",
                whiteSpace: "pre-line",
              }}
            >
              {project.title}
            </p>

            {/* DESCRIPCIÓN */}
            <p
              style={{
                fontSize: "8px",
                color: "#ccc",
                lineHeight: "2.2",
                marginBottom: "16px",
              }}
            >
              {project.description}
            </p>

            {/* TAGS */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginBottom: "18px",
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "7px",
                    padding: "3px 8px",
                    background: "rgba(255,45,155,0.15)",
                    border: "1px solid var(--pink)",
                    color: "var(--pink-light)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* BOTONES */}
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "7px",
                  padding: "8px 14px",
                  border: "2px solid var(--pink)",
                  background: "transparent",
                  color: "var(--pink)",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--pink)";
                  e.currentTarget.style.color = "#0a0010";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--pink)";
                }}
              >
                ▸ DEMO
              </a>

              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "7px",
                  padding: "8px 14px",
                  border: "2px solid var(--cyan)",
                  background: "transparent",
                  color: "var(--cyan)",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--cyan)";
                  e.currentTarget.style.color = "#0a0010";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--cyan)";
                }}
              >
                ▸ CÓDE
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
