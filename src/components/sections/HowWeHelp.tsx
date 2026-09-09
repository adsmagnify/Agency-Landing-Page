import {
  Crosshair,
  CalendarDays,
  Zap,
  BarChart3,
  GraduationCap,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MidCta } from "@/components/sections/MidCta";
import { cn } from "@/lib/utils";

const stages = [
  {
    num: "01",
    title: "Enrollment funnel build",
    description:
      "Positioning, funnel & landing page built to convert parents and students.",
    Icon: Crosshair,
    outcome: false,
  },
  {
    num: "02",
    title: "Deadline-timed campaigns",
    description: "Meta + Google on the One Campaign Method, timed to your intake.",
    Icon: CalendarDays,
    outcome: false,
  },
  {
    num: "03",
    title: "Response & follow-up",
    description: "Instant response + nurture so no serious student goes cold.",
    Icon: Zap,
    outcome: false,
  },
  {
    num: "04",
    title: "Tracking to admission",
    description: "Nirikshan ties every rupee of spend to a paid seat.",
    Icon: BarChart3,
    outcome: false,
  },
  {
    num: "★",
    title: "Full batch",
    description: "Paid enrollments, before the deadline closes.",
    Icon: GraduationCap,
    outcome: true,
  },
] as const;

export function HowWeHelp() {
  return (
    <Section glow="mesh" className="bg-ink-900">
      <SectionHeading
        align="center"
        eyebrow="How We Help"
        headingId="how-we-help"
        title="How Adsmagnify fills your batches"
        description="We're an agency first and an academy second, so we build the exact system we run for ourselves."
      />

      <div className="relative mt-9 grid grid-cols-1 items-stretch gap-0 max-md:mx-auto max-md:max-w-[420px] md:grid-cols-5 md:gap-[18px]">
        <span
          aria-hidden
          className="absolute z-0 rounded-sm max-md:top-10 max-md:bottom-10 max-md:left-10 max-md:h-auto max-md:w-[3px] max-md:bg-[linear-gradient(180deg,#2e7bea,#ffc619)] md:top-10 md:right-[9%] md:left-[9%] md:h-[3px] md:bg-[linear-gradient(90deg,#2e7bea_0%,#4f7fd0_55%,#ffc619_100%)]"
        />
        {stages.map((stage) => {
          const Icon = stage.Icon;
          return (
            <div
              key={stage.title}
              className="relative z-[1] grid h-full items-start gap-x-5 py-3.5 max-md:grid-cols-[80px_1fr] md:grid-rows-[auto_auto_1fr] md:text-center"
            >
              <div
                className={cn(
                  "relative z-[2] mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 max-md:row-span-2 max-md:mx-0",
                  stage.outcome
                    ? "border-cyan-500 bg-gradient-to-br from-cyan-500 to-cyan-400 shadow-[0_0_34px_rgba(255,198,25,.45)]"
                    : "border-brand-400 bg-ink-800"
                )}
              >
                <Icon
                  size={34}
                  strokeWidth={1.7}
                  className={stage.outcome ? "text-[#10203a]" : "text-brand-400"}
                  aria-hidden
                />
                <span
                  className={cn(
                    "absolute -top-2 -right-2 z-[3] flex h-[26px] w-[26px] items-center justify-center rounded-full border-[3px] border-ink-900 font-display text-[0.72rem] font-extrabold",
                    stage.outcome
                      ? "bg-[#111] text-[0.9rem] text-cyan-500"
                      : "bg-brand-400 text-white"
                  )}
                >
                  {stage.num}
                </span>
              </div>
              <h4
                className={cn(
                  "mt-[18px] mb-1.5 min-h-[2.6em] text-base font-semibold max-md:mt-0 max-md:min-h-0 max-md:self-end max-md:mb-0.5",
                  stage.outcome && "text-cyan-500"
                )}
              >
                {stage.title}
              </h4>
              <p className="mx-auto max-w-[22ch] text-[0.84rem] text-mist-500 max-md:max-w-none max-md:self-start">
                {stage.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="navy-band shine-clip relative mt-11 rounded-[20px] px-6 py-12 text-center sm:px-12">
        <p className="eyebrow mx-auto mb-3 justify-center">Guarantee</p>
        <h3 className="mx-auto max-w-[24ch] font-display text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold">
          The Full-Batch Guarantee
        </h3>
        <p className="mt-3.5 text-[1.25rem] font-semibold text-white">
          We&apos;ll deliver 80–120+ paid enrollments in 60 days, or we keep
          working free until we do.
        </p>
        <p className="mx-auto mt-3.5 max-w-[56ch] text-mist-300">
          Most agencies sell leads and disappear. We put the enrollments on the
          line. The risk sits with us, not you.*
        </p>
      </div>

      <MidCta
        label="Claim The Full-Batch Guarantee"
        sub="Only 8 institutes per intake."
      />
    </Section>
  );
}
