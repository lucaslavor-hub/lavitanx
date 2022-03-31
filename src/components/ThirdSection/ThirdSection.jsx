import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import rocket from "../../assets/Rocket.png";
import whiteWaveTop from "../../assets/topWave.svg";
import whiteWaveBottom from "../../assets/bottomWave.svg";
import { Carousel } from "./Carousel/Carousel";

export function ThirdSection() {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    
  return(
  <div className="third-section">

    <img className="white-wave-top"  src={whiteWaveTop} />

    <Carousel/>

    <img className="white-wave-bottom"  src={whiteWaveBottom} />

    {/* <img id="tractor"  src={rocket} /> */}
    {/* <RocketLine id="motionSVG" className="line"></RocketLine>
    <RocketAndLine id="motionSVG" className="line"></RocketAndLine> */}
      
  </div>
    
  )
}
