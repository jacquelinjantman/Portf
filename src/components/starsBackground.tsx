'use client'

import { useEffect, useRef } from 'react'

const clouds = [
  { top: '10%', left: '5%', scale: 1, delay: '0s', duration: '20s' },
  { top: '25%', left: '80%', scale: 0.7, delay: '4s', duration: '25s' },
  { top: '50%', left: '15%', scale: 1.2, delay: '8s', duration: '18s' },
  { top: '70%', left: '70%', scale: 0.9, delay: '2s', duration: '22s' },
  { top: '85%', left: '40%', scale: 0.6, delay: '6s', duration: '28s' },
]

function PixelCloud({ top, left, scale, delay, duration }: {
  top: string, left: string, scale: number, delay: string, duration: string
}) {
  return (
    <div style={{
      position: 'absolute', top, left,
      transform: `scale(${scale})`,
      animation: `floatCloud ${duration} ${delay} ease-in-out infinite alternate`,
      opacity: 0.5,
      pointerEvents: 'none',
    }}>
      {/* NUBE PIXEL ART con CSS */}
      <div style={{ position: 'relative', width: '80px', height: '48px' }}>
        {/* Cuerpo principal */}
        <div style={{
          position: 'absolute', bottom: 0, left: '8px',
          width: '64px', height: '24px',
          background: '#b044ff',
          boxShadow: '4px 0 0 #b044ff, -4px 0 0 #b044ff',
        }} />
        {/* Bump izquierdo */}
        <div style={{
          position: 'absolute', bottom: '20px', left: '12px',
          width: '24px', height: '20px',
          background: '#c866ff',
        }} />
        {/* Bump central */}
        <div style={{
          position: 'absolute', bottom: '24px', left: '28px',
          width: '28px', height: '24px',
          background: '#d488ff',
        }} />
        {/* Bump derecho */}
        <div style={{
          position: 'absolute', bottom: '18px', left: '48px',
          width: '20px', height: '18px',
          background: '#c866ff',
        }} />
        {/* Brillo */}
        <div style={{
          position: 'absolute', bottom: '28px', left: '32px',
          width: '8px', height: '8px',
          background: '#ffffff44',
        }} />
      </div>
    </div>
  )
}

export default function StarsBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Estrellas
    for (let i = 0; i < 120; i++) {
      const star = document.createElement('div')
      const size = Math.random() * 3 + 1
      star.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: white;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: twinkle ${1.5 + Math.random() * 2}s ${Math.random() * 3}s infinite alternate;
      `
      container.appendChild(star)
    }
  }, [])

  return (
    <>
      {/* ESTRELLAS */}
      <div
        ref={containerRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
        }}
      />

      {/* NUBES */}
      <div style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
      }}>
        {clouds.map((cloud, i) => (
          <PixelCloud key={i} {...cloud} />
        ))}
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes floatCloud {
          0%   { transform: scale(${1}) translateX(0px); }
          100% { transform: scale(${1}) translateX(30px); }
        }
      `}</style>
    </>
  )
}