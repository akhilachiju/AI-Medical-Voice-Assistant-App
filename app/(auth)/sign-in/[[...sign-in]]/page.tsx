"use client";

import { SignIn } from "@clerk/nextjs";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function SignInPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => router.push("/")}
      />
      
      <div className="relative bg-gray-900/90 border border-blue-600/80 rounded-2xl py-6 px-6 shadow-xl shadow-blue-600/30 backdrop-blur-xl max-w-md w-full">
        {/* Close button */}
        <button
          onClick={() => router.push("/")}
          className="absolute -top-2 -right-2 z-50 p-2 rounded-full bg-gray-800 border border-blue-600/50 hover:bg-gray-700 transition-colors shadow-lg"
        >
          <X className="w-4 h-4 text-white" />
        </button>
        
        <div className="flex items-center justify-center">
          <SignIn
            routing="hash"
            afterSignInUrl="/dashboard"
            appearance={{
              variables: {
                colorPrimary: "#1d4ed8",
              },
              elements: {
                rootBox: "w-full",
                card: "shadow-none border-0 bg-transparent"
              }
            }}
            signUpUrl="/sign-up"
          />
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;

  return createPortal(modalContent, document.body);
}
