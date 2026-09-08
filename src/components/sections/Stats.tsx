"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RollingDigits } from "@/components/motion/RollingDigits";
import { stats } from "@/content/funnel";

const ease = [0.22, 1, 0.36, 1] as const;

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-brand-600 bg-brand-500 section-band">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
      <Container>
        <motion.div
          className="grid grid-cols-2 gap-y-10 sm:gap-8 lg:grid-cols-4 lg:divide-x lg:divide-white/15"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
              }}
              className="flex flex-col items-center gap-3 px-2 text-center lg:px-6"
            >
              <span className="font-display text-3xl font-semibold leading-none text-cyan-500 sm:text-4xl lg:text-5xl">
                <RollingDigits value={stat.value} />
              </span>
              <span className="max-w-[16ch] text-xs leading-snug text-cyan-300 sm:text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
