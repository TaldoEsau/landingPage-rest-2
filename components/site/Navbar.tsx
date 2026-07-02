"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { EduardaMark } from "./icons";

function Wordmark() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Eduarda Cozinha — Início">
      <EduardaMark className="h-7 w-7 text-detail transition-transform duration-300 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-semibold tracking-tight text-surface">
          Eduarda
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-detail">
          Cozinha
        </span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-primary/95 backdrop-blur-md py-3.5 shadow-xl"
          : "border-b border-white/10 bg-[#041402]/85 backdrop-blur-md py-4 shadow-lg"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
        <Wordmark />

        {/* Navigation links - Desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-surface/90 transition-colors hover:text-detail"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={site.reservasUrl}
            className="hidden rounded-full bg-secondary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-surface shadow-md transition-all duration-200 hover:scale-[1.04] hover:bg-secondary/90 sm:inline-flex"
          >
            Reservar
          </a>

          {/* Toggle Button - Mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-surface lg:hidden"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="border-b border-white/10 bg-[#041402]/95 backdrop-blur-xl lg:hidden shadow-2xl">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-semibold uppercase tracking-widest text-surface transition-colors hover:text-detail"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-2">
              <a
                href={site.reservasUrl}
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-surface shadow-md"
              >
                Reservar uma mesa
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
