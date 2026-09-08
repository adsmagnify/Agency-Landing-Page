import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RollingDigits } from "@/components/motion/RollingDigits";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { MidCta } from "@/components/sections/MidCta";
import { results } from "@/content/funnel";

export function Results() {
  return (
    <Section id="results" className="relative overflow-hidden bg-paper-alt" border>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

      <SectionHeading
        align="center"
        eyebrow="The Numbers"
        title="Real institutes. Real enrollments."
        description="Documented results from education and academy work, plus the agency-wide numbers behind the system."
      />

      <StaggerGroup className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((item) => (
          <StaggerItem key={item.cap}>
            <article className="card-surface relative h-full overflow-hidden p-6 sm:p-8">
              <span
                aria-hidden
                className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-500 to-cyan-500"
              />
              <p className="font-display text-3xl font-semibold text-brand-600 sm:text-4xl">
                <RollingDigits value={item.value} />
              </p>
              <p className="mt-5 font-medium text-ink-950">{item.cap}</p>
              <p className="mt-1.5 text-sm text-mist-500">{item.sub}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <MidCta
        label="Book My Free Strategy Call"
        sub="3 spots left this intake."
      />
    </Section>
  );
}
