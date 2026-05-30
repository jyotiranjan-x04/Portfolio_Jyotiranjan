"use client";

import Image from "next/image";
import React from "react";

type TechIcon = {
  name: string;
  src: string;
};

const ICONS_ROW1: TechIcon[] = [
  { name: "TypeScript", src: "/assets/icons/hero/typescript.svg" },
  { name: "JavaScript", src: "/assets/icons/hero/javascript.svg" },
  { name: "React", src: "/assets/icons/hero/react.svg" },
  { name: "Next.js", src: "/assets/icons/hero/nextdotjs.svg" },
  { name: "Node.js", src: "/assets/icons/hero/nodedotjs.svg" },
  { name: "Express", src: "/assets/icons/hero/express.svg" },
  { name: "Tailwind CSS", src: "/assets/icons/hero/tailwindcss.svg" },
  { name: "Three.js", src: "/assets/icons/hero/threedotjs.svg" },
];

const ICONS_ROW2: TechIcon[] = [
  { name: "Python", src: "/assets/icons/hero/python.svg" },
  { name: "Java", src: "/assets/icons/hero/java.svg" },
  { name: "PostgreSQL", src: "/assets/icons/hero/postgresql.svg" },
  { name: "MySQL", src: "/assets/icons/hero/mysql.svg" },
  { name: "MongoDB", src: "/assets/icons/hero/mongodb.svg" },
  { name: "Firebase", src: "/assets/icons/hero/firebase.svg" },
  { name: "Prisma", src: "/assets/icons/hero/prisma.svg" },
  { name: "AWS", src: "/assets/icons/hero/amazonaws.svg" },
  { name: "Vercel", src: "/assets/icons/hero/vercel.svg" },
  { name: "Figma", src: "/assets/icons/hero/figma.svg" },
  { name: "GitHub", src: "/assets/icons/hero/github.svg" },
  { name: "Git", src: "/assets/icons/hero/git.svg" },
];

const repeatedIcons = (icons: TechIcon[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/60 py-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="inline-block rounded-full border border-zinc-700 bg-black px-3 py-1 text-sm text-zinc-100">
          ⚡ Tech Stack
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Built with modern technologies
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
          Core tools and platforms I use to ship reliable, scalable, and premium digital products.
        </p>

        <div className="relative mt-10 overflow-hidden pb-2">
          <div
            className="flex animate-scroll-left gap-10 whitespace-nowrap"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {repeatedIcons(ICONS_ROW1, 4).map((icon, i) => (
              <div
                key={`r1-${icon.name}-${i}`}
                className="group relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 shadow-md transition-all duration-200 hover:scale-110 hover:border-yellow-300/60 hover:shadow-[0_0_28px_rgba(250,204,21,0.28)]"
              >
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-zinc-700 bg-black/95 px-2 py-1 text-xs text-zinc-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>

          <div
            className="mt-6 flex animate-scroll-right gap-10 whitespace-nowrap"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {repeatedIcons(ICONS_ROW2, 4).map((icon, i) => (
              <div
                key={`r2-${icon.name}-${i}`}
                className="group relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 shadow-md transition-all duration-200 hover:scale-110 hover:border-yellow-300/60 hover:shadow-[0_0_28px_rgba(250,204,21,0.28)]"
              >
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-zinc-700 bg-black/95 px-2 py-1 text-xs text-zinc-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-zinc-950 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
