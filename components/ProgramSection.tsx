"use client";

import { useState } from "react";
import {
  Presentation,
  FolderOpen,
  PenLine,
  ChevronRight,
  RotateCw,
  Lock,
  Rocket,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  REGISTRATION_DEADLINE,
  START_DATE,
  FINAL_EXAM_DATE,
} from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

const PROGRAM_CARDS = [
  {
    icon: Presentation,
    title: "Tatap Muka Langsung",
    detail:
      "Belajar bersama pengajar secara langsung. Lebih leluasa bertanya dan mencatat, ditemani teman sekelas — nggak sendirian lagi.",
  },
  {
    icon: FolderOpen,
    title: "File Murojaah Tiap Pertemuan",
    detail:
      "Highlight materi tiap sesi dikirim ke grup, jadi kamu bisa mengulang kapan saja saat waktu luang.",
  },
  {
    icon: PenLine,
    title: "Kuis Seru di Rumah",
    detail:
      "Waktu bermain fleksibel sesuai waktu luangmu sendiri — tinggal klik link, kerjakan dari rumah.",
  },
];

const TIMELINE = [
  {
    date: REGISTRATION_DEADLINE,
    label: "Pendaftaran Ditutup",
    icon: Lock,
  },
  {
    date: START_DATE,
    label: "Mulai Belajar & Pembagian Buku",
    icon: Rocket,
  },
  {
    date: FINAL_EXAM_DATE,
    label: "Ujian Akhir Masa Pembelajaran",
    icon: Trophy,
  },
];

function ProgramCard({
  step,
  icon: Icon,
  title,
  detail,
}: { step: number } & (typeof PROGRAM_CARDS)[number]) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      aria-label={`${title} — klik untuk detail`}
      aria-pressed={flipped}
      className={`group flip-card relative block w-full h-60 md:h-64 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-2xl transition-transform duration-300 hover:-translate-y-1.5 ${flipped ? "flipped" : ""
        }`}
    >
      <div className="flip-inner relative w-full h-full">
        {/* FRONT */}
        <div className="flip-front absolute inset-0 marble-card border border-line rounded-2xl shadow-sm group-hover:shadow-xl group-hover:border-brown-500/30 transition-all duration-300 p-6 flex flex-col items-center justify-center text-center gap-3">
          <span className="absolute top-4 left-4 w-7 h-7 rounded-full bg-mauve-light text-mauve-ink text-xs font-display font-extrabold flex items-center justify-center">
            {String(step).padStart(2, "0")}
          </span>
          <span className="w-14 h-14 rounded-full bg-brown-700 text-cream flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
            <Icon size={26} strokeWidth={1.8} />
          </span>
          <span className="font-display font-bold text-brown-700 text-lg leading-tight px-2">
            {title}
          </span>
          <span className="absolute bottom-4 inline-flex items-center gap-1 text-[11px] font-semibold text-brown-500/70">
            <RotateCw size={11} />
            ketuk untuk detail
          </span>
        </div>

        {/* BACK */}
        <div className="flip-back absolute inset-0 bg-mauve rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center text-center gap-2">
          <span className="w-7 h-7 rounded-full bg-mauve-ink/15 text-mauve-ink text-xs font-display font-extrabold flex items-center justify-center mb-1">
            {String(step).padStart(2, "0")}
          </span>
          <p className="text-mauve-ink text-sm leading-relaxed font-medium">
            {detail}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function ProgramSection() {
  return (
    <section id="program" className="bg-brown-700/[0.04] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-12">
            <p className="font-script text-rust text-2xl mb-1">
              Sistematis Program
            </p>
            <h2 className="font-display font-bold text-brown-700 text-3xl md:text-4xl">
              Belajar Bahasa Arab Pemula
            </h2>
            <p className="text-brown-500 text-sm mt-2">
              Tiga langkah sederhana, disusun berurutan supaya kamu nggak
              kehilangan arah.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 steps with connecting arrows */}
        <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-3">
          {PROGRAM_CARDS.map((card, i) => (
            <div key={card.title} className="flex items-center gap-3 flex-1">
              <ScrollReveal
                variant="fade-up"
                delay={i * 120}
                className="flex-1 h-full"
              >
                <ProgramCard step={i + 1} {...card} />
              </ScrollReveal>
              {i < PROGRAM_CARDS.length - 1 && (
                <ChevronRight
                  size={22}
                  className="hidden sm:block shrink-0 text-brown-500/30"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* timeline */}
        <div className="relative mt-20">
          <div className="hidden sm:block absolute top-7 left-[16.5%] right-[16.5%] h-px bg-line overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-mauve via-rust to-mauve"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-5">
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={item.label} variant="zoom" delay={i * 150}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-10 w-14 h-14 mx-auto rounded-full bg-brown-700 text-cream flex items-center justify-center mb-3 shadow-sm"
                  >
                    <item.icon size={22} strokeWidth={1.8} />
                  </motion.div>
                  <p className="font-display font-extrabold text-brown-700 text-base">
                    {item.date}
                  </p>
                  <p className="text-brown-500 text-sm font-medium mt-0.5 max-w-[13rem] mx-auto leading-snug">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}