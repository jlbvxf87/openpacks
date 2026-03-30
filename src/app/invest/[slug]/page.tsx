"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getDeal } from "@/lib/deals";
import { generateRSA } from "@/lib/rsa";
import { notFound } from "next/navigation";

export default function InvestPage({ params }: { params: { slug: string } }) {
  const deal = getDeal(params.slug);
  if (!deal) notFound();

  const searchParams = useSearchParams();
  const tierName = searchParams.get("tier") || deal.tiers[0]?.name;
  const tier = deal.tiers.find((t) => t.name === tierName) || deal.tiers[0];

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const rsaText =
    name && tier.revShare
      ? generateRSA({
          backerName: name,
          dealName: deal.name,
          amount: tier.price,
          revShare: tier.revShare || "N/A",
          cap: tier.cap || "N/A",
          term: tier.term || "N/A",
          date: new Date().toLocaleDateString(),
        })
      : null;

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dealSlug: deal!.slug,
          tierName: tier.name,
          backerName: name,
          backerEmail: email,
        }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setLoading(false);
    }
  }

  return (
    <div className="pt-16 min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "#6b7280" }}>
          <Link href={`/deal/${deal.slug}`} className="hover:underline">
            {deal.name}
          </Link>
          <span>›</span>
          <span style={{ color: "#0f1b3d", fontWeight: 600 }}>Invest</span>
        </div>

        <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#0f1b3d" }}>
          {tier.name} — ${tier.price.toLocaleString()}
        </h1>
        <p className="mb-8" style={{ color: "#6b7280" }}>{tier.perks}</p>

        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-10">
          {[
            { n: 1, label: "Your Info" },
            { n: 2, label: "Review RSA" },
            { n: 3, label: "Pay" },
          ].map(({ n, label }) => (
            <div key={n} className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  backgroundColor: step >= n ? "#0f1b3d" : "#e8ecf4",
                  color: step >= n ? "white" : "#6b7280",
                }}
              >
                {n}
              </div>
              <span
                className="text-xs font-medium hidden sm:block"
                style={{ color: step >= n ? "#0f1b3d" : "#6b7280" }}
              >
                {label}
              </span>
              {n < 3 && (
                <div
                  className="w-8 h-px mx-1"
                  style={{ backgroundColor: step > n ? "#0f1b3d" : "#e8ecf4" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0f1b3d" }}>
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your legal name"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  border: "1.5px solid #e8ecf4",
                  backgroundColor: "#ffffff",
                  color: "#0f1b3d",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#0f1b3d")}
                onBlur={(e) => (e.target.style.borderColor = "#e8ecf4")}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0f1b3d" }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  border: "1.5px solid #e8ecf4",
                  backgroundColor: "#ffffff",
                  color: "#0f1b3d",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#0f1b3d")}
                onBlur={(e) => (e.target.style.borderColor = "#e8ecf4")}
              />
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={!name || !email}
              className="w-full py-4 rounded-xl text-sm font-semibold transition-all min-h-[44px]"
              style={{
                backgroundColor: name && email ? "#0f1b3d" : "#e8ecf4",
                color: name && email ? "white" : "#9ca3af",
                cursor: name && email ? "pointer" : "not-allowed",
              }}
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-6">
            {rsaText ? (
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #e8ecf4" }}
              >
                <h3 className="text-sm font-bold mb-3" style={{ color: "#0f1b3d" }}>
                  Revenue Share Agreement
                </h3>
                <pre
                  className="text-xs leading-relaxed whitespace-pre-wrap"
                  style={{ color: "#374151", fontFamily: "monospace" }}
                >
                  {rsaText}
                </pre>
              </div>
            ) : (
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #e8ecf4" }}
              >
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  Supporter tier does not include a revenue share agreement.
                  Your contribution supports the project directly.
                </p>
              </div>
            )}

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded"
                style={{ accentColor: "#0f1b3d" }}
              />
              <span className="text-sm" style={{ color: "#6b7280" }}>
                I understand this is a high-risk investment. Revenue is not guaranteed. I am not investing more than I can afford to lose.
              </span>
            </label>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-4 rounded-xl text-sm font-semibold min-h-[44px]"
                style={{
                  backgroundColor: "transparent",
                  color: "#0f1b3d",
                  border: "1.5px solid #e8ecf4",
                }}
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!agreed}
                className="flex-1 py-4 rounded-xl text-sm font-semibold transition-all min-h-[44px]"
                style={{
                  backgroundColor: agreed ? "#0f1b3d" : "#e8ecf4",
                  color: agreed ? "white" : "#9ca3af",
                  cursor: agreed ? "pointer" : "not-allowed",
                }}
              >
                I Agree →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#f8f9fa", border: "1px solid #e8ecf4" }}
            >
              <h3 className="text-sm font-bold mb-4" style={{ color: "#0f1b3d" }}>
                Order Summary
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Deal", value: deal.name },
                  { label: "Tier", value: tier.name },
                  { label: "Name", value: name },
                  { label: "Email", value: email },
                  { label: "Amount", value: `$${tier.price.toLocaleString()}` },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between text-sm border-b pb-2"
                    style={{ borderColor: "#e8ecf4" }}
                  >
                    <span style={{ color: "#6b7280" }}>{label}</span>
                    <span className="font-medium" style={{ color: "#0f1b3d" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-4 rounded-xl text-sm font-semibold min-h-[44px]"
                style={{
                  backgroundColor: "transparent",
                  color: "#0f1b3d",
                  border: "1.5px solid #e8ecf4",
                }}
              >
                ← Back
              </button>
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="flex-1 py-4 rounded-xl text-sm font-semibold transition-all min-h-[44px]"
                style={{
                  backgroundColor: "#0f1b3d",
                  color: "white",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Redirecting..." : `Sign & Pay $${tier.price.toLocaleString()} →`}
              </button>
            </div>

            <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
              Powered by Stripe. Your payment is secure.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
