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

  // useEffect(() => {

  //   let sections = gsap.utils.toArray("section"),
  //   currentSection = sections[0];

  //   gsap.defaults({overwrite: 'auto', duration: 0.3});

  //   sections.forEach((section, i) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: '+='+(i*100)+'%',
  //       end: '+=100vh',
  //       onToggle: self => self.isActive && setSection(section),
  //     });
  //   });

  //   function setSection(newSection) {
  //     if (newSection !== currentSection) {
  //       gsap.to(currentSection, {autoAlpha: 0})
  //       gsap.to(newSection, { autoAlpha: 1});
  //       currentSection = newSection;
  //     }
  //   }

  //   ScrollTrigger.create({
  //   trigger: '#animations-container',
  //   start: 'bottom top',
  //   end: '+=' + sections.length + '00%',
  //   pin: true,
  //   markers: true
  //   });
  // }, []);

    
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
