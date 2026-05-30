import Image from "next/image";
import Link from "next/link";
import { GitBranch, UserRound } from "lucide-react";

import { InstagramBrandIcon } from "@/components/ui/icons/instagram-brand-icon";
import { portfolioData } from "@/data/portfolio";

export function AboutSpotlight() {
  return (
    <section className="space-y-3">
      <p className="text-sm uppercase tracking-[0.18em] text-zinc-400">More About Me</p>
      <div className="grid gap-8 rounded-3xl border border-zinc-800 bg-zinc-950/70 p-4 sm:p-6 lg:grid-cols-[420px_1fr] lg:items-center">
        <div className="overflow-hidden rounded-3xl border-2 border-fuchsia-500/80 bg-black">
          <Image
            src="/assets/profile/informal-pic.jpg"
            alt="Informal portrait of Jyotiranjan Sahoo"
            width={900}
            height={1200}
            className="h-full w-full object-cover"
            priority={false}
          />
        </div>

        <div className="space-y-5">
          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Hi there! I&apos;m <span className="bg-gradient-to-r from-violet-500 to-fuchsia-400 bg-clip-text text-transparent">Jyotiranjan</span>
          </h2>

          <div className="space-y-4 text-lg leading-relaxed text-zinc-200">
            <p>{portfolioData.intro}</p>
            <p>{portfolioData.about}</p>
            <p>
              When I&apos;m not coding, I&apos;m exploring new product ideas, learning emerging tech, and refining design systems that make products feel intuitive and premium.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-1 text-zinc-300">
            <Link href={portfolioData.socials.linkedin} aria-label="LinkedIn" className="transition-colors hover:text-yellow-300">
              <UserRound className="h-7 w-7" />
            </Link>
            <Link href={portfolioData.socials.github} aria-label="GitHub" className="transition-colors hover:text-yellow-300">
              <GitBranch className="h-7 w-7" />
            </Link>
            <Link href={portfolioData.socials.instagram} aria-label="Instagram" className="transition-colors hover:text-yellow-300">
              <InstagramBrandIcon className="h-7 w-7" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
