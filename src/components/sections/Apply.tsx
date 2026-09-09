import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { offerWindow, siteConfig } from "@/lib/constants";

export function Apply() {
  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-[radial-gradient(90%_130%_at_50%_0%,rgba(0,60,138,.5),transparent_60%)] section scroll-mt-32 sm:scroll-mt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
      <Container className="relative section-gap">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="headline-2 mx-auto max-w-[20ch]">
            Your next intake is coming. Will your batch be full?
          </h2>
          <p className="mt-5 max-w-[56ch] text-[1.1rem] leading-relaxed text-mist-300">
            Apply for the Student Acquisition Funnel. We&apos;ll review your
            institute and show you exactly where your admissions are leaking,
            then how to fill your batch before the deadline closes. No strings,
            no forced follow-ups.
          </p>
        </Reveal>

        <Reveal
          delay={0.08}
          className="gold-frame mx-auto max-w-2xl rounded-[22px] border-2 border-cyan-500 bg-ink-800 p-5 sm:p-8 lg:p-10"
        >
          <div className="mb-6">
            <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl">
              Apply for your strategy call
            </h3>
            <p className="mt-1.5 text-sm text-mist-500">
              Takes about 2 minutes. We reply within one business day.
            </p>
          </div>
          <ApplyForm />
        </Reveal>

        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-2.5 text-center text-sm text-mist-400">
          <p>Free 30-minute call. No pitch deck.</p>
          <p>
            Only {offerWindow.capacity} institutes this intake ·{" "}
            <span className="font-semibold text-cyan-500">
              {offerWindow.remaining} spots left
            </span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone size={16} className="text-cyan-500" aria-hidden />
            Prefer to talk now?{" "}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
              className="font-semibold text-cyan-500 hover:text-cyan-400"
            >
              {siteConfig.contact.phone}
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
