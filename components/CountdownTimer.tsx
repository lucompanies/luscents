"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function CountdownTimer({ target }: { target: string }) {
  const [time, setTime] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Minutes", value: time?.minutes },
    { label: "Seconds", value: time?.seconds }
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-5">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-3 sm:gap-5">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border border-gold/30 rounded-sm flex items-center justify-center bg-onyx/60 backdrop-blur-sm">
              <span className="font-display text-2xl sm:text-3xl text-gold tabular-nums">
                {u.value !== undefined ? String(u.value).padStart(2, "0") : "--"}
              </span>
            </div>
            <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-parchment/50">{u.label}</span>
          </div>
          {i < units.length - 1 && <span className="text-gold/40 text-xl -mt-4">:</span>}
        </div>
      ))}
    </div>
  );
}
