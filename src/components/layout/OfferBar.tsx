"use client";

import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
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
  });

  useEffect(() => {
    function tick() {
      setRemaining(formatRemaining(offerWindow.closeAt - Date.now()));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return remaining;
}

export function OfferBar() {
  const remaining = useOfferCountdown();

  return (
    <div
      className="overflow-hidden bg-brand-600 py-2 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
      aria-live="polite"
    >
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center"
            aria-hidden={copy === 1}
          >
            {[0, 1, 2].map((item) => (
              <span
                key={`${copy}-${item}`}
                className="mx-5 flex shrink-0 items-center gap-3 text-xs font-medium tracking-wide whitespace-nowrap text-white sm:mx-8 sm:text-sm"
              >
                <span className="inline-flex items-center gap-1.5 text-cyan-400">
                  <Lock size={12} aria-hidden />
                  Onboarding closes in{" "}
                  <span className="font-semibold tabular-nums text-cyan-300">
                    {remaining.label}
                  </span>
                </span>
                <span className="text-white/35" aria-hidden>
                  |
                </span>
                <span>
                  Only {offerWindow.capacity} institutes this intake ·{" "}
                  <span className="font-semibold text-cyan-400">
                    {offerWindow.remaining} spots left
                  </span>{" "}
                  ({offerWindow.filled} filled)
                </span>
                <span className="text-white/35" aria-hidden>
                  |
                </span>
                <a
                  href="#apply"
                  className="font-semibold text-cyan-400 transition-colors hover:text-white"
                >
                  Apply Now →
                </a>
                <span className="mx-3 text-cyan-400 sm:mx-5" aria-hidden>
                  &bull;
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
