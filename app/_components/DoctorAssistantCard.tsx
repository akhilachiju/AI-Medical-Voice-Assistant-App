"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
  doctorAssistant: DoctorAssistant;
};

export default function DoctorAssistantCard({ doctorAssistant }: Props) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] h-full">
      
      {/* Image Container */}
      <div className="relative w-full aspect-4/3">
        <Image
          src={doctorAssistant.image}
          alt={doctorAssistant.specialist}
          fill
          className="object-cover rounded-t-2xl"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <h2 className="font-bold text-lg sm:text-xl text-gray-800 mb-1">
          {doctorAssistant.specialist}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base line-clamp-2 mb-1">
          {doctorAssistant.description}
        </p>

        <Button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 py-2 sm:py-3">
          Start Consultation
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
