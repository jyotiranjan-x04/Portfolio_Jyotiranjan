import { portfolioData } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/70 bg-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <p>{portfolioData.location}</p>
      </div>
    </footer>
  );
}
