import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import LandingContent from "@/app/(landing)/LandingContent";
import { AuthModalProvider } from "./AuthModalProvider";
import AuthModal from "./AuthModal";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthModalProvider>
      <LandingContent>
        <Header showLandingNav={true} />
        <main className="grow">{children}</main>
        <Footer />
        <AuthModal />
      </LandingContent>
    </AuthModalProvider>
  );
}
