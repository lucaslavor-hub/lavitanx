import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import medicine from "../../../assets/Medicine.png";
import earth from "../../../assets/Earth.png";
import { Orbit } from "../..";

const rightOrbitStyles = {
  externalOrbitContainer: { 
    right: "10vw",
  },
  spinText: {
    width: "25.5vw",
    height: "25.5vw"
  }
}

const leftOrbitStyles = {
  externalOrbitContainer: { 
    left: "10vw",
  },
  spinText: {
    width: "30vw",
    height: "30vw"
  }
}

export function BottomAnimations({ startAnimation }) {
  const medicineRef = useRef(null);
  const earthRef = useRef(null);
  const orbitsRef = useRef(null);

  useEffect(() => {
    if (startAnimation) {
      gsap.to(medicineRef.current, { y: "-47vw", opacity: 1, duration: 3});
      gsap.to(earthRef.current, { y: "-40vw", opacity: 1, duration: 3});
      gsap.to(".orbit-image",  { y: "-40vw", opacity: 1, duration: 3});
      gsap.to(".spin-text",  { y: "-40vw", opacity: 1, duration: 3});
    }
  }, [startAnimation]);

  return(
  <>
    <div className="space" />
      <div className="earth-meteor-container">
        <img className="meteor-medicine" src={medicine} ref={medicineRef} />
        <img className="earth" src={earth} ref={earthRef} />
        <div className="orbit-container" ref={orbitsRef}>
          <Orbit orbitsRef={orbitsRef} rotationSpeed="12" text={"7 MINERAIS"} styles ={rightOrbitStyles}/>
          <Orbit orbitsRef={orbitsRef} rotationSpeed="20" text={"C, B3, B5, A, B2, B1, B6, D, B12, E, B7, B9, K"} textWidth="12vw" styles ={leftOrbitStyles}/>
        </div>
      </div>
    <div className="space" />
  </>
    
  )
}