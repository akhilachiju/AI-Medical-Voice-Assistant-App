"use client";
import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

type MenuOption = {
  id: number;
  name: string;
  path: string;
};

type SocialOption = {
  id: number;
  name: string;
  href: string;
  icon: React.ReactNode;
};

export default function Footer() {
  const quickLinks: MenuOption[] = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "History", path: "/history" },
    { id: 3, name: "Pricing", path: "/pricing" },
    { id: 4, name: "Profile", path: "/profile" },
  ];

  const companyLinks: MenuOption[] = [
    { id: 1, name: "About Us", path: "/about" },
    { id: 2, name: "Careers", path: "/careers" },
    { id: 3, name: "Blog", path: "/blog" },
  ];

  const supportLinks: MenuOption[] = [
    { id: 1, name: "Help Center", path: "/help" },
    { id: 2, name: "Contact Us", path: "/contact" },
    { id: 3, name: "Privacy Policy", path: "/privacy" },
  ];

  const socialOptions: SocialOption[] = [
    {
      id: 1,
      name: "Twitter",
      href: "https://twitter.com",
      icon: <LucideIcons.Twitter size={20} />,
    },
    {
      id: 2,
      name: "Facebook",
      href: "https://facebook.com",
      icon: <LucideIcons.Facebook size={20} />,
    },
    {
      id: 3,
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <LucideIcons.Linkedin size={20} />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Logo + About */}
          <div className="flex flex-col gap-4 md:w-1/4">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="VCare Logo"
                className="w-12 h-12 rounded-full"
              />
              <span className="text-white hover:text-blue-600 transition-colors font-bold text-2xl">
                VCare
              </span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base">
              AI-powered medical voice assistant that transcribes and organizes
              doctor-patient conversations with accuracy and security.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 md:w-1/6">
            <h3 className="text-white font-semibold">Quick Links</h3>
            {quickLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="hover:text-blue-600 transition-colors text-sm md:text-base"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4 md:w-1/6">
            <h3 className="text-white font-semibold">Company</h3>
            {companyLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="hover:text-blue-600 transition-colors text-sm md:text-base"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4 md:w-1/6">
            <h3 className="text-white font-semibold">Support</h3>
            {supportLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="hover:text-blue-600 transition-colors text-sm md:text-base"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links*/}
          <div className="flex flex-col gap-6 md:w-1/4">
            <h3 className="text-white font-semibold">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              {socialOptions.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  className="text-gray-400 hover:text-blue-600 transition-transform transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} VCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
