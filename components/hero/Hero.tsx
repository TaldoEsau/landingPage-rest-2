import { HeroMotion } from "./HeroMotion";
import { site } from "@/lib/content";

/**
 * Hero Component — O vídeo do ambiente é exibido no fundo em 100% Full Screen.
 * O cartão de apresentação fica posicionado à DIREITA da tela com responsividade perfeita.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen h-screen w-full flex-col justify-between overflow-hidden bg-[#041402] pt-20 sm:pt-28 pb-8 sm:pb-12"
    >
      {/* Vídeo do restaurante em 100% Full Screen no fundo */}
      <HeroMotion />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center items-end px-4 sm:px-8">
        {/* Cartão Glass Clean Posicionado à DIREITA da Tela */}
        <div className="ml-auto w-full max-w-2xl lg:max-w-3xl rounded-2xl sm:rounded-3xl border border-white/15 bg-[#041402]/80 p-5 sm:p-10 lg:p-12 backdrop-blur-md shadow-2xl">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-detail/40 bg-black/40 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-detail shadow-md">
            <span className="h-2 w-2 rounded-full bg-detail animate-pulse" />
            {site.endereco.bairro} · {site.endereco.cidadeEstado.split("-")[0].trim()}
          </div>

          <h1
            id="hero-heading"
            className="mt-4 sm:mt-6 font-display text-2xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-surface break-words"
          >
            Experiência gastronômica{" "}
            <span className="text-detail italic font-serif font-normal">
              autoral &amp; inesquecível
            </span>
            ,<br className="hidden sm:block" /> em um ambiente sofisticado.
          </h1>

          <p className="mt-3 sm:mt-5 text-xs sm:text-lg leading-relaxed text-surface/90 font-light">
            Alta gastronomia nos Jardins. Ingredientes selecionados, técnicas precisas e sabor sem igual em um espaço clean e elegante.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#reserva"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-surface shadow-glow transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 focus-visible:scale-[1.03]"
            >
              Reservar uma mesa
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center rounded-full border border-surface/40 bg-white/5 px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-surface backdrop-blur-sm transition-all duration-300 hover:bg-surface/15 hover:border-surface"
            >
              Conhecer o cardápio
            </a>
          </div>

          <dl className="mt-6 sm:mt-10 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-sm text-surface/80 border-t border-white/15 pt-4 sm:pt-6">
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
      <div aria-hidden className="relative z-10 flex justify-center pt-2 sm:pt-4">
        <span className="flex h-8 sm:h-9 w-4 sm:w-5 items-start justify-center rounded-full border border-surface/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-detail" />
        </span>
      </div>
    </section>
  );
}
