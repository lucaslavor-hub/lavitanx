import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

export function SecondAnimationSection() {

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
  <section className="second-animation-pag">
    <div className="first-animation-titles-container2">
      <p className="title-second-section-3">Previne o<br/>envelhecimento<br/> precoce</p>
    </div> 
  </section>
    
  )
}
