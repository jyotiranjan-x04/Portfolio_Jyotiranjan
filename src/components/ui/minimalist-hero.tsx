"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  FolderKanban,
  House,
  Mail,
  Palette,
  UserRound,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { FlipLinksRow } from '@/components/ui/flip-links';
import { LimelightNav, NavItem } from '@/components/ui/limelight-nav';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { label: string; href: string }[];
  locationText: string;
  className?: string;
}

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const iconByLabel: Record<string, React.ReactElement<{ className?: string }>> = {
    HOME: <House />,
    ABOUT: <UserRound />,
    EXPERIENCE: <BriefcaseBusiness />,
    PROJECTS: <FolderKanban />,
    SERVICES: <Palette />,
    CONTACT: <Mail />,
  };

  const navItems: NavItem[] = navLinks.map((link) => {
    const normalized = link.label.toUpperCase();

    return {
      id: link.href,
      icon: iconByLabel[normalized] ?? <House />,
      label: link.label,
      onClick: () => router.push(link.href),
    };
  });

  const activeIndex = Math.max(
    navLinks.findIndex((item) =>
      item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
    ),
    0
  );

  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <div className="hidden md:flex">
          <LimelightNav
            items={navItems}
            defaultActiveIndex={activeIndex}
            className="h-14 bg-zinc-900/50"
            iconClassName="text-zinc-100"
            iconContainerClassName="px-4"
            limelightClassName="bg-yellow-400"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">{mainText}</p>
          <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font">
            Read More
          </a>
          <div className="mt-5 flex justify-center md:justify-start">
            <FlipLinksRow links={socialLinks} />
          </div>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex h-full items-end justify-center overflow-visible">
            <motion.img
                src={imageSrc}
                alt={imageAlt}
            className="relative z-10 h-[64dvh] w-auto max-w-none object-contain object-center sm:h-[70dvh] md:h-[78dvh] lg:h-[88dvh]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/assets/placeholders/image-not-found.svg";
                }}
            />
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-7xl font-extrabold text-foreground md:text-8xl lg:text-9xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-40 flex w-full max-w-7xl flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80 md:text-right"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
