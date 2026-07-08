"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

/* ============================================
   CTA Section Component
   Strong conversion section at the bottom
   ============================================ */
export default function CTASection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Get started">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#1E3A8A]/20 to-cyan-100 blur-[120px] opacity-60" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1E3A8A] to-[#07162B] mb-10 shadow-[0_10px_30px_rgba(30, 58, 138,0.3)] relative"
          >
            <div className="absolute inset-[2px] bg-[#FBF6E8] rounded-[22px] z-0" />
            <Sparkles className="w-10 h-10 text-[#1E3A8A] relative z-10" />
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-[#07162B] mb-6 leading-[1.1] font-[family-name:var(--font-geist-sans)] tracking-tight">
            Ready to Take the Next Step
            <br />
            in Your <span className="gradient-text">Career?</span>
          </h2>
          <p className="text-lg lg:text-xl text-[#475569] leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you&apos;re a job seeker looking for opportunities or a
            company seeking top talent, NetNova is here to help.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="group relative px-10 py-4 rounded-xl shadow-[0_8px_25px_rgba(212,160,23,0.3)] hover:shadow-[0_12px_35px_rgba(212,160,23,0.4)] transition-all duration-300 bg-[#D4A017] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0F2D5C] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-2 text-sm font-bold text-[#0F2D5C] group-hover:text-[#FBF6E8] transition-colors duration-300">
                Get Started Now
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/services"
              className="group relative overflow-hidden px-10 py-4 rounded-xl border border-[#94A3B8]/30 bg-[#FBF6E8] transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[#1E3A8A]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 text-sm font-bold text-[#475569]">
                Explore Services
              </span>
            </Link>
          </div>

          {/* Trust note */}
          <p className="text-sm font-medium text-[#475569] mt-10">
            Trusted by <span className="text-[#07162B] font-bold">500+ candidates</span> and <span className="text-[#07162B] font-bold">150+ companies</span> across India and
            beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}