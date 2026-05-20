"use client";

import { motion } from "framer-motion";


export default function hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px",
        position: "relative",
        zIndex: 1,
        gap: "32px",
      }}
    >
      {/* level */}
      <motion.p
        initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "24px",
          color: "var(--green)",
          textShadow: "0 0 8px var(--green)",
          animation: "blink 1.2s step-end infinite",
        }}
      >
        ▶ LEVEL 01 — MEET THE PLAYER
      </motion.p>

      {/* contenido principal*/}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          display: "flex",
          gap: "48px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* CONSOLA DS */}
        <div style={{ position: "relative" }}>
          {/* Estrellitas flotantes */}
          {["⭐", "★", "⭐"].map((s, i) => (
            <span
              key={i}
              style={{
                position: "absolute",
                fontSize: "20px",
                animation: `float 2s ${i * 0.3}s ease-in-out infinite alternate`,
                top: i === 1 ? "60px" : i === 0 ? "10px" : "auto",
                bottom: i === 2 ? "30px" : "auto",
                left: i !== 1 ? "-20px" : "auto",
                right: i === 1 ? "-20px" : "auto",
              }}
            >
              {s}
            </span>
          ))}

          {/* cuerpo consola */}
          <div
            style={{
              width: "200px",
              background: "var(--pink)",
              border: "3px solid var (--pink-dark)",
              boxShadow: "6px 6px 0 #7a003d",
              borderRadius: "8px",
            }}
          >
            {/*pantalla */}
            <div
              style={{
                background: "#1a0030",
                border: "4px solid #ffd9ee",
                borderBottomColor: "var(--pink-dark)",
                borderRightColor: "var(--pink-dark)",
                padding: "8px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "#0a1a00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* PERSONAJE PIXEL ART */}
                {/* PERSONAJE PIXEL ART FEMENINO */}
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0px' }}>
  {/* Flor en el pelo */}
  <div style={{ fontSize: '36px', marginBottom: '-4px', zIndex: 1 }}>🌸</div>
  {/* Pelo largo */}
  <div style={{ width: '32px', height: '10px', background: '#2d1a0a', border: '1px solid #1a0800', borderRadius: '4px 4px 0 0' }} />
  {/* Cara */}
  <div style={{ width: '32px', height: '32px', background: '#f4a96a', border: '2px solid #c47a40', position: 'relative' }}>
    {/* Ojos */}
    <div style={{ width: '5px', height: '5px', background: '#1a0a00', position: 'absolute', top: '10px', left: '5px', borderRadius: '1px' }} />
    <div style={{ width: '5px', height: '5px', background: '#1a0a00', position: 'absolute', top: '10px', right: '5px', borderRadius: '1px' }} />
    {/* Boca sonrisa */}
    <div style={{ width: '10px', height: '4px', borderBottom: '2px solid #c47a40', borderLeft: '2px solid #c47a40', borderRight: '2px solid #c47a40', position: 'absolute', bottom: '5px', left: '50%', transform: 'translateX(-50%)', borderRadius: '0 0 4px 4px' }} />
</div>
  {/* Pelo lateral */}
  <div style={{ display: 'flex', gap: '0px' }}>
    <div style={{ width: '6px', height: '30px', background: '#2d1a0a', border: '1px solid #1a0800' }} />
    {/* Cuerpo — vestido */}
    <div style={{ width: '36px', height: '22px', background: '#ff8fd4', border: '2px solid var(--pink)', position: 'relative' }}>
      {/* Detalle vestido */}
      <div style={{ width: '8px', height: '2px', background: 'var(--pink)', position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)' }} />
    </div>
    <div style={{ width: '6px', height: '30px', background: '#2d1a0a', border: '1px solid #1a0800' }} />
  </div>
  {/* Piernas */}
  <div style={{ display: 'flex', gap: '6px' }}>
    <div style={{ width: '8px', height: '10px', background: '#f4a96a', border: '1px solid #c47a40' }} />
    <div style={{ width: '8px', height: '10px', background: '#f4a96a', border: '1px solid #c47a40' }} />
  </div>
  {/* Zapatos */}
  <div style={{ display: 'flex', gap: '4px' }}>
    <div style={{ width: '10px', height: '5px', background: '#2d1a0a', borderRadius: '0 0 3px 3px' }} />
    <div style={{ width: '10px', height: '5px', background: '#2d1a0a', borderRadius: '0 0 3px 3px' }} />
  </div>
</div>
</div>
            </div>

            {/* CONTROLES */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 6px",
              }}
            >
              {/* D-PAD */}
              <div
                style={{ position: "relative", width: "32px", height: "32px" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: 0,
                    width: "20px",
                    height: "20px",
                    background: "var(--pink-dark)",
                    border: "2px solid #7a003d",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "10px",
                    width: "12px",
                    height: "32px",
                    background: "var(--pink-dark)",
                    border: "2px solid #7a003d",
                  }}
                />
              </div>
              <div
                style={{
                  width: "20px",
                  height: "4px",
                  background: "var(--pink-dark)",
                  borderRadius: "2px",
                }}
              />
              {/* BOTONES */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "10px 10px",
                  gap: "3px",
                }}
              >
                <div />
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--yellow)",
                    border: "2px solid rgba(0,0,0,0.3)",
                  }}
                />
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "var(--cyan)",
                    border: "2px solid rgba(0,0,0,0.3)",
                  }}
                />
                <div />
              </div>
            </div>
          </div>
        </div>

        {/* VENTANA WIN95 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            background: "#ffb3da",
            borderTop: "3px solid #ffd9ee",
            borderLeft: "3px solid #ffd9ee",
            borderBottom: "3px solid var(--pink-dark)",
            borderRight: "3px solid var(--pink-dark)",
            maxWidth: "280px",
            fontSize: '10px',
            fontFamily: "'Press Start 2P', monospace",
          }}
        >
          {/* BARRA DE TÍTULO */}
          <div
            style={{
              background:
                "linear-gradient(90deg, var(--pink-dark), var(--purple))",
              padding: "4px 8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#fff",
              fontSize: "9px",
            }}
          >
            <span>Hello !!</span>
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
                    fontSize: "8px",
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
              padding: "12px 14px",
              fontSize: "9px",
              color: "#3a003a",
              lineHeight: "2.2",
            }}
          >
            {[
              { label: "Player:", value: "Jacquelin Jantman" },
              { label: "Role:", value: "Fullstack Developer" },
              {
                label: "Mission:",
                value: "Build fast, clean and scalable web experiences.",
              },
              { label: "Status:", value: "Ready to explore, build, and win." },
            ].map(({ label, value }) => (
              <p key={label} style={{ marginBottom: "4px" }}>
                <span style={{ color: "var(--pink-dark)" }}>{label}</span>{" "}
                {value}
              </p>
            ))}
            <p style={{ marginTop: "8px" }}>Let&apos;s start the game!</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
