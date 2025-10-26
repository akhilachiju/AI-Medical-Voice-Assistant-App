"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  const menuOptions = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "History", path: "/history" },
    { id: 3, name: "Pricing", path: "/pricing" },
    { id: 4, name: "Profile", path: "/profile" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="VCare Logo"
            width={45}
            height={45}
            className="rounded-full"
            priority
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-blue-700 transition-colors">
            VCare
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-8 text-white font-medium">
          {menuOptions.map((menu) => (
            <Link
              key={menu.id}
              href={menu.path}
              className="hover:text-blue-600 transition-all"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {!user ? (
            <Link href="/sign-in">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-4 py-2 transition-all"
              >
                Login
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-4 py-2 transition-all"
              >
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden p-2 text-white hover:text-blue-600"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="sm:hidden flex flex-col items-center gap-4 mt-2 px-4 pb-4 bg-gray-100 shadow-md">
          {menuOptions.map((menu) => (
            <Link
              key={menu.id}
              href={menu.path}
              className="text-gray-900 font-medium hover:text-blue-700 transition-all"
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
