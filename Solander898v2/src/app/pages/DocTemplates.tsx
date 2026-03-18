import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText, Download, BarChart2, Mail,
  Briefcase, CreditCard, FileCheck, ArrowLeft,
} from "lucide-react";
import { Logo, LogoMark } from "../components/Logo";

const MONO = "'JetBrains Mono', monospace";
const SANS = "'Inter', sans-serif";

type TemplateId = "report" | "letter" | "factsheet" | "memo" | "proposal" | "card";

const templates = [
  { id: "report"    as TemplateId, icon: BarChart2, name: "Investment Report",  desc: "Quarterly portfolio review with performance data and market commentary", tag: "Quarterly"    },
  { id: "letter"    as TemplateId, icon: Mail,      name: "Client Letter",      desc: "Formal correspondence for institutional and family office clients",      tag: "Client Comms" },
  { id: "factsheet" as TemplateId, icon: FileText,  name: "Fund Fact Sheet",    desc: "Single-page fund overview with key metrics and allocation data",          tag: "Marketing"    },
  { id: "memo"      as TemplateId, icon: FileCheck, name: "Investment Memo",    desc: "Internal investment committee memorandum format",                          tag: "Internal"     },
  { id: "proposal"  as TemplateId, icon: Briefcase, name: "Mandate Proposal",   desc: "New client strategy proposal and onboarding document",                    tag: "Business Dev" },
  { id: "card"      as TemplateId, icon: CreditCard,name: "Business Card",      desc: "Standard and senior partner card variants",                               tag: "Identity"     },
];

// ─── Shared sub-components ───────────────────────────────────────────────────

function MiniBar({ label, pct, val }: { label: string; pct: number; val: string }) {
  return (
    <div className="py-1.5">
      <div className="flex justify-between mb-1" style={{ fontFamily: MONO, fontSize: 10 }}>
        <span style={{ color: "#777" }}>{label}</span>
        <span style={{ color: "#111" }}>{val}</span>
      </div>
      <div style={{ height: 2, background: "#E8E8E8", borderRadius: 1 }}>
        <div style={{ width: `${pct}%`, height: 2, background: "#0A0A0A", borderRadius: 1 }} />
      </div>
    </div>
  );
}

function KPI({ label, value, delta, accent = false }: { label: string; value: string; delta: string; accent?: boolean }) {
  return (
    <div style={{ borderRight: "1px solid #F0F0F0", padding: "20px 24px" }}>
      <p style={{ fontFamily: MONO, fontSize: 9, color: "#AAA", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 6 }}>{label}</p>
      <p style={{ fontFamily: MONO, fontSize: 22, fontWeight: 200, color: "#0A0A0A", lineHeight: 1 }}>{value}</p>
      <p style={{ fontFamily: MONO, fontSize: 9, color: accent ? "#BBC1CE" : "#AAA", marginTop: 4 }}>{delta}</p>
    </div>
  );
}

// ─── INVESTMENT REPORT ───────────────────────────────────────────────────────
function ReportTemplate() {
  return (
    <div style={{ background: "#fff", fontFamily: MONO }}>
      {/* Top bar — obsidian */}
      <div style={{ background: "#080808", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo size="sm" variant="dark" />
        <div style={{ textAlign: "right" }}>
          <p style={{ color: "#BBC1CE", fontSize: 9, letterSpacing: 3, textTransform: "uppercase" as const }}>Portfolio Review</p>
          <p style={{ color: "#383838", fontSize: 9, marginTop: 2 }}>Q1 2026 · Confidential</p>
        </div>
      </div>
      <div style={{ height: 1, background: "linear-gradient(90deg, #BBC1CE 0%, #555 100%)" }} />

      {/* Client + date */}
      <div style={{ padding: "28px 40px 20px", borderBottom: "1px solid #F0F0F0", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <p style={{ fontSize: 9, color: "#BBB", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 6 }}>Prepared for</p>
          <p style={{ fontSize: 22, fontWeight: 200, color: "#0A0A0A" }}>The Ashford Family Office</p>
        </div>
        <p style={{ fontSize: 9, color: "#BBB" }}>January – March 2026</p>
      </div>

      {/* KPI strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: "1px solid #F0F0F0" }}>
        <KPI label="Total AUM"      value="$184.2M" delta="Period close"       accent />
        <KPI label="Net Return YTD" value="7.4%"    delta="+110bps vs. BM"    accent />
        <KPI label="Volatility"     value="6.2%"    delta="σ — low regime"          />
        <KPI label="Sharpe Ratio"   value="1.84"    delta="Rolling 12-month"        />
      </div>

      {/* Body */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", borderBottom: "1px solid #F0F0F0" }}>
        {/* Left — commentary + allocation */}
        <div style={{ padding: "28px 32px", borderRight: "1px solid #F0F0F0" }}>
          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 14 }}>Executive Summary</p>
          <p style={{ fontFamily: SANS, fontSize: 12, color: "#444", lineHeight: 1.75, marginBottom: 10 }}>
            Q1 2026 presented a mixed environment shaped by central bank policy recalibration and emerging market volatility. The Ashford portfolio delivered a net return of 7.4% against a benchmark of 6.3%, with strong contributions from our overweight in investment-grade credit and private infrastructure.
          </p>
          <p style={{ fontFamily: SANS, fontSize: 12, color: "#444", lineHeight: 1.75 }}>
            Equity allocation was held at a disciplined 28%, with defensive positioning providing material downside protection during February's volatility episode. We maintain conviction in our strategic framework heading into Q2.
          </p>

          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginTop: 24, marginBottom: 12 }}>Strategic Allocation</p>
          <MiniBar label="Fixed Income"    pct={38} val="38%" />
          <MiniBar label="Global Equities" pct={28} val="28%" />
          <MiniBar label="Private Markets" pct={22} val="22%" />
          <MiniBar label="Alternatives"    pct={8}  val="8%"  />
          <MiniBar label="Cash & Equiv."   pct={4}  val="4%"  />
        </div>

        {/* Right — holdings + outlook */}
        <div style={{ padding: "28px 24px" }}>
          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 14 }}>Top Holdings</p>
          {[
            ["US Treasury 2031",  "12.4%"],
            ["Global Infra. Fund","8.1%" ],
            ["DM Equity Basket",  "11.2%"],
            ["IG Credit Pool",    "10.6%"],
            ["Private Equity",    "7.4%" ],
          ].map(([n, w]) => (
            <div key={n} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F8F8F8", padding: "8px 0" }}>
              <span style={{ fontFamily: SANS, fontSize: 11, color: "#444" }}>{n}</span>
              <span style={{ fontSize: 10, color: "#BBB" }}>{w}</span>
            </div>
          ))}

          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginTop: 22, marginBottom: 10 }}>Q2 Outlook</p>
          <p style={{ fontFamily: SANS, fontSize: 11, color: "#777", lineHeight: 1.7 }}>
            Cautiously constructive. Maintaining duration preference in fixed income with selective EM credit initiation.
          </p>

          {/* Risk metrics mini-grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, marginTop: 20, background: "#F5F5F5" }}>
            {[["Max DD", "−4.1%"], ["Beta", "0.52"], ["VaR 95", "0.8%"], ["Corr.", "0.41"]].map(([l, v]) => (
              <div key={l} style={{ background: "#fff", padding: "10px 12px" }}>
                <p style={{ fontSize: 8, color: "#BBB", letterSpacing: 1.5, textTransform: "uppercase" as const }}>{l}</p>
                <p style={{ fontSize: 16, fontWeight: 200, color: "#0A0A0A" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#080808", padding: "10px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ color: "#333", fontSize: 9 }}>© 2026 Solander898 Ltd · Strictly Confidential · For addressee only</p>
        <p style={{ color: "#BBC1CE", fontSize: 9 }}>1 / 12</p>
      </div>
    </div>
  );
}

// ─── CLIENT LETTER ───────────────────────────────────────────────────────────
function LetterTemplate() {
  return (
    <div style={{ background: "#fff", fontFamily: MONO }}>
      {/* Letterhead */}
      <div style={{ padding: "36px 48px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 24 }}>
          <Logo size="sm" variant="light" />
          <div style={{ textAlign: "right" }}>
            {["1 Mayfair Place", "London W1J 8AJ", "+44 20 7123 4567"].map((t) => (
              <p key={t} style={{ fontSize: 10, color: "#AAA", lineHeight: 1.8 }}>{t}</p>
            ))}
          </div>
        </div>
        {/* Two-tone rule */}
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, height: 2, background: "#0A0A0A" }} />
          <div style={{ flex: 1, height: 2, background: "#BBC1CE" }} />
        </div>
      </div>

      <div style={{ padding: "32px 48px" }}>
        {/* Recipient + date */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 11, color: "#0A0A0A" }}>Mr. Edward Ashford</p>
            <p style={{ fontSize: 10, color: "#888", marginTop: 2 }}>Chief Investment Officer</p>
            <p style={{ fontSize: 10, color: "#888" }}>The Ashford Family Office</p>
          </div>
          <p style={{ fontSize: 10, color: "#AAA" }}>3 March 2026</p>
        </div>

        {/* Reference */}
        <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 22, paddingBottom: 10, borderBottom: "1px solid #F5F5F5" }}>
          Re: Q1 2026 Portfolio Review — Strategic Outlook
        </p>

        <p style={{ fontSize: 11, color: "#0A0A0A", marginBottom: 18 }}>Dear Mr. Ashford,</p>

        {[
          "I write to you following the close of Q1 2026 with a review of your portfolio performance and strategic positioning for the period ahead.",
          "The period was characterised by notable monetary policy shifts across developed markets. We are pleased to report that the Ashford portfolio delivered a net return of 7.4%, representing outperformance of 110 basis points relative to the agreed benchmark composite.",
          "Our investment committee has reviewed the macroeconomic landscape and determined that a continuation of the current strategic allocation — with minor tactical adjustments to fixed income duration — represents the most prudent course of action.",
          "I would welcome the opportunity to discuss this at your convenience.",
        ].map((t, i) => (
          <p key={i} style={{ fontFamily: SANS, fontSize: 12, color: "#444", lineHeight: 1.8, marginBottom: 14 }}>{t}</p>
        ))}

        <div style={{ marginTop: 32 }}>
          <p style={{ fontSize: 11, color: "#0A0A0A" }}>Yours sincerely,</p>
          <p style={{ fontSize: 20, fontWeight: 200, color: "#0A0A0A", margin: "20px 0 4px", fontStyle: "italic" }}>James Harrington</p>
          <p style={{ fontSize: 10, color: "#0A0A0A" }}>James Harrington</p>
          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 1 }}>Managing Director · SOLANDER898</p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #F0F0F0", padding: "12px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontFamily: SANS, fontSize: 9, color: "#CCC" }}>Solander898 Ltd · Registered in England No. 12345678 · FCA Authorised & Regulated</p>
        <LogoMark size={16} variant="light" />
      </div>
    </div>
  );
}

// ─── FUND FACT SHEET ─────────────────────────────────────────────────────────
function FactsheetTemplate() {
  return (
    <div style={{ background: "#fff", fontFamily: MONO }}>
      {/* Header — two columns */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", background: "#080808" }}>
        <div style={{ padding: "28px 40px" }}>
          <p style={{ color: "#555", fontSize: 9, letterSpacing: 3, textTransform: "uppercase" as const, marginBottom: 8 }}>Fund Fact Sheet · Q1 2026</p>
          <p style={{ color: "#E4E4E4", fontSize: 24, fontWeight: 200, lineHeight: 1.3 }}>Solander Global<br />Preservation Fund</p>
          <p style={{ color: "#BBC1CE", fontSize: 9, marginTop: 10, letterSpacing: 1 }}>ISIN: KY12345678 · Class A USD</p>
        </div>
        <div style={{ padding: "28px 40px 28px 0", display: "flex", alignItems: "center" }}>
          <LogoMark size={52} variant="dark" />
        </div>
      </div>
      <div style={{ height: 1, background: "linear-gradient(90deg, #BBC1CE, #383838)" }} />

      {/* Key data */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderBottom: "1px solid #F0F0F0" }}>
        {[
          ["NAV", "$284.60"],
          ["AUM", "$1.24B"],
          ["Inception", "Jan 2002"],
          ["Mgmt Fee", "1.25% p.a."],
          ["Perf. Fee", "15% over HWM"],
          ["Domicile", "Cayman Islands"],
        ].map(([l, v], i) => (
          <div key={l} style={{
            padding: "16px 24px",
            borderRight: i % 3 < 2 ? "1px solid #F0F0F0" : "none",
            borderBottom: i < 3 ? "1px solid #F0F0F0" : "none",
          }}>
            <p style={{ fontSize: 9, color: "#AAA", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 4 }}>{l}</p>
            <p style={{ fontSize: 18, fontWeight: 200, color: "#0A0A0A" }}>{v}</p>
          </div>
        ))}
      </div>

      {/* Main body */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* Left */}
        <div style={{ padding: "24px 32px", borderRight: "1px solid #F0F0F0" }}>
          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 10 }}>Fund Objective</p>
          <p style={{ fontFamily: SANS, fontSize: 11, color: "#666", lineHeight: 1.7, marginBottom: 20 }}>
            Superior risk-adjusted returns over a full market cycle through disciplined allocation, with capital preservation as the primary mandate.
          </p>

          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 10 }}>Performance (net of fees)</p>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F5F5F5", paddingBottom: 6, marginBottom: 4 }}>
              {["Period", "Fund", "BM", "±"].map((h) => (
                <span key={h} style={{ fontSize: 8, color: "#BBB", letterSpacing: 1 }}>{h}</span>
              ))}
            </div>
            {[
              ["QTD", "+3.7%", "+2.9%", "+80bps"],
              ["YTD", "+7.4%", "+6.3%", "+110bps"],
              ["1Y",  "+9.2%", "+7.8%", "+140bps"],
              ["3Y ann.", "+9.1%", "+7.4%", "+170bps"],
              ["5Y ann.", "+8.6%", "+6.8%", "+180bps"],
              ["Incept.", "+10.2%","+7.9%", "+230bps"],
            ].map(([p, f, b, d]) => (
              <div key={p} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F8F8F8", padding: "7px 0" }}>
                <span style={{ fontSize: 10, color: "#888", width: 60 }}>{p}</span>
                <span style={{ fontSize: 10, color: "#0A0A0A" }}>{f}</span>
                <span style={{ fontSize: 10, color: "#BBB" }}>{b}</span>
                <span style={{ fontSize: 9, color: "#BBC1CE" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ padding: "24px 28px" }}>
          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 12 }}>Allocation</p>
          <MiniBar label="Fixed Income"    pct={38} val="38%" />
          <MiniBar label="Global Equities" pct={28} val="28%" />
          <MiniBar label="Private Markets" pct={22} val="22%" />
          <MiniBar label="Alternatives"    pct={8}  val="8%"  />
          <MiniBar label="Cash"            pct={4}  val="4%"  />

          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginTop: 20, marginBottom: 10 }}>Risk Metrics</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#F5F5F5" }}>
            {[["Volatility","6.2%"],["Sharpe","1.84"],["Max DD","−4.1%"],["Beta","0.52"]].map(([l, v]) => (
              <div key={l} style={{ background: "#fff", padding: "10px 14px" }}>
                <p style={{ fontSize: 8, color: "#BBB", letterSpacing: 1.5, textTransform: "uppercase" as const }}>{l}</p>
                <p style={{ fontSize: 18, fontWeight: 200, color: "#0A0A0A" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ background: "#080808", padding: "10px 40px", display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontFamily: SANS, color: "#383838", fontSize: 9 }}>Past performance is not indicative of future results. For qualified investors only.</p>
        <p style={{ color: "#BBC1CE", fontSize: 9 }}>solander898.com</p>
      </div>
    </div>
  );
}

// ─── INVESTMENT MEMO ─────────────────────────────────────────────────────────
function MemoTemplate() {
  return (
    <div style={{ background: "#fff", fontFamily: MONO }}>
      {/* Header */}
      <div style={{ padding: "36px 48px 28px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 3, textTransform: "uppercase" as const, marginBottom: 8 }}>Investment Committee</p>
          <p style={{ fontSize: 30, fontWeight: 200, color: "#0A0A0A", letterSpacing: 3 }}>MEMORANDUM</p>
        </div>
        <LogoMark size={40} variant="light" />
      </div>
      <div style={{ height: 2, background: "#0A0A0A", margin: "0 48px" }} />
      <div style={{ height: 1, background: "#BBC1CE", margin: "0 48px", opacity: 0.4 }} />

      {/* Meta */}
      <div style={{ margin: "24px 48px", padding: "20px 24px", background: "#FAFAFA", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 40px" }}>
        {[
          ["To:", "Investment Committee"],
          ["From:", "James Harrington, MD"],
          ["Date:", "3 March 2026"],
          ["Ref:", "IC-2026-Q1-003"],
          ["Subject:", "Q1 2026 Review & Q2 Strategy"],
          ["Classification:", "Strictly Confidential"],
        ].map(([l, v]) => (
          <div key={l} style={{ display: "flex", gap: 16 }}>
            <span style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 1.5, textTransform: "uppercase" as const, width: 90, flexShrink: 0, paddingTop: 2 }}>{l}</span>
            <span style={{ fontSize: 10, color: "#0A0A0A" }}>{v}</span>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div style={{ padding: "8px 48px 36px" }}>
        {[
          { n: "1", title: "Executive Summary", body: "This memorandum presents the Investment Committee with a review of Q1 2026 portfolio performance and recommended strategic positioning for Q2. The committee is requested to review and approve the tactical adjustments set out in Section 4." },
          { n: "2", title: "Performance Attribution", body: "Net performance of 7.4% was achieved against a benchmark of 6.3%, representing 110bps outperformance. Key contributors: investment-grade credit (+42bps), infrastructure (+38bps), and disciplined equity selection (+31bps)." },
          { n: "3", title: "Market Conditions", body: "Q1 2026 was characterised by monetary policy divergence: the Federal Reserve paused its rate cycle while the ECB executed a final 25bps reduction. Geopolitical tensions introduced episodic risk-off sentiment in February, mitigated by our defensive positioning." },
          { n: "4", title: "Recommended Actions", body: "(i) Reduce fixed income duration from 5.8 to 5.2 years. (ii) Increase European IG credit allocation +2%, funded from cash. (iii) Initiate due diligence on Thornfield Private Infrastructure Fund IV." },
        ].map((s, i) => (
          <div key={s.n} style={{ display: "flex", gap: 24, paddingTop: i === 0 ? 0 : 20, borderTop: i === 0 ? "none" : "1px solid #F5F5F5" }}>
            <div style={{ width: 24, flexShrink: 0, paddingTop: 2 }}>
              <span style={{ fontSize: 9, color: "#BBC1CE" }}>{s.n}.</span>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#0A0A0A", marginBottom: 6 }}>{s.title}</p>
              <p style={{ fontFamily: SANS, fontSize: 12, color: "#666", lineHeight: 1.75 }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ borderTop: "2px solid #0A0A0A", padding: "12px 48px", display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: 9, color: "#AAA", letterSpacing: 2, textTransform: "uppercase" as const }}>Strictly Confidential — Investment Committee Use Only</p>
        <p style={{ fontSize: 9, color: "#AAA" }}>IC-2026-Q1-003</p>
      </div>
    </div>
  );
}

// ─── MANDATE PROPOSAL ────────────────────────────────────────────────────────
function ProposalTemplate() {
  return (
    <div style={{ background: "#fff", fontFamily: MONO }}>
      {/* Cover stripe */}
      <div style={{ background: "#080808", padding: "40px 48px 36px", display: "flex", flexDirection: "column" as const, gap: 32 }}>
        <Logo size="sm" variant="dark" />
        <div>
          <p style={{ color: "#555", fontSize: 9, letterSpacing: 3, textTransform: "uppercase" as const, marginBottom: 10 }}>Investment Mandate Proposal</p>
          <p style={{ color: "#E4E4E4", fontSize: 26, fontWeight: 200, lineHeight: 1.4 }}>
            A Bespoke Capital Strategy<br />for The Bellamy Trust
          </p>
          <p style={{ color: "#383838", fontSize: 9, marginTop: 12 }}>Prepared exclusively · March 2026 · Strictly Private</p>
        </div>
      </div>
      <div style={{ height: 1, background: "linear-gradient(90deg, #BBC1CE, #383838)" }} />

      {/* Body */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
        {/* Left */}
        <div style={{ padding: "28px 40px", borderRight: "1px solid #F0F0F0" }}>
          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 10 }}>Our Approach</p>
          <p style={{ fontFamily: SANS, fontSize: 12, color: "#555", lineHeight: 1.8, marginBottom: 18 }}>
            We propose a bespoke mandate structured around the Bellamy Trust's stated objectives: capital preservation over a 10-year horizon, a maximum volatility budget of 8%, and full exclusion of fossil fuel investments throughout the portfolio.
          </p>
          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 10 }}>Strategy Overview</p>
          <p style={{ fontFamily: SANS, fontSize: 12, color: "#555", lineHeight: 1.8, marginBottom: 24 }}>
            The Bellamy Preservation Mandate allocates across four pillars: investment-grade fixed income, ESG-screened global equities, private infrastructure, and an alternatives sleeve providing uncorrelated return generation. Initial capital will be deployed over a disciplined 90-day period.
          </p>

          {/* Timeline */}
          <p style={{ fontSize: 9, color: "#BBC1CE", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 16 }}>Onboarding Timeline</p>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
            {[
              { phase: "Wk 1–2", label: "KYC & Legal" },
              { phase: "Wk 3–4", label: "IPS Sign-off" },
              { phase: "Mo. 2",  label: "Funding"     },
              { phase: "Mo. 3",  label: "Deployment"  },
              { phase: "Mo. 4",  label: "Full Invest." },
            ].map((t, i, arr) => (
              <div key={t.phase} style={{ flex: 1, position: "relative" as const }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#BBC1CE", flexShrink: 0 }} />
                  {i < arr.length - 1 && <div style={{ flex: 1, height: 1, background: "#DDD" }} />}
                </div>
                <div style={{ marginTop: 8 }}>
                  <p style={{ fontSize: 8, color: "#BBC1CE" }}>{t.phase}</p>
                  <p style={{ fontSize: 9, color: "#AAA", marginTop: 2 }}>{t.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — terms */}
        <div style={{ background: "#080808", padding: "28px 28px" }}>
          <p style={{ color: "#BBC1CE", fontSize: 9, letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 16 }}>Proposed Terms</p>
          {[
            ["Minimum Mandate",  "$50M"],
            ["Strategy",         "Preservation"],
            ["Benchmark",        "60/40 Composite"],
            ["Management Fee",   "0.85% p.a."],
            ["Performance Fee",  "10% over HWM"],
            ["Liquidity",        "Quarterly"],
            ["Reporting",        "Monthly"],
            ["Custodian",        "Client-appointed"],
          ].map(([l, v]) => (
            <div key={l} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #111", padding: "9px 0" }}>
              <span style={{ fontSize: 9, color: "#555" }}>{l}</span>
              <span style={{ fontSize: 10, color: "#E4E4E4" }}>{v}</span>
            </div>
          ))}
          <div style={{ marginTop: 24, padding: "14px 16px", border: "1px solid #1E1E1E" }}>
            <p style={{ fontSize: 9, color: "#444", lineHeight: 1.7, fontFamily: SANS }}>
              This proposal is confidential and prepared exclusively for The Bellamy Trust. Not for distribution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── BUSINESS CARD ───────────────────────────────────────────────────────────
function CardTemplate() {
  return (
    <div style={{ background: "#080808", padding: "40px" }}>
      <p style={{ fontFamily: MONO, color: "#BBC1CE", fontSize: 9, letterSpacing: 3, textTransform: "uppercase" as const, marginBottom: 24 }}>
        Standard — 85 × 55mm
      </p>

      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 20, marginBottom: 40 }}>
        {/* Front */}
        <div style={{
          width: 320, aspectRatio: "85/55",
          background: "#0A0A0A", border: "1px solid #1E1E1E",
          padding: "22px 28px",
          display: "flex", flexDirection: "column" as const, justifyContent: "space-between",
        }}>
          <LogoMark size={22} variant="dark" />
          <div>
            <p style={{ fontFamily: MONO, color: "#E4E4E4", fontSize: 12, fontWeight: 300 }}>Sarah Mitchell</p>
            <p style={{ fontFamily: MONO, color: "#BBC1CE", fontSize: 8.5, letterSpacing: 1.5, textTransform: "uppercase" as const, marginTop: 4 }}>Portfolio Manager</p>
          </div>
        </div>

        {/* Back */}
        <div style={{
          width: 320, aspectRatio: "85/55",
          background: "#0D0D0D", border: "1px solid #1E1E1E",
          padding: "22px 28px",
          display: "flex", alignItems: "center",
        }}>
          <div style={{ borderLeft: "1px solid rgba(187,193,206,0.2)", paddingLeft: 16 }}>
            {["+44 20 7123 4568", "s.mitchell@solander898.com", "solander898.com"].map((t) => (
              <p key={t} style={{ fontFamily: MONO, color: "#555", fontSize: 9.5, lineHeight: 2 }}>{t}</p>
            ))}
          </div>
        </div>
      </div>

      <p style={{ fontFamily: MONO, color: "#BBC1CE", fontSize: 9, letterSpacing: 3, textTransform: "uppercase" as const, marginBottom: 24 }}>
        Partner Edition
      </p>

      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 20 }}>
        {/* Front — platinum border variant */}
        <div style={{
          width: 320, aspectRatio: "85/55",
          background: "linear-gradient(135deg,#111 0%,#0C0C0C 100%)",
          border: "1px solid rgba(187,193,206,0.2)",
          padding: "22px 28px",
          display: "flex", flexDirection: "column" as const, justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LogoMark size={18} variant="dark" />
            <div style={{ width: 1, height: 14, background: "rgba(187,193,206,0.2)" }} />
            <p style={{ fontFamily: MONO, color: "#383838", fontSize: 7, letterSpacing: 2, textTransform: "uppercase" as const }}>Investment Management</p>
          </div>
          <div>
            <p style={{ fontFamily: MONO, color: "#BBC1CE", fontSize: 12, fontWeight: 300 }}>James Harrington</p>
            <p style={{ fontFamily: MONO, color: "#555", fontSize: 8.5, letterSpacing: 1.5, textTransform: "uppercase" as const, marginTop: 4 }}>Managing Director · Founder</p>
          </div>
        </div>

        {/* Back — partner */}
        <div style={{
          width: 320, aspectRatio: "85/55",
          background: "linear-gradient(135deg,#0E0E0E 0%,#111 100%)",
          border: "1px solid rgba(187,193,206,0.1)",
          padding: "22px 28px",
          display: "flex", flexDirection: "column" as const, justifyContent: "space-between",
        }}>
          <div style={{ borderLeft: "1px solid rgba(187,193,206,0.15)", paddingLeft: 14 }}>
            {["+44 20 7123 4567", "j.harrington@solander898.com", "solander898.com"].map((t) => (
              <p key={t} style={{ fontFamily: MONO, color: "#555", fontSize: 9.5, lineHeight: 2 }}>{t}</p>
            ))}
          </div>
          <p style={{ fontFamily: MONO, color: "#282828", fontSize: 8.5 }}>1 Mayfair Place · London W1J 8AJ</p>
        </div>
      </div>
    </div>
  );
}

// ─── Map ─────────────────────────────────────────────────────────────────────
const templateComponents: Record<TemplateId, React.ComponentType> = {
  report:    ReportTemplate,
  letter:    LetterTemplate,
  factsheet: FactsheetTemplate,
  memo:      MemoTemplate,
  proposal:  ProposalTemplate,
  card:      CardTemplate,
};

// ═══════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════
export function DocTemplates() {
  const [active, setActive] = useState<TemplateId | null>(null);
  const ActiveComponent = active ? templateComponents[active] : null;

  return (
    <div className="bg-[#080808] min-h-screen" style={{ fontFamily: MONO }}>
      {/* Header */}
      <div className="border-b border-[#181818] py-20 px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto">
          <p className="text-[#BBC1CE] text-xs tracking-[0.4em] uppercase mb-4">Solander898 — Official</p>
          <h1 className="text-5xl md:text-7xl text-[#E4E4E4] mb-3" style={{ fontWeight: 200, letterSpacing: 1 }}>
            Templates
          </h1>
          <p className="text-[#555] text-xs tracking-[0.2em] uppercase">Brand-consistent document system</p>
        </motion.div>
      </div>

      {/* Gallery */}
      {!active && (
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#181818]">
            {templates.map((tmpl, i) => {
              const Icon = tmpl.icon;
              return (
                <motion.button
                  key={tmpl.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setActive(tmpl.id)}
                  className="text-left bg-[#080808] p-8 hover:bg-[#0B0B0B] transition-colors group"
                >
                  <div className="flex items-start justify-between mb-8">
                    <Icon className="w-5 h-5 text-[#2E2E2E] group-hover:text-[#BBC1CE] transition-colors" />
                    <span
                      className="text-[#2E2E2E] border border-[#1E1E1E] px-2 py-0.5 uppercase"
                      style={{ fontFamily: MONO, fontSize: 8, letterSpacing: 2 }}
                    >
                      {tmpl.tag}
                    </span>
                  </div>
                  <p className="text-[#E4E4E4] text-sm mb-2 group-hover:text-white transition-colors">{tmpl.name}</p>
                  <p
                    className="text-[#444] leading-relaxed mb-8"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: 12 }}
                  >
                    {tmpl.desc}
                  </p>
                  <p
                    className="text-[#BBC1CE] uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ fontSize: 9, letterSpacing: 2 }}
                  >
                    Preview →
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Format notes */}
          <div className="mt-8 border border-[#181818] p-8">
            <p className="text-[#BBC1CE] mb-6" style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase" }}>
              Format Notes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "File Formats", body: "InDesign (.indd), editable PDF, and DOCX. Fonts must be licensed separately from Google Fonts." },
                { label: "Typography", body: "JetBrains Mono (all weights) for all brand-facing text. Inter (Regular, Medium) for body paragraphs." },
                { label: "Print — Obsidian", body: "CMYK 0/0/0/97. Platinum: CMYK 9/6/0/19. Request Pantone equivalents from the brand team." },
              ].map(({ label, body }) => (
                <div key={label}>
                  <p className="text-[#E4E4E4] mb-2" style={{ fontSize: 10, letterSpacing: 1 }}>{label}</p>
                  <p className="text-[#444] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: 11 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Document viewer */}
      <AnimatePresence>
        {active && ActiveComponent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-5xl mx-auto px-6 py-12"
          >
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setActive(null)}
                className="flex items-center gap-2 text-[#555] hover:text-[#E4E4E4] transition-colors uppercase"
                style={{ fontSize: 9, letterSpacing: 2 }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                All Templates
              </button>
              <div className="flex items-center gap-5">
                <p className="text-[#383838] uppercase" style={{ fontSize: 9, letterSpacing: 2 }}>
                  {templates.find((t) => t.id === active)?.name}
                </p>
                <button
                  className="flex items-center gap-2 px-5 py-2 border border-[#BBC1CE]/20 text-[#BBC1CE] hover:bg-[#BBC1CE] hover:text-[#080808] transition-all uppercase"
                  style={{ fontSize: 9, letterSpacing: 2 }}
                >
                  <Download className="w-3 h-3" />
                  Download
                </button>
              </div>
            </div>

            {/* Document shadow wrapper */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="overflow-hidden"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
            >
              <ActiveComponent />
            </motion.div>

            {/* Meta row */}
            <div className="mt-6 grid grid-cols-3 gap-px bg-[#181818]">
              {[
                ["Format", "InDesign · PDF · DOCX"],
                ["Paper", "A4 / 85×55mm (card)"],
                ["Fonts", "JetBrains Mono · Inter"],
              ].map(([l, v]) => (
                <div key={l} className="bg-[#080808] px-5 py-4">
                  <p className="text-[#BBC1CE] uppercase mb-1" style={{ fontSize: 8, letterSpacing: 2 }}>{l}</p>
                  <p className="text-[#555]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 11 }}>{v}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
