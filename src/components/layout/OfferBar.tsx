"use client";

import { useEffect, useState } from "react";
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
