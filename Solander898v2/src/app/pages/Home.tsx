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
          

          {/* Large logo */}
        <div className="flex justify-center mb-8">
  <div style={{ transform: window.innerWidth < 768 ? "scale(1)" : "scale(1.4)" }}>
    <Logo size={window.innerWidth < 768 ? "md" : "lg"} />
  </div>
</div>
          {/* Rule */}
          <div className="w-12 h-px bg-[#282828] mx-auto mb-12" />

          {/* Sub */}
          <p className="text-[#555] text-base leading-relaxed max-w-lg mx-auto mb-12">
            info@solander898.com
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
      
      {/* ── CTA ── */}
      
  
  
  
</div>
)}
