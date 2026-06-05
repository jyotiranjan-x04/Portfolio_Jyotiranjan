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
import { usePreloader } from '@/components/preloader';

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
  const { isFinished } = usePreloader();

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

      <div className="relative flex flex-col md:flex-row w-full max-w-7xl flex-grow items-center justify-start md:justify-center pt-8 md:pt-0">
        {/* Social Links (Hidden on mobile, Left on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden z-20 md:flex flex-col justify-center w-full md:w-1/3 text-left order-1"
        >
          <div className="hidden md:block">
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">
              {mainText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isFinished ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.05, delay: 0.5 + index * 0.02 }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
            <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font">
              Read More
            </a>
          </div>
          {/* On desktop: justify-start, scale from left */}
          <div className="mt-5 flex justify-start scale-100 origin-left">
            <FlipLinksRow links={socialLinks} />
          </div>
        </motion.div>

        {/* Center Image */}
        <div className="relative flex h-full w-full md:w-1/3 flex-col items-center justify-start pt-2 md:pt-0 md:justify-end overflow-visible order-3 md:order-2">
            <motion.img
                src={imageSrc}
                alt={imageAlt}
            className="relative z-10 h-[45dvh] w-auto max-w-none object-contain object-center sm:h-[60dvh] md:h-[78dvh] lg:h-[88dvh]"
                initial={{ opacity: 0, y: 50 }}
                animate={isFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/assets/placeholders/image-not-found.svg";
                }}
            />
            {/* Description Text for Mobile ONLY */}
            <motion.div 
               className="mt-6 flex flex-col items-center text-center md:hidden z-20 px-4 pb-24"
               initial={{ opacity: 0 }}
               animate={isFinished ? { opacity: 1 } : { opacity: 0 }}
               transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="max-w-xs text-sm leading-relaxed text-foreground/80">
                {mainText}
              </p>
              <a href={readMoreLink} className="mt-3 inline-block text-sm font-medium text-foreground underline decoration-from-font">
                Read More
              </a>
            </motion.div>
        </div>

        {/* Build Bold Text (Top on mobile, Right on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="z-20 flex items-center justify-center text-center w-full md:w-1/3 md:justify-start md:text-left order-2 md:order-3 mb-0 mt-4 md:m-0"
        >
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl md:text-8xl lg:text-9xl">
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
          animate={isFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm font-medium text-foreground/80 md:text-right"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
