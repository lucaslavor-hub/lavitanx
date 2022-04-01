import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Power4 from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function useAnimationText(text) {

  useEffect(() => {
    gsap.from(text, { 
      scrollTrigger:  {
        trigger: text,
        toggleActions: "restart none reverse none",
        start: "top+=4% bottom",
        end: "top-1px bottom",
        markers: true,
      },
      y: 100,
      opacity: 0,
      duration: 1.8,
      ease: Power4.easeOut,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
  }, []);
}