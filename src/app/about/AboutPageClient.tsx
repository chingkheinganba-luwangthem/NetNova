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
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-section-bg overflow-hidden">
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

      {/* Company Story + Image */}
      <section className="section-padding bg-[#FBF6E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-dark mb-6 font-[family-name:var(--font-geist-sans)]">
                Why We Started
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  NetNova Technologies was born from the frustration of watching
                  talented individuals struggle to find the right career
                  opportunities while companies searched endlessly for qualified
                  candidates.
                </p>
                <p>
                  Founded in Manipur with a vision to bridge this gap, we
                  combined cutting-edge technology with personalized human
                  support to create a placement experience that actually works.
                </p>
                <p>
                  Today, we serve hundreds of candidates and partner with 150+
                  employers across India and globally, maintaining a 95%
                  placement success rate that speaks to the quality of our
                  approach.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden premium-shadow">
                <Image
                  src="/about-team.png"
                  alt="NetNova Technologies team collaborating in a modern office environment"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl gradient-bg -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-accent/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 lg:p-10 border border-border/50 premium-shadow card-hover"
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#FBF6E8]" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 font-[family-name:var(--font-geist-sans)]">
                Our Mission
              </h3>
              <p className="text-muted leading-relaxed">
                To empower individuals with career opportunities that match
                their skills and aspirations, while helping organizations build
                high-performing teams through intelligent, ethical, and fast
                recruitment practices.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 lg:p-10 border border-border/50 premium-shadow card-hover"
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg-reverse flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#FBF6E8]" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 font-[family-name:var(--font-geist-sans)]">
                Our Vision
              </h3>
              <p className="text-muted leading-relaxed">
                To become India&apos;s most trusted and innovative placement
                consultancy, setting new benchmarks in recruitment quality,
                candidate satisfaction, and employer partnerships across the
                globe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#FBF6E8]">
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
                className="p-7 rounded-2xl border border-border/50 bg-white premium-shadow card-hover group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Teams (Coming Soon) */}
      <section className="section-padding bg-section-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-16 md:py-24"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-[family-name:var(--font-geist-sans)] tracking-tight">
              Our <span className="gradient-text">Teams</span>
            </h2>
            <p className="text-xl text-muted font-medium tracking-wide uppercase">
              Publishing soon
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
