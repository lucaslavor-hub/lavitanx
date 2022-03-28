import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";


export function SecondSection({ someText }) {
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.to(backgroundRef.current, { y: "-15vw", opacity: 1, duration: 3});

  }, []);
  return(
  <div ref={backgroundRef} className="try">
  </div>
    
  )
}
