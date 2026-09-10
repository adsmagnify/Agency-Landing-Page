import { ChevronDown } from "lucide-react";
import { parseCaseStudy, type CaseBlock } from "@/lib/parseCaseStudy";

function StepHeading({ text }: { text: string }) {
  const match = text.match(/^(\d{2})\.\s+(.+)$/);
  if (!match) return <>{text}</>;
  return (
    <span className="flex items-baseline gap-4 sm:gap-5">
      <span className="font-display text-[2.4rem] leading-none font-extrabold tracking-[-0.04em] text-cyan-500 sm:text-[2.8rem]">
        {match[1]}
      </span>
      <span>{match[2]}</span>
    </span>
  );
}

function Block({ block, index }: { block: CaseBlock; index: number }) {
  if (block.type === "kicker") {
    return (
      <p className="case-kicker mt-16 mb-4 font-display text-[0.78rem] font-bold tracking-[0.22em] text-cyan-500 uppercase first:mt-0">
        {block.text}
      </p>
    );
  }

  if (block.type === "heading") {
    const Heading = block.level === 3 ? "h3" : "h2";
    return (
      <Heading className="case-heading mt-16 mb-7 font-display text-[1.7rem] leading-[1.25] font-extrabold tracking-[-0.02em] text-white sm:mt-20 sm:mb-8 sm:text-[2.05rem] [.case-kicker+&]:mt-3 [.case-kicker+&]:sm:mt-4">
        <StepHeading text={block.text} />
      </Heading>
    );
  }

  if (block.type === "paragraph") {
    const text = block.text.trim();
    const letters = text.replace(/[^A-Za-z]/g, "");
    const displayCaps =
      letters.length >= 3 &&
      letters === letters.toUpperCase() &&
      text.length < 56 &&
      !/[.!?]$/.test(text);
    const words = text.split(/\s+/).filter(Boolean).length;
    const metricLine =
      text.length < 42 && /[0-9]/.test(text) && words <= 3 && !/[.!?]$/.test(text);
    const connector =
      text.length < 32 &&
      (/:$/.test(text) || /^(from|to|in|against|with|at|and|along with):?$/i.test(text));
    const punchy =
      text.length < 78 &&
      /[.!?]$/.test(text) &&
      !/^(The |This |That |So |For |In |A |We |Our |It |These |Those |People |They |Over |Before |After |During |Rather |Instead |When |How |Many |More |Better )/.test(
        text
      );

    if (connector) {
      return (
        <p className="mb-3 text-center text-[0.82rem] font-semibold tracking-[0.14em] text-mist-500 uppercase">
          {text.replace(/:$/, "")}
        </p>
      );
    }

    if (metricLine || displayCaps) {
      return (
        <p className="mb-8 py-4 text-center font-display text-[2.1rem] leading-[1.2] font-extrabold tracking-[-0.03em] text-cyan-500 sm:mb-10 sm:py-6 sm:text-[2.55rem]">
          {text}
        </p>
      );
    }

    return (
      <p
        className={
          punchy
            ? "mb-10 font-display text-[1.35rem] leading-[1.7] font-semibold text-white sm:text-[1.5rem]"
            : "mb-8 text-[1.14rem] leading-[2] text-mist-300 sm:mb-9 sm:text-[1.2rem] sm:leading-[2.05]"
        }
      >
        {text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="mb-12 flex flex-col gap-4">
        {block.items.map((item, itemIndex) => (
          <li
            key={`${index}-${itemIndex}`}
            className="relative rounded-2xl border border-white/8 bg-ink-800 px-6 py-5 pl-14 text-[1.12rem] leading-[1.8] text-mist-300"
          >
            <span aria-hidden className="absolute top-5 left-6 font-display text-lg text-cyan-500">
              •
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "arrow") {
    return (
      <div className="flex justify-center py-8" aria-hidden>
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-500">
          <ChevronDown size={22} />
        </span>
      </div>
    );
  }

  if (block.type === "equals") {
    return (
      <p className="py-6 text-center font-display text-3xl font-extrabold text-cyan-500" aria-hidden>
        =
      </p>
    );
  }

  if (block.type === "funnel") {
    return (
      <ol className="relative my-12 ml-2 border-l border-cyan-500/25 py-4 pl-8 sm:ml-4 sm:pl-10">
        {block.steps.map((step, stepIndex) => (
          <li key={`${index}-${stepIndex}`} className="relative pb-10 last:pb-2">
            <span
              aria-hidden
              className="absolute top-1.5 -left-[2.45rem] h-3.5 w-3.5 rounded-full border-2 border-cyan-500 bg-ink-900 sm:-left-[2.7rem]"
            />
            <p className="font-display text-[1.2rem] leading-snug font-bold text-white sm:text-[1.35rem]">
              {step}
            </p>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "table") {
    return (
      <div className="my-12 overflow-hidden rounded-[24px] border border-white/10">
        {block.rows.map((row, rowIndex) => (
          <div
            key={`${index}-${rowIndex}`}
            className="grid gap-6 border-b border-white/8 px-6 py-8 last:border-b-0 sm:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] sm:px-8 sm:py-10"
          >
            {block.headers.map((header, col) =>
              row[col] ? (
                <div key={header}>
                  <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-mist-500 uppercase">
                    {header}
                  </p>
                  <p
                    className={`mt-2 font-display text-[1.2rem] leading-snug font-bold ${
                      /[₹$0-9]/.test(row[col]) ? "text-cyan-500" : "text-white"
                    }`}
                  >
                    {row[col]}
                  </p>
                </div>
              ) : null
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="my-12 overflow-hidden rounded-[24px] border border-cyan-500/20">
      {block.items.map((item, itemIndex) => (
        <div
          key={`${index}-${itemIndex}`}
          className="border-b border-white/8 px-6 py-9 last:border-b-0 sm:px-10 sm:py-12"
        >
          <p className="font-display text-[2.35rem] leading-none font-extrabold tracking-[-0.04em] text-cyan-500 sm:text-[2.9rem]">
            {item.value}
          </p>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-mist-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyBody({ pages }: { pages: string[] }) {
  const blocks = parseCaseStudy(pages);

  return (
    <div className="mx-auto mt-16 max-w-[42rem] pb-10 sm:mt-20">
      {blocks.map((block, index) => (
        <Block key={index} block={block} index={index} />
      ))}
    </div>
  );
}
