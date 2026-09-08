import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "compact";
}) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center rounded-full border border-brand-100 bg-brand-50 font-medium uppercase text-brand-700",
        size === "compact"
          ? "gap-1 px-2.5 py-0.5 text-[0.55rem] leading-tight tracking-[0.12em] sm:px-3 sm:py-1 sm:text-[0.625rem] sm:tracking-[0.14em]"
          : "gap-1.5 px-3 py-1.5 text-[0.65rem] tracking-wide sm:gap-2 sm:px-4 sm:text-xs sm:tracking-widest",
        className
      )}
    >
      {children}
    </span>
  );
}
