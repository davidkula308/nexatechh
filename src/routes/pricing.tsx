import { createFileRoute } from "@tanstack/react-router";
import { enquiryLink, whatsappLink, WHATSAPP_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Get a Quote | NexaTech Solutions" },
      {
        name: "description",
        content:
          "Request a quote on WhatsApp for software installation, complete laptop setup, student CAD packages, gaming setup, printing and digital services in Kenya.",
      },
      { property: "og:title", content: "Get a Quote | NexaTech Solutions" },
      {
        property: "og:description",
        content: "Tell us what you need and we send a quote on WhatsApp — no fixed price lists.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Single Software Install",
    note: "one title",
    items: [
      "One software installed",
      "Configuration & basic setup",
      "Activation assistance",
      "Remote or physical",
    ],
    featured: false,
  },
  {
    name: "Complete Laptop Setup",
    note: "most popular",
    items: [
      "Windows install & configuration",
      "All drivers",
      "Office, PDF, browser, security",
      "Updates & performance tuning",
      "Backup and data transfer",
    ],
    featured: true,
  },
  {
    name: "Student CAD Package",
    note: "per discipline",
    items: [
      "Discipline software bundle",
      "CAD configuration",
      "Plotting & PDF setup",
      "Basic orientation session",
    ],
    featured: false,
  },
];

const quotable = [
  "CAD & engineering software installation",
  "Windows installation / formatting",
  "Virus & malware removal",
  "Gaming PC setup package",
  "CAD drafting (per drawing)",
  "A1 / A2 / A3 plotting",
  "CV or portfolio design",
  "Website development",
];

function Pricing() {
  return (
    <>
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="eyebrow mb-4 flex items-center gap-2 text-electric">
            <span className="size-1.5 rounded-full bg-signal" /> Quotes
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
            Tell us what you need and we&apos;ll quote you
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy/70">
            Every job is a little different, so we quote after we hear what you need. Send us a
            message on WhatsApp and you&apos;ll get a clear quote before any work starts.
          </p>
          <a
            href={whatsappLink("Hello NexaTech Solutions, I would like a quote for:")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-signal px-6 py-3 font-semibold text-ink transition hover:brightness-105"
          >
            💬 Ask for a quote on WhatsApp
          </a>
          <p className="mt-2 font-mono text-xs text-navy/50">{WHATSAPP_DISPLAY}</p>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={
                  t.featured
                    ? "flex flex-col rounded-2xl bg-ink p-6 text-mist ring-2 ring-signal/50"
                    : "flex flex-col rounded-2xl border border-navy/10 bg-mist/60 p-6"
                }
              >
                <div className={`eyebrow mb-1 ${t.featured ? "text-signal" : "text-navy/50"}`}>
                  {t.note}
                </div>
                <h2 className={`mb-3 text-xl font-semibold ${t.featured ? "" : "text-ink"}`}>
                  {t.name}
                </h2>
                <ul
                  className={`mt-2 flex-1 space-y-2 text-sm ${
                    t.featured ? "text-mist/70" : "text-navy/70"
                  }`}
                >
                  {t.items.map((i) => (
                    <li key={i}>· {i}</li>
                  ))}
                </ul>
                <a
                  href={enquiryLink(t.name)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 rounded-lg px-5 py-3 text-center font-semibold transition ${
                    t.featured
                      ? "bg-signal text-ink hover:brightness-105"
                      : "bg-electric text-primary-foreground hover:brightness-110"
                  }`}
                >
                  💬 Ask for a quote on WhatsApp
                </a>
              </div>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-semibold text-ink">Ask about any of these</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quotable.map((service) => (
              <a
                key={service}
                href={enquiryLink(service)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-navy/10 bg-mist/60 px-4 py-3 text-sm font-medium text-ink transition hover:border-electric/60"
              >
                {service} <span aria-hidden>→</span>
              </a>
            ))}
          </div>

          <p className="mt-8 max-w-3xl font-mono text-xs leading-relaxed text-navy/50">
            Where a paid licence is required, the licence cost is quoted separately and paid to the
            vendor. Bulk, campus and business quotes available.
          </p>
        </div>
      </section>
    </>
  );
}
