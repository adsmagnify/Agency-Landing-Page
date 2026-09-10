"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHash } from "@/lib/scroll";

function inPageHashFromAnchor(anchor: HTMLAnchorElement) {
  const raw = anchor.getAttribute("href");
  if (!raw) return null;
  if (raw.startsWith("#")) return raw;
  if (raw.startsWith("/#")) {
    if (window.location.pathname === "/") return raw.slice(1);
    return null;
  }

  try {
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin) return null;
    if (url.pathname !== window.location.pathname) return null;
    return url.hash || null;
  } catch {
    return null;
  }
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented) return;
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const hash = inPageHashFromAnchor(anchor);
      if (!hash) return;

      event.preventDefault();
      scrollToHash(hash);
    }

    document.addEventListener("click", onClick, true);

    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }

    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return null;
}
