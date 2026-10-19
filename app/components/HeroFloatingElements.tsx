"use client";

import React from "react";

/**
 * HeroFloatingElements
 *
 * An airy, ambient constellation of small floating music artefacts
 * (Acoustic Guitar, Studio Bookshelf Speaker, 12" Vinyl Record & Sleeve,
 * Vintage Dynamic Microphone, and Audiophile Headphones).
 *
 * Replaces the heavy single illustration with dynamic, staggered floating
 * analog sound elements distributed gracefully across the hero section.
 */

// ── 1. Mini Acoustic Guitar ──────────────────────────────────────────────────
export function FloatingGuitar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`group cursor-pointer select-none transition-transform duration-500 hover:scale-105 ${className}`}
      title="Acoustic Guitar — Intimate Unplugged Sessions"
      role="img"
      aria-label="Illustration of a small floating acoustic guitar"
    >
      <svg
        viewBox="0 0 110 180"
        className="w-24 sm:w-28 h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft aura */}
        <ellipse cx="55" cy="115" rx="42" ry="52" fill="currentColor" className="text-accent/[0.04]" />

        {/* Headstock & Tuning Pegs */}
        <path
          d="M 49 14 L 49 4 C 49 2, 61 2, 61 4 L 61 14 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.9"
          className="text-foreground/20 stroke-foreground/70"
        />
        {/* Tuning pegs (3 per side) */}
        {[-1, 1].map((side) =>
          [5, 9, 13].map((y, i) => (
            <g key={`peg-${side}-${i}`}>
              <line
                x1={side === -1 ? 49 : 61}
                y1={y}
                x2={side === -1 ? 44 : 66}
                y2={y}
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                className="text-foreground/60"
              />
              <circle
                cx={side === -1 ? 43 : 67}
                cy={y}
                r="1.8"
                fill="currentColor"
                className="text-accent"
              />
            </g>
          ))
        )}

        {/* Guitar Neck & Frets */}
        <rect
          x="51"
          y="14"
          width="8"
          height="62"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.9"
          className="text-foreground/15 stroke-foreground/60"
        />
        {/* Fret wire divisions */}
        {[20, 27, 35, 43, 51, 59, 67, 74].map((fretY, idx) => (
          <line
            key={`fret-${idx}`}
            x1="51"
            y1={fretY}
            x2="59"
            y2={fretY}
            stroke="currentColor"
            strokeWidth="0.6"
            className="text-foreground/40"
          />
        ))}
        {/* Fret position dots (5th, 7th, 12th) */}
        {[39, 55].map((dotY, i) => (
          <circle key={`dot-${i}`} cx="55" cy={dotY} r="0.9" fill="currentColor" className="text-accent" />
        ))}
        <circle cx="53.5" cy="70.5" r="0.7" fill="currentColor" className="text-accent" />
        <circle cx="56.5" cy="70.5" r="0.7" fill="currentColor" className="text-accent" />

        {/* Acoustic Body Outline */}
        {/* Upper bout, waist, lower bout */}
        <path
          d="M 51 76 
             C 42 76, 26 82, 26 98 
             C 26 108, 38 114, 38 122 
             C 38 132, 18 140, 18 155 
             C 18 172, 36 176, 55 176 
             C 74 176, 92 172, 92 155 
             C 92 140, 72 132, 72 122 
             C 72 114, 84 108, 84 98 
             C 84 82, 68 76, 59 76 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
          className="text-foreground/[0.04] stroke-foreground/80"
        />

        {/* Inner edge binding / purfling */}
        <path
          d="M 52 79 
             C 44 79, 29 85, 29 98 
             C 29 107, 40 113, 40 122 
             C 40 131, 21 139, 21 153 
             C 21 168, 38 173, 55 173 
             C 72 173, 89 168, 89 153 
             C 89 139, 70 131, 70 122 
             C 70 113, 81 107, 81 98 
             C 81 85, 66 79, 58 79 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          className="text-foreground/30"
        />

        {/* Soundhole & Rosette Rings */}
        <circle cx="55" cy="112" r="14" fill="currentColor" className="text-foreground/20" />
        <circle cx="55" cy="112" r="14" stroke="currentColor" strokeWidth="0.8" className="text-foreground/60" />
        <circle cx="55" cy="112" r="11" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 1.5" className="text-accent" />
        <circle cx="55" cy="112" r="8" fill="currentColor" stroke="currentColor" strokeWidth="0.8" className="text-background stroke-foreground/70" />

        {/* Pickguard teardrop */}
        <path
          d="M 59 112 C 67 114, 71 122, 68 132 C 63 133, 59 126, 59 118 Z"
          fill="currentColor"
          className="text-accent/25"
        />

        {/* Guitar Bridge & Saddle */}
        <rect
          x="42"
          y="146"
          width="26"
          height="7"
          rx="1.5"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-foreground/70 stroke-foreground"
        />
        <line x1="45" y1="149" x2="65" y2="149" stroke="currentColor" strokeWidth="1" className="text-background" />
        {/* Bridge pins (6 dots) */}
        {[45, 49, 53, 57, 61, 65].map((pinX, i) => (
          <circle key={`pin-${i}`} cx={pinX} cy="151" r="0.7" fill="currentColor" className="text-accent" />
        ))}

        {/* 6 Acoustic Strings (from bridge across soundhole to headstock) */}
        {[52, 53.2, 54.4, 55.6, 56.8, 58].map((sx, idx) => (
          <line
            key={`str-${idx}`}
            x1={sx}
            y1="14"
            x2={45 + idx * 4}
            y2="149"
            stroke="currentColor"
            strokeWidth={idx < 2 ? "0.6" : "0.4"}
            className="text-foreground/60 group-hover:text-accent transition-colors duration-300"
          />
        ))}

        {/* Musical harmonic ring / sound shimmer on hover */}
        <circle
          cx="55"
          cy="112"
          r="22"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="3 3"
          className="text-accent/0 group-hover:text-accent/60 transition-all duration-700 group-hover:scale-110 origin-[55px_112px]"
        />
      </svg>
    </div>
  );
}

// ── 2. Mini Audiophile Vinyl Record & Jacket ──────────────────────────────────
export function FloatingVinyl({ className = "" }: { className?: string }) {
  return (
    <div
      className={`group cursor-pointer select-none transition-transform duration-500 hover:scale-105 ${className}`}
      title="12-inch Vinyl LP — Deep Listening Sessions"
      role="img"
      aria-label="Illustration of a small floating vinyl record and album jacket"
    >
      <svg
        viewBox="0 0 140 140"
        className="w-28 sm:w-32 h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft background aura */}
        <circle cx="75" cy="70" r="54" fill="currentColor" className="text-accent/[0.04]" />

        {/* Leaning Album Jacket / Sleeve at the back */}
        <g className="transition-transform duration-700 ease-out group-hover:-translate-x-2">
          <rect
            x="14"
            y="20"
            width="85"
            height="85"
            rx="2"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            className="text-foreground/[0.06] stroke-foreground/60"
          />
          {/* Jacket spine & inner fold lines */}
          <line x1="18" y1="20" x2="18" y2="105" stroke="currentColor" strokeWidth="0.6" className="text-foreground/30" />
          {/* Jacket graphic artwork: minimalist typographic label */}
          <rect x="26" y="32" width="28" height="2" fill="currentColor" className="text-accent" />
          <line x1="26" y1="40" x2="68" y2="40" stroke="currentColor" strokeWidth="0.6" className="text-foreground/40" />
          <line x1="26" y1="46" x2="55" y2="46" stroke="currentColor" strokeWidth="0.6" className="text-foreground/30" />
          <text
            x="26"
            y="88"
            className="font-mono text-[5.5px] fill-foreground/50 tracking-[0.2em] uppercase font-bold"
          >
            LP · 33⅓ RPM
          </text>
        </g>

        {/* 12" Vinyl Disc slipping out to the right */}
        <g className="transition-transform duration-700 ease-out origin-[82px_68px] group-hover:rotate-45 group-hover:translate-x-1">
          {/* Main Black Vinyl Disc Body */}
          <circle cx="82" cy="68" r="48" fill="currentColor" className="text-foreground/90" />
          <circle cx="82" cy="68" r="48" stroke="currentColor" strokeWidth="1" className="text-foreground" />

          {/* Microgrooves (sound spiral rings) */}
          <circle cx="82" cy="68" r="44" stroke="currentColor" strokeWidth="0.4" strokeDasharray="6 3" className="text-background/25" />
          <circle cx="82" cy="68" r="40" stroke="currentColor" strokeWidth="0.4" strokeDasharray="8 4" className="text-background/20" />
          <circle cx="82" cy="68" r="36" stroke="currentColor" strokeWidth="0.4" strokeDasharray="5 2.5" className="text-background/25" />
          <circle cx="82" cy="68" r="32" stroke="currentColor" strokeWidth="0.4" strokeDasharray="7 3.5" className="text-background/20" />
          <circle cx="82" cy="68" r="28" stroke="currentColor" strokeWidth="0.4" strokeDasharray="4 2" className="text-background/25" />
          <circle cx="82" cy="68" r="24" stroke="currentColor" strokeWidth="0.5" className="text-background/30" />

          {/* Run-out groove band */}
          <circle cx="82" cy="68" r="21" fill="currentColor" className="text-foreground" />

          {/* Center Paper Label */}
          <circle cx="82" cy="68" r="17" fill="currentColor" stroke="currentColor" strokeWidth="0.8" className="text-background stroke-foreground/40" />
          {/* Center Ring Accent */}
          <circle cx="82" cy="68" r="12" fill="currentColor" className="text-accent/20" />
          <circle cx="82" cy="68" r="12" stroke="currentColor" strokeWidth="0.6" className="text-accent" />
          <text
            x="82"
            y="65"
            textAnchor="middle"
            className="font-mono text-[3.8px] font-bold fill-foreground tracking-widest uppercase"
          >
            TMC
          </text>
          <text
            x="82"
            y="72"
            textAnchor="middle"
            className="font-mono text-[3px] fill-muted-foreground uppercase"
          >
            SIDE A
          </text>

          {/* Center Spindle Hole */}
          <circle cx="82" cy="68" r="2.8" fill="currentColor" className="text-foreground" />

          {/* Dynamic Light Sheen / Reflection wedge */}
          <path
            d="M 82 68 L 116 34 A 48 48 0 0 1 128 58 Z"
            fill="currentColor"
            className="text-background/10"
          />
          <path
            d="M 82 68 L 48 102 A 48 48 0 0 1 36 78 Z"
            fill="currentColor"
            className="text-background/10"
          />
        </g>
      </svg>
    </div>
  );
}

// ── 3. Mini Vintage Bookshelf Studio Speaker ─────────────────────────────────
export function FloatingSpeaker({ className = "" }: { className?: string }) {
  return (
    <div
      className={`group cursor-pointer select-none transition-transform duration-500 hover:scale-105 ${className}`}
      title="Vintage Studio Monitor — Analog Warmth"
      role="img"
      aria-label="Illustration of a small floating studio speaker monitor"
    >
      <svg
        viewBox="0 0 100 130"
        className="w-20 sm:w-24 h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft background aura */}
        <rect x="15" y="10" width="70" height="106" rx="6" fill="currentColor" className="text-accent/[0.04]" />

        {/* Outer Wooden / Brushed Cabinet Enclosure */}
        <rect
          x="18"
          y="12"
          width="64"
          height="104"
          rx="3"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-foreground/[0.05] stroke-foreground/80"
        />

        {/* Inset Baffle Frame */}
        <rect
          x="22"
          y="16"
          width="56"
          height="96"
          rx="2"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-foreground/[0.08] stroke-foreground/50"
        />

        {/* High Frequency Soft-Dome Tweeter (Top) */}
        <circle cx="50" cy="38" r="14" fill="currentColor" stroke="currentColor" strokeWidth="0.7" className="text-foreground/15 stroke-foreground/60" />
        <circle cx="50" cy="38" r="9" fill="currentColor" stroke="currentColor" strokeWidth="0.6" className="text-foreground/30 stroke-foreground/70" />
        <circle cx="50" cy="38" r="5" fill="currentColor" className="text-foreground/80" />
        {/* Tweeter mounting screws */}
        {[0, 90, 180, 270].map((deg, i) => (
          <circle
            key={`tscrew-${i}`}
            cx={50 + 11.5 * Math.cos((deg * Math.PI) / 180)}
            cy={38 + 11.5 * Math.sin((deg * Math.PI) / 180)}
            r="0.8"
            fill="currentColor"
            className="text-foreground/60"
          />
        ))}

        {/* Main Bass / Midrange Woofer Cone (Bottom) */}
        <g className="transition-transform duration-300 ease-out group-hover:scale-105 origin-[50px_76px]">
          {/* Outer rubber roll surround */}
          <circle cx="50" cy="76" r="23" fill="currentColor" stroke="currentColor" strokeWidth="0.8" className="text-foreground/15 stroke-foreground/60" />
          <circle cx="50" cy="76" r="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 1.5" className="text-foreground/30" />
          {/* Paper cone body */}
          <circle cx="50" cy="76" r="17" fill="currentColor" stroke="currentColor" strokeWidth="0.7" className="text-foreground/35 stroke-foreground/70" />
          <circle cx="50" cy="76" r="12" stroke="currentColor" strokeWidth="0.4" className="text-foreground/20" />
          {/* Dust cap */}
          <circle cx="50" cy="76" r="7" fill="currentColor" stroke="currentColor" strokeWidth="0.8" className="text-foreground/85 stroke-foreground" />
          {/* Center accent glint */}
          <circle cx="48.5" cy="74.5" r="1.2" fill="currentColor" className="text-accent" />
          {/* Woofer mounting screws */}
          {[45, 135, 225, 315].map((deg, i) => (
            <circle
              key={`wscrew-${i}`}
              cx={50 + 21 * Math.cos((deg * Math.PI) / 180)}
              cy={76 + 21 * Math.sin((deg * Math.PI) / 180)}
              r="0.9"
              fill="currentColor"
              className="text-foreground/70"
            />
          ))}
        </g>

        {/* Tuned Bass Reflex Port (bottom center) */}
        <circle cx="36" cy="103" r="3.5" fill="currentColor" stroke="currentColor" strokeWidth="0.8" className="text-foreground/70 stroke-foreground" />

        {/* Metallic Maker Badge & Pilot Light */}
        <rect x="52" y="101" width="16" height="4.5" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" className="text-foreground/25 stroke-foreground/60" />
        <circle cx="64" cy="103.2" r="1" fill="currentColor" className="text-accent animate-pulse" />

        {/* Sound Wave Ripple Arcs floating upward on hover */}
        <path
          d="M 50 16 C 50 6, 75 6, 80 -4"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeDasharray="2 2"
          className="text-accent opacity-0 group-hover:opacity-80 transition-opacity duration-500"
        />
        <path
          d="M 58 14 C 62 4, 86 4, 92 -6"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeDasharray="3 3"
          className="text-accent opacity-0 group-hover:opacity-50 transition-opacity duration-700"
        />
      </svg>
    </div>
  );
}

// ── 4. Mini Vintage Studio Microphone ─────────────────────────────────────────
export function FloatingMicrophone({ className = "" }: { className?: string }) {
  return (
    <div
      className={`group cursor-pointer select-none transition-transform duration-500 hover:scale-105 ${className}`}
      title="Vintage Dynamic Microphone — Acoustic Stories"
      role="img"
      aria-label="Illustration of a small vintage studio microphone"
    >
      <svg
        viewBox="0 0 80 110"
        className="w-16 sm:w-20 h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft background aura */}
        <circle cx="40" cy="40" r="30" fill="currentColor" className="text-accent/[0.04]" />

        {/* Iconic Vintage Ribbed Capsule (Shure 55 / Unidyne aesthetic) */}
        <path
          d="M 28 22 C 28 12, 52 12, 52 22 L 52 48 C 52 56, 28 56, 28 48 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/[0.08] stroke-foreground/80"
        />

        {/* Horizontal Grille Ribs */}
        {[18, 23, 28, 33, 38, 43, 48].map((y, i) => (
          <line
            key={`rib-${i}`}
            x1="28.5"
            y1={y}
            x2="51.5"
            y2={y}
            stroke="currentColor"
            strokeWidth="0.8"
            className={i === 3 ? "text-accent" : "text-foreground/50"}
          />
        ))}

        {/* Center vertical chrome spine */}
        <line x1="40" y1="14" x2="40" y2="54" stroke="currentColor" strokeWidth="1.2" className="text-foreground/80" />

        {/* Mechanical Swivel Mount / Yoke */}
        <path
          d="M 24 48 L 24 58 C 24 66, 56 66, 56 58 L 56 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="text-foreground/70"
        />
        {/* Swivel thumb screws */}
        <circle cx="24" cy="50" r="2.2" fill="currentColor" className="text-accent" />
        <circle cx="56" cy="50" r="2.2" fill="currentColor" className="text-accent" />

        {/* Stem & Table Stand */}
        <rect x="38" y="65" width="4" height="24" rx="1" fill="currentColor" className="text-foreground/75" />
        <ellipse cx="40" cy="94" rx="22" ry="5" fill="currentColor" stroke="currentColor" strokeWidth="0.8" className="text-foreground/20 stroke-foreground/60" />
        <ellipse cx="40" cy="93" rx="15" ry="3" fill="currentColor" className="text-foreground/60" />

        {/* Acoustic audio wave sparks */}
        <circle cx="18" cy="24" r="1.2" fill="currentColor" className="text-accent group-hover:scale-125 transition-transform" />
        <circle cx="62" cy="20" r="1.5" fill="currentColor" className="text-accent group-hover:scale-125 transition-transform" />
        <circle cx="66" cy="34" r="1" fill="currentColor" className="text-accent group-hover:scale-125 transition-transform" />
      </svg>
    </div>
  );
}

// ── 5. Mini Open-back Reference Headphones ───────────────────────────────────
export function FloatingHeadphones({ className = "" }: { className?: string }) {
  return (
    <div
      className={`group cursor-pointer select-none transition-transform duration-500 hover:scale-105 ${className}`}
      title="Open-Back Reference Headphones — Deep Listening"
      role="img"
      aria-label="Illustration of small open-back headphones"
    >
      <svg
        viewBox="0 0 90 90"
        className="w-18 sm:w-20 h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curved Headband Double-Rail */}
        <path
          d="M 18 52 C 18 20, 72 20, 72 52"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="text-foreground/80"
        />
        <path
          d="M 23 48 C 23 26, 67 26, 67 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeDasharray="2 2"
          className="text-foreground/40"
        />

        {/* Padded Headband Cushion */}
        <path
          d="M 30 31 C 38 27, 52 27, 60 31"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          className="text-foreground/30"
        />

        {/* Left Ear Cup */}
        <g className="origin-[18px_54px] group-hover:rotate-6 transition-transform">
          <ellipse cx="18" cy="54" rx="8" ry="14" fill="currentColor" stroke="currentColor" strokeWidth="1" className="text-foreground/15 stroke-foreground/80" />
          <ellipse cx="18" cy="54" rx="4" ry="9" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" className="text-accent" />
          <circle cx="18" cy="54" r="2.2" fill="currentColor" className="text-foreground/90" />
        </g>

        {/* Right Ear Cup */}
        <g className="origin-[72px_54px] group-hover:-rotate-6 transition-transform">
          <ellipse cx="72" cy="54" rx="8" ry="14" fill="currentColor" stroke="currentColor" strokeWidth="1" className="text-foreground/15 stroke-foreground/80" />
          <ellipse cx="72" cy="54" rx="4" ry="9" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" className="text-accent" />
          <circle cx="72" cy="54" r="2.2" fill="currentColor" className="text-foreground/90" />
        </g>

        {/* Coiled Audio Cable */}
        <path
          d="M 18 68 C 18 78, 28 72, 28 80 C 28 86, 36 82, 40 88"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          className="text-foreground/50 group-hover:text-accent transition-colors"
        />
        <rect x="39" y="86" width="7" height="2.5" rx="0.5" transform="rotate(35 39 86)" fill="currentColor" className="text-accent" />
      </svg>
    </div>
  );
}

// ── 6. Master Hero Layout Cluster ────────────────────────────────────────────
export default function HeroFloatingElements() {
  return (
    <div
      className="relative w-full h-[320px] sm:h-[360px] flex items-center justify-center select-none"
      aria-label="Floating acoustic sound artefacts"
    >
      {/* Soft Ambient Warm Glow in the backdrop */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* ── Main Constellation Cluster ── */}
      {/* 1. Acoustic Guitar: tilted slightly, floating at top-right */}
      <div className="absolute top-2 right-4 sm:right-8 z-20 animate-float-slow">
        <FloatingGuitar className="-rotate-12 hover:-rotate-6 transition-transform duration-500" />
      </div>

      {/* 2. 12" Vinyl Record & Sleeve: floating in center-left */}
      <div className="absolute top-12 left-2 sm:left-4 z-10 animate-float-medium">
        <FloatingVinyl className="rotate-3 hover:rotate-6 transition-transform duration-500" />
      </div>

      {/* 3. Vintage Bookshelf Speaker: anchored bottom-right */}
      <div className="absolute bottom-4 right-8 sm:right-16 z-20 animate-float-gentle">
        <FloatingSpeaker className="-rotate-3 hover:rotate-0 transition-transform duration-500" />
      </div>

      {/* 4. Vintage Dynamic Microphone: floating bottom-left */}
      <div className="absolute bottom-2 left-6 sm:left-12 z-20 animate-float-slow">
        <FloatingMicrophone className="rotate-6 hover:rotate-12 transition-transform duration-500" />
      </div>

      {/* 5. Reference Headphones: nestled upper-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 animate-float-gentle opacity-75 hover:opacity-100 transition-opacity">
        <FloatingHeadphones className="-rotate-6 hover:rotate-0 transition-transform duration-500" />
      </div>

      {/* Subtle Analog Sound Dots / Stars connecting the cluster */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse" />
        <span className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-foreground/30" />
        <span className="absolute top-2/3 left-1/2 w-1.5 h-1.5 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </div>
  );
}
