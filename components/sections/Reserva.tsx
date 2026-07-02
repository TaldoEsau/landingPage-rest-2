"use client";

import { useState } from "react";
import { site, faqs } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";
import { InstagramIcon, WhatsAppIcon } from "@/components/site/icons";

const horarios = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
const pessoasOptions = ["1 Pessoa", "2 Pessoas", "3 Pessoas", "4 Pessoas", "5 Pessoas", "6 Pessoas", "7+ Pessoas (Evento)"];

function CampoForm({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary">
        {label}
      </span>
      <div className="relative">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full appearance-none rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-text transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export function Reserva() {
  const [reservaSucesso, setReservaSucesso] = useState(false);
  const [newsletterSucesso, setNewsletterSucesso] = useState(false);

  const handleReservaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReservaSucesso(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSucesso(true);
  };

  return (
    <section id="reserva" className="relative border-t border-line/60 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          {/* Form de Reserva */}
          <Reveal as="div">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary/60" />
              Reservas
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text sm:text-4xl lg:text-5xl">
              Reserve sua Mesa
            </h2>
            <p className="mt-4 text-base text-muted font-light max-w-lg">
              Garantimos uma mesa preparada especialmente para você. Para grupos maiores de 6 pessoas, entre em contato via WhatsApp.
            </p>

            {reservaSucesso ? (
              <div className="mt-8 rounded-2xl border border-primary/30 bg-surface2/60 p-8 text-center shadow-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-surface text-2xl font-bold">
                  ✓
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-primary">
                  Solicitação Enviada!
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Obrigado por escolher o Eduarda Cozinha. Nossa equipe confirmará sua reserva em breve por WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setReservaSucesso(false)}
                  className="mt-6 inline-flex rounded-full border border-primary/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-surface"
                >
                  Fazer outra solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleReservaSubmit} className="mt-8 rounded-3xl border border-line bg-surface2/40 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <CampoForm label="Data">
                    <input
                      type="date"
                      required
                      defaultValue="2026-07-03"
                      className={inputClass}
                      aria-label="Data da reserva"
                    />
                  </CampoForm>

                  <CampoForm label="Horário">
                    <select defaultValue="20:00" className={inputClass} aria-label="Horário da reserva">
                      {horarios.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </CampoForm>

                  <CampoForm label="Pessoas">
                    <select defaultValue="2 Pessoas" className={inputClass} aria-label="Número de pessoas">
                      {pessoasOptions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </CampoForm>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <CampoForm label="Nome Completo">
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      className={inputClass}
                    />
                  </CampoForm>

                  <CampoForm label="WhatsApp">
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      className={inputClass}
                    />
                  </CampoForm>
                </div>

                <CampoForm label="Observações Especiais (Opcional)">
                  <textarea
                    rows={2}
                    placeholder="Aniversário, alergias alimentares ou preferências de mesa..."
                    className={inputClass}
                  />
                </CampoForm>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-surface shadow-glow transition-all hover:scale-[1.01] hover:bg-primary/90"
                >
                  Confirmar Reserva
                </button>

                <p className="text-center text-xs text-muted font-light">
                  Sem taxas de reserva. Cancelamento com até 6 horas de antecedência.
                </p>
              </form>
            )}
          </Reveal>

          {/* Card de Contato & Informações */}
          <Reveal as="div" delay={100}>
            <div className="h-full overflow-hidden rounded-3xl border border-line bg-surface2/30 flex flex-col justify-between p-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-primary">
                  Onde Estamos
                </h3>

                <dl className="mt-6 space-y-6 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-primary">
                      Endereço
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-text font-medium">
                      {site.endereco.rua}<br />
                      {site.endereco.bairro}<br />
                      {site.endereco.cidadeEstado}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-primary">
                      Funcionamento
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-muted">
                      {site.horario}
                    </dd>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-primary">
                        Telefone
                      </dt>
                      <dd className="mt-1.5">
                        <a href={site.telefoneHref} className="text-text font-medium hover:text-primary transition-colors">
                          {site.telefone}
                        </a>
                      </dd>
                    </div>

                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-primary">
                        E-mail
                      </dt>
                      <dd className="mt-1.5">
                        <a href={`mailto:${site.email}`} className="text-text font-medium hover:text-primary transition-colors">
                          {site.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Newsletter */}
              <div className="mt-10 border-t border-line/60 pt-8">
                <h4 className="font-display text-lg font-semibold text-text">
                  Receba Novidades &amp; Eventos
                </h4>
                <p className="mt-1 text-xs text-muted">
                  Inscreva-se para convites de jantares harmonizados e novos menus.
                </p>

                {newsletterSucesso ? (
                  <p className="mt-4 rounded-xl bg-primary/10 p-3 text-center text-xs font-semibold text-primary">
                    ✓ E-mail cadastrado com sucesso!
                  </p>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="seu.email@exemplo.com"
                      aria-label="Endereço de e-mail"
                      className="min-w-0 flex-1 rounded-xl border border-line bg-surface px-4 py-3 text-xs text-text placeholder:text-muted/60 focus:border-primary focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="shrink-0 rounded-xl bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-surface transition-transform hover:scale-[1.03]"
                    >
                      Assinar
                    </button>
                  </form>
                )}

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-text transition-all hover:border-primary hover:text-primary"
                  >
                    <InstagramIcon className="h-4 w-4 text-primary" />
                    <span>@eduardacozinha</span>
                  </a>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-text transition-all hover:border-primary hover:text-primary"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-primary" />
                    <span>WhatsApp Oficial</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* FAQs */}
        <div className="mt-24 border-t border-line/60 pt-16">
          <Reveal>
            <h3 className="text-center font-display text-2xl font-semibold text-primary sm:text-3xl">
              Perguntas Frequentes
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {faqs.map((faq, idx) => (
              <Reveal key={faq.q} delay={idx * 80}>
                <div className="rounded-2xl border border-line/70 bg-surface2/30 p-6">
                  <h4 className="font-display text-base font-semibold text-text">
                    {faq.q}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted font-light">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
