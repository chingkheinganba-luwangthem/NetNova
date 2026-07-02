import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-light-bg">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center relative shadow-lg">
          <Loader2 className="w-8 h-8 text-[#FBF6E8] animate-spin" />
        </div>
      </div>
      <h2 className="mt-6 text-xl font-bold text-dark font-[family-name:var(--font-geist-sans)]">
        Loading...
      </h2>
      <p className="mt-2 text-sm text-muted">
        Preparing your career opportunities
      </p>
    </div>
  );
}
