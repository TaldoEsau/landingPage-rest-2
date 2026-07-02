import React from "react";
import { AbsoluteFill } from "remotion";

export type HeroCompositionProps = {
  videoSrc?: string;
};

/**
 * HeroComposition com Vídeo em 100% Full Screen, Looping Fluido Nativo e 100% MUDO (Sem som).
 */
export const HeroComposition: React.FC<HeroCompositionProps> = ({
  videoSrc = "/images/video-restaurante.mp4",
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#041402", overflow: "hidden" }}>
      <video
        src={videoSrc}
        muted={true}
        autoPlay
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.78) contrast(1.05)",
        }}
      />
      {/* Camada limpa de escurecimento suave para legibilidade do texto */}
      <AbsoluteFill
        style={{
          backgroundColor: "rgba(4, 20, 2, 0.22)",
        }}
      />
    </AbsoluteFill>
  );
};
