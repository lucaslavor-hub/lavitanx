import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import yellowSphereLeft from "../../../assets/yellowSphereLeft.svg";
import yellowSphereRight from "../../../assets/yellowSphereRight.svg";

export function FirstAnimationSection() {

  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


  // gsap.utils.toArray(".panel").forEach((panel, i) => {
  //   ScrollTrigger.create({
  //     trigger: panel,
  //     start: "top top", 
  //     pin: true, 
  //     pinSpacing: false 
  //   });
  // });
  
  
  // ScrollTrigger.create({
  //   snap: 1 / 4 // snap whole page to the closest section!
  // });


  return(
  <section className="first-animation-page">
    <img className="yellow-sphere-left"  src={yellowSphereLeft} />
    <img className="yellow-sphere-right"  src={yellowSphereRight} />
    <div className="first-animation-titles-container">
      <p className="pre-title-section-3">Benefícios do</p> 
      <p className="title-section-3">MULTIVITAMÍNICO<br/> ANTIOXIDANTE</p>
    </div> 
  </section>
    
  )
}
