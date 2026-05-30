"use client";

import { BriefcaseBusiness, FolderKanban, House, Mail, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

import { LimelightNav, NavItem } from "@/components/ui/limelight-nav";

export const PortfolioLimelightNavDemo = () => {
  const router = useRouter();

  const customNavItems: NavItem[] = [
    { id: "home", icon: <House />, label: "Home", onClick: () => router.push("/") },
    { id: "about", icon: <UserRound />, label: "About", onClick: () => router.push("/about") },
    {
      id: "projects",
      icon: <FolderKanban />,
      label: "Projects",
      onClick: () => router.push("/projects"),
    },
    {
      id: "services",
      icon: <BriefcaseBusiness />,
      label: "Services",
      onClick: () => router.push("/services"),
    },
    { id: "contact", icon: <Mail />, label: "Contact", onClick: () => router.push("/contact") },
  ];

  return (
    <LimelightNav
      className="bg-secondary/60 dark:bg-card/50 dark:border-accent/50 rounded-xl"
      items={customNavItems}
    />
  );
};

export const LimelightNavDefaultDemo = () => {
  return <LimelightNav />;
};
