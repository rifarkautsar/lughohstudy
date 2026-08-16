"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const REPORT_ROWS = [
  { label: "Evaluasi Bulan Oktober", value: "—" },
  { label: "Evaluasi Bulan November", value: "—" },
  { label: "Evaluasi Bulan Desember", value: "—" },
  { label: "Ujian Akhir Tulis", value: "—" },
  { label: "Ujian Akhir Lisan", value: "—" },
];

export default function CertificateSection() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <ScrollReveal variant="fade-up">
        <div className="text-center mb-12">
          <p className="font-script text-rust text-2xl mb-1">Bukti nyata</p>
          <h2 className="font-display font-bold text-brown-700 text-3xl md:text-4xl">
            Progres Belajarmu, Tercatat Rapi
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-6">
        <ScrollReveal variant="zoom" delay={0}>
          <motion.div
            className="marble-card border-2 border-brown-700/30 rounded-2xl p-4 md:p-6 h-full flex flex-col"
            whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(46,27,16,0.1), 0 4px 12px rgba(46,27,16,0.06)", borderColor: "rgba(142,90,56,0.25)" }}
          >
            <div className="rounded-xl overflow-hidden shadow-md border border-brown-700/20 mb-4 bg-white/50">
              <img
                src="/assets/Sertifikat_Kelas_Reguler.png"
                alt="Sertifikat Kelulusan Kelas Reguler"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center mt-auto px-2">
              <p className="font-display font-bold text-brown-700 text-lg">
                Sertifikat Kelulusan
              </p>
              <p className="text-brown-500 text-sm mt-1 leading-relaxed">
                Diberikan pada peserta yang menyelesaikan program, lengkap dengan tanda tangan pengajar.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={150}>
          <motion.div
            className="marble-card border border-line rounded-2xl p-6 md:p-8"
            whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(46,27,16,0.1), 0 4px 12px rgba(46,27,16,0.06)", borderColor: "rgba(142,90,56,0.25)" }}
          >
            <p className="font-display font-bold text-brown-700 text-lg mb-4 text-center">
              Laporan Penilaian
            </p>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-line">
                {REPORT_ROWS.map((row) => (
                  <tr key={row.label}>
                    <td className="py-2 text-brown-600">{row.label}</td>
                    <td className="py-2 text-right font-bold text-brown-700">
                      {row.value}
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-brown-700/30">
                  <td className="pt-3 font-bold text-brown-700">Total Nilai</td>
                  <td className="pt-3 text-right font-display font-extrabold text-rust text-lg">
                    100
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
