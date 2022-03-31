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
    // gsap.from(DNALeftTop.current, { 
    //   scrollTrigger:  {
    //     trigger: ".fourth-animation-pag",
    //     toggleActions: "restart none reverse none",
    //     start: "start+=400% start",
    //     scrub: true,
    //     end: "500% start",
    //   },
    //   rotation: -10,
    //   opacity: 0.5,
    //   width: "0vw",
    //   left: "10vw",
    //   x: "-5vw",
    //   y:"-2vw",
    //   immediateRender: false,

    // }); 

    // gsap.to(DNALeftTop.current, { 
    //   scrollTrigger:  {
    //     trigger: ".fourth-animation-pag",
    //     toggleActions: "restart none reverse none",
    //     start: "start+=510% start",
    //     scrub: true,
    //     end: "610% start",
    //   },
    //   rotation: -10,
    //   opacity: 0,
    //   width: "10vw",
    //   left: "10vw",
    //   x: "-5vw",
    //   y:"-2vw",
    //   immediateRender: false,
    // });  

    // gsap.from(DNALeftBottom.current, { 
    //   scrollTrigger:  {
    //     trigger: ".fourth-animation-pag",
    //     toggleActions: "restart none reverse none",
    //     start: "start+=410% start",
    //     scrub: true,
    //     end: "start+=520% start",
    //   },
    //   rotation: -10,
    //   opacity: 0.5,
    //   width: "0vw",
    //   left: "10vw",
    //   x: "-15vw",
    //   y:"45vw",
    //   immediateRender: false,

    // }); 

    // gsap.to(DNALeftBottom.current, { 
    //   scrollTrigger:  {
    //     trigger: ".fourth-animation-pag",
    //     toggleActions: "restart none reverse none",
    //     start: "start+=530% start",
    //     scrub: true,
    //     end: "start+=610% start",
    //   },
    //   rotation: -10,
    //   opacity: 0,
    //   width: "100vw",
    //   x: "15vw",
    //   y:"-2vw",
    //   immediateRender: false,
    // });  

    // gsap.from(DNARight.current, { 
    //   scrollTrigger:  {
    //     trigger: ".fourth-animation-pag",
    //     toggleActions: "restart none reverse none",
    //     start: "start+=420% start",
    //     scrub: true,
    //     end: "start+=510% start",
    //   },
    //   rotation: -10,
    //   opacity: 0.5,
    //   width: "0vw",
    //   right: "10vw",
    //   x: "-5vw",
    //   y:"-2vw",
    //   immediateRender: false,

    // }); 

    // gsap.to(DNARight.current, { 
    //   scrollTrigger:  {
    //     trigger: ".fourth-animation-pag",
    //     toggleActions: "restart none reverse none",
    //     start: "start+=520% start",
    //     scrub: true,
    //     end: "start+=610% start",
    //   },
    //   rotation: -10,
    //   opacity: 0,
    //   width: "10vw",
    //   right: "10vw",
    //   x: "-5vw",
    //   y:"-2vw",
    //   immediateRender: false,
    // });  

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
