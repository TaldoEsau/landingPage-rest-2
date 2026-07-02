"use client";

import { useEffect, useState } from "react";
import { HeroComposition } from "@/remotion/HeroComposition";

export function HeroMotion() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = requestAnimationFrame(() => setEnabled(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      {/* Poster estático simples */}
      <div className="hero-poster absolute inset-0" />

      {enabled && (
        <div className="absolute inset-0">
          <HeroComposition videoSrc="/images/video-restaurante.mp4" />
        </div>
      )}
    </div>
  );
}
