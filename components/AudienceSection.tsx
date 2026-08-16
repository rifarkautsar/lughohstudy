"use client";

import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const AUDIENCE_POINTS = [
  "Laki-laki dan perempuan — kelas terpisah dengan buku panduan spesifik (Durushullughoh untuk Ikhwan, Halumma untuk Akhwat)",
  "Pemula bahasa Arab, atau sudah pernah belajar namun lupa-lupa",
  "Belajar tatap muka (offline) di Sukabumi — berkomitmen tinggi dan siap meluangkan waktu untuk menempuh perjalanan ke lokasi kelas",
  "Durasi belajar 90 menit setiap sesi",
  "Materi: hafalan kosakata, kata tunjuk, praktik tanya-jawab, hingga pengenalan huruf jar dan maf'ul bih",
];

export default function AudienceSection() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
        <ScrollReveal variant="fade-left">
          <div>
            <p className="font-script text-rust text-2xl mb-1">
              Cocok untuk kamu yang...
            </p>
            <h2 className="font-display font-bold text-brown-700 text-3xl md:text-4xl leading-tight">
              Untuk Siapa Kelas Ini?
            </h2>
            <p className="text-brown-600 mt-4 leading-relaxed">
              Dirancang untuk warga Sukabumi yang benar-benar ingin mulai — atau
              mulai lagi — belajar bahasa Arab tanpa tekanan.
            </p>
          </div>
        </ScrollReveal>
        <ul className="space-y-3.5">
          {AUDIENCE_POINTS.map((point, i) => (
            <ScrollReveal key={point} variant="fade-up" delay={i * 100}>
              <motion.li 
                className="flex items-start gap-3 bg-card border border-line rounded-2xl px-5 py-4"
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(46,27,16,0.1), 0 4px 12px rgba(46,27,16,0.06)", borderColor: "rgba(142,90,56,0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="mt-0.5 w-6 h-6 rounded-full bg-mauve-light text-mauve-ink flex items-center justify-center shrink-0">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="text-brown-700 font-medium">{point}</span>
              </motion.li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
