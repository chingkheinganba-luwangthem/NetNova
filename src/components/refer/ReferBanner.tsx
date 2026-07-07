"use client";

import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

/* ============================================
   Refer & Earn Banner Component
   Professional Corporate CTA Section
   ============================================ */
export default function ReferBanner() {
  return (
    <section className="py-16 lg:py-24 bg-[#FBF6E8]" aria-label="Refer and earn program">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="relative rounded-3xl p-10 lg:p-16 overflow-hidden bg-[#07162B] border border-[#1E3A8A]/30 shadow-2xl">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-[#1E3A8A]/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            
            {/* Content Left */}
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/30 border border-[#1E3A8A]/50 mb-6">
                <Users className="w-4 h-4 text-[#D9B24C]" />
                <span className="text-sm font-medium text-[#FBF6E8]">
                  Corporate Referral Program
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FBF6E8] mb-6 leading-tight font-[family-name:var(--font-geist-sans)] tracking-tight">
                Refer Top Talent.
                <br />
                <span className="text-[#D9B24C]">Earn Professional Rewards.</span>
              </h2>

              {/* Description */}
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-xl">
                Know exceptional professionals looking for their next opportunity? 
                Connect them with NetNova and earn exciting rewards upon their successful placement.
              </p>
            </div>

            {/* CTA Right */}
            <div className="shrink-0">
              <Link
                href="/refer-and-earn#referral-form"
                className="group relative overflow-hidden inline-flex items-center gap-3 bg-[#D9B24C] text-[#07162B] px-8 py-4 rounded-xl font-bold transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(217,178,76,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Referring Now
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
