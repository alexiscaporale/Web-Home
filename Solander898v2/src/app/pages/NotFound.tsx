import { Link } from "react-router";
import { motion } from "motion/react";
import { LogoMark } from "../components/Logo";

const MONO = "'JetBrains Mono', monospace";

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center px-6 text-center" style={{ fontFamily: MONO }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-8 opacity-30">
          <LogoMark size={52} variant="dark" />
        </div>
        <p className="text-[#BBC1CE] text-xs tracking-[0.4em] uppercase mb-4">404</p>
        <p className="text-3xl text-[#E4E4E4] mb-4" style={{ fontWeight: 200 }}>Page not found.</p>
        <p className="text-[#555] text-sm mb-10">This page does not exist or has been moved.</p>
        <Link
          to="/"
          className="px-8 py-3 border border-[#BBC1CE]/25 text-[#BBC1CE] text-xs tracking-[0.2em] uppercase hover:bg-[#BBC1CE] hover:text-[#080808] transition-all"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
