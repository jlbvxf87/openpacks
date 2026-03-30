import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: "#1e1e2e", backgroundColor: "#0a0a0f" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-xl font-bold gradient-text">OpenPacks</span>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Deal-by-deal participation in real AI systems being built right
              now.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#deals"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Active Deals
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">
              Deals
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/deal/awa-installs"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  AWA Installs
                </Link>
              </li>
              <li>
                <Link
                  href="/deal/feedr"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  FEEDR
                </Link>
              </li>
              <li>
                <Link
                  href="/deal/clipfit"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  ClipFit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-2"
          style={{ borderColor: "#1e1e2e" }}
        >
          <p className="text-xs text-gray-600">
            © 2025 OpenPacks. Not a registered investment advisor. High-risk
            early-stage participation only.
          </p>
          <p className="text-xs text-gray-600">
            Built by{" "}
            <span className="text-gray-400">Jaron Baston</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
