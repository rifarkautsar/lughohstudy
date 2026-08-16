"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Buku panduan apa yang digunakan dalam belajar?",
    a: "Untuk peserta Laki-laki (Ikhwan) menggunakan buku Durushullughoh, sedangkan peserta Perempuan (Akhwat) menggunakan buku Halumma.",
  },
  {
    q: "Apakah kelas laki-laki dan perempuan digabung?",
    a: "Tidak. Kelas ikhwan dan akhwat dipisah, masing-masing punya jadwal dan grup support sendiri sesuai gender.",
  },
  {
    q: "Saya belum pernah sama sekali belajar bahasa Arab, apakah bisa ikut?",
    a: "Bisa. Program ini memang dirancang untuk pemula murni maupun yang sudah pernah belajar tapi lupa-lupa lagi.",
  },
  {
    q: "Di mana lokasi kelasnya?",
    a: "Kelas berlangsung tatap muka di Gunungjaya, Sukabumi. Alamat lengkap akan dikirim setelah kamu mendaftar.",
  },
  {
    q: "Bagaimana cara mendaftar dan membayar?",
    a: "Hubungi kami langsung lewat tombol WhatsApp di halaman ini — tim LughohStudy akan membantu proses pendaftaran dan info pembayaran.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <ScrollReveal variant="fade-up">
        <div className="text-center mb-10">
          <p className="font-script text-rust text-2xl mb-1">Masih ragu?</p>
          <h2 className="font-display font-bold text-brown-700 text-3xl md:text-4xl">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>
      </ScrollReveal>
      <div className="space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <ScrollReveal key={item.q} variant="fade-up" delay={i * 100}>
              <motion.div
                className="bg-card border border-line rounded-2xl overflow-hidden"
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(46,27,16,0.1), 0 4px 12px rgba(46,27,16,0.06)", borderColor: "rgba(142,90,56,0.25)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-bold text-brown-700 focus:outline-none"
                >
                  <span>{item.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} className="shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-5 text-brown-600 text-sm leading-relaxed overflow-hidden"
                    >
                      <p className="pb-4">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
