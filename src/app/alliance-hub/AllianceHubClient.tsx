"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Users, Target, Award, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Zap, Crown } from "lucide-react";

// Plans data
const plans = [
  {
    id: "core",
    name: "Core Plan",
    icon: Zap,
    badge: "MOST POPULAR",
    badgeColor: "bg-cyan-500/10 text-cyan-500 border border-cyan-500/20",
    iconColor: "text-cyan-500",
    initialPrice: "$1,500",
    percentage: "12%",
    duration: "9 months",
    features: [
      "Interview Preparation",
      "Expert CV Coach Consultation",
      "One on One RUS",
      "Dedicated mentor for Guidance",
      "Full-Time / W2 Opportunity Marketing",
      "Daily Applications (100-150/day)",
      "Interview Preparation Material",
      "Resume Optimization",
      "LinkedIn and Job Portals Optimization",
      "Resume Marketing",
      "Dedicated Recruiters",
      "Weekly Report",
    ],
  },
  {
    id: "prime",
    name: "Prime Plan",
    icon: ShieldCheck,
    badge: "BEST VALUE",
    badgeColor: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    iconColor: "text-purple-400",
    initialPrice: "$2,500",
    percentage: "11%",
    duration: "9 months",
    features: [
      "Everything in Core Plan",
      "Live Mock Interview Session",
      "Tailored Resume Applications",
      "Technical Queries Sessions (05)",
      "Email Support",
      "Technical Assistance",
      "Technical Expert Sessions",
      "Job Description Sessions (05)",
      "Assessment Support on Coding (05)",
      "AIS (Automated Interview Setup System)",
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    icon: Crown,
    badge: "ALL-INCLUSIVE",
    badgeColor: "bg-[#D9B24C]/10 text-[#D9B24C] border border-[#D9B24C]/20",
    iconColor: "text-[#D9B24C]",
    initialPrice: "$3,500",
    percentage: "10%",
    duration: "9 months",
    features: [
      "Everything in Core & Prime Plans",
      "Additional Premium Support",
      "Full Access to Technical Support Sessions",
      "Refund Policy (T&C Apply)",
      "Tailored Resume Applications",
      "Priority Placement",
      "120 to 150 days job guarantee",
    ],
  },
];

export default function AllianceHubClient() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>("core");

  return (
    <div className="min-h-screen bg-[#07162B] text-[#FBF6E8] pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1E3A8A] to-transparent opacity-50" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#1E3A8A]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] rounded-full bg-[#D9B24C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1E3A8A]/20 border border-[#D9B24C]/30 text-[#D9B24C] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_4px_15px_rgba(217,178,76,0.1)]">
            Alliance Hub
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Placement Support <span className="text-[#D9B24C]">Packages</span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed">
            Find the perfect plan for your goals and benefit from our complete career
            guidance and placement assistance.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto"
        >
          {[
            { icon: Users, val: "56", label: "Open Candidate Slots" },
            { icon: Target, val: "56", label: "Active Recruiters Available" },
            { icon: Award, val: "15", label: "Technical Trainers Available" }
          ].map((stat, i) => (
            <div key={i} className="bg-[#0F2D5C]/40 border border-[#1E3A8A]/50 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 backdrop-blur-sm hover:border-[#D9B24C]/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-[#07162B] flex items-center justify-center border border-[#1E3A8A]">
                <stat.icon className="w-6 h-6 text-[#D9B24C]" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-1">{stat.val}</h3>
                <p className="text-sm text-[#94A3B8]">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pricing Plans */}
        <div className="max-w-5xl mx-auto space-y-6">
          {plans.map((plan, index) => {
            const isExpanded = expandedPlan === plan.id;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'bg-[#0F2D5C]/80 border-[#1E3A8A]' : 'bg-[#07162B] border-[#1E3A8A]/40 hover:border-[#1E3A8A]'
                }`}
              >
                {/* Plan Header */}
                <div 
                  className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                  onClick={() => setExpandedPlan(isExpanded ? null : plan.id)}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <plan.icon className={`w-6 h-6 ${plan.iconColor}`} />
                        <h3 className={`text-2xl font-bold ${plan.iconColor}`}>{plan.name}</h3>
                      </div>
                      {plan.badge && (
                        <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${plan.badgeColor}`}>
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold text-white">{plan.initialPrice}</span>
                      <span className="text-[#94A3B8] text-lg font-medium">initially</span>
                    </div>
                    <p className="text-sm text-[#94A3B8] mt-2 font-medium">
                      + <span className={plan.iconColor}>{plan.percentage}</span> of your annual package 1st year only • <span className="text-white">{plan.duration}</span> program
                    </p>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-4 border-t border-[#1E3A8A]/30 md:border-t-0 pt-4 md:pt-0">
                    <span className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${plan.iconColor}`}>
                      {isExpanded ? 'SHOW LESS' : 'SHOW MORE'}
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-4 border-t border-[#1E3A8A]/30">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                          {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${plan.iconColor}`} />
                              <span className="text-[#E2EAF4]">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Link 
                          href={`/alliance-hub/enroll?plan=${plan.id}`}
                          className={`flex items-center justify-center w-full py-4 rounded-xl border transition-all duration-300 font-bold tracking-wide uppercase gap-2 
                            ${plan.id === 'core' ? 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10' : 
                              plan.id === 'prime' ? 'border-purple-500/30 text-purple-400 hover:bg-purple-500/10' : 
                              'border-[#D9B24C]/40 text-[#D9B24C] hover:bg-[#D9B24C]/10'}`}
                        >
                          <ArrowRight className="w-5 h-5" />
                          Enroll Now
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 max-w-5xl mx-auto bg-[#0F2D5C]/30 border border-[#1E3A8A]/30 rounded-3xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-[#D9B24C] font-bold uppercase tracking-widest text-sm mb-4">
            <ShieldCheck className="w-5 h-5" />
            Payment Note
          </div>
          <p className="text-[#94A3B8] leading-relaxed max-w-3xl mx-auto">
            The upfront fee covers our entire service engagement. The percentage will be payable 
            from your paychecks after getting a job from your new US employer.{' '}
            <strong className="text-white">No hidden charges. No risk.</strong>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
