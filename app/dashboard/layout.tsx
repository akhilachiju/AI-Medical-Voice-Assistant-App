"use client";

import LayoutLoader from "@/app/_components/loading/LayoutLoader";
import dynamic from "next/dynamic";
import { UserProvider } from "../context/UserContext";

const Header = dynamic(() => import("../_components/Header"), { ssr: false });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <LayoutLoader text="Loading Dashboard...">
        <div className="flex flex-col min-h-screen">
          <Header showLandingNav={false} />
          <main className="grow">{children}</main>
        </div>
      </LayoutLoader>
    </UserProvider>
  );
}
