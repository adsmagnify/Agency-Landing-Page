import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="font-display text-7xl font-extrabold text-cyan-500 sm:text-8xl">
          404
        </span>
        <h1 className="headline-1">This page didn&apos;t make the cut.</h1>
        <p className="max-w-md text-mist-500">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <Button href="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
