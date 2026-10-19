/**
 * MadrasSessionsIllustration
 *
 * Bespoke architectural line-art for Format 01: Madras Sessions.
 * Represents intimate acoustic music, storytelling, and small-room performances.
 *
 * Featured gear:
 * - Vintage ribbon broadcast microphone on slender round-base stand
 * - Bentwood storyteller performance stool
 * - Handcrafted acoustic guitar with rosette inlays and strings
 * - Songwriter notebook with musical staff lines
 * - Stage cable running across plank lines with seamless background blending
 */
export default function MadrasSessionsIllustration() {
  return (
    <svg
      viewBox="0 0 360 210"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm select-none transition-all duration-500 group"
      aria-label="Line-art illustration of an intimate storytelling music session with microphone, stool and acoustic guitar"
      role="img"
    >
      <title>Madras Sessions — Storytelling & Acoustic Setup</title>
      <desc>
        Architectural line-art vignette featuring a vintage ribbon microphone,
        storyteller stool, and acoustic guitar under a soft spotlight beam.
      </desc>

      <defs>
        {/* Soft downlight beam gradient */}
        <linearGradient id="tmc-ms-beam" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" className="text-accent" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.04" className="text-accent" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* Floor ground radial fade */}
        <radialGradient id="tmc-ms-floor" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.04" className="text-foreground" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.015" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>

        {/* Baseline horizontal fade */}
        <linearGradient id="tmc-ms-line-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="20%" stopColor="currentColor" stopOpacity="0.3" className="text-foreground" />
          <stop offset="80%" stopColor="currentColor" stopOpacity="0.3" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient Floor Vignette */}
      <ellipse cx="180" cy="180" rx="160" ry="24" fill="url(#tmc-ms-floor)" />

      {/* Stage baseline with tapered fade */}
      <line x1="20" y1="176" x2="340" y2="176" stroke="url(#tmc-ms-line-fade)" strokeWidth="0.8" />
      <line x1="45" y1="180" x2="315" y2="180" stroke="url(#tmc-ms-line-fade)" strokeWidth="0.4" strokeOpacity="0.5" />

      {/* Ambient Spotlight Cone */}
      <path
        d="M 125 15 L 45 176 L 205 176 L 129 15 Z"
        fill="url(#tmc-ms-beam)"
      />

      {/* ── Background: Bentwood Storyteller Stool (Centre, X: 165 to 215) ── */}
      <g id="ms-stool">
        {/* Stool seat (ellipse) */}
        <ellipse cx="190" cy="98" rx="26" ry="7.5" fill="currentColor" className="text-foreground/15" />
        <ellipse cx="190" cy="98" rx="26" ry="7.5" fill="none" stroke="currentColor" strokeWidth="0.85" className="text-foreground/60" />
        {/* Cane weave seat texture */}
        <ellipse cx="190" cy="98" rx="21" ry="5.5" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 1.5" className="text-foreground/30" />

        {/* Seat apron ring */}
        <path d="M 165 99 C 165 106, 215 106, 215 99" fill="none" stroke="currentColor" strokeWidth="0.7" className="text-foreground/45" />

        {/* Stool 4 flared legs */}
        <line x1="169" y1="102" x2="160" y2="176" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-foreground/50" />
        <line x1="181" y1="105" x2="178" y2="176" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" className="text-foreground/40" />
        <line x1="200" y1="105" x2="204" y2="176" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" className="text-foreground/40" />
        <line x1="211" y1="102" x2="220" y2="176" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-foreground/50" />

        {/* Circular footrest rung */}
        <ellipse cx="190" cy="148" rx="21" ry="5" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-foreground/45" />
      </g>

      {/* ── Acoustic Guitar (Leaning on right, X: 215 to 290) ── */}
      <g id="ms-guitar" className="transition-transform duration-700 origin-[250px_176px] group-hover:-rotate-1">
        {/* Headstock (Angled at ~15 degrees) */}
        <path
          d="M 230 42 L 235 58 L 243 56 L 238 40 Z"
          fill="currentColor"
          className="text-foreground/25"
        />
        <path
          d="M 230 42 L 235 58 L 243 56 L 238 40 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-foreground/65"
        />
        {/* Tuning pegs */}
        {[44, 49, 54].map((y, i) => (
          <g key={`ms-peg-${i}`}>
            <circle cx={228} cy={y} r="1" fill="currentColor" className="text-foreground/60" />
            <circle cx={245} cy={y - 2} r="1" fill="currentColor" className="text-foreground/60" />
          </g>
        ))}

        {/* Fretboard / Neck */}
        <polygon
          points="235,58 243,56 248,110 240,112"
          fill="currentColor"
          className="text-foreground/35"
        />
        <polygon
          points="235,58 243,56 248,110 240,112"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-foreground/60"
        />
        {/* Fret lines */}
        {[66, 75, 84, 94, 103].map((y, i) => (
          <line
            key={`ms-fret-${i}`}
            x1={236 + i * 0.9}
            y1={y}
            x2={244 + i * 0.9}
            y2={y - 2}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground/35"
          />
        ))}

        {/* Guitar Body Silhouette */}
        <path
          d="M 240 112 
             C 228 115, 222 126, 224 136 
             C 225 144, 230 148, 228 153 
             C 222 161, 220 171, 230 176 
             C 246 177, 260 174, 266 166 
             C 272 158, 271 149, 266 145 
             C 264 141, 266 133, 262 124 
             C 258 116, 250 110, 248 110 
             Z"
          fill="currentColor"
          className="text-foreground/14"
        />
        <path
          d="M 240 112 
             C 228 115, 222 126, 224 136 
             C 225 144, 230 148, 228 153 
             C 222 161, 220 171, 230 176 
             C 246 177, 260 174, 266 166 
             C 272 158, 271 149, 266 145 
             C 264 141, 266 133, 262 124 
             C 258 116, 250 110, 248 110 
             Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.95"
          className="text-foreground/65"
        />

        {/* Inner Purfling */}
        <path
          d="M 240 114 
             C 230 117, 225 127, 226 136 
             C 227 143, 231 147, 230 152 
             C 224 160, 223 169, 231 174 
             C 245 175, 258 172, 264 165 
             C 269 157, 268 149, 264 145 
             C 262 141, 264 134, 260 125 
             C 257 118, 250 112, 248 112 
             Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          className="text-foreground/25"
        />

        {/* Soundhole with Rosette */}
        <circle cx="245" cy="138" r="7.5" fill="currentColor" className="text-foreground/45" />
        <circle cx="245" cy="138" r="7.5" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-foreground/75" />
        <circle cx="245" cy="138" r="9.5" fill="none" stroke="currentColor" strokeWidth="0.45" strokeDasharray="1 1.5" className="text-accent" />

        {/* Bridge & Pins */}
        <rect x="238" y="159" width="16" height="4" rx="1" fill="currentColor" className="text-foreground/60" />
        <line x1="240" y1="160.5" x2="252" y2="160.5" stroke="currentColor" strokeWidth="0.5" className="text-background" />

        {/* Acoustic Strings */}
        <line x1="236" y1="58" x2="241" y2="160" stroke="currentColor" strokeWidth="0.4" className="text-foreground/60" />
        <line x1="239" y1="57" x2="245" y2="160" stroke="currentColor" strokeWidth="0.4" className="text-foreground/60" />
        <line x1="242" y1="56" x2="249" y2="160" stroke="currentColor" strokeWidth="0.4" className="text-foreground/60" />
      </g>

      {/* ── Left: Vintage Ribbon / Broadcast Microphone (X: 110 to 145) ── */}
      <g id="ms-microphone">
        {/* Cast round base */}
        <ellipse cx="126" cy="176" rx="20" ry="5.5" fill="currentColor" className="text-foreground/25" />
        <ellipse cx="126" cy="176" rx="20" ry="5.5" fill="none" stroke="currentColor" strokeWidth="0.85" className="text-foreground/60" />
        <ellipse cx="126" cy="175" rx="15" ry="4" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/35" />

        {/* Main stand tube */}
        <line x1="126" y1="92" x2="126" y2="175" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="text-foreground/65" />

        {/* Clutch collar */}
        <rect x="123.5" y="88" width="5" height="5" rx="0.5" fill="currentColor" className="text-foreground/50" />
        <line x1="124" y1="89" x2="124" y2="92" stroke="currentColor" strokeWidth="0.5" className="text-foreground/25" />
        <line x1="126" y1="89" x2="126" y2="92" stroke="currentColor" strokeWidth="0.5" className="text-foreground/25" />
        <line x1="128" y1="89" x2="128" y2="92" stroke="currentColor" strokeWidth="0.5" className="text-foreground/25" />

        {/* Upper tube */}
        <line x1="126" y1="46" x2="126" y2="88" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="text-foreground/75" />

        {/* Articulated yoke mount */}
        <path d="M 120 46 Q 126 50 132 46" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-foreground/60" />
        <circle cx="120" cy="46" r="1.5" fill="currentColor" className="text-foreground/80" />
        <circle cx="132" cy="46" r="1.5" fill="currentColor" className="text-foreground/80" />

        {/* Vintage Ribbon Mic Head (Coles / RCA 44 / Shure 55 style) */}
        <rect x="121" y="22" width="10" height="24" rx="2" fill="currentColor" className="text-foreground/20" />
        <rect x="121" y="22" width="10" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="0.85" className="text-foreground/75" />
        {/* Horizontal slotted grille lines */}
        {[26, 29, 32, 35, 38, 41].map((y, i) => (
          <line key={`ms-mg-${i}`} x1="122" y1={y} x2="130" y2={y} stroke="currentColor" strokeWidth="0.45" className="text-foreground/45" />
        ))}
        {/* Center vertical acoustic ribbon bar */}
        <line x1="126" y1="23" x2="126" y2="45" stroke="currentColor" strokeWidth="0.6" className="text-accent" />

        {/* Natural audio cable looping on the floor */}
        <path
          d="M 126 50 
             C 131 75, 134 110, 129 138 
             C 125 158, 122 170, 116 176 
             C 110 182, 88 185, 68 182 
             C 48 179, 38 186, 28 185"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          className="text-foreground/45"
        />
      </g>

      {/* ── Foreground: Songwriter Journal on Low Stand (X: 62 to 105) ── */}
      <g id="ms-journal">
        {/* Low wooden riser */}
        <line x1="68" y1="176" x2="100" y2="176" stroke="currentColor" strokeWidth="1.2" className="text-foreground/50" />
        <line x1="72" y1="165" x2="96" y2="165" stroke="currentColor" strokeWidth="1" className="text-foreground/35" />
        <line x1="74" y1="165" x2="72" y2="176" stroke="currentColor" strokeWidth="0.8" className="text-foreground/40" />
        <line x1="94" y1="165" x2="96" y2="176" stroke="currentColor" strokeWidth="0.8" className="text-foreground/40" />

        {/* Open journal pages (perspective) */}
        <polygon points="70,163 83,165 83,153 71,151" fill="currentColor" className="text-background" />
        <polygon points="70,163 83,165 83,153 71,151" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/50" />

        <polygon points="83,165 96,163 95,151 83,153" fill="currentColor" className="text-background" />
        <polygon points="83,165 96,163 95,151 83,153" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/50" />

        {/* Musical stave lines */}
        {[155, 158, 161].map((y, i) => (
          <line key={`ms-stave-l-${i}`} x1="73" y1={y - 1} x2="81" y2={y} stroke="currentColor" strokeWidth="0.35" className="text-foreground/30" />
        ))}
        {[155, 158, 161].map((y, i) => (
          <line key={`ms-stave-r-${i}`} x1="85" y1={y} x2="93" y2={y - 1} stroke="currentColor" strokeWidth="0.35" className="text-foreground/30" />
        ))}
      </g>

      {/* Subtle harmonic wave radiating from guitar */}
      <path
        d="M 270 120 C 290 115, 310 125, 330 118"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="2 3"
        className="text-foreground/20"
      />
      <path
        d="M 275 130 C 295 125, 312 133, 335 126"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeDasharray="1.5 2"
        className="text-accent/30"
      />
    </svg>
  );
}
