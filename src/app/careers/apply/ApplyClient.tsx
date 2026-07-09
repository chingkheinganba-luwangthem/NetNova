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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

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

  const validate = (data: Record<string, any>) => {
    const newErrors: Record<string, string> = {};
    if (!data.name?.trim()) newErrors.name = "Name required";
    if (!data.email?.trim()) newErrors.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = "Invalid email";
    if (!data.phone?.trim()) newErrors.phone = "Phone required";
    else if (!/^\+?[0-9\s\-()]{7,15}$/.test(data.phone))
      newErrors.phone = "Invalid phone number";
    if (!data.gender) newErrors.gender = "Gender required";
    if (!data.resume?.name) newErrors.resume = "Resume required";
    if (!data.privacy) newErrors.privacy = "You must agree to the Privacy Policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, any> = {};
    formData.forEach((value, key) => { data[key] = value; });

    // File input special handling
    const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput?.files?.length) {
      data.resume = fileInput.files[0];
    }

    if (!validate(data)) return;

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `New Job Application: ${role}`,
          name: data.name,
          email: data.email,
          phone: data.phone,
          role: data.role,
          gender: data.gender,
          message: data.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setFileName("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
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
              onSubmit={handleSubmit}
              className="space-y-8"
              noValidate
            >
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full bg-transparent border-b ${errors.name ? "border-red-500" : "border-[#1E3A8A] focus:border-[#D9B24C]"} px-0 py-2.5 text-white outline-none transition-colors placeholder:text-[#475569]`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full bg-transparent border-b ${errors.email ? "border-red-500" : "border-[#1E3A8A] focus:border-[#D9B24C]"} px-0 py-2.5 text-white outline-none transition-colors placeholder:text-[#475569]`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
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
                  className={`w-full bg-transparent border-b ${errors.phone ? "border-red-500" : "border-[#1E3A8A] focus:border-[#D9B24C]"} px-0 py-2.5 text-white outline-none transition-colors placeholder:text-[#475569]`}
                  placeholder="(+91) 00000 00000"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
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
                        className="w-4 h-4 accent-[#D9B24C] border-[#1E3A8A]"
                      />
                      <span className={`text-sm ${errors.gender ? "text-red-400" : "text-[#CBD5E1] group-hover:text-white"} transition-colors`}>{g}</span>
                    </label>
                  ))}
                </div>
                {errors.gender && <p className="text-red-400 text-xs mt-1">{errors.gender}</p>}
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
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white ${errors.resume ? "text-red-500 border border-red-500" : "text-[#07162B]"} font-bold text-sm cursor-pointer hover:bg-[#D9B24C] hover:text-[#07162B] transition-colors shadow-sm`}
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
              {errors.resume && <p className="text-red-400 text-xs mt-1">{errors.resume}</p>}
            </div>

            {/* Privacy Policy */}
            <div className="flex flex-col gap-1 pt-2">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="w-4 h-4 rounded border-[#1E3A8A] bg-[#07162B] accent-[#D9B24C]"
                />
              <label htmlFor="privacy" className="text-sm text-[#94A3B8]">
                I agree with NetNova&apos;s{" "}
                <Link href="/privacy-policy" className="text-[#D9B24C] hover:underline font-bold">
                  Privacy Policy
                </Link>
              </label>
              </div>
              {errors.privacy && <p className="text-red-400 text-xs mt-1">{errors.privacy}</p>}
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
