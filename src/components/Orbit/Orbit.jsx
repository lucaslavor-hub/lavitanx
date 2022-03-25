import React, { useRef, useEffect } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./styles.css";
import orbit from "../../assets/Orbit.svg";

export function Orbit({ position, text, textWidth }) {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    gsap.to(boxRef.current,  { rotation: "+=360", repeat:-1, ease: Linear.easeNone, duration: 6});
  }, []);


  useEffect(() => {
    gsap.from(textRef.current,  { rotation: "+=360", repeat:-1, ease: Linear.easeNone, duration: 6});
  }, []);

  return(
  <div style ={{ width: `${position}` }}>
    <div ref={boxRef} className="spin-things">
      <img className="something" src={orbit} alt="Video inicial" styles ={{ width: '500px' }}/>
      {/* <img className="something" src={circle} alt="Video inicial" /> */}
      <p className="text-in-orbit" style ={{ width: `${textWidth}`}} ref={textRef}>{text}</p>
    </div>
  </div>
    
  )
}