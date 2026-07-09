"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Lock, Key, Eye, EyeOff, X, ArrowRight } from "lucide-react";

export default function LockWrapper({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === "netnova2026") {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-[#07162B]/90 backdrop-blur-md overflow-hidden">
        {/* Background elements to maintain brand feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1E3A8A] to-transparent opacity-50" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#1E3A8A]/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] rounded-full bg-[#D9B24C]/5 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={error ? { x: [-10, 10, -10, 10, 0] } : { opacity: 1, scale: 1 }}
          transition={{ duration: error ? 0.4 : 0.5 }}
          className="w-full max-w-[420px] bg-[#0A0B14] rounded-3xl border border-white/5 relative shadow-2xl z-10"
        >
          {/* Top glow matching the design */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-[#7C3AED] shadow-[0_0_20px_10px_rgba(124,58,237,0.4)] rounded-full" />

          {/* Close link to home */}
          <Link href="/" className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </Link>

          <div className="p-8 md:p-10 flex flex-col items-center">
            {/* Lock Icon */}
            <div className="w-16 h-16 rounded-2xl border border-[#7C3AED]/30 flex items-center justify-center mb-6 bg-[#7C3AED]/10 shadow-[0_0_15px_rgba(124,58,237,0.15)]">
              <Lock className="w-7 h-7 text-[#7C3AED]" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-3">Alliance Hub</h2>
            <p className="text-[#94A3B8] text-sm text-center mb-8 leading-relaxed max-w-[280px]">
              Secure access for authorized partners.<br />
              Please enter your access code below.
            </p>

            <form onSubmit={handleUnlock} className="w-full">
              <div
                className={`relative flex items-center mb-6 rounded-xl border ${
                  error ? "border-red-500/50 bg-red-500/5" : "border-[#7C3AED]/30 bg-[#0F101A]"
                } overflow-hidden focus-within:border-[#7C3AED] transition-colors group`}
              >
                <div className="pl-4 pr-2 text-gray-500 group-focus-within:text-[#7C3AED] transition-colors">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Access Code"
                  value={accessCode}
                  onChange={(e) => {
                    setAccessCode(e.target.value);
                    setError(false);
                  }}
                  className="flex-1 bg-transparent py-4 text-white text-sm outline-none focus:outline-none focus:ring-0 border-none placeholder:text-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-4 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {error && (
                <p className="text-red-400 text-xs text-center mb-4 mt--2">Incorrect access code. Please try again.</p>
              )}

              <button
                type="submit"
                className="group relative overflow-hidden w-full flex items-center justify-center gap-2 bg-[#D4A017] text-[#0F2D5C] px-6 py-4 rounded-xl shadow-[0_4px_15px_rgba(212,160,23,0.3)] hover:shadow-[0_8px_25px_rgba(212,160,23,0.4)] transition-all"
              >
                <div className="absolute inset-0 bg-[#0F2D5C] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-[14px] font-bold group-hover:text-[#FBF6E8] transition-colors duration-300">
                  Enter Portal
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}
