"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  // Reset the confirmation after a beat, and clear the timer if the component
  // unmounts or the user copies again before it fires.
  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard can be unavailable (insecure origin, denied permission).
      // The address is visible as text and the mailto link still works, so
      // there is nothing to recover from — just don't show a false success.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-card/40 p-4 text-left transition-all duration-300 hover:border-primary/40 hover:bg-card"
    >
      <span className="min-w-0">
        <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Email
        </span>
        <span className="mt-1 block truncate font-mono text-sm text-foreground transition-colors group-hover:text-primary">
          {email}
        </span>
      </span>

      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-full border transition-colors",
          copied
            ? "border-primary/40 bg-primary/10 text-primary"
            : "border-border text-muted-foreground group-hover:text-primary",
        )}
      >
        {copied ? (
          <Check aria-hidden className="size-4" />
        ) : (
          <Copy aria-hidden className="size-4" />
        )}
      </span>

      {/* Announce the result without moving focus */}
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
