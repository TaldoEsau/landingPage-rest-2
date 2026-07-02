import { drinksDestaque } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/site/Reveal";

export function Drinks() {
  return (
    <section id="drinks" className="relative border-t border-line/60 py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader
          eyebrow="Coquetelaria de Autoria"
          title="Drinks Assinatura"
          intro="Infusões exclusivas, xaropes artesanais e destilados nobres preparados para aguçar os sentidos."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {drinksDestaque.map((drink, index) => (
            <Reveal key={drink.nome} delay={index * 90}>
              <div className="group relative flex flex-col h-full overflow-hidden rounded-3xl bg-surface2/50 border border-line/70 transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={drink.imagem}
                    alt={drink.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <span className="absolute bottom-4 right-4 font-display text-2xl font-bold text-surface drop-shadow-md">
                    {drink.preco}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {drink.nome}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted font-light">
                    {drink.descricao}
                  </p>

                  <div className="mt-4 border-t border-line/60 pt-3">
                    <span className="block text-[10px] font-semibold uppercase tracking-widest text-primary/80">
                      Ingredientes
                    </span>
                    <p className="mt-1 text-[11px] text-muted italic">
                      {drink.ingredientes}
                    </p>
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
