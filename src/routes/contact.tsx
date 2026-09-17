import { createFileRoute } from "@tanstack/react-router";
import { ServiceRequest } from "@/components/site/ServiceRequest";
import { EMAIL, LOCATION, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Service Request | NexaTech Solutions" },
      {
        name: "description",
        content:
          "Request software installation, computer setup or digital services. Choose remote, physical or licensing assistance and reach us on WhatsApp.",
      },
      { property: "og:title", content: "Contact & Service Request" },
      {
        property: "og:description",
        content: "Tell us what you need and we confirm on WhatsApp — usually within the hour.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="eyebrow mb-4 flex items-center gap-2 text-electric">
            <span className="size-1.5 rounded-full bg-signal" /> Contact
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
            Tell us what you need installed
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy/70">
            Fill in the request below and it opens a ready-written WhatsApp message. We usually reply
            within the hour.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href={whatsappLink("Hello NexaTech Solutions, I would like to ask about your services.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-navy/10 bg-card p-5 transition hover:border-electric/60"
            >
              <div className="eyebrow mb-2 text-navy/50">WhatsApp</div>
              <div className="font-semibold text-ink">Chat with us</div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-2xl border border-navy/10 bg-card p-5 transition hover:border-electric/60"
            >
              <div className="eyebrow mb-2 text-navy/50">Email</div>
              <div className="font-semibold text-ink">{EMAIL}</div>
            </a>
            <div className="rounded-2xl border border-navy/10 bg-card p-5">
              <div className="eyebrow mb-2 text-navy/50">Workshop</div>
              <div className="font-semibold text-ink">{LOCATION}</div>
            </div>
          </div>
        </div>
      </section>
      <ServiceRequest />
    </>
  );
}
