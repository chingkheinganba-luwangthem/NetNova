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
              className="group relative bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] rounded-3xl p-8 border border-[#1E3A8A]/10 shadow-xl shadow-[#1E3A8A]/10 card-hover overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(30,58,138,0.15)]"
            >
              {/* Hover background (Slides down from top) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#07162B] to-[#1E3A8A] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
              
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#D9B24C] to-[#FBF6E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#FBF6E8] border border-[#1E3A8A]/10 flex items-center justify-center mb-6 group-hover:bg-[#D9B24C] group-hover:border-[#D9B24C] transition-all duration-500">
                  <service.icon className="w-8 h-8 text-[#1E3A8A] group-hover:text-[#07162B] transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#07162B] mb-4 font-[family-name:var(--font-geist-sans)] group-hover:text-[#FBF6E8] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed group-hover:text-[#CBD5E1] transition-colors duration-500">
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
            className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#D4A017] text-[#0F2D5C] px-8 py-4 rounded-xl shadow-[0_4px_15px_rgba(212,160,23,0.3)] hover:shadow-[0_8px_25px_rgba(212,160,23,0.4)] transition-all"
          >
            <div className="absolute inset-0 bg-[#0F2D5C] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10 flex items-center gap-2 text-sm font-bold group-hover:text-[#FBF6E8] transition-colors duration-300">
              Explore All Services
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
