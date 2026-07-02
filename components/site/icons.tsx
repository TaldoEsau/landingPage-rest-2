import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden {...props}>
      <path d="M12 2a10 10 0 0 1 8.6 15.1L21 22l-5-1.3A10 10 0 1 1 12 2z" />
      <path d="M8.5 7.5c.3 0 .6.1.8.6.2.6.8 2 1 2.2.1.2.1.4 0 .6s-.2.4-.4.6c-.2.2-.4.4-.2.8.5.8 1.3 1.6 2.2 2.1.4.2.6.1.8-.1.2-.2.6-.7.8-.9.2-.2.4-.2.6-.1.2.1 1.5.7 1.8.8.3.2.4.3.5.5.1.5-.1 1.6-1 2.2-.9.5-2.2.7-4.4-.2-2.3-.9-4.1-2.7-5-4.9-.8-2-.2-3.4.4-4.2.4-.5.9-.6 1.1-.6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function EduardaMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="12" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}
