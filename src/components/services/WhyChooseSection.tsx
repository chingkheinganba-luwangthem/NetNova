"use client";

import { motion } from "framer-motion";
import {
  Target,
  Briefcase,
  Users,
  TrendingUp,
  Focus,
  Globe,
} from "lucide-react";

/* ============================================
   Feature Cards Data
   ============================================ */
const features = [
  {
    icon: Globe,
    title: "Global Talent Network",
    description:
      "Access a diverse network of skilled professionals across industries and locations to meet your evolving workforce needs.",
  },
  {
    icon: Target,
    title: "Industry Expertise",
    description:
      "Leverage our market knowledge and hiring insights to identify the right talent with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Faster Hiring Process",
    description:
      "Reduce time-to-hire through streamlined recruitment strategies and efficient candidate matching.",
  },
  {
    icon: Focus,
    title: "Verified Candidates",
    description:
      "Connect with pre-screened professionals whose qualifications and experience have been thoroughly evaluated.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Receive personalized assistance from recruitment experts committed to your hiring success.",
  },
  {
    icon: Briefcase,
    title: "Long-Term Partnerships",
    description:
      "Partner with us for sustainable talent solutions that support long-term business growth.",
  },
];

/* ============================================
   WhyChoose Section Component
   Dark theme feature grid matching the design
   ============================================ */
export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-[#07162B] relative overflow-hidden" aria-label="Why choose NetNova">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FBF6E8] mb-6 tracking-tight">
            Why Choose <span className="text-[#D9B24C]">NetNova?</span>
          </h2>
          <p className="text-[#CBD5E1] text-lg leading-relaxed max-w-3xl mx-auto">
            NetNova Technologies is a modern IT recruitment and staffing company focused on connecting
            businesses with exceptional technology professionals
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#07162B] rounded-2xl p-8 border border-[#1E3A8A]/40 hover:border-[#D9B24C]/60 hover:shadow-[0_8px_30px_rgba(30,58,138,0.15)] transition-all duration-300 flex flex-col group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A]/20 border border-[#1E3A8A]/50 group-hover:bg-[#1E3A8A] group-hover:border-[#1E3A8A] flex items-center justify-center mb-6 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-[#D9B24C]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#FBF6E8] mb-3 group-hover:text-[#D9B24C] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

