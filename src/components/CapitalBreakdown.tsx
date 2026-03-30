import React from "react";

type BreakdownItem = {
  label: string;
  amount: number;
  pct: number;
  color: string;
};

const CAPITAL_BREAKDOWN: Record<string, BreakdownItem[]> = {
  "awa-installs": [
    { label: "Infrastructure & Tools", amount: 8000, pct: 32, color: "#3b5eeb" },
    { label: "Marketing & Outreach", amount: 7000, pct: 28, color: "#0f1b3d" },
    { label: "Operations & Hiring", amount: 6000, pct: 24, color: "#10b981" },
    { label: "Reserve Fund", amount: 4000, pct: 16, color: "#9ca3af" },
  ],
  "feedr": [
    { label: "Development", amount: 7000, pct: 47, color: "#7c3aed" },
    { label: "Marketing", amount: 4000, pct: 27, color: "#a855f7" },
    { label: "Infrastructure", amount: 3000, pct: 20, color: "#3b5eeb" },
    { label: "Reserve", amount: 1000, pct: 6, color: "#9ca3af" },
  ],
  "clipfit": [
    { label: "Development", amount: 5000, pct: 50, color: "#0891b2" },
    { label: "Marketing", amount: 3000, pct: 30, color: "#06b6d4" },
    { label: "Infrastructure", amount: 2000, pct: 20, color: "#9ca3af" },
  ],
  "chipshot-creator": [
    { label: "iOS Development", amount: 5000, pct: 50, color: "#065f46" },
    { label: "App Store & Marketing", amount: 3000, pct: 30, color: "#10b981" },
    { label: "Testing & QA", amount: 2000, pct: 20, color: "#9ca3af" },
  ],
};

export default function CapitalBreakdown({ slug }: { slug: string }) {
  const items = CAPITAL_BREAKDOWN[slug];
  if (!items) return null;

  return (
    <div
      className="rounded-2xl p-6 bg-white space-y-5"
      style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <h2 className="text-lg font-bold" style={{ color: "#0f1b3d" }}>
        How funds will be used
      </h2>

      {/* Stacked bar */}
      <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
        {items.map((item) => (
          <div
            key={item.label}
            style={{ width: `${item.pct}%`, backgroundColor: item.color }}
            title={`${item.label}: ${item.pct}%`}
          />
        ))}
      </div>

      {/* Breakdown rows */}
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium" style={{ color: "#374151" }}>
                  {item.label}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="font-semibold" style={{ color: "#0f1b3d" }}>
                  ${item.amount.toLocaleString()}
                </span>
                <span
                  className="text-xs px-1.5 py-0.5 rounded font-medium"
                  style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }}
                >
                  {item.pct}%
                </span>
              </div>
            </div>
            <div
              className="h-1.5 rounded-full overflow-hidden"
              style={{ backgroundColor: "#f3f4f6" }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: `${item.pct}%`, backgroundColor: item.color, opacity: 0.7 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
