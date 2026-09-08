import Image from "next/image";
import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, navLinks } from "@/lib/constants";
import { niches } from "@/content/funnel";
import {
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";
import { FooterMapEmbed } from "@/components/layout/FooterMapEmbed";

const footerBadges = [
  { src: "/footer/badge-1.png", alt: "Partner Badge 1", width: 75, height: 72 },
  { src: "/footer/badge-3.png", alt: "Partner Badge 3", width: 72, height: 72 },
  { src: "/footer/badge-4.png", alt: "Partner Badge 4", width: 786, height: 267 },
  { src: "/footer/badge-5.png", alt: "Partner Badge 5", width: 217, height: 290 },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-12 lg:py-16">
        <div className="flex flex-col gap-4">
          <Link href="#top" aria-label={siteConfig.name} className="inline-flex items-center">
            <Image
              src="/logo-footer.png"
              alt={siteConfig.name}
              width={234}
              height={57}
              className="h-10 w-auto sm:h-11"
            />
          </Link>
          <p className="max-w-xs text-sm text-white/50">
            Performance marketing for education institutes. Agency first, academy
            second.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {[
              { href: siteConfig.socials.facebook, Icon: FacebookIcon, label: "Facebook" },
              { href: siteConfig.socials.instagram, Icon: InstagramIcon, label: "Instagram" },
              { href: siteConfig.socials.linkedin, Icon: LinkedInIcon, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-brand-400/50 hover:text-white"
              >
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn
          title="Who it's for"
          links={niches.map((niche) => ({ href: "#who", label: niche.label }))}
        />
        <FooterColumn
          title="Company"
          links={navLinks.map((link) => ({ href: link.href, label: link.label }))}
        />

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-white">Get in touch</h3>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            {siteConfig.contact.email}
          </a>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            {siteConfig.contact.phone}
          </a>
          <div className="flex items-start gap-2 pt-1">
            <MapPin size={14} className="mt-0.5 shrink-0 text-white/40" />
            <p className="text-sm leading-relaxed text-white/50">
              {siteConfig.contact.addressFormatted}
            </p>
          </div>
          <div className="pt-2">
            <Button href="#apply" variant="primary" className="w-fit">
              Book a Call
            </Button>
          </div>
        </div>
      </Container>

      <FooterMap />

      <Container className="flex flex-col gap-6 border-t border-white/10 py-6">
        <p className="text-[11px] leading-relaxed text-white/40">
          *Adsmagnify does not warrant or guarantee any specific level of
          performance or end result. Any attainable result depends on a number of
          factors, circumstances, and conditions, including the institute&apos;s
          program, follow-up capacity, and market. The Full-Batch Guarantee
          applies only where the client has followed the directives and process
          provided. We hold ourselves to a high standard of integrity and
          transparency.
        </p>
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; 2026 {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Built for enrollments, not just leads.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      {links.map((link) => (
        <a
          key={`${link.href}-${link.label}`}
          href={link.href}
          className="text-sm leading-snug text-white/70 transition-colors hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function FooterMap() {
  return (
    <Container className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_1.6fr] lg:items-center">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs font-semibold tracking-widest text-brand-400 uppercase">
            Our office
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold text-white">
            Visit us in Mumbai
          </h3>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-400">
            <MapPin size={18} aria-hidden />
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            {siteConfig.contact.addressFormatted}
          </p>
        </div>

        <Button
          href={siteConfig.contact.mapDirectionsUrl}
          variant="primary"
          className="w-full lg:w-fit"
        >
          Get directions
          <ExternalLink size={14} aria-hidden />
        </Button>

        <div className="pt-2">
          <p className="mb-2 text-[11px] font-semibold tracking-wider text-white/40 uppercase">
            Accreditations & Badges
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {footerBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex h-10 items-center justify-center rounded-lg border border-white/15 bg-white px-2.5 py-1 shadow-2xs transition-transform hover:scale-105"
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  className="max-h-6 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterMapEmbed />
    </Container>
  );
}
