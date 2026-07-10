"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle2, Loader2, Crown, Zap, ShieldCheck } from "lucide-react";
import { toast } from "react-hot-toast";

const planDetails: Record<string, { name: string; price: string; percentage: string; duration: string; icon: any; color: string; border: string }> = {
  core: { name: "Core Plan", price: "$1,500", percentage: "12%", duration: "9 months", icon: Zap, color: "text-cyan-500", border: "border-cyan-500/30" },
  prime: { name: "Prime Plan", price: "$2,500", percentage: "11%", duration: "9 months", icon: ShieldCheck, color: "text-purple-400", border: "border-purple-500/30" },
  premium: { name: "Premium Plan", price: "$3,500", percentage: "10%", duration: "9 months", icon: Crown, color: "text-[#D9B24C]", border: "border-[#D9B24C]/30" },
};

export default function EnrollClient() {
  const searchParams = useSearchParams();
  const planQuery = searchParams.get("plan");
  const [selectedPlanId, setSelectedPlanId] = useState<string>("core");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (planQuery && planDetails[planQuery]) {
      setSelectedPlanId(planQuery);
    }
  }, [planQuery]);

  const activePlan = planDetails[selectedPlanId] || planDetails["core"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Let the native form submission proceed
    setLoading(true);
  };

  return (
    <div className="min-h-screen bg-[#07162B] text-[#FBF6E8] pt-24 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1E3A8A] to-transparent opacity-50" />
      <div className="absolute top-20 left-0 w-[500px] h-[500px] rounded-full bg-[#1E3A8A]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-[#D9B24C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex flex-col items-center">

        {/* Back Link */}
        <div className="w-full max-w-2xl mb-6">
          <Link href="/alliance-hub" className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Plans
          </Link>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-[#0F2D5C]/40 border border-[#1E3A8A]/50 rounded-3xl p-8 md:p-12 backdrop-blur-md"
        >
          {/* Header */}
          <div className="mb-8">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#07162B] border ${activePlan.border} mb-4`}>
              <activePlan.icon className={`w-4 h-4 ${activePlan.color}`} />
              <span className={`text-xs font-bold uppercase tracking-wider ${activePlan.color}`}>
                {activePlan.name} — {activePlan.price}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Enrollment Application</h1>
            <p className={`text-sm font-medium ${activePlan.color}`}>
              + {activePlan.percentage} of your annual package (1st year only) • {activePlan.duration} program
            </p>
          </div>

          {/* Form */}
          <form 
            action="https://formsubmit.co/chingkheinganbaluwangthem@gmail.com" 
            method="POST" 
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="New Alliance Hub Enrollment" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="Selected Plan" value={`${activePlan.name} - ${activePlan.price}`} />
            <input type="hidden" name="_next" value="https://net-nova-itan-ig8bwpa8u-chingkheinganba-luwangthems-projects.vercel.app/alliance-hub?success=true" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Full Name*</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full bg-transparent border-b border-[#1E3A8A] focus:border-[#D9B24C] px-0 py-2 text-white outline-none transition-colors placeholder:text-[#475569]"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-[#1E3A8A] focus:border-[#D9B24C] px-0 py-2 text-white outline-none transition-colors placeholder:text-[#475569]"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Phone (+1)*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-transparent border-b border-[#1E3A8A] focus:border-[#D9B24C] px-0 py-2 text-white outline-none transition-colors placeholder:text-[#475569]"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="role" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Target Role (US Market)</label>
                <input
                  type="text"
                  id="role"
                  name="targetRole"
                  className="w-full bg-transparent border-b border-[#1E3A8A] focus:border-[#D9B24C] px-0 py-2 text-white outline-none transition-colors placeholder:text-[#475569]"
                  placeholder="Software Engineer"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="plan" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Plan Selection*</label>
              <select
                id="plan"
                value={selectedPlanId}
                onChange={(e) => setSelectedPlanId(e.target.value)}
                className="w-full bg-[#07162B] border-b border-[#1E3A8A] focus:border-[#D9B24C] px-0 py-3 text-white outline-none transition-colors appearance-none cursor-pointer"
              >
                {Object.entries(planDetails).map(([id, plan]) => (
                  <option key={id} value={id}>
                    {plan.name} — {plan.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Additional Info / Message</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full bg-transparent border-b border-[#1E3A8A] focus:border-[#D9B24C] px-0 py-2 text-white outline-none transition-colors placeholder:text-[#475569] resize-none"
                placeholder="Tell us about your background or any specific requirements..."
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="privacy"
                required
                className="w-4 h-4 rounded border-[#1E3A8A] bg-[#07162B] accent-[#D9B24C]"
              />
              <label htmlFor="privacy" className="text-sm text-[#94A3B8]">
                I agree with NetNova's <Link href="/privacy-policy" className="text-[#D9B24C] hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 border border-[#D9B24C]/40 text-[#0F2D5C] bg-[#D9B24C] hover:bg-[#FBF6E8] hover:border-[#FBF6E8] shadow-[0_4px_20px_rgba(217,178,76,0.3)] mt-8"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Enrollment
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
