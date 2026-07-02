"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import type { GooglePlaceDetails, GoogleReview } from "@/app/api/google-reviews/route";

export function AvaliacoesGoogle() {
  const [placeData, setPlaceData] = useState<GooglePlaceDetails | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data) {
          setPlaceData(json.data);
        }
      })
      .catch((err) => console.warn("Erro ao buscar avaliações do Google:", err));
  }, []);

  const data = placeData;
  const reviewsList = data?.reviews || [];
  // Quadruplicamos a lista para garantir scroll infinito contínuo e suave
  const marqueeReviews = [...reviewsList, ...reviewsList, ...reviewsList, ...reviewsList];

  // Auto-scroll contínuo via requestAnimationFrame (scrollLeft)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || reviewsList.length === 0) return;

    let animationId: number;
    let isHovered = false;

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleMouseEnter, { passive: true });
    container.addEventListener("touchend", handleMouseLeave, { passive: true });

    const scrollStep = () => {
      if (!isHovered && container) {
        container.scrollLeft += 0.8; // Velocidade fluida constante
        // Quando rola metade do conteúdo duplicado, retorna ao início sem pulo perceptível
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scrollStep);
    };

    animationId = requestAnimationFrame(scrollStep);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleMouseEnter);
      container.removeEventListener("touchend", handleMouseLeave);
    };
  }, [reviewsList]);

  return (
    <section id="avaliacoes" className="relative border-t border-line/60 py-24 sm:py-32 bg-surface2/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                <span className="h-px w-8 bg-primary/60" />
                Google Meu Negócio
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
                O que dizem nossos clientes
              </h2>
            </div>

            {/* Placa de Nota & Botão AVALIAR */}
            <div className="flex items-center gap-6 bg-surface p-4 sm:p-5 rounded-2xl border border-line shadow-sm shrink-0">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-primary">
                    {data ? data.rating.toFixed(1).replace(".", ",") : "5,0"}
                  </span>
                  <div className="flex text-[#F4B400] text-sm">★★★★★</div>
                </div>
                <p className="text-xs text-muted font-light mt-0.5">
                  {data?.user_ratings_total || 741} avaliações verificadas
                </p>
              </div>

              <a
                href={data?.url || "https://maps.google.com/?q=Eduarda+Cozinha+Santa+Fe+do+Sul"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-surface shadow-glow transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90"
              >
                Avaliar
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Carrossel Horizontal Infinito Auto-Scroll (Sem necessidade de arrastar) */}
      <div className="relative w-full overflow-hidden">
        {/* Degradês laterais de suavização */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-surface2/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-surface2/80 to-transparent" />

        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-6 overflow-x-auto px-6 py-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {marqueeReviews.map((review: GoogleReview, idx: number) => (
            <div
              key={`${review.author_name}-${idx}`}
              className="flex w-[320px] sm:w-[360px] shrink-0 flex-col justify-between rounded-3xl border border-line/80 bg-surface p-7 shadow-sm shadow-gold transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div>
                {/* Linha do Autor */}
                <div className="flex items-center gap-3.5">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-surface2 shadow-sm">
                    {review.profile_photo_url ? (
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-display font-bold text-primary text-base">
                        {review.author_name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-display text-base font-semibold text-text">
                      {review.author_name}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[#F4B400] text-xs">★★★★★</span>
                      <span className="text-[11px] text-muted">
                        {review.relative_time_description}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Comentário */}
                <p className="mt-5 text-xs sm:text-sm leading-relaxed text-muted font-light line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Tag Google no Rodapé do Card */}
              <div className="mt-6 flex items-center justify-between border-t border-line/50 pt-4 text-[11px] text-muted">
                <span className="flex items-center gap-1.5 font-medium text-primary">
                  <svg className="h-3.5 w-3.5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  Avaliação no Google
                </span>
                <span>{review.details || "Verificado"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
