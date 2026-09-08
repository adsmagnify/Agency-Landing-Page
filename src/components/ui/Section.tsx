import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionVariant = "default" | "compact" | "band" | "flush";
type SectionGap = "14" | "12" | "10" | "none";

const variantClasses: Record<SectionVariant, string> = {
  default: "section",
  compact: "section-compact",
  band: "section-band",
  flush: "",
};

const gapClasses: Record<SectionGap, string> = {
  "14": "section-gap",
  "12": "section-gap-md",
  "10": "section-gap-sm",
  none: "",
};

export function Section({
  variant = "default",
  gap = "14",
  border = false,
  container = true,
  className,
  containerClassName,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  variant?: SectionVariant;
  gap?: SectionGap;
  border?: boolean;
  container?: boolean;
  containerClassName?: string;
}) {
  const content = container ? (
    <Container className={cn(gapClasses[gap], containerClassName)}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <section
      className={cn(
        variantClasses[variant],
        border && "border-section",
        props.id && "scroll-mt-32 sm:scroll-mt-36",
        className
      )}
      {...props}
    >
      {content}
    </section>
  );
}
