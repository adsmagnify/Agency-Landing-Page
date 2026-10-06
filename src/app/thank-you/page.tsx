import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { MetaLeadEvent } from "@/components/analytics/MetaPixel";
import { siteConfig } from "@/lib/constants";

const whatsappNumber = siteConfig.contact.phone.replace(/\D/g, "");
const telHref = siteConfig.contact.phone.replace(/[^+\d]/g, "");

export const metadata: Metadata = buildMetadata({
  title: "You're booked",
  description:
    "Your 60-minute strategy call is confirmed. We look forward to seeing you.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <MetaLeadEvent />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(0,74,173,.38),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_80%_110%,rgba(255,198,25,.08),transparent_50%)]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">You&apos;re booked</p>
          <h1 className="headline-1 mx-auto mt-2 max-w-[14ch]">
            Hope to see you soon.
          </h1>
          <p className="mx-auto mt-6 max-w-[46ch] text-[1.15rem] leading-relaxed text-mist-300">
            Your 60-minute strategy call is confirmed. Check your email for the
            calendar invite. We&apos;ll walk through where your admissions are
            leaking — and how to fill the batch before the deadline closes.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button href={siteConfig.url} variant="primary" size="lg" target="_self">
              Go to Adsmagnify.com
            </Button>
            <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-mist-400">
              <Phone size={16} className="text-cyan-500" aria-hidden />
              Need to reschedule?
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
