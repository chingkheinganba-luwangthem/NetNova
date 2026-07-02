"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Building2, TrendingUp, HeadphonesIcon } from "lucide-react";

/* ============================================
   Stats Data
   ============================================ */
const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Candidates Placed", color: "text-[#07162B]", glow: "shadow-[0_4px_20px_rgba(217, 178, 76,0.15)]" },
  { icon: Building2, value: 150, suffix: "+", label: "Hiring Partners", color: "text-[#1E3A8A]", glow: "shadow-[0_4px_20px_rgba(30, 58, 138,0.15)]" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Placement Success", color: "text-[#07162B]", glow: "shadow-[0_4px_20px_rgba(217, 178, 76,0.15)]" },
  { icon: HeadphonesIcon, value: 24, suffix: "/7", label: "Candidate Support", color: "text-[#1E3A8A]", glow: "shadow-[0_4px_20px_rgba(30, 58, 138,0.15)]" },
];

/* ============================================
   Animated Counter Hook
   ============================================ */
function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

/* ============================================
   Single Stat Card
   ============================================ */
function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCounter(stat.value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative group overflow-hidden rounded-3xl bg-[#FBF6E8] border border-[#94A3B8]/20 p-8 text-center transition-all duration-300 hover:-translate-y-2 ${stat.glow} hover:border-[#1E3A8A]/20`}
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#FBF6E8] flex items-center justify-center ${stat.color} border border-[#94A3B8]/20 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#FBF6E8] shadow-sm`}>
        <stat.icon className="w-8 h-8" />
      </div>
      <div className="relative z-10 text-4xl lg:text-5xl font-bold text-[#07162B] mb-2 font-[family-name:var(--font-geist-sans)] tracking-tight">
        {count}
        {stat.suffix}
      </div>
      <p className="relative z-10 text-sm text-[#475569] font-semibold uppercase tracking-wider">{stat.label}</p>
    </motion.div>
  );
}

/* ============================================
   Stats Section Component
   Trusted metrics with animated counters
   ============================================ */
export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-white" aria-label="Company statistics">
      {/* Section background gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#1E3A8A]/20 to-transparent" />
      
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
