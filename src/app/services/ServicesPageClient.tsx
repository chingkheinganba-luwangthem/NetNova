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
      className="bg-white rounded-2xl p-8 border border-border/50 premium-shadow card-hover group scroll-mt-24"
    >
      <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <service.icon className="w-7 h-7 text-[#FBF6E8]" />
      </div>
      <h3 className="text-xl font-bold text-dark mb-3 font-[family-name:var(--font-geist-sans)]">
        {service.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-5">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-dark-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
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
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-section-bg overflow-hidden">
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
      <section id="candidate-services" className="section-padding bg-[#FBF6E8] scroll-mt-32">
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
      <section id="employer-services" className="section-padding bg-section-bg scroll-mt-32">
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
      <section className="section-padding bg-[#FBF6E8]">
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
              className="inline-flex items-center gap-2 gradient-bg text-[#FBF6E8] px-8 py-3.5 rounded-xl text-sm font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
