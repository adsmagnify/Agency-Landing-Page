import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  headingId,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  headingId?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex max-w-4xl flex-col",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 id={headingId} className="headline-2 mt-3.5 sm:mt-4">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-mist-400 sm:mt-5 sm:text-lg",
            align === "center" && "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
