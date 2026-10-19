/**
 * StageIllustration
 *
 * Bespoke architectural & technical line-art of an intimate listening session setup.
 * Inspired by audiophile engineering monographs, Swiss design principles, and
 * the intentional listening culture of The Madras Collective.
 *
 * Seamless borderless composition designed to blend naturally into the website background:
 * - Audiophile Turntable & Vinyl Credenza with S-tonearm, strobe platter, and LP crate
 * - Studio Large-Diaphragm Condenser Microphone with spider shockmount, pop filter & cast base
 * - Handcrafted Acoustic Storyteller Guitar with fretboard inlays, rosette & 6 strings
 * - Vintage Analog Receiver with illuminated dual VU meters & tactile rotary controls
 * - Architectural pendant downlight with soft atmospheric cone & floating motes
 * - Soft edge-fading floor vignette that merges cleanly with the page canvas
 *
 * All colours map to Tailwind theme tokens (foreground, muted-foreground, accent, border)
 * ensuring full fidelity across light and dark modes.
 */
export default function StageIllustration() {
  return (
    <svg
      viewBox="0 20 520 510"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg select-none transition-all duration-500 group"
      aria-label="Line-art illustration of an intimate stage with turntable, studio microphone, acoustic guitar and analog tube receiver"
      role="img"
    >
      <title>The Madras Collective — Intimate Stage Setup</title>
      <desc>
        Architectural line-art schematic of an intentional listening room setup
        featuring a vinyl turntable console, studio condenser microphone, acoustic
        guitar and analog VU meters.
      </desc>

      {/* ── Defs & Gradients ── */}
      <defs>
        {/* Soft atmospheric downlight cone */}
        <linearGradient id="tmc-stage-beam" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.14" className="text-accent" />
          <stop offset="35%" stopColor="currentColor" stopOpacity="0.06" className="text-accent" />
          <stop offset="80%" stopColor="currentColor" stopOpacity="0.01" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* Stage floor depth soft radial glow - dissolves seamlessly into background */}
        <radialGradient id="tmc-floor-glow" cx="50%" cy="20%" r="55%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.045" className="text-foreground" />
          <stop offset="55%" stopColor="currentColor" stopOpacity="0.015" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>

        {/* Horizontal line fade to blend stage floor cleanly into background */}
        <linearGradient id="tmc-line-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="16%" stopColor="currentColor" stopOpacity="0.32" className="text-foreground" />
          <stop offset="84%" stopColor="currentColor" stopOpacity="0.32" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* Secondary line fade */}
        <linearGradient id="tmc-line-fade-subtle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="22%" stopColor="currentColor" stopOpacity="0.15" className="text-foreground" />
          <stop offset="78%" stopColor="currentColor" stopOpacity="0.15" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* Wire fade in from top */}
        <linearGradient id="tmc-wire-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" className="text-foreground" />
        </linearGradient>

        {/* VU meter warm amber backlight */}
        <radialGradient id="tmc-vu-glow" cx="50%" cy="60%" r="65%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" className="text-accent" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.08" className="text-accent" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
        </radialGradient>

        {/* Vinyl sheen highlight */}
        <linearGradient id="tmc-vinyl-sheen" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" className="text-foreground" />
          <stop offset="48%" stopColor="currentColor" stopOpacity="0.05" className="text-foreground" />
          <stop offset="52%" stopColor="currentColor" stopOpacity="0.22" className="text-foreground" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" className="text-foreground" />
        </linearGradient>
      </defs>

      {/* ══════════════════════════════════════════════════════════════
          01. LIGHTING & ACOUSTIC ATMOSPHERE
      ══════════════════════════════════════════════════════════════ */}
      {/* Pendant downlight canister & wires fading smoothly from top */}
      <line x1="256" y1="20" x2="256" y2="58" stroke="url(#tmc-wire-fade)" strokeWidth="0.8" />
      <line x1="264" y1="20" x2="264" y2="58" stroke="url(#tmc-wire-fade)" strokeWidth="0.8" />
      <rect x="251" y="58" width="18" height="14" rx="1.5" fill="currentColor" className="text-foreground/70" />
      <rect x="253" y="72" width="14" height="2.5" rx="0.5" fill="currentColor" className="text-accent" />

      {/* Atmospheric light cone (diffuse, soft, blends into background) */}
      <path
        d="M 253 74.5 L 94 466 L 426 466 L 267 74.5 Z"
        fill="url(#tmc-stage-beam)"
      />

      {/* Suspended light motes (capturing the quiet room vibe) */}
      {[
        { cx: 256, cy: 115, r: 1 },
        { cx: 242, cy: 165, r: 0.75 },
        { cx: 278, cy: 215, r: 1.1 },
        { cx: 232, cy: 275, r: 0.8 },
        { cx: 284, cy: 335, r: 1 },
        { cx: 248, cy: 395, r: 0.75 },
      ].map((pt, i) => (
        <circle
          key={`mote-${i}`}
          cx={pt.cx}
          cy={pt.cy}
          r={pt.r}
          fill="currentColor"
          className="text-accent/35 transition-opacity duration-700 group-hover:opacity-80"
        />
      ))}

      {/* Subtle acoustic resonance curve */}
      <path
        d="M 170 125 C 220 115, 240 108, 260 108 C 280 108, 300 115, 350 125"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="2 3"
        className="text-foreground/15"
      />
      <path
        d="M 195 136 C 235 128, 248 122, 260 122 C 272 122, 285 128, 325 136"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="2 2"
        className="text-foreground/12"
      />

      {/* ══════════════════════════════════════════════════════════════
          02. STAGE FLOOR (SEAMLESS GROUNDING BLEND)
      ══════════════════════════════════════════════════════════════ */}
      {/* Soft radial floor vignette - melts completely into page background */}
      <ellipse cx="260" cy="480" rx="230" ry="42" fill="url(#tmc-floor-glow)" />

      {/* Primary stage baseline with seamless edge fade */}
      <line x1="20" y1="466" x2="500" y2="466" stroke="url(#tmc-line-fade)" strokeWidth="1" />
      <line x1="36" y1="470" x2="484" y2="470" stroke="url(#tmc-line-fade-subtle)" strokeWidth="0.5" />

      {/* Receding perspective floor lines fading out gently */}
      {[
        { x1: 74, x2: 54, op: "0.07" },
        { x1: 136, x2: 126, op: "0.10" },
        { x1: 200, x2: 196, op: "0.12" },
        { x1: 260, x2: 260, op: "0.13" },
        { x1: 320, x2: 324, op: "0.12" },
        { x1: 384, x2: 394, op: "0.10" },
        { x1: 446, x2: 466, op: "0.07" },
      ].map((line, i) => (
        <line
          key={`flr-${i}`}
          x1={line.x1}
          y1="470"
          x2={line.x2}
          y2="516"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-foreground"
          strokeOpacity={line.op}
        />
      ))}

      {/* ══════════════════════════════════════════════════════════════
          03. LEFT: AUDIOPHILE TURNTABLE & VINYL CREDENZA
      ══════════════════════════════════════════════════════════════ */}
      <g id="tmc-turntable-station">
        {/* Console table legs */}
        <line x1="52" y1="384" x2="52" y2="466" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-foreground/45" />
        <line x1="172" y1="384" x2="172" y2="466" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-foreground/45" />
        {/* Table leg leveling feet */}
        <line x1="48" y1="466" x2="56" y2="466" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground/60" />
        <line x1="168" y1="466" x2="176" y2="466" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground/60" />

        {/* Lower vinyl storage shelf */}
        <rect x="46" y="420" width="132" height="3" fill="currentColor" className="text-foreground/20" />
        <line x1="46" y1="420" x2="178" y2="420" stroke="currentColor" strokeWidth="0.75" className="text-foreground/35" />

        {/* Vinyl LP Record Crate on lower shelf */}
        <rect x="58" y="424" width="108" height="40" rx="1" fill="none" stroke="currentColor" strokeWidth="0.9" className="text-foreground/35" />
        <line x1="62" y1="434" x2="162" y2="434" stroke="currentColor" strokeWidth="0.6" className="text-foreground/20" />
        <line x1="62" y1="446" x2="162" y2="446" stroke="currentColor" strokeWidth="0.6" className="text-foreground/20" />
        {/* Vinyl LP spines in crate */}
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={`lps-${i}`}
            x1={66 + i * 6.8}
            y1="427"
            x2={66 + i * 6.8}
            y2="461"
            stroke="currentColor"
            strokeWidth={i === 8 ? "1.2" : "0.7"}
            className={i === 8 ? "text-accent/60" : "text-foreground/28"}
          />
        ))}
        {/* One vinyl record sleeve slightly tilted out */}
        <path
          d="M 124 416 L 142 422 L 142 458 L 124 452 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-foreground/40"
        />

        {/* Console tabletop */}
        <rect x="44" y="375" width="136" height="8" rx="1" fill="currentColor" className="text-foreground/15" />
        <rect x="44" y="375" width="136" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="0.9" className="text-foreground/40" />
        <line x1="46" y1="379" x2="178" y2="379" stroke="currentColor" strokeWidth="0.5" className="text-foreground/20" />

        {/* ── Turntable Chassis (SL-1200 / Rega audiophile aesthetic) ── */}
        {/* Isolation feet */}
        <rect x="54" y="371" width="10" height="4" rx="1" fill="currentColor" className="text-foreground/50" />
        <rect x="160" y="371" width="10" height="4" rx="1" fill="currentColor" className="text-foreground/50" />

        {/* Heavy plinth */}
        <rect x="50" y="347" width="124" height="24" rx="2" fill="currentColor" className="text-foreground/10" />
        <rect x="50" y="347" width="124" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/45" />
        <line x1="52" y1="353" x2="172" y2="353" stroke="currentColor" strokeWidth="0.5" className="text-foreground/20" />

        {/* Turntable Platter (perspective ellipse) */}
        <ellipse cx="104" cy="355" rx="42" ry="14" fill="currentColor" className="text-foreground/18" />
        <ellipse cx="104" cy="355" rx="42" ry="14" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/40" />

        {/* Strobe speed calibration teeth on platter rim */}
        <ellipse
          cx="104"
          cy="355"
          rx="41"
          ry="13.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="1.5 2"
          className="text-foreground/35"
        />

        {/* Vinyl LP disc */}
        <ellipse cx="104" cy="354" rx="38" ry="12.5" fill="currentColor" className="text-foreground/35" />
        <ellipse cx="104" cy="354" rx="38" ry="12.5" fill="url(#tmc-vinyl-sheen)" />
        <ellipse cx="104" cy="354" rx="38" ry="12.5" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-foreground/50" />

        {/* Micro-grooves on vinyl */}
        <ellipse cx="104" cy="354" rx="34" ry="11.2" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-foreground/25" />
        <ellipse cx="104" cy="354" rx="30" ry="9.8" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-foreground/25" />
        <ellipse cx="104" cy="354" rx="25" ry="8.2" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/20" />
        <ellipse cx="104" cy="354" rx="21" ry="6.8" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-foreground/25" />
        {/* Run-out dead wax */}
        <ellipse cx="104" cy="354" rx="16" ry="5.2" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/35" />

        {/* Center record label in brand accent */}
        <ellipse cx="104" cy="354" rx="12" ry="4" fill="currentColor" className="text-accent/80" />
        <ellipse cx="104" cy="354" rx="12" ry="4" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/40" />
        {/* Center spindle */}
        <circle cx="104" cy="354" r="1.5" fill="currentColor" className="text-foreground/90" />

        {/* ── Precision Tonearm System ── */}
        {/* Gimbal bearing housing */}
        <circle cx="152" cy="344" r="5" fill="currentColor" className="text-foreground/40" />
        <circle cx="152" cy="344" r="5" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-foreground/60" />
        <circle cx="152" cy="344" r="2.2" fill="currentColor" className="text-foreground/70" />
        {/* Counterweight */}
        <rect x="156" y="340.5" width="8" height="7" rx="1" fill="currentColor" className="text-foreground/50" />
        <line x1="160" y1="340.5" x2="160" y2="347.5" stroke="currentColor" strokeWidth="0.5" className="text-foreground/20" />
        {/* Anti-skate knob & cue lever */}
        <circle cx="147" cy="348" r="1.8" fill="currentColor" className="text-foreground/50" />
        <line x1="150" y1="347" x2="148" y2="352" stroke="currentColor" strokeWidth="0.9" className="text-foreground/60" />

        {/* S-shaped tonearm wand */}
        <path
          d="M 152 344 C 145 348, 137 350, 132 353 C 127 356, 122 357, 117 357"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          className="text-foreground/75"
        />
        {/* Headshell & cartridge tracking groove */}
        <polygon
          points="117,356 110,356.5 110,359 117,358"
          fill="currentColor"
          className="text-foreground/80"
        />
        <line x1="110" y1="358" x2="108" y2="360" stroke="currentColor" strokeWidth="0.8" className="text-accent" />

        {/* ── Turntable Deck Controls ── */}
        {/* Power switch / target stylus lamp */}
        <circle cx="59" cy="352" r="3" fill="currentColor" className="text-foreground/40" />
        <circle cx="59" cy="352" r="1.2" fill="currentColor" className="text-accent/70" />
        {/* 33 / 45 RPM speed selector buttons */}
        <rect x="68" y="362" width="5" height="3" rx="0.5" fill="currentColor" className="text-foreground/45" />
        <rect x="75" y="362" width="5" height="3" rx="0.5" fill="currentColor" className="text-foreground/35" />
        {/* Pitch slider track */}
        <rect x="160" y="354" width="3" height="12" rx="0.5" fill="currentColor" className="text-foreground/25" />
        <rect x="159" y="359" width="5" height="2" rx="0.4" fill="currentColor" className="text-foreground/70" />
      </g>

      {/* ══════════════════════════════════════════════════════════════
          04. CENTRE: STUDIO VOCAL & INSTRUMENT CONDENSER MICROPHONE
      ══════════════════════════════════════════════════════════════ */}
      <g id="tmc-microphone-station">
        {/* ── Professional Studio Mic Stand ── */}
        {/* Heavy cast-iron disc base (stable, audiophile grade) */}
        <ellipse cx="260" cy="466" rx="34" ry="9" fill="currentColor" className="text-foreground/25" />
        <ellipse cx="260" cy="466" rx="34" ry="9" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/55" />
        <ellipse cx="260" cy="465" rx="27" ry="7" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/35" />
        <ellipse cx="260" cy="464" rx="14" ry="3.5" fill="currentColor" className="text-foreground/40" />

        {/* Lower heavy vertical shaft */}
        <line x1="260" y1="318" x2="260" y2="464" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground/60" />

        {/* Machined height-adjustment clutch collar */}
        <rect x="256" y="310" width="8" height="9" rx="1" fill="currentColor" className="text-foreground/50" />
        <rect x="256" y="310" width="8" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-foreground/70" />
        {/* Vertical tactile grip knurling */}
        <line x1="258" y1="311" x2="258" y2="318" stroke="currentColor" strokeWidth="0.6" className="text-foreground/30" />
        <line x1="260" y1="311" x2="260" y2="318" stroke="currentColor" strokeWidth="0.6" className="text-foreground/30" />
        <line x1="262" y1="311" x2="262" y2="318" stroke="currentColor" strokeWidth="0.6" className="text-foreground/30" />

        {/* Upper telescopic tube */}
        <line x1="260" y1="216" x2="260" y2="310" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="text-foreground/70" />

        {/* ── Studio Spider Shockmount Suspension Cradle ── */}
        {/* Outer suspension ring */}
        <ellipse cx="260" cy="192" rx="23" ry="8" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-foreground/60" />
        {/* Inner mic clamp ring */}
        <ellipse cx="260" cy="192" rx="13" ry="4.5" fill="none" stroke="currentColor" strokeWidth="0.9" className="text-foreground/45" />

        {/* Suspension elastic bands (criss-cross high-tension bands) */}
        {[
          { x1: 238, y1: 191, x2: 248, y2: 193 },
          { x1: 242, y1: 187, x2: 251, y2: 195 },
          { x1: 278, y1: 187, x2: 269, y2: 195 },
          { x1: 282, y1: 191, x2: 272, y2: 193 },
        ].map((band, i) => (
          <line
            key={`sm-band-${i}`}
            x1={band.x1}
            y1={band.y1}
            x2={band.x2}
            y2={band.y2}
            stroke="currentColor"
            strokeWidth="0.75"
            className="text-foreground/40"
          />
        ))}

        {/* Swivel mount thumbscrew on the right */}
        <rect x="283" y="189" width="4.5" height="6" rx="0.8" fill="currentColor" className="text-foreground/50" />
        <line x1="287.5" y1="187" x2="287.5" y2="197" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-foreground/65" />

        {/* ── Studio Large-Diaphragm Condenser Mic (Neumann U87 aesthetic) ── */}
        {/* Lower tapered connector body */}
        <path d="M 254 210 L 260 219 L 266 210 Z" fill="currentColor" className="text-foreground/50" />

        {/* Satin cylindrical mic body */}
        <rect x="251" y="170" width="18" height="40" rx="1" fill="currentColor" className="text-foreground/25" />
        <rect x="251" y="170" width="18" height="40" rx="1" fill="none" stroke="currentColor" strokeWidth="0.9" className="text-foreground/75" />

        {/* Directional pattern switch (Cardioid heart icon) */}
        <path
          d="M 260 180 C 258 178, 256.5 179.5, 258 182 L 260 184 L 262 182 C 263.5 179.5, 262 178, 260 180 Z"
          fill="currentColor"
          className="text-accent"
        />

        {/* Manufacturer emblem / crest badge */}
        <rect x="256" y="193" width="8" height="5" rx="0.5" fill="currentColor" className="text-foreground/45" />
        <line x1="257.5" y1="195.5" x2="262.5" y2="195.5" stroke="currentColor" strokeWidth="0.5" className="text-background" />

        {/* Acoustic capsule mesh grille */}
        <path
          d="M 251 170 L 251 144 C 251 133, 269 133, 269 144 L 269 170 Z"
          fill="currentColor"
          className="text-foreground/20"
        />
        <path
          d="M 251 170 L 251 144 C 251 133, 269 133, 269 144 L 269 170 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/75"
        />
        {/* Grille middle support rib */}
        <line x1="251" y1="154" x2="269" y2="154" stroke="currentColor" strokeWidth="1.2" className="text-foreground/60" />
        {/* Fine wire mesh hatchings */}
        {[141, 147, 161, 166].map((y, i) => (
          <line
            key={`mesh-h-${i}`}
            x1="252"
            y1={y}
            x2="268"
            y2={y}
            stroke="currentColor"
            strokeWidth="0.45"
            className="text-foreground/30"
          />
        ))}
        <line x1="260" y1="135" x2="260" y2="170" stroke="currentColor" strokeWidth="0.6" className="text-foreground/40" />

        {/* ── Studio Dual-Layer Pop Filter Screen ── */}
        {/* Circular acoustic mesh filter positioned before the capsule */}
        <ellipse cx="245" cy="153" rx="14" ry="16" fill="currentColor" className="text-background/40" />
        <ellipse cx="245" cy="153" rx="14" ry="16" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/60" />
        <ellipse cx="245" cy="153" rx="11" ry="13" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 1.5" className="text-foreground/25" />
        {/* Gooseneck articulated clamp curving to the stand */}
        <path
          d="M 231 155 C 220 170, 222 195, 235 210 C 242 218, 252 222, 259 224"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="text-foreground/50"
        />
        {/* Gooseneck clamp collar */}
        <rect x="257.5" y="222" width="5" height="4" rx="0.5" fill="currentColor" className="text-foreground/70" />

        {/* ── Professional Audio XLR Cable (realistic physics curve) ── */}
        <path
          d="M 260 219 C 265 240, 269 265, 264 290 C 259 315, 256 345, 262 375 C 268 405, 265 440, 258 464 C 252 485, 226 492, 194 488 C 162 484, 138 494, 98 492"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="text-foreground/45"
        />
        {/* Cable clip on lower shaft */}
        <rect x="259" y="355" width="2.5" height="4" fill="currentColor" className="text-foreground/60" />
      </g>

      {/* ══════════════════════════════════════════════════════════════
          05. RIGHT: VINTAGE ANALOG RECEIVER & TUBE PREAMP
      ══════════════════════════════════════════════════════════════ */}
      <g id="tmc-analog-receiver">
        {/* Receiver chassis feet */}
        <rect x="302" y="462" width="6" height="4" rx="1" fill="currentColor" className="text-foreground/60" />
        <rect x="354" y="462" width="6" height="4" rx="1" fill="currentColor" className="text-foreground/60" />

        {/* Solid brushed aluminum faceplate */}
        <rect x="296" y="382" width="68" height="82" rx="2" fill="currentColor" className="text-foreground/12" />
        <rect x="296" y="382" width="68" height="82" rx="2" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/45" />

        {/* Faceplate divider line */}
        <line x1="296" y1="422" x2="364" y2="422" stroke="currentColor" strokeWidth="0.6" className="text-foreground/25" />

        {/* ── Dual Illuminated Analog VU Meters ── */}
        {/* Left VU Meter (Channel A) */}
        <rect x="301" y="387" width="26" height="19" rx="1" fill="url(#tmc-vu-glow)" />
        <rect x="301" y="387" width="26" height="19" rx="1" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-foreground/35" />
        {/* Left meter scale arc */}
        <path d="M 304 402 A 16 16 0 0 1 324 402" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/30" />
        <line x1="321" y1="398" x2="324" y2="400" stroke="currentColor" strokeWidth="0.75" className="text-accent" />
        {/* Left needle pointer (poised around -3 dB) */}
        <line
          x1="314"
          y1="404"
          x2="319"
          y2="392"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          className="text-foreground/80 transition-transform duration-700 group-hover:rotate-6 origin-[314px_404px]"
        />

        {/* Right VU Meter (Channel B) */}
        <rect x="333" y="387" width="26" height="19" rx="1" fill="url(#tmc-vu-glow)" />
        <rect x="333" y="387" width="26" height="19" rx="1" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-foreground/35" />
        {/* Right meter scale arc */}
        <path d="M 336 402 A 16 16 0 0 1 356 402" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/30" />
        <line x1="353" y1="398" x2="356" y2="400" stroke="currentColor" strokeWidth="0.75" className="text-accent" />
        {/* Right needle pointer (poised around 0 dB) */}
        <line
          x1="346"
          y1="404"
          x2="350"
          y2="391"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          className="text-foreground/80 transition-transform duration-700 group-hover:-rotate-3 origin-[346px_404px]"
        />

        {/* Miniature mono text below VU meters */}
        <text x="314" y="416" textAnchor="middle" className="font-mono text-[5px] fill-muted-foreground/60 tracking-wider">VU L</text>
        <text x="346" y="416" textAnchor="middle" className="font-mono text-[5px] fill-muted-foreground/60 tracking-wider">VU R</text>

        {/* ── Receiver Controls ── */}
        {/* Stepped rotary potentiometers (Bass, Treble, Presence) */}
        {[308, 320, 332].map((x, i) => (
          <g key={`pot-${i}`}>
            <circle cx={x} cy="432" r="3.2" fill="currentColor" className="text-foreground/30" />
            <circle cx={x} cy="432" r="3.2" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/60" />
            <line x1={x} y1="429.5" x2={x} y2="432" stroke="currentColor" strokeWidth="0.6" className="text-foreground/90" />
          </g>
        ))}

        {/* Master Volume knob (larger milled dial) */}
        <circle cx="349" cy="433" r="5.5" fill="currentColor" className="text-foreground/25" />
        <circle cx="349" cy="433" r="5.5" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-foreground/75" />
        <circle cx="349" cy="433" r="3.5" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/35" />
        <line x1="349" y1="428" x2="349" y2="431" stroke="currentColor" strokeWidth="0.8" className="text-accent" />

        {/* Toggle switches & 1/4" headphone jack */}
        <rect x="306" y="447" width="2" height="6" rx="0.5" fill="currentColor" className="text-foreground/50" />
        <rect x="314" y="447" width="2" height="6" rx="0.5" fill="currentColor" className="text-foreground/50" />

        {/* Power LED (active glow) */}
        <circle cx="326" cy="450" r="1.5" fill="currentColor" className="text-accent animate-pulse" />

        {/* 1/4" Headphone jack */}
        <circle cx="348" cy="450" r="3" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-foreground/45" />
        <circle cx="348" cy="450" r="1.5" fill="currentColor" className="text-foreground/70" />

        {/* Top ventilation slots for vacuum tubes */}
        <line x1="304" y1="384" x2="356" y2="384" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" className="text-foreground/25" />
      </g>

      {/* ══════════════════════════════════════════════════════════════
          06. FAR RIGHT: ACOUSTIC STORYTELLER GUITAR ON A-FRAME STAND
      ══════════════════════════════════════════════════════════════ */}
      <g id="tmc-acoustic-guitar">
        {/* A-Frame Guitar Stand behind & cradling guitar */}
        <line x1="386" y1="440" x2="380" y2="466" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="text-foreground/40" />
        <line x1="454" y1="440" x2="460" y2="466" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="text-foreground/40" />
        {/* Rubber feet */}
        <line x1="377" y1="466" x2="383" y2="466" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground/60" />
        <line x1="457" y1="466" x2="463" y2="466" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground/60" />
        {/* Cradle crossbar */}
        <line x1="388" y1="442" x2="452" y2="442" stroke="currentColor" strokeWidth="1.2" className="text-foreground/30" />

        {/* ── Guitar Headstock ── */}
        <path
          d="M 416 206 L 413 234 L 427 234 L 424 206 C 422 204, 418 204, 416 206 Z"
          fill="currentColor"
          className="text-foreground/30"
        />
        <path
          d="M 416 206 L 413 234 L 427 234 L 424 206 C 422 204, 418 204, 416 206 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-foreground/65"
        />

        {/* 6 Vintage open-gear tuning machines (3 per side) */}
        {[212, 220, 228].map((y, i) => (
          <g key={`tuner-${i}`}>
            {/* Left side peg & button */}
            <circle cx="410" cy={y} r="1.5" fill="currentColor" className="text-foreground/50" />
            <line x1="411" y1={y} x2="414" y2={y} stroke="currentColor" strokeWidth="0.8" className="text-foreground/60" />
            {/* Right side peg & button */}
            <circle cx="430" cy={y} r="1.5" fill="currentColor" className="text-foreground/50" />
            <line x1="429" y1={y} x2="426" y2={y} stroke="currentColor" strokeWidth="0.8" className="text-foreground/60" />
          </g>
        ))}

        {/* Bone nut */}
        <rect x="413" y="234" width="14" height="2" fill="currentColor" className="text-foreground/75" />

        {/* ── Fretboard & Neck ── */}
        <polygon
          points="414,236 412,336 428,336 426,236"
          fill="currentColor"
          className="text-foreground/35"
        />
        <polygon
          points="414,236 412,336 428,336 426,236"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-foreground/65"
        />

        {/* Calibrated fret wires (progressively spaced) */}
        {[244, 253, 263, 274, 286, 298, 310, 322, 334].map((y, i) => (
          <line
            key={`fret-${i}`}
            x1="413"
            y1={y}
            x2="427"
            y2={y}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground/35"
          />
        ))}

        {/* Mother-of-pearl position marker dots */}
        <circle cx="420" cy="258" r="0.9" fill="currentColor" className="text-background/80" />
        <circle cx="420" cy="279" r="0.9" fill="currentColor" className="text-background/80" />
        <circle cx="420" cy="304" r="0.9" fill="currentColor" className="text-background/80" />
        {/* Double-dot at 12th fret */}
        <circle cx="417.5" cy="328" r="0.75" fill="currentColor" className="text-background/80" />
        <circle cx="422.5" cy="328" r="0.75" fill="currentColor" className="text-background/80" />

        {/* ── Handcrafted Acoustic Guitar Body (Ornate Luthier Curves) ── */}
        {/* Outer body outline */}
        <path
          d="M 412 336 
             C 396 338, 386 352, 386 368
             C 386 380, 392 388, 394 394
             C 386 404, 380 418, 380 432
             C 380 448, 396 460, 420 460
             C 444 460, 460 448, 460 432
             C 460 418, 454 404, 446 394
             C 448 388, 454 380, 454 368
             C 454 352, 444 338, 428 336
             Z"
          fill="currentColor"
          className="text-foreground/14"
        />
        <path
          d="M 412 336 
             C 396 338, 386 352, 386 368
             C 386 380, 392 388, 394 394
             C 386 404, 380 418, 380 432
             C 380 448, 396 460, 420 460
             C 444 460, 460 448, 460 432
             C 460 418, 454 404, 446 394
             C 448 388, 454 380, 454 368
             C 454 352, 444 338, 428 336
             Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          className="text-foreground/65"
        />

        {/* Inner purfling / binding trim (gives high-end luthier craftsmanship look) */}
        <path
          d="M 412 339 
             C 398 341, 389 354, 389 368
             C 389 379, 394 387, 396 393
             C 389 403, 383 416, 383 430
             C 383 445, 398 457, 420 457
             C 442 457, 457 445, 457 430
             C 457 416, 451 403, 444 393
             C 446 387, 451 379, 451 368
             C 451 354, 442 341, 428 339
             Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.45"
          className="text-foreground/25"
        />

        {/* Soundhole with concentric rosette inlays */}
        <circle cx="420" cy="378" r="12" fill="currentColor" className="text-foreground/45" />
        <circle cx="420" cy="378" r="12" fill="none" stroke="currentColor" strokeWidth="0.9" className="text-foreground/75" />
        <circle cx="420" cy="378" r="14.5" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/35" />
        <circle cx="420" cy="378" r="16.5" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 1.5" className="text-accent" />

        {/* Teardrop acoustic pickguard */}
        <path
          d="M 432 376 C 438 382, 439 394, 433 402 C 427 400, 425 393, 428 384 Z"
          fill="currentColor"
          className="text-foreground/25"
        />

        {/* Acoustic Bridge & Saddle */}
        <rect x="408" y="420" width="24" height="6.5" rx="1.5" fill="currentColor" className="text-foreground/60" />
        <line x1="410" y1="422" x2="430" y2="422" stroke="currentColor" strokeWidth="0.75" className="text-background" />
        {/* 6 Bridge pins */}
        {[410, 414, 418, 422, 426, 430].map((x, i) => (
          <circle key={`pin-${i}`} cx={x} cy="424.5" r="0.75" fill="currentColor" className="text-foreground/90" />
        ))}

        {/* 6 Acoustic Strings (razor-sharp high tension lines) */}
        {[
          { x1: 414.5, x2: 410 },
          { x1: 416.5, x2: 414 },
          { x1: 418.5, x2: 418 },
          { x1: 421.5, x2: 422 },
          { x1: 423.5, x2: 426 },
          { x1: 425.5, x2: 430 },
        ].map((str, i) => (
          <line
            key={`string-${i}`}
            x1={str.x1}
            y1="236"
            x2={str.x2}
            y2="422"
            stroke="currentColor"
            strokeWidth={0.35 + i * 0.08}
            className="text-foreground/65"
          />
        ))}
      </g>
    </svg>
  );
}
