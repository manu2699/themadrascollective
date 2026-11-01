import { MARQUEE_ITEMS } from "../../data/siteConfig";

export default function MarqueeTicker() {
  // Repeat items so the ticker loop is dense and seamless
  const repeatedItems = Array(4).fill(MARQUEE_ITEMS).flat();

  return (
    <div className="border-b border-border py-3.5 overflow-hidden select-none" aria-hidden="true">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center">
          {repeatedItems.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center mx-4">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground">
                {item}
              </span>
              <span className="mx-3 sm:mx-10 text-accent">·</span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center">
          {repeatedItems.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center mx-4">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground">
                {item}
              </span>
              <span className="mx-3 sm:mx-10 text-accent">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

