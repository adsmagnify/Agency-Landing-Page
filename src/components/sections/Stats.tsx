"use client";

import { Container } from "@/components/ui/Container";
import { stats } from "@/content/funnel";

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-cyan-500/20 bg-[linear-gradient(90deg,#07101f,#0c1a36_50%,#07101f)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent" />
      <Container className="grid grid-cols-2 p-0 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative border-white/9 px-5 py-8 text-center max-lg:odd:border-r lg:border-r lg:last:border-r-0"
          >
            <p className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] leading-none font-extrabold text-cyan-500">
              {stat.value}
            </p>
            <p className="mt-2.5 text-[0.86rem] text-mist-400">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
