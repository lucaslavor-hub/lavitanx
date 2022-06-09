import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Power4, ScrollTrigger, Power0 } from "gsap/all";
import "./styles.css";
import shadowRight from "../../assets/ShadowRight2.svg";
import shadowLeft from "../../assets/ShadowLeft2.svg";
import { Orbit } from "..";
import { StarsSecond } from "../StarsSecond/StarsSecond";
import { VideosAnimation } from "./VideosAnimation/VideosAnimation";
import pill6 from '../../assets/pills/pill_5.png';
import pill7 from '../../assets/pills/pill_1.png';
import pill9 from '../../assets/pills/pill_9.png';
import { AnimatedPill } from "..";

const isMobile = window.innerWidth <= 900;

export function SecondSection({ someText }) {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 900 ) {
      gsap.to(backgroundRef.current, { y: "-24vw", opacity: 1, duration: 3});
    } else{
      gsap.to(backgroundRef.current, { y: "-30vw", opacity: 1, duration: 1});
    }

    // gsap.from(".text-animation", { 
    //   scrollTrigger:  {
    //     trigger: ".text-animation",
    //     toggleActions: "restart none reverse none",
    //     start: "top-=10% bottom",
    //     end: "top-=10% bottom",
    //   },
    //   y: 100,
    //   opacity: 0,
    //   duration: 1,
    //   ease: Power4.easeOut,
    // }); 
  }, []);

  
  return(
  <div ref={backgroundRef} className="background-second-section">
      <div className="orbit-container">
        <Orbit size="14vw" rotationSpeed="10" />
      </div>
      <StarsSecond/>
      {!isMobile && <div className="pill-container">
        <AnimatedPill width="100%" imgSrc={pill6} />
      </div>}
      <div className="second-pill-container">
        <AnimatedPill width="100%" imgSrc={pill7} />
      </div>
      <div className="third-pill-container">
        <AnimatedPill width="100%" imgSrc={pill9} />
      </div>

       <h2 className="longevity-title text-animation"> LONGEVIDADE </h2>
      <p className="longevity-subtitle text-animation">CUIDAR DO FUTURO <br></br> COMEÇA <p className="longevity-subtitle-bold">AGORA</p></p>
      <img className="shadow-right" src={shadowRight}></img>
      <img className="shadow-left" src={shadowLeft}></img>
    <VideosAnimation />
  </div>
    
  )
}
