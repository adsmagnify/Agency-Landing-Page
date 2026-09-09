import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FunnelGraphic } from "@/components/ui/FunnelGraphic";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { MidCta } from "@/components/sections/MidCta";
import { solutionSteps } from "@/content/funnel";

export function Solution() {
  return (
    <Section id="solution" glow="mesh" className="bg-ink-900">
      <SectionHeading
        align="center"
        eyebrow="The System"
        title={
          <>
            How the <span className="text-cyan-500">Student Acquisition Funnel</span>{" "}
            actually works
          </>
        }
        description="Not more leads at a higher spend. One system that turns ad spend into paid admissions, built around your deadline."
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <FunnelGraphic />
        </Reveal>

        <StaggerGroup className="flex flex-col gap-5">
          {solutionSteps.map((item, index) => (
            <StaggerItem key={item.title}>
              <article className="card-surface relative flex h-full min-h-[8.75rem] gap-4 overflow-hidden p-5 sm:p-6">
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-cyan-500/80 to-brand-400/40"
                />
                <span className="font-display text-2xl font-extrabold leading-none text-cyan-500/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h4 className="mb-1.5 text-[1.15rem] font-semibold">{item.title}</h4>
                  <p className="text-base text-mist-500">{item.body}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <Reveal className="navy-band shine-clip mx-auto max-w-[860px] rounded-[14px] px-6 py-7 text-center font-display text-[1.15rem] font-semibold text-white">
        Result: fewer wasted leads. Fuller batches. A pipeline that doesn&apos;t
        collapse the moment the season ends.
      </Reveal>

      <MidCta label="See If We’re A Fit" sub="Free 30-minute strategy call." />
    </Section>
  );
}
