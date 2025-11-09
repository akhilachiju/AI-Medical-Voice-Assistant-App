"use client";

import React, { useState } from "react";
import Link from "next/link"; 
import * as LucideIcons from "lucide-react";
import { Button } from "../components/ui/button";
import PrivacyModal from "./PrivacyModal";

type MenuOption = { id: number; name: string; path: string };

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const companyLinks: MenuOption[] = [
    { id: 1, name: "Home", path: "home" },
    { id: 2, name: "About Us", path: "about" },
    { id: 3, name: "Pricing", path: "pricing" },
    { id: 4, name: "Contact Us", path: "contact" },
    { id: 5, name: "Privacy Policy", path: "privacy" },
  ];

  const socialIcons = [
    { id: 1, href: "https://twitter.com", icon: <LucideIcons.Twitter size={20} /> },
    { id: 2, href: "https://facebook.com", icon: <LucideIcons.Facebook size={20} /> },
    { id: 3, href: "https://linkedin.com", icon: <LucideIcons.Linkedin size={20} /> },
  ];

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    if (id === "privacy") {
      setIsPrivacyModalOpen(true);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-transparent text-gray-300 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Logo + About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="VCare Logo" className="w-10 h-10 rounded-full" />
              <span className="text-white hover:text-blue-600 transition-colors font-bold text-2xl">
                VCare
              </span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs">
              AI-powered medical voice assistant that transcribes and organizes
              doctor-patient conversations with accuracy and security.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              {socialIcons.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  className="text-gray-400 hover:text-blue-600 transition-transform transform hover:scale-110"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            {companyLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.path}`}
                onClick={(e) => handleScroll(e, link.path)}
                className="hover:text-blue-600 transition-colors text-sm md:text-base cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3 sm:gap-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold text-lg">Subscribe to our Newsletter</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Get the latest updates and insights directly in your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Your Email"
                data-form-type="other"
                autoComplete="off"
                className="px-4 py-1 rounded-lg flex-1 border border-blue-700/30 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold rounded-lg transition-all w-full sm:w-auto"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} VCare. All rights reserved.
        </div>
      </div>

      {/* Privacy Modal */}
      <PrivacyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </footer>
  );
}
