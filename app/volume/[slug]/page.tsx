import { notFound } from "next/navigation";
import Link from "next/link";
import { COLLECTIONS } from "../../data/events";
import GalleryCarousel from "../../components/GalleryCarousel";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COLLECTIONS.filter((item) => item.active).map((item) => ({
    slug: item.slug,
  }));
}

export default async function VolumePage({ params }: PageProps) {
  const { slug } = await params;
  const collection = COLLECTIONS.find((item) => item.slug === slug);

  if (!collection || !collection.active || !collection.details) {
    notFound();
  }

  const { details } = collection;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <div className="font-display text-xl sm:text-2xl uppercase tracking-tighter">
              <Link href="/">The Madras Collective</Link>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-tighter">
              <Link href="/" className="hover:text-accent">
                Index / 2026 Edition
              </Link>
            </div>
          </div>
        </nav>

        <main className="mx-auto max-w-6xl px-4">
          {/* Back button */}
          <div className="py-6 border-b border-border">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-tighter text-muted-foreground hover:text-accent"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span> Back
            </Link>
          </div>

          {/* Hero Section */}
          <section className="grid grid-cols-1 gap-8 border-b border-border py-16 md:grid-cols-12">
            <div className="md:col-span-8 flex flex-col justify-center">
              <span className="font-mono text-xs uppercase text-accent mb-2">
                {collection.volume}
              </span>
              <h1 className="animate-reveal font-display text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tighter">
                {collection.title}
              </h1>
              <p className="mt-4 font-mono text-xs uppercase text-muted-foreground">
                {collection.description}
              </p>
            </div>
            <div className="md:col-span-4 border-l border-border pl-6 flex flex-col justify-center gap-4">
              <div>
                <span className="block font-mono text-[10px] uppercase text-muted-foreground">Date / Time</span>
                <span className="font-mono text-xs uppercase font-medium">{collection.time}</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-muted-foreground">Location</span>
                <span className="font-mono text-xs uppercase font-medium">{details.locationFull}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block font-mono text-[10px] uppercase text-muted-foreground">Duration</span>
                  <span className="font-mono text-xs uppercase font-medium">{details.duration}</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase text-muted-foreground">Capacity</span>
                  <span className="font-mono text-xs uppercase font-medium">{details.capacity}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Layout Grid */}
          <section className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
            {/* Left side: Gallery/Media & Curatorial note */}
            <div className="md:col-span-7 space-y-12">
              {details.gallery && details.gallery.length > 0 ? (
                <div className="animate-reveal" style={{ animationDelay: "100ms" }}>
                  <GalleryCarousel images={details.gallery} />
                </div>
              ) : collection.image ? (
                <div className="overflow-hidden border border-border animate-reveal" style={{ animationDelay: "100ms" }}>
                  <img
                    src={collection.image}
                    alt={`${collection.title} listening session`}
                    width={1200}
                    height={800}
                    loading="eager"
                    className="w-full object-cover aspect-video hover:scale-[1.01] transition-transform duration-700 outline-1 -outline-offset-1 outline-foreground/5"
                  />
                </div>
              ) : null}

              <div className="animate-reveal space-y-4" style={{ animationDelay: "200ms" }}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/40 pb-2">
                  Curatorial Note
                </h3>
                <p className="text-lg leading-relaxed text-pretty font-sans font-light">
                  {details.curatorNote}
                </p>
              </div>
            </div>

            {/* Right side: Setlist & Project Credits */}
            <div className="md:col-span-5 space-y-12">
              {/* Program Structure */}
              {/* <div className="animate-reveal space-y-4" style={{ animationDelay: "150ms" }}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/40 pb-2">
                  Program Structure
                </h3>
                <div className="divide-y divide-border/20 font-mono text-xs">
                  {details.setlist.map((track, i) => (
                    <div key={i} className="flex justify-between py-3">
                      <span>{track.name}</span>
                      <span className="text-muted-foreground">{track.duration}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Project Credits */}
              <div className="animate-reveal space-y-4" style={{ animationDelay: "250ms" }}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/40 pb-2">
                  Project Credits
                </h3>
                <div className="space-y-4 font-mono text-xs">
                  {details.credits.map((credit, i) => (
                    <div key={i} className="flex flex-col border-b border-border/10 pb-2">
                      <span className="text-muted-foreground text-[10px]">{credit.role}</span>
                      <span className="text-foreground uppercase mt-0.5 font-medium">{credit.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-12 mt-12 bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row">
          <div className="font-display text-4xl uppercase leading-none tracking-tighter">
            The Madras <br /> Collective
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="mb-4 font-mono text-[10px] uppercase text-muted-foreground">Navigation</h4>
              <ul className="space-y-2 font-mono text-[11px] uppercase tracking-tight">
                <li>
                  <Link href="/" className="hover:text-accent">
                    Index
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-accent">
                    Archive
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent">
                    Contact
                  </Link>
                </li>
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
            Chennai, India
            <br />
            EST. 2026 © All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
