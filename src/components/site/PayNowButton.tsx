import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useNavigate } from "@tanstack/react-router";
import { loadBachs, type Bachs } from "@bachs/js";
import { createBachsCheckout } from "@/lib/payments.functions";

export function PayNowButton({ service, className }: { service: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const checkout = useServerFn(createBachsCheckout);
  const navigate = useNavigate();
  const bachsRef = useRef<Bachs | null>(null);

  // Load and initialize the Bachs overlay SDK once.
  useEffect(() => {
    let cancelled = false;
    loadBachs()
      .then((b) => {
        if (cancelled) return;
        bachsRef.current = b;
        b.Initialize({
          onEvent: (event) => {
            if (event.type === "checkout.completed") {
              navigate({ to: "/payment-success" });
            } else if (event.type === "checkout.failed") {
              setError("The payment didn't go through. Please try again or contact us on WhatsApp.");
            } else if (event.type === "checkout.error") {
              setError("Payment had a problem. Please try again shortly.");
            }
          },
        });
      })
      .catch(() => {
        // SDK failed to load — fall back to the hosted page on click.
      });
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  const pay = async (e: React.FormEvent) => {
    e.preventDefault();
    const n = Number(amount);
    if (!n || n <= 0) return setError("Enter the amount you were quoted.");
    setBusy(true);
    setError("");
    try {
      const r = await checkout({ data: { service, amount: n, email, origin: window.location.origin } });
      if ("url" in r && r.url) {
        if (bachsRef.current) {
          await bachsRef.current.Checkout.open({ checkoutUrl: r.url });
          setOpen(false);
        } else {
          // Overlay unavailable — fall back to Bachs' hosted page.
          window.location.href = r.url;
        }
      } else {
        setError(("error" in r && r.error) || "Something went wrong.");
      }
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
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <form
            onSubmit={pay}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md overflow-hidden rounded-2xl border border-mist/10 bg-ink text-mist shadow-2xl shadow-electric/10"
          >
            <div className="h-1 w-full bg-gradient-to-r from-electric via-signal to-electric" />
            <div className="p-6">
              <div className="eyebrow mb-2 flex items-center gap-2 text-electric">
                <span className="size-1.5 rounded-full bg-signal" /> Secure payment
              </div>
              <h3 className="font-display text-xl font-semibold">Pay for {service}</h3>
              <p className="mt-1 text-sm text-mist/55">
                Enter the amount we quoted you on WhatsApp, in US dollars.
              </p>
              <label className="mt-5 block text-sm font-medium text-mist/70">
                Amount (USD)
                <div className="relative mt-1">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-mist/40">$</span>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full rounded-lg border border-mist/15 bg-mist/5 py-2.5 pl-7 pr-3 text-mist placeholder:text-mist/30 focus:outline-none focus:ring-2 focus:ring-electric"
                  />
                </div>
              </label>
              <label className="mt-4 block text-sm font-medium text-mist/70">
                Email (for your receipt)
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-mist/15 bg-mist/5 px-3 py-2.5 text-mist placeholder:text-mist/30 focus:outline-none focus:ring-2 focus:ring-electric"
                />
              </label>
              {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}
              <div className="mt-6 flex gap-3">
                <button
                  type="submit"
                  disabled={busy}
                  className="flex-1 rounded-lg bg-electric px-5 py-3 font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60"
                >
                  {busy ? "Opening checkout…" : "Continue to payment"}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-mist/20 px-5 py-3 font-semibold text-mist/80 transition hover:bg-mist/10"
                >
                  Cancel
                </button>
              </div>
              <p className="mt-4 text-center font-mono text-[11px] text-mist/35">
                Powered by Bachs · Card, bank transfer & mobile money
              </p>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
