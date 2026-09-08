import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { MidCta } from "@/components/sections/MidCta";
import { solutionSteps } from "@/content/funnel";

export function Solution() {
  return (
    <Section id="solution" className="relative overflow-hidden bg-brand-50/40" border>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

      <SectionHeading
        align="center"
        eyebrow="The System"
        title={
          <>
            How the{" "}
            <span className="text-brand-600">Student Acquisition Funnel</span>{" "}
            actually works
          </>
        }
        description="Not more leads at a higher spend. One system that turns ad spend into paid admissions, built around your deadline."
      />

      <StaggerGroup className="relative grid gap-4 sm:grid-cols-2 sm:gap-5">
        {solutionSteps.map((item, index) => (
          <StaggerItem key={item.title}>
            <article className="card-surface relative h-full overflow-hidden p-6 sm:p-8">
              <span
                aria-hidden
                className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-500 to-cyan-500"
              />
              <span
                aria-hidden
                className="absolute top-5 right-5 font-display text-5xl font-bold leading-none text-brand-500/12 sm:text-6xl"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mb-5 inline-block h-2.5 w-2.5 rounded-full bg-cyan-500" />
              <h3 className="relative pr-12 font-display text-lg font-semibold text-ink-950 sm:text-xl">
                {item.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-mist-400 sm:mt-4">
                {item.body}
              </p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 px-6 py-10 text-center sm:rounded-3xl sm:px-12 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl" />
        <p className="relative font-display text-lg font-semibold text-balance text-white sm:text-2xl">
          Result: fewer wasted leads. Fuller batches. A pipeline that
          doesn&apos;t collapse the moment the season ends.
        </p>
      </Reveal>

      <MidCta label="See If We’re A Fit" sub="Free 30-minute strategy call." />
    </Section>
  );
}
