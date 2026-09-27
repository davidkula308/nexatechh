import { createFileRoute, Link } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/payment-success")({
  head: () => ({
    meta: [
      { title: "Payment received — NexaTech Solutions" },
      { name: "description", content: "Thank you for your payment to NexaTech Solutions." },
      { property: "og:title", content: "Payment received — NexaTech Solutions" },
      { property: "og:description", content: "Thank you for your payment to NexaTech Solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-ink">Thank you!</h1>
      <p className="mt-4 text-navy/70">Your payment is being confirmed. We'll get started on your service shortly.</p>
      <div className="mt-8 flex justify-center gap-3">
        <a
          href={whatsappLink("Hello NexaTech Solutions, I have just paid for a service.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-signal px-5 py-3 font-semibold text-ink"
        >
          💬 Tell us on WhatsApp
        </a>
        <Link to="/" className="rounded-lg border border-navy/20 px-5 py-3 font-semibold text-ink">
          Home
        </Link>
      </div>
    </section>
  ),
});
