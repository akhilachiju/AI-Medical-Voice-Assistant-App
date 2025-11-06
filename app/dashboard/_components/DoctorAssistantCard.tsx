import Image from "next/image";
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
  doctorAssistant: DoctorAssistant;
};

export default function DoctorAssistantCard({ doctorAssistant }: Props) {
  return (
    <div className="flex flex-col bg-gray-900/40 rounded-xl border border-blue-700/30 shadow-md overflow-hidden transition-all duration-300 hover:shadow-blue-700/30 hover:border-blue-700 hover:bg-gray-800/60 hover:scale-[1.03] h-full">
      
      {/* Image */}
      <div className="relative w-full aspect-4/3">
        <Image
          src={doctorAssistant.image}
          alt={doctorAssistant.specialist}
          fill
          className="object-cover rounded-t-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col grow">
        <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
          {doctorAssistant.specialist}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-3 mb-4">
          {doctorAssistant.description}
        </p>

        <Button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-medium rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 py-2 sm:py-3">
          Start Consultation
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
