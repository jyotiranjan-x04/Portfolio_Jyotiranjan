import React from "react";

type LinkItem = {
  label: string;
  href: string;
};

export const Component = () => {
  return (
    <section className="grid h-screen w-full place-content-center gap-2 bg-background text-black">
      <FlipLink href="https://x.com/thisis_vaib">Twitter</FlipLink>
      <FlipLink href="https://linkedin.com/in/vaib215">Linkedin</FlipLink>
      <FlipLink href="https://github.com/vaib215">Github</FlipLink>
      <FlipLink href="https://instagram.com/thisis_vaib">Instagram</FlipLink>
    </section>
  );
};

export const FlipLink = ({
  children,
  href,
  className,
}: {
  children: string;
  href: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group text-primary relative block overflow-hidden whitespace-nowrap font-black uppercase ${className ?? "text-4xl sm:text-7xl md:text-8xl lg:text-9xl"}`}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </a>
  );
};

export function FlipLinksRow({ links }: { links: LinkItem[] }) {
  return (
    <div className="relative z-50 flex flex-col items-start gap-3">
      {links.map((link) => (
        <FlipLink
          key={link.label}
          href={link.href}
          className="text-2xl sm:text-3xl md:text-4xl text-foreground/90 hover:text-yellow-300"
        >
          {link.label}
        </FlipLink>
      ))}
    </div>
  );
}
