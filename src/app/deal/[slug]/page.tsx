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
    <div className="pt-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <span>›</span>
          <Link
            href="/#deals"
            className="hover:text-gray-400 transition-colors"
          >
            Deals
          </Link>
          <span>›</span>
          <span className="text-gray-400">{deal.name}</span>
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
                    backgroundColor: "rgba(59,94,235,0.15)",
                    color: "#3b5eeb",
                    border: "1px solid rgba(59,94,235,0.3)",
                  }}
                >
                  {deal.category}
                </span>
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
              <h1 className="text-4xl font-extrabold text-white mb-3">
                {deal.name}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                {deal.description}
              </p>
            </div>

            {/* Progress */}
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "#12121a",
                border: "1px solid #1e1e2e",
              }}
            >
              <div className="flex justify-between text-sm mb-3">
                <div>
                  <div className="text-2xl font-bold text-white">
                    ${deal.raised.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">raised</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">
                    ${deal.raise.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">goal</div>
                </div>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden mb-2"
                style={{ backgroundColor: "#1e1e2e" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: isOpen ? "#3b5eeb" : "#4b4b6b",
                  }}
                />
              </div>
              <div className="text-xs text-gray-600 text-right">
                {pct.toFixed(0)}% funded
              </div>
            </div>

            {/* What you're backing */}
            <div
              className="rounded-2xl p-6 space-y-4"
              style={{
                backgroundColor: "#12121a",
                border: "1px solid #1e1e2e",
              }}
            >
              <h2 className="text-lg font-bold text-white">
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
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <span style={{ color: "#3b5eeb" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Tiers */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white mb-2">Choose a tier</h2>
            {deal.tiers.map((tier) => {
              const spotsLeft =
                tier.spotsRemaining === null
                  ? null
                  : tier.spotsRemaining;
              const soldOut = spotsLeft !== null && spotsLeft === 0;

              return (
                <div
                  key={tier.name}
                  className="rounded-2xl p-5"
                  style={{
                    backgroundColor: "#12121a",
                    border: "1px solid #1e1e2e",
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-white">{tier.name}</h3>
                    <span className="text-lg font-extrabold text-white">
                      ${tier.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{tier.perks}</p>
                  {spotsLeft !== null && (
                    <p className="text-xs mb-3" style={{ color: spotsLeft <= 2 ? "#F5A623" : "#6b6b85" }}>
                      {soldOut ? "Sold out" : `${spotsLeft} of ${tier.spots} spots left`}
                    </p>
                  )}
                  {isOpen && !soldOut ? (
                    <Link
                      href={`/invest/${deal.slug}?tier=${tier.name}`}
                      className="block text-center py-2.5 rounded-xl text-sm font-semibold transition-all"
                      style={{ backgroundColor: "#3b5eeb", color: "white" }}
                    >
                      Get In →
                    </Link>
                  ) : (
                    <div
                      className="block text-center py-2.5 rounded-xl text-sm font-semibold"
                      style={{
                        backgroundColor: "#1e1e2e",
                        color: "#4b4b6b",
                      }}
                    >
                      {soldOut ? "Sold Out" : "Not Open Yet"}
                    </div>
                  )}
                </div>
              );
            })}

            <p className="text-xs text-gray-600 leading-relaxed pt-2">
              High-risk investment. Not a registered security. Revenue share is not
              guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
