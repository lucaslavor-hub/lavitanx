import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import { ScrollTrigger } from "gsap/all";
import DNA from "../../../assets/DNA.png";
import DNA2 from "../../../assets/DNA2.png";

export function FourthAnimationSection() {

  gsap.registerPlugin( ScrollTrigger);

  const DNALeftTop = useRef(null);
  const containerRef = useRef(null);
  const DNALeftBottom = useRef(null); 
  const DNARight= useRef(null); 

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(DNALeftTop.current, { 
      scrollTrigger:  {
        trigger: ".fourth-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=600% start",
        scrub: true,
        end: "700% start",
      },
      rotation: -10,
      opacity: 0.5,
      width: "0vw",
      left: "10vw",
      x: "-5vw",
      y:"-2vw",
      immediateRender: false,

    }); 

    gsap.to(DNALeftTop.current, { 
      scrollTrigger:  {
        trigger: ".fourth-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=701% start",
        scrub: true,
        end: "810% start",
      },
      rotation: -10,
      opacity: 0,
      width: "10vw",
      left: "10vw",
      x: "-5vw",
      y:"-2vw",
      immediateRender: false,
    });  

    gsap.from(DNALeftBottom.current, { 
      scrollTrigger:  {
        trigger: ".fourth-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=610% start",
        scrub: true,
        end: "start+=720% start",
      },
      rotation: -10,
      opacity: 0.5,
      width: "0vw",
      left: "10vw",
      x: "-15vw",
      y:"45vw",
      immediateRender: false,

    }); 

    gsap.to(DNALeftBottom.current, { 
      scrollTrigger:  {
        trigger: ".fourth-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=721% start",
        scrub: true,
        end: "start+=810% start",
      },
      rotation: -10,
      opacity: 0,
      width: "100vw",
      x: "15vw",
      y:"-2vw",
      immediateRender: false,
    });  

    gsap.from(DNARight.current, { 
      scrollTrigger:  {
        trigger: ".fourth-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=620% start",
        scrub: true,
        end: "start+=710% start",
      },
      rotation: -10,
      opacity: 0.5,
      width: "0vw",
      right: "10vw",
      x: "-5vw",
      y:"-2vw",
      immediateRender: false,

    }); 

    gsap.to(DNARight.current, { 
      scrollTrigger:  {
        trigger: ".fourth-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=711% start",
        scrub: true,
        end: "start+=810% start",
      },
      rotation: -10,
      opacity: 0,
      width: "10vw",
      right: "10vw",
      x: "-5vw",
      y:"-2vw",
      immediateRender: false,
    });  

  }, []);

  return(
  <section ref={containerRef} className="fourth-animation-pag">
    <img ref={DNALeftTop} className="DNA-left-top4"  src={DNA} />
    <img ref={DNALeftBottom} className="DNA-left-bottom4"  src={DNA} />
    <img ref={DNARight} className="DNA-right4"  src={DNA2} />
    <div className="first-animation-titles-container4">
      <p className="title-second-section-4">Auxilia no<br/>rejuvenescimento</p>
    </div> 
  </section>
    
  )
}
