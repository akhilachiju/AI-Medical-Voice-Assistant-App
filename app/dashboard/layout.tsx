import LayoutLoader from "@/app/_components/loading/LayoutLoader";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../_components/Header"), { ssr: true });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutLoader text="Loading Dashboard...">
      <div className="flex flex-col min-h-screen">
        <Header showLandingNav={false} />
        <main className="grow">{children}</main>
      </div>
    </LayoutLoader>
  );
}
