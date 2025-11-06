"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const MotionWrapper = dynamic(
  () => import("@/app/_components/motion/MotionWrapper"),
  { ssr: false }
);
const MotionCard = dynamic(
  () => import("@/app/_components/motion/MotionCard"),
  { ssr: false }
);

export default function ContactSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is VCare HIPAA-compliant?",
      answer:
        "Yes, VCare uses encrypted transmission and HIPAA-certified infrastructure to ensure full data privacy.",
    },
    {
      question: "Can I integrate VCare with my EHR system?",
      answer:
        "Absolutely. We provide secure API integrations with most major EHR systems for smooth workflow.",
    },
    {
      question: "Does VCare support multiple languages?",
      answer:
        "Currently, we support English and are working on adding multilingual support for global accessibility.",
    },
    {
      question: "How accurate is the transcription?",
      answer:
        "Our medical speech models achieve over 96% accuracy in clinical settings and continue improving with AI updates.",
    },
    {
      question: "Is internet connection required?",
      answer:
        "Yes, an internet connection is needed for AI transcription and summarization to work efficiently.",
    },
    {
      question: "Can I use VCare on mobile devices?",
      answer:
        "Yes, VCare is fully responsive and optimized for both web and mobile interfaces.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 py-10 md:py-14">
      {/* Header */}
      <MotionWrapper className="max-w-3xl text-center space-y-4 sm:space-y-6 mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white p-5">
          Contact <span className="text-blue-700">VCare</span>
        </h1>
        <p className="text-gray-300  dark:text-neutral-400  text-sm sm:text-base md:text-lg leading-relaxed">
          Have questions or need support? Fill out the form below, and our team
          will get back to you as soon as possible.
        </p>
      </MotionWrapper>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* FAQ Card */}
        <MotionCard className="flex flex-col justify-between p-6 sm:p-8 shadow-md rounded-xl border border-blue-700/30 bg-gray-900/40 hover:shadow-blue-700/20 transition-all">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <MotionCard
                key={index}
                className="border border-blue-700/30 rounded-xl p-4 bg-gray-900/40 hover:bg-gray-800/60 cursor-pointer hover:border-blue-700 transition-all"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`text-blue-700 transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openFAQ === index ? 1 : 0,
                    height: openFAQ === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="overflow-hidden text-gray-400 mt-2 text-sm sm:text-base leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              </MotionCard>
            ))}
          </div>
        </MotionCard>

        {/* Contact Form Card */}
        <MotionCard className="flex flex-col justify-between p-6 sm:p-8 shadow-md rounded-xl border border-blue-700/30 bg-gray-900/40 hover:shadow-blue-700/20 transition-all">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-6">
            Send Us a Message
          </h2>
          <div className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 sm:p-4 rounded-xl border border-blue-700/30 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 sm:p-4 rounded-xl border border-blue-700/30 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="p-3 sm:p-4 rounded-xl border border-blue-700/30 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-700 flex-1"
            />
          </div>
          <MotionWrapper className="mt-4 w-full">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-medium py-3 rounded-xl transition-all"
            >
              Send Message
            </button>
          </MotionWrapper>
        </MotionCard>
      </div>
    </div>
  );
}
