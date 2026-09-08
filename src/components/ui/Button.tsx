import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-2 border-cyan-400/85 bg-gradient-to-r from-brand-500 to-brand-600 text-white animate-button-border-pulse hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(255,211,77,0.65)] hover:brightness-110",
  secondary:
    "glass-panel text-ink-950 hover:border-brand-400/60 hover:bg-brand-50",
  ghost: "text-mist-500 hover:text-brand-600",
};

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
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
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ease-out sm:px-6";

export function Button({
  variant = "primary",
  className,
  children,
  showArrow = false,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(baseClasses, variantStyles[variant], className);

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
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
