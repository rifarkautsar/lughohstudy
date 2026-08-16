"use client";

import {
  NotebookPen,
  FileText,
  BookOpen,
  HeartHandshake,
  Award,
  FolderOpen,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

interface Benefit {
  icon: LucideIcon;
  label: string;
  desc: string;
  accent: string;   // tailwind bg gradient from
  accentTo: string;  // tailwind bg gradient to
}

const BENEFITS: Benefit[] = [
  {
    icon: NotebookPen,
    label: "Laporan Proses Belajar",
    desc: "Pantau perkembangan belajar kamu tiap pekan — transparan dan terukur.",
    accent: "from-rust/90",
    accentTo: "to-brown-700/90",
  },
  {
    icon: FileText,
    label: "E-book Materi",
    desc: "Akses materi digital kapan saja, langsung dari HP kamu.",
    accent: "from-brown-700/90",
    accentTo: "to-brown-600/90",
  },
  {
    icon: BookOpen,
    label: "Buku Fisik",
    desc: "Halumma untuk Akhwat, Durushullughoh untuk Ikhwan — sesuai gender.",
    accent: "from-mauve-ink/85",
    accentTo: "to-brown-700/85",
  },
  {
    icon: HeartHandshake,
    label: "Grup Support",
    desc: "Komunitas belajar sesuai gender — saling memotivasi & murojaah bareng.",
    accent: "from-brown-600/90",
    accentTo: "to-rust/90",
  },
  {
    icon: Award,
    label: "Sertifikat & Rapor",
    desc: "Sertifikat fisik + rapor sebagai bukti pencapaian belajar kamu.",
    accent: "from-gold/90",
    accentTo: "to-rust/80",
  },
  {
    icon: FolderOpen,
    label: "File Murojaah",
    desc: "Ringkasan tiap pertemuan dikirim ke grup — bisa diulang kapan saja.",
    accent: "from-rust/80",
    accentTo: "to-mauve-ink/80",
  },
  {
    icon: ShoppingBag,
    label: "Goodiebag Lughohstudy",
    desc: "Hadiah spesial dari Lughohstudy — eksklusif untuk peserta terdaftar.",
    accent: "from-brown-700/90",
    accentTo: "to-gold/70",
  },
];

function BenefitCard({
  benefit,
  index,
  featured = false,
}: {
  benefit: Benefit;
  index: number;
  featured?: boolean;
}) {
  const Icon = benefit.icon;

  return (
    <ScrollReveal variant="fade-up" delay={index * 90}>
      <motion.div
        className={`group relative overflow-hidden rounded-2xl border border-line transition-all duration-300 ${
          featured
            ? "marble-card p-6 md:p-8 h-full"
            : "marble-card p-5 h-full"
        }`}
        whileHover={{
          y: -6,
          boxShadow:
            "0 20px 48px rgba(46,27,16,0.10), 0 6px 16px rgba(46,27,16,0.06)",
          borderColor: "rgba(142,90,56,0.3)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Subtle gradient glow on hover */}
        <div
          className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${benefit.accent} ${benefit.accentTo} rounded-full opacity-0 group-hover:opacity-[0.07] blur-2xl transition-opacity duration-500`}
        />

        {/* Number badge */}
        <span className="absolute top-4 right-4 w-7 h-7 rounded-full bg-mauve-light text-mauve-ink text-[11px] font-display font-extrabold flex items-center justify-center">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon container */}
          <motion.div
            className={`w-12 h-12 ${
              featured ? "md:w-14 md:h-14" : ""
            } rounded-xl bg-gradient-to-br ${benefit.accent} ${benefit.accentTo} text-cream flex items-center justify-center shadow-sm mb-4`}
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Icon size={featured ? 24 : 20} strokeWidth={1.8} />
          </motion.div>

          {/* Label */}
          <h3
            className={`font-display font-bold text-brown-700 leading-snug mb-1.5 ${
              featured ? "text-lg md:text-xl" : "text-[15px]"
            }`}
          >
            {benefit.label}
          </h3>

          {/* Description */}
          <p
            className={`text-brown-500 leading-relaxed mt-auto ${
              featured ? "text-sm" : "text-[13px]"
            }`}
          >
            {benefit.desc}
          </p>

          {/* Bottom decorative line */}
          <div className="mt-4 h-0.5 w-8 rounded-full bg-line group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-rust/30 group-hover:to-transparent transition-all duration-500" />
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function BenefitsSection() {
  const topRow = BENEFITS.slice(0, 3);
  const bottomRow = BENEFITS.slice(3);

  return (
    <section id="manfaat" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
      {/* Section heading */}
      <ScrollReveal variant="fade-up">
        <div className="text-center mb-14">
          <p className="font-script text-rust text-2xl mb-1">Benefit</p>
          <h2 className="font-display font-bold text-brown-700 text-3xl md:text-4xl">
            Apa yang Kamu Dapatkan
          </h2>
          <p className="text-brown-500 text-sm mt-2.5 max-w-md mx-auto leading-relaxed">
            Bukan cuma belajar — kamu juga dapat fasilitas lengkap yang bikin
            perjalanan belajar bahasa Arab makin nyaman.
          </p>
        </div>
      </ScrollReveal>

      {/* Bento grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {/* Top row: 3 cards */}
        {topRow.map((b, i) => (
          <BenefitCard key={b.label} benefit={b} index={i} />
        ))}

        {/* Bottom row: bento layout — 2 normal + 1 featured wide */}
        {bottomRow.map((b, i) => {
          const globalIndex = i + 3;
          // Last card (Goodiebag) spans 2 columns on large screens
          const isLast = globalIndex === BENEFITS.length - 1;

          return (
            <div
              key={b.label}
              className={isLast ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <BenefitCard
                benefit={b}
                index={globalIndex}
                featured={isLast}
              />
            </div>
          );
        })}
      </div>

      {/* Bottom accent callout */}
      <ScrollReveal variant="fade-up" delay={700}>
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px flex-1 max-w-[80px] bg-line" />
          <p className="font-script text-brown-500 text-lg text-center">
            7 benefit, 1 harga ✦
          </p>
          <span className="h-px flex-1 max-w-[80px] bg-line" />
        </div>
      </ScrollReveal>
    </section>
  );
}
