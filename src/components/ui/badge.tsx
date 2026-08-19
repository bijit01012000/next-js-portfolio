import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-mono text-[11px] leading-none tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-secondary/50 text-muted-foreground",
        accent: "border-primary/30 bg-primary/10 text-primary",
        outline: "border-border bg-transparent text-muted-foreground",
      },
      size: {
        default: "px-2.5 py-1",
        sm: "px-2 py-0.5 text-[10px]",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Badge({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props} />
  );
}
