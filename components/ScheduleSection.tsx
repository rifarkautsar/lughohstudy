"use client";

import {
  Users,
  Calendar,
  Target,
  MapPin,
  Clock,
  type LucideIcon,
} from "lucide-react";
import {
  REGISTRATION_DEADLINE,
  QUOTA,
  PROGRAM_LENGTH,
  LOCATION,
} from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

/* ── Class schedule cards ── */
const CLASSES = [
  {
    title: "Kelas Ikhwan",
    subtitle: "Laki-laki",
    day: "Senin atau Rabu",
    time: "16.00 WIB",
    book: "Durushullughoh",
    gradient: "from-brown-700 to-brown-600",
    iconBg: "bg-cream/15",
    ringColor: "ring-cream/20",
  },
  {
    title: "Kelas Akhwat",
    subtitle: "Perempuan",
    day: "Senin atau Rabu",
    time: "08.00 WIB",
    book: "Halumma",
    gradient: "from-mauve-ink to-[#7a4558]",
    iconBg: "bg-mauve-light/15",
    ringColor: "ring-mauve-light/20",
  },
];

/* ── Info stats ── */
interface InfoStat {
  icon: LucideIcon;
  label: string;
  value: string;
  highlight?: boolean;
}

const INFO_STATS: InfoStat[] = [
  {
    icon: Calendar,
    label: "Tutup Pendaftaran",
    value: REGISTRATION_DEADLINE,
    highlight: true,
  },
  { icon: Users, label: "Kuota Terbatas", value: QUOTA },
  { icon: Target, label: "Target Belajar", value: PROGRAM_LENGTH },
  { icon: MapPin, label: "Lokasi", value: LOCATION },
];

/* ── Main section ── */
export default function ScheduleSection() {
  return (
    <section id="jadwal" className="relative overflow-hidden bg-brown-700 py-16 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cream/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-mauve/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Section heading */}
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-14">
            <p className="font-script text-mauve-light text-2xl mb-1">
              Atur waktumu
            </p>
            <h2 className="font-display font-bold text-cream text-3xl md:text-4xl">
              Jadwal Kelas
            </h2>
            <p className="text-cream/50 text-sm mt-2.5 max-w-md mx-auto leading-relaxed">
              Pilih jadwal yang paling cocok untuk kamu — kelas Ikhwan dan
              Akhwat terpisah dengan buku panduan masing-masing.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Class schedule cards ── */}
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mb-12">
          {CLASSES.map((c, i) => (
            <ScrollReveal
              key={c.title}
              variant={i === 0 ? "fade-left" : "fade-right"}
              delay={i * 150}
            >
              <motion.div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.gradient} p-6 md:p-7 ring-1 ${c.ringColor}`}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 48px rgba(0,0,0,0.25)",
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Decorative corner circle */}
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-cream/[0.04]" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-cream/[0.03]" />

                <div className="relative z-10">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="font-display font-bold text-cream text-xl md:text-2xl leading-tight">
                        {c.title}
                      </h3>
                      <span className="inline-block mt-1 text-cream/50 text-xs font-semibold uppercase tracking-wider">
                        {c.subtitle}
                      </span>
                    </div>
                    <motion.span
                      className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center`}
                      whileHover={{ rotate: -8, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <Users className="text-cream" size={22} strokeWidth={1.8} />
                    </motion.span>
                  </div>

                  {/* Schedule details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg ${c.iconBg} flex items-center justify-center shrink-0`}>
                        <Calendar className="text-cream/80" size={15} />
                      </span>
                      <div>
                        <p className="text-cream/50 text-[11px] font-semibold uppercase tracking-wider">
                          Hari
                        </p>
                        <p className="text-cream font-semibold text-sm">
                          {c.day}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg ${c.iconBg} flex items-center justify-center shrink-0`}>
                        <Clock className="text-cream/80" size={15} />
                      </span>
                      <div>
                        <p className="text-cream/50 text-[11px] font-semibold uppercase tracking-wider">
                          Waktu
                        </p>
                        <p className="text-cream font-semibold text-sm">
                          {c.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Book badge */}
                  <div className="mt-5 pt-4 border-t border-cream/10">
                    <div className="inline-flex items-center gap-1.5 bg-cream/10 rounded-full px-3 py-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="text-cream/80 text-xs font-semibold">
                        Buku: {c.book}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Info stats grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {INFO_STATS.map(({ icon: Icon, label, value, highlight }, i) => (
            <ScrollReveal key={label} variant="fade-up" delay={i * 100}>
              <motion.div
                className={`relative overflow-hidden rounded-2xl p-5 text-center transition-colors duration-300 ${
                  highlight
                    ? "bg-gradient-to-br from-rust/20 to-gold/10 border border-rust/20"
                    : "bg-cream/[0.06] border border-cream/10"
                }`}
                whileHover={{
                  y: -4,
                  borderColor: highlight
                    ? "rgba(162,84,46,0.4)"
                    : "rgba(255,255,255,0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle corner accent for highlighted */}
                {highlight && (
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-rust/10 rounded-full blur-xl" />
                )}

                <div className="relative z-10">
                  <motion.div
                    className={`mx-auto mb-3 w-10 h-10 rounded-xl flex items-center justify-center ${
                      highlight
                        ? "bg-rust/20 text-gold"
                        : "bg-cream/10 text-mauve-light"
                    }`}
                    whileHover={{ rotate: -6, scale: 1.1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </motion.div>
                  <p className="text-cream/50 text-[11px] font-semibold uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  <p
                    className={`font-display font-bold text-sm md:text-base leading-snug ${
                      highlight ? "text-gold" : "text-cream"
                    }`}
                  >
                    {value}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom accent */}
        <ScrollReveal variant="fade-up" delay={500}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-px flex-1 max-w-[80px] bg-cream/10" />
            <p className="font-script text-cream/40 text-lg text-center">
              90 menit per sesi ✦
            </p>
            <span className="h-px flex-1 max-w-[80px] bg-cream/10" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
