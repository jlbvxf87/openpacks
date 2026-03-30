"use client";
import Link from "next/link";
import Image from "next/image";
import { Deal } from "@/lib/deals";

const PROJECT_COLORS: Record<string, { bg: string; accent: string; icon: string; logo?: string }> = {
  "awa-installs": { bg: "linear-gradient(135deg, #0f1b3d 0%, #1e3a6e 100%)", accent: "#3b5eeb", icon: "🤖", logo: "/logos/awa.png" },
  "feedr": { bg: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)", accent: "#a855f7", icon: "🎬", logo: "/logos/feedr.png" },
  "clipfit": { bg: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)", accent: "#06b6d4", icon: "👗", logo: "/logos/clipfit.png" },
  "chipshot-creator": { bg: "linear-gradient(135deg, #065f46 0%, #10b981 100%)", accent: "#10b981", icon: "⛳" },
};

function UrgencyBadges({ deal }: { deal: Deal }) {
  const badges: React.ReactNode[] = [];

  for (const tier of deal.tiers) {
    if (tier.name === "Operator" && tier.spotsRemaining !== null && tier.spotsRemaining <= 2 && tier.spotsRemaining > 0) {
      badges.push(
        <span
          key="operator-low"
          className="text-xs px-2.5 py-1 rounded-full font-semibold"
          style={{ backgroundColor: "rgba(239,68,68,0.1)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)" }}
        >
          🔥 Only {tier.spotsRemaining} left
        </span>
      );
    }
    if (tier.name === "Backer" && tier.spotsRemaining !== null && tier.spotsRemaining <= 5 && tier.spotsRemaining > 0) {
      badges.push(
        <span
          key="backer-low"
          className="text-xs px-2.5 py-1 rounded-full font-semibold"
          style={{ backgroundColor: "rgba(245,158,11,0.1)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.2)" }}
        >
          ⚡ Limited spots
        </span>
      );
    }
  }

  return badges.length > 0 ? <div className="flex gap-2 flex-wrap">{badges}</div> : null;
}

export default function DealCard({ deal }: { deal: Deal }) {
  const pct = Math.min((deal.raised / deal.raise) * 100, 100);
  const isOpen = deal.status === "open";
  const colors = PROJECT_COLORS[deal.slug] ?? { bg: "linear-gradient(135deg, #374151 0%, #6b7280 100%)", accent: "#6b7280", icon: "📦" };
  const barColor = pct > 80 ? "#ef4444" : isOpen ? "#10b981" : "#d1d5db";

  // Hardcoded backer counts
  const backers = deal.slug === "awa-installs" ? 7 : 0;

  return (
    <div
      className="rounded-2xl flex flex-col overflow-hidden bg-white"
      style={{
        border: "1px solid #e8ecf4",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseOver={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Project hero banner */}
      <div
        className="h-24 flex items-center justify-center relative"
        style={{ background: colors.bg }}
      >
        {colors.logo ? (
          <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center bg-white/10">
            <Image
              src={colors.logo}
              alt={`${deal.name} logo`}
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        ) : colors.icon === "⛳" ? (
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-extrabold"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", color: "white" }}
          >
            ⛳
          </div>
        ) : (
          <span className="text-4xl">{colors.icon}</span>
        )}
        <div className="absolute top-3 right-3">
          <span
            className="text-xs px-2.5 py-1 rounded-full font-semibold"
            style={
              isOpen
                ? {
                    backgroundColor: "rgba(16,185,129,0.15)",
                    color: "#10b981",
                    border: "1px solid rgba(16,185,129,0.3)",
                    backdropFilter: "blur(4px)",
                  }
                : {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(4px)",
                  }
            }
          >
            {isOpen ? "● Live" : "Coming Soon"}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Name + category */}
        <div>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              backgroundColor: "rgba(59,94,235,0.08)",
              color: "#3b5eeb",
              border: "1px solid rgba(59,94,235,0.2)",
            }}
          >
            {deal.category}
          </span>
          <h3 className="text-xl font-bold mt-2" style={{ color: "#0f1b3d" }}>{deal.name}</h3>
          <p className="text-sm mt-1 leading-relaxed" style={{ color: "#6b7280" }}>
            {deal.tagline}
          </p>
        </div>

        {/* Urgency badges */}
        <UrgencyBadges deal={deal} />

        {/* Progress bar — GoFundMe style */}
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-2xl font-extrabold" style={{ color: "#0f1b3d" }}>
              ${deal.raised.toLocaleString()}
            </span>
            <span className="text-sm" style={{ color: "#6b7280" }}>
              of ${deal.raise.toLocaleString()} goal
            </span>
          </div>
          <div
            className="h-2.5 rounded-full overflow-hidden"
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
          <div className="flex items-center gap-3 mt-2">
            <span className="text-sm font-semibold" style={{ color: "#10b981" }}>
              {backers > 0 ? `${backers} backers` : "Be the first backer"}
            </span>
            {backers > 0 && (
              <>
                <span style={{ color: "#e8ecf4" }}>·</span>
                <span className="text-sm" style={{ color: "#6b7280" }}>
                  {pct.toFixed(0)}% funded
                </span>
              </>
            )}
          </div>
        </div>

        {/* Tier pills */}
        <div className="flex gap-2 flex-wrap">
          {deal.tiers.map((tier) => (
            <span
              key={tier.name}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                backgroundColor: "#f8f9fa",
                color: "#374151",
                border: "1px solid #e8ecf4",
              }}
            >
              {tier.name} · ${tier.price.toLocaleString()}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/deal/${deal.slug}`}
          className="mt-auto block text-center py-3.5 rounded-xl text-sm font-bold transition-all min-h-[44px] flex items-center justify-center"
          style={
            isOpen
              ? {
                  backgroundColor: "#0f1b3d",
                  color: "white",
                }
              : {
                  backgroundColor: "#f3f4f6",
                  color: "#9ca3af",
                  pointerEvents: "none",
                }
          }
        >
          {isOpen ? "Back This Project →" : "Coming Soon"}
        </Link>
      </div>
    </div>
  );
}
