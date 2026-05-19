"use client";

import { useState } from "react";


const link = [
  { label: "HOME", href: "#hero" },
  { label: "SKILLS", href: "#skills" },
  { label: "MISIONS", href: "#projects" },
  { label: "ACHIEVEMENTS", href: "#certs" },
  { label: "CONTACT", href: "#contact" },
];

export default function navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(10,0,16,0.95)",
        borderBottom: "3px solid var (--pink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 40px",
      }}
    >
      {/*Logo*/}
      <span
        style={{
          fontSize: "16px",
          color: "var(--cyan)",
          textShadow: "0 0 8px var (--cyan)",
        }}
      >
        ★ JJ.DEV
      </span>

      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {link.map((link) => (
          <button
            key={link.href}
            onClick={() => handleClick(link.href)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "16px",
              color: "var(--pink-light)",
              padding: "4px 8px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var (--yellow)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--pink-light)")
            }
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
