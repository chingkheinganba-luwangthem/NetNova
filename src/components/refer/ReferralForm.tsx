"use client";

import { motion } from "framer-motion";
import { User, Megaphone, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

/* ============================================
   Referral Form Component
   Adapted from the sci-fi mockup to NetNova's dark/gold theme
   ============================================ */
export default function ReferralForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="referral-form" className="py-12 lg:py-16 bg-[#07162B] scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#07162B] border border-[#1E3A8A]/40 rounded-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow effect behind the form */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#1E3A8A]/20 blur-[100px] pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            
            {/* Reference Source Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-[#D9B24C]" />
                <h3 className="text-[#D9B24C] text-sm font-bold tracking-widest uppercase font-[family-name:var(--font-geist-sans)]">
                  Reference Source
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="sourceName" className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="sourceName"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-[#0F2D5C]/50 border border-[#1E3A8A]/60 rounded-xl px-4 py-2.5 text-sm text-[#FBF6E8] placeholder-[#475569] focus:outline-none focus:border-[#D9B24C] focus:ring-1 focus:ring-[#D9B24C] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="sourceEmail" className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block">
                    Email Terminal
                  </label>
                  <input
                    type="email"
                    id="sourceEmail"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[#0F2D5C]/50 border border-[#1E3A8A]/60 rounded-xl px-4 py-2.5 text-sm text-[#FBF6E8] placeholder-[#475569] focus:outline-none focus:border-[#D9B24C] focus:ring-1 focus:ring-[#D9B24C] transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="sourcePhone" className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block">
                    Primary Contact No.
                  </label>
                  <input
                    type="tel"
                    id="sourcePhone"
                    required
                    placeholder="+1 xxx-xxxx"
                    className="w-full bg-[#0F2D5C]/50 border border-[#1E3A8A]/60 rounded-xl px-4 py-2.5 text-sm text-[#FBF6E8] placeholder-[#475569] focus:outline-none focus:border-[#D9B24C] focus:ring-1 focus:ring-[#D9B24C] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1E3A8A]/50 to-transparent" />

            {/* Talent Destination Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Megaphone className="w-5 h-5 text-[#D9B24C]" />
                <h3 className="text-[#D9B24C] text-sm font-bold tracking-widest uppercase font-[family-name:var(--font-geist-sans)]">
                  Talent Destination
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="targetName" className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block">
                    Referral Full Name
                  </label>
                  <input
                    type="text"
                    id="targetName"
                    required
                    placeholder="Candidate name"
                    className="w-full bg-[#0F2D5C]/50 border border-[#1E3A8A]/60 rounded-xl px-4 py-2.5 text-sm text-[#FBF6E8] placeholder-[#475569] focus:outline-none focus:border-[#D9B24C] focus:ring-1 focus:ring-[#D9B24C] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="targetEmail" className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block">
                    Referral Email
                  </label>
                  <input
                    type="email"
                    id="targetEmail"
                    required
                    placeholder="candidate@email.com"
                    className="w-full bg-[#0F2D5C]/50 border border-[#1E3A8A]/60 rounded-xl px-4 py-2.5 text-sm text-[#FBF6E8] placeholder-[#475569] focus:outline-none focus:border-[#D9B24C] focus:ring-1 focus:ring-[#D9B24C] transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="targetPhone" className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block">
                    Referral Contact No.
                  </label>
                  <input
                    type="tel"
                    id="targetPhone"
                    required
                    placeholder="+1 xxx-xxxx"
                    className="w-full bg-[#0F2D5C]/50 border border-[#1E3A8A]/60 rounded-xl px-4 py-2.5 text-sm text-[#FBF6E8] placeholder-[#475569] focus:outline-none focus:border-[#D9B24C] focus:ring-1 focus:ring-[#D9B24C] transition-all"
                  />
                </div>
                
                {/* Opt-in Checkbox */}
                <div className="flex items-start gap-3 md:col-span-2 pt-2">
                  <input
                    type="checkbox"
                    id="referralOptIn"
                    required
                    className="mt-1 w-4 h-4 rounded border-[#1E3A8A]/20 bg-[#0F2D5C]/50 text-[#D9B24C] focus:ring-[#D9B24C] cursor-pointer"
                  />
                  <label htmlFor="referralOptIn" className="text-[11px] text-[#94A3B8] leading-relaxed cursor-pointer">
                    By opting in for text messages, you agree to receive messages from NetNova Technologies at the number provided. Message frequency varies. Msg & data rates may apply.{" "}
                    <Link href="/privacy-policy" className="text-[#D9B24C] hover:underline" target="_blank">
                      View our Privacy Policy
                    </Link>{" "}
                    for more information.
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden group bg-[#D9B24C] text-[#07162B] py-3 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_10px_30px_rgba(217,178,76,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? "Processing..." : isSuccess ? "Initialized Successfully!" : "Initialize"}
                  {!isSubmitting && !isSuccess && <Send className="w-4 h-4" />}
                </span>
              </button>
            </div>
            
          </form>
        </motion.div>
      </div>
    </section>
  );
}
