import { Outlet, Link, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  Image, 
  Palette, 
  Type, 
  FileText, 
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { path: "/", label: "Brand Overview", icon: LayoutDashboard },
  { path: "/logos", label: "Logo Guidelines", icon: Image },
  { path: "/colors", label: "Color Palette", icon: Palette },
  { path: "/typography", label: "Typography", icon: Type },
  { path: "/templates", label: "Stationery & Templates", icon: FileText },
];

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F4EFE6] text-[#0C0C0C] font-sans overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-[#0C0C0C] text-[#F4EFE6] border-r border-[#1E1E1E]">
        <div className="p-6 border-b border-[#1E1E1E]">
          <h1 className="text-xl font-serif tracking-widest text-[#C4A35A]">SOLANDER898</h1>
          <p className="text-xs text-[#7A7570] mt-1 tracking-widest uppercase">Brand Manual</p>
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-md transition-all duration-300 group ${
                  isActive 
                    ? "bg-[#1E1E1E] text-[#C4A35A]" 
                    : "text-[#7A7570] hover:text-[#F4EFE6] hover:bg-[#1E1E1E]/50"
                }`}
              >
                <Icon size={18} className={isActive ? "text-[#C4A35A]" : "text-[#7A7570] group-hover:text-[#F4EFE6]"} />
                <span className="text-sm font-medium tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-[#1E1E1E]">
          <p className="text-xs text-[#7A7570]">v1.0.0 &copy; 2026</p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0C0C0C] text-[#F4EFE6] p-4 flex justify-between items-center border-b border-[#1E1E1E]">
        <h1 className="text-lg font-serif tracking-widest text-[#C4A35A] shrink-0">SOLANDER898</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-[#0C0C0C] pt-20 px-6"
          >
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 border-b border-[#1E1E1E] ${
                    location.pathname === item.path ? "text-[#C4A35A]" : "text-[#7A7570]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto md:p-12 p-6 pt-20 md:pt-12 bg-[#F4EFE6]">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
