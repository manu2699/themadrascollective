import Link from "next/link";
import { SITE_METADATA } from "../../data/siteConfig";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="font-display text-xl sm:text-2xl uppercase tracking-tighter">
          <Link href="/">{SITE_METADATA.title}</Link>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-tighter">
          <Link href="/" className="transition-colors hover:text-accent">
            {SITE_METADATA.edition}
          </Link>
        </div>
      </div>
    </nav>
  );
}

