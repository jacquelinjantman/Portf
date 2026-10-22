"use client";

import { useEffect, useRef, useState } from "react";
import Flower from "./Flower";

type Spot = {
  top: string; 
  side: "left" | "right"  | "center";
  offset: string;
  size: string;
  delay: string;
};


const SPOTS: Spot[] = [
  { top: "10%", side: "right", offset: "2%", size: "3rem", delay: "0s" },
  { top: "12%", side: "right", offset: "3%", size: "3rem", delay: "0s" },
  { top: "13%", side: "left", offset: "2%", size: "3rem", delay: "0s" },
  { top: "15%", side: "left", offset: "1%", size: "2.5rem", delay: "0.1s" },
  { top: "18%", side: "center", offset: "2%", size: "3rem", delay: "0s" },
  { top: "22%", side: "right", offset: "-1rem", size: "4rem", delay: "0s" },
  { top: "28%", side: "left", offset: "3%", size: "3rem", delay: "0.15s" },
  { top: "35%", side: "right", offset: "4%", size: "2.5rem", delay: "0.05s" },
  { top: "41%", side: "left", offset: "-1.5rem", size: "4rem", delay: "0s" },
  { top: "48%", side: "right", offset: "1%", size: "3.5rem", delay: "0.1s" },
  { top: "54%", side: "left", offset: "2%", size: "2.5rem", delay: "0.2s" },
  { top: "60%", side: "right", offset: "-1rem", size: "3rem", delay: "0s" },
  { top: "67%", side: "left", offset: "4%", size: "3.5rem", delay: "0.1s" },
  { top: "73%", side: "right", offset: "3%", size: "2.5rem", delay: "0.15s" },
  { top: "75%", side: "left", offset: "2%", size: "3rem", delay: "0s" },
  { top: "79%", side: "left", offset: "-1rem", size: "4rem", delay: "0s" },
  { top: "85%", side: "right", offset: "2%", size: "3rem", delay: "0.05s" },
  { top: "91%", side: "left", offset: "1%", size: "3rem", delay: "0.1s" },
  { top: "96%", side: "right", offset: "5%", size: "3.5rem", delay: "0.2s" },
];

function GardenFlower({ spot }: { spot: Spot }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute ${inView ? "in-view" : ""}`}
      style={{
        top: spot.top,
        ...(spot.side === "left" ? { left: spot.offset } : { right: spot.offset }),
        width: spot.size,
      }}
    >
      <Flower delay={spot.delay} />
    </div>
  );
}

export default function FlowerGarden() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {SPOTS.map((spot, i) => (
        <GardenFlower key={i} spot={spot} />
      ))}
    </div>
  );
}