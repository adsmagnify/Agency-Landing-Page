"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/funnel";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" glow="navy" className="bg-ink-900">
      <SectionHeading
        align="center"
        eyebrow="Quick Answers"
        title="Everything institute owners ask before applying"
      />

      <div className="relative mx-auto flex w-full max-w-[820px] flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = open === index;
          return (
            <div
              key={faq.question}
              className={cn(
                "overflow-hidden rounded-xl border bg-ink-800 transition-[border-color,box-shadow] duration-300",
                isOpen
                  ? "border-cyan-500/40 shadow-[0_16px_50px_-28px_rgba(255,198,25,0.35)]"
                  : "border-white/9 hover:border-white/16"
              )}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-6 py-[22px] text-left"
              >
                <span className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 font-display text-[0.8rem] font-bold text-cyan-500/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base font-semibold text-white">
                    {faq.question}
                  </span>
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 font-display text-xl leading-none text-cyan-500">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-[22px] pl-[3.35rem] text-mist-500">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
