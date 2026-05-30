"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

import { HeroSection } from "@/components/ui/feature-carousel";
import { ProjectTechStack } from "@/components/project-tech-stack";
import type { Project } from "@/data/portfolio";

export function ProjectsCarouselShowcase({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));

  const images = useMemo(
    () => projects.map((project) => ({ src: project.image, alt: project.title })),
    [projects]
  );

  const activeProject = projects[activeIndex] ?? projects[0];

  const handleIndexChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70">
        <HeroSection
          className="min-h-[500px] bg-transparent"
          images={images}
          showHeader={false}
          onIndexChange={handleIndexChange}
          interval={4500}
        />
      </div>

      <article className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeProject.slug}
            initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="min-h-[360px]"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <p className="text-sm text-yellow-400">{activeProject.period}</p>
              {activeProject.clientLocation && (
                <span className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900/80 px-2.5 py-0.5 text-[11px] font-medium text-zinc-300">
                  {activeProject.clientLocation}
                </span>
              )}
            </div>
            <h3 className="text-3xl font-semibold text-white">{activeProject.title}</h3>
            <p className="mt-4 text-zinc-300">{activeProject.summary}</p>
            <ProjectTechStack stack={activeProject.stack} />

            <div className="mt-6 space-y-2 text-sm text-zinc-300">
              {activeProject.highlights.map((highlight) => (
                <p key={highlight}>• {highlight}</p>
              ))}
            </div>

            <Link
              href={`/projects/${activeProject.slug}`}
              className="mt-8 inline-flex text-sm font-medium text-yellow-300 hover:text-yellow-200"
            >
              View details →
            </Link>
          </motion.div>
        </AnimatePresence>
      </article>
    </div>
  );
}
