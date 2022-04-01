import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import medicine from "../../../assets/Medicine.png";
import earth from "../../../assets/Earth.png";
import { OrbitText } from "../..";

const rightOrbitStyles = {
  externalOrbitContainer: { 
    right: "9vw",
  },
  spinText: {
    width: "28vw",
    height: "28vw"
  }
}

const leftOrbitStyles = {
  externalOrbitContainer: { 
    left: "9vw",
  },
  spinText: {
    width: "35vw",
    height: "35vw"
  }
}

export function BottomAnimations({ startAnimation }) {
  const medicineRef = useRef(null);
  const earthRef = useRef(null);
  const orbitsRef = useRef(null);

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (startAnimation && innerWidth >= 600 && innerWidth < 2000) {
      gsap.to(medicineRef.current, { y: "-47vw", opacity: 1, duration: 3});
      gsap.to(earthRef.current, { y: "-50vw", opacity: 1, duration: 3});
      gsap.to(".orbit-image",  { y: "-40vw", opacity: 1, duration: 3});
      gsap.to(".spin-text",  { y: "-40vw", opacity: 1, duration: 3});
    } else if (startAnimation && window.innerWidth < 600) {
      gsap.to(earthRef.current, { y: "-80vw", opacity: 1, duration: 3});
    } else if (startAnimation && window.innerWidth >= 2000) {
      gsap.to(earthRef.current, { y: "-100vh", opacity: 1, duration: 3});
      gsap.to(".orbit-image",  { y: "-80vh", opacity: 1, duration: 3});
      gsap.to(".spin-text",  { y: "-80vh", opacity: 1, duration: 3});
      
    }
    }, [startAnimation]);

  return(
  <>
    <div className="space" />
      <div className="earth-meteor-container">
        {/* <img className="meteor-medicine" src={medicine} ref={medicineRef} alt="caixa de remedio lavintax" /> */}
        <img className="earth" src={earth} ref={earthRef} alt="planeta terra" />
        <div className="orbit-container" ref={orbitsRef}>
          <OrbitText orbitsRef={orbitsRef} rotationSpeed="12" text={"7 MINERAIS"} styles ={rightOrbitStyles}/>
          <OrbitText orbitsRef={orbitsRef} rotationSpeed="20" text={"C, B3, B5, A, B2, B1, B6, D, B12, E, B7, B9, K"} textWidth="12vw" styles ={leftOrbitStyles}/>
        </div>
      </div>
    <div className="space" />
  </>
    
  )
}