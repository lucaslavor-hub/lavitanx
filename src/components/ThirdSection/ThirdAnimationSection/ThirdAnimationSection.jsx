import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import { ScrollTrigger } from "gsap/all";
import lavitanCell from "../../../assets/lavitan_cell.png";
import cell from "../../../assets/cell.png";
import cellBlur from "../../../assets/cell_blur.png";

export function ThirdAnimationSection() {

  gsap.registerPlugin( ScrollTrigger);

  const cellLeftTop = useRef(null);
  const cellLeftBottom = useRef(null);
  const cellRightBottom = useRef(null);
  const cellRightTop = useRef(null);
  const cellCenterTop = useRef(null);
  const containerRef = useRef(null);


  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const innerWidth = window.innerWidth;

    if (innerWidth > 900) {
      gsap.to(cellLeftBottom.current, { 
        scrollTrigger:  {
          trigger: containerRef.current,
          toggleActions: "restart none reverse none",
          start: "start+=470% start",
          scrub: true,
          end: "510% start",
        },
        width:"40vw",
        rotation: 100,
        opacity: 0.4,
        immediateRender: false,
        x: "5vw",
        y: "7vw",
      }); 
      
      gsap.to(cellRightBottom.current, { 
        scrollTrigger:  {
          trigger: containerRef.current,
          toggleActions: "restart none reverse none",
          start: "start+=420% start",
          scrub: true,
          end: "520% start",
        },
        width:"10vw",
        rotation: 10,
        opacity: 0,
        immediateRender: false,
        width: "44vw",
        opacity: 1,
        rotation: 50,
        y:"-20vw",
        x:"-2vw",
      }); 

    gsap.to(cellLeftTop.current, { 
      scrollTrigger:  {
        trigger: containerRef.current,
        toggleActions: "restart none reverse none",
        start: "start+=400% start",
        scrub: true,
        end: "490% start",
      },
      opacity: 0.5,
      top: "10vw",
      width: "27vw",
      left:"5vw",
      rotation: 20,
      immediateRender: false,
    }); 

    gsap.to(cellRightTop.current, { 
      scrollTrigger:  {
        trigger: containerRef.current,
        toggleActions: "restart none reverse none",
        start: "start+=480% start",
        scrub: true,
        end: "530% start",
      },
      width:"20vw",
      rotation: "-40",
      opacity: 1,
      x: "-10vw",
      y: "-2vw",
      immediateRender: false,
    }); 

    } else {

      gsap.to(cellRightBottom.current, { 
        scrollTrigger:  {
          trigger: containerRef.current,
          toggleActions: "restart none reverse none",
          start: "start+=420% start",
          scrub: true,
          end: "520% start",
        },
        width:"100vw",
        rotation: 10,
        opacity: 0,
        immediateRender: false,
        opacity: 1,
        rotation: 100,
        y:"-20vw",
        x:"-2vw",
      }); 

      gsap.to(cellLeftBottom.current, { 
        scrollTrigger:  {
          trigger: containerRef.current,
          toggleActions: "restart none reverse none",
          start: "start+=470% start",
          scrub: true,
          end: "510% start",
        },
        width:"40vw",
        rotation: 100,
        opacity: 0.4,
        immediateRender: false,
        x: "5vw",
        y: "7vw",
      }); 

    gsap.to(cellLeftTop.current, { 
      scrollTrigger:  {
        trigger: containerRef.current,
        toggleActions: "restart none reverse none",
        start: "start+=400% start",
        scrub: true,
        end: "490% start",
      },
      opacity: 0.5,
      top: "5vw",
      width: "37vw",
      left:"5vw",
      rotation: 60,
      immediateRender: false,
    }); 
    gsap.to(cellRightTop.current, { 
      scrollTrigger:  {
        trigger: containerRef.current,
        toggleActions: "restart none reverse none",
        start: "start+=480% start",
        scrub: true,
        end: "530% start",
      },
      width:"40vw",
      rotation: "-40",
      opacity: 1,
      x: "-10vw",
      y: "-60vw",
      immediateRender: false,
    }); 

    }

    gsap.to(cellLeftTop.current, { 
      scrollTrigger:  {
        trigger: containerRef.current,
        toggleActions: "restart none reverse none",
        start: "start+=491% start",
        scrub: true,
        end: "560% start",
      },
      rotation: 50,
      width:"20vw",
      opacity: 0.1,
      immediateRender: false,
    });  

    gsap.to(cellCenterTop.current, { 
      scrollTrigger:  {
        trigger: containerRef.current,
        toggleActions: "restart none reverse none",
        start: "start+=491% start",
        scrub: true,
        end: "530% start",
      },
      immediateRender: false,
      opacity:0.9,
      y: "5vw",
      rotation: 10,
      width: "32vw",
      left:"35vw",
    }); 

    gsap.to(cellCenterTop.current, { 
      scrollTrigger:  {
        trigger: containerRef.current,
        toggleActions: "restart none reverse none",
        start: "start+=531% start",
        scrub: true,
        end: "640% start",
      },
      rotation: -10,
      width:"20vw",
      opacity: 0.1,
      immediateRender: false,
    });  


    gsap.to(cellRightTop.current, { 
      scrollTrigger:  {
        trigger: containerRef.current,
        toggleActions: "restart none reverse none",
        start: "start+=531% start",
        scrub: true,
        end: "620% start",
      },
      rotation: "-80",
      width:"10vw",
      opacity: 0.1,
      immediateRender: false,
    });  


    gsap.to(cellLeftBottom.current, { 
      scrollTrigger:  {
        trigger: containerRef.current,
        toggleActions: "restart none reverse none",
        start: "start+=511% start",
        scrub: true,
        end: "600% start",
      },
      rotation: -10,
      width:"20vw",
      opacity: 0.1,
      immediateRender: false,
    });  

    gsap.to(cellRightBottom.current, { 
      scrollTrigger:  {
        trigger: containerRef.current,
        toggleActions: "restart none reverse none",
        start: "start+=521% start",
        scrub: true,
        end: "600% start",
      },
      rotation: 50,
      width:"20vw",
      opacity: 0.1,
      immediateRender: false,
    });  


  }, []);

  return(
  <section ref={containerRef} className="third-animation-pag">
    <img ref={cellLeftTop} className="cell-left-top"  src={lavitanCell} />
    <img ref={cellLeftBottom} className="cell-left-bottom"  src={cellBlur} />
    <img ref={cellCenterTop} className="cell-center-top"  src={cellBlur} />
    <img ref={cellRightTop} className="cell-right-top"  src={lavitanCell} />
    <img ref={cellRightBottom} className="cell-right-bottom"  src={cell} />
    <div className="first-animation-titles-container3">
    <p className="title-second-section-3">Combate os danos<br/> causados pelos <br/>radicais livreS</p>
    </div> 
  </section>
    
  )
}
