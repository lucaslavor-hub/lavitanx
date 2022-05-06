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
import L from '../../assets/longevidade/L.svg';
import O from '../../assets/longevidade/O.svg';
import N from '../../assets/longevidade/N.svg';
import G from '../../assets/longevidade/G.svg';
import E from '../../assets/longevidade/E.svg';
import V from '../../assets/longevidade/V.svg';
import I from '../../assets/longevidade/I.svg';
import D from '../../assets/longevidade/D.svg';
import A from '../../assets/longevidade/A.svg';
import D2 from '../../assets/longevidade/D2.svg';
import E2 from '../../assets/longevidade/E2.svg';

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
    timelineGsap(".sec11", 9)

  }, []);

  function timelineGsap(target, delay){
    var tl = gsap.timeline({repeat: -1, repeatDelay: 0.1});
    tl.to(target, {opacity: 1, duration: 0.1, delay:delay})
    tl.to(target, {opacity: 0.3, duration: 0.1, ease:Power0.easeOut});
    tl.to(target, {opacity: 1, duration: 0.1})
  }
  
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
      {/* <h2 className="longevity-title text-animation">
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
      </h2> */}
      <div className="longevity-title text-animation">
        <img className="s1 longevity-letter" src={L}/>
        <img className="s2 longevity-letter" src={O}/>
        <img className="s3 longevity-letter" src={N}/>
        <img className="s4 longevity-letter" src={G}/>
        <img className="s5 longevity-letter" src={E}/>
        <img className="s6 longevity-letter" src={V}/>
        <img className="s7 longevity-letter" src={I}/>
        <img className="s8 longevity-letter" src={D}/>
        <img className="s9 longevity-letter" src={A}/>
        <img className="s10 longevity-letter" src={D2}/>
        <img className="sec11 longevity-letter" src={E2}/>
      </div>
      <p className="longevity-subtitle text-animation">CUIDAR DO FUTURO <br></br> COMEÇA <p className="longevity-subtitle-bold">AGORA</p></p>
      <img className="shadow-right" src={shadowRight}></img>
      <img className="shadow-left" src={shadowLeft}></img>
    <VideosAnimation />
  </div>
    
  )
}
