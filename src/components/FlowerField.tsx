"use client";

import { useEffect, useRef, useState } from "react";
import Flowers from "./Flower";

type Spot = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: string;
  delay: string;
};

// ✏️ Posiciones de las flores. Ajusta o agrega/quita según el espacio disponible.
const DEFAULT_SPOTS: Spot[] = [
  { top: "-2rem", left: "-1.5rem", size: "3.5rem", delay: "0s" },
  { top: "10%", right: "-2rem", size: "2.5rem", delay: "0.25s" },
  { bottom: "-1.5rem", left: "15%", size: "3rem", delay: "0.5s" },
  { bottom: "5%", right: "8%", size: "2rem", delay: "0.75s" },
];

export default function FlowerField({ spots = DEFAULT_SPOTS }: { spots?: Spot[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 ${inView ? "in-view" : ""}`}
    >
      {spots.map((s, i) => (
        <div
          key={i}
          className="absolute"
          style={{ top: s.top, bottom: s.bottom, left: s.left, right: s.right, width: s.size }}
        >
          <Flowers delay={s.delay}/>
        </div>
      ))}
    </div>
  );
}