"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "figma",
];

const labelsBySlug: Record<string, string> = {
  typescript: "TypeScript",
  javascript: "JavaScript",
  react: "React",
  html5: "HTML5",
  nodedotjs: "Node.js",
  express: "Express",
  nextdotjs: "Next.js",
  prisma: "Prisma",
  postgresql: "PostgreSQL",
  firebase: "Firebase",
  vercel: "Vercel",
  docker: "Docker",
  git: "Git",
  github: "GitHub",
  figma: "Figma",
};

const ICONS = slugs.map((slug) => ({
  name: labelsBySlug[slug] ?? slug,
  src: `/assets/icons/cloud/${slug}.svg`,
}));

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize, offset = 0 }: any) {
  return (
    <>
      {/* Semi-circle glow background (only render once if needed, but we do it outside) */}
      
      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const itemIndex = (index + offset) % ICONS.length;
        const angle = (index / (count - 1 || 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const item = ICONS[itemIndex];

        // Tooltip positioning — above or below based on angle
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX - x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <div className="flex items-center justify-center rounded-xl bg-zinc-900/60 p-3 transition-transform hover:scale-110">
              <Image
                src={item.src}
                alt={item.name}
                width={iconSize}
                height={iconSize}
                className="object-contain"
                style={{ minWidth: iconSize, minHeight: iconSize }}
              />
            </div>

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:block whitespace-nowrap rounded-lg bg-black px-3 py-1.5 text-xs text-white shadow-lg text-center`}
              style={{ zIndex: 10 }}
            >
              {item.name}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-black ${
                  tooltipAbove ? "top-full -mt-1.5" : "bottom-full -mb-1.5"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export function IconCloudDemo() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Avoid rendering until client side has dimensions
  if (size.width === 0) {
    return <div className="min-h-[400px] w-full" />;
  }

  const baseWidth = Math.min(size.width * 0.8, 700);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(24, baseWidth * 0.05)
      : size.width < 768
      ? Math.max(28, baseWidth * 0.06)
      : Math.max(32, baseWidth * 0.07);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      <div
        className="relative"
        style={{ width: baseWidth, height: baseWidth * 0.6 }}
      >
        <div className="absolute inset-0 flex justify-center">
          <div
            className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)] blur-3xl -mt-40 pointer-events-none"
            style={{ zIndex: 0 }}
          />
        </div>
        <SemiCircleOrbit radius={baseWidth * 0.22} centerX={centerX} centerY={centerY} count={4} iconSize={iconSize} offset={0} />
        <SemiCircleOrbit radius={baseWidth * 0.36} centerX={centerX} centerY={centerY} count={5} iconSize={iconSize} offset={4} />
        <SemiCircleOrbit radius={baseWidth * 0.5} centerX={centerX} centerY={centerY} count={6} iconSize={iconSize} offset={9} />
      </div>
    </div>
  );
}
