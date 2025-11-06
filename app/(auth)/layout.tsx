import Header from "../_components/Header";
import Footer from "../_components/Footer";
import LayoutLoader from "@/app/_components/loading/LayoutLoader";
import LandingContent from "../(landing)/LandingContent";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutLoader text="VCare">
      <LandingContent>
        <Header showLandingNav={true} />
        <main className="grow">{children}</main>
        <Footer />
      </LandingContent>
    </LayoutLoader>
  );
}
