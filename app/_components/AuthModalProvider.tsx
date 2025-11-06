"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AuthModalContextType {
  isOpen: boolean;
  mode: "signin" | "signup";
  openModal: (mode: "signin" | "signup") => void;
  closeModal: () => void;
  switchMode: (mode: "signin" | "signup") => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  const openModal = (authMode: "signin" | "signup") => {
    setMode(authMode);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const switchMode = (authMode: "signin" | "signup") => {
    setMode(authMode);
  };

  return (
    <AuthModalContext.Provider value={{ isOpen, mode, openModal, closeModal, switchMode }}>
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error("useAuthModal must be used within an AuthModalProvider");
  }
  return context;
}
