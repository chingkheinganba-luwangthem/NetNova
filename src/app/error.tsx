"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-light-bg px-4 text-center">
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="w-10 h-10 text-red-500" />
      </div>
      <h2 className="text-3xl font-bold text-dark mb-4 font-[family-name:var(--font-geist-sans)]">
        Something went wrong!
      </h2>
      <p className="text-muted mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred
        while loading this page.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="gradient-bg text-[#FBF6E8] px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          Try again
        </button>
        <Link
          href="/"
          className="bg-[#FBF6E8] border border-border text-dark px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
        >
          <Home className="w-4 h-4" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
