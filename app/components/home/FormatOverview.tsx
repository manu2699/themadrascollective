import MadrasSessionsIllustration from "../MadrasSessionsIllustration";
import VinylListeningIllustration from "../VinylListeningIllustration";

export default function FormatOverview() {
  return (
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
              Intimate music shows that revolve around storytelling and creative curation.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center pt-2">
            <MadrasSessionsIllustration />
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
          <div className="mt-8 flex items-center justify-center pt-2">
            <VinylListeningIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

