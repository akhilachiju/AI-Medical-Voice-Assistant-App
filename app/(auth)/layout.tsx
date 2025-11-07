import Header from "../_components/Header";
import Footer from "../_components/Footer";
import LandingContent from "../(landing)/LandingContent";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <LandingContent>
      <Header showLandingNav={true} />
      <main className="grow">{children}</main>
      <Footer />
    </LandingContent>
  );
}
