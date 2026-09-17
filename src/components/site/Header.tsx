import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NAV_LINKS, SERVICE_MENU, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-mist/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open services menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid size-9 place-items-center rounded-md border border-navy/15 bg-card transition hover:border-electric/60"
          >
            <span className="flex flex-col gap-[3px]">
              <span className="block h-[2px] w-4 rounded bg-ink" />
              <span className="block h-[2px] w-4 rounded bg-ink" />
              <span className="block h-[2px] w-4 rounded bg-ink" />
            </span>
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-md bg-electric font-display font-bold text-primary-foreground">
              N
            </div>
            <div className="leading-none">
              <span className="font-display text-lg font-semibold tracking-tight text-ink">
                NexaTech
              </span>
              <span className="font-display text-lg font-light text-ink/60"> Solutions</span>
            </div>
          </Link>
        </div>
        <nav className="hidden items-center gap-7 text-sm font-medium text-navy/70 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-ink" }}
              className="transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-mist transition hover:bg-navy sm:inline-flex"
        >
          Get a Quote
        </Link>
      </div>

      {/* Slide-out service index */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close services menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col bg-mist shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
            <div>
              <div className="eyebrow text-electric">All services</div>
              <div className="font-display text-lg font-semibold text-ink">NexaTech Solutions</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-8 place-items-center rounded-md border border-navy/15 text-ink transition hover:bg-navy/5"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            {SERVICE_MENU.map((group) => (
              <div key={group.heading} className="mb-6">
                <Link
                  to={group.to}
                  className="flex items-center justify-between text-sm font-semibold text-ink transition hover:text-electric"
                >
                  {group.heading} <span aria-hidden>→</span>
                </Link>
                <ul className="mt-2 space-y-1.5 border-l border-navy/10 pl-3">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Link
                        to={group.to}
                        className="block text-sm text-navy/70 transition hover:text-electric"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-navy/10 p-5">
            <a
              href={whatsappLink(
                "Hello NexaTech Solutions, I am requesting more information on your services.",
              )}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-signal px-4 py-3 font-semibold text-ink transition hover:brightness-105"
            >
              💬 Chat on WhatsApp
            </a>
            <p className="mt-2 text-center font-mono text-xs text-navy/50">{WHATSAPP_DISPLAY}</p>
          </div>
        </aside>
      </div>
    </header>
  );
}
