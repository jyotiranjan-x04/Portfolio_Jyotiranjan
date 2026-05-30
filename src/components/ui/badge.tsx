import * as React from "react";

import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "info"
  | "destructive"
  | "mono";

type BadgeAppearance = "solid" | "stroke";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  appearance?: BadgeAppearance;
}

const solidVariants: Record<BadgeVariant, string> = {
  default: "bg-zinc-800 text-zinc-100",
  primary: "bg-yellow-400 text-black",
  secondary: "bg-zinc-700 text-zinc-100",
  success: "bg-emerald-500/20 text-emerald-300",
  warning: "bg-amber-500/20 text-amber-300",
  info: "bg-sky-500/20 text-sky-300",
  destructive: "bg-red-500/20 text-red-300",
  mono: "bg-zinc-950 text-zinc-300",
};

const strokeVariants: Record<BadgeVariant, string> = {
  default: "border border-zinc-700 bg-transparent text-zinc-200",
  primary: "border border-yellow-300/60 bg-yellow-300/10 text-yellow-300",
  secondary: "border border-zinc-600 bg-transparent text-zinc-200",
  success: "border border-emerald-400/60 bg-emerald-400/10 text-emerald-300",
  warning: "border border-amber-400/60 bg-amber-400/10 text-amber-300",
  info: "border border-sky-400/60 bg-sky-400/10 text-sky-300",
  destructive: "border border-red-400/60 bg-red-400/10 text-red-300",
  mono: "border border-zinc-500/70 bg-zinc-900/70 text-zinc-200",
};

export function Badge({
  className,
  variant = "default",
  appearance = "solid",
  ...props
}: BadgeProps) {
  const palette = appearance === "stroke" ? strokeVariants : solidVariants;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        palette[variant],
        className
      )}
      {...props}
    />
  );
}
