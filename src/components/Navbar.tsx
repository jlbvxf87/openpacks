"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(10,10,15,0.9)",
        borderColor: "#1e1e2e",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight gradient-text">
            OpenPacks
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              backgroundColor: "rgba(59,94,235,0.2)",
              color: "#3b5eeb",
              border: "1px solid rgba(59,94,235,0.4)",
            }}
          >
            BETA
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#deals"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Deals
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/#deals"
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-all"
            style={{
              backgroundColor: "#3b5eeb",
              color: "white",
            }}
          >
            Get In
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
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
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ borderColor: "#1e1e2e", backgroundColor: "#0a0a0f" }}
        >
          <Link
            href="/#deals"
            className="text-sm text-gray-400 hover:text-white"
            onClick={() => setOpen(false)}
          >
            Deals
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-400 hover:text-white"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#deals"
            className="text-sm font-semibold px-4 py-2 rounded-lg text-center"
            style={{ backgroundColor: "#3b5eeb", color: "white" }}
            onClick={() => setOpen(false)}
          >
            Get In
          </Link>
        </div>
      )}
    </nav>
  );
}
