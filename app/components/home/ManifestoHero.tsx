import Link from "next/link";
import { NAV_LINKS } from "../../data/siteConfig";

export default function ManifestoHero() {
  return (
    <section
      id="manifesto"
      className="relative grid grid-cols-1 gap-8 border-b border-border py-24 md:grid-cols-12 overflow-hidden"
    >
      <div className="md:col-span-8">
        <h1 className="animate-reveal font-display text-3xl sm:text-5xl leading-[0.85] tracking-tighter md:text-7xl">
          Building an <br /> intentional <br /> listening culture <br />
          in Madras.
        </h1>
        <p
          className="animate-reveal mt-8 max-w-md text-pretty text-muted-foreground"
          style={{ animationDelay: "150ms" }}
        >
          Intimate music shows and vinyl listening sessions, built around storytelling and creative curation.
        </p>
      </div>

      <div
        className="animate-reveal flex flex-col items-end justify-between gap-8 md:col-span-4"
        style={{ animationDelay: "200ms" }}
      >
        <div className="border-l border-border pl-4 text-right font-mono text-[11px] leading-relaxed">
          {NAV_LINKS.map((link) => {
            const isInternalAnchor = link.href.startsWith("#");
            if (isInternalAnchor) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="block transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                className="block transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

