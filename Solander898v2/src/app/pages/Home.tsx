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
  { code: "01", title: "Calidad y durabilidad del negocio", desc: "La calidad del activo subyacente es el punto de partida de cualquier decisión de inversión. Priorizamos empresas con altos retornos sobre el capital y modelos de negocio con ventajas competitivas sostenibles en el tiempo." },
  { code: "02", title: "Construcción y gestión de la cartera", desc: "Construimos carteras concentradas en las ideas de mayor convicción, con posiciones dimensionadas en función del análisis fundamental y el margen de seguridad de cada inversión. La diversificación no es un objetivo en sí mismo, sino la consecuencia natural de un proceso de selección riguroso y disciplinado." },
  { code: "03", title: "Valoración independiente y margen de seguridad", desc: "Compramos cuando el precio ofrece un margen de seguridad suficiente o cuando el mercado está malpreciando los riesgos de un activo. Vendemos cuando la tesis de inversión deja de ser válida o cuando el equipo gestor desvía el foco estratégico del negocio." },
  { code: "04", title: "Gestión conservadora y orientada al largo plazo", desc: "Evitamos riesgos innecesarios y no perseguimos retornos rápidos. Buscamos construir relaciones duraderas con clientes que comparten nuestra visión de largo plazo, convencidos de que la disciplina y la paciencia son, en sí mismas, una ventaja competitiva." },
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
          <p className="text-[#BBC1CE] text-sm tracking-[0.4em] uppercase mb-12">
            Preservación de patrimonio, construcción de valor
          </p>

          {/* Large logo */}
          <div className="flex justify-center mb-8" style={{ transform: "scale(1.4)" }}>
            <Logo size="lg" />
          </div>

          {/* Rule */}
          <div className="w-12 h-px bg-[#282828] mx-auto mb-12" />

          {/* Sub */}
          <p className="text-[#555] text-base leading-relaxed max-w-lg mx-auto mb-12">
            Asesor de inversiones regulado por la SEC
          </p>
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
      <section className="border-y border-[#181818] py-16" style={{ display: "none" }}>
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
      <section id="filosofia" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-start gap-6"
          >
            <div className="w-px h-16 bg-[#BBC1CE]/30 flex-shrink-0 mt-1" />
            <div>
              <p className="text-[#BBC1CE] text-xs tracking-[0.3em] uppercase mb-3">FILOSOFÍA</p>
              <h2 className="text-2xl md:text-3xl text-[#E4E4E4]" style={{ fontWeight: 300 }}>
                Disciplina de inversión fundamentada en el análisis riguroso, la convicción independiente y el horizonte de largo plazo.
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
                <p className="text-[#E4E4E4] text-base mb-4 group-hover:text-white transition-colors" style={{ fontWeight: 400 }}>
                  {p.title}
                </p>
                <p className="text-[#444] text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contacto" className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <div>
              <p className="text-[#BBC1CE] text-xs tracking-[0.3em] uppercase mb-4">Contacto</p>
              <h2 className="text-3xl md:text-4xl text-[#E4E4E4] mb-5" style={{ fontWeight: 300 }}>
                Gestionamos capital para quienes conciben el patrimonio no como un fin, sino como un instrumento de creación de valor.
              </h2>
              <p className="text-[#555] text-sm leading-relaxed mb-8">
                Trabajamos con un número reducido de clientes.
              </p>
              <a
                href="mailto:info@solander898.com"
                className="inline-flex items-center gap-3 px-8 py-3 bg-[#BBC1CE] text-[#080808] text-xs tracking-[0.2em] uppercase hover:bg-[#D4D8E0] transition-colors"
              >
                Contacto <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
