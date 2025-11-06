"use client";

import dynamic from "next/dynamic";
import { Check } from "lucide-react";

const MotionWrapper = dynamic(
  () => import("@/app/_components/motion/MotionWrapper"),
  { ssr: false }
);
const MotionCard = dynamic(
  () => import("@/app/_components/motion/MotionCard"),
  { ssr: false }
);

export default function Pricing() {
  const plans = [
    {
      title: "Free Trial",
      price: "$0",
      duration: "",
      description:
        "Try VCare’s AI transcription and summarization free for 7 days.",
      features: ["1 Free Medical Consultation", "Free Medical Report"],
      buttonText: "Start Free Trial",
      popular: false,
    },
    {
      title: "Premium Plan",
      price: "$29",
      duration: "/ month",
      description:
        "Unlock unlimited voice recording, advanced AI summaries, and EHR integration.",
      features: [
        "Unlimited transcription & summaries",
        "Advanced AI note structuring",
        "EHR & API integration",
        "HIPAA-compliant secure data",
        "Priority support 24/7",
      ],
      buttonText: "Upgrade to Premium",
      popular: true,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 py-10 md:py-14">
      <MotionWrapper className="max-w-3xl mx-auto space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white p-5">
          Choose Your <span className="text-blue-700">Plan</span>
        </h1>
        <p className="text-gray-300 dark:text-neutral-400 text-base sm:text-lg md:text-lg leading-relaxed">
          Experience the power of AI-driven medical transcription. Start with a
          free trial — upgrade anytime for unlimited access.
        </p>
      </MotionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 w-full max-w-5xl">
        {plans.map((plan, index) => (
          <MotionCard
            key={index}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className={`relative p-6 sm:p-8 rounded-xl border transition-all duration-300 group ${
              plan.popular
                ? "border-blue-700 bg-blue-900/40 hover:bg-blue-800/50 shadow-md shadow-blue-700/30"
                : "border-blue-700/30 hover:border-blue-700 bg-gray-900/40 hover:bg-gray-800/60 shadow-md hover:shadow-blue-700/30"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-4 right-4 bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                Most Popular
              </div>
            )}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {plan.title}
                </h2>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  {plan.description}
                </p>
                <div className="flex justify-center items-baseline mb-6 gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-blue-500">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm sm:text-base">
                    {plan.duration}
                  </span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-300 text-sm sm:text-base"
                    >
                      <Check className="w-4 h-4 text-white mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-2 w-full py-3 px-6 rounded-xl text-base sm:text-lg font-medium transition-all ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-700/30"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          </MotionCard>
        ))}
      </div>
    </div>
  );
}
