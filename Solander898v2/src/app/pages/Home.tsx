import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Logo, LogoMark } from "../components/Logo";

const MONO = "'JetBrains Mono', monospace";

const stats = [
  { value: "$4.2B", label: "Assets Under Management" },
  { value: "28+", label: "Years of Excellence" },
  { value: "98%", label: "Client Retention" },
  { value: "340+", label: "Institutional Clients" },
];

const pillars = [
  { code: "01", title: "Preservation", desc: "Capital protection through macro-aware allocation and disciplined risk frameworks." },
  { code: "02", title: "Growth", desc: "Precision portfolio construction across public and private markets globally." },
  { code: "03", title: "Legacy", desc: "Generational investment structures that outlast market cycles and individuals." },
  { code: "04", title: "Access", desc: "Exclusive exposure to private credit, infrastructure, and alternative strategies." },
];

export function Home() {
  return (
    <div className="bg-[#080808]" style={{ fontFamily: MONO }}>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

        {/* Fine grid background */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(#BBC1CE 1px, transparent 1px),
              linear-gradient(90deg, #BBC1CE 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #080808 100%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center max-w-4xl w-full"
        >
          {/* Label */}
          <p className="text-[#BBC1CE] text-xs tracking-[0.4em] uppercase mb-12">
            Investment Management — London
          </p>

          {/* Large logo */}
          <div className="flex justify-center mb-14">
            <Logo size="lg" />
          </div>

          {/* Rule */}
          <div className="w-12 h-px bg-[#282828] mx-auto mb-12" />

          {/* Sub */}
          <p className="text-[#555] text-sm leading-relaxed max-w-lg mx-auto mb-12" style={{ fontStyle: "italic" }}>
            We manage capital for institutions and families who view wealth<br />
            not as an outcome, but as a responsibility.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/brand"
              className="flex items-center gap-3 px-8 py-3 bg-[#BBC1CE] text-[#080808] text-xs tracking-[0.2em] uppercase hover:bg-[#D4D8E0] transition-colors"
            >
              Brand Manual <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/templates"
              className="flex items-center gap-3 px-8 py-3 border border-[#282828] text-[#555] text-xs tracking-[0.2em] uppercase hover:border-[#BBC1CE]/40 hover:text-[#E4E4E4] transition-colors"
            >
              Doc Templates
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#BBC1CE]/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-[#181818] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#181818]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-8 py-6"
            >
              <p className="text-3xl md:text-4xl text-[#E4E4E4] mb-2" style={{ fontWeight: 200 }}>
                {stat.value}
              </p>
              <p className="text-[#555] text-xs tracking-[0.15em] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-start gap-6"
          >
            <div className="w-px h-16 bg-[#BBC1CE]/30 flex-shrink-0 mt-1" />
            <div>
              <p className="text-[#BBC1CE] text-xs tracking-[0.3em] uppercase mb-3">Core Disciplines</p>
              <h2 className="text-3xl md:text-4xl text-[#E4E4E4]" style={{ fontWeight: 300 }}>
                Built on structure.<br />Refined through experience.
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#181818]">
            {pillars.map((p, i) => (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#080808] p-8 hover:bg-[#0E0E0E] transition-colors group"
              >
                <p className="text-[#BBC1CE] text-xs mb-6 tracking-[0.2em]">{p.code}</p>
                <p className="text-[#E4E4E4] text-base mb-4 group-hover:text-white transition-colors" style={{ fontWeight: 400 }}>
                  {p.title}
                </p>
                <p className="text-[#444] text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand preview ── */}
      <section className="py-28 px-6 bg-[#060606] border-y border-[#181818]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[#BBC1CE] text-xs tracking-[0.3em] uppercase mb-3">Identity System</p>
            <h2 className="text-3xl md:text-4xl text-[#E4E4E4]" style={{ fontWeight: 300 }}>
              A mark of precision.
            </h2>
          </motion.div>

          {/* Logo variants on different backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#181818] mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#080808] flex items-center justify-center py-16 px-8"
            >
              <Logo size="md" variant="dark" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#EFEFEF] flex items-center justify-center py-16 px-8"
            >
              <Logo size="md" variant="light" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#181818] flex items-center justify-center py-16 px-8"
            >
              <Logo size="md" variant="dark" showWordmark={false} />
            </motion.div>
          </div>

          {/* Color palette strip */}
          <div className="grid grid-cols-5 h-16">
            {[
              { bg: "#080808", label: "Obsidian" },
              { bg: "#181818", label: "Deep" },
              { bg: "#BBC1CE", label: "Platinum" },
              { bg: "#E4E4E4", label: "Ash White" },
              { bg: "#555555", label: "Stone" },
            ].map((c) => (
              <div
                key={c.bg}
                className="flex items-end pb-2 px-3"
                style={{ backgroundColor: c.bg }}
              >
                <span className="text-[8px] tracking-widest uppercase opacity-50"
                  style={{ color: c.bg === "#080808" || c.bg === "#181818" || c.bg === "#555555" ? "#fff" : "#000" }}>
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-end"
          >
            <Link
              to="/brand"
              className="flex items-center gap-3 text-[#BBC1CE] text-xs tracking-[0.2em] uppercase hover:text-[#E4E4E4] transition-colors"
            >
              Explore Brand Manual <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <LogoMark size={48} variant="dark" />
            <div>
              <p className="text-[#BBC1CE] text-xs tracking-[0.3em] uppercase mb-4">New Client Enquiries</p>
              <h2 className="text-3xl md:text-4xl text-[#E4E4E4] mb-5" style={{ fontWeight: 300 }}>
                Begin the conversation.
              </h2>
              <p className="text-[#555] text-sm leading-relaxed mb-8">
                We accept a limited number of new mandates each year. All conversations are conducted with full discretion.
              </p>
              <a
                href="mailto:info@solander898.com"
                className="inline-flex items-center gap-3 px-8 py-3 bg-[#BBC1CE] text-[#080808] text-xs tracking-[0.2em] uppercase hover:bg-[#D4D8E0] transition-colors"
              >
                Request Consultation <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
