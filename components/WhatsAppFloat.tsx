"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay appearance by 2 seconds for bounce-in effect
    const timeout = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-rust text-cream shadow-xl flex items-center justify-center focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-rust"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.1, 0.95, 1],
        opacity: 1,
        boxShadow: [
          "0 0 0 0 rgba(162, 84, 46, 0.5)",
          "0 0 0 16px rgba(162, 84, 46, 0)",
          "0 0 0 0 rgba(162, 84, 46, 0)",
        ],
      }}
      transition={{
        scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.6 },
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.6, // Start pulsing after entrance
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}
