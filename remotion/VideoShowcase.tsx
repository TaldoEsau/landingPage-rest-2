import React from "react";
import {
  AbsoluteFill,
  Video,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type VideoShowcaseProps = {
  videoSrc?: string;
  primaryColor?: string;
  title?: string;
};

/**
 * Composição Remotion para o vídeo de ambiente do restaurante.
 * Executa em loop contínuo e infinito sem interrupções.
 */
export const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  videoSrc = "/images/video-ambiente.mp4",
  primaryColor = "#083204",
  title = "Eduarda Cozinha · Atmosfera & Sofisticação",
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Animação de entrada e saída suave do título
  const titleOpacity = interpolate(
    frame,
    [0, 30, durationInFrames - 30, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const glow = interpolate(
    Math.sin((frame / 40) * Math.PI),
    [-1, 1],
    [0.15, 0.35]
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#041402", overflow: "hidden" }}>
      {/* Vídeo principal via <Video> do Remotion com loop={true} */}
      <AbsoluteFill>
        <Video
          src={staticFile(videoSrc)}
          loop={true}
          muted={true}
          volume={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* Overlays de vinheta elegante */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(90% 90% at 50% 50%, transparent 50%, ${primaryColor}E6 100%)`,
          opacity: 0.85,
        }}
      />

      <AbsoluteFill
        style={{
          boxShadow: `inset 0 0 100px 30px ${primaryColor}`,
          opacity: glow,
        }}
      />

      {/* Título animado via Remotion */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: "48px",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            backgroundColor: `${primaryColor}CC`,
            backdropFilter: "blur(12px)",
            padding: "14px 32px",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#FDF5F0",
            fontFamily: "Georgia, serif",
            fontSize: "20px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
