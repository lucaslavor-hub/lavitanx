import React, { useRef, useEffect } from "react";
import { gsap, Power1 } from "gsap";
import "./styles.css";

export function AnimatedPill({ imgSrc }) {
  const imgRef = useRef(null);

  useEffect(() => {
    var tl = gsap.timeline({repeat: -1, repeatDelay: 0});
    tl
    .to(imgRef.current, { y:'-=30vw', x:'+=20vw',  rotation:'-=5', ease:Power1.easeInOut, duration: 3})     
    .to(imgRef.current, { y:'+=30vw', x:'-=20vw', rotation:'-=5', ease:Power1.easeInOut, duration: 2})
    
    
    .to(imgRef.current, { y:'-=20vw',  rotation:'+=5', ease:Power1.easeInOut, duration: 3})
    
    .to(imgRef.current, { y:'+=20vw',  rotation:'+=5', ease:Power1.easeInOut, duration: 3})
    
    
    .to(imgRef.current, { y:'-=50vw', ease:Power1.easeInOut, duration: 3})
        
    .to(imgRef.current, { y:'+=50vw', ease:Power1.easeInOut, duration: 3})
    
    
    .to(imgRef.current, { y:'-=30vw', ease:Power1.easeInOut, duration: 3})
        
    .to(imgRef.current, { y:'+=30vw', ease:Power1.easeInOut, duration: 3})
    
    
    .to(imgRef.current, { y:'-=30vw', ease:Power1.easeInOut, duration: 2})
        
    .to(imgRef.current, { y:'+=30vw', ease:Power1.easeInOut, duration: 2})

    gsap.to(tl, {ease:Power1.easeInOut, duration: 27})
  }, []);
  // style={{ width: `${size}`, height: `${size}`}} , duration: rotationSpeed
  return(
    <img ref={imgRef} className="animated-pill" src={imgSrc} alt="Video inicial" />
  )
}