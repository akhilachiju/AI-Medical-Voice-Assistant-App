"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AuthPageModal from "@/app/(auth)/AuthPageModal";

function AuthPageContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const isModal = searchParams.get('modal') === 'true';

  if (isModal) {
    // Modal mode - blurred background
    return <AuthPageModal>{children}</AuthPageModal>;
  }

  // Full page mode - better for SEO, direct links
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        {children}
      </div>
    </div>
  );
}

export default function AuthPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthPageContent>{children}</AuthPageContent>
    </Suspense>
  );
}
