import React, { useRef, useEffect } from "react";
import { gsap, Linear } from "gsap";
import "./styles.css";
import orbit from "../../../assets/Orbit.svg";

export function OrbitText({ styles, text, textWidth, rotationSpeed }) {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current,  { rotation: "+=360", repeat:-1, ease: Linear.easeNone, duration: rotationSpeed});
  }, []);

  useEffect(() => {
    gsap.to(imgRef.current,  { rotation: "+=360", repeat:-1, ease: Linear.easeNone, duration: rotationSpeed});
  }, []);


  useEffect(() => {
    gsap.from(textRef.current,  { rotation: "+=360", repeat:-1, ease: Linear.easeNone, duration: rotationSpeed});
  }, []);

  return(
  <div className="external-orbit-container" style={styles.externalOrbitContainer}>
    <img ref={imgRef} className="orbit-image" src={orbit} alt="Video inicial" />
    <div ref={boxRef} className="spin-text" style={styles.spinText}>
      <p className="text-in-orbit" style ={{ width: `${textWidth}`}} ref={textRef}>{text}</p>
    </div>
  </div>
    
  )
}