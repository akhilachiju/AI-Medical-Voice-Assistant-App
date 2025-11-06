"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Hero = dynamic(() => import("./_components/Hero"), { ssr: false });
const About = dynamic(() => import("./_components/About"), { ssr: false });
const Pricing = dynamic(() => import("./_components/Pricing"), { ssr: false });
const Contact = dynamic(() => import("./_components/Contact"), { ssr: false });

export default function LandingPage() {
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-transparent">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="pricing"><Pricing /></section>
        <section id="contact"><Contact /></section>
    </div>
  );
}
