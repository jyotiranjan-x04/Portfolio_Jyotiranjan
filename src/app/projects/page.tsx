"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { PageTransition } from "@/components/ui/page-transition";
import { motion } from "framer-motion";
import { PhotoGallery } from "@/components/ui/gallery";


export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <PageTransition>
        <main className="bg-black text-white selection:bg-yellow-400 selection:text-black">
          {/* Header */}
          <div className="mx-auto w-full max-w-7xl px-6 pt-20 pb-6">
            <SectionTitle
              title="All Projects"
              subtitle="Every project I've built — from SaaS platforms and e-commerce storefronts to B2B websites and AI tools."
            />
          </div>

          {/* Full project grid */}
          <div className="mx-auto w-full max-w-7xl px-6 pb-16">

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20, filter: 'blur(3px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: false, amount: 0.05, margin: "100px" }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay: (index % 3) * 0.1 }}
                >
                  <Link href={`/projects/${project.slug}`} className="group block h-full">
                    <article className="h-full rounded-2xl border border-zinc-800 bg-zinc-950/70 overflow-hidden transition-all duration-300 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-400/5">
                      {/* Image */}
                      <div className="relative h-44 w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 90vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {project.clientLocation && (
                          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-sm border border-zinc-600 px-2.5 py-0.5 text-[11px] text-zinc-200">
                            <MapPin className="h-3 w-3" />
                            {project.clientLocation}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="text-xs font-semibold text-yellow-400">{project.period}</p>
                          <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-all group-hover:text-yellow-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>

                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        <p className="mt-1.5 text-sm text-zinc-400 line-clamp-2">{project.summary}</p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.stack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-zinc-700 bg-zinc-800/60 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.stack.length > 4 && (
                            <span className="self-center text-[10px] text-zinc-500">
                              +{project.stack.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>


        </main>
      </PageTransition>
      <SiteFooter />
    </>
  );
}
