import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import { ScrollTrigger, Power4 } from "gsap/all";
import DNA from "../../../assets/DNA_section2.png";
import DNA2 from "../../../assets/DNA2.png";

export function FourthAnimationSection() {

  gsap.registerPlugin( ScrollTrigger);

  const DNALeftTop = useRef(null);
  const containerRef = useRef(null);
  const DNALeftBottom = useRef(null); 
  const DNARight= useRef(null); 

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const innerWidth = window.innerWidth;

    if (innerWidth > 900) {
      gsap.to(DNARight.current, { 
        scrollTrigger:  {
          trigger: ".fourth-animation-pag",
          toggleActions: "restart none reverse none",
          start: "start+=670% start",
          scrub: true,
          end: "start+=750% start",
  
        },
        rotation: 20,
        opacity: 1,
        width: "142vw",
        x: "15vw",
        y:"18vw",
        immediateRender: false,
  
      }); 

      gsap.to(DNALeftBottom.current, { 
        scrollTrigger:  {
          trigger: ".fourth-animation-pag",
          toggleActions: "restart none reverse none",
          start: "start+=600% start",
          scrub: true,
          end: "start+=680% start",
        },
        rotation: "30",
        opacity: 0.5,
        width: "100vw",
        x: "-15vw",
        y:"-15vw",
        immediateRender: false,
  
      }); 
    } else {
      gsap.to(DNARight.current, { 
        scrollTrigger:  {
          trigger: ".fourth-animation-pag",
          toggleActions: "restart none reverse none",
          start: "start+=670% start",
          scrub: true,
          end: "start+=750% start",
  
        },
        rotation: 20,
        opacity: 1,
        width: "142vw",
        x: "15vw",
        y:"38vw",
        immediateRender: false,
  
      }); 

      gsap.to(DNALeftBottom.current, { 
        scrollTrigger:  {
          trigger: ".fourth-animation-pag",
          toggleActions: "restart none reverse none",
          start: "start+=600% start",
          scrub: true,
          end: "start+=680% start",
        },
        rotation: 10,
        opacity: 0.5,
        width: "100vw",
        x: "-15vw",
        y:"-65vw",
        immediateRender: false,
  
      }); 
    }
    gsap.to(DNALeftTop.current, { 
      scrollTrigger:  {
        trigger: ".fourth-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=650% start",
        scrub: true,
        end: "740% start",
      },
      rotation:105,
      opacity: 0.5,
      width: "90vw",
      x: "-27vw",
      y:"0vw",
      immediateRender: false,

    }); 

    gsap.to(DNALeftTop.current, { 
      scrollTrigger:  {
        trigger: ".fourth-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=741% start",
        scrub: true,
        end: "770% start",
      },
      rotation: 145,
      opacity: 0,
      width: "40vw",
      x: "-5vw",
      y:"-2vw",
      immediateRender: false,
    });  

    gsap.to(DNALeftBottom.current, { 
      scrollTrigger:  {
        trigger: ".fourth-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=681% start",
        scrub: true,
        end: "start+=760% start",
      },
      rotation: "80",
      opacity: 0,
      width: "50vw",
      x: "-15vw",
      y:"-15vw",
      immediateRender: false,
    });  

    gsap.to(DNARight.current, { 
      scrollTrigger:  {
        trigger: ".fourth-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=751% start",
        scrub: true,
        end: "start+=810% start",
      },
      rotation: 23,
      opacity: 0,
      width: "52vw",
      x: "0vw",
      y:"-6vw",
      immediateRender: false,
    });  

    gsap.from(".text-animation-4", { 
      scrollTrigger:  {
        trigger: ".fourth-animation-pag",
        toggleActions: "restart none reverse none",
        start: "start+=600% start",
        end: "start+=600% start",
      },
      opacity: 0,
      fontSize: 100,
      duration: 1,
    }); 
  }, []);

  return(
  <section ref={containerRef} className="fourth-animation-pag">
    <img ref={DNALeftTop} className="DNA-left-top4"  src={DNA} />
    <img ref={DNALeftBottom} className="DNA-left-bottom4"  src={DNA} />
    <img ref={DNARight} className="DNA-right4"  src={DNA} />
    <div className="first-animation-titles-container4">
      <p className="title-second-section-4 text-animation-4">Auxilia no<br/>rejuvenescimento</p>
    </div> 
  </section>
    
  )
}
