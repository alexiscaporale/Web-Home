import { Outlet, Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { clsx } from "clsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./components/Logo";

const FONT_MONO = "'JetBrains Mono', monospace";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: '', path: '/' },
  
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
              <a
                key={link.path}
                href={link.path}
                className={clsx(
                  "text-xs tracking-[0.18em] uppercase transition-colors duration-200",
                  "text-[#555] hover:text-[#E4E4E4]"
                )}
                style={{ fontFamily: FONT_MONO }}
              >
                {link.name}
              </a>
            ))}

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
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-[#E4E4E4] hover:text-[#BBC1CE] transition-colors tracking-[0.1em] uppercase"
                  style={{ fontFamily: FONT_MONO, fontWeight: 300 }}
                >
                  {link.name}
                </a>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-5">
              <Logo size="sm" />
              <p className="text-[#555] text-xs leading-relaxed max-w-[220px]" style={{ fontFamily: FONT_MONO }}>
                Daniel Carl Solander, Swedish botanist and explorer, creator of the system used to preserve works of art in museums.
              </p>
            </div>

            <div>
              <p className="text-[#555] text-xs leading-relaxed max-w-[300px]" style={{ fontFamily: FONT_MONO }}>
                Solander 898 is a trade name of 898 Farnam St, LLC. 898 Farnam St, LLC is in the process of applying for registration as an investment adviser with the U.S. Securities and Exchange Commission and currently provides services only to non-U.S. clients in jurisdictions where it is permitted to do so. Registration does not imply a certain level of skill or training. The information provided is for informational purposes only and does not constitute investment, legal, or tax advice or an offer to buy or sell securities or investment advisory services. Past performance is not indicative of future results. See full disclosures.
              </p>
            </div>

            <div>
              <p className="text-[#BBC1CE] text-xs tracking-[0.2em] uppercase mb-5" style={{ fontFamily: FONT_MONO }}>
                CONTACTO
              </p>
              <ul className="space-y-3 text-[#555] text-xs" style={{ fontFamily: FONT_MONO }}>
                <li></li>
                <li></li>
                <li></li>
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
