"use client";
import { useEffect } from "react";
import BenefitsSection from "../components/BenefitsSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import SmartFeatures from "../components/SmartFeatures";


export default function Home() {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);



  return (
    <>
      <main className="text-white bg-black">
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        <SmartFeatures />
      </main>
    </>
  );
}
