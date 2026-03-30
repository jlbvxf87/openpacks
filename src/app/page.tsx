import Link from "next/link";
import { deals } from "@/lib/deals";
import DealCard from "@/components/DealCard";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 text-center w-full">
          <div
            className="inline-block text-xs px-3 py-1.5 rounded-full mb-6 font-medium"
            style={{
              backgroundColor: "rgba(59,94,235,0.08)",
              color: "#3b5eeb",
              border: "1px solid rgba(59,94,235,0.2)",
            }}
          >
            ⚡ Deal 1 is live — AWA Installs
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6" style={{ color: "#0f1b3d" }}>
            Back the builders.{" "}
            <span style={{ color: "#3b5eeb" }}>Own the upside.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: "#6b7280" }}>
            Not a fund. Deal-by-deal participation in real AI systems being
            built right now. Pick a project, pick a tier, get revenue share.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#deals"
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all min-h-[44px] flex items-center justify-center"
              style={{ backgroundColor: "#0f1b3d", color: "white" }}
            >
              Browse Deals →
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all min-h-[44px] flex items-center justify-center"
              style={{
                backgroundColor: "transparent",
                color: "#0f1b3d",
                border: "1.5px solid #0f1b3d",
              }}
            >
              How it works
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-4 rounded-2xl"
            style={{ backgroundColor: "#f8f9fa", border: "1px solid #e8ecf4" }}
          >
            <span className="text-sm font-semibold" style={{ color: "#0f1b3d" }}>
              4 Active Projects
            </span>
            <span className="hidden sm:block w-px h-4" style={{ backgroundColor: "#e8ecf4" }} />
            <span className="text-sm font-semibold" style={{ color: "#0f1b3d" }}>
              $60K Total Raise
            </span>
            <span className="hidden sm:block w-px h-4" style={{ backgroundColor: "#e8ecf4" }} />
            <span className="text-sm font-semibold" style={{ color: "#0f1b3d" }}>
              3 Tiers Per Deal
            </span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: "#f8f9fa" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#0f1b3d" }}>How it works</h2>
            <p style={{ color: "#6b7280" }}>Simple. Transparent. No middlemen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Browse Deals",
                desc: "Each deal is a real product being built — AI infrastructure, consumer apps, or automation systems. Read the breakdown, understand the business.",
              },
              {
                step: "2",
                title: "Pick Your Tier",
                desc: "Supporter ($100), Backer ($1K), or Operator ($5K). Each tier has different upside. Limited spots at the top tiers.",
              },
              {
                step: "3",
                title: "Sign & Fund",
                desc: "Sign a Revenue Share Agreement electronically. Pay via Stripe. Get monthly payouts when the product generates revenue.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl p-8 bg-white"
                style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 8px rgba(15,27,61,0.04)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black mb-5"
                  style={{ backgroundColor: "#0f1b3d", color: "white" }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0f1b3d" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Deals */}
      <section id="deals" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: "#0f1b3d" }}>Active Deals</h2>
            <p style={{ color: "#6b7280" }}>
              {deals.filter((d) => d.status === "open").length} open now ·{" "}
              {deals.filter((d) => d.status === "coming-soon").length} coming soon
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals.map((deal) => (
            <DealCard key={deal.slug} deal={deal} />
          ))}
        </div>
      </section>

      {/* About Jaron */}
      <section
        className="border-t border-b"
        style={{ borderColor: "#e8ecf4", backgroundColor: "#f8f9fa" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
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
              <h2 className="text-3xl font-bold mt-4 mb-4" style={{ color: "#0f1b3d" }}>
                Built by an operator, not a theorist.
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                I&apos;m Jaron Baston. I build AI systems that generate real revenue — not
                demos, not pitches. Every deal on this platform is something I&apos;m
                actively building and selling.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                OpenPacks is how I give the people around me a way to participate
                in the upside. No funds, no VCs, no 10-year lockup. You back a
                specific product, you get a specific percentage, and you get paid
                when it works.
              </p>
              <p className="leading-relaxed" style={{ color: "#6b7280" }}>
                If it doesn&apos;t work, you know that too. I believe in showing the
                work — and letting real people own a piece of it.
              </p>
              <Link
                href="/about"
                className="inline-block mt-6 text-sm font-semibold"
                style={{ color: "#3b5eeb" }}
              >
                Full story →
              </Link>
            </div>
            <div
              className="rounded-2xl p-8 bg-white"
              style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 8px rgba(15,27,61,0.04)" }}
            >
              <div className="space-y-4">
                {[
                  { label: "Deals active", value: "1" },
                  { label: "Total raise target", value: "$60,000" },
                  { label: "Rev share model", value: "Deal-by-deal" },
                  { label: "Payment cap", value: "2x your investment" },
                  { label: "Term", value: "12 months from first revenue" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex justify-between items-center py-3 border-b"
                    style={{ borderColor: "#e8ecf4" }}
                  >
                    <span className="text-sm" style={{ color: "#6b7280" }}>{stat.label}</span>
                    <span className="text-sm font-semibold" style={{ color: "#0f1b3d" }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0f1b3d" }}>
          Ready to get in?
        </h2>
        <p className="mb-8 max-w-lg mx-auto" style={{ color: "#6b7280" }}>
          Spots at the Operator tier are limited. The first deal is live now.
        </p>
        <Link
          href="/deal/awa-installs"
          className="inline-block px-10 py-4 rounded-xl text-base font-semibold min-h-[44px]"
          style={{ backgroundColor: "#0f1b3d", color: "white" }}
        >
          View AWA Installs →
        </Link>
      </section>
    </div>
  );
}
