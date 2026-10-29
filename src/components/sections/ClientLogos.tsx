import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { heroClients } from "@/lib/hero-clients";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

function ClientLogo({
  name,
  logo,
  logoScale,
  showName,
  priority,
}: {
  name: string;
  logo?: string;
  logoScale?: "lg";
  showName?: boolean;
  priority?: boolean;
}) {
  const large = logoScale === "lg";
  const cardClass = cn(
    "flex h-20 min-w-0 w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_8px_24px_-18px_rgba(0,0,0,0.45)] sm:h-24",
    showName ? "flex-col gap-1 px-2 py-1.5 sm:px-2.5 sm:py-2" : large ? "p-1.5 sm:p-2" : "p-3 sm:p-4"
  );

  if (!logo) {
    return (
      <span
        className={cn(
          cardClass,
          "px-2 text-center font-display text-[0.65rem] font-semibold leading-tight tracking-wide text-[#16223D]/50 uppercase sm:text-xs"
        )}
      >
        {name}
      </span>
    );
  }

  return (
    <div className={cardClass}>
      <Image
        src={logo}
        alt={`${name} logo`}
        width={180}
        height={64}
        className={cn(
          "w-auto shrink-0 object-contain",
          showName
            ? "max-h-7 max-w-[70%] sm:max-h-8"
            : large
              ? "max-h-[4.35rem] max-w-[96%] sm:max-h-[5.15rem]"
              : "max-h-12 max-w-[88%] sm:max-h-14"
        )}
        sizes="(max-width: 640px) 42vw, (max-width: 1024px) 24vw, 180px"
        priority={priority}
      />
      {showName ? (
        <span className="text-center font-display text-[0.7rem] font-semibold leading-[1.15] text-[#16223D] sm:text-[0.8rem]">
          {name}
        </span>
      ) : null}
    </div>
  );
}

export function ClientLogos() {
  return (
    <section
      aria-label="Brands that trust Adsmagnify"
      className="relative border-b border-white/9 py-10 sm:py-14"
    >
      <Container>
        <p className="mb-6 text-center text-[0.7rem] font-semibold tracking-[0.22em] text-cyan-500 uppercase">
          Trusted by 300+ brands scaling profitably
        </p>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {heroClients.map((client, index) => (
            <ClientLogo
              key={client.name}
              {...client}
              priority={index < 6}
            />
          ))}

          <a
            href={`${siteConfig.url}/portfolio`}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex h-20 min-w-0 w-full flex-col items-center justify-center gap-1 rounded-xl border border-brand-500/30 bg-gradient-to-br from-brand-600 to-[#4338ca] px-2.5 py-2 text-center shadow-[0_8px_24px_-12px_rgba(0,74,173,0.55)] transition-all hover:scale-[1.02] hover:from-brand-500 hover:to-[#4f46e5] hover:shadow-md sm:h-24 sm:gap-1.5 sm:px-3"
          >
            <span className="font-display text-[1.05rem] font-extrabold leading-none tracking-tight whitespace-nowrap text-white sm:text-[1.25rem]">
              +300 Brands
            </span>
            <span className="flex items-center justify-center gap-0.5 whitespace-nowrap text-[0.58rem] font-semibold tracking-[0.12em] text-cyan-200 uppercase transition-colors group-hover:text-white sm:text-[0.68rem]">
              Scaling Profitably
              <ArrowUpRight
                size={11}
                aria-hidden
                className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
