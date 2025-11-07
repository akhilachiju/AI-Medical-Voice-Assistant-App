"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthPageModalProps {
  children: React.ReactNode;
}

export default function AuthPageModal({ children }: AuthPageModalProps) {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      <div className="relative bg-gray-900/90 border border-blue-600/80 rounded-2xl py-6 px-6 shadow-xl shadow-blue-600/30 backdrop-blur-xl max-w-md w-full">
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 z-50 p-2 rounded-full bg-gray-800 border border-blue-600/50 hover:bg-gray-700 transition-colors shadow-lg"
        >
          <X className="w-4 h-4 text-white" />
        </button>
        
        <div className="flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
