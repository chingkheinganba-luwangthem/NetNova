"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Lightbulb,
  Users,
  Rocket,
  Award,
} from "lucide-react";

/* ============================================
   Core Values Data
   ============================================ */
const coreValues = [
  { icon: Shield, title: "Integrity", description: "Transparent processes and honest communication in every interaction." },
  { icon: Heart, title: "Empathy", description: "We understand the challenges of job seeking and hiring — we've been there." },
  { icon: Lightbulb, title: "Innovation", description: "Leveraging AI and modern tools to deliver smarter placement solutions." },
  { icon: Users, title: "Collaboration", description: "Working hand-in-hand with candidates and employers for mutual success." },
  { icon: Rocket, title: "Excellence", description: "Setting the highest standards in recruitment quality and speed." },
  { icon: Award, title: "Accountability", description: "Taking ownership of outcomes and continuously improving our processes." },
];

/* ============================================
   About Page Client Component
   Full about page with story, mission, values
   ============================================ */
export default function AboutPageClient() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-12 bg-section-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-[family-name:var(--font-geist-sans)]">
              The Story Behind{" "}
              <span className="gradient-text">NetNova Technologies</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              We started with a simple belief — every talented individual
              deserves access to the right opportunity. Today, we&apos;re making
              that vision a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Image */}
      <section className="py-12 lg:py-16 bg-[#FBF6E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="rounded-3xl overflow-hidden premium-shadow">
              <Image
                src="/about-team.png"
                alt="NetNova Technologies team collaborating in a modern office environment"
                width={1200}
                height={600}
                className="w-full h-auto max-h-[600px] object-cover"
                priority
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl gradient-bg -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-3xl bg-accent/20 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 lg:py-16 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] rounded-3xl p-8 lg:p-10 border border-[#1E3A8A]/10 shadow-xl shadow-[#1E3A8A]/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(30,58,138,0.15)]"
            >
              {/* Hover slide background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#07162B] to-[#1E3A8A] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#D9B24C] to-[#FBF6E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#FBF6E8] border border-[#1E3A8A]/10 flex items-center justify-center mb-6 group-hover:bg-[#D9B24C] group-hover:border-[#D9B24C] transition-all duration-500">
                  <Target className="w-8 h-8 text-[#1E3A8A] group-hover:text-[#07162B] transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#07162B] mb-4 font-[family-name:var(--font-geist-sans)] group-hover:text-[#FBF6E8] transition-colors duration-500">
                  Our Mission
                </h3>
                <p className="text-[#475569] leading-relaxed group-hover:text-[#CBD5E1] transition-colors duration-500">
                  To empower individuals with career opportunities that match
                  their skills and aspirations, while helping organizations build
                  high-performing teams through intelligent, ethical, and fast
                  recruitment practices.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] rounded-3xl p-8 lg:p-10 border border-[#1E3A8A]/10 shadow-xl shadow-[#1E3A8A]/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(30,58,138,0.15)]"
            >
              {/* Hover slide background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#07162B] to-[#1E3A8A] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#D9B24C] to-[#FBF6E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#FBF6E8] border border-[#1E3A8A]/10 flex items-center justify-center mb-6 group-hover:bg-[#D9B24C] group-hover:border-[#D9B24C] transition-all duration-500">
                  <Eye className="w-8 h-8 text-[#1E3A8A] group-hover:text-[#07162B] transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#07162B] mb-4 font-[family-name:var(--font-geist-sans)] group-hover:text-[#FBF6E8] transition-colors duration-500">
                  Our Vision
                </h3>
                <p className="text-[#475569] leading-relaxed group-hover:text-[#CBD5E1] transition-colors duration-500">
                  To become India&apos;s most trusted and innovative placement
                  consultancy, setting new benchmarks in recruitment quality,
                  candidate satisfaction, and employer partnerships across the
                  globe.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 lg:py-16 bg-[#FBF6E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4 font-[family-name:var(--font-geist-sans)]">
              Values That <span className="gradient-text">Drive Us</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative p-7 rounded-2xl bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] border border-[#1E3A8A]/10 shadow-xl shadow-[#1E3A8A]/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(30,58,138,0.15)]"
              >
                {/* Hover slide background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#07162B] to-[#1E3A8A] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#D9B24C] to-[#FBF6E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#FBF6E8] border border-[#1E3A8A]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9B24C] group-hover:border-[#D9B24C] transition-all duration-500">
                    <value.icon className="w-7 h-7 text-[#1E3A8A] group-hover:text-[#07162B] transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#07162B] mb-2 group-hover:text-[#FBF6E8] transition-colors duration-500">{value.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed group-hover:text-[#CBD5E1] transition-colors duration-500">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
