import dynamic from "next/dynamic";
import Image from "next/image";
import { Mic, Type, FileText, Save, Shield, Server } from "lucide-react";

const MotionWrapper = dynamic(
  () => import("@/app/_components/motion/MotionWrapper"),
  { ssr: false }
);
const MotionText = dynamic(
  () => import("@/app/_components/motion/MotionText"),
  { ssr: false }
);
const MotionCard = dynamic(
  () => import("@/app/_components/motion/MotionCard"),
  { ssr: false }
);

export default function About() {
  const howToUseSteps = [
    {
      id: 1,
      title: "Start a Conversation",
      description:
        "Launch VCare and start speaking naturally. The AI listens and transcribes in real time.",
      icon: <Mic className="text-blue-700 w-8 h-8" />,
    },
    {
      id: 2,
      title: "Automatic Transcription",
      description:
        "Every spoken word becomes text with high medical accuracy and context understanding.",
      icon: <Type className="text-blue-700 w-8 h-8" />,
    },
    {
      id: 3,
      title: "AI Summarization",
      description:
        "VCare automatically summarizes long conversations into structured, readable notes.",
      icon: <FileText className="text-blue-700 w-8 h-8" />,
    },
    {
      id: 4,
      title: "Review & Save",
      description:
        "Quickly review, edit, and store securely in your EHR or export as needed.",
      icon: <Save className="text-blue-700 w-8 h-8" />,
    },
  ];

  const howVCareWorks = [
    {
      id: 1,
      title: "Real-Time Transcription",
      desc: "AI-powered voice-to-text that captures every word with medical-grade precision.",
      icon: <Mic className="w-8 h-8 text-blue-700" />,
    },
    {
      id: 2,
      title: "Intelligent Summarization",
      desc: "Automatically structures conversations into clear, concise, and accurate notes.",
      icon: <FileText className="w-8 h-8 text-blue-700" />,
    },
    {
      id: 3,
      title: "Secure & Compliant",
      desc: "End-to-end encryption and HIPAA compliance ensure your data is always protected.",
      icon: <Shield className="w-8 h-8 text-blue-700" />,
    },
    {
      id: 4,
      title: "EHR Integration",
      desc: "Seamlessly sync your clinical notes with your EHR for faster documentation flow.",
      icon: <Server className="w-8 h-8 text-blue-700" />,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* ABOUT SECTION */}
      <section className="w-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 py-10 md:py-14">
        <MotionWrapper className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold p-5">
            <MotionText text="About" className="text-white" />{" "}
            <MotionText text="VCare" className="text-blue-700" />
          </h1>

          <p className="text-gray-300 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
            <strong>VCare</strong> is an AI-powered medical voice assistant that
            simplifies clinical documentation. It listens, transcribes, and
            organizes doctor-patient conversations with remarkable accuracy and
            security — allowing you to focus on your patients, not paperwork.
          </p>

          <p className="text-gray-300 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
            Built with healthcare professionals in mind, VCare combines advanced
            voice recognition, natural language processing, and data security to
            deliver fast, reliable, and compliant clinical notes.
          </p>
        </MotionWrapper>
      </section>

      {/* HOW VCARE WORKS */}
      <section className="w-full px-6 md:px-10 lg:px-20 py-10 md:py-14">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-10 max-w-6xl mx-auto">
          {/* LEFT: CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-2/3 mt-6 lg:mt-0">
            {howVCareWorks.map((feature, index) => (
              <MotionCard
                key={feature.id}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-xl border border-blue-700/30 hover:border-blue-700 bg-gray-900/40 hover:bg-gray-800/60 shadow-md hover:shadow-blue-700/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 bg-blue-700/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </MotionCard>
            ))}
          </div>

          {/* RIGHT: IMAGE + TEXT */}
          <MotionCard
            whileHover={{ scale: 1.05 }}
            className="w-full lg:w-1/3 flex flex-col justify-start space-y-5 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">
              How <span className="text-blue-700">VCare</span> Works
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              VCare’s AI listens, transcribes, and summarizes every conversation
              with high accuracy — saving time and ensuring precise
              documentation.
            </p>
            <MotionWrapper
              whileHover={{ scale: 1.05 }}
              className="w-full h-56 sm:h-64 md:h-72 mt-2 overflow-hidden rounded-xl"
            >
              <Image
                src="/about_ii.webp"
                alt="VCare workflow"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </MotionWrapper>
          </MotionCard>
        </div>
      </section>

      {/* HOW TO USE VCARE */}
      <section className="w-full px-6 md:px-10 lg:px-20 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row items-start gap-10 max-w-6xl mx-auto">
          {/* LEFT: TEXT + IMAGE */}
          <MotionCard
            whileHover={{ scale: 1.05 }}
            className="w-full lg:w-1/3 flex flex-col justify-start space-y-5 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">
              How to Use <span className="text-blue-700">VCare</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Follow these simple steps to make the most of VCare — from
              starting a conversation to securely saving your notes.
            </p>
            <MotionWrapper
              whileHover={{ scale: 1.05 }}
              className="w-full h-56 sm:h-64 md:h-72 mt-2 overflow-hidden rounded-xl"
            >
              <Image
                src="/about_iii.webp"
                alt="How to use VCare"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </MotionWrapper>
          </MotionCard>

          {/* RIGHT: CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-2/3 mt-6 lg:mt-0">
            {howToUseSteps.map((step, index) => (
              <MotionCard
                key={step.id}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-xl border border-blue-700/30 hover:border-blue-700 bg-gray-900/40 hover:bg-gray-800/60 shadow-md hover:shadow-blue-700/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 bg-blue-700/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
