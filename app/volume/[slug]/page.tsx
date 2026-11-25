import { notFound } from "next/navigation";
import Link from "next/link";
import { COLLECTIONS } from "../../data/events";
import GalleryCarousel from "../../components/GalleryCarousel";
import InstagramEmbed from "../../components/InstagramEmbed";
import LazyVideoPlayer from "../../components/LazyVideoPlayer";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COLLECTIONS.filter((item) => item.active && item.details).map((item) => ({
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
        <Navbar />

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
              {(details.duration || details.capacity) && (
                <div className="grid grid-cols-2 gap-4">
                  {details.duration && (
                    <div>
                      <span className="block font-mono text-[10px] uppercase text-muted-foreground">Duration</span>
                      <span className="font-mono text-xs uppercase font-medium">{details.duration}</span>
                    </div>
                  )}
                  {details.capacity && (
                    <div>
                      <span className="block font-mono text-[10px] uppercase text-muted-foreground">Capacity</span>
                      <span className="font-mono text-xs uppercase font-medium">{details.capacity}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Main Layout Grid */}
          <section className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
            {/* Left side: Gallery/Media & Curatorial note */}
            <div className="md:col-span-7 space-y-12">
              {details.videoUrl ? (
                <div className="animate-reveal space-y-3" style={{ animationDelay: "100ms" }}>
                  <LazyVideoPlayer
                    src={details.videoUrl}
                    title={`${collection.artist} - ${collection.title}`}
                  />
                  {details.instagramReelUrl && (
                    <a
                      href={details.instagramReelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent"
                    >
                      Open on Instagram ↗
                    </a>
                  )}
                </div>
              ) : details.instagramReelUrl ? (
                <div className="animate-reveal space-y-3" style={{ animationDelay: "100ms" }}>
                  <InstagramEmbed
                    url={details.instagramReelUrl}
                    caption={`${collection.artist} — ${collection.title}`}
                  />
                  <a
                    href={details.instagramReelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent"
                  >
                    Open on Instagram ↗
                  </a>
                </div>
              ) : details.gallery && details.gallery.length > 0 ? (
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
              {details.setlist && details.setlist.length > 0 && (
                <div className="animate-reveal space-y-4" style={{ animationDelay: "150ms" }}>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/40 pb-2">
                    {collection.volume.startsWith("LISTENING") ? "Albums" : "Program"}
                  </h3>
                  <div className="divide-y divide-border/20 font-mono text-xs">
                    {details.setlist.map((track, i) => (
                      <div key={i} className="flex justify-between gap-4 py-3">
                        <span>{track.name}</span>
                        <span className="shrink-0 text-muted-foreground">{track.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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

      <Footer />
    </div>
  );
}
