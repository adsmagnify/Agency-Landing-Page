export const siteConfig = {
  name: "Adsmagnify",
  shortName: "Adsmagnify",
  tagline: "Student acquisition funnel for education institutes",
  description:
    "Adsmagnify builds done-for-you student acquisition funnels that turn ad spend into paid enrollments for education institutes — without buying more leads or chasing cold numbers.",
  url: "https://www.adsmagnify.com",
  ogImage: "/opengraph-image",
  locale: "en_US",
  keywords: [
    "student acquisition funnel",
    "education marketing agency",
    "study abroad lead generation",
    "coaching institute ads",
    "IELTS marketing",
    "enrollment funnel",
    "performance marketing for education",
  ],
  contact: {
    email: "adsmagnify@gmail.com",
    phone: "+91 7700090236",
    streetAddress: "G12, Pil Court, Near GST Bhavan, Churchgate",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400020",
    addressCountry: "IN",
    addressFormatted:
      "G12, Pil Court, Near GST Bhavan, Churchgate, Mumbai - 400020",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Pil+Court,+Near+GST+Bhavan,+Churchgate,+Mumbai,+Maharashtra+400020&t=&z=16&ie=UTF8&iwloc=&output=embed",
    mapDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=G12,+Pil+Court,+Near+GST+Bhavan,+Churchgate,+Mumbai+400020",
  },
  socials: {
    facebook: "https://www.facebook.com/adsmagnifyofficial",
    instagram: "https://www.instagram.com/adsmagnify",
    linkedin: "https://www.linkedin.com/company/adsmagnify/",
  },
  founded: "2019",
  legalName: "Adsmagnify Digital Solutions LLP",
} as const;

export const navLinks = [
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "The System" },
  { href: "#who", label: "Who It's For" },
  { href: "#results", label: "Results" },
  { href: "#pricing", label: "Programs" },
  { href: "#faq", label: "FAQ" },
] as const;

export const offerWindow = {
  /** 30 Sep 2026, 23:59 IST — keep this honest and update when the intake changes. */
  closeAt: new Date(2026, 8, 30, 23, 59, 0).getTime(),
  capacity: 8,
  filled: 5,
  remaining: 3,
} as const;
