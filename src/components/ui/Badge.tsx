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
        "inline-flex max-w-full items-center rounded-full border border-cyan-500/25 bg-brand-600/50 font-semibold text-cyan-400",
        size === "compact"
          ? "px-3.5 py-1.5 text-[0.76rem] tracking-wide"
          : "px-3.5 py-1.5 text-[0.76rem] tracking-wide",
        className
      )}
    >
      {children}
    </span>
  );
}
