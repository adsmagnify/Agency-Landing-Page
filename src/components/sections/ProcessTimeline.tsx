"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

function TimelineNode({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.7, once: false });

  return (
    <div
      ref={ref}
      className="relative z-20 flex h-14 w-14 items-center justify-center"
    >
      <motion.span
        aria-hidden
        animate={
          inView
            ? { scale: [1, 1.35, 1], opacity: [0.35, 0.12, 0.35] }
            : { scale: 1, opacity: 0 }
        }
        transition={{ duration: 1.8, repeat: inView ? Infinity : 0, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-cyan-400/40"
      />
      <span
        className={cn(
          "absolute inset-1 rounded-full border-2 transition-all duration-500",
          inView
            ? "border-cyan-400 bg-brand-600 shadow-[0_0_24px_rgba(0,74,173,0.45)]"
            : "border-ink-950/12 bg-white"
        )}
      />
      <span
        className={cn(
          "relative font-display text-xs font-bold tracking-wide transition-colors duration-500",
          inView ? "text-white" : "text-brand-500"
        )}
      >
        {label}
      </span>
    </div>
  );
}

function TimelineCard({
  step,
  align,
  index,
}: {
  step: ProcessStep;
  align: "left" | "right";
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36, x: align === "left" ? -40 : 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative w-full overflow-hidden rounded-3xl border border-ink-950/8 bg-white p-6 shadow-[0_18px_50px_-32px_rgba(10,15,31,0.45)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-28px_rgba(0,74,173,0.28)] sm:p-8",
        align === "left" && "lg:text-right"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-500 to-cyan-500",
          align === "left" && "lg:left-auto lg:right-0"
        )}
      />

      <div
        className={cn(
          "relative grid items-center gap-4 sm:gap-6",
          "grid-cols-[minmax(0,1fr)_auto]",
          align === "left" && "lg:grid-cols-[auto_minmax(0,1fr)]"
        )}
      >
        <span
          aria-hidden
          className={cn(
            "font-display text-5xl font-bold leading-none text-brand-500/20 sm:text-6xl",
            "col-start-2 row-start-1",
            align === "left" && "lg:col-start-1"
          )}
        >
          {step.step}
        </span>
        <div
          className={cn(
            "col-start-1 row-start-1 min-w-0",
            align === "left" && "lg:col-start-2"
          )}
        >
          <h3 className="font-display text-2xl font-semibold text-ink-950">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-mist-400">
            {step.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function ProcessTimeline({
  steps,
  headingId,
}: {
  steps: ProcessStep[];
  headingId?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });
  const headTop = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative w-full" aria-labelledby={headingId}>
      <div
        aria-hidden
        className="pointer-events-none absolute top-8 bottom-8 left-[1.75rem] z-0 w-0.5 overflow-visible bg-ink-950/10 lg:left-1/2 lg:-translate-x-1/2"
      >
        <motion.span
          className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-brand-500 via-brand-400 to-cyan-500"
          style={{ scaleY }}
        />
        <motion.span
          className="absolute left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 shadow-[0_0_18px_rgba(255,198,25,0.9)]"
          style={{ top: headTop }}
        />
      </div>

      <ol className="relative flex flex-col gap-14 lg:gap-4">
        {steps.map((step, index) => {
          const align = index % 2 === 0 ? "left" : "right";

          return (
            <li
              key={step.step}
              className="relative grid grid-cols-[3.5rem_minmax(0,1fr)] items-center lg:grid-cols-[minmax(0,1fr)_5.5rem_minmax(0,1fr)] lg:py-6"
            >
              <div className="relative z-20 col-start-1 row-start-1 flex justify-center lg:col-start-2">
                <TimelineNode label={step.step} />
              </div>

              <div
                className={cn(
                  "relative z-0 col-start-2 row-start-1 min-w-0",
                  align === "left"
                    ? "lg:col-start-1 lg:pr-4"
                    : "lg:col-start-3 lg:pl-4"
                )}
              >
                <TimelineCard step={step} align={align} index={index} />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
