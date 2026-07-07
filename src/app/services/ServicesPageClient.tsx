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
  Users,
  Search,
  BarChart3,
  Crown,
  ArrowRight,
} from "lucide-react";

/* ============================================
   Candidate Services
   ============================================ */
const candidateServices = [
  {
    icon: Briefcase,
    id: "job-placement",
    title: "Job Placement",
    description:
      "We match your skills, experience, and aspirations with verified job openings across industries. Our placement team works directly with hiring managers to fast-track your application and get you noticed.",
    features: ["Direct employer connections", "Skill-based matching", "Fast-track applications", "Offer negotiation support"],
  },
  {
    icon: FileSearch,
    id: "resume-review",
    title: "Resume Review & Optimization",
    description:
      "Our expert resume writers analyze and optimize your CV to meet industry standards and ATS requirements. We highlight your strengths and tailor your resume for maximum impact.",
    features: ["ATS optimization", "Industry-specific formatting", "Keyword optimization", "Professional summary writing"],
  },
  {
    icon: GraduationCap,
    id: "career-counseling",
    title: "Career Counseling",
    description:
      "Get personalized career roadmaps from experienced counselors. We help you identify your strengths, explore career paths, and make informed decisions about your professional future.",
    features: ["Career path mapping", "Skill gap analysis", "Industry trend insights", "1-on-1 counselor sessions"],
  },
  {
    icon: ClipboardCheck,
    id: "interview-preparation",
    title: "Interview Preparation",
    description:
      "Ace your interviews with our comprehensive preparation program. From mock interviews to body language coaching, we ensure you walk in confident and prepared.",
    features: ["Mock interviews", "Technical assessment prep", "Behavioral question coaching", "Feedback & improvement plans"],
  },
];

/* ============================================
   Employer Services
   ============================================ */
const employerServices = [
  {
    icon: Building,
    id: "recruitment",
    title: "End-to-End Recruitment",
    description:
      "From job description creation to final onboarding, we manage the entire recruitment lifecycle. Our dedicated recruitment team acts as an extension of your HR department.",
    features: ["Job posting management", "Candidate screening", "Interview coordination", "Onboarding support"],
  },
  {
    icon: UserSearch,
    id: "talent-acquisition",
    title: "Talent Acquisition",
    description:
      "Strategic talent acquisition solutions for companies looking to build high-performing teams. We leverage our network and AI tools to find candidates who fit your culture and requirements.",
    features: ["Passive candidate sourcing", "Employer branding", "Talent pool building", "Market intelligence"],
  },
  {
    icon: Users,
    id: "bulk-hiring",
    title: "Bulk Hiring Solutions",
    description:
      "Need to hire at scale? Our bulk hiring infrastructure handles high-volume recruitment efficiently without compromising candidate quality or employer experience.",
    features: ["Volume recruitment drives", "Assessment centers", "Campus drives", "Mass onboarding support"],
  },
  {
    icon: Crown,
    id: "executive-search",
    title: "Executive Search",
    description:
      "Confidential, targeted searches for C-suite and senior leadership positions. Our executive search practice focuses on finding transformative leaders for your organization.",
    features: ["Confidential searches", "Leadership assessment", "Board advisory", "Succession planning"],
  },
];

/* ============================================
   Service Card Component
   ============================================ */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof candidateServices)[0];
  index: number;
}) {
  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] rounded-2xl p-8 border border-[#1E3A8A]/10 shadow-xl shadow-[#1E3A8A]/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(30,58,138,0.15)] scroll-mt-24"
    >
      {/* Hover slide background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07162B] to-[#1E3A8A] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#D9B24C] to-[#FBF6E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-[#FBF6E8] border border-[#1E3A8A]/10 flex items-center justify-center mb-6 group-hover:bg-[#D9B24C] group-hover:border-[#D9B24C] transition-all duration-500">
          <service.icon className="w-8 h-8 text-[#1E3A8A] group-hover:text-[#07162B] transition-colors duration-500" />
        </div>
        <h3 className="text-xl font-bold text-[#07162B] mb-3 font-[family-name:var(--font-geist-sans)] group-hover:text-[#FBF6E8] transition-colors duration-500">
          {service.title}
        </h3>
        <p className="text-sm text-[#475569] leading-relaxed mb-5 group-hover:text-[#CBD5E1] transition-colors duration-500">
          {service.description}
        </p>
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-[#475569] group-hover:text-[#CBD5E1] transition-colors duration-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] group-hover:bg-[#D9B24C] transition-colors duration-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ============================================
   Services Page Client Component
   ============================================ */
export default function ServicesPageClient() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-12 bg-section-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-[family-name:var(--font-geist-sans)]">
              Comprehensive <span className="gradient-text">Placement Solutions</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Whether you&apos;re a job seeker ready to take the next step or an
              employer looking for exceptional talent, we have services tailored
              for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-[#FBF6E8] border-b border-border/50 sticky top-16 lg:top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider shrink-0">Jump to:</span>
            <a href="#candidate-services" className="text-sm text-primary font-medium hover:underline shrink-0">
              For Candidates
            </a>
            <span className="text-border">|</span>
            <a href="#employer-services" className="text-sm text-primary font-medium hover:underline shrink-0">
              For Employers
            </a>
          </div>
        </div>
      </section>

      {/* Candidate Services */}
      <section id="candidate-services" className="py-12 lg:py-16 bg-[#FBF6E8] scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <Search className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                For Job Seekers
              </span>
            </div>
            <h2 className="text-3xl font-bold text-dark font-[family-name:var(--font-geist-sans)]">
              Candidate Services
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {candidateServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Employer Services */}
      <section id="employer-services" className="py-12 lg:py-16 bg-section-bg scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                For Companies
              </span>
            </div>
            <h2 className="text-3xl font-bold text-dark font-[family-name:var(--font-geist-sans)]">
              Employer Services
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {employerServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-[#FBF6E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-dark mb-4 font-[family-name:var(--font-geist-sans)]">
              Need a Custom Solution?
            </h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              Every organization and candidate is unique. Let&apos;s discuss how we
              can tailor our services to meet your specific needs.
            </p>
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#D4A017] text-[#0F2D5C] px-8 py-4 rounded-xl shadow-[0_4px_15px_rgba(212,160,23,0.3)] hover:shadow-[0_8px_25px_rgba(212,160,23,0.4)] transition-all"
            >
              <div className="absolute inset-0 bg-[#0F2D5C] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-2 text-sm font-bold group-hover:text-[#FBF6E8] transition-colors duration-300">
                Contact Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
