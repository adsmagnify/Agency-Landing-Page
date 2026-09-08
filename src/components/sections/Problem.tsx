import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { MidCta } from "@/components/sections/MidCta";
import { problems } from "@/content/funnel";

export function Problem() {
  return (
    <Section id="problem" border>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
        <div className="flex flex-col gap-7 lg:sticky lg:top-36">
          <SectionHeading
            eyebrow="The Problem"
            title="Why institutes with real student outcomes stay stuck with empty batches and rising ad costs"
          />

          <div className="grid gap-4">
            <Reveal className="rounded-2xl border border-brand-100 bg-brand-50/80 p-6 sm:p-7">
              <h4 className="font-display text-lg font-semibold text-ink-950">
                Where you are right now
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-mist-400">
                Paying ₹45–50k/month for leads, watching CPL climb every
                off-season, and starting each intake half empty while
                nobody&apos;s accountable for whether a student actually enrolls.
              </p>
            </Reveal>
            <Reveal
              delay={0.08}
              className="rounded-2xl border border-red-200 bg-red-50/70 p-6 sm:p-7"
            >
              <h4 className="font-display text-lg font-semibold text-red-700">
                What this costs you long-term
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-mist-400">
                Every unfilled seat is revenue gone for good. Every slow
                follow-up is a paid lead handed to a competitor. Over a year, a
                leaking funnel quietly costs you more than a full agency
                retainer.
              </p>
            </Reveal>
          </div>
        </div>

        <StaggerGroup className="relative flex flex-col">
          <span
            aria-hidden
            className="pointer-events-none absolute top-6 bottom-6 left-[1.35rem] w-px overflow-hidden bg-ink-950/8 sm:left-[1.6rem]"
          >
            <span className="absolute left-1/2 h-20 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-500 to-cyan-400 animate-divider-travel" />
          </span>
          {problems.map((reason) => (
            <StaggerItem key={reason.num}>
              <article className="relative flex gap-4 py-3.5 sm:gap-5 sm:py-4">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-400 font-display text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(0,74,173,0.55)] ring-4 ring-paper">
                  {reason.num}
                </span>
                <div className="card-surface min-w-0 flex-1 p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold text-ink-950 sm:text-xl">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400 sm:text-[0.95rem]">
                    {reason.body}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <MidCta
        label="Book My Free Strategy Call"
        sub="No pitch. We show you where the money leaks."
      />
    </Section>
  );
}
