import { Button } from "@/components/ui/Button";

export function MidCta({
  label,
  sub,
}: {
  label: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 pt-4 text-center sm:pt-6">
      <Button href="#apply" variant="primary" showArrow>
        {label}
      </Button>
      <p className="text-sm text-mist-500">{sub}</p>
    </div>
  );
}
