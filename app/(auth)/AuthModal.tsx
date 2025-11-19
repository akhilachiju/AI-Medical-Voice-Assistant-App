"use client";

import { X } from "lucide-react";
import { SignIn, SignUp } from "@clerk/nextjs";
import { useAuthModal } from "./AuthModalProvider";

export default function AuthModal() {
  const { isOpen, mode, closeModal, switchMode } = useAuthModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100  flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="relative bg-gray-900/90 border border-blue-600/80 rounded-2xl py-6 px-6 shadow-xl shadow-blue-600/30 backdrop-blur-xl max-w-md w-full">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute -top-2 -right-2 z-50 p-2 rounded-full bg-gray-800 border border-blue-600/50 hover:bg-gray-700 transition-colors shadow-lg"
        >
          <X className="w-4 h-4 text-white" />
        </button>
        
        {/* Auth component */}
        <div className="flex items-center justify-center">
          {mode === "signin" ? (
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
            />
          ) : (
            <SignUp
              routing="hash"
              afterSignUpUrl="/dashboard"
              appearance={{
                variables: {
                  colorPrimary: "#1d4ed8",
                },
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-0 bg-transparent"
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
