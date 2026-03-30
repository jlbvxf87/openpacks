import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <span
            className="text-xs px-2 py-1 rounded-full font-medium"
            style={{
              backgroundColor: "rgba(59,94,235,0.08)",
              color: "#3b5eeb",
              border: "1px solid rgba(59,94,235,0.2)",
            }}
          >
            The Operator
          </span>
          <h1 className="text-4xl font-extrabold mt-4 mb-4" style={{ color: "#0f1b3d" }}>
            Built by an operator, not a theorist.
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: "#6b7280" }}>
            OpenPacks is a deal-by-deal investment platform for the people building real AI systems.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "#374151" }}>
          <p>
            I&apos;m Jaron Baston. I build AI systems that generate real revenue — not demos, not pitches. Every deal on this platform is something I&apos;m actively building and selling.
          </p>
          <p>
            OpenPacks is how I give the people around me a way to participate in the upside. No funds, no VCs, no 10-year lockup. You back a specific product, you get a specific percentage, and you get paid when it works.
          </p>
          <p>
            If it doesn&apos;t work, you know that too. I believe in showing the work — and letting real people own a piece of it.
          </p>

          <div
            className="rounded-2xl p-8 mt-8"
            style={{ backgroundColor: "#f8f9fa", border: "1px solid #e8ecf4" }}
          >
            <h2 className="text-lg font-bold mb-4" style={{ color: "#0f1b3d" }}>How it works</h2>
            <ul className="space-y-3">
              {[
                "Each deal is a specific product — not a fund, not a portfolio.",
                "Revenue Share Agreements (RSAs) are signed electronically.",
                "Payouts happen monthly when the product generates revenue.",
                "Cap is 2x your investment — then payments stop automatically.",
                "12-month term from the first revenue event.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span style={{ color: "#3b5eeb", fontWeight: 700 }}>✓</span>
                  <span style={{ color: "#6b7280" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl p-6 border-l-4 mt-8"
            style={{ backgroundColor: "#f8f9fa", borderLeftColor: "#3b5eeb", border: "1px solid #e8ecf4", borderLeftWidth: "4px" }}
          >
            <p className="text-sm font-medium" style={{ color: "#0f1b3d" }}>
              ⚠️ Risk Disclosure
            </p>
            <p className="text-sm mt-2" style={{ color: "#6b7280" }}>
              OpenPacks deals are high-risk, early-stage investments. Revenue is not guaranteed. These are not registered securities. Only invest what you can afford to lose entirely.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/#deals"
            className="inline-block px-8 py-4 rounded-xl text-base font-semibold min-h-[44px]"
            style={{ backgroundColor: "#0f1b3d", color: "white" }}
          >
            Browse Active Deals →
          </Link>
        </div>
      </div>
    </div>
  );
}
