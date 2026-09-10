"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { offerWindow } from "@/lib/constants";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatRemaining(ms: number) {
  const t = Math.max(0, ms);
  const d = Math.floor(t / 864e5);
  const h = Math.floor((t % 864e5) / 36e5);
  const m = Math.floor((t % 36e5) / 6e4);
  const s = Math.floor((t % 6e4) / 1e3);
  return { d, h, m, s, label: `${pad(d)}d ${pad(h)}:${pad(m)}:${pad(s)}` };
}

export function useOfferCountdown() {
  const [remaining, setRemaining] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
    label: "00d 00:00:00",
    ready: false,
  });

  useEffect(() => {
    function tick() {
      setRemaining({
        ...formatRemaining(offerWindow.closeAt - Date.now()),
        ready: true,
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return remaining;
}

export function OfferBar() {
  const remaining = useOfferCountdown();
  const applyHref = usePathname() === "/" ? "#apply" : "/#apply";

  return (
    <div
      className="border-b border-cyan-500/30 bg-gradient-to-r from-brand-700 to-brand-600"
      aria-live="polite"
    >
      <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-center gap-3 px-6 py-2 text-[0.78rem] text-white sm:h-11 sm:gap-[22px] sm:py-0 sm:text-[0.86rem]">
        <span className="font-semibold text-cyan-500">
          🔒 Onboarding closes{" "}
          <b className="font-semibold tabular-nums">
            {remaining.ready ? `in ${remaining.label}` : "30 Sep"}
          </b>
        </span>
        <span className="hidden text-white/25 sm:inline" aria-hidden>
          |
        </span>
        <span>
          Only {offerWindow.capacity} institutes this intake ·{" "}
          <span className="font-bold text-cyan-500">
            {offerWindow.remaining} spots left
          </span>{" "}
          ({offerWindow.filled} filled)
        </span>
        <span className="hidden text-white/25 sm:inline" aria-hidden>
          |
        </span>
        <a
          href={applyHref}
          className="font-bold text-cyan-500 transition-colors hover:text-white"
        >
          Apply Now →
        </a>
      </div>
    </div>
  );
}
