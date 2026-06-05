import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ProjectTechStack } from "@/components/project-tech-stack";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Details & Highlights */}
          <div className="space-y-8 lg:col-span-5">
            <section className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-yellow-400">{project.period}</p>
                {project.clientLocation && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-200">
                    {project.clientLocation}
                  </span>
                )}
              </div>
              <SectionTitle title={project.title} subtitle={project.about || project.summary} className="mb-0" />
              <ProjectTechStack stack={project.stack} className="mt-2" />
              {project.liveDemo && project.liveDemo !== "#" && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2.5 text-sm font-medium text-yellow-400 transition-all hover:bg-yellow-400/20 hover:shadow-lg hover:shadow-yellow-400/10"
                >
                  Visit Live Site →
                </a>
              )}
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
              <h2 className="mb-4 text-xl font-semibold text-yellow-400">Highlights</h2>
              <ul className="space-y-2 text-zinc-300">
                {project.highlights.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Images */}
          <div className="space-y-8 lg:col-span-7">
            {project.galleryImages.map((image) => (
              <div key={image} className="overflow-hidden rounded-2xl border border-zinc-800 shadow-xl">
                <Image 
                  src={image} 
                  alt={project.title} 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto object-cover" 
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
