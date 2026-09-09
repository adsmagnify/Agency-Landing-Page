import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg" | "xl" | "nav";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan-500 text-[#111] shadow-[0_6px_22px_rgba(255,198,25,.25)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,198,25,.4)]",
  secondary:
    "bg-brand-600 text-white hover:bg-brand-500",
  ghost:
    "border-[1.5px] border-white/12 bg-transparent text-white shadow-none hover:border-cyan-500 hover:text-cyan-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  nav: "min-h-11 px-[22px] py-[11px] text-[0.9rem]",
  md: "min-h-12 px-8 py-4 text-base",
  lg: "min-h-14 px-10 py-[18px] text-[1.12rem]",
  xl: "min-h-16 w-full px-10 py-5 text-[1.15rem]",
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
  pulse?: boolean;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  type?: never;
}

interface ClickButtonProps extends BaseProps {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
}

type ButtonProps = LinkButtonProps | ClickButtonProps;

const baseClasses =
  "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-display font-bold transition-all duration-150 ease-out";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow = false,
  pulse = false,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantStyles[variant],
    sizeStyles[size],
    pulse && variant === "primary" && "animate-pulse-glow",
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          size={18}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={(rest as LinkButtonProps).onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={(rest as ClickButtonProps).type ?? "button"}
      onClick={(rest as ClickButtonProps).onClick}
    >
      {content}
    </button>
  );
}
