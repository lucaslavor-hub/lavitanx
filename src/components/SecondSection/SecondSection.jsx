import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Power4, ScrollTrigger } from "gsap/all";
import "./styles.css";
import shadowRight from "../../assets/ShadowRight2.svg";
import shadowLeft from "../../assets/ShadowLeft2.svg";
import { Orbit } from "..";
import { StarsSecond } from "../StarsSecond/StarsSecond";
import { VideosAnimation } from "./VideosAnimation/VideosAnimation";

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

    var tl = gsap.timeline({repeat: -1, repeatDelay: 0.1});
    tl.to(".s1", {opacity: 1, duration: 0.1})
    tl.to(".s1", {opacity: 0.9, duration: 0.1});
    tl.to(".s1", {opacity: 1, duration: 0.1})



  }, []);
  
  return(
  <div ref={backgroundRef} className="background-second-section">
      <div className="orbit-container">
        <Orbit size="14vw" rotationSpeed="10" />
      </div>
      <StarsSecond/>

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
