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
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "fill-cyan-500 text-cyan-500"
              : "fill-transparent text-mist-500/40"
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
    <section className="relative overflow-hidden border-y border-ink-950/8 bg-brand-50/40 section">
      <Container className="section-gap">
        <SectionHeading
          align="center"
          eyebrow="Success Stories"
          title="What clients say after Adsmagnify"
          description="Real feedback from brands we've helped grow."
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
                initial={
                  reduceMotion ? false : { opacity: 0, y: 12, filter: "blur(4px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={
                  reduceMotion
                    ? undefined
                    : { opacity: 0, y: -10, filter: "blur(4px)" }
                }
                transition={{ duration: 0.5, ease: EASE }}
                className="grid grid-cols-1 gap-6 md:grid-cols-3"
              >
                {activeScreen.map((review, index) => (
                  <motion.article
                    key={`${screenIndex}-${review.name}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08, ease: EASE }}
                    className={cn(
                      "flex h-full min-h-[17rem] flex-col gap-4 rounded-2xl border border-ink-950/8 bg-white p-6 shadow-sm sm:p-7",
                      !reduceMotion && "animate-review-border"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                        style={{ backgroundColor: review.avatarColor }}
                        aria-hidden
                      >
                        {review.initials}
                      </span>
                      <p className="text-sm font-semibold text-ink-950">
                        {review.name}
                      </p>
                    </div>
                    <StarRating rating={review.rating} />
                    <p className="text-sm leading-relaxed text-mist-300 sm:text-[0.9375rem]">
                      &ldquo;{review.description}&rdquo;
                    </p>
                    <span className="mt-auto inline-flex w-fit rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[0.65rem] font-medium tracking-wide text-brand-700 uppercase">
                      {review.tag}
                    </span>
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
                      : "w-2 bg-ink-950/15 hover:bg-ink-950/30"
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
