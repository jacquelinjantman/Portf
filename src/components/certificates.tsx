'use client'

import { motion } from 'framer-motion'
import { type Certificate, certificates } from '@/data/certificate'


export default function Certificate() {
  return (
    <section
      id="certs"
      style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '120px 60px 80px',
        position: 'relative', zIndex: 1,
        gap: '48px',
      }}
    >
      {/* LEVEL BADGE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: '18px', color: 'var(--green)',
          textShadow: '0 0 8px var(--green)',
          animation: 'blink 1.2s step-end infinite',
        }}
      >
        ▶ LEVEL 04 — ACHIEVEMENTS UNLOCKED
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontSize: '28px', color: 'var(--pink)',
          textShadow: '3px 3px 0 var(--pink-dark)',
          textAlign: 'center',
        }}
      >
        Certificates
      </motion.h2>

      <p style={{ fontSize: '16px', color: 'var(--pink-light)', textAlign: 'center', lineHeight: 2 }}>
       Achievements and certifications obtained
      </p>

      {/* GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        width: '120%',
      }}>
        
        {(certificates as Certificate[]).map((cert, i) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            style={{
              background: '#0d001f',
              border: '2px solid var(--yellow)',
              boxShadow: '3px 3px 0 #7a6000',
              padding: '20px',
              textDecoration: 'none',
              display: 'block',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '24px', display: 'block', marginBottom: '12px' }}>
              {cert.icon}
            </span>
            <p style={{
              fontSize: '9px', color: 'var(--yellow)',
              lineHeight: '2', marginBottom: '8px',
              whiteSpace: 'pre-line',
              fontFamily: "'Press Start 2P', monospace",
            }}>
              {cert.name}
            </p>
            <p style={{
              fontSize: '8px', color: '#aaa',
              lineHeight: '1.8',
              fontFamily: "'Press Start 2P', monospace",
            }}>
              {cert.issuer}
            </p>
            <p style={{
              fontSize: '8px', color: 'var(--pink-light)',
              marginTop: '10px',
              fontFamily: "'Press Start 2P', monospace",
            }}>
              ▸ {cert.year}
            </p>
          </motion.a>
        ))}

        {/* CARD PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: certificates.length * 0.1 }}
          style={{
            background: '#0d001f',
            border: '2px dashed var(--purple)',
            padding: '20px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '10px', minHeight: '140px',
          }}
        >
          <span style={{ fontSize: '18px' }}>⭐</span>
          <p style={{
            fontSize: '8px', color: 'var(--purple)',
            textAlign: 'center', lineHeight: '2',
            fontFamily: "'Press Start 2P', monospace",
          }}>
            + MORE<br/>SOON
          </p>
        </motion.div>
      </div>
    </section>
  )
}