import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  service: z.string().trim().min(1).max(200),
  amount: z.number().positive().max(10_000_000),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  origin: z.string().url().max(300),
});

export const createBachsCheckout = createServerFn({ method: "POST" })
  .inputValidator((d) => schema.parse(d))
  .handler(async ({ data }) => {
    const key = process.env["BACHS_SECRET_KEY"];
    if (!key) return { error: "Payments are not configured yet." };
    const base = key.startsWith("sk_sandbox_") ? "https://sandbox-api.bachs.io" : "https://api.bachs.io";
    const body: Record<string, unknown> = {
      pricing: { currency: "KES", amount: data.amount.toFixed(2) },
      success_url: `${data.origin}/payment-success`,
      cancel_url: `${data.origin}/`,
      metadata: { service: data.service },
    };
    if (data.email) body["customer"] = { email: data.email };
    try {
      const res = await fetch(`${base}/v1/checkout-sessions`, {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = (await res.json().catch(() => ({}))) as { checkout_url?: string };
      if (!res.ok || !json.checkout_url) {
        console.error("Bachs checkout failed", res.status, JSON.stringify(json));
        return { error: "Could not start payment. Please try again or contact us on WhatsApp." };
      }
      return { url: json.checkout_url };
    } catch (e) {
      console.error("Bachs checkout error", e);
      return { error: "Payment service unavailable. Please try again shortly." };
    }
  });
