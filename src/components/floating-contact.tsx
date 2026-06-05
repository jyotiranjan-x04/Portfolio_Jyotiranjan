"use client";

import { useState, useRef } from "react";
import { MessageCircle, Phone, GitBranch } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { InstagramBrandIcon } from "@/components/ui/icons/instagram-brand-icon";
import { cn } from "@/lib/utils";

const SupportIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.3499 15.65C18.6657 15.65 17.9863 15.5414 17.338 15.3262C16.9037 15.1843 16.3986 15.3033 16.0827 15.6203L14.3409 17.7946C11.536 16.2201 9.3878 13.7842 8.01633 10.6655L9.93282 8.5448C10.2224 8.2163 10.3235 7.74781 10.1873 7.3331C9.96025 6.6436 9.84992 5.9238 9.84992 5.19C9.84992 4.5328 9.35123 4 8.73693 4H5.39851C4.7842 4 4.14811 4.5518 4.2961 5.2505C5.03451 8.7497 6.81245 11.8906 9.34149 14.5459C11.8711 17.2023 14.8643 19.068 18.1963 19.8427C18.8576 19.9961 19.3499 19.3364 19.3499 18.6946V16.84C19.3499 16.1828 18.8512 15.65 18.2369 15.65H19.3499Z" fill="currentColor"/>
    <path d="M13 3C13 3 13.9213 2 16.5 2C19.0787 2 22 4.1204 22 7.5C22 10.8796 19 13.5 16.5 13.5C15.2285 13.5 14.1684 13.0645 13.4357 12.3991C13.2381 12.2198 12.9463 12.1979 12.7232 12.3402C12.4497 12.5147 11.9546 12.7788 11.4552 12.9863C11.2326 13.0788 11 12.8722 11 12.6373V10.2227C11 9.9482 11.1378 9.691 11.3644 9.539C11.751 9.2798 13 8.3551 13 7.5V3Z" fill="currentColor"/>
    <circle cx="14.5" cy="7.5" r="1" fill="white"/>
    <circle cx="17.5" cy="7.5" r="1" fill="white"/>
    <circle cx="20.5" cy="7.5" r="1" fill="white"/>
  </svg>
)

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className="fixed max-md:bottom-[160px] md:bottom-6 right-4 md:right-6 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-14 h-14">
        <div 
          onClick={toggleOpen}
          className="absolute inset-0 bg-yellow-400 text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110 z-10 cursor-pointer"
        >
          <SupportIcon className="w-7 h-7" />
        </div>

        {/* GitHub (Top - 90 deg) */}
        <a
          href={portfolioData.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "absolute w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-0 border border-zinc-700 hover:border-white hover:text-white",
            isOpen ? "opacity-100 scale-100 -translate-y-[120px]" : "opacity-0 scale-0 pointer-events-none"
          )}
        >
          <GitBranch className="w-5 h-5" />
        </a>

        {/* Instagram (60 deg) */}
        <a
          href={portfolioData.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "absolute w-12 h-12 bg-zinc-900 text-pink-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 delay-[50ms] z-0 border border-zinc-700 hover:border-pink-500 hover:text-pink-400",
            isOpen ? "opacity-100 scale-100 -translate-y-[104px] -translate-x-[60px]" : "opacity-0 scale-0 pointer-events-none"
          )}
        >
          <InstagramBrandIcon className="w-5 h-5" />
        </a>

        {/* Phone (30 deg) */}
        <a
          href="tel:+918114325023"
          className={cn(
            "absolute w-12 h-12 bg-zinc-900 text-blue-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 delay-[100ms] z-0 border border-zinc-700 hover:border-blue-500 hover:text-blue-400",
            isOpen ? "opacity-100 scale-100 -translate-y-[60px] -translate-x-[104px]" : "opacity-0 scale-0 pointer-events-none"
          )}
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp (Left - 0 deg) */}
        <a
          href="https://wa.me/918114325023"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "absolute w-12 h-12 bg-zinc-900 text-green-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 delay-[150ms] z-0 border border-zinc-700 hover:border-green-500 hover:text-green-400",
            isOpen ? "opacity-100 scale-100 -translate-x-[120px]" : "opacity-0 scale-0 pointer-events-none"
          )}
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
