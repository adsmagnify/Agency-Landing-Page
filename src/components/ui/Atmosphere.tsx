"use client";

import { cn } from "@/lib/utils";

export function Atmosphere({
  tone = "navy",
}: {
  tone?: "navy" | "gold" | "mesh";
}) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-50" />
      {tone === "navy" && (
        <>
          <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/22 blur-[110px]" />
          <div className="pointer-events-none absolute right-[-10%] bottom-[-8rem] h-56 w-56 rounded-full bg-brand-400/15 blur-[90px]" />
        </>
      )}
      {tone === "gold" && (
        <>
          <div className="pointer-events-none absolute top-0 left-1/2 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/14 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-[-5rem] left-[12%] h-40 w-40 rounded-full bg-brand-500/18 blur-[80px]" />
        </>
      )}
      {tone === "mesh" && (
        <>
          <div className="pointer-events-none absolute -top-16 right-[-8%] h-72 w-72 rounded-full bg-brand-400/22 blur-[90px] sm:animate-drift-secondary" />
          <div className="pointer-events-none absolute bottom-[-6rem] left-[8%] h-64 w-64 rounded-full bg-cyan-500/12 blur-[90px] sm:animate-drift-slow" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-500/10 blur-[70px]" />
        </>
      )}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-grid opacity-25",
          "[mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
        )}
      />
    </>
  );
}
