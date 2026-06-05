"use client";

import Link from "next/link";
import { BriefcaseBusiness, FolderKanban, House, Mail, Palette, UserRound } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { AnimatedLetterText } from "@/components/ui/potfolio-text";
import { LimelightNav, NavItem } from "@/components/ui/limelight-nav";
import Dock from "@/components/ui/dock";

const navItems = [
  { id: "home", href: "/", label: "Home", icon: <House /> },
  { id: "about", href: "/about", label: "About", icon: <UserRound /> },
  { id: "experience", href: "/experience", label: "Experience", icon: <BriefcaseBusiness /> },
  { id: "projects", href: "/projects", label: "Projects", icon: <FolderKanban /> },
  { id: "services", href: "/services", label: "Services", icon: <Palette /> },
  { id: "contact", href: "/contact", label: "Contact", icon: <Mail /> },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const mappedItems: NavItem[] = navItems.map((item) => ({
    id: item.id,
    icon: item.icon,
    label: item.label,
    onClick: () => router.push(item.href),
  }));

  const dockItems = navItems.map((item) => ({
    icon: item.icon,
    label: item.label,
    onClick: () => router.push(item.href),
  }));

  const activeIndex = Math.max(
    navItems.findIndex((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    ),
    0
  );

  return (
    <>
      <header className="sticky top-0 z-50 pt-2 pointer-events-none">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 pointer-events-auto">
          <Link href="/" className="text-xl font-bold tracking-wider text-white">
            jyotiranjan.
          </Link>
          <div className="hidden md:flex">
            <LimelightNav
              items={mappedItems}
              defaultActiveIndex={activeIndex}
              className="bg-zinc-900/70"
              iconClassName="text-zinc-200"
              iconContainerClassName="px-4"
              limelightClassName="bg-yellow-400"
            />
          </div>
        </nav>
      </header>

      {/* Mobile Dock Navigation */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 pointer-events-auto flex justify-center">
        <Dock items={dockItems} className="py-0 px-2" />
      </div>
    </>
  );
}
