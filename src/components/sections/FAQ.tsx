"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/funnel";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="bg-brand-50/40" border>
      <SectionHeading
        align="center"
        eyebrow="Quick Answers"
        title="Everything institute owners ask before applying"
      />

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = open === index;
          return (
            <div
              key={faq.question}
              className={cn(
                "overflow-hidden rounded-2xl border bg-white shadow-sm transition-[border-color,box-shadow] duration-300",
                isOpen
                  ? "border-brand-500/25 shadow-[0_18px_50px_-32px_rgba(0,74,173,0.28)]"
                  : "border-ink-950/8 hover:border-brand-500/20"
              )}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="font-display text-sm font-semibold text-ink-950 sm:text-base">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-brand-600 transition-all duration-300",
                    isOpen
                      ? "rotate-45 border-brand-500/30 bg-brand-50"
                      : "border-ink-950/10"
                  )}
                >
                  <Plus size={16} />
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-6 text-sm leading-relaxed text-mist-400 sm:px-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
