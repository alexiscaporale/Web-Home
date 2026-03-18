import { Outlet, Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { clsx } from "clsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./components/Logo";

const FONT_MONO = "'JetBrains Mono', monospace";

export function Layout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Brand Manual", path: "/brand" },
    { name: "Templates", path: "/templates" },
  ];

  return (
    <div
      className="min-h-screen bg-[#080808] text-[#E4E4E4]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-[#282828]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo size="sm" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "text-xs tracking-[0.18em] uppercase transition-colors duration-200",
                  location.pathname === link.path
                    ? "text-[#BBC1CE]"
                    : "text-[#555] hover:text-[#E4E4E4]"
                )}
                style={{ fontFamily: FONT_MONO }}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:info@solander898.com"
              className="px-5 py-2 border border-[#BBC1CE]/30 text-[#BBC1CE] text-xs tracking-[0.18em] uppercase hover:bg-[#BBC1CE] hover:text-[#080808] transition-all duration-200"
              style={{ fontFamily: FONT_MONO }}
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-[#E4E4E4] p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#080808] pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 pt-8 border-t border-[#282828]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-[#E4E4E4] hover:text-[#BBC1CE] transition-colors tracking-[0.1em] uppercase"
                  style={{ fontFamily: FONT_MONO, fontWeight: 300 }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#080808] border-t border-[#1E1E1E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-5">
              <Logo size="sm" />
              <p className="text-[#555] text-xs leading-relaxed max-w-[220px]" style={{ fontFamily: FONT_MONO }}>
                Investment management for institutions and families who think in generations.
              </p>
            </div>

            <div>
              <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-5" style={{ fontFamily: FONT_MONO }}>
                Navigate
              </p>
              <ul className="space-y-3">
                {navLinks.map((l) => (
                  <li key={l.path}>
                    <Link
                      to={l.path}
                      className="text-[#555] text-xs hover:text-[#E4E4E4] transition-colors tracking-wide"
                      style={{ fontFamily: FONT_MONO }}
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-5" style={{ fontFamily: FONT_MONO }}>
                Legal
              </p>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Disclosures"].map((t) => (
                  <li key={t}>
                    <a href="#" className="text-[#555] text-xs hover:text-[#E4E4E4] transition-colors" style={{ fontFamily: FONT_MONO }}>
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-5" style={{ fontFamily: FONT_MONO }}>
                Contact
              </p>
              <ul className="space-y-3 text-[#555] text-xs" style={{ fontFamily: FONT_MONO }}>
                <li>1 Mayfair Place</li>
                <li>London W1J 8AJ</li>
                <li>+44 20 7123 4567</li>
                <li>info@solander898.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1E1E1E] pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-[#383838] text-xs" style={{ fontFamily: FONT_MONO }}>
            <span>© 2026 Solander898 Ltd. All rights reserved.</span>
            <span className="tracking-[0.2em] uppercase">Version 1.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
