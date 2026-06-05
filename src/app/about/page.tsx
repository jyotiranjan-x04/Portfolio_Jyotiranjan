"use client";

import { portfolioData } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { IconCloudDemo } from "@/components/icon-cloud-demo";
import { PageTransition, StaggerContainer, StaggerItem } from "@/components/ui/page-transition";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <PageTransition>
        <main className="bg-black text-white selection:bg-yellow-400 selection:text-black">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            {/* Page heading */}
            <StaggerContainer staggerDelay={0.1}>
              <StaggerItem>
                <SectionTitle
                  title="About Me"
                  subtitle={portfolioData.about}
                />
              </StaggerItem>

              {/* Education & Certificates */}
              <div className="grid gap-10 md:grid-cols-2 mt-10">
                <StaggerItem>
                  <div className="space-y-8 rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8 shadow-xl transition-all hover:border-yellow-400/30">
                    <div>
                      <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">
                        Education
                      </h3>
                      <div className="space-y-1">
                        <p className="text-lg font-medium text-yellow-400">
                          {portfolioData.education.degree}
                        </p>
                        <p className="text-zinc-400">
                          {portfolioData.education.school}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">
                        Certificates
                      </h3>
                      <ul className="space-y-3 text-zinc-300">
                        {portfolioData.certificates.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8 shadow-xl transition-all hover:border-yellow-400/30">
                    <h3 className="mb-8 text-2xl font-bold tracking-tight text-white">
                      Experience
                    </h3>
                    <div className="space-y-8">
                      {portfolioData.experience.map((entry) => (
                        <article
                          key={entry.company}
                          className="group relative space-y-3 border-l-2 border-zinc-800 pl-6 transition-colors hover:border-yellow-400"
                        >
                          <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-zinc-500 transition-colors group-hover:bg-yellow-400" />
                          <h4 className="text-xl font-semibold text-white">
                            {entry.role}
                          </h4>
                          <p className="text-sm font-medium tracking-wide text-yellow-400">
                            {entry.company}{" "}
                            <span className="opacity-50">·</span>{" "}
                            {entry.period}{" "}
                            <span className="opacity-50">·</span>{" "}
                            {entry.location}
                          </p>
                          <ul className="space-y-2 text-sm leading-relaxed text-zinc-400">
                            {entry.bullets.map((bullet) => (
                              <li key={bullet}>• {bullet}</li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              </div>

              {/* Tech Stack */}
              <StaggerItem className="mt-16">
                <SectionTitle
                  title="Tech Stack"
                  subtitle="Core technologies in my day-to-day engineering and product workflow."
                />
                <div className="mt-6 rounded-[2.5rem] border border-zinc-800 bg-black p-4 shadow-2xl">
                  <IconCloudDemo />
                </div>
              </StaggerItem>

              {/* Skills grid */}
              <div className="grid gap-6 md:grid-cols-3 mt-12">
                {Object.entries(portfolioData.skills).map(
                  ([group, items], idx) => (
                    <StaggerItem key={group}>
                      <article className="h-full rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8 transition-colors hover:border-yellow-400/30 hover:bg-zinc-900/80">
                        <h3 className="mb-4 text-xl font-bold capitalize text-white">
                          {group}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm">
                          {items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full bg-zinc-800 px-3 py-1.5 text-zinc-300 font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </article>
                    </StaggerItem>
                  )
                )}
              </div>
            </StaggerContainer>
          </div>
        </main>
      </PageTransition>
      <SiteFooter />
    </>
  );
}
