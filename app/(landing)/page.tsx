import Hero from "./_components/Hero";
import About from "./_components/About";
import Pricing from "./_components/Pricing";
import Contact from "./_components/Contact";
import ScrollToTop from "@/app/_components/ScrollToTop";

export default function LandingPage() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-transparent">
      <ScrollToTop />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="pricing"><Pricing /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
