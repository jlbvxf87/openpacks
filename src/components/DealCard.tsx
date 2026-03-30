import Link from "next/link";
import { Deal } from "@/lib/deals";

export default function DealCard({ deal }: { deal: Deal }) {
  const pct = Math.min((deal.raised / deal.raise) * 100, 100);
  const isOpen = deal.status === "open";

  return (
    <div
      className="card-hover rounded-2xl p-6 flex flex-col gap-4 bg-white"
      style={{
        border: "1px solid #e8ecf4",
        boxShadow: "0 2px 8px rgba(15, 27, 61, 0.04)",
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
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
        </div>
        <span
          className="text-xs px-3 py-1 rounded-full font-semibold"
          style={
            isOpen
              ? {
                  backgroundColor: "rgba(22, 163, 74, 0.08)",
                  color: "#16a34a",
                  border: "1px solid rgba(22, 163, 74, 0.2)",
                }
              : {
                  backgroundColor: "#f3f4f6",
                  color: "#6b7280",
                  border: "1px solid #e5e7eb",
                }
          }
        >
          {isOpen ? "● Open" : "Coming Soon"}
        </span>
      </div>

      {/* Name + tagline */}
      <div>
        <h3 className="text-xl font-bold" style={{ color: "#0f1b3d" }}>{deal.name}</h3>
        <p className="text-sm mt-1 leading-relaxed" style={{ color: "#6b7280" }}>
          {deal.tagline}
        </p>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs mb-1.5" style={{ color: "#6b7280" }}>
          <span>${deal.raised.toLocaleString()} raised</span>
          <span>Goal: ${deal.raise.toLocaleString()}</span>
        </div>
        <div
          className="h-1.5 rounded-full overflow-hidden"
          style={{ backgroundColor: "#e8ecf4" }}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${pct}%`,
              backgroundColor: isOpen ? "#0f1b3d" : "#d1d5db",
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
              backgroundColor: "#f8f9fa",
              color: "#6b7280",
              border: "1px solid #e8ecf4",
            }}
          >
            {tier.name} ${tier.price.toLocaleString()}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={`/deal/${deal.slug}`}
        className="mt-auto block text-center py-3 rounded-xl text-sm font-semibold transition-all min-h-[44px] flex items-center justify-center"
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
        {isOpen ? "View Deal →" : "Notify Me"}
      </Link>
    </div>
  );
}
