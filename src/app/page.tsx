import Link from "next/link";
import Image from "next/image";
import { deals } from "@/lib/deals";
import DealCard from "@/components/DealCard";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="flex items-center" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 text-center w-full">
          {/* Logo centered */}
          <div className="flex justify-center mb-8">
            <Image src="/logo.png" alt="OpenPacks" width={200} height={56} className="object-contain" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6" style={{ color: "#0f1b3d" }}>
            Fund the future.{" "}
            <span style={{ color: "#3b5eeb" }}>Own a piece of it.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: "#6b7280" }}>
            Real AI products being built right now. Back them early, share the upside.
          </p>
          <div className="flex justify-center mb-12">
            <Link
              href="#deals"
              className="px-10 py-4 rounded-xl text-base font-bold transition-all min-h-[44px] flex items-center justify-center"
              style={{ backgroundColor: "#0f1b3d", color: "white", fontSize: "1.05rem" }}
            >
              See Open Deals →
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-4 rounded-2xl"
            style={{ backgroundColor: "#f8f9fa", border: "1px solid #e8ecf4" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold" style={{ color: "#0f1b3d" }}>4</span>
              <span className="text-sm font-medium" style={{ color: "#6b7280" }}>Projects</span>
            </div>
            <span className="hidden sm:block w-px h-6" style={{ backgroundColor: "#e8ecf4" }} />
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold" style={{ color: "#0f1b3d" }}>$60K</span>
              <span className="text-sm font-medium" style={{ color: "#6b7280" }}>Being Raised</span>
            </div>
            <span className="hidden sm:block w-px h-6" style={{ backgroundColor: "#e8ecf4" }} />
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold" style={{ color: "#10b981" }}>23</span>
              <span className="text-sm font-medium" style={{ color: "#6b7280" }}>Backers So Far</span>
            </div>
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
            <h2 className="text-3xl font-bold mb-2" style={{ color: "#0f1b3d" }}>Open Deals</h2>
            <p style={{ color: "#6b7280" }}>
              {deals.filter((d) => d.status === "open").length} live now ·{" "}
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

      {/* Why OpenPacks — trust section */}
      <section
        className="border-t border-b"
        style={{ borderColor: "#e8ecf4", backgroundColor: "#f8f9fa" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <span
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{
                backgroundColor: "rgba(59,94,235,0.08)",
                color: "#3b5eeb",
                border: "1px solid rgba(59,94,235,0.2)",
              }}
            >
              The Operator
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3" style={{ color: "#0f1b3d" }}>
              Built by an operator, not a theorist.
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "#6b7280" }}>
              Every deal on this platform is something I&apos;m actively building and selling.
              No demos. No pitches. Real products generating real revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "💸",
                title: "Revenue share, not equity",
                desc: "You don't own a slice of the company. You own a slice of the revenue. You get paid when it works. You know when it doesn't.",
              },
              {
                icon: "📄",
                title: "Private agreements",
                desc: "No public fundraising, no SEC filings, no BS. Every backer signs a direct Revenue Share Agreement with Jaron Baston.",
              },
              {
                icon: "🔨",
                title: "Real products already being built",
                desc: "AWA Installs has paying customers. These aren't ideas — they're businesses in motion. You're backing a builder, not a dreamer.",
              },
            ].map((point) => (
              <div
                key={point.title}
                className="rounded-2xl p-8 bg-white text-center"
                style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0f1b3d" }}>{point.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{point.desc}</p>
              </div>
            ))}
          </div>

          {/* Jaron bio card */}
          <div
            className="rounded-2xl p-8 bg-white max-w-2xl mx-auto text-center"
            style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
              style={{ backgroundColor: "#f0f4ff", border: "2px solid #e8ecf4" }}
            >
              👨‍💻
            </div>
            <h3 className="text-xl font-bold mb-1" style={{ color: "#0f1b3d" }}>Jaron Baston</h3>
            <p className="text-sm font-medium mb-3" style={{ color: "#3b5eeb" }}>Operator · Builder · OpenPacks</p>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
              I build AI systems that generate real revenue — not demos, not pitches.
              OpenPacks is how I give the people around me a way to participate in the upside.
              No funds, no VCs, no 10-year lockup. You back a specific product, you get a
              specific percentage, and you get paid when it works.
            </p>
            <Link
              href="/about"
              className="inline-block mt-5 text-sm font-semibold"
              style={{ color: "#3b5eeb" }}
            >
              Full story →
            </Link>
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
          className="inline-block px-10 py-4 rounded-xl text-base font-bold min-h-[44px]"
          style={{ backgroundColor: "#0f1b3d", color: "white" }}
        >
          Back AWA Installs →
        </Link>
      </section>
    </div>
  );
}
