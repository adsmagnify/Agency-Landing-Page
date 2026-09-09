import Image from "next/image";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { founder } from "@/content/funnel";

export function Founder() {
  return (
    <Section glow="navy">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[22px] border border-white/10 bg-ink-800 lg:mx-0">
          <Image
            src={founder.photo}
            alt="Vinay, founder of Adsmagnify"
            width={840}
            height={1120}
            className="h-auto w-full object-cover object-top"
            sizes="(min-width: 1024px) 420px, 90vw"
          />
        </div>

        <div>
          <p className="eyebrow">{founder.eyebrow}</p>
          <h2 className="headline-2 mt-2">{founder.title}</h2>
          {founder.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mt-4 text-[1.05rem] leading-relaxed text-mist-400"
            >
              {paragraph}
            </p>
          ))}
          <ul className="mt-6 flex flex-col gap-3">
            {founder.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-[0.98rem] text-mist-300"
              >
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-500"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href="#apply" variant="primary" size="lg" pulse>
              Book My Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
