"use client";

import { services } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { PageTransition } from "@/components/ui/page-transition";
import GradientCardShowcase from "@/components/ui/gradient-card-showcase";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <PageTransition>
        <main className="bg-black text-white selection:bg-yellow-400 selection:text-black">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <SectionTitle
              title="Services"
              subtitle="End-to-end digital product support from concept, design, and engineering to launch."
            />

            <div className="mt-10">
              <GradientCardShowcase
                cards={services.map((s, idx) => ({
                  title: s.title,
                  description: s.description,
                  icon: s.icon,
                  gradientFrom: ['#facc15', '#3b82f6', '#22c55e', '#f97316'][idx % 4],
                  gradientTo: ['#f97316', '#8b5cf6', '#06b6d4', '#ef4444'][idx % 4],
                }))}
                contactHref="/contact"
              />
            </div>
          </div>
        </main>
      </PageTransition>
      <SiteFooter />
    </>
  );
}
