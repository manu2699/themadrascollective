import { UPCOMING_SESSIONS } from "../../data/events";

export default function UpcomingSessions() {
  return (
    <div>
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
    </div>
  );
}

