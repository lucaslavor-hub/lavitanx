import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Power4, ScrollTrigger } from "gsap/all";
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

export function SecondSection({ someText }) {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 900 ) {
      gsap.to(backgroundRef.current, { y: "-24vw", opacity: 1, duration: 3});
    } else{
      gsap.to(backgroundRef.current, { y: "-30vw", opacity: 1, duration: 1});
    }

    gsap.from(".text-animation", { 
      scrollTrigger:  {
        trigger: ".text-animation",
        toggleActions: "restart none reverse none",
        start: "top-=10% bottom",
        end: "top-=10% bottom",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: Power4.easeOut,
    }); 

    timelineGsap(".s1", 2)
    timelineGsap(".s2", 5)
    timelineGsap(".s3", 3)
    timelineGsap(".s4", 3.5)
    timelineGsap(".s5", 9.5)
    timelineGsap(".s6", 2.5)
    timelineGsap(".s7", 4)
    timelineGsap(".s8", 6)
    timelineGsap(".s9", 7)
    timelineGsap(".s10", 8)
    timelineGsap(".s11", 9)

  }, []);

  function timelineGsap(target, delay){
    var tl = gsap.timeline({repeat: -1, repeatDelay: 0.1});
    tl.to(target, {opacity: 1, duration: 0.1, delay:delay})
    tl.to(target, {opacity: 0.9, duration: 0.1});
    tl.to(target, {opacity: 1, duration: 0.1})
  }
  
  return(
  <div ref={backgroundRef} className="background-second-section">
      <div className="orbit-container">
        <Orbit size="14vw" rotationSpeed="10" />
      </div>
      <StarsSecond/>
      <div className="pill-container">
        <AnimatedPill width="4vw" imgSrc={pill6} />
      </div>
      <div className="second-pill-container">
        <AnimatedPill width="5vw" imgSrc={pill7} />
      </div>
      <div className="third-pill-container">
        <AnimatedPill width="4vw" imgSrc={pill9} />
      </div>
      <h2 className="longevity-title text-animation">
        <span className="s1">L</span>
        <span className="s2">O</span>
        <span className="s3">N</span>
        <span className="s4">G</span>
        <span className="s5">E</span>
        <span className="s6">V</span>
        <span className="s7">I</span>
        <span className="s8">D</span>
        <span className="s9">A</span>
        <span className="s10">D</span>
        <span className="s11">E</span>
      </h2>
      <p className="longevity-subtitle text-animation">CUIDAR DO FUTURO <br></br> COMEÇA <p className="longevity-subtitle-bold">AGORA</p></p>
      <img className="shadow-right" src={shadowRight}></img>
      <img className="shadow-left" src={shadowLeft}></img>
    <VideosAnimation />
  </div>
    
  )
}
