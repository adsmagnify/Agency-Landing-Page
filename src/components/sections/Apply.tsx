import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { siteConfig } from "@/lib/constants";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.contact.addressFormatted,
    href: siteConfig.contact.mapDirectionsUrl,
  },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

export function Apply() {
  return (
    <section
      id="apply"
      className="relative overflow-hidden section scroll-mt-32 sm:scroll-mt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/80 via-transparent to-transparent" />
      <Container className="relative section-gap">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="headline-2">
            Your next intake is coming. Will your batch be full?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-400 sm:text-lg">
            Apply for the Student Acquisition Funnel. We&apos;ll review your
            institute and show you exactly where your admissions are leaking,
            then how to fill your batch before the deadline closes. No strings,
            no forced follow-ups.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:items-start lg:gap-10">
          <Reveal className="flex flex-col gap-3.5 sm:gap-4">
            {contactDetails.map((detail) => {
              const inner = (
                <>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600">
                    <detail.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs tracking-widest text-mist-500 uppercase">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink-950">
                      {detail.value}
                    </p>
                  </div>
                </>
              );

              const className =
                "card-surface flex items-start gap-3 p-4 sm:gap-4 sm:p-5";

              return "href" in detail && detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  className={className}
                  {...(detail.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {inner}
                </a>
              ) : (
                <div key={detail.label} className={className}>
                  {inner}
                </div>
              );
            })}
          </Reveal>

          <Reveal
            delay={0.1}
            className="rounded-2xl border border-ink-950/8 bg-white p-5 shadow-[0_24px_60px_-32px_rgba(10,15,31,0.35)] sm:rounded-3xl sm:p-8 lg:p-10"
          >
            <ApplyForm />
            <p className="mt-5 text-xs text-mist-500">
              Limited onboarding slots this intake.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
