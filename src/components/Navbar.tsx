"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b bg-white"
      style={{ borderColor: "#e8ecf4" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight" style={{ color: "#0f1b3d" }}>
            📦 OpenPacks
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#deals"
            className="text-sm font-medium transition-colors"
            style={{ color: "#6b7280" }}
            onMouseOver={e => (e.currentTarget.style.color = "#0f1b3d")}
            onMouseOut={e => (e.currentTarget.style.color = "#6b7280")}
          >
            Deals
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors"
            style={{ color: "#6b7280" }}
            onMouseOver={e => (e.currentTarget.style.color = "#0f1b3d")}
            onMouseOut={e => (e.currentTarget.style.color = "#6b7280")}
          >
            About
          </Link>
          <Link
            href="/#deals"
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-all min-h-[44px] flex items-center"
            style={{
              backgroundColor: "#0f1b3d",
              color: "white",
            }}
          >
            Get In
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          style={{ color: "#6b7280" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4 bg-white"
          style={{ borderColor: "#e8ecf4" }}
        >
          <Link
            href="/#deals"
            className="text-sm font-medium"
            style={{ color: "#6b7280" }}
            onClick={() => setOpen(false)}
          >
            Deals
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium"
            style={{ color: "#6b7280" }}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#deals"
            className="text-sm font-semibold px-4 py-3 rounded-lg text-center min-h-[44px] flex items-center justify-center"
            style={{ backgroundColor: "#0f1b3d", color: "white" }}
            onClick={() => setOpen(false)}
          >
            Get In
          </Link>
        </div>
      )}
    </nav>
  );
}
