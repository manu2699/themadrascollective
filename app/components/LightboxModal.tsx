"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  activeIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectImage: (index: number) => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  images,
  activeIndex,
  onNext,
  onPrev,
  onSelectImage,
}: LightboxModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Keyboard navigation inside the lightbox
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose]);

  // Touch swipe support inside the lightbox
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
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
  };

  if (!isOpen || !mounted || typeof window === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-background/95 backdrop-blur-xl p-4 md:p-8 animate-reveal">
      {/* Top Bar */}
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest border-b border-border/20 pb-4">
        <span>Gallery Inspection</span>
        <button
          onClick={onClose}
          className="flex items-center gap-2 hover:text-accent transition-colors focus:outline-none"
          aria-label="Close fullscreen gallery"
        >
          <span>[ Close ]</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Lightbox Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-8 select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={onPrev}
          className="absolute left-0 md:left-4 z-10 flex items-center justify-center w-12 h-12 bg-background/80 border border-border/40 text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="max-w-5xl max-h-[70vh] w-full h-full relative flex items-center justify-center">
          {images.map((img, idx) => (
            <img
              key={`lightbox-${img}`}
              src={img}
              alt={`Fullscreen gallery image ${idx + 1}`}
              className={`absolute max-w-full max-h-full object-contain transition-all duration-500 ease-out ${
                idx === activeIndex
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          className="absolute right-0 md:right-4 z-10 flex items-center justify-center w-12 h-12 bg-background/80 border border-border/40 text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Bar / Navigation */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/20 pt-4">
        <div className="font-mono text-xs uppercase tracking-widest">
          IMAGE {String(activeIndex + 1).padStart(2, "0")} OF {String(images.length).padStart(2, "0")}
        </div>

        {/* Scrollable Thumbnails for Lightbox */}
        <div className="flex gap-2 max-w-full overflow-x-auto py-1 select-none scroll-smooth">
          {images.map((img, idx) => (
            <button
              key={`lightbox-thumb-${img}`}
              onClick={() => onSelectImage(idx)}
              className={`relative shrink-0 w-16 aspect-[3/2] border transition-all duration-300 focus:outline-none ${
                idx === activeIndex
                  ? "border-accent opacity-100 scale-95"
                  : "border-border/20 opacity-30 hover:opacity-75"
              }`}
            >
              <img src={img} alt={`Lightbox Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
