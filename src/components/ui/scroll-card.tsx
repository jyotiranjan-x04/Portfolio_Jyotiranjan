'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';

import { projects } from '@/data/portfolio';
import { AosWrapper } from '@/components/ui/aos-wrapper';

/* ──────────────────────────────────────────────
   Data for the featured projects
   ────────────────────────────────────────────── */
interface FeaturedProject {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  color: string;
  image: string;
  stack: string[];
  highlights: string[];
}

const cardColors = [
  '#1a1a2e', '#0f3460', '#3a0ca3', '#4361ee', '#7209b7', '#f72585', '#1e293b', '#0f172a', '#312e81', '#1e3a8a', '#831843'
];

const featuredProjects: FeaturedProject[] = projects.map((p, i) => ({
  title: p.title,
  subtitle: p.clientLocation || p.period || 'Project',
  description: p.summary,
  link: p.liveDemo || '#',
  color: cardColors[i % cardColors.length],
  image: p.image,
  stack: p.stack,
  highlights: p.highlights,
}));

/* ──────────────────────────────────────────────
   Component — CSS sticky stacking cards with
   right-side details that slide per card
   ────────────────────────────────────────────── */
export default function ScrollCardProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Use IntersectionObserver on each card to detect which is in view */
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
          }
        },
        { threshold: 0.6 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section ref={sectionRef} className="text-white w-full bg-black py-12 lg:py-0">
      <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto px-6 gap-8 lg:gap-16">
        {/* ─── Left column: Stacking cards ─── */}
        <div className="w-full lg:w-1/2 flex flex-col gap-16 lg:gap-0">
          {featuredProjects.map((project, i) => (
            <figure
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center"
              style={{ zIndex: i + 1 }}
            >
              <AosWrapper delay={0.1}>
                <article
                  className="relative w-full max-w-2xl mx-auto rounded-2xl border border-zinc-700/50 shadow-2xl overflow-hidden lg:transition-transform lg:duration-300 lg:hover:scale-[1.02]"
                  style={{ backgroundColor: project.color }}
                >
                {/* Project screenshot */}
                <div className="relative h-56 sm:h-72 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badge overlay on image */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full border border-yellow-400/40 bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-yellow-400">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card content below image */}
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300">
                    {project.description}
                  </p>

                  {/* Mobile Details: Only visible on mobile */}
                  <div className="mt-6 lg:hidden flex flex-col gap-6">
                    {/* Highlights */}
                    <div className="space-y-3">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                          <p className="text-sm leading-relaxed text-zinc-300">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-zinc-600 bg-zinc-800/60 px-3 py-1 text-xs font-medium text-zinc-300 whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-8 lg:mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20"
                  >
                    Visit Live
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
                {/* SEO structured data for each project */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "CreativeWork",
                      "name": project.title,
                      "description": project.description,
                      "url": project.link,
                      "author": {
                        "@type": "Person",
                        "name": "Jyotiranjan Sahoo"
                      }
                    })
                  }}
                />
              </article>
              </AosWrapper>
            </figure>
          ))}
        </div>

        {/* ─── Right column: Sticky details panel that slides per card ─── */}
        <div className="sticky top-0 h-screen hidden lg:flex flex-col justify-center w-1/2">
          <div className="relative w-full max-w-xl pr-8 xl:pr-12" style={{ height: '500px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="absolute inset-0 flex flex-col justify-center"
                initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -40, opacity: 0, filter: 'blur(6px)' }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="mb-8">
                  <h3 className="text-xl font-medium text-yellow-400">
                    Project Details
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-white tracking-tight">
                    {featuredProjects[activeIndex].title}
                  </p>
                  <div className="mt-4 h-px w-16 bg-gradient-to-r from-yellow-400/80 to-transparent" />
                </div>

                {/* Highlights */}
                <div className="space-y-4">
                  {featuredProjects[activeIndex].highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-4">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                      <p className="text-base leading-relaxed text-zinc-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="mt-10">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {featuredProjects[activeIndex].stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-600 bg-zinc-800/60 px-4 py-1.5 text-xs font-medium text-zinc-300 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <a
                  href={featuredProjects[activeIndex].link}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-12 inline-flex w-fit items-center gap-2 text-sm font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  {featuredProjects[activeIndex].link.replace('https://', '').replace(/\/$/, '')}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Progress indicator */}
            <div className="absolute bottom-0 right-0 flex flex-col items-end gap-2">
              <div className="flex gap-1.5">
                {featuredProjects.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === activeIndex
                        ? 'w-8 bg-yellow-400'
                        : 'w-1.5 bg-zinc-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-zinc-500">
                {activeIndex + 1} / {featuredProjects.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
