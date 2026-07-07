"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      /* API call would go here */
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-[#07162B] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#112240] border border-[#1E3A8A]/30 text-[#D9B24C] text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] mb-6">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight font-[family-name:var(--font-geist-sans)]">
            Let&apos;s Build Your Success <span className="text-[#D9B24C]">Together</span>
          </h1>
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Your Next Opportunity Starts Here. Connect with our recruitment experts and take the first step toward a successful career.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-8 lg:gap-10 pt-2 lg:pt-8"
          >
            {/* Address */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#0F1D36] border border-[#1E3A8A]/40 flex items-center justify-center shrink-0 shadow-inner">
                <MapPin className="w-5 h-5 text-[#D9B24C]" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-white uppercase tracking-wider mb-2">Address</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#0F1D36] border border-[#1E3A8A]/40 flex items-center justify-center shrink-0 shadow-inner">
                <Mail className="w-5 h-5 text-[#D9B24C]" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-white uppercase tracking-wider mb-2">Support</h3>
                <p className="text-[#94A3B8] text-sm">info@netnova-technologies.com</p>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#0F1D36] border border-[#1E3A8A]/40 flex items-center justify-center shrink-0 shadow-inner">
                <Phone className="w-5 h-5 text-[#D9B24C]" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-white uppercase tracking-wider mb-2">Call</h3>
                <p className="text-[#94A3B8] text-sm">+1 (646) 532-0205</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8 bg-[#0B172C] border border-[#1E3A8A]/20 rounded-[2rem] p-6 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
          >
            {isSubmitted ? (
              <div className="text-center py-16">
                <CheckCircle2 className="w-16 h-16 text-[#D9B24C] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-geist-sans)]">Message Sent!</h3>
                <p className="text-[#94A3B8] mb-8">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
                  }}
                  className="bg-[#1E3A8A]/20 text-[#D9B24C] px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#1E3A8A]/40 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2.5">
                    <label htmlFor="firstName" className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em]">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      className={`w-full bg-[#050C17] border ${errors.firstName ? "border-red-500/50" : "border-[#1E3A8A]/20"} rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#D9B24C] focus:ring-1 focus:ring-[#D9B24C] transition-all`}
                      placeholder="John"
                    />
                  </div>
                  
                  {/* Last Name */}
                  <div className="space-y-2.5">
                    <label htmlFor="lastName" className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em]">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className={`w-full bg-[#050C17] border ${errors.lastName ? "border-red-500/50" : "border-[#1E3A8A]/20"} rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#D9B24C] focus:ring-1 focus:ring-[#D9B24C] transition-all`}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2.5">
                    <label htmlFor="email" className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full bg-[#050C17] border ${errors.email ? "border-red-500/50" : "border-[#1E3A8A]/20"} rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#D9B24C] focus:ring-1 focus:ring-[#D9B24C] transition-all`}
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="space-y-2.5">
                    <label htmlFor="phone" className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em]">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full bg-[#050C17] border border-[#1E3A8A]/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#D9B24C] focus:ring-1 focus:ring-[#D9B24C] transition-all"
                      placeholder="+1 xxx-xxx-xxxx"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2.5">
                  <label htmlFor="message" className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`w-full bg-[#050C17] border ${errors.message ? "border-red-500/50" : "border-[#1E3A8A]/20"} rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#D9B24C] focus:ring-1 focus:ring-[#D9B24C] transition-all resize-none`}
                    placeholder="Tell us about your background and goals..."
                  />
                </div>

                {/* Opt-in Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="optIn"
                    required
                    className="mt-1 w-4 h-4 rounded border-[#1E3A8A]/20 bg-[#050C17] text-[#D9B24C] focus:ring-[#D9B24C] cursor-pointer"
                  />
                  <label htmlFor="optIn" className="text-[11px] text-[#94A3B8] leading-relaxed cursor-pointer">
                    By opting in for text messages, you agree to receive messages from NetNova Technologies at the number provided. Message frequency varies. Msg & data rates may apply.{" "}
                    <Link href="/privacy-policy" className="text-[#D9B24C] hover:underline" target="_blank">
                      View our Privacy Policy
                    </Link>{" "}
                    for more information.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D9B24C] to-[#E2C974] hover:to-[#D9B24C] text-[#07162B] px-8 py-3.5 rounded-xl text-[13px] font-bold uppercase tracking-wide transition-all hover:shadow-[0_0_20px_rgba(217,178,76,0.3)]"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
