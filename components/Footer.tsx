import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  LOCATION,
  LOCATION_LINK,
  WHATSAPP_LINK,
} from "@/lib/constants";

const FOOTER_LINKS = [
  { href: "#program", label: "Program" },
  { href: "#manfaat", label: "Manfaat" },
  { href: "#jadwal", label: "Jadwal" },
  { href: "#harga", label: "Harga" },
];

export default function Footer() {
  return (
    <footer className="bg-brown-700 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-9 h-9 rounded-full bg-cream text-brown-700 flex items-center justify-center font-display font-bold text-sm">
                <img src="/assets/logo_lughohstudy.png" alt="logo lughohstudy" />
              </span>
              <span className="font-display font-bold text-cream">
                LughohStudy
              </span>
            </div>
            <p className="font-script text-mauve-light text-xl">
              Sibuk Sambil Belajar
            </p>
          </div>
          <div>
            <p className="text-mauve-light font-bold text-sm mb-3">
              Navigasi
            </p>
            <ul className="space-y-2 text-cream/80 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-mauve-light font-bold text-sm mb-3">Kontak</p>
            <ul className="space-y-2 text-cream/80 text-sm">
              <li>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors underline decoration-cream/30 underline-offset-4"
                >
                  Instagram {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors underline decoration-cream/30 underline-offset-4"
                >
                  WhatsApp 0813-1824-4959
                </a>
              </li>
              <li>
                <a
                  href={LOCATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors underline decoration-cream/30 underline-offset-4"
                >
                  {LOCATION}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/15 pt-6 text-center text-cream/50 text-xs">
          © 2026 LughohStudy. Belajar sekali, paham selamanya.
        </div>
      </div>
    </footer>
  );
}
