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
    <Section id="who" glow="gold">
      <SectionHeading
        align="center"
        eyebrow="Who It's For"
        title="Built for education institutes ready to fill every batch"
        description="We work specifically with institutes moving from scattered lead-gen to a predictable enrollment system."
      />

      <StaggerGroup className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {niches.map((niche) => {
          const Icon = nicheIcons[niche.key];
          return (
            <StaggerItem key={niche.key}>
              <article className="group card-surface flex h-full min-h-[9.25rem] flex-col items-center justify-center px-3.5 py-5 text-center">
                <span className="mb-3 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-brand-600/45 text-cyan-500 transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-[#111]">
                  <Icon size={24} strokeWidth={1.8} aria-hidden />
                </span>
                <span className="block min-h-[2.4em] text-[0.86rem] leading-snug font-medium text-mist-300">
                  {niche.label}
                </span>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      <StaggerGroup className="grid items-stretch gap-5 sm:grid-cols-2" delay={0.12}>
        {qualifications.map((item, index) => (
          <StaggerItem key={item.title}>
            <article className="card-surface relative flex h-full min-h-[11.75rem] flex-col overflow-hidden p-[26px]">
              <span
                aria-hidden
                className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-500/70 to-transparent"
              />
              <span
                aria-hidden
                className="absolute top-3 right-4 font-display text-5xl font-extrabold leading-none text-white/5"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="relative mb-2.5 max-w-[22ch] text-[1.08rem] font-semibold">
                {item.title}
              </h4>
              <p className="relative text-[0.96rem] text-mist-500">{item.body}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <MidCta label="This Sounds Like Me →" sub="Apply for your next intake." />
    </Section>
  );
}
