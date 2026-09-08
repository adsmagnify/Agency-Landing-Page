import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Reveal } from "@/components/motion/Reveal";
import { MidCta } from "@/components/sections/MidCta";
import { systemSteps } from "@/content/funnel";

export function HowWeHelp() {
  return (
    <Section className="bg-brand-50/40" border>
      <SectionHeading
        align="center"
        eyebrow="How We Help"
        headingId="how-we-help"
        title="How Adsmagnify fills your batches"
        description="We're an agency first and an academy second, so we build the exact system we run for ourselves."
      />

      <ProcessTimeline steps={[...systemSteps]} headingId="how-we-help" />

      <Reveal className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 px-6 py-12 text-center shadow-xl sm:rounded-3xl sm:px-16 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative flex flex-col items-center gap-6">
          <h3 className="headline-2 max-w-3xl text-white">
            The Full-Batch Guarantee
          </h3>
          <p className="max-w-2xl text-lg font-medium text-white sm:text-xl">
            We&apos;ll deliver the enrollments we commit to on the strategy call
            within{" "}
            <span className="bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              60 days
            </span>
            , or we keep working free until we do.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            Most agencies sell leads and disappear. We put the enrollments on
            the line. The risk sits with us, not you.*
          </p>
        </div>
      </Reveal>

      <MidCta
        label="Claim The Full-Batch Guarantee"
        sub="Only 8 institutes per intake."
      />
    </Section>
  );
}
