"use client";

import React, { useState } from "react";
import { AIDoctorAssistants } from "@/public/asset";
import DoctorAssistantCard from "./DoctorAssistantCard";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function DoctorAssistantList() {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => setVisibleCount(prev => prev + 8);

  const visibleDoctors = AIDoctorAssistants.slice(0, visibleCount);
  const hasMore = visibleCount < AIDoctorAssistants.length;

  return (
    <section className="mt-10 w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold p-5 text-white">AI Specialist Doctor Assistants</h2>
        <p className="text-gray-300 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto p-2">
          Get personalized medical guidance from our AI-powered doctor assistants — available 24/7 for quick consultations.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleDoctors.map(doctor => (
          <DoctorAssistantCard key={doctor.id} doctorAssistant={doctor} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <Button
            onClick={handleLoadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-medium rounded-xl shadow-sm transition-all px-6 py-3 flex items-center gap-2"
          >
            Load More <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </section>
  );
}

