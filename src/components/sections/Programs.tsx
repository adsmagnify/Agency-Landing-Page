import { Check, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { programs } from "@/content/funnel";
import { cn } from "@/lib/utils";

export function Programs() {
  return (
    <Section id="pricing">
      <SectionHeading
        align="center"
        eyebrow="Programs"
        title="Pick how we work together"
        description="From ad management to a fully done-for-you enrollment system."
      />

      <StaggerGroup className="grid items-stretch gap-5 lg:grid-cols-3 lg:items-center lg:gap-6">
        {programs.map((tier) => (
          <StaggerItem key={tier.name}>
            <article
              className={cn(
                "relative flex h-full flex-col p-7 sm:p-8",
                tier.featured
                  ? "z-10 rounded-3xl border-2 border-cyan-400 bg-white glow-ring lg:-translate-y-3 lg:px-8 lg:py-11"
                  : "card-surface"
              )}
            >
              {tier.featured && (
                <span className="mb-5 inline-flex w-fit rounded-full bg-cyan-500 px-3 py-1 text-[0.65rem] font-bold tracking-wide text-ink-950 uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold text-ink-950">
                {tier.name}
              </h3>
              <p className="mt-1.5 text-sm text-mist-500">{tier.for}</p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-mist-400">
                {tier.desc}
              </p>
              <ul className="mt-7 flex flex-col gap-3.5">
                {tier.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-snug text-ink-950"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-cyan-500"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href={tier.href}
                  variant={tier.featured ? "primary" : "secondary"}
                  showArrow={tier.featured}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-5">
        <p className="font-display text-5xl font-semibold text-ink-950">4.9</p>
        <div>
          <div
            className="flex items-center gap-0.5"
            aria-label="4.9 out of 5 stars"
          >
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-cyan-500 text-cyan-500"
                aria-hidden
              />
            ))}
          </div>
          <p className="mt-1 text-sm text-mist-500">Rated on 9+ client reviews</p>
        </div>
      </div>
    </Section>
  );
}
