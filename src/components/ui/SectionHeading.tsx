import { cn } from "@/lib/utils";
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
        "flex max-w-[820px] flex-col",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", align === "center" && "justify-center")}>
          {eyebrow}
        </p>
      )}
      <h2 id={headingId} className="headline-2">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-[1.1rem] leading-relaxed text-mist-500",
            align === "center" && "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
