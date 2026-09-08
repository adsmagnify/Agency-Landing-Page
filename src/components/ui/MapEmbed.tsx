"use client";

import { useState } from "react";
import { MapPin, X } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MapEmbedVariant = "dark" | "light";

export function MapEmbed({ variant = "light" }: { variant?: MapEmbedVariant }) {
  const [isInteractive, setIsInteractive] = useState(false);
  const isDark = variant === "dark";

  const mapContent = (
    <div
      className={cn(
        "relative overflow-hidden",
        isDark
          ? "min-h-[240px] rounded-[1.35rem] bg-ink-950 lg:min-h-[280px]"
          : "h-full min-h-[280px] rounded-[1.35rem] bg-white lg:min-h-[360px]"
      )}
    >
      <iframe
        src={siteConfig.contact.mapEmbedUrl}
        className={cn(
          "h-full w-full",
          isDark
            ? "absolute inset-0 min-h-[240px] lg:min-h-[280px]"
            : "absolute inset-0",
          isInteractive ? "pointer-events-auto" : "pointer-events-none"
        )}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Adsmagnify office — G12 Pil Court, Churchgate, Mumbai"
        allowFullScreen
      />

      {!isInteractive ? (
        <button
          type="button"
          onClick={() => setIsInteractive(true)}
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-2 text-white transition-colors lg:hidden",
            isDark
              ? "bg-ink-900/75 hover:bg-ink-900/85"
              : "bg-ink-950/75 hover:bg-ink-950/85"
          )}
          aria-label="Tap to interact with map"
        >
          <MapPin
            size={20}
            className={isDark ? "text-brand-400" : "text-cyan-400"}
            aria-hidden
          />
          <span className="text-sm font-medium">Tap to interact with map</span>
        </button>
      ) : null}

      {isInteractive ? (
        <button
          type="button"
          onClick={() => setIsInteractive(false)}
          className={cn(
            "absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border text-white/80 transition-colors hover:text-white lg:hidden",
            isDark
              ? "border-white/10 bg-ink-900/90 hover:border-brand-400/50"
              : "border-white/20 bg-ink-950/90"
          )}
          aria-label="Close map interaction"
        >
          <X size={14} aria-hidden />
        </button>
      ) : null}

      <span
        className={cn(
          "pointer-events-none absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm",
          isDark
            ? "border border-white/10 bg-ink-900/80 text-white/90"
            : "border border-ink-950/10 bg-white/90 text-ink-950"
        )}
      >
        Churchgate, Mumbai
      </span>
    </div>
  );

  if (isDark) {
    return (
      <div className="gradient-frame overflow-hidden rounded-2xl p-px shadow-[0_20px_50px_-28px_rgba(0,74,173,0.35)] lg:rounded-3xl">
        {mapContent}
      </div>
    );
  }

  return (
    <div className="gradient-frame h-full overflow-hidden rounded-3xl p-px shadow-[0_20px_50px_-28px_rgba(0,74,173,0.4)]">
      {mapContent}
    </div>
  );
}
