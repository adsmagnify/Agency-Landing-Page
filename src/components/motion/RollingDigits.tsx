"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const CYCLES = 2;
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const REEL = Array.from({ length: (CYCLES + 1) * 10 }, (_, i) => i % 10);

function DigitReel({
  digit,
  delay,
  active,
}: {
  digit: number;
  delay: number;
  active: boolean;
}) {
  const targetIndex = CYCLES * 10 + digit;

  return (
    <span className="relative inline-block h-[1em] w-[0.7em] overflow-hidden align-[-0.08em]">
      <motion.span
        className="flex flex-col items-center will-change-transform"
        initial={{ y: "0em" }}
        animate={{ y: active ? `${-targetIndex}em` : "0em" }}
        transition={{
          duration: active ? 1.55 : 0,
          delay: active ? delay : 0,
          ease: EASE,
        }}
      >
        {REEL.map((n, i) => (
          <span
            key={i}
            className="flex h-[1em] w-full shrink-0 items-center justify-center leading-none"
          >
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export function RollingDigits({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion === true;
  const shouldSpin = isInView && !reduceMotion;

  const chars = useMemo(() => Array.from(value), [value]);
  let digitIndex = 0;

  if (reduceMotion) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref} className="inline-flex items-baseline tabular-nums">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="inline-flex items-baseline">
        {chars.map((char, i) => {
          if (char >= "0" && char <= "9") {
            const delay = digitIndex * 0.1;
            digitIndex += 1;
            return (
              <DigitReel
                key={`${char}-${i}`}
                digit={Number(char)}
                delay={delay}
                active={shouldSpin}
              />
            );
          }

          return (
            <span key={`${char}-${i}`} className="whitespace-pre">
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
