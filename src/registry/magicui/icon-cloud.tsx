"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type IconCloudProps = {
  items: { name: string; src: string }[];
};

export function IconCloud({ items }: IconCloudProps) {
  const [expanded, setExpanded] = useState(false);
  const radiusX = 165;
  const radiusY = 105;
  const clusterRadius = 34;
  const formatCoordinate = (value: number) => value.toFixed(3);

  const positions = useMemo(
    () =>
      items.map((_, index) => {
        const angle = (index / items.length) * Math.PI * 2;

        const clusterX = formatCoordinate(Math.cos(angle) * clusterRadius);
        const clusterY = formatCoordinate(Math.sin(angle) * (clusterRadius * 0.65));

        const ovalX = formatCoordinate(Math.cos(angle) * radiusX);
        const ovalY = formatCoordinate(Math.sin(angle) * radiusY);

        return {
          clusterTransform: `translate(${clusterX}px, ${clusterY}px)`,
          ovalTransform: `translate(${ovalX}px, ${ovalY}px)`,
        };
      }),
    [items]
  );

  return (
    <div
      className="group relative h-[360px] w-[360px] sm:h-[420px] sm:w-[420px]"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="absolute inset-0">
        {items.map((item, index) => {
          const position = positions[index];

          return (
            <div
              key={`${item.name}-${index}`}
              className="absolute left-1/2 top-1/2 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: expanded
                  ? `${position.ovalTransform} translate(-50%, -50%)`
                  : `${position.clusterTransform} translate(-50%, -50%)`,
              }}
            >
              <div className="group/icon relative rounded-xl border border-zinc-700/70 bg-zinc-900/90 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-yellow-300/70 hover:shadow-[0_0_24px_rgba(250,204,21,0.35)]">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={30}
                  height={30}
                  className="h-7 w-7 sm:h-8 sm:w-8"
                />
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-700 bg-black/95 px-2 py-1 text-xs text-zinc-100 opacity-0 transition-opacity duration-200 group-hover/icon:opacity-100">
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-yellow-400/50 bg-zinc-900/90 text-center text-xs font-semibold text-yellow-300 shadow-[0_0_40px_rgba(250,204,21,0.18)]">
        {expanded ? "Explore" : "Hover"}
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-full border border-zinc-800/60" />
    </div>
  );
}
