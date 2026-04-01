import { useId } from "react";

// ─── Palette helpers ────────────────────────────────────────────────────────
type Variant = "light" | "dark";
const MONO = "JetBrains Mono, monospace";
const pt  = (v: Variant) => v === "light" ? "#2E3238" : "#BBC1CE";
const txt = (v: Variant) => v === "light" ? "#0A0A0A" : "#E4E4E4";

// ═══════════════════════════════════════════════════════════════════════════
// DEFAULT SITE LOGO
// Circle mark (medium-bold) + "SOLANDER898" inline wordmark
// ═══════════════════════════════════════════════════════════════════════════

interface LogoProps {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

export function Logo({
  variant = "dark",
  size = "md",
  showWordmark = true,
  className = "",
}: LogoProps) {
  const dim = {
    sm: { image: 40, wm: 11,  gap: 9,  track: 3   },
    md: { image: 80, wm: 13,  gap: 11, track: 3.5 },
    lg: { image: 120, wm: 17,  gap: 16, track: 4   },
  }[size];

  return (
    // Logo.tsx — añade shrink-0 y whitespace-nowrap al wrapper del texto
<div className={`inline-flex items-center shrink-0 ${className}`} style={{ gap: dim.gap }}>
  <img 
    src="logosolander.png" 
    style={{ 
      width: dim.image, 
      height: dim.image,
      objectFit: "contain",
      flexShrink: 0   // ← añade esto
    }}
  />
  {showWordmark && (
    <div style={{ fontFamily: MONO, lineHeight: 1, whiteSpace: "nowrap" }}>  {/* ← añade whiteSpace */}
          {/* SOLANDER898 — inline, two-tone */}
          <span style={{
            fontSize: dim.wm,
            letterSpacing: dim.track,
            fontWeight: 400,
            color: txt(variant),
          }}>
            SOLANDER
          </span>
          <span style={{
            fontSize: dim.wm,
            letterSpacing: dim.track,
            fontWeight: 300,
            color: pt(variant),
          }}>
            898
          </span>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// DEFAULT MARK — Circle, medium-bold stroke, 898 centred
// ═══════════════════════════════════════════════════════════════════════════

export function LogoMark({
  size = 40,
  variant = "dark",
}: {
  size?: number;
  variant?: Variant;
}) {
  const p = pt(variant);
  // stroke scaled proportionally — baseline 3.5px at 100-unit viewBox
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-label="Solander898">
      <circle cx="50" cy="50" r="43" stroke={p} strokeWidth="3.5" />
      <text
        x="50" y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily={MONO}
        fontSize="26"
        fontWeight="300"
        letterSpacing="1"
        fill={p}
      >
        898
      </text>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  LOGO CONCEPTS  (all 100×100 viewBox)
// ═══════════════════════════════════════════════════════════════════════════

interface CP { size?: number; variant?: Variant }

// ─── A: Bold Ring ────────────────────────────────────────────────────────────
// One confident, heavy stroke circle. 898 inside, monospaced, light weight.
// The contrast between the bold ring and the thin numeral creates hierarchy.
export function ConceptA({ size = 120, variant = "dark" }: CP) {
  const p = pt(variant);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="42" stroke={p} strokeWidth="7" />
      <text
        x="50" y="50"
        textAnchor="middle" dominantBaseline="central"
        fontFamily={MONO} fontSize="26" fontWeight="200"
        letterSpacing="1.5" fill={p}
      >
        898
      </text>
    </svg>
  );
}

// ─── B: Double Ring — Thin outer / Bold inner ────────────────────────────────
// Outer hairline ring acts as a field; inner bold ring is the brand boundary.
// 898 floats in the negative space between inner ring and centre.
export function ConceptB({ size = 120, variant = "dark" }: CP) {
  const p = pt(variant);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* outer hairline */}
      <circle cx="50" cy="50" r="46" stroke={p} strokeWidth="0.7" opacity="0.45" />
      {/* inner bold ring */}
      <circle cx="50" cy="50" r="37" stroke={p} strokeWidth="5.5" />
      <text
        x="50" y="50"
        textAnchor="middle" dominantBaseline="central"
        fontFamily={MONO} fontSize="22" fontWeight="300"
        letterSpacing="1" fill={p}
      >
        898
      </text>
    </svg>
  );
}

// ─── C: Segmented Ring ───────────────────────────────────────────────────────
// Four equal arcs with precise gaps at compass points.
// Evokes a gauge, a compass rose, scientific precision.
// Medium-bold stroke weight.
export function ConceptC({ size = 120, variant = "dark" }: CP) {
  const p = pt(variant);
  // gaps of 8° at 0°, 90°, 180°, 270° (12 o'clock, 3, 6, 9)
  // arc from 4° to 86°, 94° to 176°, 184° to 266°, 274° to 356° (all relative to top)
  const r = 42, cx = 50, cy = 50;
  const toRad = (d: number) => (d - 90) * Math.PI / 180;
  const arc = (startDeg: number, endDeg: number) => {
    const sx = cx + r * Math.cos(toRad(startDeg));
    const sy = cy + r * Math.sin(toRad(startDeg));
    const ex = cx + r * Math.cos(toRad(endDeg));
    const ey = cy + r * Math.sin(toRad(endDeg));
    return `M ${sx} ${sy} A ${r} ${r} 0 0 1 ${ex} ${ey}`;
  };
  const segs = [[5, 85], [95, 175], [185, 265], [275, 355]] as const;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {segs.map(([s, e], i) => (
        <path key={i} d={arc(s, e)} stroke={p} strokeWidth="4.5" strokeLinecap="round" />
      ))}
      <text
        x="50" y="50"
        textAnchor="middle" dominantBaseline="central"
        fontFamily={MONO} fontSize="25" fontWeight="200"
        letterSpacing="1.5" fill={p}
      >
        898
      </text>
    </svg>
  );
}

// ─── D: Open Circle — gap at top ────────────────────────────────────────────
// Arc from ~15° to ~345° leaves a deliberate 30° opening at the top.
// More architectural than a closed circle — shows restraint and confidence.
// Bold stroke.
export function ConceptD({ size = 120, variant = "dark" }: CP) {
  const p = pt(variant);
  const r = 42, cx = 50, cy = 50;
  const toRad = (d: number) => (d - 90) * Math.PI / 180;
  const gap = 22; // degrees of opening
  const sx = cx + r * Math.cos(toRad(gap));
  const sy = cy + r * Math.sin(toRad(gap));
  const ex = cx + r * Math.cos(toRad(360 - gap));
  const ey = cy + r * Math.sin(toRad(360 - gap));
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d={`M ${sx} ${sy} A ${r} ${r} 0 1 1 ${ex} ${ey}`}
        stroke={p} strokeWidth="5.5" strokeLinecap="round" fill="none"
      />
      <text
        x="50" y="50"
        textAnchor="middle" dominantBaseline="central"
        fontFamily={MONO} fontSize="26" fontWeight="200"
        letterSpacing="1" fill={p}
      >
        898
      </text>
    </svg>
  );
}

// ─── E: Ring + Crosshair ─────────────────────────────────────────────────────
// Medium ring with four tick marks at compass points extending inward.
// Precision instrument — watch dial meets financial seal.
export function ConceptE({ size = 120, variant = "dark" }: CP) {
  const p = pt(variant);
  const r = 42, cx = 50, cy = 50;
  const tickLen = 9;
  // ticks: top, right, bottom, left — from ring inward
  const ticks = [
    [cx, cy - r, cx, cy - r + tickLen],
    [cx + r, cy, cx + r - tickLen, cy],
    [cx, cy + r, cx, cy + r - tickLen],
    [cx - r, cy, cx - r + tickLen, cy],
  ] as const;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx={cx} cy={cy} r={r} stroke={p} strokeWidth="3.5" />
      {ticks.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={p} strokeWidth="2" strokeLinecap="square" />
      ))}
      <text
        x="50" y="50"
        textAnchor="middle" dominantBaseline="central"
        fontFamily={MONO} fontSize="24" fontWeight="200"
        letterSpacing="1" fill={p}
      >
        898
      </text>
    </svg>
  );
}

// ─── F: Eccentric Duo ────────────────────────────────────────────────────────
// Two circles: one bold & large, one thin & small, offset by a few units.
// The off-centre relationship creates visual energy — movement, asymmetry.
export function ConceptF({ size = 120, variant = "dark" }: CP) {
  const p = pt(variant);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* large bold outer circle, centred */}
      <circle cx="50" cy="50" r="43" stroke={p} strokeWidth="4.5" />
      {/* small thin circle, offset up-left */}
      <circle cx="50" cy="50" r="28" stroke={p} strokeWidth="1" opacity="0.35" />
      <text
        x="50" y="50"
        textAnchor="middle" dominantBaseline="central"
        fontFamily={MONO} fontSize="22" fontWeight="300"
        letterSpacing="0.5" fill={p}
      >
        898
      </text>
    </svg>
  );
}
