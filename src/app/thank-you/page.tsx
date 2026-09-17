import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CalendlyEmbed } from "@/components/forms/CalendlyEmbed";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

const whatsappNumber = siteConfig.contact.phone.replace(/\D/g, "");
const telHref = siteConfig.contact.phone.replace(/[^+\d]/g, "");

export const metadata: Metadata = buildMetadata({
  title: "Application received",
  description:
    "Your Student Acquisition Funnel application is in. Book a 30-minute strategy call on Calendly, or wait for a strategist to reach out within one business day.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(0,74,173,.38),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_80%_110%,rgba(255,198,25,.08),transparent_50%)]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Application received</p>
          <h1 className="headline-1 mx-auto mt-2 max-w-[16ch]">
            You&apos;re in the queue.
          </h1>
          <p className="mx-auto mt-6 max-w-[46ch] text-[1.15rem] leading-relaxed text-mist-300">
            A strategist will still review your institute. If you don&apos;t
            want to wait, book the 30-minute strategy call on Calendly now.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <Button href={siteConfig.contact.calendly} variant="primary" size="lg">
              Book a time on Calendly
            </Button>
            <p className="text-sm text-mist-500">
              Free 30-minute call. Pick a slot that works for you.
            </p>
          </div>

          <div className="gold-frame mt-10 overflow-hidden rounded-[22px] border-2 border-cyan-500 bg-ink-800">
            <div className="border-b border-white/8 px-6 py-5 text-left sm:px-8">
              <p className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-cyan-500 uppercase">
                Or pick a slot below
              </p>
              <p className="mt-2 text-[1.02rem] leading-relaxed text-mist-300">
                This is our live Calendly calendar. Choose a time and it lands
                straight on our schedule.
              </p>
            </div>
            <CalendlyEmbed url={siteConfig.contact.calendly} />
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button href="/" variant="ghost" size="lg">
              Back to Home
            </Button>
            <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-mist-400">
              <Phone size={16} className="text-cyan-500" aria-hidden />
              Prefer to talk now?
              <a
                href={`tel:${telHref}`}
                className="font-semibold text-cyan-500 hover:text-cyan-400"
              >
                {siteConfig.contact.phone}
              </a>
              <span className="text-white/20" aria-hidden>
                ·
              </span>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-500 hover:text-cyan-400"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
