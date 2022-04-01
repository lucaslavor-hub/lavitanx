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
    const innerWidth = window.innerWidth;

    if (innerWidth > 900) {
      gsap.to(DNALeftTop.current, { 
        scrollTrigger:  {
          trigger: ".second-animation-pag",
          toggleActions: "restart none reverse none",
          start: "start+=250% start",
          scrub: true,
          end: "320% start",
        },
        rotation: 139,
        opacity: 1,
        width: "80vw",
        x: "25vw",
        y:"-5vw",
        immediateRender: false,
  
      }); 
  
      gsap.to(DNALeftTop.current, { 
        scrollTrigger:  {
          trigger: ".second-animation-pag",
          toggleActions: "restart none reverse none",
          start: "start+=320% start",
          scrub: true,
          end: "370% start",
        },
        rotation: 139,
        opacity: 0,
        width: "60vw",
        x: "55vw",
        y:"-10vw",
        immediateRender: false,
      });  
    } else {
      gsap.to(DNALeftTop.current, { 
        scrollTrigger:  {
          trigger: ".second-animation-pag",
          toggleActions: "restart none reverse none",
          start: "start+=250% start",
          scrub: true,
          end: "320% start",
        },
        rotation: 139,
        opacity: 1,
        width: "190vw",
        x: "25vw",
        y:"-5vw",
        immediateRender: false,
  
      }); 
  
      gsap.to(DNALeftTop.current, { 
        scrollTrigger:  {
          trigger: ".second-animation-pag",
          toggleActions: "restart none reverse none",
          start: "start+=320% start",
          scrub: true,
          end: "370% start",
        },
        rotation: 139,
        opacity: 0,
        width: "190vw",
        x: "55vw",
        y:"-10vw",
        immediateRender: false,
      });  
      
    }

    gsap.to(DNALeftBottom.current, { 
      scrollTrigger:  {
        trigger: ".second-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=200% start",
        scrub: true,
        end: "start+=290% start",
      },
      opacity: 1,
      x: "-15vw",
      y:"-15vw",
      rotation: 1,
      immediateRender: false,

    }); 

    gsap.to(DNALeftBottom.current, { 
      scrollTrigger:  {
        trigger: ".second-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=291% start",
        scrub: true,
        end: "start+=340% start",
      },
      opacity: 0,
      x: "-30vw",
      y:"-30vw",
      rotation: 2,
      immediateRender: false,
    });  

    gsap.to(DNARight.current, { 
      scrollTrigger:  {
        trigger: ".second-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=270% start",
        scrub: true,
        end: "start+=340% start",
      },
      rotation: 20,
      opacity: 0.9,
      x: "-25vw",
      y:"-22vw",
      immediateRender: false,

    }); 

    gsap.to(DNARight.current, { 
      scrollTrigger:  {
        trigger: ".second-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=340% start",
        scrub: true,
        end: "start+=410% start",
      },
      rotation: -5,
      rotation: 30,
      opacity: 0,
      x: "-50vw",
      y:"-44vw",
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
