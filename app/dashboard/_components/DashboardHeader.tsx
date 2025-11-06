import { Button } from "@/app/components/ui/button";

export default function DashboardHeader() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500">
        My Dashboard
      </h2>
      <Button className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg font-medium rounded-xl shadow-sm transition-all px-6 py-3 sm:px-8 sm:py-3 w-full sm:w-auto">
        Talk to a Doctor
      </Button>
    </div>
  );
}
