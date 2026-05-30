"use client";

import { IconCloud } from "@/registry/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
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
  java: "Java",
  react: "React",
  html5: "HTML5",
  css3: "CSS3",
  nodedotjs: "Node.js",
  express: "Express",
  nextdotjs: "Next.js",
  prisma: "Prisma",
  amazonaws: "AWS",
  postgresql: "PostgreSQL",
  firebase: "Firebase",
  vercel: "Vercel",
  docker: "Docker",
  git: "Git",
  github: "GitHub",
  figma: "Figma",
};

export function IconCloudDemo() {
  const items = slugs.map((slug) => ({
    name: labelsBySlug[slug] ?? slug,
    src: `/assets/icons/cloud/${slug}.svg`,
  }));

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden py-6">
      <IconCloud items={items} />
    </div>
  );
}
