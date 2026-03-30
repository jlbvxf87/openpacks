"use client";

import { useEffect, useState } from "react";

const ENTRIES: Record<string, string[]> = {
  "awa-installs": [
    "👤 Marcus just backed AWA Installs · 2 min ago",
    "👤 Sarah joined at the Operator tier · 14 min ago",
    "👤 DeShawn backed AWA Installs · 31 min ago",
    "👤 Priya joined at the Backer tier · 1 hr ago",
    "👤 James just backed AWA Installs · 2 hrs ago",
    "👤 Leila joined at the Supporter tier · 3 hrs ago",
  ],
  "feedr": [
    "👤 Tyler joined the FEEDR waitlist · 5 min ago",
    "👤 Amara is watching FEEDR · 22 min ago",
    "👤 Josh joined the waitlist · 45 min ago",
  ],
  "clipfit": [
    "👤 Nina joined the ClipFit waitlist · 8 min ago",
    "👤 Chris is watching ClipFit · 27 min ago",
    "👤 Mia joined the waitlist · 1 hr ago",
  ],
  "chipshot-creator": [
    "👤 Ryan joined the ChipShot waitlist · 6 min ago",
    "👤 Connor is watching ChipShot · 19 min ago",
    "👤 Tyler joined the waitlist · 52 min ago",
  ],
};

export default function SocialProofTicker({ slug }: { slug: string }) {
  const entries = ENTRIES[slug] ?? ENTRIES["awa-installs"];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % entries.length);
        setVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [entries.length]);

  return (
    <div
      className="rounded-xl px-4 py-3 flex items-center gap-3"
      style={{
        backgroundColor: "#f8f9fa",
        border: "1px solid #e8ecf4",
        minHeight: "44px",
      }}
    >
      <div
        style={{
          transition: "opacity 0.4s ease",
          opacity: visible ? 1 : 0,
        }}
        className="text-sm"
      >
        <span style={{ color: "#374151" }}>{entries[index]}</span>
      </div>
    </div>
  );
}
