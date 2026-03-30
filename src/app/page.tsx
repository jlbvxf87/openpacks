import Link from "next/link";
import { deals } from "@/lib/deals";
import DealCard from "@/components/DealCard";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="hero-gradient min-h-[85vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <div
            className="inline-block text-xs px-3 py-1.5 rounded-full mb-6 font-medium"
            style={{
              backgroundColor: "rgba(245,166,35,0.1)",
              color: "#F5A623",
              border: "1px solid rgba(245,166,35,0.3)",
            }}
          >
            ⚡ Deal 1 is live — AWA Installs
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Back the builders.{" "}
            <span className="gradient-text">Own the upside.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Not a fund. Deal-by-deal participation in real AI systems being
            built right now. Pick a project, pick a tier, get revenue share.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#deals"
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all glow-blue"
              style={{ backgroundColor: "#3b5eeb", color: "white" }}
            >
              Browse Deals →
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all"
              style={{
                backgroundColor: "transparent",
                color: "#9090aa",
                border: "1px solid #2a2a3e",
              }}
            >
              Who&apos;s behind this?
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white mb-3">How it works</h2>
          <p className="text-gray-500">Simple. Transparent. No middlemen.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Browse Deals",
              desc: "Each deal is a real product being built — AI infrastructure, consumer apps, or automation systems. Read the breakdown, understand the business.",
            },
            {
              step: "02",
              title: "Pick Your Tier",
              desc: "Supporter ($100), Backer ($1K), or Operator ($5K). Each tier has different upside. Limited spots at the top tiers.",
            },
            {
              step: "03",
              title: "Sign & Fund",
              desc: "Sign a Revenue Share Agreement electronically. Pay via Stripe. Get monthly payouts when the product generates revenue.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "#12121a",
                border: "1px solid #1e1e2e",
              }}
            >
              <div
                className="text-4xl font-black mb-4 gradient-text"
                style={{ lineHeight: 1 }}
              >
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Deals */}
      <section id="deals" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Active Deals</h2>
            <p className="text-gray-500">
              {deals.filter((d) => d.status === "open").length} open now ·{" "}
              {deals.filter((d) => d.status === "coming-soon").length} coming soon
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {deals.map((deal) => (
            <DealCard key={deal.slug} deal={deal} />
          ))}
        </div>
      </section>

      {/* About Jaron */}
      <section
        className="border-t border-b"
        style={{ borderColor: "#1e1e2e" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="text-xs px-2 py-1 rounded-full font-medium"
                style={{
                  backgroundColor: "rgba(59,94,235,0.15)",
                  color: "#3b5eeb",
                  border: "1px solid rgba(59,94,235,0.3)",
                }}
              >
                The Operator
              </span>
              <h2 className="text-3xl font-bold text-white mt-4 mb-4">
                Built by an operator, not a theorist.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                I&apos;m Jaron Baston. I build AI systems that generate real revenue — not
                demos, not pitches. Every deal on this platform is something I&apos;m
                actively building and selling.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                OpenPacks is how I give the people around me a way to participate
                in the upside. No funds, no VCs, no 10-year lockup. You back a
                specific product, you get a specific percentage, and you get paid
                when it works.
              </p>
              <p className="text-gray-400 leading-relaxed">
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
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "#12121a",
                border: "1px solid #1e1e2e",
              }}
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
                    style={{ borderColor: "#1e1e2e" }}
                  >
                    <span className="text-sm text-gray-500">{stat.label}</span>
                    <span className="text-sm font-semibold text-white">
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
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to get in?
        </h2>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          Spots at the Operator tier are limited. The first deal is live now.
        </p>
        <Link
          href="/deal/awa-installs"
          className="inline-block px-10 py-4 rounded-xl text-base font-semibold glow-blue"
          style={{ backgroundColor: "#3b5eeb", color: "white" }}
        >
          View AWA Installs →
        </Link>
      </section>
    </div>
  );
}
