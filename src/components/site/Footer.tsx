import { Link } from "@tanstack/react-router";
import { LOCATION } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-mist/60">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 sm:flex-row">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="grid size-7 place-items-center rounded-md bg-electric font-display font-bold text-primary-foreground">
              N
            </div>
            <span className="font-display font-semibold text-mist">NexaTech Solutions</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            Software installation &amp; licensing assistance using legitimate software and authorized
            licensing options.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
          <Link to="/software" className="transition hover:text-mist">
            Software
          </Link>
          <Link to="/gaming" className="transition hover:text-mist">
            Gaming
          </Link>
          <Link to="/computer-services" className="transition hover:text-mist">
            Computer Services
          </Link>
          <Link to="/digital-services" className="transition hover:text-mist">
            Digital
          </Link>
          <Link to="/pricing" className="transition hover:text-mist">
            Pricing
          </Link>
          <Link to="/contact" className="transition hover:text-mist">
            Contact
          </Link>
        </div>
        <div className="font-mono text-xs">© 2026 NexaTech Solutions · {LOCATION}</div>
      </div>
    </footer>
  );
}
