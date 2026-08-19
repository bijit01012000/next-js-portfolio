import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg" />
      <div aria-hidden className="pointer-events-none absolute inset-0 grain" />

      <p className="relative font-mono text-sm tracking-[0.25em] text-primary">
        404
      </p>
      <h1 className="relative mt-4 font-display text-4xl font-bold sm:text-5xl">
        This route doesn&apos;t resolve.
      </h1>
      <p className="relative mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for isn&apos;t here — no trace, no span, no
        root cause.
      </p>

      <Button asChild className="relative mt-8">
        <Link href="/">
          <ArrowLeft aria-hidden />
          Back home
        </Link>
      </Button>
    </main>
  );
}
