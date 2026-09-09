import { Button } from "@/components/ui/Button";
import { offerWindow } from "@/lib/constants";

export function MidCta({
  label,
  sub,
}: {
  label: string;
  sub?: string;
}) {
  return (
    <div className="mt-11 flex flex-col items-center gap-3 text-center">
      <span
        aria-hidden
        className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
      />
      <Button href="#apply" variant="primary" size="lg" pulse>
        {label}
      </Button>
      <p className="text-[0.86rem] text-mist-500">
        {sub ?? `${offerWindow.remaining} spots left this intake. Free 30-minute call.`}
      </p>
    </div>
  );
}
