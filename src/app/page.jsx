"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import BenefitsSection from "../components/BenefitsSection";
import gsap from "gsap";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";


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
        
        <div className="h-screen bg-blue-300"></div>
      </main>
    </>
  );
}
