import Link from "next/link";
import StageIllustration from "../StageIllustration";

export default function CollaborateCta() {
  return (
    <section id="collaborate" className="animate-reveal grid grid-cols-1 gap-12 py-24 md:grid-cols-12">
      {/* Stage Illustration */}
      <div className="md:col-span-5 flex items-center justify-center">
        <StageIllustration />
      </div>

      <div className="flex flex-col justify-center md:col-span-7">
        <p
          className="mb-4 max-w-lg text-pretty text-lg text-muted-foreground"
          style={{ animationDelay: "100ms" }}
        >
          In a world of noise and performance, we return to what matters most: the music.
        </p>

        <h2 className="mb-8 font-display text-5xl uppercase tracking-tighter">
          Want to collaborate with us?
        </h2>
        <p className="mb-12 max-w-xl text-pretty text-lg text-muted-foreground">
          We are looking for performers who prioritize depth over volume. Whether you are an artist, a listener, or a curious collaborator. We read every message. The room is small, but the conversation is wide.
        </p>
        <Link href="/contact" className="group inline-flex items-center gap-4">
          <div className="bg-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest text-background transition-colors group-hover:bg-accent">
            Connect with the Collective
          </div>
        </Link>
      </div>
    </section>
  );
}

