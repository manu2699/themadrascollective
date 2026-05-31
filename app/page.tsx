import Link from "next/link";
import { COLLECTIONS } from "./data/events";

const tagLines = [
  {
    strike: "Attention",
    over: "Artistry"
  },
  {
    strike: "Experience",
    over: "Entertainment"
  },
  {
    strike: "Consumption",
    over: "Connection"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="font-display text-xl sm:text-2xl uppercase tracking-tighter">The Madras Collective</div>
          <div className="font-mono text-[10px] uppercase tracking-tighter">Index / 2026 Edition</div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4">
        {/* Manifesto Section */}
        <section id="manifesto" className="grid grid-cols-1 gap-8 border-b border-border py-24 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="flex gap-16 align-center mb-4">
              {tagLines.map((line, idx) => (
                <div key={idx} className="flex flex-row gap-1 align-center">
                  <span
                    key={'strike' + idx}
                    className="animate-reveal leading-relaxed line-through"
                    style={{ animationDelay: "100ms" }}
                  >
                    {line.strike}
                  </span>
                  <span
                    className="animate-reveal leading-relaxed"
                    style={{ animationDelay: "100ms" }}
                  >
                    {line.over}.
                  </span>

                </div>
              ))}
            </div>
            <h1 className="animate-reveal font-display text-5xl sm:text-6xl uppercase leading-[0.85] tracking-tighter md:text-8xl">
              Music is the <br /> protagonist.
            </h1>
            <p
              className="animate-reveal mt-8 max-w-md text-pretty text text-muted-foreground"
              style={{ animationDelay: "150ms" }}
            >
              {/* We facilitate the hush before the first note. In a culture of consumption, we curate meaningful intersections between artist and listener in Chennai. No hype. No spectacle. Just sound. */}
              We create intimate, meaningful concerts that celebrate artistic expression, storytelling and human connection over spectacle and production.
            </p>
          </div>
          <div
            className="animate-reveal flex flex-col items-end justify-end md:col-span-4"
            style={{ animationDelay: "200ms" }}
          >
            <div className="border-l border-border pl-4 text-right font-mono text-[11px] leading-relaxed">
              <a href="#manifesto" className="block hover:text-accent">(00) MANIFESTO</a>
              <a href="#archive" className="block hover:text-accent">(01) ARCHIVE</a>
              <a href="#collaborate" className="block hover:text-accent">(02) COLLABORATE</a>
              <Link href="/contact" className="block hover:text-accent">(03) CONTACT</Link>
            </div>
          </div>
        </section>

        {/* Archive Section */}
        <section id="archive" className="py-12">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Madras Sessions</h2>
            <span className="font-mono text-[10px] text-muted-foreground">[Scroll to explore]</span>
          </div>
          <div>
            {COLLECTIONS.map((item, index) => {
              const delay = 300 + index * 100;
              const content = (
                <div className="grid grid-cols-1 items-center gap-4 px-2 md:grid-cols-12">
                  <div className={`font-mono text-xs md:col-span-1 ${!item.active ? "text-muted-foreground" : ""}`}>
                    {item.volume}
                  </div>
                  <div className="md:col-span-4">
                    <h3
                      className={`font-display text-4xl uppercase tracking-tighter transition-opacity ${item.active
                        ? "group-hover:text-accent"
                        : "opacity-60 group-hover:opacity-100"
                        }`}
                    >
                      {item.artist}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase">{item.title}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:col-span-4 md:col-start-6">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={`${item.title} listening session`}
                        loading="lazy"
                        className="h-32 w-auto max-w-full shrink-0 object-contain border border-border/10 bg-zinc-900/5 outline-1 -outline-offset-1 outline-foreground/5"
                      />
                    )}
                    <p className="max-w-xs text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-left md:text-right md:col-span-3">
                    <span className="inline-block border border-accent px-2 py-1 font-mono text-[9px] uppercase tracking-tighter text-accent">
                      {item.time}
                    </span>
                  </div>
                </div>
              );

              return (
                <article
                  key={item.volume}
                  className={`group animate-reveal border-t border-border py-8 transition-colors ${item.active ? "hover:bg-foreground/[0.03] cursor-pointer" : ""
                    } ${index === COLLECTIONS.length - 1 ? "border-b" : ""}`}
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {item.active ? (
                    <Link href={`/volume/${item.slug}`}>
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* Collaborate Section */}
        <section id="collaborate" className="animate-reveal grid grid-cols-1 gap-12 py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/assets/artist-invite.jpg"
              alt="Hand adjusting a synthesizer in low light"
              loading="lazy"
              width="832"
              height="1024"
              className="aspect-[4/5] w-full object-cover outline-1 -outline-offset-1 outline-foreground/5"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-7">
            {/* <span className="mb-6 font-mono text-xs uppercase text-accent">Artist Registry</span> */}
            <p
              className="mb-4 max-w-lg text-pretty text-lg text-muted-foreground"
              style={{ animationDelay: "100ms" }}
            >
              {/* We are here to curate intimate musical concerts that connect us all through music, stories and shared silence. */}
              In a world of noise and performance, we return to what matters most: the music.
            </p>

            <h2 className="mb-8 font-display text-5xl uppercase tracking-tighter">Want to collaborate with us?</h2>
            <p className="mb-12 max-w-xl text-pretty text-lg text-muted-foreground">
              We are looking for performers who prioritize depth over volume. Whether you are an artist, a listener, or a curious collaborator. We read every message. The room is small, but the conversation is wide.
            </p>
            <a
              href="/contact"
              className="group flex items-center gap-4"
            >
              <div className="bg-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest text-background transition-colors group-hover:bg-accent">
                Connect with the Collective
              </div>
              {/* <span className="font-mono text-xs text-muted-foreground underline decoration-accent underline-offset-4 transition-colors group-hover:text-foreground">
                Entry Form MC-99
              </span> */}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-border px-4 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row">
          <div className="font-display text-4xl uppercase leading-none tracking-tighter">
            The Madras <br /> Collective
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="mb-4 font-mono text-[10px] uppercase text-muted-foreground">Navigation</h4>
              <ul className="space-y-2 font-mono text-[11px] uppercase tracking-tight">
                <li><a href="#archive" className="hover:text-accent">Archive</a></li>
                <li><a href="#manifesto" className="hover:text-accent">Manifesto</a></li>
                <li><a href="#collaborate" className="hover:text-accent">Artist Portal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-mono text-[10px] uppercase text-muted-foreground">Social</h4>
              <ul className="space-y-2 font-mono text-[11px] uppercase tracking-tight">
                <li>
                  <a href="https://www.instagram.com/the_madras_collective_/" target="_blank" rel="noreferrer" className="hover:text-accent">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-right font-mono text-[10px] uppercase text-muted-foreground">
            Chennai, India<br />EST. 2026 © All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
