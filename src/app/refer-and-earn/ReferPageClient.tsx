"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  UserPlus,
  Briefcase,
  Gift,
  ArrowRight,
  ChevronDown,
  Trophy,
  Clock,
  DollarSign,
  Shield,
  Sparkles,
} from "lucide-react";
import ReferralForm from "@/components/refer/ReferralForm";

/* ============================================
   How It Works Steps
   ============================================ */
const steps = [
  {
    icon: UserPlus,
    step: "Step 1",
    title: "Refer a Candidate",
    description:
      "Share the candidate's details through our referral form. It takes less than 2 minutes to submit a referral.",
  },
  {
    icon: Briefcase,
    step: "Step 2",
    title: "Candidate Gets Hired",
    description:
      "Our team connects the candidate with matching opportunities. We handle screening, interviews, and placement.",
  },
  {
    icon: Gift,
    step: "Step 3",
    title: "Receive Your Reward",
    description:
      "Once the candidate is successfully placed, you receive your $500 referral reward. It's that simple!",
  },
];

/* ============================================
   Benefits Data
   ============================================ */
const benefits = [
  { icon: DollarSign, title: "Attractive Rewards", description: "Earn generous referral bonuses for every successful placement." },
  { icon: Clock, title: "Fast Payouts", description: "Rewards processed quickly after successful candidate placement." },
  { icon: Shield, title: "Transparent Process", description: "Track your referrals and rewards through a clear, honest system." },
  { icon: Trophy, title: "Unlimited Referrals", description: "No cap on how many candidates you can refer. More referrals = more rewards." },
];

/* ============================================
   FAQ Data
   ============================================ */
const faqs = [
  {
    question: "How does the referral program work?",
    answer: "Simply refer a candidate using our form or by contacting us directly. When the referred candidate gets hired through NetNova, you receive a referral reward. The entire process is transparent and trackable.",
  },
  {
    question: "Who can I refer?",
    answer: "You can refer any job-seeking professional — freshers, experienced candidates, or anyone looking for new career opportunities. There's no restriction on industry or experience level.",
  },
  {
    question: "How much can I earn per referral?",
    answer: "Rewards vary based on the role, seniority, and placement value. Contact us for the current reward structure. We offer some of the most competitive referral bonuses in the industry.",
  },
  {
    question: "When do I receive my reward?",
    answer: "Rewards are processed after the candidate successfully completes their probation period with the employer. This typically ranges from 30 to 90 days after placement.",
  },
  {
    question: "Is there a limit to how many people I can refer?",
    answer: "Absolutely not! You can refer as many candidates as you like. There's no upper limit — the more successful referrals, the more you earn.",
  },
];

/* ============================================
   FAQ Accordion Item
   ============================================ */
function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className={`relative rounded-2xl overflow-hidden border transition-all duration-500 shadow-sm hover:shadow-md ${isOpen ? 'bg-[#07162B] border-[#07162B]' : 'bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] border-[#1E3A8A]/10 hover:border-[#1E3A8A]/30'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-base font-bold pr-4 transition-colors duration-300 ${isOpen ? 'text-[#FBF6E8]' : 'text-[#07162B]'}`}>{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-all duration-300 ${
            isOpen ? "rotate-180 text-[#D9B24C]" : "text-[#1E3A8A]"
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="h-px w-full bg-[#1E3A8A]/30 mb-4" />
              <p className="text-sm text-[#CBD5E1] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ============================================
   Refer & Earn Page Client Component
   ============================================ */
export default function ReferPageClient() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-section-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                Referral Program
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-4 font-[family-name:var(--font-geist-sans)] leading-tight">
                Refer Talent.{" "}
                <span className="gradient-text">Earn Rewards.</span>
              </h1>
              <p className="text-xl font-bold text-[#D9B24C] mb-6 tracking-wide">
                Earn $500 per successful referral
              </p>
              <p className="text-lg text-muted leading-relaxed max-w-lg">
                Know talented professionals looking for their next opportunity?
                Refer them to NetNova and earn generous cash rewards for every
                successful placement.
              </p>
              <div className="mt-8">
                <Link
                  href="#referral-form"
                  className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#D4A017] text-[#0F2D5C] px-8 py-4 rounded-xl shadow-[0_4px_15px_rgba(212,160,23,0.3)] hover:shadow-[0_8px_25px_rgba(212,160,23,0.4)] transition-all"
                >
                  <div className="absolute inset-0 bg-[#0F2D5C] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                  <span className="relative z-10 flex items-center gap-2 text-sm font-bold group-hover:text-[#FBF6E8] transition-colors duration-300">
                    Start Referring Now
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden premium-shadow border border-[#1E3A8A]/10">
                <Image 
                  src="/referral-hero.png" 
                  alt="Professional receiving a reward" 
                  width={600} 
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#07162B] -z-10 shadow-lg" />
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#D9B24C]/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 lg:py-16 bg-[#FBF6E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark mb-4 font-[family-name:var(--font-geist-sans)]">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              Our referral process is simple, transparent, and rewarding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-border" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg flex items-center justify-center relative z-10">
                  <step.icon className="w-8 h-8 text-[#FBF6E8]" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-dark mb-2 font-[family-name:var(--font-geist-sans)]">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 lg:py-16 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark mb-4 font-[family-name:var(--font-geist-sans)]">
              Why Refer Through <span className="gradient-text">NetNova?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] rounded-3xl p-8 border border-[#1E3A8A]/10 h-full flex flex-col items-center text-center shadow-xl shadow-[#1E3A8A]/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(30,58,138,0.15)]"
              >
                {/* Hover slide background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#07162B] to-[#1E3A8A] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#D9B24C] to-[#FBF6E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="w-14 h-14 rounded-2xl bg-[#FBF6E8] border border-[#1E3A8A]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D9B24C] group-hover:border-[#D9B24C] transition-all duration-500 relative z-10">
                  <benefit.icon className="w-7 h-7 text-[#1E3A8A] group-hover:text-[#07162B] transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-bold text-[#07162B] mb-3 relative z-10 group-hover:text-[#FBF6E8] transition-colors duration-500">{benefit.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed relative z-10 group-hover:text-[#CBD5E1] transition-colors duration-500">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <ReferralForm />

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-[#FBF6E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark mb-4 font-[family-name:var(--font-geist-sans)]">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-bg rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#FBF6E8]/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10">
              <Sparkles className="w-10 h-10 text-[#FBF6E8]/80 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-[#FBF6E8] mb-6 font-[family-name:var(--font-geist-sans)] tracking-tight">
                Start Referring <span className="text-[#D9B24C]">Today</span>
              </h2>
              <p className="text-[#FBF6E8]/80 text-lg mb-10 max-w-lg mx-auto">
                It takes less than 2 minutes. Help someone find their dream job
                and earn rewards along the way.
              </p>
              <Link
                href="#referral-form"
                className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#D4A017] text-[#0F2D5C] px-8 py-4 rounded-xl shadow-[0_4px_15px_rgba(212,160,23,0.3)] hover:shadow-[0_8px_25px_rgba(212,160,23,0.4)] transition-all"
              >
                <div className="absolute inset-0 bg-[#0F2D5C] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-2 text-[15px] font-bold group-hover:text-[#FBF6E8] transition-colors duration-300">
                  Refer Now
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
