"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "History", path: "/history" },
    { id: 3, name: "Pricing", path: "/pricing" },
    { id: 4, name: "Profile", path: "/profile" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md">
      {/* Top bar: Logo + Nav + Right Section */}
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 h-16">
        
        {/* Left: Logo + Title linking to Home */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="VCare Logo"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500  hover:text-blue-700">
            VCare
          </h1>
        </Link>

        {/* Desktop & Tablet Menu */}
        <nav className="hidden sm:flex md:flex items-center gap-8 text-blue-500 font-medium">
          {menuOptions.map((menu) => (
            <Link
              key={menu.id}
              href={menu.path}
              className="hover:text-blue-600 hover:font-bold transition-all"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Right: Login button + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Login button (visible on all screens) */}
          <Link href="/login">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-4 py-2 transition-all">
              Login
            </Button>
          </Link>

          {/* Mobile Hamburger (hidden on tablet/desktop) */}
          <button
            className="sm:hidden p-2 text-blue-600"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="sm:hidden flex flex-col items-center gap-4 mt-2 px-4 pb-4 bg-white shadow-md">
          {menuOptions.map((menu) => (
            <Link
              key={menu.id}
              href={menu.path}
              className="text-blue-600 font-medium hover:text-blue-700 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
