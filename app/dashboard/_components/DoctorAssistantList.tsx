import { AIDoctorAssistants } from "@/public/asset";
import DoctorAssistantGrid from "./DoctorAssistantGrid";

// Server component - static structure
export default function DoctorAssistantList() {
  return (
    <section className="mt-10 w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold p-5 text-white">
          AI Specialist Doctor Assistants
        </h2>
        <p className="text-gray-300 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto p-2">
          Get personalized medical guidance from our AI-powered doctor assistants — available 24/7 for quick consultations.
        </p>
      </div>

      <DoctorAssistantGrid doctors={AIDoctorAssistants} />
    </section>
  );
}

