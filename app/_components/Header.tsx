"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useAuthModal } from "../(auth)/AuthModalProvider";


interface HeaderProps {
  showLandingNav?: boolean; 
}

export default function Header({ showLandingNav = true }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Conditionally use modal only if provider exists
  let openModal: ((mode: "signin" | "signup") => void) | null = null;
  try {
    const modalContext = useAuthModal();
    openModal = modalContext.openModal;
  } catch {
    // No provider available, will use Link instead
  }

  const menuOptions = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Us" },
    { id: "pricing", name: "Pricing" },
    { id: "contact", name: "Contact Us" },
  ];


  useEffect(() => {
    if (!showLandingNav || pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (const section of menuOptions) {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, showLandingNav]);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  const isLandingPage = pathname === "/";

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md transition-all">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center cursor-pointer"
          >
            <Image src="/logo.png" alt="VCare Logo" width={45} height={45} className="rounded-full" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-blue-700 transition-colors ml-2">
              VCare
            </h1>
          </Link>

          {/* Desktop Navigation */}
          {showLandingNav && isLandingPage && (
            <nav className="hidden sm:flex items-center gap-8 text-white font-medium">
              {menuOptions.map((menu) => (
                <Link
                  key={menu.id}
                  href={`#${menu.id}`}
                  onClick={(e) => handleScrollToSection(e, menu.id)}
                  className={`relative transition-all duration-300 ${
                    activeSection === menu.id
                      ? "text-blue-500"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {menu.name}
                  {activeSection === menu.id && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded-full transition-all"></span>
                  )}
                </Link>
              ))}
            </nav>
          )}

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <SignedOut>
              {openModal ? (
                <button onClick={() => openModal("signin")}>
                  <User className="w-6 h-6 text-white hover:text-blue-400 transition-colors cursor-pointer" />
                </button>
              ) : (
                <Link href="/sign-in">
                  <User className="w-6 h-6 text-white hover:text-blue-400 transition-colors cursor-pointer" />
                </Link>
              )}
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-3">
                {!pathname.startsWith("/dashboard") && (
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-4 py-2 transition-all">
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                )}
                {pathname.startsWith("/dashboard") && (
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-4 py-2 transition-all">
                    <Link href="/">Home</Link>
                  </Button>
                )}
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>

            {/* Mobile Menu Toggle */}
            {showLandingNav && isLandingPage && (
              <button className="sm:hidden p-2 text-white hover:text-blue-700" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {showLandingNav && isLandingPage && isOpen && (
          <nav className="sm:hidden flex flex-col items-center gap-4 mt-2 px-4 pb-4 bg-transparent text-white">
            {menuOptions.map((menu) => (
              <Link
                key={menu.id}
                href={`#${menu.id}`}
                onClick={(e) => handleScrollToSection(e, menu.id)}
                className={`relative font-medium transition-all ${
                  activeSection === menu.id ? "text-blue-700" : "text-white"
                }`}
              >
                {menu.name}
                {activeSection === menu.id && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
