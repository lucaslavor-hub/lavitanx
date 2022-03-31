import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import { ScrollTrigger } from "gsap/all";
import DNA from "../../../assets/DNA.png";
import DNA2 from "../../../assets/DNA2.png";

export function SecondAnimationSection() {

  gsap.registerPlugin( ScrollTrigger);

  const DNALeftTop = useRef(null);
  const containerRef = useRef(null);
  const DNALeftBottom = useRef(null); 
  const DNARight= useRef(null); 

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(DNALeftTop.current, { 
      scrollTrigger:  {
        trigger: ".second-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=100% start",
        scrub: true,
        end: "150% start",
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
        trigger: ".second-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=160% start",
        scrub: true,
        end: "200% start",
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
        trigger: ".second-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=120% start",
        scrub: true,
        end: "start+=170% start",
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
        trigger: ".second-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=175% start",
        scrub: true,
        end: "start+=200% start",
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
        trigger: ".second-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=120% start",
        scrub: true,
        end: "start+=150% start",
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
        trigger: ".second-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=160% start",
        scrub: true,
        end: "start+=200% start",
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
  <section ref={containerRef} className="second-animation-pag">
    <img ref={DNALeftTop} className="DNA-left-top"  src={DNA} />
    <img ref={DNALeftBottom} className="DNA-left-bottom"  src={DNA} />
    <img ref={DNARight} className="DNA-right"  src={DNA2} />
    <div className="first-animation-titles-container2">
      <p className="title-second-section-3">Previne o<br/>envelhecimento<br/> precoce</p>
    </div> 
  </section>
    
  )
}
