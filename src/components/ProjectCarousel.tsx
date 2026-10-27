"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  images: string[]; 
  alt: string;    
  intervalMs?: number;
};

export default function ProjectCarousel({ images, alt, intervalMs = 4000 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  const goTo = (i: number) => setIndex((i + images.length) % images.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);


  useEffect(() => {
    if (!hasMultiple || paused) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return; 

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [hasMultiple, paused, images.length, intervalMs]);

  
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) prev();
    else if (delta < -40) next();
    touchStartX.current = null;
    setPaused(false);
  };

  return (
    <div className="relative">
      <div
        className="sticker-btn relative aspect-video w-full overflow-hidden rounded-xl bg-crema"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {hasImages ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images[index]}
            alt={`Captura de ${alt} (${index + 1}/${images.length})`}
            className="size-full object-cover"
          />
        ) : (
          
          <div className="flex size-full flex-col items-center justify-center gap-2 text-tinta/40">
            <span className="text-3xl" aria-hidden="true">🖼️</span>
            <span className="font-pixel text-[9px]">Sin capturas aún</span>
          </div>
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => {
                prev();
                setPaused(true); 
              }}
              aria-label="Captura anterior"
              className="sticker-btn absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-tarjeta text-sm"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => {
                next();
                setPaused(true);
              }}
              aria-label="Siguiente captura"
              className="sticker-btn absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-tarjeta text-sm"
            >
              ›
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                goTo(i);
                setPaused(true);
              }}
              aria-label={`Ir a la captura ${i + 1}`}
              aria-current={i === index}
              className={`rounded-full transition-all ${
                i === index ? "h-2.5 w-6 bg-neon" : "size-2.5 bg-tinta/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}