import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { offerStack } from "@/content/funnel";
import { offerWindow } from "@/lib/constants";

export function Programs() {
  return (
    <Section id="pricing" glow="gold">
      <SectionHeading
        align="center"
        eyebrow="Programs"
        title="Pick how we work together"
        description="From ad management to a fully done-for-you enrollment system."
      />

      <article className="gold-frame shine-clip mx-auto max-w-[660px] overflow-hidden rounded-[22px] border-2 border-cyan-500 bg-ink-800">
        <div className="navy-band px-6 py-9 text-center sm:px-10">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-block rounded-full bg-cyan-500 px-[15px] py-1.5 font-display text-[0.72rem] font-bold tracking-[0.06em] text-[#111] uppercase">
              Done-For-You
            </span>
            <span className="inline-block rounded-full border border-cyan-500/40 bg-black/25 px-[15px] py-1.5 font-display text-[0.72rem] font-bold tracking-[0.06em] text-cyan-400 uppercase">
              Limited intake
            </span>
          </div>
          <h3 className="font-display text-[clamp(1.6rem,3.4vw,2rem)] font-extrabold">
            The Student Acquisition Funnel
          </h3>
          <p className="mx-auto mt-2.5 max-w-[34ch] text-[1.05rem] text-cyan-400">
            One system that fills your batch with paid enrollments. You just teach.
          </p>
        </div>

        <div className="px-6 py-9 sm:px-10">
          <h4 className="mb-[18px] text-center text-base font-semibold text-white">
            Everything we build, run & manage for you
          </h4>
          <ul className="flex flex-col gap-[13px]">
            {offerStack.map((item) => (
              <li key={item} className="text-base text-mist-300">
                {item}
              </li>
            ))}
          </ul>

          <div className="my-7 rounded-[14px] border border-cyan-500/40 bg-[linear-gradient(135deg,rgba(255,198,25,.16),rgba(255,198,25,.04))] px-6 py-6 text-center">
            <p className="mb-2 font-display text-[1.1rem] font-extrabold text-cyan-500">
              The Full-Batch Guarantee
            </p>
            <p className="mx-auto max-w-[40ch] text-[1.06rem] font-semibold text-white">
              80–120+ paid enrollments in 60 days, or we keep working free until
              we do.
            </p>
          </div>

          <div className="text-center">
            <p className="mb-4 text-[0.92rem] text-mist-300">
              🔒 Only {offerWindow.capacity} institutes this intake ·{" "}
              <b className="text-cyan-500">{offerWindow.remaining} spots left</b>
            </p>
            <Button href="#apply" variant="primary" size="xl" pulse>
              Apply Now — Claim Your Spot →
            </Button>
            <p className="mt-3.5 text-[0.86rem] text-mist-500">
              No lock-in. No pitch. Free strategy call first.
            </p>
          </div>
        </div>
      </article>

      <div className="mt-11 flex flex-wrap items-center justify-center gap-[18px]">
        <p className="font-display text-[2.8rem] font-extrabold text-white">4.9</p>
        <div>
          <div className="tracking-[3px] text-cyan-500" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={18}
                className="inline fill-cyan-500 text-cyan-500"
                aria-hidden
              />
            ))}
          </div>
          <p className="mt-1 text-[0.88rem] text-mist-500">
            Rated on 9+ client reviews
          </p>
        </div>
      </div>
    </Section>
  );
}
