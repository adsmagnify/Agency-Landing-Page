import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { MidCta } from "@/components/sections/MidCta";
import { problems } from "@/content/funnel";

export function Problem() {
  return (
    <Section id="problem" glow="navy">
      <div className="relative grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        <div className="lg:sticky lg:top-36">
          <SectionHeading
            eyebrow="The Problem"
            title="Why institutes with real student outcomes stay stuck with empty batches and rising ad costs"
          />
        </div>

        <StaggerGroup className="relative flex flex-col">
          <span
            aria-hidden
            className="pointer-events-none absolute top-4 bottom-4 left-[1.35rem] w-px bg-white/10 sm:left-[1.4rem]"
          >
            <span className="absolute left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-500 to-brand-400 animate-divider-travel" />
          </span>
          {problems.map((reason) => (
            <StaggerItem key={reason.num}>
              <article className="group relative flex gap-4 rounded-2xl py-5 pr-2 pl-0 transition-colors duration-300 hover:bg-white/[0.03] sm:gap-5 sm:pr-4">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-[1.05rem] font-extrabold text-white ring-4 ring-ink-950 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-[#111]">
                  {reason.num}
                </span>
                <div className="min-w-0 pt-1">
                  <h3 className="mb-2 text-[1.2rem] font-semibold">{reason.title}</h3>
                  <p className="text-base text-mist-500">{reason.body}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <div className="relative grid overflow-hidden rounded-2xl border border-white/9 sm:grid-cols-2">
        <article className="bg-ink-800 p-7 sm:p-8">
          <h4 className="mb-3 text-[1.15rem] font-semibold">Where you are right now</h4>
          <p className="text-[0.98rem] text-mist-500">
            Paying ₹45–50k/month for leads, watching CPL climb every
            off-season, and starting each intake half empty while nobody&apos;s
            accountable for whether a student actually enrolls.
          </p>
        </article>
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-950 font-display text-[0.68rem] font-bold tracking-[0.12em] text-white sm:flex"
        >
          VS
        </div>
        <article className="relative border-t border-signal/25 bg-[linear-gradient(160deg,rgba(255,90,90,.16),rgba(255,90,90,.03))] p-7 sm:border-t-0 sm:border-l sm:p-8">
          <h4 className="mb-3 text-[1.15rem] font-semibold text-signal">
            What this costs you long-term
          </h4>
          <p className="text-[0.98rem] text-mist-500">
            Every unfilled seat is revenue gone for good. Every slow follow-up
            is a paid lead handed to a competitor. Over a year, a leaking funnel
            quietly costs you more than a full agency retainer.
          </p>
        </article>
      </div>

      <MidCta
        label="Book My Free Strategy Call"
        sub="No pitch. We show you where the money leaks."
      />
    </Section>
  );
}
