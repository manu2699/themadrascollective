import Link from "next/link";
import { FOOTER_NAV_LINKS, SITE_METADATA } from "../../data/siteConfig";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row">
        <div className="font-display text-4xl uppercase leading-none tracking-tighter">
          The Madras <br /> Collective
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h4 className="mb-4 font-mono text-[10px] uppercase text-muted-foreground">Navigation</h4>
            <ul className="space-y-2 font-mono text-[11px] uppercase tracking-tight">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-[10px] uppercase text-muted-foreground">Social</h4>
            <ul className="space-y-2 font-mono text-[11px] uppercase tracking-tight">
              <li>
                <a
                  href={SITE_METADATA.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left font-mono text-[10px] uppercase text-muted-foreground md:text-right whitespace-pre-line">
          {SITE_METADATA.copyrightNotice}
        </div>
      </div>
    </footer>
  );
}

