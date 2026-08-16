import type { Metadata } from "next";
import { Baloo_2, Caveat, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "LughohStudy — Belajar Sekali, Paham Selamanya",
  description:
    "Kelas tatap muka bahasa Arab untuk pemula, khusus warga Sukabumi. Kosakata yang nempel di kepala, bukan cuma numpang lewat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${baloo.variable} ${caveat.variable} ${jakarta.variable} ${amiri.variable} font-body text-ink antialiased bg-cream`}
      >
        {children}
      </body>
    </html>
  );
}
