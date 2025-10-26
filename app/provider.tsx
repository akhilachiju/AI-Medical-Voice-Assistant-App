"use client";
import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const CreateNewUser = () => {};
  return (
    <div>
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-6 sm:py-10">
        {children}
      </div>
    </div>
  );
}
