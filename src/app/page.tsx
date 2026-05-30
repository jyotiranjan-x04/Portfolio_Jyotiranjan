"use client";

import Link from "next/link";
import { ReactLenis } from "lenis/react";
import { BadgeCheck, BriefcaseBusiness, CalendarDays, Code, Gauge, Globe, LocateFixed, Sparkles, GitBranch, Mail, UserRound } from "lucide-react";

import { AboutSpotlight } from "@/components/about-spotlight";
import IntegrationHero from "@/components/ui/integration-hero";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import ShaderBackground from "@/components/ui/shader-background";
import { SectionTitle } from "@/components/section-title";
import { AosWrapper } from "@/components/ui/aos-wrapper";
import { portfolioData, projects, services } from "@/data/portfolio";
import { IconCloudDemo } from "@/components/icon-cloud-demo";
import { SiteFooter } from "@/components/site-footer";
import { ProjectsCarouselShowcase } from "@/components/projects-carousel-showcase";
import { PhotoGallery } from "@/components/ui/gallery";
import { ContactForm } from "@/components/contact-form";
import { InstagramBrandIcon } from "@/components/ui/icons/instagram-brand-icon";
import { MagneticText } from "@/components/ui/morphing-cursor";
import ScrollCardProjects from "@/components/ui/scroll-card";
import GradientCardShowcase from "@/components/ui/gradient-card-showcase";

const experienceEnhancements: Record<string, { summary: string; stats: { icon: typeof BadgeCheck; label: string }[]; technologies: string[]; impactLine: string; }> = {
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

export default function Home() {
  const experienceCards = portfolioData.experience;

  return (
    <ReactLenis root>
    <main style={{ overflowX: 'clip' }} className="bg-black text-white selection:bg-yellow-400 selection:text-black">
      <section id="home" className="relative">
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <ShaderBackground />
        </div>
        <MinimalistHero
          logoText="jyotiranjan."
          navLinks={[
            { label: "HOME", href: "#home" },
            { label: "ABOUT", href: "#about" },
            { label: "EXPERIENCE", href: "#experience" },
            { label: "PROJECTS", href: "#projects" },
            { label: "SERVICES", href: "#services" },
            { label: "CONTACT", href: "#contact" },
          ]}
          mainText={portfolioData.intro}
          readMoreLink="#about"
          imageSrc="/profile-side.svg"
          imageAlt="Side profile portrait of Jyotiranjan Sahoo"
          overlayText={{ part1: "build", part2: "bold." }}
          socialLinks={[
            { label: "GitHub", href: portfolioData.socials.github },
            { label: "LinkedIn", href: portfolioData.socials.linkedin },
            { label: "Instagram", href: portfolioData.socials.instagram },
          ]}
          locationText={portfolioData.location}
          className="bg-transparent"
        />
      </section>

      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <AosWrapper delay={0.1}>
          <IntegrationHero />
        </AosWrapper>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <AosWrapper delay={0.2}>
          <AboutSpotlight />
        </AosWrapper>
      </div>

      <section id="about" className="scroll-mt-24 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
        <section>
          <AosWrapper>
            <SectionTitle title="About Me" subtitle={portfolioData.about} />
          </AosWrapper>
          <div className="grid gap-10 md:grid-cols-2">
            <AosWrapper delay={0.1}>
              <div className="space-y-8 rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8 shadow-xl transition-all hover:border-yellow-400/30">
                <div>
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">Education</h3>
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-yellow-400">{portfolioData.education.degree}</p>
                    <p className="text-zinc-400">{portfolioData.education.school}</p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">Certificates</h3>
                  <ul className="space-y-3 text-zinc-300">
                    {portfolioData.certificates.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AosWrapper>
            <AosWrapper delay={0.2}>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8 shadow-xl transition-all hover:border-yellow-400/30">
                <h3 className="mb-8 text-2xl font-bold tracking-tight text-white">Experience</h3>
                <div className="space-y-8">
                  {portfolioData.experience.map((entry) => (
                    <article key={entry.company} className="group relative space-y-3 border-l-2 border-zinc-800 pl-6 transition-colors hover:border-yellow-400">
                      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-zinc-500 transition-colors group-hover:bg-yellow-400" />
                      <h4 className="text-xl font-semibold text-white">{entry.role}</h4>
                      <p className="text-sm font-medium tracking-wide text-yellow-400">{entry.company} <span className="opacity-50">·</span> {entry.period} <span className="opacity-50">·</span> {entry.location}</p>
                      <ul className="space-y-2 text-sm leading-relaxed text-zinc-400">
                        {entry.bullets.map((bullet) => (
                          <li key={bullet}>• {bullet}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </AosWrapper>
          </div>
        </section>

        <section className="space-y-8">
          <AosWrapper>
            <SectionTitle title="Tech Stack" subtitle="Core technologies in my day-to-day engineering and product workflow." />
          </AosWrapper>
          <AosWrapper delay={0.2}>
            <div className="rounded-[2.5rem] border border-zinc-800 bg-black p-4 shadow-2xl">
              <IconCloudDemo />
            </div>
          </AosWrapper>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {Object.entries(portfolioData.skills).map(([group, items], idx) => (
            <AosWrapper key={group} delay={idx * 0.15}>
              <article className="h-full rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8 transition-colors hover:border-yellow-400/30 hover:bg-zinc-900/80">
                <h3 className="mb-4 text-xl font-bold capitalize text-white">{group}</h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  {items.map(item => (
                    <span key={item} className="rounded-full bg-zinc-800 px-3 py-1.5 text-zinc-300 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </AosWrapper>
          ))}
        </section>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
        
        <section className="text-center">
          <AosWrapper>
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-1 text-xs text-zinc-200">
            <BriefcaseBusiness className="h-3.5 w-3.5 text-yellow-400" />
            Professional Experience
          </span>
          <SectionTitle
            title="Work Experience"
            subtitle="Timeline and responsibilities based on my real internship and project delivery history."
            className="mt-4"
          />
          </AosWrapper>
        </section>

        <section className="space-y-8">
          {experienceCards.map((card, idx) => (
            <AosWrapper key={card.company} delay={idx * 0.15}>
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
            </AosWrapper>
          ))}
        </section>
      
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
        
        <section className="space-y-6">
          <AosWrapper>
            <SectionTitle title="Featured Work" subtitle="A closer look at some of my proudest projects, spanning web, design, and AI." />
          </AosWrapper>
          <AosWrapper delay={0.2} duration={0.8}>
            <ProjectsCarouselShowcase projects={projects} />
          </AosWrapper>
        </section>

        <section className="space-y-8">
          <AosWrapper>
            <SectionTitle title="Project Collection" subtitle="Scroll through each project — architecture, impact, and live deliverables." />
          </AosWrapper>
        </section>
        </div>
      </section>

      {/* ScrollCardProjects lives outside all containers — it handles its own max-w-7xl internally */}
      <section className="py-4">
        <ScrollCardProjects projects={projects} maxCards={10} />
      </section>

      <section id="projects-gallery" className="py-16">
        <div className="mx-auto w-full max-w-7xl px-6">

        <section>
          <AosWrapper delay={0.4}>
            <PhotoGallery animationDelay={0.2} />
          </AosWrapper>
        </section>
      
        </div>
      </section>

      <section id="services" className="scroll-mt-24 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
        
        <AosWrapper>
          <SectionTitle
            title="Services"
            subtitle="End-to-end digital product support from concept, design, and engineering to launch."
          />
        </AosWrapper>

        <GradientCardShowcase
          cards={services.map((s, idx) => ({
            title: s.title,
            description: s.description,
            icon: s.icon,
            gradientFrom: [
              '#facc15',
              '#3b82f6',
              '#22c55e',
              '#f97316',
            ][idx % 4],
            gradientTo: [
              '#f97316',
              '#8b5cf6',
              '#06b6d4',
              '#ef4444',
            ][idx % 4],
          }))}
          contactHref="#contact"
        />
      
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
        
        <AosWrapper>
          <SectionTitle title="Contact" subtitle="Let’s build something premium and high-impact together." />
        </AosWrapper>

        <section className="flex justify-center rounded-3xl border border-zinc-800 bg-zinc-950/60 p-12 shadow-[0_0_40px_-15px_rgba(250,204,21,0.1)]">
          <AosWrapper delay={0.1}>
            <MagneticText text="HIRE ME" hoverText="LET'S BUILD" className="text-center font-black tracking-tighter" />
          </AosWrapper>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <AosWrapper delay={0.2}>
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/70 p-8 text-zinc-400 transition-all hover:border-yellow-400/60 hover:bg-zinc-900/80 hover:text-white">
              <GitBranch className="mb-4 h-10 w-10 text-zinc-500 transition-colors group-hover:text-yellow-400" />
              <span className="font-medium tracking-wide">GitHub</span>
            </a>
          </AosWrapper>
          <AosWrapper delay={0.3}>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/70 p-8 text-zinc-400 transition-all hover:border-yellow-400/60 hover:bg-zinc-900/80 hover:text-white">
              <UserRound className="mb-4 h-10 w-10 text-zinc-500 transition-colors group-hover:text-yellow-400" />
              <span className="font-medium tracking-wide">LinkedIn</span>
            </a>
          </AosWrapper>
          <AosWrapper delay={0.4}>
            <a href={portfolioData.socials.instagram} target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/70 p-8 text-zinc-400 transition-all hover:border-yellow-400/60 hover:bg-zinc-900/80 hover:text-white">
              <InstagramBrandIcon className="mb-4 h-10 w-10 grayscale transition-all group-hover:drop-shadow-lg group-hover:grayscale-0" />
              <span className="font-medium tracking-wide">Instagram</span>
            </a>
          </AosWrapper>
          <AosWrapper delay={0.5}>
            <a href={portfolioData.socials.email} className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/70 p-8 text-zinc-400 transition-all hover:border-yellow-400/60 hover:bg-zinc-900/80 hover:text-white">
              <Mail className="mb-4 h-10 w-10 text-zinc-500 transition-colors group-hover:text-yellow-400" />
              <span className="font-medium tracking-wide">Email Me</span>
            </a>
          </AosWrapper>
        </section>

        <AosWrapper delay={0.6}>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/40 p-8 pt-10 shadow-2xl">
            <h3 className="mb-8 text-center text-2xl font-semibold text-white">Send a Message</h3>
            <ContactForm />
          </div>
        </AosWrapper>
      
        </div>
      </section>

      <SiteFooter />
    </main>
    </ReactLenis>
  );
}
