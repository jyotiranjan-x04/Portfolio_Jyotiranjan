import {
  BadgeCheck,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Layers,
  Palette,
  Server,
  Shield,
  Workflow,
  Wrench,
  Globe,
  Boxes,
  BarChart3,
  Search,
  Flame,
  PenTool,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Next.js": Layers,
  TypeScript: Code2,
  PostgreSQL: Database,
  Prisma: Database,
  Razorpay: BadgeCheck,
  Neon: Database,
  "Tailwind CSS": Palette,
  "OpenRouter AI": BrainCircuit,
  Vercel: Cloud,
  Python: Code2,
  "Machine Learning": BrainCircuit,
  AirSim: Workflow,
  PX4: Wrench,
  WSL: Server,
  React: Layers,
  Zustand: Boxes,
  Supabase: Database,
  PostHog: BarChart3,
  "Framer Motion": Workflow,
  Firebase: Flame,
  Figma: PenTool,
  "AWS S3": Cloud,
  SEO: Search,
  "Google Drive API": Cloud,
};

export function ProjectTechStack({
  stack,
  className,
}: {
  stack: string[];
  className?: string;
}) {
  return (
    <div className={cn("mt-4 flex flex-wrap gap-2", className)}>
      {stack.map((tech) => {
        const Icon = techIconMap[tech] ?? Shield;

        return (
          <Badge key={tech} variant="info" appearance="stroke" className="gap-1.5">
            <Icon className="h-3.5 w-3.5" />
            <span>{tech}</span>
          </Badge>
        );
      })}
    </div>
  );
}
