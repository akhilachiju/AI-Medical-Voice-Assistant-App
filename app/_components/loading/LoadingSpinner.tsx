// app/_components/LoadingSpinner.tsx
"use client";

import React from "react";

interface LoadingSpinnerProps {
  text?: string;
}

export default function LoadingSpinner({ text = "Loading..." }: LoadingSpinnerProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 text-white">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      {text && <p className="mt-4 text-xl font-semibold">{text}</p>}
    </div>
  );
}
