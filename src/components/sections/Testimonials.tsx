"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  instituteTestimonials,
  chunkTestimonials,
  REVIEWS_PER_SCREEN,
  REVIEW_SCREEN_MS,
} from "@/content/funnel";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MidCta } from "@/components/sections/MidCta";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const screens = chunkTestimonials(
  [...instituteTestimonials],
  REVIEWS_PER_SCREEN
);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mb-2 tracking-[2px] text-cyan-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating
              ? "inline fill-cyan-500 text-cyan-500"
              : "inline fill-transparent text-mist-500/40"
          }
          aria-hidden
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [screenIndex, setScreenIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || screens.length <= 1 || paused) return;
    const id = setInterval(() => {
      setScreenIndex((current) => (current + 1) % screens.length);
    }, REVIEW_SCREEN_MS);
    return () => clearInterval(id);
  }, [reduceMotion, paused]);

  const activeScreen = screens[screenIndex] ?? screens[0];

  return (
    <section className="relative overflow-hidden section">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[100px]" />
      <Container className="relative section-gap">
        <SectionHeading
          align="center"
          eyebrow="Success Stories"
          title="What institute owners say after Adsmagnify"
        />

        <div
          className="flex flex-col gap-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={screenIndex}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="grid grid-cols-1 items-stretch gap-[22px] md:grid-cols-3"
              >
                {activeScreen.map((review, index) => (
                  <motion.article
                    key={`${screenIndex}-${review.name}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08, ease: EASE }}
                    className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/9 bg-ink-800 p-5 md:p-6"
                  >
                    <span
                      aria-hidden
                      className="absolute top-1.5 right-4 font-display text-5xl leading-none text-cyan-500/15"
                    >
                      ”
                    </span>
                    <StarRating rating={review.rating} />
                    <p className="relative flex-1 text-[0.92rem] leading-relaxed text-mist-300">
                      &ldquo;{review.description}&rdquo;
                    </p>
                    <div className="relative mt-3 flex items-center gap-2.5 border-t border-white/9 pt-3">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-[0.65rem] font-bold text-white"
                        style={{ backgroundColor: review.avatarColor }}
                        aria-hidden
                      >
                        {review.initials}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[0.88rem] font-bold text-white">
                          {review.name}
                        </p>
                        <span className="mt-0.5 inline-flex rounded-full border border-cyan-500/20 bg-brand-600/40 px-2 py-px text-[0.65rem] text-cyan-400">
                          {review.tag}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {screens.length > 1 && (
            <div
              className="flex items-center justify-center gap-2"
              role="tablist"
              aria-label="Review screens"
            >
              {screens.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === screenIndex}
                  aria-label={`Show reviews group ${i + 1}`}
                  onClick={() => setScreenIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === screenIndex
                      ? "w-7 bg-cyan-500"
                      : "w-2 bg-white/15 hover:bg-white/30"
                  )}
                />
              ))}
            </div>
          )}
        </div>

        <MidCta label="Get Results Like These" sub="Book your free strategy call." />
      </Container>
    </section>
  );
}
