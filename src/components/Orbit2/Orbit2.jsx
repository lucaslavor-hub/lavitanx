import React, { useRef, useEffect } from "react";
import { gsap, Linear } from "gsap";
import "./styles.css";
import orbit from "../../assets/Orbit.svg";
import filledOrbit from "../../assets/filledOrbit.svg";

export function Orbit2({ size, rotationSpeed, text, filled }) {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, { rotation: "+=360", repeat: -1, ease: Linear.easeNone, duration: rotationSpeed });
  }, []);

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <img ref={imgRef} className="orbit-image-no-text" src={filled ? filledOrbit : orbit} style={{ width: `${size}`, height: `${size}` }} alt="Video inicial" />
      <h3 className="orbit2-text" >{text}</h3>
    </div>
  )
}