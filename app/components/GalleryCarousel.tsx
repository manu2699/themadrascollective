"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import LightboxModal from "./LightboxModal";

interface GalleryCarouselProps {
  images: string[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Center active thumbnail in the scroll view
  useEffect(() => {
    if (thumbnailRefs.current[activeIndex]) {
      thumbnailRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, isLightboxOpen]);

  // Swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {/* Main Carousel Display */}
      <div
        className="group relative aspect-[3/2] w-full overflow-hidden bg-zinc-900 border border-border/60"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((img, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={img}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
                isActive
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-[1.02] pointer-events-none"
              }`}
            >
              {/* Ambient blurred backdrop matching the image colors */}
              <img
                src={img}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-105 select-none pointer-events-none"
              />
              {/* Main crisp image, fully contained without cropping */}
              <img
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-contain cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              />
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-background/50 backdrop-blur-md border border-border/40 text-foreground transition-all duration-300 hover:bg-background hover:scale-105 active:scale-95 focus:outline-none opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-background/50 backdrop-blur-md border border-border/40 text-foreground transition-all duration-300 hover:bg-background hover:scale-105 active:scale-95 focus:outline-none opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next image"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Minimalist Monospace Counter */}
        <div className="absolute bottom-4 right-4 bg-background/70 backdrop-blur-md border border-border/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest select-none pointer-events-none">
          {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin select-none scroll-smooth">
        {images.map((img, idx) => (
          <button
            key={img}
            ref={(el) => {
              thumbnailRefs.current[idx] = el;
            }}
            onClick={() => setActiveIndex(idx)}
            className={`relative shrink-0 w-20 aspect-[3/2] border transition-all duration-300 focus:outline-none ${
              idx === activeIndex
                ? "border-accent opacity-100 scale-95"
                : "border-border/30 opacity-40 hover:opacity-80 hover:border-border/60"
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Lightbox / Fullscreen Overlay */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={images}
        activeIndex={activeIndex}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectImage={setActiveIndex}
      />
    </div>
  );
}
