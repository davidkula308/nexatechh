import { enquiryLink, whatsappLink } from "@/lib/site";

export type ServiceGroup = {
  title: string;
  description?: string;
  items: string[];
  image?: string;
};

export type SampleItem = {
  name: string;
  detail: string;
  image: string;
};

export function CategoryPage({
  eyebrow,
  title,
  intro,
  groups,
  samples,
  samplesTitle,
  samplesIntro,
  note,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  groups: ServiceGroup[];
  samples?: SampleItem[];
  samplesTitle?: string;
  samplesIntro?: string;
  note?: string;
}) {
  return (
    <>
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="eyebrow mb-4 flex items-center gap-2 text-electric">
            <span className="size-1.5 rounded-full bg-signal" /> {eyebrow}
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy/70">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={enquiryLink(title)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-electric px-6 py-3 font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Request this service <span aria-hidden>→</span>
            </a>
            <a
              href={whatsappLink(
                `Hello NexaTech Solutions, I am requesting more information on this service: ${title}.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-navy/20 px-6 py-3 font-semibold text-ink transition hover:bg-navy/5"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group, i) => (
              <div
                key={group.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-mist/60"
              >
                {group.image ? (
                  <img
                    src={group.image}
                    alt={`${group.title} sample`}
                    loading="lazy"
                    width={992}
                    height={672}
                    className="aspect-[3/2] w-full object-cover"
                  />
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <div className="eyebrow mb-3 text-electric">{String(i + 1).padStart(2, "0")}</div>
                  <h2 className="mb-2 text-lg font-semibold text-ink">{group.title}</h2>
                  {group.description ? (
                    <p className="mb-4 text-sm leading-relaxed text-navy/60">{group.description}</p>
                  ) : null}
                  <ul className="flex-1 space-y-2 text-sm text-navy/70">
                    {group.items.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                  <a
                    href={enquiryLink(group.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 text-sm font-semibold text-electric hover:underline"
                  >
                    Request this on WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
          {note ? (
            <p className="mt-10 max-w-3xl font-mono text-xs leading-relaxed text-navy/50">{note}</p>
          ) : null}
        </div>
      </section>

      {samples && samples.length > 0 ? (
        <section className="bg-ink py-16 text-mist">
          <div className="mx-auto max-w-7xl px-6">
            <div className="eyebrow mb-2 text-mist/40">Samples</div>
            <h2 className="text-3xl font-semibold">{samplesTitle ?? "Sample work"}</h2>
            {samplesIntro ? (
              <p className="mt-3 max-w-2xl leading-relaxed text-mist/60">{samplesIntro}</p>
            ) : null}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {samples.map((sample) => (
                <a
                  key={sample.name}
                  href={enquiryLink(sample.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl border border-mist/10 bg-mist/[0.03] transition hover:border-electric/60"
                >
                  <img
                    src={sample.image}
                    alt={sample.name}
                    loading="lazy"
                    width={992}
                    height={672}
                    className="aspect-[3/2] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold">{sample.name}</h3>
                    <p className="mt-1 text-sm text-mist/55">{sample.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
