import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CalendlyEmbed } from "@/components/forms/CalendlyEmbed";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { founder } from "@/content/funnel";

export const metadata: Metadata = buildMetadata({
  title: "Book your free batch filling call",
  description:
    "Book a free 45-minute batch filling call. We'll show you where your admissions are leaking — and whether we can fill your next batch.",
  path: "/book",
});

const proof = [
  { value: "₹50 Cr+", label: "ad spend managed" },
  { value: "378", label: "admissions, Whistling Woods International" },
  { value: "15x", label: "return, Jeevan Sparsh" },
];

export default function BookPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(0,74,173,.38),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_80%_110%,rgba(255,198,25,.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />

      <Container className="relative">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="eyebrow">Free 45-minute strategy call</p>
          <h1 className="headline-1 mx-auto mt-2 max-w-[18ch]">
            Book your batch filling call.
          </h1>
          <p className="mx-auto mt-5 max-w-[52ch] text-[1.1rem] leading-relaxed text-mist-300">
            On this call, I&apos;ll show you exactly where you&apos;re losing
            admissions. If I don&apos;t think I can fill your batch, you still
            leave with the answer. Free. No pitch.
          </p>
          <p className="mx-auto mt-4 max-w-[58ch] text-[0.95rem] font-medium leading-relaxed text-signal">
            This is for institute owners who are serious about filling their next batch. 
            If you're just checking prices, or you can't put at least ₹30,000/month (AED 2000) into ads, this is not for you. 
            We take only a few institutes each intake.
          </p>
        </div>

        <div className="gold-frame mx-auto mt-10 max-w-[980px] overflow-hidden rounded-[22px] border-2 border-cyan-500 bg-ink-800">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="border-b border-white/9 bg-[#0a1020] px-6 py-7 sm:px-8 lg:border-b-0 lg:border-r">
              <Image
                src={founder.photo}
                alt="Vinay, founder of Adsmagnify"
                width={144}
                height={144}
                className="h-[72px] w-[72px] rounded-full border-[3px] border-cyan-500 object-cover object-top"
              />
              <p className="mt-4 font-display text-lg font-extrabold text-white">
                {founder.name}
              </p>
              <p className="mt-1 text-sm text-mist-400">
                Founder, Adsmagnify · 45 min · Phone / video call
              </p>
              <h2 className="mt-6 font-display text-xl font-extrabold text-white">
                Batch Filling Call
              </h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-mist-400">
                We fill batches for education institutes, and we run our own
                academy on the same system.
              </p>
              <ul className="mt-5 space-y-3 text-[0.95rem] leading-relaxed text-mist-300">
                {[
                  "Where your admissions are leaking: leads, calling or timing",
                  "What one admission really costs you, not one lead",
                  "When your budget should peak, planned from your admission date",
                  "Whether we can fill your next batch",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="min-w-0 bg-white">
              <CalendlyEmbed url={siteConfig.contact.calendly} />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-[980px] gap-3 sm:grid-cols-3">
          {proof.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/9 bg-ink-800 px-5 py-6 text-center"
            >
              <p className="font-display text-[1.65rem] font-extrabold text-cyan-500">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-mist-400">{item.label}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[52ch] text-center text-xs leading-relaxed text-mist-500">
          {siteConfig.legalName}
          <br />
          {siteConfig.contact.addressFormatted}
          <br />
          {siteConfig.contact.phone} · All times in IST
        </p>
      </Container>
    </section>
  );
}
