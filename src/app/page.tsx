"use client";

import Link from "next/link";
import { ReactLenis } from "lenis/react";
import { ArrowRight } from "lucide-react";

import { AboutSpotlight } from "@/components/about-spotlight";
import IntegrationHero from "@/components/ui/integration-hero";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import ShaderBackground from "@/components/ui/shader-background";
import { SectionTitle } from "@/components/section-title";
import { AosWrapper } from "@/components/ui/aos-wrapper";
import { portfolioData, services } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ScrollCardProjects from "@/components/ui/scroll-card";
import GradientCardShowcase from "@/components/ui/gradient-card-showcase";
import { MagneticText } from "@/components/ui/morphing-cursor";
import { Marquee } from "@/components/ui/marquee";
import { PhotoGallery } from "@/components/ui/gallery";

export default function Home() {
  return (
    <ReactLenis root>
      <SiteHeader />
      <main
        style={{ overflowX: "clip" }}
        className="bg-black text-white selection:bg-yellow-400 selection:text-black"
      >
        
        {/* ──────── Hero ──────── */}
        <section id="home" className="relative">
          <div className="pointer-events-none absolute inset-0 opacity-35">
            <ShaderBackground />
          </div>
          <MinimalistHero
            logoText="jyotiranjan."
            navLinks={[
              { label: "HOME", href: "/" },
              { label: "ABOUT", href: "/about" },
              { label: "EXPERIENCE", href: "/experience" },
              { label: "PROJECTS", href: "/projects" },
              { label: "SERVICES", href: "/services" },
              { label: "CONTACT", href: "/contact" },
            ]}
            mainText={portfolioData.intro}
            readMoreLink="/about"
            imageSrc="/profile-side.svg"
            imageAlt="Side profile portrait of Jyotiranjan Sahoo"
            overlayText={{ part1: "build", part2: "bold." }}
            socialLinks={[
              { label: "GitHub", href: portfolioData.socials.github },
              { label: "Instagram", href: portfolioData.socials.instagram },
            ]}
            locationText={portfolioData.location}
            className="bg-transparent"
          />
        </section>

        {/* ──────── Integration Hero ──────── */}
        <div className="mx-auto w-full max-w-7xl px-6 py-10">
          <AosWrapper delay={0.1}>
            <IntegrationHero />
          </AosWrapper>
        </div>

        {/* ──────── Marquee ──────── */}
        <Marquee text="FULL STACK WEB DEVELOPER • REACT.JS & NEXT.JS EXPERT • HIRE FREELANCE DEVELOPER INDIA • " repeat={6} />

        {/* ──────── About teaser ──────── */}
        <div className="mx-auto w-full max-w-7xl px-6 py-10">
          <AosWrapper delay={0.2}>
            <AboutSpotlight />
          </AosWrapper>
          <AosWrapper delay={0.3}>
            <div className="mt-6 flex justify-center">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-2.5 text-sm font-medium text-zinc-200 transition-all hover:border-yellow-400/50 hover:bg-zinc-800 hover:text-white"
              >
                Learn more about me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AosWrapper>
        </div>

        {/* ──────── Featured Projects ──────── */}
        <section className="py-16">
          <div className="mx-auto w-full max-w-7xl px-6 pb-8">
            <AosWrapper>
              <SectionTitle
                title="Featured Projects"
                subtitle="Scroll through my featured client deliveries — real products, live and in production."
              />
            </AosWrapper>
          </div>

          <ScrollCardProjects />

          <AosWrapper delay={0.2}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-6 py-2.5 text-sm font-medium text-yellow-400 transition-all hover:bg-yellow-400/20 hover:shadow-lg hover:shadow-yellow-400/10"
              >
                View all projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AosWrapper>
        </section>

        {/* ──────── Services preview ──────── */}
        <section className="py-16">
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
                gradientFrom: ["#facc15", "#3b82f6", "#22c55e", "#f97316"][idx % 4],
                gradientTo: ["#f97316", "#8b5cf6", "#06b6d4", "#ef4444"][idx % 4],
              }))}
              contactHref="/contact"
            />

            <AosWrapper delay={0.2}>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-2.5 text-sm font-medium text-zinc-200 transition-all hover:border-yellow-400/50 hover:bg-zinc-800 hover:text-white"
                >
                  All services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AosWrapper>
          </div>
        </section>

        {/* ──────── Testimonials / Stories ──────── */}
        <section className="py-16">
          <div className="mx-auto w-full max-w-7xl px-6">
            <AosWrapper>
              <PhotoGallery animationDelay={0.2} />
            </AosWrapper>
          </div>
        </section>

        {/* ──────── CTA ──────── */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="flex flex-col items-center gap-8 rounded-3xl border border-zinc-800 bg-zinc-950/60 p-12 shadow-[0_0_40px_-15px_rgba(250,204,21,0.1)]">
              <AosWrapper>
                <MagneticText
                  text="HIRE ME"
                  hoverText="LET'S BUILD"
                  className="text-center font-black tracking-tighter"
                />
              </AosWrapper>
              <AosWrapper delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </AosWrapper>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </ReactLenis>
  );
}
