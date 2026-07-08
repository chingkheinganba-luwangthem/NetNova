"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, Loader2, Upload, CheckCircle2 } from "lucide-react";
import { toast } from "react-hot-toast";

export default function ApplyClient() {
  const searchParams = useSearchParams();
  const roleQuery = searchParams.get("role");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  
  const isSuccess = searchParams.get("success") === "true";

  useEffect(() => {
    if (roleQuery) setRole(decodeURIComponent(roleQuery));
    if (typeof window !== "undefined") {
      setNextUrl(`${window.location.origin}${window.location.pathname}?role=${encodeURIComponent(roleQuery || "")}&success=true`);
    }
  }, [roleQuery]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    // The actual submission is handled by the browser's form POST
    // We just show the loading state until the page unloads
  };

  return (
    <div className="min-h-screen bg-[#07162B] text-[#FBF6E8] pt-24 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1E3A8A] to-transparent opacity-50" />
      <div className="absolute top-20 left-0 w-[500px] h-[500px] rounded-full bg-[#1E3A8A]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-[#D9B24C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex flex-col items-center">

        {/* Back Link */}
        <div className="w-full max-w-3xl mb-6">
          <Link href="/careers" className="inline-flex items-center gap-2 text-[#D9B24C] hover:text-white transition-colors text-sm font-medium group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Careers
          </Link>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl bg-[#0F2D5C]/40 border border-[#1E3A8A]/50 rounded-3xl p-8 md:p-12 backdrop-blur-md"
        >
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Apply: <span className="text-[#D9B24C]">{role || "Role"}</span>
            </h1>
          </div>

          {isSuccess ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full border-4 border-[#D9B24C] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#D9B24C]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-geist-sans)]">Message Sent!</h3>
              <p className="text-[#94A3B8] mb-8 max-w-md mx-auto">
                Thank you for applying. We have received your application and will get back to you shortly.
              </p>
              <Link
                href="/careers"
                className="inline-flex bg-[#1E3A8A]/20 text-[#D9B24C] px-8 py-3 rounded-xl text-sm font-bold hover:bg-[#1E3A8A]/40 transition-colors"
              >
                View More Jobs
              </Link>
            </div>
          ) : (
            <form 
              action="https://formsubmit.co/chingkheinganbaluwangthem@gmail.com" 
              method="POST" 
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value={`New Job Application: ${role}`} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              {nextUrl && <input type="hidden" name="_next" value={nextUrl} />}
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-[#1E3A8A] focus:border-[#D9B24C] px-0 py-2.5 text-white outline-none transition-colors placeholder:text-[#475569]"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-[#1E3A8A] focus:border-[#D9B24C] px-0 py-2.5 text-white outline-none transition-colors placeholder:text-[#475569]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Row 2: Phone + Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Phone No (+91)*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-transparent border-b border-[#1E3A8A] focus:border-[#D9B24C] px-0 py-2.5 text-white outline-none transition-colors placeholder:text-[#475569]"
                  placeholder="(+91) 00000 00000"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="role" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Role*</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  readOnly
                  value={role}
                  className="w-full bg-transparent border-b border-[#1E3A8A] px-0 py-2.5 text-white outline-none cursor-default"
                />
              </div>
            </div>

            {/* Row 3: Gender + Message */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Gender*</label>
                <div className="flex items-center gap-6 pt-1">
                  {["Male", "Female", "Other"].map((g) => (
                    <label key={g} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        required
                        className="w-4 h-4 accent-[#D9B24C] border-[#1E3A8A]"
                      />
                      <span className="text-sm text-[#CBD5E1] group-hover:text-white transition-colors">{g}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={1}
                  className="w-full bg-transparent border-b border-[#1E3A8A] focus:border-[#D9B24C] px-0 py-2.5 text-white outline-none transition-colors placeholder:text-[#475569] resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>

            {/* Resume Upload */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Resume*</label>
              <div className="flex items-center gap-4">
                <label
                  htmlFor="resume"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#07162B] font-bold text-sm cursor-pointer hover:bg-[#D9B24C] transition-colors shadow-sm"
                >
                  <Upload className="w-4 h-4" />
                  Choose File
                </label>
                <span className="text-sm text-[#94A3B8]">
                  {fileName || "No file chosen (.pdf, .doc, .docx)"}
                </span>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="privacy"
                required
                className="w-4 h-4 rounded border-[#1E3A8A] bg-[#07162B] accent-[#D9B24C]"
              />
              <label htmlFor="privacy" className="text-sm text-[#94A3B8]">
                I agree with NetNova&apos;s{" "}
                <Link href="/privacy-policy" className="text-[#D9B24C] hover:underline font-bold">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold tracking-wide uppercase transition-all duration-300 border border-[#D9B24C]/40 text-[#0F2D5C] bg-[#D9B24C] hover:bg-[#FBF6E8] hover:border-[#FBF6E8] shadow-[0_4px_20px_rgba(217,178,76,0.3)] mt-4"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Now
                </>
              )}
            </button>
          </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
