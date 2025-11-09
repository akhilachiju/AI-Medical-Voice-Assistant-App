"use client";
import History from "@/app/dashboard/_components/History";
import DoctorAssistantList from "@/app/dashboard/_components/DoctorAssistantList";
import DashboardHeader from "@/app/dashboard/_components/DashboardHeader";

export default function Dashboard() {
  return (
    <section className="w-full bg-transparent py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center gap-2 px-6 sm:px-10 md:px-16 lg:px-20">
        <DashboardHeader />
        <div className="w-full">
          <History />
        </div>
        <div className="w-full">
          <DoctorAssistantList />
        </div>
      </div>
    </section>
  );
}
