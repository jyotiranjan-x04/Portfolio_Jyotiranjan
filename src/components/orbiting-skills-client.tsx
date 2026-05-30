"use client";

import dynamic from "next/dynamic";

const OrbitingSkillsNoSSR = dynamic(() => import("@/components/ui/orbiting-skills"), {
  ssr: false,
});

export function OrbitingSkillsClient() {
  return <OrbitingSkillsNoSSR />;
}
