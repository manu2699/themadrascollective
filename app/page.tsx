import Link from "next/link";
import { COLLECTIONS, UPCOMING_SESSIONS } from "./data/events";

const tagLines = [
  {
    strike: "Attention",
    over: "Artistry"
  },
  {
    strike: "Entertainment",
    over: "Experience"
  },
  {
    strike: "Consumption",
    over: "Connection"
  }
];

const marqueeItems = [
  "Intimate Music Shows",
  "Vinyl Listening Sessions",
  "Storytelling",
  "Creative Curation",
];

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
            <div className="flex flex-wrap gap-2 sm:gap-8 md:gap-16 items-center mb-4">
              {tagLines.map((line, idx) => (
                <div key={idx} className="flex flex-row gap-1 items-center">
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
            <h1 className="animate-reveal font-display text-3xl sm:text-5xl  leading-[0.85] tracking-tighter md:text-7xl">
              Building an <br /> intentional <br /> listening culture <br />
              in Chennai.
            </h1>
            <p
              className="animate-reveal mt-8 max-w-md text-pretty text text-muted-foreground"
              style={{ animationDelay: "150ms" }}
            >
              {/* We facilitate the hush before the first note. In a culture of consumption, we curate meaningful intersections between artist and listener in Chennai. No hype. No spectacle. Just sound. */}
              Intimate music shows and vinyl listening sessions, built around storytelling and creative curation.
            </p>
          </div>
          <div
            className="animate-reveal flex flex-col items-end justify-end md:col-span-4"
            style={{ animationDelay: "200ms" }}
          >
            <div className="border-l border-border pl-4 text-right font-mono text-[11px] leading-relaxed">
              <a href="#manifesto" className="block hover:text-accent">(00) MANIFESTO</a>
              <a href="#what-we-do" className="block hover:text-accent">(01) WHAT WE DO</a>
              <a href="#sessions" className="block hover:text-accent">(02) SESSIONS</a>
              <a href="#collaborate" className="block hover:text-accent">(03) COLLABORATE</a>
              <Link href="/contact" className="block hover:text-accent">(04) CONTACT</Link>
            </div>
          </div>
        </section>

        {/* Marquee Banner */}
        <div className="border-b border-border py-3.5 overflow-hidden select-none" aria-hidden="true">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <div className="flex shrink-0 items-center">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
                <div key={`m1-${idx}`} className="flex items-center mx-4">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground">
                    {item}
                  </span>
                  <span className="mx-3 sm:mx-10 text-accent">·</span>
                </div>
              ))}
            </div>
            <div className="flex shrink-0 items-center">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
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

        {/* What We Do Section */}
        <section id="what-we-do" className="border-b border-border py-16 md:py-24">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-accent">
                (01) Overview
              </span>
              <h2 className="font-display text-4xl uppercase tracking-tighter sm:text-5xl md:text-6xl">
                What we do
              </h2>
            </div>
            <p className="max-w-md text-pretty font-mono text-xs text-muted-foreground md:text-right">
              Two formats, one idea: give music your full attention.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-b border-border md:grid-cols-2">
            {/* Format 01: Madras Sessions */}
            <div className="group flex flex-col justify-between border-b border-border p-8 transition-colors duration-200 hover:bg-foreground/[0.03] sm:p-10 md:border-b-0 md:border-r md:p-12">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="inline-block border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                    Format 01
                  </span>
                  <div className="text-muted-foreground transition-colors group-hover:text-accent">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 font-display text-3xl uppercase tracking-tighter transition-colors group-hover:text-accent sm:text-4xl">
                  Madras Sessions
                </h3>
                <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                  Intimate music shows that revolve around storytelling and creative curation. Small rooms, artists up close, no spectacle.
                </p>
              </div>
            </div>

            {/* Format 02: Vinyl Listening Sessions */}
            <div className="group flex flex-col justify-between p-8 transition-colors duration-200 hover:bg-foreground/[0.03] sm:p-10 md:p-12">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="inline-block border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                    Format 02
                  </span>
                  <div className="text-muted-foreground transition-colors group-hover:text-accent">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                      <path d="M12 5a7 7 0 0 1 7 7" />
                      <path d="M12 19a7 7 0 0 1-7-7" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 font-display text-3xl uppercase tracking-tighter transition-colors group-hover:text-accent sm:text-4xl">
                  Vinyl Listening Sessions
                </h3>
                <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                  A room, a record and nothing else. We play albums in full on vinyl and listen together, one edition at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sessions Section */}
        <section id="sessions" className="border-b border-border py-16 md:py-24">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-accent">
                (02) Sessions
              </span>
              <h2 className="font-display text-4xl uppercase tracking-tighter sm:text-5xl md:text-6xl">
                Upcoming
              </h2>
            </div>
            <p className="max-w-md text-pretty font-mono text-xs text-muted-foreground md:text-right">
              Seats are limited. Follow us for ticket and venue updates.
            </p>
          </div>

          {/* Upcoming Sessions List */}
          <div className="border-t border-border">
            {UPCOMING_SESSIONS.map((session, index) => {
              const delay = 200 + index * 100;
              return (
                <article
                  key={session.id}
                  className="group animate-reveal border-b border-border py-8 transition-colors hover:bg-foreground/[0.02]"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-12 sm:items-center">
                    {/* Date & Format Badge */}
                    <div className="sm:col-span-3 lg:col-span-2">
                      <div className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                        {session.date}
                      </div>
                      <span className="mt-1 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
                        {session.category}
                      </span>
                    </div>

                    {/* Title & Venue / Description */}
                    <div className="sm:col-span-6 lg:col-span-8">
                      <h3 className="font-display text-2xl uppercase tracking-tighter transition-colors group-hover:text-accent sm:text-3xl md:text-4xl">
                        {session.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">
                        {session.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 sm:col-span-3 sm:pt-0 lg:col-span-2 sm:text-right">
                      <a
                        href={session.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-background transition-colors hover:bg-accent hover:text-white"
                      >
                        Updates
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Past Sessions Archive */}
          <div className="mt-16 pt-8">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Archive
                </span>
                <h3 className="font-display text-2xl uppercase tracking-tighter sm:text-3xl">
                  Past Sessions
                </h3>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">[Scroll to explore]</span>
            </div>

            <div className="border-t border-border">
              {COLLECTIONS.filter((item) => item.active).map((item, index) => {
                const delay = 400 + index * 100;
                const content = (
                  <div className="grid grid-cols-1 items-center gap-4 px-2 md:grid-cols-12">
                    <div className="font-mono text-xs md:col-span-1">
                      {item.volume}
                    </div>
                    <div className="md:col-span-4">
                      <h4
                        className="font-display text-4xl uppercase tracking-tighter transition-opacity group-hover:text-accent"
                      >
                        {item.artist}
                      </h4>
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
                    className="group animate-reveal border-b border-border py-8 transition-colors hover:bg-foreground/[0.03] cursor-pointer"
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    <Link href={`/volume/${item.slug}`}>
                      {content}
                    </Link>
                  </article>
                );
              })}
            </div>
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
                <li><a href="#manifesto" className="hover:text-accent">Manifesto</a></li>
                <li><a href="#what-we-do" className="hover:text-accent">What We Do</a></li>
                <li><a href="#sessions" className="hover:text-accent">Sessions</a></li>
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
