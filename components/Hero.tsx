"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Users, Sparkles, MapPin, Clock } from "lucide-react";
import { WHATSAPP_LINK, PRICE_ORIGINAL, PRICE_NOW } from "@/lib/constants";
import CountdownTimer from "./CountdownTimer";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const QUICK_FACTS = [
  { icon: Users, label: "Laki-laki & Perempuan" },
  { icon: Sparkles, label: "Pemula / Sudah Lupa-lupa" },
  { icon: MapPin, label: "Offline, Sukabumi" },
  { icon: Clock, label: "90 Menit / Sesi" },
];

const TYPING_TEXT = "Bahasa Arab metode:";

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      // Remove cursor after typing is done
      const timeout = setTimeout(() => setShowCursor(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [displayed, text]);

  return (
    <span className={showCursor && displayed.length < text.length ? "typing-cursor" : ""}>
      {displayed}
    </span>
  );
}



export default function Hero() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-16 md:pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <ScrollReveal variant="fade-up" delay={0}>
            <p className="font-script text-rust text-2xl md:text-3xl mb-1">
              <TypingText text={TYPING_TEXT} />
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100}>
            <h1 className="font-display font-extrabold text-brown-700 text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-5">
              Sekali Belajar,
              <br />
              Paham Selamanya
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <p className="text-brown-600 text-base md:text-lg leading-relaxed mb-6 max-w-md">
              Kelas tatap muka bahasa Arab untuk pemula, khusus warga Sukabumi.
              Kosakata yang nempel di kepala — bukan cuma numpang lewat.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300}>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {QUICK_FACTS.map(({ icon: Icon, label }) => (
                <motion.span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-card border border-line rounded-full px-3.5 py-1.5 text-xs md:text-sm font-semibold text-brown-700"
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 4px 12px rgba(46,27,16,0.1)" }}
                >
                  <Icon size={15} />
                  {label}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={400}>
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-rust text-cream font-bold px-6 py-3.5 rounded-full hover:bg-brown-700 transition-colors shadow-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-rust"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Daftar Sekarang
                <ArrowRight size={16} />
              </motion.a>
              <a
                href="#program"
                className="inline-flex items-center gap-1.5 font-bold text-brown-700 hover:text-rust transition-colors underline decoration-mauve decoration-2 underline-offset-4"
              >
                Lihat Program
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="relative flex flex-col items-center gap-8">
          {/* Countdown Timer */}
          <ScrollReveal variant="zoom" delay={200}>
            <CountdownTimer targetDate="2026-09-28" />
          </ScrollReveal>

          {/* Signature interactive flashcard */}
          <ScrollReveal variant="fade-up" delay={300}>
            <button
              onClick={() => setFlipped((f) => !f)}
              aria-label="Klik untuk membalik kartu kosakata"
              className={`flip-card w-64 h-40 md:w-72 md:h-44 focus:outline-none group ${flipped ? "flipped" : ""
                }`}
            >
              <div className="flip-inner relative w-full h-full">
                <div className="flip-front absolute inset-0 marble-card border-2 border-brown-700/80 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-1">
                  <span className="font-arabic text-5xl text-brown-700">
                    هَلُمَّ
                  </span>
                  <span className="text-brown-500 text-sm font-semibold tracking-wide">
                    Halumma
                  </span>
                  <span className="absolute bottom-3 text-[11px] text-brown-500/70 font-semibold">
                    klik untuk lihat arti →
                  </span>
                </div>
                <div className="flip-back absolute inset-0 bg-brown-700 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center px-6">
                  <span className="text-cream font-display font-bold text-xl mb-1">
                    &ldquo;Ayo, mari&rdquo;
                  </span>
                  <span className="text-mauve-light text-xs leading-relaxed">
                    Kata ajakan dalam bahasa Arab — salah satu dari puluhan
                    kosakata yang akan kamu kuasai
                  </span>
                </div>
              </div>
            </button>
            <p className="font-script text-brown-500 text-lg mt-4 text-center">
              satu kartu, paham selamanya ✦
            </p>
          </ScrollReveal>

          {/* Hangtag price badge */}
          <ScrollReveal variant="fade-right" delay={400}>
            <div className="relative pl-3">
              <div className="hangtag relative bg-brown-700 text-cream shadow-xl px-8 py-5 pl-10 w-56 md:w-64">
                <span className="hangtag-hole" />
                <span className="block text-mauve-light/80 text-xs line-through">
                  {PRICE_ORIGINAL}
                </span>
                <span className="block font-display font-extrabold text-3xl md:text-4xl leading-none mt-0.5">
                  Rp250K
                </span>
                <span className="inline-block mt-2 text-[10px] font-bold tracking-wider bg-gold text-brown-700 px-2 py-0.5 rounded-full">
                  BEST PRICE
                </span>
              </div>
            </div>
          </ScrollReveal>


        </div>
      </div>
    </section>
  );
}
