"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: Date): TimeLeft {
  const now = new Date().getTime();
  const diff = targetDate.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function Digit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-brown-700 text-cream font-display font-extrabold text-2xl sm:text-3xl px-3 py-2 sm:px-4 sm:py-3 rounded-xl min-w-[3rem] sm:min-w-[3.5rem] text-center shadow-md overflow-hidden">
        <span className="countdown-digit-flip inline-block" key={value}>
          {value}
        </span>
        {/* Decorative center line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-cream/10" />
      </div>
      <span className="text-brown-500 text-[10px] sm:text-xs font-semibold mt-1.5 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="text-brown-500 font-display font-bold text-xl sm:text-2xl mt-1 mx-0.5">
      :
    </span>
  );
}

export default function CountdownTimer({
  targetDate,
}: {
  targetDate: string; // e.g. "2026-09-28"
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const target = new Date(targetDate + "T23:59:59");

    const update = () => {
      const tl = getTimeLeft(target);
      setTimeLeft(tl);
      if (tl.days === 0 && tl.hours === 0 && tl.minutes === 0 && tl.seconds === 0) {
        setIsExpired(true);
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) return null;

  if (isExpired) {
    return (
      <div className="bg-rust/10 border border-rust/30 rounded-2xl px-5 py-3 text-center">
        <span className="text-rust font-display font-bold text-lg">
          Pendaftaran Ditutup
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-brown-500 text-xs font-semibold tracking-wide uppercase">
        Pendaftaran ditutup dalam
      </p>
      <div className="flex items-start gap-1.5 sm:gap-2">
        <Digit value={pad(timeLeft.days)} label="Hari" />
        <Separator />
        <Digit value={pad(timeLeft.hours)} label="Jam" />
        <Separator />
        <Digit value={pad(timeLeft.minutes)} label="Menit" />
        <Separator />
        <Digit value={pad(timeLeft.seconds)} label="Detik" />
      </div>
    </div>
  );
}
