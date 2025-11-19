import Header from "../_components/Header";
import Footer from "../_components/Footer";
import LayoutLoader from "@/app/_components/loading/LayoutLoader";
import LandingContent from "./LandingContent";
import { AuthModalProvider } from "../(auth)/AuthModalProvider";
import AuthModal from "../(auth)/AuthModal";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthModalProvider>
      <LayoutLoader text="VCare">
        <LandingContent>
          <Header showLandingNav={true} />
          <main className="grow">{children}</main>
          <Footer />
          <AuthModal />
        </LandingContent>
      </LayoutLoader>
    </AuthModalProvider>
  );
}
