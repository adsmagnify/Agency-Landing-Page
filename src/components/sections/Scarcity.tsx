"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { offerWindow } from "@/lib/constants";
import { useOfferCountdown } from "@/components/layout/OfferBar";
import { cn } from "@/lib/utils";

export function Scarcity() {
  const remaining = useOfferCountdown();
  const filledPct = (offerWindow.filled / offerWindow.capacity) * 100;
  const units = [
    { label: "Days", value: remaining.ready ? String(remaining.d).padStart(2, "0") : "–" },
    { label: "Hours", value: remaining.ready ? String(remaining.h).padStart(2, "0") : "–" },
    { label: "Minutes", value: remaining.ready ? String(remaining.m).padStart(2, "0") : "–" },
    { label: "Seconds", value: remaining.ready ? String(remaining.s).padStart(2, "0") : "–" },
  ];

  return (
    <section className="navy-band relative overflow-hidden py-16 text-center sm:py-20 lg:py-[5.75rem]">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />
      <div className="pointer-events-none absolute top-[-6rem] left-1/2 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[90px]" />
      <Container className="relative flex flex-col items-center">
        <h2 className="headline-2 text-white">
          <span className="text-cyan-500">🔒</span> Onboarding closes soon
        </h2>

        <div className="mt-7 flex flex-wrap justify-center gap-3.5">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="min-w-[86px] rounded-xl border border-cyan-500/25 bg-black/28 px-2.5 py-4"
            >
              <p
                key={`${unit.label}-${unit.value}`}
                className="animate-tick font-display text-[2.2rem] leading-none font-extrabold tabular-nums text-cyan-500"
              >
                {unit.value}
              </p>
              <p className="mt-2 text-[0.72rem] tracking-[0.06em] text-white/60 uppercase">
                {unit.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 grid grid-cols-4 gap-2.5 sm:gap-3"
          aria-label={`${offerWindow.filled} of ${offerWindow.capacity} seats filled`}
        >
          {Array.from({ length: offerWindow.capacity }, (_, index) => {
            const filled = index < offerWindow.filled;
            return (
              <span
                key={index}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-bold sm:h-12 sm:w-12",
                  filled
                    ? "border-cyan-500/80 bg-cyan-500 text-[#111] shadow-[0_0_16px_rgba(255,198,25,0.35)]"
                    : "border-dashed border-cyan-500/45 bg-black/20 text-cyan-400 animate-seat-pulse"
                )}
              >
                {filled ? <Check size={16} strokeWidth={3} aria-hidden /> : index + 1}
              </span>
            );
          })}
        </div>

        <div className="mt-6 w-full max-w-[520px]">
          <div className="mb-2.5 flex items-center justify-between text-[0.92rem] text-white">
            <span>
              {offerWindow.filled} of {offerWindow.capacity} institutes onboarded
            </span>
            <span className="font-bold text-cyan-500">
              {offerWindow.remaining} spots left
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/14">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
              initial={{ width: 0 }}
              whileInView={{ width: `${filledPct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            />
          </div>
        </div>

        <p className="mt-[22px] max-w-xl text-[0.9rem] text-white/70">
          We take only {offerWindow.capacity} institutes per intake so we can go
          deep on each one and protect delivery.
        </p>

        <div className="mt-[26px]">
          <Button href="#apply" variant="primary" size="lg" pulse>
            Secure My Spot
          </Button>
        </div>
      </Container>
    </section>
  );
}
