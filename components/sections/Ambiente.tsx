"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { VideoShowcase } from "@/remotion/VideoShowcase";
import { palette } from "@/lib/design-system";

type PlayerComponent = (typeof import("@remotion/player"))["Player"];

const Player = dynamic(
  () => import("@remotion/player").then((m) => m.Player),
  { ssr: false, loading: () => null }
) as unknown as PlayerComponent;

export function Ambiente() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = requestAnimationFrame(() => setEnabled(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="ambiente" className="relative border-t border-line/60 py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader
          eyebrow="Nosso Espaço"
          title="Atmosfera Única &amp; Acolhedora"
          intro="Projetado para oferecer conforto, privacidade e elegância. Conheça a experiência de estar no Eduarda Cozinha."
        />

        <Reveal className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-line shadow-glow bg-[#041402]">
            {/* Fallback de vídeo nativo mudo */}
            <video
              src="/images/video-ambiente.mp4"
              muted={true}
              autoPlay
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            {enabled && (
              <Player
                component={VideoShowcase}
                inputProps={{
                  videoSrc: "/images/video-ambiente.mp4",
                  primaryColor: palette.primary,
                  title: "Eduarda Cozinha · Atmosfera & Sofisticação",
                }}
                durationInFrames={300}
                fps={30}
                compositionWidth={1920}
                compositionHeight={1080}
                loop
                autoPlay
                controls={false}
                clickToPlay={false}
                doubleClickToFullscreen={false}
                spaceKeyToPlayOrPause={false}
                className="absolute inset-0 h-full w-full"
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 text-center sm:text-left">
          <Reveal delay={100} className="rounded-2xl bg-surface2/40 p-6 border border-line/60">
            <h3 className="font-display text-lg font-semibold text-primary">Arquitetura Contemporânea</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted font-light">
              Design limpo com marcenaria nobre, vegetação integrada e iluminação intimista planejada.
            </p>
          </Reveal>

          <Reveal delay={200} className="rounded-2xl bg-surface2/40 p-6 border border-line/60">
            <h3 className="font-display text-lg font-semibold text-primary">Acústica Planejada</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted font-light">
              Tratamento sonorizado de alta qualidade para permitir conversas agradáveis e privadas.
            </p>
          </Reveal>

          <Reveal delay={300} className="rounded-2xl bg-surface2/40 p-6 border border-line/60">
            <h3 className="font-display text-lg font-semibold text-primary">Adega de Vinhos</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted font-light">
              Rótulos nacionais e internacionais climatizados para a harmonização perfeita com cada prato.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
