import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import HeaderSection from "./HeaderSection";
import Specifications from "./Specifications";
import { BenfitsData } from "../../data";


function BenefitsSection() {

  return (
    <section className="headerLoose">
      <HeaderSection />
      {
        BenfitsData.map((item,index)=>{
            return <Specifications key={index} text={item.text} highlight={item.highlight} />
        })
      }
    </section>
  );
}

export default BenefitsSection;

