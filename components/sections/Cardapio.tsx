import { cardapio, notasCardapio } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/site/Reveal";

function LinhaCardapio({
  nome,
  descricao,
  preco,
}: {
  nome: string;
  descricao?: string;
  preco: string;
}) {
  return (
    <div className="group border-b border-line/60 py-4 transition-colors hover:border-primary/40">
      <div className="leader">
        <span className="text-base sm:text-lg font-semibold text-text group-hover:text-primary transition-colors">
          {nome}
        </span>
        <span className="leader__line" aria-hidden />
        <span className="shrink-0 font-display text-lg font-bold text-primary">
          R$ {preco}
        </span>
      </div>
      {descricao && (
        <p className="mt-1 max-w-xl text-xs sm:text-sm text-muted font-light">
          {descricao}
        </p>
      )}
    </div>
  );
}

export function Cardapio() {
  return (
    <section id="cardapio" className="relative border-t border-line/60 bg-surface2/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader
          eyebrow="Experiência Gastronômica"
          title="Menu Completo"
          intro="Pratos elaborados com ingredientes da estação, selecionados criteriosamente para proporcionar sabores autênticos."
        />

        <div className="mt-16 space-y-16">
          {cardapio.map((secao) => (
            <Reveal as="div" key={secao.titulo}>
              <h3 className="flex items-center gap-3 font-display text-xl font-semibold tracking-wide text-primary border-b-2 border-primary/20 pb-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {secao.titulo}
              </h3>
              <div className="mt-6 grid gap-x-12 sm:grid-cols-2">
                {secao.itens.map((item) => (
                  <LinhaCardapio
                    key={item.nome}
                    nome={item.nome}
                    descricao={item.descricao}
                    preco={item.preco}
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Notas do Chef */}
        <Reveal as="div" className="mt-16 rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-sm">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Observações Importantes
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-muted font-light">
            {notasCardapio.map((nota) => (
              <li key={nota} className="flex items-start gap-3">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{nota}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
