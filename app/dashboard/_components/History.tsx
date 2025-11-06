import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import HistoryContent from "./HistoryContent";

// This can be server component - static structure
export default function History() {
  return (
    <section className="w-full bg-transparent pb-10 md:pb-16 lg:pb-10">
      <div className="w-full mx-auto flex flex-col items-center gap-5">
        <HistoryContent />
      </div>
    </section>
  );
}
