"use client";

import React from "react";
import History from "@/app/(dashboard)/_components/History";
import DoctorAssistantList from "@/app/(dashboard)/_components/DoctorAssistantList";
import { Button } from "@/app/components/ui/button";

export default function Dashboard() {
  return (
    <section className="w-full bg-transparent py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center gap-2  px-6 sm:px-10 md:px-16 lg:px-20">

        {/* Dashboard Header */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500">
            My Dashboard
          </h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg font-medium rounded-xl shadow-sm transition-all px-6 py-3 sm:px-8 sm:py-3 w-full sm:w-auto">
            Talk to a Doctor
          </Button>
        </div>

        {/* History Section */}
        <div className="w-full">
          <History />
        </div>

        {/* Doctor Assistant List Section */}
        <div className="w-full">
          <DoctorAssistantList />
        </div>

      </div>
    </section>
  );
}
