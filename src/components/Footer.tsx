import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: "#e8ecf4", backgroundColor: "#f8f9fa" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-xl font-extrabold" style={{ color: "#0f1b3d" }}>
              📦 OpenPacks
            </span>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: "#6b7280" }}>
              Deal-by-deal participation in real AI systems being built right now.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3" style={{ color: "#0f1b3d" }}>
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#deals"
                  className="text-sm transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  Active Deals
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3" style={{ color: "#0f1b3d" }}>
              Deals
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/deal/awa-installs"
                  className="text-sm transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  AWA Installs
                </Link>
              </li>
              <li>
                <Link
                  href="/deal/feedr"
                  className="text-sm transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  FEEDR
                </Link>
              </li>
              <li>
                <Link
                  href="/deal/clipfit"
                  className="text-sm transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  ClipFit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-2"
          style={{ borderColor: "#e8ecf4" }}
        >
          <p className="text-xs" style={{ color: "#6b7280" }}>
            © 2026 OpenPacks. Built by operators. Not a registered investment advisor. High-risk early-stage participation only.
          </p>
        </div>
      </div>
    </footer>
  );
}
