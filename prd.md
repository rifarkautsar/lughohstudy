PRODUCT REQUIREMENTS DOCUMENT (PRD)
Proyek: Landing Page Konversi QR Code - LughohStudy
Fase: V1.0 (Informational & Direct Lead Generation)
Platform: Web Mobile-First (Responsif)

1. Ringkasan Proyek (Project Overview)
Tujuan: Membuat landing page yang berfungsi sebagai perpanjangan informasi dari brosur fisik "Belajar Bahasa Arab Metode Natural (Ali Batta)". Website ini diakses melalui pemindaian QR Code dan bertujuan untuk memberikan detail program, membangun urgensi (scarcity), dan mengarahkan calon peserta untuk langsung mendaftar via WhatsApp.

2. Target Pengguna
Warga Sukabumi (laki-laki dan perempuan).

Pemula yang belum pernah belajar bahasa Arab atau yang sudah pernah belajar namun lupa.

Pengguna yang mengakses internet dominan melalui smartphone (hasil scan QR).

3. Alur Pengguna (User Flow)
Pengguna memindai QR Code di brosur fisik.

Pengguna diarahkan ke Landing Page (Mobile View).

Pengguna melihat Harga Coret, dan Batas Waktu.

Pengguna menelusuri detail program (Sistem, Benefit, Timeline, Lokasi).

Pengguna menekan tombol CTA "Daftar Sekarang" atau ikon WhatsApp.

Pengguna diarahkan ke aplikasi WhatsApp dengan pre-filled message (pesan siaran otomatis yang sudah disiapkan).

4. Kebutuhan Fitur Utama (Functional Requirements)
Fitur 1: Hero Section & Scarcity Indicator
Kesan pertama yang mengunci perhatian dan memicu aksi cepat.

Headline: "Belajar Sekali, Paham Selamanya".

Pricing Tag: Menampilkan visual harga coret (Rp 375.000 menjadi Rp 250.000) dengan label "Best Price".

Urgency Bar (Scarcity): Indikator visual (seperti progress bar atau teks bold) yang menampilkan: "Hanya 5 Peserta!" dan "Tutup Pendaftaran: 28 September 2026".

Fitur 2: Modul "Sistematis Program" (Detail Kurikulum)
Menjelaskan apa yang didapat di kelas secara interaktif (bisa berupa Accordion atau Cards).

Target Belajar: 2 Bulan (8x pertemuan), durasi 90 menit/sesi.

Metode: Menghafal kosakata, kata tunjuk, praktik tanya jawab, pengenalan huruf jar & mafulbih.

3 Pilar Belajar:

Belajar tatap muka didampingi pengajar.

File murojaah (Highlight materi) dikirim ke grup setiap selesai sesi.

Kuis seru di rumah (fleksibel tinggal klik link).

Fitur 3: Grid Benefit & Fasilitas
Menampilkan fasilitas menggunakan ikon visual agar mudah dibaca (scanable).

Laporan Proses Belajar & Rapot

E-book Materi & Buku Fisik (Halumma/DL)

Grup Support (dipisah sesuai gender)

Sertifikat Fisik

File Murojaah & Goodiebag LughohStudy

Fitur 4: Timeline Interaktif
Visualisasi perjalanan program dari awal hingga akhir (Vertical Stepper/Timeline).

Titik 1: 28 September 2026 - Pendaftaran Ditutup.

Titik 2: 06 Oktober 2026 - Mulai Belajar & Pembagian Buku.

Titik 3: 25 Oktober 2026 - Ujian Akhir Masa Pembelajaran.

Fitur 5: Detail Lokasi & Jadwal (Integration)
Pilihan Jadwal: Toggle atau daftar pilihan (Senin atau Rabu | Pukul 08.00 WIB atau 16.00 WIB).

Google Maps Embed: Menampilkan titik lokasi "Gunungjaya, Sukabumi" agar pengguna bisa langsung klik "Get Directions".

Fitur 6: Call-to-Action (CTA) & Integrasi Kontak
Tombol mengambang (Sticky Bottom Button) di versi mobile agar selalu terlihat.

WhatsApp API Link: Saat diklik, langsung membuka WA (0813-1824-4959) dengan format pesan otomatis (Broadcast/Pre-filled):

Template Pesan: "Assalamualaikum, saya ingin daftar kelas offline sukabumi"

Social Media Button: Tautan langsung ke Instagram (@lughohstudy).

5. Kebutuhan Teknis (Technical Requirements)
Untuk memastikan performa maksimal, loading instan (karena diakses via QR), dan pengembangan yang terstruktur, berikut standar teknisnya:

Framework Frontend: Next.js. Sangat ideal untuk landing page karena mendukung Static Site Generation (SSG), membuat halaman dimuat dalam hitungan milidetik.

Bahasa Pemrograman: TypeScript. Memastikan keamanan tipe data (type safety) dan meminimalisir bug selama pengembangan.

Styling: Tailwind CSS. Untuk implementasi desain responsif (khususnya mobile-first) dengan cepat.

QR Code Handling: Menggunakan sistem Dynamic QR Code. Halaman ini harus di-deploy ke domain yang permanen, sehingga tautan di dalam QR fisik tidak perlu diubah meskipun URL routing internal ada yang diperbarui.

Hosting/Deployment: Vercel atau Netlify.

Performance Metric: Waktu muat (First Contentful Paint) harus di bawah 1.5 detik di jaringan 3G/4G.

6. Pengembangan Lanjutan (Future Phase - Out of Scope for V1)
Catatan untuk pengembangan di masa depan jika batch selanjutnya diperbesar:

Sistem registrasi dengan form database sendiri, tidak langsung ke WhatsApp.

Integrasi Payment Gateway (Midtrans/Xendit) untuk pembayaran instan Rp 250.000.

Dashboard admin terintegrasi untuk mengelola kuota 5 peserta secara real-time.