"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { educationClients } from "@/content/funnel";
import { cn } from "@/lib/utils";

function LogoRow({
  hidden,
}: {
  hidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 px-5 sm:gap-14"
      aria-hidden={hidden || undefined}
    >
      {educationClients.map((client) => (
        <div
          key={`${hidden ? "dup-" : ""}${client.name}`}
          className="flex h-12 w-[148px] shrink-0 items-center justify-center sm:h-14"
        >
          <Image
            src={client.logo}
            alt={hidden ? "" : client.name}
            width={160}
            height={56}
            className="h-10 w-auto max-w-[148px] object-contain opacity-80 sm:h-11"
          />
        </div>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Education institutes we work with"
      className="relative overflow-hidden border-b border-white/9 bg-ink-900 py-8 sm:py-10"
    >
      <p className="mb-5 text-center text-[0.72rem] font-semibold tracking-[0.18em] text-mist-500 uppercase">
        Trusted by education institutes
      </p>
      {reduceMotion ? (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6">
          {educationClients.map((client) => (
            <div
              key={client.name}
              className="flex h-12 w-[140px] items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={56}
                className="h-10 w-auto max-w-[140px] object-contain opacity-80"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="marquee-mask">
          <div
            className={cn(
              "flex w-max items-center hover:[animation-play-state:paused]",
              "animate-marquee-slow"
            )}
          >
            <LogoRow />
            <LogoRow hidden />
          </div>
        </div>
      )}
    </section>
  );
}
