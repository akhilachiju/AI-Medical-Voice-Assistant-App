"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import {
  MotionWrapper,
  MotionText,
  MotionCard,
} from "@/app/_components/motion";

export default function History() {
  const [history, setHistory] = useState<any[]>([]);

  return (
    <section className="w-full bg-transparent pb-10 md:pb-16 lg:pb-10">
      <div className="w-full mx-auto flex flex-col items-center gap-5">
        {history.length === 0 ? (
          <MotionCard className="flex flex-col items-center justify-center p-6 sm:p-8 border-dashed border-2 text-gray-700 rounded-2xl w-full text-center transition-all">
            <MotionWrapper whileHover={{ scale: 1.05 }}>
              <Image
                src={"/history_hero.webp"}
                alt="No history"
                width={250}
                height={250}
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
              />
            </MotionWrapper>
            <h2 className="text-xl font-bold text-gray-700 mt-4">
              No Recent Consultations
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              It looks like you haven't consulted with any doctors yet.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-medium rounded-xl shadow-sm transition-all mt-5 px-6 py-3 sm:px-8 sm:py-3 w-full sm:w-auto">
              New Consultation
            </Button>
          </MotionCard>
        ) : (
          <div className="w-full flex flex-col gap-6">
            <MotionText
              text="Your Consultation History"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700"
            />
            {history.map((item, index) => (
              <MotionWrapper
                key={index}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 sm:p-6 rounded-xl bg-gray-900/30 border border-blue-700/20 shadow-md hover:shadow-blue-700/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </MotionWrapper>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
