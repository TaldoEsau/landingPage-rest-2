import React from "react";
import { Composition } from "remotion";
import { HeroComposition } from "./HeroComposition";
import { VideoShowcase } from "./VideoShowcase";
import { palette, motion } from "../lib/design-system";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroComposition"
        component={HeroComposition}
        durationInFrames={motion.heroDurationInFrames}
        fps={motion.fps}
        width={1920}
        height={1080}
        defaultProps={{
          primary: palette.primary,
          secondary: palette.secondary,
          surface: palette.surface,
          videoSrc: "/images/video-restaurante.mp4",
        }}
      />
      <Composition
        id="VideoShowcase"
        component={VideoShowcase}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          videoSrc: "/images/video-ambiente.mp4",
          primaryColor: palette.primary,
          title: "Eduarda Cozinha · Atmosfera & Sofisticação",
        }}
      />
    </>
  );
};
