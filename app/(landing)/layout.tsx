import dynamic from "next/dynamic";
import LayoutLoader from "@/app/_components/loading/LayoutLoader";

const Header = dynamic(() => import("../_components/Header"), { ssr: true });
const Footer = dynamic(() => import("../_components/Footer"), { ssr: true });

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutLoader text="VCare">
      <div className="flex flex-col min-h-screen">
        <Header showLandingNav={true} />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </LayoutLoader>
  );
}
