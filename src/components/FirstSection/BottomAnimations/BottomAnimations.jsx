import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import medicine from "../../../assets/Medicine.png";
import earth from "../../../assets/Earth.png";
import { RightOrbit } from "../..";

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
          <RightOrbit orbitsRef={orbitsRef} text={"7 MINERAIS"} />
        </div>
      </div>
    <div className="space" />
  </>
    
  )
}