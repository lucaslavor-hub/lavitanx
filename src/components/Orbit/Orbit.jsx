import React, { useRef, useEffect } from "react";
import { gsap, Linear } from "gsap";
import "./styles.css";
import orbit from "../../assets/Orbit.svg";

export function Orbit({ size, rotationSpeed }) {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current,  { rotation: "+=360", repeat:-1, ease: Linear.easeNone, duration: rotationSpeed});
  }, []);

  return(
    <img ref={imgRef} className="orbit-image-no-text" src={orbit} style={{ width: `${size}`, height: `${size}`}} alt="Video inicial" />
  )
}