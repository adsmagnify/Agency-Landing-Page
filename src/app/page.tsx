import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Results } from "@/components/sections/Results";
import { Founder } from "@/components/sections/Founder";
import { Programs } from "@/components/sections/Programs";
import { FAQ } from "@/components/sections/FAQ";
import { Scarcity } from "@/components/sections/Scarcity";
import { Apply } from "@/components/sections/Apply";
import { buildMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { faqs } from "@/content/funnel";

const pageTitle = "Student Acquisition Funnel for Education Institutes";
const pageDescription =
  "Fill every batch with paid enrollments without buying more leads. Adsmagnify builds the done-for-you Student Acquisition Funnel that turns ad spend into admissions before the deadline closes.";

export const metadata: Metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/",
  keywords: [
    "student acquisition funnel",
    "education marketing agency",
    "study abroad lead generation",
    "coaching institute ads",
    "enrollment funnel",
  ],
});

export default function Home() {
  const jsonLd = [
    webPageJsonLd({
      title: `${pageTitle} | Adsmagnify`,
      description: pageDescription,
      path: "/",
    }),
    faqJsonLd([...faqs]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <WhoItsFor />
      <HowWeHelp />
      <CaseStudies />
      <Testimonials />
      <Results />
      <Founder />
      <Programs />
      <FAQ />
      <Scarcity />
      <Apply />
    </>
  );
}
