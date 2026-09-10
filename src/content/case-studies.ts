import caseStudyFull from "@/content/case-study-full.json";

export type CaseStudy = {
  slug: keyof typeof caseStudyFull;
  client: string;
  tag: string;
  title: string;
  result: string;
  metric: string;
  detail: string;
  thumb: string;
  thumbWidth: number;
  thumbHeight: number;
  summary: string;
};

export const caseStudies = [
  {
    slug: "adsmagnify-academy",
    client: "Adsmagnify Academy",
    tag: "Performance marketing academy",
    title: "A student acquisition funnel that completed 10 batches",
    result: "10 batches",
    metric: "39.70x–45.37x ROAS",
    detail: "533 leads · 70–80 students · ₹14L–₹16L reported revenue",
    thumb: "/case-studies/thumbs/academy.jpg",
    thumbWidth: 1382,
    thumbHeight: 421,
    summary:
      "How we built a Student Acquisition Funnel that helped Adsmagnify Academy complete 10 batches: 533 leads → 70–80 students → ₹14L–₹16L reported revenue.",
  },
  {
    slug: "whistling-woods",
    client: "Whistling Woods International",
    tag: "Creative education",
    title: "A student acquisition funnel that drove 378 admissions",
    result: "378 admissions",
    metric: "2,000+ leads",
    detail: "Meta + Google core engine · $11M reported revenue",
    thumb: "/case-studies/thumbs/whistling-woods.jpg",
    thumbWidth: 1600,
    thumbHeight: 600,
    summary:
      "A major performance-marketing strategy powered by Meta, supported by Google Ads, PaperAds, CollegeDunia and other acquisition channels — built to drive 378 admissions.",
  },
  {
    slug: "jeevan-sparsh",
    client: "Jeevan Sparsh",
    tag: "Course training",
    title: "From Meta lead generation to 4 completed batches",
    result: "4 batches",
    metric: "15.85x ROAS",
    detail: "678 enquiries · 80 students · ₹4L course revenue",
    thumb: "/case-studies/thumbs/jeevan-sparsh.jpg",
    thumbWidth: 1543,
    thumbHeight: 418,
    summary:
      "A focused Meta Ads strategy generated 678 course enquiries, supported 80 student enrolments, and delivered ₹4,00,000 in course revenue.",
  },
  {
    slug: "mirage-spa",
    client: "Mirage Spa",
    tag: "Beauty education · Canada",
    title: "From 40 to 50 annual registrations",
    result: "25% growth",
    metric: "1,020 conversions & leads",
    detail: "Google Search · CA$24,035.66 spend · 40 → 50 registrations",
    thumb: "/case-studies/thumbs/mirage-spa.jpg",
    thumbWidth: 1434,
    thumbHeight: 455,
    summary:
      "A high-intent Google Ads strategy helped a Canadian beauty-education institute generate 1,020 conversions and leads and grow its annual registration benchmark by 25%.",
  },
] as const satisfies readonly CaseStudy[];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudyPages(slug: string) {
  return caseStudyFull[slug as keyof typeof caseStudyFull] ?? [];
}
