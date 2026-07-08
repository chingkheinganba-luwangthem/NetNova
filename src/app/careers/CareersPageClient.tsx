"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ChevronDown, ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

/* ============================================
   Data Models
   ============================================ */
const jobCategories = ["View all", "Recruiting", "Advisory", "Resume Services", "Training"];

const jobs = [
  {
    id: 1,
    title: "Jr Bench Sales Recruitment Specialist",
    category: "Recruiting",
    summary: "Help candidates navigate the job market and maintain their profiles effectively.",
    location: "100% WFO",
    type: "Full-Time",
    requirements: [
      "Experience or strong willingness to learn US IT bench sales",
      "Strong communication and negotiation skills",
      "Ability to maintain candidate profiles effectively",
      "Basic understanding of visa processes (OPT, CPT, H1B) is a plus",
    ],
  },
  {
    id: 2,
    title: "Sr Bench Sales Recruitment Specialist",
    category: "Recruiting",
    summary: "Lead recruitment strategies, manage candidate portfolios, and drive placements.",
    location: "100% WFO",
    type: "Full-Time",
    requirements: [
      "3+ years of experience in US IT bench sales",
      "Proven track record of successful candidate placements",
      "Strong network with tier-1 vendors and direct clients",
      "Excellent mentorship and team leadership skills",
    ],
  },
  {
    id: 3,
    title: "Jr Career Advisor",
    category: "Advisory",
    summary: "Guide and mentor candidates throughout their full-time job search journey.",
    location: "100% WFO",
    type: "Full-Time",
    requirements: [
      "Passion for counseling and career guidance",
      "Excellent interpersonal and listening skills",
      "Ability to identify candidate strengths and areas for improvement",
      "Strong organizational and follow-up skills",
    ],
  },
  {
    id: 4,
    title: "Sr Career Advisor",
    category: "Advisory",
    summary: "Provide strategic career guidance and manage complex candidate placement scenarios.",
    location: "100% WFO",
    type: "Full-Time",
    requirements: [
      "4+ years of experience in career counseling or HR advisory",
      "Deep understanding of tech industry hiring trends",
      "Ability to strategize long-term career paths for candidates",
      "Experience handling senior-level candidate profiles",
    ],
  },
  {
    id: 5,
    title: "Candidate Relation Manager",
    category: "Advisory",
    summary: "Act as the primary point of contact for candidates through the job search process.",
    location: "100% WFO",
    type: "Full-Time",
    requirements: [
      "Exceptional relationship-building and conflict-resolution skills",
      "Experience in customer success or account management",
      "Ability to manage multiple candidate portfolios simultaneously",
      "Strong empathy and problem-solving mindset",
    ],
  },
  {
    id: 6,
    title: "Senior Resume Expert",
    category: "Resume Services",
    summary: "Help candidates create ATS-friendly resumes that stand out in the job market.",
    location: "100% WFO",
    type: "Full-Time",
    requirements: [
      "Extensive experience in resume writing and optimization",
      "Deep understanding of ATS algorithms and keyword optimization",
      "Excellent written communication and copywriting skills",
      "Familiarity with various tech roles and their specific resume requirements",
    ],
  },
  {
    id: 7,
    title: "Technical Expert",
    category: "Training",
    summary: "Looking for experienced professionals who can teach and mentor candidates in specific technical domains (Full Stack Developer, Data Engineer / Data Analyst, Cloud + DevOps Engineer, QA Automation Tester, AI / ML).",
    location: "100% WFO",
    type: "Full-Time",
    requirements: [
      "5+ years of hands-on experience in a specific tech domain",
      "Passion for teaching and mentoring junior developers",
      "Ability to conduct mock interviews and technical assessments",
      "Strong communication skills to explain complex concepts simply",
    ],
  },
];

/* ============================================
   Job Card Component
   ============================================ */
function JobCard({ job }: { job: typeof jobs[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 shadow-sm ${
        isExpanded
          ? "bg-[#07162B] border-[#07162B] shadow-2xl shadow-[#07162B]/20"
          : "bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] border-[#1E3A8A]/10 hover:border-[#1E3A8A]/30 hover:shadow-md"
      }`}
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          {/* Left Side: Title and Tags */}
          <div className="space-y-4 flex-1">
            <h3 className={`text-xl md:text-2xl font-bold font-[family-name:var(--font-geist-sans)] transition-colors duration-300 ${
              isExpanded ? "text-[#FBF6E8]" : "text-[#07162B]"
            }`}>
              {job.title}
            </h3>
            <p className={`text-sm md:text-base transition-colors duration-300 ${
              isExpanded ? "text-[#CBD5E1]" : "text-[#475569]"
            }`}>
              {job.summary}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors duration-300 ${
                isExpanded ? "bg-[#1E3A8A]/30 border-[#1E3A8A]/50 text-[#FBF6E8]" : "bg-[#1E3A8A]/5 border-[#1E3A8A]/10 text-[#1E3A8A]"
              }`}>
                <MapPin className="w-3.5 h-3.5" />
                {job.location}
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors duration-300 ${
                isExpanded ? "bg-[#1E3A8A]/30 border-[#1E3A8A]/50 text-[#FBF6E8]" : "bg-[#1E3A8A]/5 border-[#1E3A8A]/10 text-[#1E3A8A]"
              }`}>
                <Clock className="w-3.5 h-3.5" />
                {job.type}
              </span>
            </div>
          </div>

          {/* Right Side: Apply Button and Accordion Toggle */}
          <div className="flex flex-row md:flex-col items-center justify-between md:items-end gap-4 shrink-0">
            <Link
              href={`/careers/apply?role=${encodeURIComponent(job.title)}`}
              className="group/btn inline-flex items-center gap-2 bg-[#D9B24C] text-[#07162B] px-6 py-2.5 rounded-xl text-sm font-bold shadow-[0_4px_15px_rgba(217,178,76,0.3)] hover:shadow-[0_8px_25px_rgba(217,178,76,0.5)] hover:-translate-y-0.5 transition-all"
            >
              Apply
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-300 ${
                isExpanded ? "text-[#D9B24C]" : "text-[#1E3A8A] hover:text-[#07162B]"
              }`}
            >
              {isExpanded ? "Less Details" : "View Details"}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 mt-8 border-t border-[#1E3A8A]/30">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-[#1E3A8A]/30 border border-[#1E3A8A]/50 text-[#D9B24C] text-xs font-bold uppercase tracking-wider">
                    {job.category}
                  </span>
                </div>
                
                <h4 className="text-[#D9B24C] text-sm font-bold uppercase tracking-wider mb-4">
                  Requirements
                </h4>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#CBD5E1] text-sm leading-relaxed">
                      <span className="text-[#D9B24C] mt-1 shrink-0">›</span>
                      {req}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-[#1E3A8A]/30">
                  <Link
                    href={`/careers/apply?role=${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E3A8A] to-[#2D4FA0] text-[#FBF6E8] px-8 py-3.5 rounded-xl text-sm font-bold hover:shadow-[0_8px_25px_rgba(30,58,138,0.5)] hover:-translate-y-0.5 transition-all"
                  >
                    Apply for this Role
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ============================================
   Careers Page Client Component
   ============================================ */
export default function CareersPageClient() {
  const [activeCategory, setActiveCategory] = useState("View all");

  const filteredJobs = activeCategory === "View all" 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#07162B] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#1E3A8A]/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#D9B24C]/5 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-5 py-1.5 rounded-full border border-[#D9B24C]/30 bg-[#D9B24C]/10 text-[#D9B24C] text-xs font-bold uppercase tracking-widest mb-6">
              We're Hiring!
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FBF6E8] mb-6 font-[family-name:var(--font-geist-sans)] tracking-tight max-w-4xl mx-auto">
              Shape your <span className="text-[#D9B24C]">career</span> with us
            </h1>
            <p className="text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto mb-12">
              Join a team of industry experts dedicated to connecting top talent with the world's best organizations. We value continuous learning, ethical recruitment, and a collaborative spirit.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {jobCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#D9B24C] text-[#07162B] shadow-[0_0_15px_rgba(217,178,76,0.4)] hover:-translate-y-0.5"
                      : "bg-[#1E3A8A]/30 border border-[#1E3A8A]/50 text-[#CBD5E1] hover:bg-[#1E3A8A]/60 hover:text-[#FBF6E8] hover:border-[#D9B24C]/40 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(30,58,138,0.4)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 lg:py-24 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-[#F0F4F8] flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-8 h-8 text-[#94A3B8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#07162B] mb-2 font-[family-name:var(--font-geist-sans)]">
                    No open positions
                  </h3>
                  <p className="text-[#475569]">
                    We don't have any open roles in this category right now. Check back later!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
