"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  FileSearch,
  GraduationCap,
  ClipboardCheck,
  Building,
  UserSearch,
  ArrowRight,
} from "lucide-react";

/* ============================================
   Services Preview Data
   ============================================ */
const services = [
  {
    icon: Briefcase,
    title: "Job Placement",
    description: "Get matched with top companies and roles that align with your career goals and expertise.",
    color: "from-[#1E3A8A] to-[#07162B]",
  },
  {
    icon: FileSearch,
    title: "Resume Assistance",
    description: "Professional resume reviews and optimization to make your profile stand out to recruiters.",
    color: "from-[#07162B] to-[#1E3A8A]",
  },
  {
    icon: GraduationCap,
    title: "Career Guidance",
    description: "Expert counselors help you navigate career transitions and plan your professional growth.",
    color: "from-[#1E3A8A] to-[#07162B]",
  },
  {
    icon: ClipboardCheck,
    title: "Interview Preparation",
    description: "Mock interviews, tips, and strategies to help you ace that all-important interview.",
    color: "from-[#07162B] to-[#1E3A8A]",
  },
  {
    icon: Building,
    title: "Campus Recruitment",
    description: "End-to-end campus hiring solutions for colleges and universities across the country.",
    color: "from-[#1E3A8A] to-[#07162B]",
  },
  {
    icon: UserSearch,
    title: "Corporate Hiring",
    description: "Tailored talent acquisition strategies for enterprises seeking exceptional candidates.",
    color: "from-[#07162B] to-[#1E3A8A]",
  },
];

/* ============================================
   ServicesPreview Section Component
   Beautiful card grid preview of services
   ============================================ */
export default function ServicesPreviewSection() {
  return (
    <section className="section-padding bg-[#FBF6E8] relative overflow-hidden" aria-label="Our services">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-r from-[#1E3A8A]/20 to-cyan-100 blur-[120px] pointer-events-none rounded-full opacity-50" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_4px_15px_rgba(30, 58, 138,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] animate-pulse" />
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#07162B] mb-6 font-[family-name:var(--font-geist-sans)] tracking-tight">
            Comprehensive <span className="gradient-text">Placement Solutions</span>
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">
            From job seekers to enterprise clients, we offer end-to-end
            placement and recruitment services designed for success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-3xl p-8 border border-[#94A3B8]/20 premium-shadow card-hover overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#1E3A8A]/10 border border-[#1E3A8A]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <service.icon className="w-6 h-6 text-[#1E3A8A]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#07162B] mb-3 font-[family-name:var(--font-geist-sans)] group-hover:text-[#1E3A8A] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed group-hover:text-[#475569] transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[#475569] font-bold bg-[#FBF6E8] border border-[#94A3B8]/30 hover:bg-[#FBF6E8] transition-all duration-300 hover:shadow-md group"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-[#1E3A8A]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
