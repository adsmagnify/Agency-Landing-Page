import {
  Globe2,
  MessageSquareText,
  Landmark,
  Atom,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { MidCta } from "@/components/sections/MidCta";
import { niches, qualifications } from "@/content/funnel";

const nicheIcons = {
  abroad: Globe2,
  language: MessageSquareText,
  upsc: Landmark,
  jee: Atom,
  cat: Briefcase,
  skill: GraduationCap,
} as const;

export function WhoItsFor() {
  return (
    <Section id="who">
      <SectionHeading
        align="center"
        eyebrow="Who It's For"
        title="Built for education institutes ready to fill every batch"
        description="We work specifically with institutes moving from scattered lead-gen to a predictable enrollment system."
      />

      <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
        {niches.map((niche) => {
          const Icon = nicheIcons[niche.key];
          return (
            <StaggerItem key={niche.key}>
              <article className="card-surface group flex h-full min-h-[8.75rem] flex-col items-center justify-center gap-3.5 px-4 py-6 text-center sm:min-h-[10rem] sm:gap-4 sm:px-5 sm:py-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon size={24} aria-hidden />
                </span>
                <span className="text-sm font-medium leading-snug text-ink-950 sm:text-[0.95rem]">
                  {niche.label}
                </span>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      <StaggerGroup className="grid gap-4 sm:grid-cols-2 sm:gap-5" delay={0.12}>
        {qualifications.map((item, index) => (
          <StaggerItem key={item.title}>
            <article className="card-surface relative h-full overflow-hidden p-6 sm:p-8">
              <span
                aria-hidden
                className="absolute top-5 right-5 font-display text-4xl font-bold leading-none text-brand-500/10 sm:text-5xl"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="relative max-w-[22ch] font-display text-lg font-semibold text-ink-950 sm:text-xl">
                {item.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-mist-400 sm:mt-4">
                {item.body}
              </p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <MidCta label="This Sounds Like Me →" sub="Apply for your next intake." />
    </Section>
  );
}
