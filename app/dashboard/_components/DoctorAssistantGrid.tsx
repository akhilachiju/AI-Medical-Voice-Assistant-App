"use client";

import { useState } from "react";
import DoctorAssistantCard from "./DoctorAssistantCard";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

type DoctorAssistant = {
  id: number;
  specialist: string;
  description: string;
  image: string;
  agentPrompt: string;
  voiceId: string;
  subscriptionRequired: boolean;
};

type Props = {
  doctors: DoctorAssistant[];
};

export default function DoctorAssistantGrid({ doctors }: Props) {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => setVisibleCount(prev => prev + 8);

  const visibleDoctors = doctors.slice(0, visibleCount);
  const hasMore = visibleCount < doctors.length;

  return (
    <>
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
    </>
  );
}
