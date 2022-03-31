import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import yellowSphereLeft from "../../../assets/yellowSphereLeft.svg";
import yellowSphereRight from "../../../assets/yellowSphereRight.svg";

export function FirstAnimationSection() {

  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  const leftSphereRef = useRef(null);
  const containerRef = useRef(null);
  const rightSphereRef = useRef(null); 

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(leftSphereRef.current, { 
      scrollTrigger:  {
        trigger: ".first-animation-page",
        toggleActions: "restart none reverse none",
        start: "star start",
        scrub: true,
        end: "100% start",
      },
      rotation: -100,
      blur: 8,
      opacity: 0.5,
      x: "-5vw",
      y:"-2vw"
    }); 

    gsap.to(rightSphereRef.current, { 
      scrollTrigger:  {
        trigger: ".first-animation-page",
        toggleActions: "restart none reverse none",
        start: "star+=10% start",
        scrub: true,
        end: "100% start",
      },
      rotation: -100,
      blur: 8,
      opacity: 0.5,
      x: "-5vw",
      y:"-2vw"
    }); 

  }, []);



  return(
  <section ref={containerRef} className="first-animation-page first">
    <img ref={leftSphereRef} className="yellow-sphere-left"  src={yellowSphereLeft} />
    <img ref={rightSphereRef} className="yellow-sphere-right"  src={yellowSphereRight} />
    <div className="first-animation-titles-container">
      <p className="pre-title-section-3">Benefícios do</p> 
      <p className="title-section-3">MULTIVITAMÍNICO<br/> ANTIOXIDANTE</p>
    </div> 
  </section>
    
  )
}
