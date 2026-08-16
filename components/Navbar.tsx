"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#program", label: "Program" },
  { href: "#manfaat", label: "Manfaat" },
  { href: "#jadwal", label: "Jadwal" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b"
      initial={{ backgroundColor: "rgba(46, 27, 16, 1)", borderBottomColor: "rgba(228, 214, 190, 0)", boxShadow: "none" }}
      animate={{
        backgroundColor: scrolled ? "rgba(46, 27, 16, 0.95)" : "rgba(46, 27, 16, 1)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: scrolled ? "rgba(228, 214, 190, 0.1)" : "rgba(228, 214, 190, 0)",
        boxShadow: scrolled ? "0 4px 12px rgba(0, 0, 0, 0.2)" : "none",
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <motion.div
        className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between"
        animate={{ height: scrolled ? 56 : 80 }} // 56px (h-14) / 80px (h-20)
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <a href="#top" className="flex items-center gap-4">
          <motion.span
            className="flex items-center justify-center relative"
            animate={{
              width: scrolled ? 32 : 40,
              height: scrolled ? 32 : 40,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <img
              src="/assets/logo_lughohstudy.png"
              alt="logo lughohstudy"
              className="w-full h-full object-contain scale-[1.35] translate-x-[4px] -translate-y-[4px] drop-shadow-[0_0_1px_rgba(46,27,16,0.4)]"
            />
          </motion.span>
          <span className="leading-tight">
            <span className="block font-display font-bold text-cream text-base md:text-lg -mb-1">
              LughohStudy
            </span>
            <span className="block font-script text-[#c9b08a] text-sm md:text-base">
              Sibuk Sambil Belajar
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-cream">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative hover:text-[#c9b08a] transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#c9b08a] after:rounded-full after:transition-all hover:after:w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-rust text-cream text-sm font-bold px-4 py-2.5 md:px-5 md:py-3 rounded-full shadow-sm"
          whileHover={{ scale: 1.05, backgroundColor: "#78492E" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <MessageCircle size={16} />
          <span className="hidden sm:inline">Daftar via WA</span>
          <span className="sm:hidden">Daftar</span>
        </motion.a>
      </motion.div>
    </motion.header>
  );
}
