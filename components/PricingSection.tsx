"use client";

import { Check } from "lucide-react";
import {
  WHATSAPP_LINK,
  PRICE_ORIGINAL,
  PRICE_NOW,
  REGISTRATION_DEADLINE,
} from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const INCLUDED = [
  "Laporan proses belajar & e-book materi",
  "Buku cetak fisik (Halumma / Durushullughoh) + goodiebag",
  "Grup support sesuai gender + file murojaah",
  "Sertifikat fisik & rapor kelulusan",
];

export default function PricingSection() {
  return (
    <section id="harga" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
        <ScrollReveal variant="fade-up">
          <p className="font-script text-rust text-2xl mb-1">
            Investasi Belajar
          </p>
          <h2 className="font-display font-bold text-brown-700 text-3xl md:text-4xl mb-10">
            Satu Kali Bayar, Sampai Paham
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={150}>
          <div className="marble-card border-2 border-brown-700 rounded-3xl p-8 md:p-12 max-w-lg mx-auto shadow-lg relative pricing-glow">
            <span className="stamp-animate absolute -top-4 right-6 bg-gold text-brown-700 text-xs font-extrabold px-3 py-1.5 rounded-full shadow">
              BEST PRICE!
            </span>
            <p className="text-brown-500 line-through text-lg">
              {PRICE_ORIGINAL}
            </p>
            <p className="font-display font-extrabold text-brown-700 text-5xl md:text-6xl my-2">
              {PRICE_NOW}
            </p>
            <p className="text-brown-500 text-sm mb-6">
              untuk 2 bulan · 8x pertemuan
            </p>
            <div className="divider-dash rounded-full mb-6" />
            <ul className="text-left space-y-2.5 mb-8 text-sm">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-brown-700"
                >
                  <Check size={16} strokeWidth={3} className="text-rust shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 bg-rust text-cream font-bold px-6 py-4 rounded-full hover:bg-brown-700 transition-colors shadow-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-rust"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Daftar Sekarang via WhatsApp
            </motion.a>
            <p className="text-brown-500 text-xs mt-3">
              Pendaftaran ditutup {REGISTRATION_DEADLINE}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
