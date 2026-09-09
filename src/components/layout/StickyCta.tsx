"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { offerWindow } from "@/lib/constants";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const apply = document.getElementById("apply");

    function onScroll() {
      const pastHero = window.scrollY > 380;
      const applyTop = apply?.getBoundingClientRect().top ?? 9999;
      const applyInView = applyTop < window.innerHeight * 0.72;
      setVisible(pastHero && !applyInView);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-white/10 bg-[#070911]/95 px-4 py-3 shadow-[0_-12px_40px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <p className="min-w-0 flex-1 text-xs leading-snug text-mist-500">
          <span className="font-semibold text-white">
            {offerWindow.remaining} spots left
          </span>
          <span className="block">Free 30-min strategy call</span>
        </p>
        <Button href="#apply" variant="primary" size="nav" className="shrink-0">
          Book My Call
        </Button>
      </div>
    </div>
  );
}
