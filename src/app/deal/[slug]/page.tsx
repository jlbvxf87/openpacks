import { notFound } from "next/navigation";
import Link from "next/link";
import { deals, getDeal } from "@/lib/deals";

export async function generateStaticParams() {
  return deals.map((d) => ({ slug: d.slug }));
}

export default function DealPage({ params }: { params: { slug: string } }) {
  const deal = getDeal(params.slug);
  if (!deal) notFound();

  const pct = Math.min((deal.raised / deal.raise) * 100, 100);
  const isOpen = deal.status === "open";

  return (
    <div className="pt-16 min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "#6b7280" }}>
          <Link href="/" className="transition-colors hover:underline" style={{ color: "#6b7280" }}>
            Home
          </Link>
          <span>›</span>
          <Link
            href="/#deals"
            className="transition-colors hover:underline"
            style={{ color: "#6b7280" }}
          >
            Deals
          </Link>
          <span>›</span>
          <span style={{ color: "#0f1b3d", fontWeight: 600 }}>{deal.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Deal info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-3">
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
                <span
                  className="text-xs px-3 py-1 rounded-full font-semibold"
                  style={
                    isOpen
                      ? {
                          backgroundColor: "rgba(22,163,74,0.08)",
                          color: "#16a34a",
                          border: "1px solid rgba(22,163,74,0.2)",
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
              <h1 className="text-4xl font-extrabold mb-3" style={{ color: "#0f1b3d" }}>
                {deal.name}
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "#6b7280" }}>
                {deal.description}
              </p>
            </div>

            {/* Progress */}
            <div
              className="rounded-2xl p-6 bg-white"
              style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 8px rgba(15,27,61,0.04)" }}
            >
              <div className="flex justify-between text-sm mb-4">
                <div>
                  <div className="text-2xl font-bold" style={{ color: "#0f1b3d" }}>
                    ${deal.raised.toLocaleString()}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#6b7280" }}>raised</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold" style={{ color: "#0f1b3d" }}>
                    ${deal.raise.toLocaleString()}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#6b7280" }}>goal</div>
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
                    backgroundColor: isOpen ? "#0f1b3d" : "#d1d5db",
                  }}
                />
              </div>
              <div className="text-xs text-right" style={{ color: "#6b7280" }}>
                {pct.toFixed(0)}% funded
              </div>
            </div>

            {/* What you're backing */}
            <div
              className="rounded-2xl p-6 space-y-4 bg-white"
              style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 8px rgba(15,27,61,0.04)" }}
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
                    <span style={{ color: "#3b5eeb", fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Tiers */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold mb-2" style={{ color: "#0f1b3d" }}>Choose a tier</h2>
            {deal.tiers.map((tier) => {
              const spotsLeft =
                tier.spotsRemaining === null
                  ? null
                  : tier.spotsRemaining;
              const soldOut = spotsLeft !== null && spotsLeft === 0;

              return (
                <div
                  key={tier.name}
                  className="rounded-2xl p-5 bg-white"
                  style={{ border: "1px solid #e8ecf4", boxShadow: "0 2px 8px rgba(15,27,61,0.04)" }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold" style={{ color: "#0f1b3d" }}>{tier.name}</h3>
                    <span className="text-lg font-extrabold" style={{ color: "#0f1b3d" }}>
                      ${tier.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "#6b7280" }}>{tier.perks}</p>
                  {spotsLeft !== null && (
                    <p
                      className="text-xs mb-3 font-medium"
                      style={{ color: spotsLeft <= 2 ? "#f59e0b" : "#6b7280" }}
                    >
                      {soldOut ? "Sold out" : `${spotsLeft} of ${tier.spots} spots left`}
                    </p>
                  )}
                  {isOpen && !soldOut ? (
                    <Link
                      href={`/invest/${deal.slug}?tier=${tier.name}`}
                      className="block text-center py-3 rounded-xl text-sm font-semibold transition-all min-h-[44px] flex items-center justify-center"
                      style={{ backgroundColor: "#0f1b3d", color: "white" }}
                    >
                      Get In →
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
