"use client";

import { useEffect, useState } from "react";

function getDeadline(): Date {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return d;
}

export default function CountdownTimer({ status }: { status: "open" | "coming-soon" | "closed" }) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; mins: number } | null>(null);
  const deadline = getDeadline();

  useEffect(() => {
    if (status !== "open") return;

    const calc = () => {
      const now = new Date();
      const diff = deadline.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft({ days, hours, mins });
    };

    calc();
    const interval = setInterval(calc, 60000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  if (status === "coming-soon") {
    return (
      <div
        className="flex items-center gap-2 text-sm px-3 py-2 rounded-xl"
        style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
      >
        <span style={{ color: "rgba(255,255,255,0.7)" }}>🕐 Opening Soon — join waitlist</span>
      </div>
    );
  }

  if (status === "open" && timeLeft) {
    return (
      <div
        className="flex items-center gap-2 text-sm px-3 py-2 rounded-xl"
        style={{ backgroundColor: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)" }}
      >
        <span style={{ color: "#fca5a5" }}>⏳ Deal closes in</span>
        <span className="font-bold" style={{ color: "white" }}>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.mins}m
        </span>
      </div>
    );
  }

  return null;
}
