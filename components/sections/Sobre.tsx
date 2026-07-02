import { Reveal } from "@/components/site/Reveal";

export function Sobre() {
  return (
    <section id="sobre" className="relative border-t border-line/60 py-16 sm:py-24 bg-[#FDF5F0] overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <Reveal>
          {/* Stage Card do Redesign */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#F7F0E7] px-8 py-14 sm:px-16 sm:py-20 shadow-sm border border-[#3E4A30]/15"
               style={{
                 background:
                   "radial-gradient(circle at 15% 10%, rgba(233,203,183,0.35), transparent 45%), radial-gradient(circle at 90% 85%, rgba(107,122,79,0.10), transparent 40%), #F7F0E7"
               }}>
            
            {/* Aspas decorativas d'água */}
            <span className="pointer-events-none absolute top-8 right-10 select-none font-display text-7xl italic text-[#E3BCA3] opacity-60">
              &ldquo;
            </span>

            <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] items-center">
              {/* LADO DA FOTO DA CHEF CRIS */}
              <div className="relative flex justify-center">
                <div className="relative flex justify-center w-full max-w-[340px]">
                  {/* Formato Orgânico de Fundo (Blob) */}
                  <div className="pointer-events-none absolute -top-[8%] left-[6%] w-[88%] h-[112%] bg-gradient-to-br from-[#E9CBB7] to-[#E3BCA3] rounded-[48%_52%_58%_42%/42%_46%_54%_58%] z-0" />

                  {/* Cartão da Foto com Canto Orgânico Assimétrico */}
                  <div className="relative z-10 w-[340px]">
                    <div className="relative h-[460px] w-full overflow-hidden rounded-[20px_20px_120px_20px] bg-gradient-to-br from-[#4A5638] via-[#333E26] to-[#24291A] shadow-[0_30px_60px_-20px_rgba(43,52,32,0.45)] flex items-end justify-center">
                      {/* Textura sutil de fundo */}
                      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0_2px,transparent_2px_8px)]" />
                      
                      {/* Foto Recortada da Chef Cris Farias */}
                      <img
                        src="/images/chef-cris.png"
                        alt="Cris Farias - Chef & Proprietária"
                        className="relative z-10 max-h-[440px] w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Cartão Flutuante do Nome */}
                    <div className="absolute -bottom-7 left-1/2 z-20 w-[82%] -translate-x-1/2 rounded-2xl border border-white/60 bg-white/65 p-4 text-center backdrop-blur-md shadow-[0_16px_40px_-18px_rgba(43,52,32,0.35)]">
                      <div className="font-display text-lg font-semibold text-[#2B3420]">
                        Cris Farias
                      </div>
                      <div className="mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#6E6558]">
                        Chef &amp; Proprietária
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LADO DO TEXTO (A ESSÊNCIA DO EDUARDA) */}
              <div className="pt-6 lg:pt-0">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-[3px] w-9 rounded-full bg-gradient-to-r from-[#3E4A30] to-[#6B7A4F]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3E4A30]">
                    A essência do Eduarda
                  </span>
                </div>

                <h2 className="font-display text-4xl sm:text-[46px] font-semibold leading-[1.08] tracking-tight text-[#2B3420] mb-6">
                  Homenagem, paixão<br />
                  e <em className="italic font-normal text-[#6B7A4F]">culinária italiana</em>
                </h2>

                <div className="space-y-4 text-base leading-relaxed text-[#6E6558] font-light max-w-[46ch]">
                  <p>
                    O Eduarda Cozinha e Vinhos nasceu de uma homenagem especial. O nome da casa é um tributo carinhoso à mãe da nossa chef e proprietária, <b className="font-semibold text-[#2A2620]">Cris Farias</b>, a principal inspiração por trás da nossa paixão por receber bem.
                  </p>
                  <p>
                    Trazemos o coração da culinária italiana para a mesa, em um ambiente que equilibra elegância e aconchego — cada prato desenhado para harmonizar com nossa seleção exclusiva de vinhos e drinks autorais.
                  </p>
                </div>

                {/* TAGS */}
                <div className="mt-8 flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#3E4A30] px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.03em] text-[#F7F0E7] shadow-sm">
                    <svg className="h-3.5 w-3.5 text-[#E9CBB7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 21c1-4 2-14 8-17 6 3 7 13 8 17" />
                      <path d="M12 4v17" />
                    </svg>
                    Inspiração italiana
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#3E4A30]/20 bg-transparent px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.03em] text-[#2B3420]">
                    <svg className="h-3.5 w-3.5 text-[#6B7A4F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M7 3h10l-1 8a4 4 0 0 1-8 0L7 3Z" />
                      <path d="M12 15v6M9 21h6" />
                    </svg>
                    Vinhos e drinks autorais
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#3E4A30]/20 bg-transparent px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.03em] text-[#2B3420]">
                    <svg className="h-3.5 w-3.5 text-[#6B7A4F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                    Arte de receber bem
                  </span>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
