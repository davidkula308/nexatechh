import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { createBachsCheckout } from "@/lib/payments.functions";

export function PayNowButton({ service, className }: { service: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const checkout = useServerFn(createBachsCheckout);

  const pay = async (e: React.FormEvent) => {
    e.preventDefault();
    const n = Number(amount);
    if (!n || n <= 0) return setError("Enter the amount you were quoted.");
    setBusy(true);
    setError("");
    try {
      const r = await checkout({ data: { service, amount: n, email, origin: window.location.origin } });
      if ("url" in r && r.url) window.location.href = r.url;
      else setError(("error" in r && r.error) || "Something went wrong.");
    } catch {
      setError("Please check your details and try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          "inline-flex items-center gap-2 rounded-lg bg-signal px-6 py-3 font-semibold text-ink transition hover:brightness-105"
        }
      >
        💳 Pay now
      </button>
      {open ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4" onClick={() => setOpen(false)}>
          <form
            onSubmit={pay}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-mist p-6 text-ink shadow-xl"
          >
            <h3 className="text-xl font-semibold">Pay for {service}</h3>
            <p className="mt-1 text-sm text-navy/60">Enter the amount we quoted you on WhatsApp.</p>
            <label className="mt-5 block text-sm font-medium text-navy/70">
              Amount (KES)
              <input
                type="number"
                min="1"
                step="1"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 w-full rounded-lg border border-navy/20 bg-card px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-electric"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-navy/70">
              Email (for your receipt)
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-navy/20 bg-card px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-electric"
              />
            </label>
            {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}
            <div className="mt-6 flex gap-3">
              <button
                type="submit"
                disabled={busy}
                className="flex-1 rounded-lg bg-electric px-5 py-3 font-semibold text-primary-foreground disabled:opacity-60"
              >
                {busy ? "Opening checkout…" : "Continue to payment"}
              </button>
              <button type="button" onClick={() => setOpen(false)} className="rounded-lg border border-navy/20 px-5 py-3">
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
