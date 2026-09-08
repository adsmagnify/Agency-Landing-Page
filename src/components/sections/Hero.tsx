"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { educationClients } from "@/content/funnel";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { cn } from "@/lib/utils";

const rejected = [
  "Buying More Leads",
  "Chasing Cold Numbers",
  "Slow Follow-Ups",
  "Half-Empty Intakes",
];

function Stamp({ delay }: { delay: number }) {
  return (
    <motion.span
      aria-hidden
      className="inline-block origin-center select-none text-[1.15em] leading-none"
      initial={{ scale: 1.85, rotate: -28, opacity: 0 }}
      animate={{ scale: 1, rotate: -14, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 460,
        damping: 14,
        delay,
      }}
    >
      ❌
    </motion.span>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-44 lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50 via-paper to-paper" />
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute top-[-10rem] left-1/2 -ml-96 h-[32rem] w-[48rem] rounded-full bg-brand-500/25 blur-[120px] sm:animate-drift-primary" />
      <div className="pointer-events-none absolute top-16 right-[6%] hidden h-64 w-64 rounded-full bg-cyan-400/30 blur-[100px] sm:block sm:animate-drift-secondary" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-[6%] hidden h-72 w-72 rounded-full bg-brand-400/15 blur-[100px] sm:block sm:animate-drift-slow" />

      <Container className="relative flex min-w-0 flex-col items-center text-center">
        <motion.div
          className="flex w-full max-w-3xl flex-col items-center gap-5 sm:gap-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
          }}
        >
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
            }}
          >
            <Badge size="compact" className="animate-badge-glow">
              Student Acquisition
            </Badge>
            <Badge size="compact">Education Institutes</Badge>
          </motion.div>

          <motion.h1
            className="flex w-full flex-col items-center gap-4 sm:gap-5"
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
          >
            <span className="font-display text-[1.65rem] font-medium leading-[1.15] tracking-tight text-ink-950 sm:text-4xl sm:leading-[1.12] lg:text-[2.75rem] lg:leading-[1.1]">
              Fill every batch with
              <span className="mt-1 block font-semibold text-brand-600 sm:mt-1.5">
                paid enrollments
              </span>
            </span>

            <span className="flex max-w-xl flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-[0.85rem] font-medium leading-snug text-mist-400 sm:max-w-2xl sm:text-lg lg:text-xl">
              <span className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-mist-500 uppercase sm:text-xs">
                without
              </span>
              {rejected.map((item, index) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 whitespace-nowrap font-display text-ink-800"
                >
                  {item}
                  <Stamp delay={0.42 + index * 0.14} />
                </span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-sm leading-relaxed text-balance text-mist-400 sm:text-base sm:leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
            }}
          >
            Indian parents spend more on their children&apos;s education than
            almost anything else. Yet most institutes still burn ad budget on
            leads that never enroll. We build the done-for-you Student
            Acquisition Funnel that turns your ad spend into admissions before
            the deadline closes.
          </motion.p>

          <motion.div
            className="mt-1 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
            }}
          >
            <Button href="#apply" variant="primary" showArrow className="w-full sm:w-auto">
              Book My Free Strategy Call
            </Button>
            <Button href="#solution" variant="secondary" className="w-full sm:w-auto">
              See The System
            </Button>
          </motion.div>

          <motion.p
            className="text-xs text-mist-500 sm:text-sm"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.5 } },
            }}
          >
            No pitch. We&apos;ll show you exactly where your admissions are leaking.
          </motion.p>
        </motion.div>

        <div className="relative mt-14 w-full sm:mt-20">
          <p className="mb-6 text-[0.7rem] font-semibold tracking-[0.22em] text-brand-500 uppercase sm:mb-8">
            Trusted by education institutes filling batches
          </p>
          <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
            {educationClients.map((client, index) => (
              <StaggerItem key={client.name}>
                <div
                  className={cn(
                    "group flex h-[4.5rem] w-full items-center justify-center p-3 sm:h-24 sm:p-4",
                    "onDark" in client && client.onDark
                      ? "rounded-2xl border border-ink-800 bg-ink-950 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:border-ink-600 hover:shadow-[0_24px_60px_-28px_rgba(0,74,173,0.45)]"
                      : "card-surface"
                  )}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={180}
                    height={64}
                    className="max-h-11 max-w-[88%] w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-14"
                    sizes="(max-width: 640px) 42vw, (max-width: 1024px) 24vw, 180px"
                    priority={index < 6}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
