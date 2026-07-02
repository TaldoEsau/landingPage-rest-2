/**
 * Design system — Eduarda Cozinha.
 * Estética: restaurante de alta gastronomia, sofisticado, chique e clean.
 * Paleta principal: Verde Floresta Profundo (#083204) e Castanho/Terracota Nobre (#592000)
 * em fundo creme rosado (#FDF5F0) com toques de pêssego (#FCE8D7) e salva (#D8DFB3).
 */
export const palette = {
  primary: "#083204",   // Verde floresta profundo luxuoso
  secondary: "#592000", // Castanho escuro / Terracota nobre
  surface: "#FDF5F0",   // Creme rosado clean (fundo principal)
  surface2: "#FCE8D7",  // Pêssego claro suave (cards/superfícies)
  detail: "#D8DFB3",    // Verde salva refinado
  text: "#1C241B",      // Escuro verde-café (texto principal)
  muted: "#5C665A",     // Verde-oliva escuro (texto secundário)
  line: "#DFE6DC",      // Bordas delicadas
  white: "#FFFFFF",
} as const;

export const motion = {
  fps: 30,
  heroDurationInFrames: 300, // 10s loop
} as const;

export type Palette = typeof palette;
