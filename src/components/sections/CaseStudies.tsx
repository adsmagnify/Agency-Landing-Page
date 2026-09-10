import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { MidCta } from "@/components/sections/MidCta";
import { caseStudies } from "@/content/case-studies";

export function CaseStudies() {
  return (
    <Section id="cases" glow="navy" className="bg-ink-900">
      <SectionHeading
        align="center"
        eyebrow="Case Studies"
        title="Live dashboards. Real enrollments."
        description="Four student-acquisition engagements, with the campaign screenshot and the numbers behind it."
      />

      <StaggerGroup className="grid items-stretch gap-5 sm:grid-cols-2">
        {caseStudies.map((study) => (
          <StaggerItem key={study.slug}>
            <article className="card-surface flex h-full flex-col overflow-hidden p-0">
              <Link
                href={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col"
              >
                <div className="relative aspect-[3/1] bg-white">
                  <Image
                    src={study.thumb}
                    alt={`${study.client} campaign dashboard`}
                    fill
                    className="object-contain p-2 sm:p-3"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[0.72rem] font-medium tracking-[0.08em] text-cyan-500 uppercase">
                    {study.tag}
                  </p>
                  <h3 className="mt-1.5 font-display text-[1.2rem] font-extrabold text-white">
                    {study.client}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-mist-300">
                    {study.title}
                  </p>
                  <p className="mt-4 font-display text-[1.05rem] font-bold text-cyan-500">
                    {study.result}
                    <span className="mx-2 text-white/25">·</span>
                    {study.metric}
                  </p>
                  <p className="mt-1.5 text-[0.82rem] text-mist-500">
                    {study.detail}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-white group-hover:text-cyan-500">
                    Read the case study
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <MidCta
        label="Book My Free Strategy Call"
        sub="We'll show you the same funnel, built for your next intake."
      />
    </Section>
  );
}
