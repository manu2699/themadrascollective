/**
 * VinylListeningIllustration
 *
 * Bespoke architectural line-art for Format 02: Vinyl Listening Sessions.
 * Represents solitary and communal deep-listening — a room, a record, and nothing else.
 *
 * Featured gear:
 * - Audiophile Turntable with spinning 12" vinyl LP and precision tonearm
 * - High-end open-back studio reference headphones with coiled cable & 1/4" plug
 * - 12" Vinyl jacket & inner paper sleeve
 * - Soft radial ambient glow that dissolves seamlessly into the card canvas
 */
export default function VinylListeningIllustration() {
  return (
    <svg
      viewBox="0 0 360 210"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm select-none transition-all duration-500 group"
      aria-label="Line-art illustration of an audiophile vinyl listening session with spinning record and reference headphones"
      role="img"
    >
      <title>Vinyl Listening Sessions — Deep Listening Setup</title>
      <desc>
        Architectural line-art vignette featuring an audiophile turntable,
        12-inch vinyl record, and open-back reference headphones.
      </desc>

      <defs>
        {/* Soft radial ambient glow */}
        <radialGradient id="tmc-vl-ambient" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" className="text-accent" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.015" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>

        {/* Vinyl sheen highlight */}
        <linearGradient id="tmc-vl-sheen" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" className="text-foreground" />
          <stop offset="48%" stopColor="currentColor" stopOpacity="0.04" className="text-foreground" />
          <stop offset="52%" stopColor="currentColor" stopOpacity="0.20" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.03" className="text-foreground" />
        </linearGradient>

        {/* Baseline horizontal fade */}
        <linearGradient id="tmc-vl-line-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="20%" stopColor="currentColor" stopOpacity="0.3" className="text-foreground" />
          <stop offset="80%" stopColor="currentColor" stopOpacity="0.3" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient Floor Vignette */}
      <ellipse cx="180" cy="180" rx="160" ry="24" fill="url(#tmc-vl-ambient)" />

      {/* Stage baseline with tapered fade */}
      <line x1="20" y1="176" x2="340" y2="176" stroke="url(#tmc-vl-line-fade)" strokeWidth="0.8" />
      <line x1="45" y1="180" x2="315" y2="180" stroke="url(#tmc-vl-line-fade)" strokeWidth="0.4" strokeOpacity="0.5" />

      {/* ── Background: 12" Vinyl Album Jacket (Leaning at rear, X: 45 to 135) ── */}
      <g id="vl-jacket">
        {/* Outer sleeve (tilted 3D perspective) */}
        <polygon
          points="48,172 136,155 136,75 48,92"
          fill="currentColor"
          className="text-foreground/[0.04]"
        />
        <polygon
          points="48,172 136,155 136,75 48,92"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-foreground/45"
        />
        {/* Spine thickness */}
        <polygon
          points="45,173 48,172 48,92 45,93"
          fill="currentColor"
          className="text-foreground/20"
        />
        <polygon
          points="45,173 48,172 48,92 45,93"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          className="text-foreground/50"
        />
        {/* Die-cut circular sleeve preview */}
        <ellipse cx="96" cy="120" rx="26" ry="22" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="text-foreground/25" />
        <text
          x="62"
          y="158"
          className="font-mono text-[6px] fill-muted-foreground/60 tracking-widest uppercase"
          transform="rotate(-11 62 158)"
        >
          TMC · VINYL ED.
        </text>
      </g>

      {/* ── Center: Audiophile Turntable & Spinning Record (X: 100 to 245) ── */}
      <g id="vl-turntable">
        {/* Turntable Plinth */}
        <rect x="110" y="112" width="128" height="60" rx="3" fill="currentColor" className="text-foreground/[0.06]" />
        <rect x="110" y="112" width="128" height="60" rx="3" fill="none" stroke="currentColor" strokeWidth="0.9" className="text-foreground/50" />

        {/* Isolation Feet */}
        <rect x="118" y="172" width="8" height="4" rx="1" fill="currentColor" className="text-foreground/50" />
        <rect x="222" y="172" width="8" height="4" rx="1" fill="currentColor" className="text-foreground/50" />

        {/* Turntable Platter Rim */}
        <ellipse cx="164" cy="138" rx="46" ry="19" fill="currentColor" className="text-foreground/15" />
        <ellipse cx="164" cy="138" rx="46" ry="19" fill="none" stroke="currentColor" strokeWidth="0.9" className="text-foreground/45" />

        {/* Strobe speed calibration teeth */}
        <ellipse
          cx="164"
          cy="138"
          rx="45"
          ry="18.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeDasharray="1.5 2"
          className="text-foreground/35"
        />

        {/* ── The 12" Vinyl Record (rotates on hover) ── */}
        <g className="transition-transform duration-1000 ease-out origin-[164px_137px] group-hover:rotate-45">
          <ellipse cx="164" cy="137" rx="42" ry="17.5" fill="currentColor" className="text-foreground/40" />
          <ellipse cx="164" cy="137" rx="42" ry="17.5" fill="url(#tmc-vl-sheen)" />
          <ellipse cx="164" cy="137" rx="42" ry="17.5" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-foreground/60" />

          {/* Micro-grooves */}
          <ellipse cx="164" cy="137" rx="37" ry="15.5" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-foreground/30" />
          <ellipse cx="164" cy="137" rx="32" ry="13.5" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-foreground/25" />
          <ellipse cx="164" cy="137" rx="27" ry="11.5" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/20" />
          <ellipse cx="164" cy="137" rx="22" ry="9.5" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-foreground/30" />
          {/* Dead-wax run-out */}
          <ellipse cx="164" cy="137" rx="17" ry="7.2" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/45" />

          {/* Center Paper Label in Brand Accent */}
          <ellipse cx="164" cy="137" rx="13" ry="5.5" fill="currentColor" className="text-accent/80" />
          <ellipse cx="164" cy="137" rx="13" ry="5.5" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/40" />
          {/* Spindle */}
          <circle cx="164" cy="137" r="1.6" fill="currentColor" className="text-foreground/90" />
        </g>

        {/* ── Precision Tonearm Assembly ── */}
        <g id="vl-tonearm">
          {/* Tonearm Gimbal Pivot */}
          <circle cx="218" cy="126" r="5" fill="currentColor" className="text-foreground/35" />
          <circle cx="218" cy="126" r="5" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-foreground/70" />
          {/* Cylindrical Counterweight */}
          <rect x="221" y="122.5" width="7" height="7" rx="1" fill="currentColor" className="text-foreground/55" />
          <line x1="225" y1="122.5" x2="225" y2="129.5" stroke="currentColor" strokeWidth="0.5" className="text-foreground/25" />

          {/* S-shaped tonearm wand */}
          <path
            d="M 218 126 C 210 131, 201 133, 194 136 C 187 139, 180 140, 175 140"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="text-foreground/80"
          />
          {/* Headshell & cartridge needle */}
          <polygon
            points="175,139 169,139.5 169,142 175,141"
            fill="currentColor"
            className="text-foreground/85"
          />
          <line x1="169" y1="141" x2="167" y2="143" stroke="currentColor" strokeWidth="0.75" className="text-accent" />
        </g>

        {/* Speed / Power Switch */}
        <circle cx="121" cy="124" r="3" fill="currentColor" className="text-foreground/40" />
        <circle cx="121" cy="124" r="1.2" fill="currentColor" className="text-accent" />
        <rect x="117" y="156" width="6" height="3" rx="0.5" fill="currentColor" className="text-foreground/45" />
        <rect x="125" y="156" width="6" height="3" rx="0.5" fill="currentColor" className="text-foreground/35" />
      </g>

      {/* ── Foreground Right: Open-Back Reference Headphones (X: 235 to 330) ── */}
      <g id="vl-headphones" className="transition-transform duration-700 origin-[280px_140px] group-hover:scale-[1.02]">
        {/* Padded Headband Arch */}
        <path
          d="M 252 144 C 252 86, 312 86, 312 144"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          className="text-foreground/75"
        />
        {/* Headband inner cushion segments */}
        <path
          d="M 258 132 C 262 96, 302 96, 306 132"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          className="text-foreground/35"
        />

        {/* Left Earcup Gimbal Fork */}
        <path d="M 248 138 L 248 152 L 256 152" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/60" />
        {/* Left Open-back Earcup (elliptical side view) */}
        <ellipse cx="251" cy="154" rx="8" ry="16" fill="currentColor" className="text-foreground/25" />
        <ellipse cx="251" cy="154" rx="8" ry="16" fill="none" stroke="currentColor" strokeWidth="0.9" className="text-foreground/75" />
        {/* Open-back mesh grille texture */}
        <ellipse cx="251" cy="154" rx="5" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 1.5" className="text-foreground/45" />
        <circle cx="251" cy="154" r="2" fill="currentColor" className="text-foreground/80" />

        {/* Right Earcup Gimbal Fork */}
        <path d="M 316 138 L 316 152 L 308 152" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/60" />
        {/* Right Open-back Earcup */}
        <ellipse cx="313" cy="154" rx="8" ry="16" fill="currentColor" className="text-foreground/25" />
        <ellipse cx="313" cy="154" rx="8" ry="16" fill="none" stroke="currentColor" strokeWidth="0.9" className="text-foreground/75" />
        <ellipse cx="313" cy="154" rx="5" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 1.5" className="text-foreground/45" />
        <circle cx="313" cy="154" r="2" fill="currentColor" className="text-foreground/80" />

        {/* Coiled Spring Headphone Cable (realistic helix curves) */}
        <path
          d="M 251 170 
             C 248 178, 256 182, 252 186 
             C 248 190, 256 193, 252 196 
             C 248 199, 258 202, 254 204
             C 250 206, 264 206, 276 200 
             C 290 194, 305 194, 320 188"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="text-foreground/55"
        />

        {/* 1/4" Headphone Jack Plug (resting on floor) */}
        <rect x="320" y="185" width="12" height="4.5" rx="1" fill="currentColor" className="text-foreground/60" />
        <rect x="332" y="186" width="7" height="2.5" fill="currentColor" className="text-accent" />
        <circle cx="339.5" cy="187.2" r="1.2" fill="currentColor" className="text-accent" />
      </g>

      {/* Subtle concentric sound waves from listening session */}
      <path
        d="M 125 105 A 50 22 0 0 1 205 105"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="2 3"
        className="text-foreground/15"
      />
      <path
        d="M 115 95 A 64 28 0 0 1 215 95"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeDasharray="1.5 2"
        className="text-accent/25"
      />
    </svg>
  );
}
