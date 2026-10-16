"use client";

import { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Lock } from "lucide-react";
import { offerWindow, siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { useOfferCountdown } from "@/components/layout/OfferBar";

export function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const remaining = useOfferCountdown();
  const timer = remaining.ready ? remaining.label : "00d 00:00:00";

  useEffect(() => {
    const header = document.querySelector("header");
    function syncOffset() {
      const height = (header?.getBoundingClientRect().height ?? 0) + 8;
      document.documentElement.style.setProperty("--header-offset", `${height}px`);
    }
    syncOffset();
    window.addEventListener("resize", syncOffset);
    return () => window.removeEventListener("resize", syncOffset);
  }, []);

  return (
    <header className="sticky inset-x-0 top-0 z-50 isolate">
      <div className="relative border-b border-cyan-500/20 bg-[#070911]/92 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        <Container className="relative flex min-h-14 flex-col items-center justify-center py-2.5 sm:min-h-[4.25rem] sm:py-3">
          <a
            href={onHome ? "#top" : "/"}
            aria-label={siteConfig.name}
            className="mb-2 flex shrink-0 items-center sm:absolute sm:top-1/2 sm:left-6 sm:mb-0 sm:-translate-y-1/2"
          >
            <Image
              src="/logo-footer.png"
              alt={siteConfig.name}
              width={186}
              height={46}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </a>

          <div className="inline-flex max-w-[calc(100%-0.5rem)] items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-brand-600/35 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,198,25,0.12)] sm:gap-2.5 sm:px-4">
            <Lock size={12} className="shrink-0 text-cyan-500" aria-hidden />
            <p
              className="flex min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-[0.7rem] text-mist-300 sm:text-[0.78rem]"
              aria-live="polite"
            >
              <span className="tracking-[0.12em] text-mist-400 uppercase">
                Closes
              </span>
              <b className="font-display text-[0.82rem] font-extrabold tabular-nums text-cyan-500 sm:text-[0.92rem]">
                {timer}
              </b>
              <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden />
              <span className="text-center">
                Only {offerWindow.capacity} institutes this intake ·{" "}
                <b className="font-semibold text-cyan-500">
                  {offerWindow.remaining} spots left
                </b>{" "}
                ({offerWindow.filled} filled)
              </span>
            </p>
          </div>
        </Container>
      </div>
    </header>
  );
}
