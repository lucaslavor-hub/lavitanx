import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./styles.css";


export function Example({ someText }) {
  const boxRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".example_text", { 
      scrollTrigger:  {
        trigger: ".example_text",
        toggleActions: "restart pause reverse pause",
        start: "center center",
        scrub: true,
        markers: true
      },
      y: 400,
      rotation: 360
    });
  }, []);

  return(
  <>
    <div className="space" />
    <h1 className="example_text" ref={boxRef}>{someText}</h1>
    <div className="space" />
  </>
    
  )
}