"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { OfferBar } from "@/components/layout/OfferBar";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));

    function updateActive() {
      const probe = 160;
      const first = document.getElementById(ids[0]);
      if (first && first.getBoundingClientRect().top > probe + 48) {
        setActiveHash("");
        return;
      }

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= probe) current = id;
      }
      setActiveHash(`#${current}`);
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    }

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="sticky inset-x-0 top-0 z-50">
      <OfferBar />
      <div
        className={cn(
          "border-b border-white/9 transition-all duration-300",
          scrolled || open
            ? "bg-[#070911]/90 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)] backdrop-blur-[10px]"
            : "bg-[#070911]/90 backdrop-blur-[10px]"
        )}
      >
        <Container className="flex h-[68px] items-center justify-between gap-5">
          <a
            href="#top"
            aria-label={siteConfig.name}
            className="flex shrink-0 items-center"
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

          <nav className="hidden items-center gap-[26px] text-[0.93rem] lg:flex">
            {navLinks.map((link) => {
              const active = activeHash === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className={cn(
                    "relative py-2 transition-colors hover:text-cyan-500",
                    active ? "text-cyan-500" : "text-mist-300"
                  )}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-cyan-500"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="#apply" variant="primary" size="nav">
              Apply Now
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </Container>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-b border-white/9 bg-ink-950 lg:hidden"
            >
              <Container className="flex max-h-[min(70dvh,32rem)] flex-col gap-1 overflow-y-auto py-4">
                {navLinks.map((link) => {
                  const active = activeHash === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setActiveHash(link.href);
                        setOpen(false);
                      }}
                      className={cn(
                        "rounded-lg border-l-2 px-3 py-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-cyan-500",
                        active
                          ? "border-cyan-500 bg-white/5 text-cyan-500"
                          : "border-transparent text-mist-300"
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <div className="mt-2">
                  <Button
                    href="#apply"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Apply Now
                  </Button>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
