import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { deals, getDeal } from "@/lib/deals";
import CapitalBreakdown from "@/components/CapitalBreakdown";
import CountdownTimer from "@/components/CountdownTimer";
import SocialProofTicker from "@/components/SocialProofTicker";

export async function generateStaticParams() {
  return deals.map((d) => ({ slug: d.slug }));
}

const PROJECT_COLORS: Record<string, { bg: string; icon: string; logo?: string; faqs: { q: string; a: string }[] }> = {
  "awa-installs": {
    bg: "linear-gradient(135deg, #0f1b3d 0%, #1e3a6e 100%)",
    icon: "🤖",
    logo: "/logos/awa.png",
    faqs: [
      {
        q: "What exactly is AWA Installs?",
        a: "AWA Installs is a done-for-you AI workforce installation. We set up 6 autonomous agents inside your business — they handle leads, outreach, follow-up, and customer communication 24/7. You get the whole system installed and trained on your offer within 7 days.",
      },
      {
        q: "When do I start getting paid?",
        a: "Revenue share payments begin monthly once the product reaches its first revenue event. You'll receive a monthly breakdown of revenue generated and your corresponding payout based on your tier percentage.",
      },
      {
        q: "What happens if it doesn't work out?",
        a: "Your investment is at risk — this is a high-risk, early-stage product. If the product doesn't generate revenue, there are no payouts. But I believe in showing the work, so you'll always know the real status.",
      },
    ],
  },
  "feedr": {
    bg: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    icon: "🎬",
    logo: "/logos/feedr.png",
    faqs: [
      {
        q: "What is FEEDR?",
        a: "FEEDR is an autonomous text-to-video pipeline. You type a prompt, and the system handles scripting, visuals, pacing, and platform optimization automatically. Built for creators who want high output volume without sacrificing quality.",
      },
      {
        q: "When does this deal open?",
        a: "FEEDR is currently in development. Join the waitlist and you'll be notified the moment it goes live. Early backers at the Operator tier get priority access.",
      },
      {
        q: "What platforms does it target?",
        a: "FEEDR is optimized for TikTok, Instagram Reels, and YouTube Shorts. The engine learns what performs on each platform and adapts output accordingly.",
      },
    ],
  },
  "clipfit": {
    bg: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
    icon: "👗",
    logo: "/logos/clipfit.png",
    faqs: [
      {
        q: "What is ClipFit?",
        a: "ClipFit is a swipe-based fashion feedback app. You rate outfits, get style insights, and discover what works for you. The recommendation engine learns your taste through every interaction.",
      },
      {
        q: "When does this deal open?",
        a: "ClipFit is coming soon. Sign up to be notified when the deal goes live — Operator spots are limited.",
      },
      {
        q: "How is this different from Pinterest or Instagram?",
        a: "ClipFit is built around feedback loops, not content consumption. The more you interact, the smarter your personal style profile gets. It's a tool, not a feed.",
      },
    ],
  },
  "chipshot-creator": {
    bg: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
    icon: "⛳",
    faqs: [
      {
        q: "What is ChipShot Creator?",
        a: "ChipShot Creator is a native iOS app for golfers who want to create pro-level content. Film shots at 60fps, run them through a 7-step shot tracer pipeline, add overlays and scorecards, and export directly to TikTok, Instagram Reels, or YouTube Shorts.",
      },
      {
        q: "Do I need any technical knowledge?",
        a: "None. The app runs on SwiftUI on iOS 17+ and handles everything from ball tracking via Apple Vision + CoreML to Metal-rendered tracer paths. Point and shoot — ChipShot does the rest.",
      },
      {
        q: "When does this deal open?",
        a: "ChipShot Creator is coming soon. Limited Operator spots will be available — get on the list to be first.",
      },
    ],
  },
};

// Hardcoded backer counts
const BACKERS: Record<string, number> = {
  "awa-installs": 7,
};

export default function DealPage({ params }: { params: { slug: string } }) {
  const deal = getDeal(params.slug);
  if (!deal) notFound();

  const pct = Math.min((deal.raised / deal.raise) * 100, 100);
  const isOpen = deal.status === "open";
  const barColor = pct > 80 ? "#ef4444" : isOpen ? "#10b981" : "#d1d5db";
  const colors = PROJECT_COLORS[deal.slug] ?? {
    bg: "linear-gradient(135deg, #374151 0%, #6b7280 100%)",
    icon: "📦",
    faqs: [],
  };
  const backers = BACKERS[deal.slug] ?? 0;

  return (
    <div className="pt-16 min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero gradient banner */}
      <div
        className="h-48 md:h-64 flex items-center justify-center relative"
        style={{ background: colors.bg }}
      >
        <div className="text-center flex flex-col items-center gap-3">
          {/* Logo or icon */}
          {colors.logo ? (
            <div className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center bg-white/10 mb-1">
              <Image
                src={colors.logo}
                alt={`${deal.name} logo`}
                width={72}
                height={72}
                className="object-contain"
              />
            </div>
          ) : (
            <div className="text-6xl mb-1">{colors.icon}</div>
          )}

          <div className="flex items-center gap-3 justify-center flex-wrap">
            <span
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {deal.category}
            </span>
            <span
              className="text-xs px-3 py-1 rounded-full font-semibold"
              style={
                isOpen
                  ? {
                      backgroundColor: "rgba(16,185,129,0.2)",
                      color: "#10b981",
                      border: "1px solid rgba(16,185,129,0.4)",
                    }
                  : {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }
              }
            >
              {isOpen ? "● Live Now" : "Coming Soon"}
            </span>

            {/* Countdown timer */}
            <CountdownTimer status={deal.status} />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "#6b7280" }}>
          <Link href="/" className="hover:underline" style={{ color: "#6b7280" }}>Home</Link>
          <span>›</span>
          <Link href="/#deals" className="hover:underline" style={{ color: "#6b7280" }}>Deals</Link>
          <span>›</span>
          <span style={{ color: "#0f1b3d", fontWeight: 600 }}>{deal.name}</span>
        </div>

        {/* Social proof ticker */}
        <div className="mb-8">
          <SocialProofTicker slug={deal.slug} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Deal info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-extrabold mb-3" style={{ color: "#0f1b3d" }}>
                {deal.name}
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "#6b7280" }}>
                {deal.description}
              </p>
            </div>

            {/* Campaign progress — GoFundMe style */}
            <div
              className="rounded-2xl p-6 bg-white"
              style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <div className="grid grid-cols-3 gap-4 mb-5">
                <div>
                  <div className="text-3xl font-extrabold" style={{ color: "#0f1b3d" }}>
                    ${deal.raised.toLocaleString()}
                  </div>
                  <div className="text-xs mt-0.5 font-medium" style={{ color: "#6b7280" }}>raised</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold" style={{ color: "#0f1b3d" }}>
                    {backers}
                  </div>
                  <div className="text-xs mt-0.5 font-medium" style={{ color: "#6b7280" }}>backers</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold" style={{ color: "#0f1b3d" }}>
                    ${deal.raise.toLocaleString()}
                  </div>
                  <div className="text-xs mt-0.5 font-medium" style={{ color: "#6b7280" }}>goal</div>
                </div>
              </div>
              <div
                className="h-3 rounded-full overflow-hidden mb-2"
                style={{ backgroundColor: "#e8ecf4" }}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: barColor,
                  }}
                />
              </div>
              <div className="text-sm font-semibold" style={{ color: pct > 80 ? "#ef4444" : "#10b981" }}>
                {pct.toFixed(0)}% funded
              </div>
            </div>

            {/* Capital Breakdown */}
            <CapitalBreakdown slug={deal.slug} />

            {/* What you're backing */}
            <div
              className="rounded-2xl p-6 space-y-4 bg-white"
              style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <h2 className="text-lg font-bold" style={{ color: "#0f1b3d" }}>
                What you&apos;re backing
              </h2>
              <ul className="space-y-3">
                {[
                  "Real product — actively being built and sold",
                  "Revenue share paid monthly when the product earns",
                  "Cap at 2x your investment — then payments stop",
                  "12-month term from first revenue event",
                  "RSA signed electronically before payment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#6b7280" }}>
                    <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ section */}
            {colors.faqs.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold" style={{ color: "#0f1b3d" }}>FAQ</h2>
                {colors.faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-2xl p-6 bg-white"
                    style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                  >
                    <h3 className="font-bold mb-2" style={{ color: "#0f1b3d" }}>{faq.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Tiers */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold mb-2" style={{ color: "#0f1b3d" }}>Choose your tier</h2>
            {deal.tiers.map((tier) => {
              const spotsLeft = tier.spotsRemaining;
              const soldOut = spotsLeft !== null && spotsLeft === 0;
              const filledPct = tier.spots !== null && spotsLeft !== null
                ? ((tier.spots - spotsLeft) / tier.spots) * 100
                : 0;
              const tierBarColor = filledPct > 80 ? "#ef4444" : "#3b5eeb";

              const isOperatorLow = tier.name === "Operator" && spotsLeft !== null && spotsLeft <= 2 && spotsLeft > 0;
              const isBackerLow = tier.name === "Backer" && spotsLeft !== null && spotsLeft <= 5 && spotsLeft > 0;

              return (
                <div
                  key={tier.name}
                  className="rounded-2xl p-5 bg-white"
                  style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg" style={{ color: "#0f1b3d" }}>{tier.name}</h3>
                    <span className="text-xl font-extrabold" style={{ color: "#0f1b3d" }}>
                      ${tier.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: "#6b7280" }}>{tier.perks}</p>

                  {/* Urgency badges */}
                  {isOperatorLow && (
                    <div className="mb-2">
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-semibold"
                        style={{ backgroundColor: "rgba(239,68,68,0.1)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)" }}
                      >
                        🔥 Only {spotsLeft} left
                      </span>
                    </div>
                  )}
                  {isBackerLow && (
                    <div className="mb-2">
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-semibold"
                        style={{ backgroundColor: "rgba(245,158,11,0.1)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.2)" }}
                      >
                        ⚡ Limited spots
                      </span>
                    </div>
                  )}

                  {spotsLeft !== null && (
                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1" style={{ color: "#6b7280" }}>
                        <span>{soldOut ? "Sold out" : `${spotsLeft} of ${tier.spots} spots left`}</span>
                        {!soldOut && spotsLeft !== null && tier.spots !== null && filledPct > 80 && (
                          <span style={{ color: "#ef4444" }}>Almost gone</span>
                        )}
                      </div>
                      {tier.spots !== null && (
                        <div
                          className="h-1.5 rounded-full overflow-hidden"
                          style={{ backgroundColor: "#e8ecf4" }}
                        >
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${filledPct}%`,
                              backgroundColor: tierBarColor,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {isOpen && !soldOut ? (
                    <Link
                      href={`/invest/${deal.slug}?tier=${tier.name}`}
                      className="block text-center py-3 rounded-xl text-sm font-bold transition-all min-h-[44px] flex items-center justify-center"
                      style={{ backgroundColor: "#0f1b3d", color: "white" }}
                    >
                      Back at ${tier.price.toLocaleString()} →
                    </Link>
                  ) : (
                    <div
                      className="block text-center py-3 rounded-xl text-sm font-semibold min-h-[44px] flex items-center justify-center"
                      style={{
                        backgroundColor: "#f3f4f6",
                        color: "#9ca3af",
                      }}
                    >
                      {soldOut ? "Sold Out" : "Not Open Yet"}
                    </div>
                  )}
                </div>
              );
            })}

            <p className="text-xs leading-relaxed pt-2" style={{ color: "#9ca3af" }}>
              High-risk investment. Not a registered security. Revenue share is not
              guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
