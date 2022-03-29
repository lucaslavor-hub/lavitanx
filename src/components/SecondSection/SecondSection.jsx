import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import shadowRight from "../../assets/ShadowRight2.svg";
import shadowLeft from "../../assets/ShadowLeft2.svg";
import { Orbit } from "../";
import { VideosAnimation } from "./VideosAnimation/VideosAnimation";

export function SecondSection({ someText }) {
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.to(backgroundRef.current, { y: "-24vw", opacity: 1, duration: 3});

  }, []);
  
  return(
  <div ref={backgroundRef} className="background-second-section">
      <div className="orbit-container">
        <Orbit size="14vw" rotationSpeed="10" />
      </div>
      <h2 className="longevity-title">LONGEVIDADE</h2>
      <p className="longevity-subtitle">CUIDAR DO FUTURO <br></br> COMEÇA <p className="longevity-subtitle-bold">AGORA</p></p>
      <img className="shadow-right" src={shadowRight}></img>
      <img className="shadow-left" src={shadowLeft}></img>
    <VideosAnimation />
  </div>
    
  )
}
