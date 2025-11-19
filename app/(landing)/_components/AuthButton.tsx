"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useAuthModal } from "../../(auth)/AuthModalProvider";

export default function AuthButton() {
  const { isSignedIn } = useAuth();
  const { openModal } = useAuthModal();

  if (isSignedIn) {
    return (
      <Link href="/dashboard">
        <Button className="w-48 sm:w-56 md:w-60 transform bg-blue-600 px-6 py-2 text-base sm:text-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 rounded-xl shadow-sm">
          Explore Now <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    );
  }

  return (
    <Button 
      onClick={() => openModal("signin")}
      className="w-48 sm:w-56 md:w-60 transform bg-blue-600 px-6 py-2 text-base sm:text-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 rounded-xl shadow-sm"
    >
      Explore Now <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  );
}
