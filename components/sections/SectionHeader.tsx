import { Reveal } from "@/components/site/Reveal";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
        style={align === "center" ? { justifyContent: "center" } : undefined}
      >
        <span className="h-px w-8 bg-primary/40" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
