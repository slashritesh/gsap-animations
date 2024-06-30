import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function HeaderSection() {
  const headerPin = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: headerPin.current,
      start: "top 0px",
      end: "+=6880",
      pin: true,
      pinSpacing: false,
      markers: true,
      onEnter: () => (headerPin.current.style.transform = "translateY(0)"), // Show header when entering pin state
      onLeaveBack: () =>
        (headerPin.current.style.transform = "translateY(-100%)"),
    });
  }, []);

  return (
    <div
      ref={headerPin}
      className="z-40 px-20 bg-black backdrop-blur-lg top-0 flex justify-between py-12"
    >
      <div className="bg-black">
        <h1 className="text-3xl backdrop-blur-lg capitalize">
          Explore the endless specifications <br /> of Sony bravia xR
        </h1>
      </div>
      <div className="flex gap-5 items-end">
        {["picture", "Sound", "Design", "Eco-friendly"].map((item) => {
          return (
            <h3 className="text-lg rounded-full px-5 py-2 border">{item}</h3>
          );
        })}
      </div>
    </div>
  );
}
