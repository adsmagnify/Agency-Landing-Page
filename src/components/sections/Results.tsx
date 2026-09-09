import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { MidCta } from "@/components/sections/MidCta";
import { proofPlatforms, results } from "@/content/funnel";

export function Results() {
  return (
    <Section id="results" glow="gold" className="bg-ink-900">
      <SectionHeading
        align="center"
        eyebrow="The Numbers"
        title="Real institutes. Real enrollments."
        description="Every figure below is pulled from a live client dashboard."
      />

      <StaggerGroup className="relative grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((item) => (
          <StaggerItem key={item.cap}>
            <article className="card-surface relative flex h-full min-h-[13.5rem] flex-col overflow-hidden p-6 sm:p-8">
              <span
                aria-hidden
                className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-brand-400"
              />
              <p className="font-display text-[2.4rem] leading-none font-extrabold text-cyan-500 sm:text-[2.7rem]">
                {item.value}
              </p>
              <p className="mt-4 font-medium text-white">{item.cap}</p>
              <p className="mt-2 text-[0.8rem] text-mist-500">{item.ctx}</p>
              <p className="mt-1.5 text-sm text-mist-500">{item.sub}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="rounded-2xl border border-white/9 bg-ink-800 px-6 py-8 text-center sm:px-10">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2.5">
          {proofPlatforms.map((platform) => (
            <span
              key={platform}
              className="rounded-full border border-white/9 bg-ink-900 px-3.5 py-1.5 text-[0.8rem] text-mist-300"
            >
              {platform}
            </span>
          ))}
        </div>
        <p className="mx-auto max-w-[62ch] text-[0.88rem] text-mist-500">
          Every number is verified from a live Meta, Google, GA4, or Nirikshan
          dashboard. Screenshots shared with client permission; sensitive
          details blurred for privacy.
        </p>
      </div>

      <MidCta
        label="Book My Free Strategy Call"
        sub="3 spots left this intake."
      />
    </Section>
  );
}
