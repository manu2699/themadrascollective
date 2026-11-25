import Link from "next/link";
import Image from "next/image";
import { COLLECTIONS } from "../../data/events";

export default function PastSessionsArchive() {
  const activeCollections = COLLECTIONS.filter((item) => item.active);

  return (
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
        {activeCollections.map((item, index) => {
          const delay = 400 + index * 100;

          const content = (
            <div className="grid grid-cols-1 items-center gap-4 px-2 md:grid-cols-12">
              <div className="font-mono text-xs md:col-span-1">
                {item.volume}
              </div>
              <div className="md:col-span-4">
                <h4 className="font-display text-4xl uppercase tracking-tighter transition-opacity group-hover:text-accent">
                  {item.artist}
                </h4>
                <p className="mt-1 font-mono text-[10px] uppercase">{item.title}</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:col-span-4 md:col-start-6">
                {item.image && (
                  <div className="relative h-32 w-32 shrink-0 border border-border/10 bg-zinc-900/5 outline-1 -outline-offset-1 outline-foreground/5">
                    <Image
                      src={item.image}
                      alt={`${item.title} listening session`}
                      fill
                      sizes="(max-width: 768px) 128px, 128px"
                      className="object-contain"
                    />
                  </div>
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
              key={item.slug}
              className="group animate-reveal border-b border-border py-8 transition-colors hover:bg-foreground/[0.03] cursor-pointer"
              style={{ animationDelay: `${delay}ms` }}
            >
              {item.externalUrl ? (
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <Link href={`/volume/${item.slug}`}>{content}</Link>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

