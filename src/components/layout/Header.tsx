"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [activeHash]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <OfferBar />
      <div
        className={cn(
          "transition-all duration-300",
          scrolled || open
            ? "border-b border-ink-950/8 bg-white/90 shadow-sm backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-14 items-center justify-between gap-3 py-3 sm:h-16 sm:py-4">
          <Link
            href="#top"
            aria-label={siteConfig.name}
            className="flex shrink-0 items-center"
          >
            <Image
              src="/logo-nav-mark.png"
              alt={siteConfig.name}
              width={186}
              height={46}
              priority
              className="h-7 w-auto sm:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = activeHash === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors hover:text-ink-950",
                    active ? "text-ink-950" : "text-mist-400"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="#apply" variant="primary" showArrow>
              Apply Now
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-950/10 text-ink-950 lg:hidden"
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
              className="overflow-hidden border-b border-ink-950/8 bg-white/95 lg:hidden"
            >
              <Container className="flex max-h-[min(70dvh,32rem)] flex-col gap-1 overflow-y-auto py-4">
                {navLinks.map((link) => {
                  const active = activeHash === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg border-l-2 px-3 py-3 text-sm font-medium transition-colors hover:bg-ink-950/5 hover:text-ink-950",
                        active
                          ? "border-brand-500 bg-ink-950/5 text-ink-950"
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
                    showArrow
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
