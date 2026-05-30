'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue } from 'framer-motion';
import type { Project } from '@/data/portfolio';

interface ScrollCardProjectsProps {
  projects: Project[];
  maxCards?: number;
}

const cardColors = [
  '#1a1a2e',
  '#16213e',
  '#0f3460',
  '#1b1b2f',
  '#162447',
  '#1f4068',
  '#1a1a2e',
  '#16213e',
  '#0f3460',
  '#1b1b2f',
];

/**
 * A single project card that transforms based on overall scroll progress.
 * Slides up from below, settles into the stack, then scales down as the next card arrives.
 */
function StackCard({
  project,
  index,
  total,
  scrollYProgress,
}: {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const cardStart = index / total;
  const cardPeak = Math.min((index + 0.6) / total, 0.99);
  const cardFade = Math.min((index + 1.1) / total, 1);

  // Card slides from off-screen to its stacked Y position
  const y = useTransform(scrollYProgress, [cardStart, cardPeak], [400, index * 12]);

  // Scale down as the next card arrives on top
  const scale = useTransform(scrollYProgress, [cardPeak, cardFade], [1, 0.92]);

  // Quick fade-in
  const cardOpacity = useTransform(
    scrollYProgress,
    [cardStart, Math.min(cardStart + 0.02, cardPeak)],
    [0, 1]
  );

  return (
    <motion.div
      style={{ y, scale, opacity: cardOpacity, zIndex: index + 1 }}
      className="absolute inset-x-0 top-0 will-change-transform"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <article
          style={{ backgroundColor: cardColors[index % cardColors.length] }}
          className="group grid grid-cols-1 md:grid-cols-[1fr_1.2fr] rounded-2xl border border-zinc-700/60 shadow-2xl transition-colors duration-300 hover:border-yellow-400/40"
        >
          {/* Image */}
          <div className="relative h-56 md:h-80 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 hidden md:block" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-6 md:p-8">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-yellow-400/15 border border-yellow-400/30 px-3 py-0.5 text-xs font-semibold text-yellow-400">
                  {project.period}
                </span>
                {project.clientLocation && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-zinc-600 bg-zinc-800/80 px-2.5 py-0.5 text-xs text-zinc-300">
                    <MapPin className="h-3 w-3" />
                    {project.clientLocation}
                  </span>
                )}
              </div>

              <h2 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-white">
                {project.title}
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-zinc-300 line-clamp-3">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-600 bg-zinc-800/60 px-2.5 py-0.5 text-[11px] font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 6 && (
                  <span className="text-[11px] text-zinc-500 self-center">
                    +{project.stack.length - 6}
                  </span>
                )}
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-400 transition-transform duration-200 group-hover:translate-x-1">
              View Project <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

/**
 * Scroll-pinned project showcase.
 *
 * Architecture:
 * - The container has a tall computed height (scroll runway) to create scrollable space
 * - A "viewport" element is position:fixed while in-view, showing the current card stack
 * - framer-motion's useScroll tracks scroll progress within the runway
 * - Each card uses useTransform to derive its y, scale, and opacity from scroll progress
 * - This approach is immune to ancestor overflow:hidden since fixed positioning is viewport-relative
 */
export default function ScrollCardProjects({
  projects,
  maxCards = 10,
}: ScrollCardProjectsProps) {
  const displayProjects = projects.slice(0, maxCards);
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<'before' | 'active' | 'after'>('before');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track scroll phase: before (not yet entered), active (scrolling through), after (scrolled past)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest <= 0) setPhase('before');
    else if (latest >= 1) setPhase('after');
    else setPhase('active');
  });

  // Active card index for the counter
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, displayProjects.length - 1]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  useMotionValueEvent(activeIndex, 'change', (latest) => {
    setCurrentIndex(Math.round(latest));
  });

  // Each card gets 60vh of scroll runway
  const scrollRunway = `${displayProjects.length * 60}vh`;

  // Card display area height: enough for one card + some headroom
  const cardAreaHeight = 'calc(100vh - 160px)';

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: scrollRunway }}
    >
      {/* Viewport element: fixed when active, absolute when before/after */}
      <div
        className="w-full"
        style={{
          position: phase === 'active' ? 'fixed' : 'absolute',
          top: phase === 'active' ? '80px' : phase === 'before' ? '0' : undefined,
          bottom: phase === 'after' ? '0' : undefined,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <div className="mx-auto flex w-full max-w-7xl items-start gap-8 px-6">
          {/* Cards area */}
          <div className="relative flex-1" style={{ height: cardAreaHeight, maxHeight: '500px' }}>
            {displayProjects.map((project, i) => (
              <StackCard
                key={project.slug}
                project={project}
                index={i}
                total={displayProjects.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Counter panel */}
          <div className="hidden lg:flex flex-col w-52 shrink-0 pt-6">
            <div className="space-y-5 text-right">
              <p className="text-7xl font-black text-white leading-none">
                {projects.length}
                <span className="text-yellow-400">+</span>
              </p>
              <div>
                <p className="text-xl font-bold tracking-wide text-zinc-300">Projects</p>
                <p className="text-xl font-bold tracking-wide text-zinc-300">Delivered</p>
              </div>
              <div className="ml-auto h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/60" />

              {/* Progress dots */}
              <div className="flex justify-end gap-1.5">
                {displayProjects.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? 'w-6 bg-yellow-400'
                        : i < currentIndex
                        ? 'w-1.5 bg-yellow-400/40'
                        : 'w-1.5 bg-zinc-600'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-zinc-500">
                {currentIndex + 1} / {displayProjects.length}
              </p>
              <p className="text-xs text-zinc-600">Scroll to explore ↓</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
