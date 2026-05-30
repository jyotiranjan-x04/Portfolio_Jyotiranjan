import { cn } from "@/lib/utils";

export function SectionTitle({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 space-y-3", className)}>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {subtitle ? <p className="max-w-3xl text-zinc-400">{subtitle}</p> : null}
    </div>
  );
}
