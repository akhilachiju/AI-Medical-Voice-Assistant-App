"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function History() {
  const [history, setHistory] = useState([]);

  return (
    <div className="my-0.5">
      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-4 sm:p-7 border-dashed rounded-2xl border-2">
          <Image
            src={'/history_hero.webp'}
            alt="No history"
            width={200}
            height={200}
            className="w-36 h-36 sm:w-48 sm:h-48"
          />
          <h2 className="text-xl sm:text-xl font-bold text-gray-700 mt-2 text-center">
            No Recent Consultations
          </h2>
          <p className="text-gray-500 text-sm sm:text-base text-center">
            It looks like you haven't consulted with any doctors yet.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm transition-all mt-3 px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
            New Consultation
          </Button>
        </div>
      ) : (
        <div className="w-full">
          <h2 className="text-xl sm:text-xl font-semibold mb-4 text-gray-800">
            Your Consultation History
          </h2>
        </div>
      )}
    </div>
  );
}
