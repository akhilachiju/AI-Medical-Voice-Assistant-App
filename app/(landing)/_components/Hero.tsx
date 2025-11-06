"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useAuthModal } from "@/app/_components/AuthModalProvider";

const MotionWrapper = dynamic(
  () => import("@/app/_components/motion/MotionWrapper"),
  { ssr: false }
);
const MotionText = dynamic(
  () => import("@/app/_components/motion/MotionText"),
  { ssr: false }
);

export default function Hero() {
  const { isSignedIn } = useAuth();
  const { openModal } = useAuthModal();

  return (
    <section className="w-full bg-transparent py-10 md:py-16 lg:my-25">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 px-6 sm:px-10 md:px-16 lg:px-20">
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-5 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold hover:text-blue-700 transition-colors">
            <MotionText
              text="Welcome to"
              className="text-white"
              delayStep={0.1}
            />
            <MotionText
              text="VCare"
              className="text-blue-600 hover:text-blue-700"
              delayStep={0.1}
            />
          </h1>

          <h2 className="max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-colors">
            <MotionText text="AI Medical Voice Assistant" />
          </h2>

          <MotionWrapper className="max-w-md sm:max-w-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
            Empower healthcare professionals with seamless, voice-driven
            documentation. Record, transcribe, and summarize patient
            conversations in seconds — powered by AI.
          </MotionWrapper>

          <MotionWrapper className="mt-4 flex justify-center md:justify-start">
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button className="w-48 sm:w-56 md:w-60 transform bg-blue-600 px-6 py-2 text-base sm:text-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 rounded-xl shadow-sm">
                  Explore Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            ) : (
              <Button 
                onClick={() => openModal("signin")}
                className="w-48 sm:w-56 md:w-60 transform bg-blue-600 px-6 py-2 text-base sm:text-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 rounded-xl shadow-sm"
              >
                Explore Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </MotionWrapper>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <MotionWrapper
            whileHover={{ scale: 1.1 }}
            className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px]"
          >
            <Image
              src="/landing_hero.webp"
              alt="AI Medical Voice Assistant"
              width={600}
              height={600}
              className="w-full h-full object-contain"
              priority
              sizes="(max-width: 768px) 300px,
                     (max-width: 1024px) 420px,
                     520px"
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
