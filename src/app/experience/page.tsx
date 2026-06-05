"use client";

import { BadgeCheck, BriefcaseBusiness, CalendarDays, Code, Gauge, Globe, LocateFixed, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { PageTransition, StaggerContainer, StaggerItem } from "@/components/ui/page-transition";

const experienceEnhancements: Record<string, { summary: string; stats: { icon: typeof BadgeCheck; label: string }[]; technologies: string[]; impactLine: string }> = {
  "Airobosoft Products and Services LLP": {
    summary: "Worked as a full-stack developer intern building production-oriented web modules, API workflows, and release-ready features across multiple product categories.",
    stats: [
      { icon: BadgeCheck, label: "Multi-module product delivery" },
      { icon: Gauge, label: "Reliable API-first workflows" },
      { icon: Globe, label: "Cross-functional feature rollouts" },
      { icon: Sparkles, label: "Agile weekly shipping cadence" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "REST APIs", "Git"],
    impactLine: "Delivered scalable full-stack features with strong reliability and collaborative execution.",
  },
  "Pixizip Solutions Pvt. Ltd.": {
    summary: "Contributed as a graphic design intern creating high-quality digital creatives and brand assets for client-facing web and marketing needs.",
    stats: [
      { icon: BadgeCheck, label: "5+ client design projects" },
      { icon: Gauge, label: "Higher visual consistency" },
      { icon: Globe, label: "Web, app, and social creatives" },
      { icon: Sparkles, label: "Stronger brand presentation" },
    ],
    technologies: ["Figma", "Canva", "Adobe Creative Suite", "Brand Design"],
    impactLine: "Improved design quality and delivery outcomes for client campaigns.",
  },
};

export default function ExperiencePage() {
  const experienceCards = portfolioData.experience;

  return (
    <>
      <SiteHeader />
      <PageTransition>
        <main className="bg-black text-white selection:bg-yellow-400 selection:text-black">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <StaggerContainer staggerDelay={0.12}>
              <StaggerItem>
                <div className="text-center">
                  <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-1 text-xs text-zinc-200">
                    <BriefcaseBusiness className="h-3.5 w-3.5 text-yellow-400" />
                    Professional Experience
                  </span>
                  <SectionTitle
                    title="Work Experience"
                    subtitle="Timeline and responsibilities based on my real internship and project delivery history."
                    className="mt-4"
                  />
                </div>
              </StaggerItem>

              <div className="space-y-8 mt-10">
                {experienceCards.map((card) => (
                  <StaggerItem key={card.company}>
                    <article className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-10 shadow-2xl transition-all hover:border-yellow-400/30">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h2 className="text-3xl font-bold text-white">{card.company}</h2>
                          <p className="mt-1 text-xl font-semibold text-yellow-400">{card.role}</p>
                        </div>
                        <div className="space-y-1 text-sm text-zinc-400 md:text-right">
                          <p className="inline-flex items-center gap-1.5 md:justify-end">
                            <CalendarDays className="h-4 w-4" />
                            {card.period}
                          </p>
                          <p className="inline-flex items-center gap-1.5 md:justify-end">
                            <LocateFixed className="h-4 w-4" />
                            {card.location}
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 text-zinc-200">
                        {experienceEnhancements[card.company]?.summary ?? card.bullets[0]}
                      </p>

                      {experienceEnhancements[card.company]?.stats ? (
                        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                          {experienceEnhancements[card.company].stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="rounded-xl border border-yellow-400/30 bg-zinc-900/70 px-4 py-3 text-center text-sm text-zinc-100"
                            >
                              <stat.icon className="mx-auto mb-2 h-4 w-4 text-yellow-400" />
                              {stat.label}
                            </div>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-7 space-y-4">
                        <h3 className="inline-flex items-center gap-2 text-xl font-semibold text-white">
                          <Code className="h-5 w-5 text-yellow-400" />
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-2 text-zinc-200">
                          {card.bullets.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {experienceEnhancements[card.company]?.technologies ? (
                        <div className="mt-7 space-y-3">
                          <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {experienceEnhancements[card.company].technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-yellow-400/35 bg-zinc-900 px-3 py-1 text-sm text-zinc-100"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {experienceEnhancements[card.company]?.impactLine ? (
                        <div className="mt-8 border-t border-zinc-800 pt-4 text-sm text-zinc-300">
                          <span className="inline-flex items-center gap-2 text-yellow-400">
                            <BadgeCheck className="h-4 w-4" />
                            {experienceEnhancements[card.company].impactLine}
                          </span>
                        </div>
                      ) : null}
                    </article>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </main>
      </PageTransition>
      <SiteFooter />
    </>
  );
}
