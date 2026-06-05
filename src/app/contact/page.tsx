"use client";

import { GitBranch, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { ContactForm } from "@/components/contact-form";
import { InstagramBrandIcon } from "@/components/ui/icons/instagram-brand-icon";
import { MagneticText } from "@/components/ui/morphing-cursor";
import { PageTransition, StaggerContainer, StaggerItem } from "@/components/ui/page-transition";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <PageTransition>
        <main className="bg-black text-white selection:bg-yellow-400 selection:text-black">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <StaggerContainer staggerDelay={0.1}>
              <StaggerItem>
                <SectionTitle
                  title="Contact"
                  subtitle="Let's build something premium and high-impact together."
                />
              </StaggerItem>

              {/* HIRE ME CTA */}
              <StaggerItem className="mt-10">
                <section className="flex justify-center rounded-3xl border border-zinc-800 bg-zinc-950/60 p-12 shadow-[0_0_40px_-15px_rgba(250,204,21,0.1)]">
                  <MagneticText
                    text="HIRE ME"
                    hoverText="LET'S BUILD"
                    className="text-center font-black tracking-tighter"
                  />
                </section>
              </StaggerItem>

              <StaggerItem className="mt-10">
                <div className="grid gap-12 lg:grid-cols-2">
                  {/* Left: Contact Form */}
                  <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/40 p-8 shadow-2xl">
                    <h3 className="mb-8 text-2xl font-semibold text-white">
                      Send a Message
                    </h3>
                    <ContactForm />
                  </div>

                  {/* Right: Contact Details & Socials */}
                  <div className="relative flex flex-col justify-center space-y-12 rounded-3xl border border-zinc-800 bg-zinc-950/40 p-8 shadow-2xl overflow-hidden">

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2">Contact Details</h3>
                      <p className="text-zinc-400">Feel free to reach out directly via email or phone.</p>
                    </div>

                    <div className="space-y-6 relative z-10">
                      <div className="flex items-center gap-4 text-zinc-300">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800">
                          <Mail className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <p className="text-sm text-zinc-500">Email</p>
                          <a href="mailto:sahoojyotiranjan595@gmail.com" className="font-medium hover:text-red-400 transition-colors">
                            sahoojyotiranjan595@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-zinc-300">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800">
                          <Phone className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm text-zinc-500">Phone</p>
                          <a href="tel:+918114325023" className="font-medium hover:text-blue-400 transition-colors">
                            +91 8114325023
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-zinc-300">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800">
                          <MessageCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <p className="text-sm text-zinc-500">WhatsApp</p>
                          <a href="https://wa.me/918114325023" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-green-400 transition-colors">
                            +91 8114325023
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-zinc-300">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800">
                          <MapPin className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div>
                          <p className="text-sm text-zinc-500">Location</p>
                          <p className="font-medium">{portfolioData.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Social links row */}
                    <div className="pt-6 border-t border-zinc-800 relative z-10">
                      <p className="text-sm text-zinc-500 mb-4">Also find me on</p>
                      <div className="flex gap-4">
                        <a
                          href={portfolioData.socials.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 transition-all hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] group"
                        >
                          <GitBranch className="h-5 w-5 text-white" />
                        </a>
                        <a
                          href={portfolioData.socials.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 transition-all hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] group"
                        >
                          <InstagramBrandIcon className="h-5 w-5 transition-all group-hover:text-pink-500" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </main>
      </PageTransition>
      <SiteFooter />
    </>
  );
}
