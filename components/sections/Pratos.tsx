import { pratosDestaque } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/site/Reveal";

export function Pratos() {
  return (
    <section id="pratos" className="relative border-t border-line/60 bg-surface2/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader
          eyebrow="Gastronomia Autoral"
          title="Pratos em Destaque"
          intro="Uma seleção de receitas preparadas com técnicas refinadas, ingredientes nobres e apresentação impecável."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {pratosDestaque.map((prato, index) => (
            <Reveal key={prato.nome} delay={index * 100}>
              <div className="group relative flex flex-col h-full overflow-hidden rounded-3xl bg-surface border border-line/80 shadow-sm transition-all duration-500 hover:shadow-gold hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={prato.imagem}
                    alt={prato.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute top-4 left-4 rounded-full bg-surface/90 backdrop-blur-md px-3.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-sm">
                    {prato.categoria}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold leading-snug text-text group-hover:text-primary transition-colors">
                      {prato.nome}
                    </h3>
                    <span className="shrink-0 font-display text-xl font-bold text-primary">
                      {prato.preco}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted font-light flex-1">
                    {prato.descricao}
                  </p>

                  <div className="mt-6 border-t border-line/50 pt-4 flex items-center justify-between text-xs text-primary font-medium">
                    <span>Experimente com vinho harmonizado</span>
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
