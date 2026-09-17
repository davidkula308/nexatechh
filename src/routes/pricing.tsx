import { createFileRoute, Link } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages | NexaTech Solutions" },
      {
        name: "description",
        content:
          "Transparent pricing for software installation, complete laptop setup, student CAD packages, gaming setup and digital services in Kenya.",
      },
      { property: "og:title", content: "Pricing & Packages | NexaTech Solutions" },
      {
        property: "og:description",
        content: "Clear service rates and bundles — installation, setup, student packages and more.",
      },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Single Software Install",
    price: "KSh 800",
    note: "per title",
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
    price: "KSh 3,500",
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
    price: "from KSh 1,800",
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

const rates = [
  ["CAD & engineering software (per title)", "KSh 1,000 – 2,500"],
  ["Windows installation / formatting", "KSh 1,500"],
  ["Virus & malware removal", "KSh 1,200"],
  ["Gaming PC setup package", "KSh 3,000"],
  ["CAD drafting (per drawing)", "from KSh 1,500"],
  ["A1 plotting (per sheet)", "from KSh 250"],
  ["CV or portfolio design", "from KSh 1,500"],
  ["Website development", "from KSh 25,000"],
];

function Pricing() {
  return (
    <>
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="eyebrow mb-4 flex items-center gap-2 text-electric">
            <span className="size-1.5 rounded-full bg-signal" /> Pricing
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
            Clear prices, quoted before we start
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy/70">
            Service fees below cover our work. Where a paid licence is required, the licence cost is
            quoted separately and paid to the vendor.
          </p>
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
                <div className={`font-display text-3xl font-bold ${t.featured ? "" : "text-ink"}`}>
                  {t.price}
                </div>
                <ul
                  className={`mt-5 flex-1 space-y-2 text-sm ${
                    t.featured ? "text-mist/70" : "text-navy/70"
                  }`}
                >
                  {t.items.map((i) => (
                    <li key={i}>· {i}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-6 rounded-lg px-5 py-3 text-center font-semibold transition ${
                    t.featured
                      ? "bg-signal text-ink hover:brightness-105"
                      : "bg-electric text-primary-foreground hover:brightness-110"
                  }`}
                >
                  Request this
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-2xl border border-navy/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-mist text-ink">
                <tr>
                  <th className="px-5 py-3 font-semibold">Service</th>
                  <th className="px-5 py-3 font-semibold">Indicative fee</th>
                </tr>
              </thead>
              <tbody className="text-navy/70">
                {rates.map(([service, price]) => (
                  <tr key={service} className="border-t border-navy/10">
                    <td className="px-5 py-3">{service}</td>
                    <td className="px-5 py-3 font-mono text-xs">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 max-w-3xl font-mono text-xs leading-relaxed text-navy/50">
            Prices are indicative and confirmed after we hear what you need. Bulk, campus and business
            rates available.
          </p>

          <a
            href={whatsappLink("Hello NexaTech Solutions, I would like a quote for:")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3 font-semibold text-ink transition hover:brightness-105"
          >
            💬 Ask for a quote on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
