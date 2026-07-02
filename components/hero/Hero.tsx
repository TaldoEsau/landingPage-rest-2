import { HeroMotion } from "./HeroMotion";
import { site } from "@/lib/content";

/**
 * Hero Component — O vídeo do ambiente é exibido no fundo em 100% Full Screen.
 * O cartão de apresentação fica posicionado à DIREITA da tela com alta legibilidade.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen h-screen w-full flex-col justify-between overflow-hidden bg-[#041402] pt-28 pb-12"
    >
      {/* Vídeo do restaurante em 100% Full Screen no fundo */}
      <HeroMotion />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center items-end px-6 sm:px-8">
        {/* Cartão Glass Clean Posicionado à DIREITA da Tela */}
        <div className="ml-auto w-full max-w-2xl lg:max-w-3xl rounded-3xl border border-white/15 bg-[#041402]/80 p-8 sm:p-12 backdrop-blur-md shadow-2xl">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-detail/40 bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-detail shadow-md">
            <span className="h-2 w-2 rounded-full bg-detail animate-pulse" />
            {site.endereco.bairro} · {site.endereco.cidadeEstado.split("-")[0].trim()}
          </div>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-surface sm:text-4xl lg:text-5xl"
          >
            Experiência gastronômica{" "}
            <span className="text-detail italic font-serif font-normal">
              autoral &amp; inesquecível
            </span>
            ,<br className="hidden sm:block" /> em um ambiente sofisticado.
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-surface/90 font-light">
            Alta gastronomia nos Jardins. Ingredientes selecionados, técnicas precisas e sabor sem igual em um espaço clean e elegante.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#reserva"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-surface shadow-glow transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 focus-visible:scale-[1.03]"
            >
              Reservar uma mesa
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center rounded-full border border-surface/40 bg-white/5 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-surface backdrop-blur-sm transition-all duration-300 hover:bg-surface/15 hover:border-surface"
            >
              Conhecer o cardápio
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-surface/80 border-t border-white/15 pt-6">
            <div className="flex items-center gap-2">
              <dt className="sr-only">Horário</dt>
              <dd className="font-medium text-surface">{site.horario}</dd>
            </div>
            <span aria-hidden className="hidden h-1.5 w-1.5 rounded-full bg-detail/60 sm:block" />
            <div>
              <dt className="sr-only">Telefone</dt>
              <dd>
                <a href={site.telefoneHref} className="transition-colors hover:text-detail font-medium">
                  {site.telefone}
                </a>
              </dd>
            </div>
            <span aria-hidden className="hidden h-1.5 w-1.5 rounded-full bg-detail/60 sm:block" />
            <div>
              <dt className="sr-only">Endereço</dt>
              <dd className="font-medium text-surface">{site.endereco.rua}, {site.endereco.bairro}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <div aria-hidden className="relative z-10 flex justify-center pt-4">
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-surface/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-detail" />
        </span>
      </div>
    </section>
  );
}
