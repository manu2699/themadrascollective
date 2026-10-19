/**
 * ReelToReelIllustration
 *
 * Bespoke architectural line-art of a vintage analog master tape recorder
 * (Studer / Revox audiophile reel-to-reel aesthetic).
 * Symbolizes the pure, intentional, analog listening culture of The Madras Collective.
 *
 * Designed to float borderless and blend seamlessly into the Manifesto hero section.
 */
export default function ReelToReelIllustration() {
  return (
    <svg
      viewBox="0 0 380 340"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm select-none transition-all duration-500 group"
      aria-label="Technical line-art illustration of an analog reel-to-reel tape recorder"
      role="img"
    >
      <title>The Madras Collective — Analog Master Reel</title>
      <desc>
        Architectural line-art schematic of an open-reel analog tape recorder with
        twin NAB reels, precision tape head assembly and illuminated VU meters.
      </desc>

      <defs>
        {/* Soft radial ambient glow */}
        <radialGradient id="tmc-reel-ambient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.04" className="text-accent" />
          <stop offset="65%" stopColor="currentColor" stopOpacity="0.01" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>

        {/* VU meter warm amber glow */}
        <radialGradient id="tmc-rtr-vu" cx="50%" cy="60%" r="70%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" className="text-accent" />
          <stop offset="65%" stopColor="currentColor" stopOpacity="0.07" className="text-accent" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
        </radialGradient>

        {/* Tape ribbon metallic gradient */}
        <linearGradient id="tmc-tape-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" className="text-foreground" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" className="text-foreground" />
        </linearGradient>

        {/* Horizontal divider fade */}
        <linearGradient id="tmc-rtr-line-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="18%" stopColor="currentColor" stopOpacity="0.3" className="text-foreground" />
          <stop offset="82%" stopColor="currentColor" stopOpacity="0.3" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* Fluid tape ribbon fadeout */}
        <linearGradient id="tmc-tape-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" className="text-foreground" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.2" className="text-accent" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Soft ambient background pool */}
      <ellipse cx="190" cy="165" rx="160" ry="135" fill="url(#tmc-reel-ambient)" />

      {/* Horizontal deck separation lines (faded at ends for borderless blend) */}
      <line x1="45" y1="205" x2="335" y2="205" stroke="url(#tmc-rtr-line-fade)" strokeWidth="0.8" />
      <line x1="65" y1="208" x2="315" y2="208" stroke="url(#tmc-rtr-line-fade)" strokeWidth="0.4" strokeOpacity="0.6" />

      {/* ══════════════════════════════════════════════════════════════
          LEFT REEL (Supply Reel)
      ══════════════════════════════════════════════════════════════ */}
      <g className="transition-transform duration-1000 ease-out origin-[118px_115px] group-hover:rotate-12">
        {/* Outer Aluminum Flange */}
        <circle cx="118" cy="115" r="62" fill="currentColor" className="text-foreground/[0.04]" />
        <circle cx="118" cy="115" r="62" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/50" />
        <circle cx="118" cy="115" r="59" fill="none" stroke="currentColor" strokeWidth="0.45" strokeDasharray="1.5 2" className="text-foreground/20" />

        {/* Wound Tape Pack */}
        <circle cx="118" cy="115" r="46" fill="currentColor" className="text-foreground/30" />
        <circle cx="118" cy="115" r="46" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/60" />
        {/* Tape layer rings */}
        <circle cx="118" cy="115" r="40" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-foreground/20" />
        <circle cx="118" cy="115" r="34" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-foreground/20" />

        {/* Three iconic NAB triangular cutouts */}
        {[0, 120, 240].map((angle, i) => (
          <path
            key={`l-cutout-${i}`}
            d="M 118 115 L 102 70 A 52 52 0 0 1 134 70 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeLinejoin="round"
            className="text-background stroke-foreground/45"
            transform={`rotate(${angle} 118 115)`}
          />
        ))}

        {/* NAB Hub Adapter Center */}
        <circle cx="118" cy="115" r="20" fill="currentColor" className="text-foreground/25" />
        <circle cx="118" cy="115" r="20" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-foreground/70" />
        <circle cx="118" cy="115" r="14" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/40" />

        {/* 3 Hub lock tabs */}
        {[30, 150, 270].map((angle, i) => (
          <rect
            key={`l-tab-${i}`}
            x="116.5"
            y="98"
            width="3"
            height="7"
            rx="0.5"
            fill="currentColor"
            className="text-foreground/80"
            transform={`rotate(${angle} 118 115)`}
          />
        ))}

        {/* Center Spindle */}
        <circle cx="118" cy="115" r="4.5" fill="currentColor" className="text-foreground/85" />
        <circle cx="118" cy="115" r="1.5" fill="currentColor" className="text-accent" />
      </g>

      {/* ══════════════════════════════════════════════════════════════
          RIGHT REEL (Take-up Reel)
      ══════════════════════════════════════════════════════════════ */}
      <g className="transition-transform duration-1000 ease-out origin-[262px_115px] group-hover:rotate-12">
        {/* Outer Aluminum Flange */}
        <circle cx="262" cy="115" r="62" fill="currentColor" className="text-foreground/[0.04]" />
        <circle cx="262" cy="115" r="62" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/50" />
        <circle cx="262" cy="115" r="59" fill="none" stroke="currentColor" strokeWidth="0.45" strokeDasharray="1.5 2" className="text-foreground/20" />

        {/* Wound Tape Pack (partially loaded) */}
        <circle cx="262" cy="115" r="38" fill="currentColor" className="text-foreground/30" />
        <circle cx="262" cy="115" r="38" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/60" />
        <circle cx="262" cy="115" r="30" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-foreground/20" />

        {/* Three iconic NAB triangular cutouts */}
        {[0, 120, 240].map((angle, i) => (
          <path
            key={`r-cutout-${i}`}
            d="M 262 115 L 246 70 A 52 52 0 0 1 278 70 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeLinejoin="round"
            className="text-background stroke-foreground/45"
            transform={`rotate(${angle} 262 115)`}
          />
        ))}

        {/* NAB Hub Adapter Center */}
        <circle cx="262" cy="115" r="20" fill="currentColor" className="text-foreground/25" />
        <circle cx="262" cy="115" r="20" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-foreground/70" />
        <circle cx="262" cy="115" r="14" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/40" />

        {/* 3 Hub lock tabs */}
        {[30, 150, 270].map((angle, i) => (
          <rect
            key={`r-tab-${i}`}
            x="260.5"
            y="98"
            width="3"
            height="7"
            rx="0.5"
            fill="currentColor"
            className="text-foreground/80"
            transform={`rotate(${angle} 262 115)`}
          />
        ))}

        {/* Center Spindle */}
        <circle cx="262" cy="115" r="4.5" fill="currentColor" className="text-foreground/85" />
        <circle cx="262" cy="115" r="1.5" fill="currentColor" className="text-accent" />
      </g>

      {/* ══════════════════════════════════════════════════════════════
          TAPE PATH, TENSION ROLLERS & HEAD BLOCK
      ══════════════════════════════════════════════════════════════ */}
      {/* Left tension arm & roller */}
      <line x1="78" y1="175" x2="98" y2="195" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-foreground/60" />
      <circle cx="98" cy="195" r="6" fill="currentColor" className="text-foreground/35" />
      <circle cx="98" cy="195" r="6" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-foreground/80" />
      <circle cx="98" cy="195" r="2" fill="currentColor" className="text-foreground/90" />

      {/* Right tension arm & roller */}
      <line x1="302" y1="175" x2="282" y2="195" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-foreground/60" />
      <circle cx="282" cy="195" r="6" fill="currentColor" className="text-foreground/35" />
      <circle cx="282" cy="195" r="6" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-foreground/80" />
      <circle cx="282" cy="195" r="2" fill="currentColor" className="text-foreground/90" />

      {/* Precision Magnetic Head Assembly Shield */}
      <rect x="134" y="184" width="112" height="24" rx="1.5" fill="currentColor" className="text-foreground/15" />
      <rect x="134" y="184" width="112" height="24" rx="1.5" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-foreground/60" />

      {/* 3 Magnetic Tape Heads (Erase, Record, Playback) */}
      {[
        { x: 148, label: "E" },
        { x: 172, label: "R" },
        { x: 196, label: "P" },
      ].map((head, i) => (
        <g key={`head-${i}`}>
          <rect x={head.x - 6} y="187" width="12" height="18" rx="0.8" fill="currentColor" className="text-foreground/45" />
          <line x1={head.x} y1="187" x2={head.x} y2="205" stroke="currentColor" strokeWidth="0.6" className="text-foreground/90" />
          <line x1={head.x - 4} y1="190" x2={head.x + 4} y2="190" stroke="currentColor" strokeWidth="0.4" className="text-background" />
        </g>
      ))}

      {/* Capstan shaft & Rubber Pinch Roller */}
      <circle cx="228" cy="196" r="3" fill="currentColor" className="text-foreground/85" />
      <circle cx="236" cy="196" r="7.5" fill="currentColor" className="text-foreground/50" />
      <circle cx="236" cy="196" r="7.5" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-foreground/80" />
      <circle cx="236" cy="196" r="2.5" fill="currentColor" className="text-foreground/90" />

      {/* Magnetic Tape Ribbon (path wrapping smoothly around rollers and heads) */}
      <path
        d="M 118 161 
           C 114 178, 102 188, 98 195 
           C 96 200, 114 200, 134 200 
           L 242 200 
           C 255 200, 278 200, 282 195 
           C 285 188, 266 165, 262 153"
        fill="none"
        stroke="url(#tmc-tape-sheen)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Fluid looping tape aura (creative visual metaphor) */}
      <path
        d="M 98 198 C 65 220, 50 250, 75 270 C 105 290, 150 280, 190 295 C 230 310, 290 320, 330 295"
        fill="none"
        stroke="url(#tmc-tape-fade)"
        strokeWidth="1"
        strokeDasharray="3 3"
        className="opacity-70 group-hover:opacity-100 transition-opacity duration-700"
      />

      {/* ══════════════════════════════════════════════════════════════
          LOWER SECTION: VU METERS & ANALOG CONTROLS
      ══════════════════════════════════════════════════════════════ */}
      {/* 4-digit mechanical tape counter */}
      <g>
        <rect x="52" y="218" width="40" height="15" rx="1" fill="currentColor" className="text-foreground/30" />
        <rect x="52" y="218" width="40" height="15" rx="1" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-foreground/60" />
        <text
          x="72"
          y="229"
          textAnchor="middle"
          className="font-mono text-[9px] font-bold fill-foreground tracking-[0.25em]"
        >
          0026
        </text>
        <rect x="94" y="222" width="3.5" height="7" rx="0.5" fill="currentColor" className="text-foreground/50" />
      </g>

      {/* Speed Selector (15 / 7.5 IPS) */}
      <g>
        <text x="52" y="246" className="font-mono text-[6.5px] fill-muted-foreground uppercase tracking-widest">
          SPEED
        </text>
        <rect x="52" y="250" width="14" height="6" rx="0.5" fill="currentColor" className="text-foreground/30" />
        <rect x="68" y="250" width="14" height="6" rx="0.5" fill="currentColor" className="text-accent/60" />
        <text x="59" y="254.5" textAnchor="middle" className="font-mono text-[5px] fill-foreground font-bold">15</text>
        <text x="75" y="254.5" textAnchor="middle" className="font-mono text-[5px] fill-background font-bold">7.5</text>
      </g>

      {/* ── Dual Illuminated Analog VU Meters ── */}
      {/* Left VU Meter */}
      <g>
        <rect x="110" y="220" width="58" height="42" rx="1.5" fill="url(#tmc-rtr-vu)" />
        <rect x="110" y="220" width="58" height="42" rx="1.5" fill="none" stroke="currentColor" strokeWidth="0.85" className="text-foreground/45" />
        {/* Scale Arc */}
        <path d="M 116 250 A 34 34 0 0 1 162 250" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/30" />
        <line x1="155" y1="242" x2="162" y2="246" stroke="currentColor" strokeWidth="0.8" className="text-accent" />
        {/* Scale Ticks */}
        {[120, 128, 137, 147, 158].map((x, i) => (
          <line key={`vu-l-tick-${i}`} x1={x} y1="248" x2={x} y2="251" stroke="currentColor" strokeWidth="0.5" className={i > 3 ? "text-accent" : "text-foreground/35"} />
        ))}
        {/* Needle pointer */}
        <line
          x1="139"
          y1="256"
          x2="148"
          y2="232"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          className="text-foreground/90 transition-transform duration-700 origin-[139px_256px] group-hover:rotate-6"
        />
        <text x="139" y="258" textAnchor="middle" className="font-mono text-[5.5px] fill-muted-foreground/70 tracking-wider">CH 1</text>
      </g>

      {/* Right VU Meter */}
      <g>
        <rect x="176" y="220" width="58" height="42" rx="1.5" fill="url(#tmc-rtr-vu)" />
        <rect x="176" y="220" width="58" height="42" rx="1.5" fill="none" stroke="currentColor" strokeWidth="0.85" className="text-foreground/45" />
        {/* Scale Arc */}
        <path d="M 182 250 A 34 34 0 0 1 228 250" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/30" />
        <line x1="221" y1="242" x2="228" y2="246" stroke="currentColor" strokeWidth="0.8" className="text-accent" />
        {/* Scale Ticks */}
        {[186, 194, 203, 213, 224].map((x, i) => (
          <line key={`vu-r-tick-${i}`} x1={x} y1="248" x2={x} y2="251" stroke="currentColor" strokeWidth="0.5" className={i > 3 ? "text-accent" : "text-foreground/35"} />
        ))}
        {/* Needle pointer */}
        <line
          x1="205"
          y1="256"
          x2="216"
          y2="231"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          className="text-foreground/90 transition-transform duration-700 origin-[205px_256px] group-hover:-rotate-4"
        />
        <text x="205" y="258" textAnchor="middle" className="font-mono text-[5.5px] fill-muted-foreground/70 tracking-wider">CH 2</text>
      </g>

      {/* ── Transport & Level Controls ── */}
      {/* Master Output knobs */}
      {[256, 286, 316].map((x, i) => (
        <g key={`rtr-knob-${i}`}>
          <circle cx={x} cy="238" r="9" fill="currentColor" className="text-foreground/20" />
          <circle cx={x} cy="238" r="9" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-foreground/70" />
          <circle cx={x} cy="238" r="6" fill="none" stroke="currentColor" strokeWidth="0.45" className="text-foreground/30" />
          <line x1={x} y1="230" x2={x} y2="235" stroke="currentColor" strokeWidth="0.9" className="text-accent" />
        </g>
      ))}

      {/* Transport Push Buttons (Rewind, Play, Fast Forward, Stop, Record) */}
      <g>
        {[
          { x: 110, symbol: "◀◀" },
          { x: 138, symbol: "▶" },
          { x: 166, symbol: "▶▶" },
          { x: 194, symbol: "■" },
          { x: 222, symbol: "●", isRec: true },
        ].map((btn, i) => (
          <g key={`btn-${i}`}>
            <rect
              x={btn.x}
              y="272"
              width="24"
              height="16"
              rx="1.5"
              fill="currentColor"
              className={btn.isRec ? "text-accent/20" : "text-foreground/15"}
            />
            <rect
              x={btn.x}
              y="272"
              width="24"
              height="16"
              rx="1.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              className={btn.isRec ? "text-accent" : "text-foreground/45"}
            />
            <text
              x={btn.x + 12}
              y="283"
              textAnchor="middle"
              className={`font-mono text-[7px] font-bold ${btn.isRec ? "fill-accent" : "fill-foreground/70"}`}
            >
              {btn.symbol}
            </text>
          </g>
        ))}
      </g>

      {/* Headphone Output Jack */}
      <circle cx="264" cy="280" r="5" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-foreground/45" />
      <circle cx="264" cy="280" r="2.5" fill="currentColor" className="text-foreground/75" />

      {/* Power switch & Active Pilot Lamp */}
      <rect x="298" y="275" width="4" height="10" rx="0.8" fill="currentColor" className="text-foreground/60" />
      <circle cx="320" cy="280" r="2.5" fill="currentColor" className="text-accent animate-pulse" />
    </svg>
  );
}
