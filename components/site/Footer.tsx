import { site, nav } from "@/lib/content";
import { InstagramIcon, WhatsAppIcon, EduardaMark } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface2/60 pt-16 pb-12">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 md:grid-cols-[1.5fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <EduardaMark className="h-8 w-8 text-primary" />
            <div className="leading-none">
              <div className="font-display text-2xl font-semibold text-primary">
                Eduarda
              </div>
              <div className="text-[9px] font-semibold uppercase tracking-[0.35em] text-muted">
                Cozinha
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted font-light">
            {site.slogan}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-surface"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.whatsapp}
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-surface"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Navegação
          </h3>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Localização &amp; Horário
          </h3>
          <address className="mt-5 space-y-1.5 text-sm not-italic leading-relaxed text-muted">
            <div className="font-medium text-text">{site.endereco.rua}</div>
            <div>{site.endereco.bairro}</div>
            <div>{site.endereco.cidadeEstado}</div>
          </address>
          <div className="mt-5 space-y-1.5 text-sm text-muted">
            <div>{site.horario}</div>
            <a href={site.telefoneHref} className="block text-text font-medium transition-colors hover:text-primary">
              {site.telefone}
            </a>
            <a href={`mailto:${site.email}`} className="block text-text transition-colors hover:text-primary">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-line/60 pt-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:px-8 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.nomeCompleto}. Todos os direitos reservados.
          </p>
          <p className="font-display italic text-primary">
            Elegância, sabor e momentos inesquecíveis.
          </p>
        </div>
      </div>
    </footer>
  );
}
