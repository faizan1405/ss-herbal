import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — SS Herbal" }] }),
  component: Checkout,
});

const STEPS = ["Information", "Shipping", "Payment"] as const;

function Checkout() {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-gradient-hero pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal as="h1" className="text-center font-display text-5xl">Checkout</Reveal>

        <div className="mt-12 flex items-center justify-between">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-1 items-center">
              <div className={`grid h-10 w-10 place-items-center rounded-full text-sm font-medium transition-all ${
                i <= step ? "bg-gradient-primary text-white shadow-soft" : "bg-white border border-border text-muted-foreground"
              }`}>
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span className={`ml-3 text-sm font-medium ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
              {i < STEPS.length - 1 && (
                <div className={`mx-4 h-px flex-1 transition-colors ${i < step ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl glass-panel p-8 shadow-card">
          {step === 0 && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl">Contact Information</h2>
              <input className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm" placeholder="Email" />
              <input className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm" placeholder="Phone" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-border bg-white px-4 py-3 text-sm" placeholder="First name" />
                <input className="rounded-2xl border border-border bg-white px-4 py-3 text-sm" placeholder="Last name" />
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl">Shipping Address</h2>
              <input className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm" placeholder="Street address" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-border bg-white px-4 py-3 text-sm" placeholder="City" />
                <input className="rounded-2xl border border-border bg-white px-4 py-3 text-sm" placeholder="PIN code" />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl">Payment Method</h2>
              {["UPI", "Credit / Debit Card", "Net Banking", "Cash on Delivery"].map((m) => (
                <label key={m} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-white p-4 hover:border-primary transition-colors">
                  <input type="radio" name="pay" className="accent-primary" defaultChecked={m === "UPI"} />
                  <span className="font-medium">{m}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="rounded-full border border-border bg-white px-6 py-3 text-sm font-medium disabled:opacity-40"
          >
            Back
          </button>
          <button
            onClick={() => setStep(Math.min(STEPS.length - 1, step + 1))}
            className="rounded-full bg-gradient-primary px-8 py-3 text-sm font-medium text-white btn-magnetic"
          >
            {step === STEPS.length - 1 ? "Place Order" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
