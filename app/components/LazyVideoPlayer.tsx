"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoPlayerProps {
  src: string;
  title?: string;
}

export default function LazyVideoPlayer({ src, title }: LazyVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[420px] overflow-hidden border border-border bg-black"
    >
      <video
        src={shouldLoad ? src : undefined}
        aria-label={title ?? "Session video"}
        controls
        playsInline
        preload="metadata"
        className="aspect-[9/16] w-full bg-black object-contain"
      />
    </div>
  );
}
