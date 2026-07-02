"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff, Check, ArrowRight, Sparkles, Crown, Rocket } from "lucide-react";

/* ============================================
   Pricing Plans Data
   ============================================ */
const plans = [
  {
    name: "Starter",
    icon: Rocket,
    price: "₹9,999",
    period: "/month",
    description: "Perfect for small businesses starting their hiring journey.",
    color: "from-[#1E3A8A] to-[#07162B]",
    features: [
      "Up to 5 job postings",
      "Basic candidate matching",
      "Email support",
      "Resume database access",
      "Standard screening",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    icon: Sparkles,
    price: "₹24,999",
    period: "/month",
    description: "Ideal for growing companies with consistent hiring needs.",
    color: "from-primary to-accent",
    features: [
      "Up to 20 job postings",
      "AI-powered candidate matching",
      "Priority support",
      "Advanced resume database",
      "Video interview scheduling",
      "Dedicated account manager",
      "Weekly hiring reports",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations and bulk hiring.",
    color: "from-violet-500 to-purple-600",
    features: [
      "Unlimited job postings",
      "Advanced AI matching & analytics",
      "24/7 dedicated support",
      "Full resume database access",
      "Custom assessment tools",
      "Dedicated recruitment team",
      "Executive search included",
      "Campus drive management",
      "Custom reporting & API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

/* ============================================
   Password Gate Component
   ============================================ */
function PasswordGate({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === "netnova2026") {
      sessionStorage.setItem("pricing_access", "granted");
      onSuccess();
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-light-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#FBF6E8] rounded-3xl p-8 lg:p-10 premium-shadow border border-border/50 text-center">
          {/* Lock Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg flex items-center justify-center">
            <Lock className="w-8 h-8 text-[#FBF6E8]" />
          </div>

          <h1 className="text-2xl font-bold text-dark mb-2 font-[family-name:var(--font-geist-sans)]">
            Protected Page
          </h1>
          <p className="text-sm text-muted mb-8">
            Enter the access password to view pricing plans.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full px-4 py-3 pr-12 rounded-xl border border-border bg-light-bg text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-center tracking-widest"
                placeholder="Enter password"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-dark transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-xs"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="w-full gradient-bg text-[#FBF6E8] py-3 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Access Pricing
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================
   Pricing Page Client Component
   Password-protected pricing plans display
   ============================================ */
export default function PricingPageClient() {
  const [hasAccess, setHasAccess] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  /* Check sessionStorage on mount */
  useEffect(() => {
    const access = sessionStorage.getItem("pricing_access");
    if (access === "granted") {
      setHasAccess(true);
    }
    setIsChecking(false);
  }, []);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light-bg">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!hasAccess) {
    return <PasswordGate onSuccess={() => setHasAccess(true)} />;
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-section-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Pricing
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-[family-name:var(--font-geist-sans)]">
              Transparent <span className="gradient-text">Pricing Plans</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Choose the plan that fits your hiring needs. Scale up or down
              anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-[#FBF6E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative rounded-3xl p-8 border ${
                  plan.popular
                    ? "border-primary/30 bg-[#FBF6E8] premium-shadow scale-105"
                    : "border-border/50 bg-[#FBF6E8]"
                } card-hover`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="gradient-bg text-[#FBF6E8] text-xs font-bold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-5`}>
                  <plan.icon className="w-6 h-6 text-[#FBF6E8]" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-1 font-[family-name:var(--font-geist-sans)]">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted mb-5">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-dark font-[family-name:var(--font-geist-sans)]">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-dark-secondary">
                      <Check className="w-4 h-4 text-success shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.popular
                      ? "gradient-bg text-[#FBF6E8] hover:shadow-lg hover:shadow-primary/25"
                      : "border-2 border-border text-dark hover:border-primary hover:text-primary"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-xs text-muted mt-12">
            All plans include GST. Custom enterprise plans available on request.
            Contact us for volume discounts.
          </p>
        </div>
      </section>
    </>
  );
}
