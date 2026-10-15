"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ONBOARDS = [
  {
    name: "NYSA Healthcare",
    logo: "/clients/nysa-healthcare.png",
  },
  {
    name: "Mirage Spa",
    logo: "/clients/miragespa.png",
  },
  {
    name: "Jeevan Sparsh",
    logo: "/clients/jeevan-sparsh.png",
  },
  {
    name: "Whistling Woods International",
    logo: "/clients/whistling-woods.png",
    cover: true,
  },
] as const;

const WAIT_MS = 15_000;
const VISIBLE_MS = 4200;

export function OnboardToast() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let waitTimer: ReturnType<typeof setTimeout>;
    let i = 0;

    function schedule() {
      waitTimer = setTimeout(showNext, WAIT_MS);
    }

    function showNext() {
      setIndex(i % ONBOARDS.length);
      setOpen(true);
      i += 1;
      hideTimer = setTimeout(() => setOpen(false), VISIBLE_MS);
      schedule();
    }

    schedule();

    return () => {
      clearTimeout(waitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const current = ONBOARDS[index];

  return (
    <div
      className="pointer-events-none fixed bottom-[max(5.75rem,calc(env(safe-area-inset-bottom)+4.75rem))] left-[max(1rem,env(safe-area-inset-left))] z-[70] w-[min(calc(100vw-2rem),22rem)] sm:bottom-6 lg:bottom-7"
      aria-live="polite"
    >
      <AnimatePresence>
        {open ? (
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 16, x: -8 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 8, x: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-cyan-500/40 bg-[#0c1020]/95 px-3.5 py-3 shadow-[0_18px_50px_-24px_rgba(255,198,25,0.35)] backdrop-blur-md"
          >
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-ink-900">
              <Image
                src={current.logo}
                alt=""
                width={96}
                height={96}
                className={cn(
                  "h-10 w-10",
                  "cover" in current && current.cover
                    ? "object-cover object-left"
                    : "object-contain"
                )}
              />
            </span>
            <p className="min-w-0 text-sm leading-snug">
              <span className="font-display font-bold text-white">
                {current.name}
              </span>
              <span className="mt-0.5 block text-mist-400">
                onboarded with us
              </span>
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
