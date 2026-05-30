import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardData {
  title: string;
  description: string;
  icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
}

interface GradientCardShowcaseProps {
  cards: ServiceCardData[];
  contactHref?: string;
}

export default function GradientCardShowcase({
  cards,
  contactHref = '#contact',
}: GradientCardShowcaseProps) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center py-10">
        {cards.map(
          ({ title, description, icon: Icon, gradientFrom, gradientTo }, idx) => (
            <div
              key={idx}
              className="group relative m-[30px_20px] h-[400px] w-[320px] transition-all duration-500"
            >
              {/* Skewed gradient panels */}
              <span
                className="absolute left-[50px] top-0 h-full w-1/2 transform rounded-lg skew-x-[15deg] transition-all duration-500 group-hover:left-[20px] group-hover:w-[calc(100%-90px)] group-hover:skew-x-0"
                style={{
                  background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                }}
              />
              <span
                className="absolute left-[50px] top-0 h-full w-1/2 transform rounded-lg skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:left-[20px] group-hover:w-[calc(100%-90px)] group-hover:skew-x-0"
                style={{
                  background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                }}
              />

              {/* Animated blurs */}
              <span className="pointer-events-none absolute inset-0 z-10">
                <span className="absolute left-0 top-0 h-0 w-0 animate-blob rounded-lg bg-[rgba(255,255,255,0.1)] opacity-0 shadow-[0_5px_15px_rgba(0,0,0,0.08)] backdrop-blur-[10px] transition-all duration-100 group-hover:left-[50px] group-hover:top-[-50px] group-hover:h-[100px] group-hover:w-[100px] group-hover:opacity-100" />
                <span className="animation-delay-1000 absolute bottom-0 right-0 h-0 w-0 animate-blob rounded-lg bg-[rgba(255,255,255,0.1)] opacity-0 shadow-[0_5px_15px_rgba(0,0,0,0.08)] backdrop-blur-[10px] transition-all duration-500 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:h-[100px] group-hover:w-[100px] group-hover:opacity-100" />
              </span>

              {/* Content */}
              <div className="relative left-0 z-20 rounded-lg bg-[rgba(255,255,255,0.05)] p-[20px_40px] text-white shadow-lg backdrop-blur-[10px] transition-all duration-500 group-hover:left-[-25px] group-hover:p-[60px_40px]">
                <Icon className="mb-4 h-10 w-10 text-yellow-400 drop-shadow-md" />
                <h2 className="mb-3 text-2xl font-bold">{title}</h2>
                <p className="mb-4 text-base leading-relaxed text-zinc-300">
                  {description}
                </p>
                <a
                  href={contactHref}
                  className="inline-block rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-yellow-300"
                >
                  Let&apos;s Discuss →
                </a>
              </div>
            </div>
          )
        )}
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}
