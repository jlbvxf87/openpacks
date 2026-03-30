import Link from "next/link";
import { Deal } from "@/lib/deals";

export default function DealCard({ deal }: { deal: Deal }) {
  const pct = Math.min((deal.raised / deal.raise) * 100, 100);
  const isOpen = deal.status === "open";

  return (
    <div
      className="card-hover rounded-2xl p-6 flex flex-col gap-4"
      style={{
        backgroundColor: "#12121a",
        border: "1px solid #1e1e2e",
        boxShadow: isOpen
          ? "0 0 30px rgba(59,94,235,0.08)"
          : "none",
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              backgroundColor: "rgba(59,94,235,0.15)",
              color: "#3b5eeb",
              border: "1px solid rgba(59,94,235,0.3)",
            }}
          >
            {deal.category}
          </span>
        </div>
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${
            isOpen
              ? "bg-green-900/40 text-green-400 border border-green-800"
              : "bg-gray-800/60 text-gray-400 border border-gray-700"
          }`}
        >
          {isOpen ? "● Open" : "Coming Soon"}
        </span>
      </div>

      {/* Name + tagline */}
      <div>
        <h3 className="text-xl font-bold text-white">{deal.name}</h3>
        <p className="text-sm text-gray-400 mt-1 leading-relaxed">
          {deal.tagline}
        </p>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs text-gray-500 mb-1.5">
          <span>${deal.raised.toLocaleString()} raised</span>
          <span>Goal: ${deal.raise.toLocaleString()}</span>
        </div>
        <div
          className="h-1.5 rounded-full overflow-hidden"
          style={{ backgroundColor: "#1e1e2e" }}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${pct}%`,
              backgroundColor: isOpen ? "#3b5eeb" : "#4b4b6b",
            }}
          />
        </div>
      </div>

      {/* Tiers preview */}
      <div className="flex gap-2 flex-wrap">
        {deal.tiers.map((tier) => (
          <span
            key={tier.name}
            className="text-xs px-2 py-1 rounded-md"
            style={{
              backgroundColor: "#1e1e2e",
              color: "#9090aa",
              border: "1px solid #2a2a3e",
            }}
          >
            {tier.name} ${tier.price.toLocaleString()}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={`/deal/${deal.slug}`}
        className="mt-auto block text-center py-3 rounded-xl text-sm font-semibold transition-all"
        style={
          isOpen
            ? {
                backgroundColor: "#3b5eeb",
                color: "white",
              }
            : {
                backgroundColor: "#1e1e2e",
                color: "#6b6b85",
                cursor: "default",
                pointerEvents: "none",
              }
        }
      >
        {isOpen ? "View Deal →" : "Notify Me"}
      </Link>
    </div>
  );
}
