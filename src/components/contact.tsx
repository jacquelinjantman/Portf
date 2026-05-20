"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// 👇 Reemplazá con tus datos de EmailJS
const EMAILJS_PUBLIC_KEY = "JSayY7c_pA7R8-PL1";
const EMAILJS_SERVICE_ID = "service_l84jr21";
const EMAILJS_TEMPLATE_ID = "template_p39j1wk";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.from_name || !form.from_email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "#0d001f",
    border: "2px solid var(--pink)",
    color: "#fff",
    fontFamily: "'Press Start 2P', monospace",
    fontSize: "10px",
    padding: "12px 16px",
    outline: "none",
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px 40px",
        position: "relative",
        zIndex: 1,
        gap: "48px",
        background: "rgba(0,0,0,0.3)",
      }}
    >
      {/* LEVEL BADGE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "20px",
          color: "var(--green)",
          textShadow: "0 0 8px var(--green)",
          animation: "blink 1.2s step-end infinite",
        }}
      >
        ▶ LEVEL 05 — NEW MISSION UNLOCKED!
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
        Let&apos;s Connect
      </motion.h2>

      <p
        style={{
          fontSize: "11px",
          color: "var(--pink-light)",
          textAlign: "center",
          lineHeight: 2,
        }}
      >
        ¿Ready for a new mission together?
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          display: "flex",
          gap: "48px",
          alignItems: "flex-start",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {/* MENÚ IZQUIERDA */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* GAME MENU */}
          <div
            style={{
              background: "#c8e8ff",
              border: "3px solid #e8f4ff",
              borderBottom: "3px solid #003366",
              borderRight: "3px solid #003366",
              padding: "18px 20px",
              minWidth: "100px",
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "10px",
              color: "#003366",
              lineHeight: "3",
            }}
          >
            {["CONTINUE", "NEW GAME", "EXIT ♡"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <span style={{ color: "var(--pink)" }}>▸</span> {item}
              </div>
            ))}
          </div>

          {/* LINKS */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {[
              {
                icon: "📧",
                label: "Gmail.com",
                href: "mailto:jacquelinjantman@email.com",
              },
              {
                icon: "💼",
                label: "LinkedIn",
                href: "https://linkedin.com/in/jacquelinjantman",
              },
              {
                icon: "💻",
                label: "GitHub",
                href: "https://github.com/jacquelinjantman",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "12px",
                  color: "#ccc",
                  textDecoration: "none",
                  padding: "12px 14px",
                  borderLeft: "3px solid var(--pink)",
                  background: "rgba(255,45,155,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,45,155,0.15)";
                  e.currentTarget.style.color = "var(--pink-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,45,155,0.05)";
                  e.currentTarget.style.color = "#ccc";
                }}
              >
                {link.icon} {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* FORMULARIO */}
        <div
          style={{
            background: "#0d001f",
            border: "3px solid var(--pink)",
            boxShadow: "4px 4px 0 var(--pink-dark)",
            padding: "0",
            minWidth: "100px",
            maxWidth: "220px",
            width: "100%",
          }}
        >
          {/* BARRA TÍTULO */}
          <div
            style={{
              background:
                "linear-gradient(90deg, var(--pink-dark), var(--purple))",
              padding: "6px 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#fff",
              fontSize: "9px",
              fontFamily: "'Press Start 2P', monospace",
            }}
          >
            <span>📨Send</span>
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
                    fontFamily: "'Press Start 2P', monospace",
                  }}
                >
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "24px" }}>
            {/* NOMBRE */}
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  fontSize: "8px",
                  color: "var(--pink-light)",
                  display: "block",
                  marginBottom: "6px",
                  fontFamily: "'Press Start 2P', monospace",
                }}
              >
                NAME
              </label>
              <input
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="Your Name"
                style={inputStyle}
              />
            </div>

            {/* EMAIL */}
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  fontSize: "8px",
                  color: "var(--pink-light)",
                  display: "block",
                  marginBottom: "6px",
                  fontFamily: "'Press Start 2P', monospace",
                }}
              >
                EMAIL
              </label>
              <input
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                placeholder="Your@email.com"
                style={inputStyle}
              />
            </div>

            {/* MENSAJE */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  fontSize: "8px",
                  color: "var(--pink-light)",
                  display: "block",
                  marginBottom: "6px",
                  fontFamily: "'Press Start 2P', monospace",
                }}
              >
                MESSAGE
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can i help you?"
                rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {/* BOTÓN */}
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              style={{
                width: "100%",
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "9px",
                padding: "12px",
                border: "2px solid var(--pink)",
                background:
                  status === "sending" ? "var(--pink)" : "transparent",
                color: status === "sending" ? "#0a0010" : "var(--pink)",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                transition: "all 0.15s",
              }}
            >
              {status === "sending" ? "▸ ENVIANDO..." : "▸ ENVIAR MENSAJE"}
            </button>

            {/* STATUS */}
            {status === "success" && (
              <p
                style={{
                  fontSize: "8px",
                  color: "var(--green)",
                  marginTop: "10px",
                  fontFamily: "'Press Start 2P', monospace",
                }}
              >
                ▸ ¡Mensaje enviado! ★
              </p>
            )}
            {status === "error" && (
              <p
                style={{
                  fontSize: "8px",
                  color: "#ff4444",
                  marginTop: "10px",
                  fontFamily: "'Press Start 2P', monospace",
                }}
              >
                ▸ ERROR: Revisá los campos.
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* PLATAFORMA GRASS */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40px",
          background:
            "repeating-linear-gradient(90deg, #1a6600 0px, #1a6600 16px, #228800 16px, #228800 32px)",
          borderTop: "4px solid #44cc00",
          zIndex: 0,
        }}
      />
    </section>
  );
}
