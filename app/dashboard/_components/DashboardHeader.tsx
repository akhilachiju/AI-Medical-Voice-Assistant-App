"use client";
import { Button } from "@/app/components/ui/button";
import { useUserData } from "@/app/context/UserContext";

export default function DashboardHeader() {
  const { userData, loading } = useUserData();

  // useEffect(() => {
  //   if (userData) {
  //     console.log("Using data from CONTEXT (no API call):", userData);
  //   }
  // }, [userData]);

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500">
          My Dashboard
        </h2>
        {!loading && userData && (
          <p className="text-sm text-gray-400 mt-1">
            Credits: {userData.credits} | {userData.isPaid ? "Premium" : "Free"}
          </p>
        )}
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg font-medium rounded-xl shadow-sm transition-all px-6 py-3 sm:px-8 sm:py-3 w-full sm:w-auto">
        Talk to a Doctor
      </Button>
    </div>
  );
}
