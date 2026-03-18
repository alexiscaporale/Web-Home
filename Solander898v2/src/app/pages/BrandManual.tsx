import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, XCircle, Copy, Check } from "lucide-react";
import { Logo, LogoMark } from "../components/Logo";
import { LogoShowcase } from "../components/LogoShowcase";

const MONO = "'JetBrains Mono', monospace";

const PT = "#BBC1CE";   // Platinum accent
const BG = "#080808";
const SURFACE = "#0E0E0E";
const BORDER = "#1E1E1E";
const TEXT = "#E4E4E4";
const MUTED = "#555555";

const sections = ["Brand Story", "Logo", "Colors", "Typography", "Applications", "Voice & Tone"];

const colors = [
  { name: "Obsidian", hex: "#080808", rgb: "8 · 8 · 8", cmyk: "0 · 0 · 0 · 97", role: "Primary BG", bg: "#080808", fg: "#BBC1CE" },
  { name: "Deep", hex: "#181818", rgb: "24 · 24 · 24", cmyk: "0 · 0 · 0 · 91", role: "Surface", bg: "#181818", fg: "#BBC1CE" },
  { name: "Platinum", hex: "#BBC1CE", rgb: "187 · 193 · 206", cmyk: "9 · 6 · 0 · 19", role: "Accent", bg: "#BBC1CE", fg: "#080808" },
  { name: "Ash White", hex: "#E8E8E8", rgb: "232 · 232 · 232", cmyk: "0 · 0 · 0 · 9", role: "Primary Text", bg: "#E8E8E8", fg: "#080808" },
  { name: "Stone", hex: "#555555", rgb: "85 · 85 · 85", cmyk: "0 · 0 · 0 · 67", role: "Secondary Text", bg: "#555555", fg: "#E8E8E8" },
];

const typefaces = [
  {
    name: "JetBrains Mono",
    role: "Display / Headline / Identity",
    use: "Logo wordmark, headings, labels, all brand-critical text, UI",
    weights: ["ExtraLight 200", "Light 300", "Regular 400", "Medium 500", "SemiBold 600"],
    sample: "SOLANDER898 — Capital Preserved",
    style: { fontFamily: MONO, fontWeight: 300, fontSize: 28, letterSpacing: 2 },
  },
  {
    name: "JetBrains Mono Italic",
    role: "Editorial / Quote",
    use: "Pull quotes, callouts, secondary narrative text, captions",
    weights: ["Light Italic 300i", "Regular Italic 400i"],
    sample: "Wealth refined through structure, not sentiment.",
    style: { fontFamily: MONO, fontWeight: 300, fontStyle: "italic", fontSize: 22, letterSpacing: 0 },
  },
  {
    name: "Inter",
    role: "Body / Long-form",
    use: "Body paragraphs, client reports, legal text, footnotes",
    weights: ["Light 300", "Regular 400", "Medium 500"],
    sample: "Our investment philosophy centers on long-term capital preservation and disciplined risk management across market cycles.",
    style: { fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.7 },
  },
];

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
      className="p-1.5 text-[#383838] hover:text-[#BBC1CE] transition-colors"
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
    </button>
  );
}

function SecHead({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-14">
      <p className="text-[#BBC1CE] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: MONO }}>{sub}</p>
      <h2 className="text-4xl md:text-5xl text-[#E4E4E4] mb-5" style={{ fontFamily: MONO, fontWeight: 200, letterSpacing: 1 }}>
        {title}
      </h2>
      <div className="w-8 h-px bg-[#BBC1CE]/40" />
    </div>
  );
}

export function BrandManual() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#080808] min-h-screen" style={{ fontFamily: MONO }}>

      {/* Page header */}
      <div className="border-b border-[#181818] py-20 px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto">
          <p className="text-[#BBC1CE] text-xs tracking-[0.4em] uppercase mb-4">Solander898 — Official</p>
          <h1 className="text-5xl md:text-7xl text-[#E4E4E4] mb-3" style={{ fontWeight: 200, letterSpacing: 1 }}>
            Brand Manual
          </h1>
          <p className="text-[#555] text-xs tracking-[0.2em] uppercase">Version 1.0 · 2026</p>
        </motion.div>
      </div>

      {/* Section nav */}
      <div className="sticky top-16 z-30 bg-[#080808]/95 backdrop-blur border-b border-[#181818]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto no-scrollbar">
            {sections.map((s, i) => (
              <button
                key={s}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 px-5 py-4 text-xs tracking-[0.18em] uppercase border-b-2 transition-all duration-200 ${
                  active === i ? "border-[#BBC1CE] text-[#BBC1CE]" : "border-transparent text-[#444] hover:text-[#E4E4E4]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 py-20"
        >

          {/* ─── BRAND STORY ─── */}
          {active === 0 && (
            <div>
              <SecHead title="Brand Story" sub="Who We Are" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-4">Origin</p>
                  <p className="text-[#555] text-sm leading-loose" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Solander898 was founded with one purpose: to provide institutional-grade investment management to families and organisations that have built capital worth protecting. The name Solander evokes permanence — a vessel of preservation — while 898 encodes our founding principle: symmetry, balance, continuity.
                  </p>
                  <p className="text-[#555] text-sm leading-loose mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    We do not chase markets. We construct frameworks that endure through them.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Mission", text: "To preserve and grow wealth with discipline, foresight, and absolute integrity." },
                    { label: "Vision", text: "To be the most trusted private investment manager for the world's discerning institutions." },
                    { label: "Values", text: "Integrity — Precision — Discretion — Permanence" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-5">
                      <div className="w-px bg-[#BBC1CE]/20 flex-shrink-0" />
                      <div>
                        <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-2">{item.label}</p>
                        <p className="text-[#555] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand personality */}
              <div className="border border-[#181818] bg-[#0A0A0A] p-10">
                <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-8">Brand Personality</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { trait: "Authoritative", not: "Not arrogant" },
                    { trait: "Refined", not: "Not cold" },
                    { trait: "Discreet", not: "Not secretive" },
                    { trait: "Timeless", not: "Not dated" },
                  ].map((p) => (
                    <div key={p.trait} className="border border-[#1E1E1E] p-6 hover:border-[#BBC1CE]/20 transition-colors">
                      <p className="text-[#E4E4E4] text-sm mb-1">{p.trait}</p>
                      <p className="text-[#383838] text-xs">{p.not}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─── LOGO ─── */}
          {active === 1 && (
            <div>
              <SecHead title="Logo System" sub="Visual Identity" />

              {/* ── LOGO OPTIONS SHOWCASE ── */}
              <div className="mb-16">
                <div className="flex items-start gap-6 mb-10">
                  <div className="w-px h-14 bg-[#BBC1CE]/25 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#555] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Six distinct directions are presented below. Click any concept to expand notes and preview across sizes and backgrounds. Reply with your choice — A through F — and it will be rolled out across the entire brand system.
                    </p>
                  </div>
                </div>
                <LogoShowcase />
              </div>

              {/* Current default in use */}
              <div className="border border-[#1A1A1A] p-6 mb-12">
                <p className="text-[#383838] text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: MONO }}>
                  Current site default (circle + 898 mark)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#181818]">
                  <div className="bg-[#080808] flex flex-col items-center justify-center py-12 gap-5">
                    <Logo size="lg" variant="dark" />
                    <p className="text-[#383838] text-xs tracking-widest uppercase">Dark</p>
                  </div>
                  <div className="bg-[#EFEFEF] flex flex-col items-center justify-center py-12 gap-5">
                    <Logo size="md" variant="light" />
                    <p className="text-[#999] text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Light</p>
                  </div>
                  <div className="bg-[#141414] flex flex-col items-center justify-center py-12 gap-5">
                    <LogoMark size={52} variant="dark" />
                    <p className="text-[#444] text-xs tracking-widest uppercase">Mark Only</p>
                  </div>
                </div>
              </div>

              {/* Usage rules */}
              <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-5">Usage Rules</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { text: "Use on dark (#080808 or #181818) backgrounds", ok: true },
                  { text: "Use on light neutral backgrounds (#F0F0F0 or white)", ok: true },
                  { text: "Maintain original proportions at all times", ok: true },
                  { text: "Use the mark-only version below 140px width", ok: true },
                  { text: "Do not add drop shadows, glows, or effects", ok: false },
                  { text: "Do not recolor or add outlines to the mark", ok: false },
                  { text: "Do not place on photographic or patterned backgrounds", ok: false },
                  { text: "Do not alter letter spacing in the wordmark", ok: false },
                ].map((r) => (
                  <div key={r.text} className="flex items-start gap-3 p-4 border border-[#181818]">
                    {r.ok
                      ? <CheckCircle className="w-4 h-4 text-emerald-500/70 flex-shrink-0 mt-0.5" />
                      : <XCircle className="w-4 h-4 text-red-500/60 flex-shrink-0 mt-0.5" />}
                    <span className="text-xs text-[#555]" style={{ fontFamily: "'Inter', sans-serif" }}>{r.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── COLORS ─── */}
          {active === 2 && (
            <div>
              <SecHead title="Color System" sub="Visual Language" />
              <p className="text-[#555] text-sm leading-relaxed max-w-xl mb-14" style={{ fontFamily: "'Inter', sans-serif" }}>
                The Solander898 palette is built on precision and restraint. Five tones — from Obsidian to Ash White — with Platinum as the sole accent. No warmth. No ornament. Pure structure.
              </p>

              {/* Swatches */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-px bg-[#181818] mb-8">
                {colors.map((c) => (
                  <div key={c.hex}>
                    <div className="h-40" style={{ backgroundColor: c.bg }} />
                    <div className="bg-[#0A0A0A] border border-[#181818] p-4">
                      <p className="text-[#E4E4E4] text-xs mb-1">{c.name}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-[#555] text-xs">{c.hex}</p>
                        <CopyBtn text={c.hex} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Spec table */}
              <div className="border border-[#181818] overflow-hidden mb-10">
                <div className="p-5 border-b border-[#181818]">
                  <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase">Specifications</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-[#181818]">
                        {["Color", "HEX", "RGB", "CMYK", "Role"].map((h) => (
                          <th key={h} className="text-left p-4 text-[#383838] tracking-[0.2em] uppercase font-normal">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {colors.map((c) => (
                        <tr key={c.hex} className="border-b border-[#0E0E0E]">
                          <td className="p-4 flex items-center gap-3">
                            <div className="w-3 h-3 border border-[#282828]" style={{ backgroundColor: c.bg }} />
                            <span className="text-[#E4E4E4]">{c.name}</span>
                          </td>
                          <td className="p-4 text-[#555]">{c.hex}</td>
                          <td className="p-4 text-[#555]">{c.rgb}</td>
                          <td className="p-4 text-[#555]">{c.cmyk}</td>
                          <td className="p-4 text-[#555]">{c.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pair examples */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Primary", bg: "#080808", text: "#BBC1CE", desc: "All flagship brand materials" },
                  { label: "Document", bg: "#F0F0F0", text: "#0A0A0A", desc: "Print, letterhead, reports" },
                  { label: "Surface", bg: "#141414", text: "#E4E4E4", desc: "Cards, overlays, secondary" },
                ].map((pair) => (
                  <div key={pair.label} className="border border-[#181818]">
                    <div className="h-20 flex items-center justify-center" style={{ backgroundColor: pair.bg }}>
                      <span className="text-xs tracking-[0.3em] uppercase" style={{ color: pair.text }}>SOLANDER898</span>
                    </div>
                    <div className="p-4">
                      <p className="text-[#E4E4E4] text-xs mb-1">{pair.label}</p>
                      <p className="text-[#444] text-xs">{pair.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TYPOGRAPHY ─── */}
          {active === 3 && (
            <div>
              <SecHead title="Typography" sub="Type System" />

              <div className="space-y-4 mb-14">
                {typefaces.map((tf) => (
                  <div key={tf.name} className="border border-[#181818] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                      <div className="p-8 border-b md:border-b-0 md:border-r border-[#181818]">
                        <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-2">{tf.role}</p>
                        <p className="text-[#E4E4E4] text-sm mb-3">{tf.name}</p>
                        <p className="text-[#444] text-xs mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{tf.use}</p>
                        <div className="space-y-1">
                          {tf.weights.map((w) => (
                            <p key={w} className="text-[#383838] text-xs">{w}</p>
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-3 p-8 flex items-center bg-[#060606]">
                        <p className="text-[#E4E4E4]" style={tf.style as React.CSSProperties}>{tf.sample}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Type scale */}
              <div className="border border-[#181818] p-8 mb-10">
                <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-8">Scale</p>
                <div className="space-y-5">
                  {[
                    { label: "Display", size: "72px", sample: "S898", style: { fontFamily: MONO, fontWeight: 200, fontSize: 56, letterSpacing: 4 } },
                    { label: "H1", size: "48px", sample: "Investment Leadership", style: { fontFamily: MONO, fontWeight: 300, fontSize: 32 } },
                    { label: "H2", size: "32px", sample: "Portfolio Strategy", style: { fontFamily: MONO, fontWeight: 300, fontSize: 22 } },
                    { label: "H3", size: "20px", sample: "Market Analysis Q1 2026", style: { fontFamily: MONO, fontWeight: 400, fontSize: 16 } },
                    { label: "Quote", size: "18px", sample: "Capital preserved through structure, not sentiment.", style: { fontFamily: MONO, fontWeight: 300, fontStyle: "italic", fontSize: 15 } },
                    { label: "Body", size: "14px", sample: "Our investment philosophy prioritises long-term capital preservation.", style: { fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 13 } },
                    { label: "Label", size: "11px", sample: "ASSETS UNDER MANAGEMENT", style: { fontFamily: MONO, fontWeight: 500, fontSize: 10, letterSpacing: 3, textTransform: "uppercase" as const } },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-6 border-b border-[#0E0E0E] pb-5">
                      <div className="w-14 flex-shrink-0">
                        <p className="text-[#BBC1CE] text-xs">{row.label}</p>
                        <p className="text-[#383838] text-xs mt-0.5">{row.size}</p>
                      </div>
                      <p className="text-[#E4E4E4] flex-1 truncate" style={row.style as React.CSSProperties}>{row.sample}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Do", color: "emerald", items: ["Set all brand headings in JetBrains Mono", "Use Light/ExtraLight weight for large display", "Use Inter for body copy above 80 words", "Maintain at minimum 1.6 line-height for body"] },
                  { label: "Avoid", color: "red", items: ["Serif typefaces in any brand context", "Bold weights for headings or brand marks", "More than two typefaces per document", "Mixing JetBrains Mono weights randomly"] },
                ].map((panel) => (
                  <div key={panel.label} className="border border-[#181818] p-7">
                    <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-5">{panel.label}</p>
                    <ul className="space-y-3">
                      {panel.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-xs text-[#555]" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {panel.color === "emerald"
                            ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500/60 flex-shrink-0 mt-0.5" />
                            : <XCircle className="w-3.5 h-3.5 text-red-500/50 flex-shrink-0 mt-0.5" />}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── APPLICATIONS ─── */}
          {active === 4 && (
            <div>
              <SecHead title="Applications" sub="Brand in Practice" />

              {/* ── Business Cards ── */}
              <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-5">Business Card · 85 × 55mm</p>
              <div className="flex flex-wrap gap-6 mb-4">
                {/* Standard front */}
                <div>
                  <p className="text-[#383838] text-xs uppercase tracking-widest mb-3">Standard · Front</p>
                  <div className="bg-[#0A0A0A] border border-[#1E1E1E] flex flex-col justify-between"
                    style={{ width: 300, aspectRatio: "85/55", padding: "20px 26px" }}>
                    <LogoMark size={20} variant="dark" />
                    <div>
                      <p className="text-[#E4E4E4]" style={{ fontFamily: MONO, fontSize: 12, fontWeight: 300 }}>James Harrington</p>
                      <p className="text-[#BBC1CE] uppercase mt-1" style={{ fontFamily: MONO, fontSize: 8, letterSpacing: 1.5 }}>Managing Director</p>
                    </div>
                  </div>
                </div>

                {/* Standard back */}
                <div>
                  <p className="text-[#383838] text-xs uppercase tracking-widest mb-3">Standard · Back</p>
                  <div className="bg-[#0D0D0D] border border-[#1E1E1E] flex items-center"
                    style={{ width: 300, aspectRatio: "85/55", padding: "20px 26px" }}>
                    <div style={{ borderLeft: "1px solid rgba(187,193,206,0.18)", paddingLeft: 16 }}>
                      {["+44 20 7123 4567", "j.harrington@solander898.com", "solander898.com"].map((t) => (
                        <p key={t} style={{ fontFamily: MONO, color: "#555", fontSize: 9, lineHeight: 2 }}>{t}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Partner front */}
                <div>
                  <p className="text-[#383838] text-xs uppercase tracking-widest mb-3">Partner · Front</p>
                  <div
                    className="flex flex-col justify-between"
                    style={{ width: 300, aspectRatio: "85/55", padding: "20px 26px",
                      background: "linear-gradient(135deg,#111 0%,#0C0C0C 100%)",
                      border: "1px solid rgba(187,193,206,0.2)" }}
                  >
                    <div className="flex items-center gap-3">
                      <LogoMark size={18} variant="dark" />
                      <div style={{ width: 1, height: 12, background: "rgba(187,193,206,0.2)" }} />
                      <p style={{ fontFamily: MONO, color: "#333", fontSize: 7, letterSpacing: 2 }} className="uppercase">Investment Management</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: MONO, color: "#BBC1CE", fontSize: 12, fontWeight: 300 }}>James Harrington</p>
                      <p className="uppercase mt-1" style={{ fontFamily: MONO, color: "#555", fontSize: 8, letterSpacing: 1.5 }}>Managing Director · Founder</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Letterhead ── */}
              <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-5 mt-14">Letterhead · A4</p>
              <div className="max-w-xl mb-14 bg-white" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                {/* Header */}
                <div style={{ background: "#080808", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Logo size="sm" variant="dark" />
                  <p style={{ fontFamily: MONO, color: "#383838", fontSize: 9 }}>solander898.com</p>
                </div>
                <div style={{ height: 1, background: "linear-gradient(90deg, #BBC1CE, #383838)" }} />
                {/* Body */}
                <div style={{ padding: "32px 40px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28 }}>
                    <div>
                      <p style={{ fontFamily: MONO, color: "#0A0A0A", fontSize: 10 }}>Mr. Edward Ashford</p>
                      <p style={{ fontFamily: MONO, color: "#888", fontSize: 10, marginTop: 2 }}>The Ashford Family Office</p>
                    </div>
                    <p style={{ fontFamily: MONO, color: "#AAA", fontSize: 10 }}>3 March 2026</p>
                  </div>
                  <p style={{ fontFamily: MONO, color: "#BBC1CE", fontSize: 9, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
                    Re: Q1 2026 Portfolio Review
                  </p>
                  <div className="space-y-2.5">
                    {[100, 94, 87, 100, 78, 69, 100, 88, 60].map((w, i) => (
                      <div key={i} style={{ height: 6, background: "#F0F0F0", borderRadius: 2, width: `${w}%` }} />
                    ))}
                  </div>
                  <div style={{ marginTop: 28 }}>
                    <p style={{ fontFamily: MONO, color: "#0A0A0A", fontSize: 10, marginBottom: 16 }}>Yours sincerely,</p>
                    <p style={{ fontFamily: MONO, color: "#0A0A0A", fontSize: 17, fontWeight: 200, fontStyle: "italic", marginBottom: 4 }}>James Harrington</p>
                    <p style={{ fontFamily: MONO, color: "#BBC1CE", fontSize: 9, letterSpacing: 1 }}>Managing Director · SOLANDER898</p>
                  </div>
                </div>
                {/* Footer */}
                <div style={{ borderTop: "1px solid #F0F0F0", padding: "10px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ fontFamily: MONO, color: "#CCC", fontSize: 8 }}>Registered in England No. 12345678 · FCA Authorised</p>
                  <LogoMark size={14} variant="light" />
                </div>
              </div>

              {/* ── Email signature ── */}
              <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-5 mt-14">Email Signature</p>
              <div className="max-w-md mb-14">
                <div style={{ background: "#F8F8F8", border: "1px solid #E8E8E8", padding: "20px 24px" }}>
                  <div className="flex items-start gap-5">
                    <LogoMark size={34} variant="light" />
                    <div style={{ borderLeft: "1px solid rgba(187,193,206,0.4)", paddingLeft: 18 }}>
                      <p style={{ fontFamily: MONO, color: "#0A0A0A", fontSize: 12, fontWeight: 400, marginBottom: 2 }}>James Harrington</p>
                      <p style={{ fontFamily: MONO, color: "#BBC1CE", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>Managing Director · SOLANDER898</p>
                      {["+44 20 7123 4567", "j.harrington@solander898.com", "solander898.com"].map((t) => (
                        <p key={t} style={{ fontFamily: MONO, color: "#888", fontSize: 10, lineHeight: 1.9 }}>{t}</p>
                      ))}
                      <p style={{ fontFamily: "'Inter', sans-serif", color: "#CCC", fontSize: 9, marginTop: 10, lineHeight: 1.6, maxWidth: 260 }}>
                        This message is confidential and intended solely for the named recipient.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Digital placeholders ── */}
              <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-5 mt-14">Digital Assets</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#181818]">
                {[
                  { label: "Favicon", size: "32×32px",    bg: "#080808", markSize: 22 },
                  { label: "App Icon", size: "512×512px", bg: "#0D0D0D", markSize: 30 },
                  { label: "OG Image", size: "1200×630px",bg: "#111",    markSize: 32 },
                  { label: "Email Header", size: "600×80px", bg: "#080808", markSize: 26 },
                ].map((d) => (
                  <div key={d.label} className="bg-[#080808]">
                    <div className="h-20 flex items-center justify-center" style={{ background: d.bg }}>
                      <LogoMark size={d.markSize} variant="dark" />
                    </div>
                    <div className="p-4">
                      <p className="text-[#E4E4E4] text-xs mb-1">{d.label}</p>
                      <p className="text-[#444] text-xs">{d.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── VOICE & TONE ─── */}
          {active === 5 && (
            <div>
              <SecHead title="Voice & Tone" sub="Communication" />
              <p className="text-[#555] text-sm leading-relaxed max-w-xl mb-14" style={{ fontFamily: "'Inter', sans-serif" }}>
                Solander898 speaks with the conviction of a firm that has seen markets come and go. Our language is precise, unhurried, and free of superlatives. Every word is chosen deliberately.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
                {[
                  { title: "Authoritative", desc: "Speak with conviction. Avoid hedging language.", do: "We manage capital with precision and discipline.", dont: "We try to manage capital as best we can." },
                  { title: "Refined", desc: "Every word is chosen deliberately. No filler, no jargon.", do: "Solander898 provides exclusive access to private markets.", dont: "We offer amazing, world-class investment solutions!" },
                  { title: "Discreet", desc: "Our results speak through reputation, not advertisement.", do: "Our clients include significant family offices globally.", dont: "We work with billionaires and the ultra-wealthy elite!" },
                  { title: "Timeless", desc: "Write as if the copy will be read in 10 years.", do: "Enduring value through disciplined capital allocation.", dont: "Crushing it with next-gen synergies and disruption." },
                ].map((p) => (
                  <div key={p.title} className="border border-[#181818] p-8">
                    <p className="text-[#E4E4E4] text-sm mb-2">{p.title}</p>
                    <p className="text-[#444] text-xs mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>{p.desc}</p>
                    <div className="space-y-3">
                      <div className="flex gap-3 bg-[#0A0A0A] border border-emerald-900/20 p-3">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500/60 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-[#555] italic" style={{ fontFamily: "'Inter', sans-serif" }}>"{p.do}"</p>
                      </div>
                      <div className="flex gap-3 bg-[#0A0A0A] border border-red-900/20 p-3">
                        <XCircle className="w-3.5 h-3.5 text-red-500/50 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-[#555] italic" style={{ fontFamily: "'Inter', sans-serif" }}>"{p.dont}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Word bank */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-[#181818] p-7">
                  <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-5">Preferred</p>
                  <div className="flex flex-wrap gap-2">
                    {["preserve", "steward", "discipline", "integrity", "enduring", "precision", "discretion", "legacy", "curate", "allocate", "structure", "considered"].map((w) => (
                      <span key={w} className="px-3 py-1 border border-[#1E1E1E] text-[#555] text-xs">{w}</span>
                    ))}
                  </div>
                </div>
                <div className="border border-[#181818] p-7">
                  <p className="text-[#555] text-xs tracking-[0.2em] uppercase mb-5">Avoid</p>
                  <div className="flex flex-wrap gap-2">
                    {["amazing", "cutting-edge", "disrupting", "synergy", "crushing", "gamechanger", "supercharge", "leverage", "pivot", "innovative", "dynamic", "unlock"].map((w) => (
                      <span key={w} className="px-3 py-1 border border-[#181818] text-[#333] text-xs line-through decoration-[#444]">{w}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
}