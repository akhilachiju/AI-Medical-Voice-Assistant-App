"use client";

import { useAuthModal } from "../_components/AuthModalProvider";
import AuthModal from "../_components/AuthModal";

export default function LandingContent({ children }: { children: React.ReactNode }) {
  const { isOpen } = useAuthModal();

  return (
    <>
      <div className={`flex flex-col min-h-screen transition-all duration-300 ${isOpen ? 'blur-sm' : ''}`}>
        {children}
      </div>
      <AuthModal />
    </>
  );
}
