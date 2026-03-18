import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ConceptA, ConceptB, ConceptC,
  ConceptD, ConceptE, ConceptF,
} from "./Logo";

type Variant = "light" | "dark";
const MONO = "'JetBrains Mono', monospace";

interface Concept {
  id: string;
  label: string;
  tag: string;
  desc: string;
  notes: string[];
  Component: React.ComponentType<{ size?: number; variant?: Variant }>;
}

const concepts: Concept[] = [
  {
    id: "A",
    label: "Bold Ring",
    tag: "Strong",
    desc: "Single heavy stroke circle — one confident, unambiguous boundary.",
    notes: [
      "Stroke weight ~7px/100u — prints sharply at any scale",
      "High contrast between thick ring and light numeral",
      "Most assertive presence — works well as stamp or emboss",
    ],
    Component: ConceptA,
  },
  {
    id: "B",
    label: "Double Ring",
    tag: "Layered",
    desc: "Hairline outer field + bold inner ring — two-layer depth.",
    notes: [
      "Outer ring expands presence without visual weight",
      "Bold inner ring acts as the true brand boundary",
      "Reads well on letterhead and premium paper",
    ],
    Component: ConceptB,
  },
  {
    id: "C",
    label: "Segmented",
    tag: "Precision",
    desc: "Four arcs with gaps at compass points — gauge, dial, or seal.",
    notes: [
      "Negative gaps at 12/3/6/9 o'clock — deliberate and structural",
      "Evokes precision instruments: watches, scientific equipment",
      "Bold arc strokes scale identically to Concept A",
    ],
    Component: ConceptC,
  },
  {
    id: "D",
    label: "Open Arc",
    tag: "Editorial",
    desc: "330° arc — open at top, bold stroke, architectural confidence.",
    notes: [
      "Deliberate incompleteness signals restraint and confidence",
      "Unique in investment management — highly recognisable",
      "Gap at top draws the eye inward toward 898",
    ],
    Component: ConceptD,
  },
  {
    id: "E",
    label: "Dial",
    tag: "Structural",
    desc: "Medium ring with inward tick marks at compass points.",
    notes: [
      "Precision instrument aesthetic — watch dial meets financial seal",
      "Ticks add internal geometry without complexity",
      "Most technical-feeling of the six — quant finance tone",
    ],
    Component: ConceptE,
  },
  {
    id: "F",
    label: "Eccentric Duo",
    tag: "Dynamic",
    desc: "Bold outer ring + thin inner circle — concentric, layered weight.",
    notes: [
      "Two-layer depth: bold presence with a quiet inner register",
      "Inner thin circle acts as a halo around 898",
      "More dimensional than a single ring, less literal than a seal",
    ],
    Component: ConceptF,
  },
];

// Inline wordmark — shows how each mark pairs with "SOLANDER898"
function InlineWordmark({
  Component,
  variant,
}: {
  Component: React.ComponentType<{ size?: number; variant?: Variant }>;
  variant: Variant;
}) {
  const p = variant === "light" ? "#2E3238" : "#BBC1CE";
  const t = variant === "light" ? "#0A0A0A" : "#E4E4E4";
  return (
    <div
      className="flex items-center gap-3"
    >
      <Component size={38} variant={variant} />
      <div style={{ fontFamily: MONO, lineHeight: 1 }}>
        <span style={{ fontSize: 12, letterSpacing: 3, fontWeight: 400, color: t }}>SOLANDER</span>
        <span style={{ fontSize: 12, letterSpacing: 3, fontWeight: 300, color: p }}>898</span>
      </div>
    </div>
  );
}

export function LogoShowcase() {
  const [selected, setSelected] = useState<string | null>(null);
  const [bgMode, setBgMode] = useState<"dark" | "light">("dark");
  const variant: Variant = bgMode;

  const bg0 = bgMode === "dark" ? "#080808" : "#F0F0F0";
  const bg1 = bgMode === "dark" ? "#0D0D0D" : "#FFFFFF";
  const border = bgMode === "dark" ? "#1A1A1A" : "#DCDCDC";
  const textPrimary = bgMode === "dark" ? "#E4E4E4" : "#0A0A0A";
  const textMuted = bgMode === "dark" ? "#555" : "#888";
  const textAccent = bgMode === "dark" ? "#BBC1CE" : "#3A3E48";
  const tagBorder = bgMode === "dark" ? "#222" : "#CCC";

  return (
    <div>
      {/* Controls */}
      <div className="flex items-center justify-between mb-8">
        <p
          style={{ fontFamily: MONO, color: textMuted, fontSize: 10, letterSpacing: 3 }}
          className="uppercase"
        >
          6 circle-family directions
        </p>
        <div
          className="flex items-center gap-px p-px"
          style={{ border: `1px solid ${border}` }}
        >
          {(["dark", "light"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setBgMode(m)}
              className="px-4 py-1.5 text-xs uppercase tracking-widest transition-all"
              style={{
                fontFamily: MONO,
                fontSize: 9,
                letterSpacing: 2,
                background: bgMode === m ? "#BBC1CE" : "transparent",
                color: bgMode === m ? "#080808" : textMuted,
              }}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Concept grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-px mb-2"
        style={{ background: border }}
      >
        {concepts.map((c, i) => {
          const Comp = c.Component;
          const isSelected = selected === c.id;
          return (
            <motion.button
              key={c.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setSelected(isSelected ? null : c.id)}
              className="relative text-left transition-all duration-150"
              style={{
                background: bg1,
                outline: isSelected ? `1.5px solid #BBC1CE` : "none",
                outlineOffset: -1,
                zIndex: isSelected ? 10 : 1,
              }}
            >
              {/* Header row */}
              <div
                className="flex items-center justify-between px-5 pt-4 pb-0"
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 9,
                    letterSpacing: 2,
                    color: isSelected ? "#BBC1CE" : textMuted,
                    textTransform: "uppercase" as const,
                  }}
                >
                  {c.id} — {c.label}
                </span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 8,
                    letterSpacing: 1.5,
                    color: textMuted,
                    border: `1px solid ${tagBorder}`,
                    padding: "1px 6px",
                    textTransform: "uppercase" as const,
                  }}
                >
                  {c.tag}
                </span>
              </div>

              {/* Mark */}
              <div
                className="flex items-center justify-center py-8"
                style={{ background: bg0 }}
              >
                <Comp size={92} variant={variant} />
              </div>

              {/* Desc + expanded notes */}
              <div
                className="px-5 py-4"
                style={{ borderTop: `1px solid ${border}` }}
              >
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    color: textMuted,
                    lineHeight: 1.6,
                  }}
                >
                  {c.desc}
                </p>

                <AnimatePresence>
                  {isSelected && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 space-y-1.5 overflow-hidden"
                    >
                      {c.notes.map((n) => (
                        <li
                          key={n}
                          className="flex items-start gap-2"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 11,
                            color: textMuted,
                          }}
                        >
                          <span style={{ color: textAccent }}>—</span>
                          {n}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <div
                  className="mt-3"
                  style={{
                    fontFamily: MONO,
                    fontSize: 8,
                    letterSpacing: 1.5,
                    color: textAccent,
                    textTransform: "uppercase" as const,
                    opacity: isSelected ? 1 : 0,
                    transition: "opacity 0.2s",
                  }}
                >
                  ▲ Selected
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Detail panel for selected */}
      <AnimatePresence>
        {selected && (() => {
          const concept = concepts.find((c) => c.id === selected)!;
          const Comp = concept.Component;
          return (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              style={{ border: `1px solid ${border}`, marginTop: 2 }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-6 py-3"
                style={{ borderBottom: `1px solid ${border}` }}
              >
                <p
                  style={{
                    fontFamily: MONO, fontSize: 10, letterSpacing: 2,
                    color: "#BBC1CE", textTransform: "uppercase" as const,
                  }}
                >
                  {concept.id} — {concept.label} · Size scale
                </p>
                <p
                  style={{
                    fontFamily: MONO, fontSize: 9, color: "#444",
                    textTransform: "uppercase" as const, letterSpacing: 1.5,
                  }}
                >
                  Reply with your choice →
                </p>
              </div>

              {/* Sizes on dark + light */}
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ background: border }}>
                {/* dark */}
                <div
                  className="flex items-end gap-8 px-8 py-8 flex-wrap"
                  style={{ background: "#080808" }}
                >
                  {[36, 52, 76, 100].map((sz) => (
                    <div key={sz} className="flex flex-col items-center gap-3">
                      <Comp size={sz} variant="dark" />
                      <span style={{ fontFamily: MONO, fontSize: 8, color: "#383838", letterSpacing: 1 }}>
                        {sz}px
                      </span>
                    </div>
                  ))}
                </div>
                {/* light */}
                <div
                  className="flex items-end gap-8 px-8 py-8 flex-wrap"
                  style={{ background: "#F0F0F0", borderLeft: `1px solid ${border}` }}
                >
                  {[36, 52, 76, 100].map((sz) => (
                    <div key={sz} className="flex flex-col items-center gap-3">
                      <Comp size={sz} variant="light" />
                      <span style={{ fontFamily: MONO, fontSize: 8, color: "#AAA", letterSpacing: 1 }}>
                        {sz}px
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wordmark pair */}
              <div
                className="grid grid-cols-1 md:grid-cols-2"
                style={{ borderTop: `1px solid ${border}`, background: border }}
              >
                <div
                  className="px-8 py-6 flex items-center gap-10"
                  style={{ background: "#080808" }}
                >
                  <InlineWordmark Component={Comp} variant="dark" />
                  <Comp size={28} variant="dark" />
                </div>
                <div
                  className="px-8 py-6 flex items-center gap-10"
                  style={{ background: "#F0F0F0", borderLeft: `1px solid ${border}` }}
                >
                  <InlineWordmark Component={Comp} variant="light" />
                  <Comp size={28} variant="light" />
                </div>
              </div>

              {/* Application mockup strip */}
              <div
                className="px-6 py-3"
                style={{ borderTop: `1px solid ${border}`, background: "#0A0A0A" }}
              >
                <p
                  style={{
                    fontFamily: MONO, fontSize: 8, color: "#333",
                    letterSpacing: 2, textTransform: "uppercase" as const,
                  }}
                >
                  Nav · Business card · Stamp
                </p>
              </div>
              <div
                className="grid grid-cols-3"
                style={{ background: border }}
              >
                {/* Nav context */}
                <div
                  className="flex items-center px-6 py-5"
                  style={{ background: "#080808", borderRight: `1px solid ${border}` }}
                >
                  <InlineWordmark Component={Comp} variant="dark" />
                </div>
                {/* Business card corner */}
                <div
                  className="px-6 py-5 flex items-end"
                  style={{ background: "#0D0D0D", borderRight: `1px solid ${border}` }}
                >
                  <Comp size={32} variant="dark" />
                </div>
                {/* Stamp */}
                <div
                  className="flex items-center justify-center py-5"
                  style={{ background: "#F0F0F0" }}
                >
                  <Comp size={52} variant="light" />
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* Decision footer */}
      <div
        className="flex items-center justify-between px-6 py-4 mt-2"
        style={{ border: `1px solid #1A1A1A` }}
      >
        <p
          style={{
            fontFamily: MONO, fontSize: 9, color: "#383838",
            letterSpacing: 1.5, textTransform: "uppercase" as const,
          }}
        >
          {selected
            ? `Concept ${selected} — ${concepts.find((c) => c.id === selected)?.label} selected`
            : "Click any concept to expand"}
        </p>
        <p
          style={{
            fontFamily: MONO, fontSize: 9, color: selected ? "#BBC1CE" : "#282828",
            letterSpacing: 1.5, textTransform: "uppercase" as const,
          }}
        >
          A · B · C · D · E · F
        </p>
      </div>
    </div>
  );
}
