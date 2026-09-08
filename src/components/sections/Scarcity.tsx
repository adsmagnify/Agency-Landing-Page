"use client";

import { Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { offerWindow } from "@/lib/constants";
import { useOfferCountdown } from "@/components/layout/OfferBar";

export function Scarcity() {
  const remaining = useOfferCountdown();
  const filledPct = (offerWindow.filled / offerWindow.capacity) * 100;
  const units = [
    { label: "Days", value: remaining.d },
    { label: "Hours", value: remaining.h },
    { label: "Minutes", value: remaining.m },
    { label: "Seconds", value: remaining.s },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />

      <Container className="relative flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.16em] text-cyan-300 uppercase">
          <Lock size={13} aria-hidden />
          Limited onboarding
        </span>
        <h2 className="headline-2 mt-5 max-w-xl text-white sm:mt-6">
          Onboarding closes soon
        </h2>

        <div className="mt-10 grid w-full max-w-xl grid-cols-4 gap-2 sm:mt-12 sm:gap-4">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-1.5 py-4 sm:px-4 sm:py-6"
            >
              <p
                key={`${unit.label}-${unit.value}`}
                className="animate-tick font-display text-2xl font-semibold tabular-nums text-cyan-400 sm:text-4xl"
              >
                {String(unit.value).padStart(2, "0")}
              </p>
              <p className="mt-2 text-[0.6rem] tracking-widest text-white/50 uppercase sm:text-[0.65rem]">
                {unit.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 w-full max-w-md sm:mt-12">
          <div className="mb-3 flex items-center justify-between text-sm text-white/80">
            <span>
              {offerWindow.filled} of {offerWindow.capacity} institutes onboarded
            </span>
            <span className="font-semibold text-cyan-400">
              {offerWindow.remaining} spots left
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
              initial={{ width: 0 }}
              whileInView={{ width: `${filledPct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            />
          </div>
        </div>

        <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/60">
          We take only {offerWindow.capacity} institutes per intake so we can go
          deep on each one and protect delivery.
        </p>

        <div className="mt-9">
          <Button href="#apply" variant="primary" showArrow>
            Secure My Spot
          </Button>
        </div>
      </Container>
    </section>
  );
}
