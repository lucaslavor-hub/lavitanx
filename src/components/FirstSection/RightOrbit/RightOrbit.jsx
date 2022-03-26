import React, { useRef, useEffect } from "react";
import { gsap, Linear } from "gsap";
import "./styles.css";
import orbit from "../../../assets/Orbit.svg";

export function RightOrbit({ position, text, textWidth }) {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current,  { rotation: "+=360", repeat:-1, ease: Linear.easeNone, duration: 8});
  }, []);

  useEffect(() => {
    gsap.to(imgRef.current,  { rotation: "+=360", repeat:-1, ease: Linear.easeNone, duration: 8});
  }, []);


  useEffect(() => {
    gsap.from(textRef.current,  { rotation: "+=360", repeat:-1, ease: Linear.easeNone, duration: 8});
  }, []);

  return(
  <div className="external-orbit" >
    <img ref={imgRef} className="orbit-image" src={orbit} alt="Video inicial" />
    <div ref={boxRef} className="spin-text">
      <p className="text-in-orbit" style ={{ width: `${textWidth}`}} ref={textRef}>{text}</p>
    </div>
  </div>
    
  )
}