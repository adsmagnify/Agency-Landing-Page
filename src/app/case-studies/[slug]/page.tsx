import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CaseStudyBody } from "@/components/case-studies/CaseStudyBody";
import {
  caseStudies,
  getCaseStudy,
  getCaseStudyPages,
} from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return buildMetadata({
    title: `${study.client} case study`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const pages = getCaseStudyPages(study.slug);

  return (
    <article className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(0,74,173,.35),transparent_55%)]" />
      <Container className="relative py-16 sm:py-20">
        <Link
          href="/#cases"
          className="inline-flex items-center gap-2 text-sm text-mist-400 transition-colors hover:text-cyan-500"
        >
          <ArrowLeft size={16} aria-hidden />
          All case studies
        </Link>

        <p className="eyebrow mt-8">{study.tag}</p>
        <h1 className="headline-2 mt-2 max-w-[22ch]">{study.client}</h1>
        <p className="mt-4 max-w-[54ch] text-[1.15rem] leading-relaxed text-mist-300">
          {study.title}
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white p-2 sm:p-4">
          <Image
            src={study.thumb}
            alt={`${study.client} campaign dashboard`}
            width={study.thumbWidth}
            height={study.thumbHeight}
            className="h-auto w-full"
            priority
            sizes="(min-width: 1140px) 1060px, 100vw"
          />
        </div>

        <CaseStudyBody pages={pages} />

        <div className="mt-20 flex flex-col items-center gap-4 pb-6 text-center sm:mt-24">
          <Button href="/#apply" variant="primary" size="lg">
            Book My Free Strategy Call
          </Button>
          <Link
            href="/#cases"
            className="text-sm text-mist-500 transition-colors hover:text-cyan-500"
          >
            Back to all case studies
          </Link>
        </div>
      </Container>
    </article>
  );
}
