"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { VslPlayer } from "@/components/ui/VslPlayer";

const rejected = [
  "Buying Cheap Leads",
  "Chasing unqualified enquiries",
  "Depending on referrals",
  "Sending cold leads straight to your course",
];

function Stamp({ delay }: { delay: number }) {
  return (
    <motion.span
      aria-hidden
      className="inline-block shrink-0 origin-center select-none font-bold text-signal"
      initial={{ scale: 1.85, rotate: -28, opacity: 0 }}
      animate={{ scale: 1, rotate: -12, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 460,
        damping: 14,
        delay,
      }}
    >
      ✕
    </motion.span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[560px] items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_-10%,rgba(0,74,173,.45),transparent_58%),linear-gradient(180deg,#070911,#0a1328_48%,#070911)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute top-8 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/25 blur-[100px]" />

      <Container className="relative z-[2] py-16 sm:py-[70px]">
        <div className="mx-auto flex w-full max-w-[70rem] flex-col items-center text-center">
          <div className="mb-5 flex items-center justify-center">
            <Badge className="max-w-[min(100%,34rem)] justify-center px-4 py-2 text-center text-[0.68rem] leading-snug tracking-[0.12em] whitespace-normal uppercase sm:text-[0.76rem]">
              Student Acquisition System for Education Institutes
            </Badge>
          </div>

          <h1 className="flex w-full flex-col items-center gap-4 sm:gap-5">
            <span className="max-w-[54rem] font-display text-[clamp(1.95rem,4.6vw,3.2rem)] leading-[1.12] font-extrabold tracking-[-0.02em] text-white">
              Turn Your Marketing Budget{" "}
              <span className="whitespace-nowrap">
                Into{" "}
                <span className="text-cyan-500">Paid Enrollments</span>
              </span>
            </span>
            <span className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-cyan-500 uppercase sm:text-xs">
              without
            </span>
            <span className="flex w-full flex-wrap items-center justify-center gap-2.5">
              {rejected.map((item, index) => (
                <span
                  key={item}
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 text-[0.8rem] font-display text-white/90 sm:text-[0.86rem]"
                >
                  <span className="whitespace-nowrap">{item}</span>
                  <Stamp delay={0.42 + index * 0.14} />
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-6 max-w-[40rem] text-base leading-relaxed text-mist-400 sm:text-[1.05rem]">
            We build the complete student acquisition system — from
            <span className="mt-2.5 block font-semibold text-cyan-500">
              Meta Ads → Qualified Leads → Paid Workshop/Demo → Course
              Enrollment
            </span>
            <span className="mt-2.5 block">
              so your advertising is designed around acquiring students, not
              simply generating leads.
            </span>
          </p>

          <div className="mt-8 w-full">
            <VslPlayer />
          </div>

          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center">
            <Button href="#apply" variant="primary" size="lg">
              Book My Free Strategy Call
            </Button>
            <Button href="#solution" variant="ghost" size="lg">
              See The System
            </Button>
          </div>

          <p className="mt-4 rounded-full border border-cyan-500/25 bg-cyan-500/8 px-4 py-1.5 text-[0.82rem] text-mist-400">
            No pitch. We&apos;ll show you exactly where your admissions are
            leaking.
          </p>
        </div>
      </Container>
    </section>
  );
}
