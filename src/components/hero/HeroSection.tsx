"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Users,
  Briefcase,
  CheckCircle2,
  Building,
  TrendingUp,
} from "lucide-react";

/* ============================================
   Hero Section Component
   Uses the exact background image provided by the user
   with the content arranged on the left to match the mockup perfectly.
   ============================================ */

function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end, duration]);

  return count;
}

export default function HeroSection() {
  const placementsCount = useCounter(250, 2000);
  const partnersCount = useCounter(100, 2000);
  const successCount = useCounter(95, 2000);

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] bg-cover bg-[center_right] bg-no-repeat flex items-center mt-16"
      style={{ backgroundImage: "url('/hero-bg-new.jpg')" }}
    >
      {/* Mobile overlay to ensure text is readable if image crops */}
      <div className="absolute inset-0 bg-[#FBF6E8]/80 lg:bg-transparent" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 w-full">
        <div className="w-full grid lg:grid-cols-2 gap-6 items-center py-16 lg:py-0">

          {/* LEFT: Text Content - arranged exactly to fit the white curve in the mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[480px] xl:max-w-[520px]"
          >
            {/* Headline */}
            <h1 className="
  text-[2.75rem]
  sm:text-[3.25rem]
  lg:text-[3.75rem]
  xl:text-[4.25rem]
  font-black
  leading-[1.1]
  tracking-tight
  text-[#07162B]
  mb-4
">
              Connecting
              <br />
              <span className="text-[#1E3A8A]"> Talent Creating </span>
              <br />
              <span className="relative inline-block">
                Success
              </span>
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-[#475569] font-medium leading-relaxed mb-6 max-w-[440px]">
              Connecting skilled professionals with innovative companies worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#D4A017] text-[#0F2D5C] px-6 py-3 rounded-xl shadow-[0_4px_15px_rgba(212,160,23,0.3)] hover:shadow-[0_8px_25px_rgba(212,160,23,0.4)] transition-all"
              >
                <div className="absolute inset-0 bg-[#0F2D5C] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-1 text-[14px] font-bold group-hover:text-[#FBF6E8] transition-colors duration-300">
                  <Briefcase className="w-5 h-5 mr-1" />
                  Find Jobs
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/services"
                className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#FBF6E8]/80 text-[#1E3A8A] px-6 py-3 rounded-xl border-2 border-[#1E3A8A] transition-all backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-[#1E3A8A]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-2 text-[14px] font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                  Hire Talents
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 inline-flex flex-wrap lg:flex-nowrap items-center gap-0 bg-[#FBF6E8]/95 backdrop-blur-sm rounded-2xl border border-[#94A3B8]/30 shadow-lg overflow-hidden"
            >
              {/* Stat 1 */}
              <div className="flex items-center gap-2.5 px-4 py-3">
                <div className="w-9 h-9 rounded-full bg-[#1E3A8A] flex items-center justify-center text-[#FBF6E8] shrink-0 shadow-inner">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#07162B] leading-tight">
                    {placementsCount}+
                  </p>
                  <p className="text-[11px] text-[#475569] font-semibold">
                    Placements
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-[#94A3B8]/20 hidden lg:block" />

              {/* Stat 2 */}
              <div className="flex items-center gap-2.5 px-4 py-3">
                <div className="w-9 h-9 rounded-full bg-[#1E3A8A] flex items-center justify-center text-[#FBF6E8] shrink-0 shadow-inner">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#07162B] leading-tight">
                    {partnersCount}+
                  </p>
                  <p className="text-[11px] text-[#475569] font-semibold">
                    Hiring Partners
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-[#94A3B8]/20 hidden lg:block" />

              {/* Stat 3 */}
              <div className="flex items-center gap-2.5 px-4 py-3">
                <div className="w-9 h-9 rounded-full bg-[#1E3A8A] flex items-center justify-center text-[#FBF6E8] shrink-0 shadow-inner">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#07162B] leading-tight">
                    {successCount}%
                  </p>
                  <p className="text-[11px] text-[#475569] font-semibold">
                    Success Rate
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-[#94A3B8]/20 hidden lg:block" />

              {/* Stat 4 */}
              <div className="flex items-center gap-2.5 px-4 py-3">
                <div className="w-9 h-9 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A] shrink-0 border border-[#1E3A8A]/20">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#07162B] leading-tight">
                    Global
                  </p>
                  <p className="text-[11px] text-[#475569] font-semibold">
                    Talent Reach
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Empty — background image of the office handshake shows through */}
          <div className="hidden lg:block h-full w-full" />
        </div>
      </div>
    </section>
  );
}
