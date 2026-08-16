# LughohStudy — Landing Page

Landing page pendaftaran kelas "Belajar Bahasa Arab Pemula" LughohStudy, dibangun dengan Next.js (App Router) + TypeScript + Tailwind CSS. Desain diambil dari 2 brosur yang dibagikan: palet krem-marmer, coklat tua/rust, dan aksen mauve, dengan tipografi script + rounded display seperti di brosur.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:3000`.

## Struktur

```
app/
  layout.tsx        -> font & metadata global
  page.tsx           -> menyusun semua section
  globals.css        -> token warna/marmer, bentuk hangtag, animasi flip
components/
  Navbar.tsx
  Hero.tsx           -> flashcard kosakata interaktif + hangtag harga
  AudienceSection.tsx
  ProgramSection.tsx -> 3 kartu flip + timeline 3 tanggal
  BenefitsSection.tsx
  ScheduleSection.tsx
  CertificateSection.tsx
  PricingSection.tsx
  FaqSection.tsx
  Footer.tsx
  WhatsAppFloat.tsx
lib/
  constants.ts        -> nomor WhatsApp, tanggal, lokasi, harga (edit di sini)
```

## Yang perlu kamu sesuaikan

- **lib/constants.ts** — nomor WhatsApp, teks pesan otomatis, tanggal, kuota, harga. Semua komponen mengambil dari sini, jadi cukup ubah di satu tempat.
- **Tautan Instagram/WA di Footer & Navbar** sudah memakai data dari `constants.ts`.
- File `prd.md` yang diupload kosong, jadi seluruh fitur & salinan teks di halaman ini disusun berdasarkan isi kedua brosur. Tinjau ulang bagian FAQ (ditambahkan sebagai pelengkap, bukan dari brosur) dan sesuaikan bila perlu.

## Menambahkan QR code ke brosur

Setelah landing page ini kamu deploy (misalnya ke Vercel) dan punya URL publik, kamu bisa generate QR code dari URL tersebut (contoh: qr-code-generator.com atau library `qrcode` di Node) lalu tempelkan di brosur menggantikan/menambah info kontak.

## Deploy

Cara tercepat: push ke GitHub lalu import project di [vercel.com](https://vercel.com) — tidak perlu konfigurasi tambahan.
