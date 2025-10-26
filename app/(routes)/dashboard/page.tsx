"use client";
import React from "react";
import History from "./_components/History";
import { Button } from "@/components/ui/button";
import DoctorAssistantList from "./_components/DoctorAssistantList";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 md:p-10 space-y-2">
      <div className="rounded-2xl px-6 py-1 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h2 className="text-3xl font-bold text-blue-700">My Dashboard</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm transition-all px-4 py-2 sm:px-5 sm:py-3 w-full sm:w-auto">
          Talk to a Doctor
        </Button>
      </div>

      <section className="bg-white rounded-2xl px-4 sm:px-6 lg:px-8">
        <History />
      </section>

      <section className="px-4 sm:px-6 lg:px-2">
        <DoctorAssistantList />
      </section>
    </div>
  );
}
