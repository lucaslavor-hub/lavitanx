import React, { useRef, useEffect } from "react";
import { gsap, Sine } from "gsap";
import "./styles.css";

export function AnimatedPill({ imgSrc, width }) {
  const imgRef = useRef(null);

  const randomX = random(3, 4);
  const randomY = random(3, 4);
  const randomDelay = random(0, 10);
  const durationTime = random(3, 6);

  const randomTime2 = random(5, 100);
  const randomAngle = random(-10, 100);
  useEffect(() => {
      gsap.set(imgRef.current, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
      });

      // moveX(imgRef.current, 1);
      moveY(imgRef.current, -1);
      rotate(imgRef.current, 1);
  }, []);
  
  function rotate(target, direction) {
      
    gsap.to(target, {
      rotation: randomAngle(direction),
      delay: randomDelay(),
      ease: Sine.easeInOut,
      onComplete: rotate,
      onCompleteParams: [target, direction * -1],
      duration: randomTime2(),
    });
  }

  function moveX(target, direction) {
    
    gsap.to(target, {
      x: `${randomX(direction)}vw`,
      ease: Sine.easeInOut,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1],
      duration: randomX() * 3
    });
  }

  function moveY(target, direction) {
    
    gsap.to(target, {
      y: `${randomY(direction)}vw`,
      ease: Sine.easeInOut,
      onComplete: moveY,
      onCompleteParams: [target, direction * -1],
      duration: randomY() * 3
    });
  }

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }
  // style={{ width: `${size}`, height: `${size}`}} , duration: rotationSpeed
  return(
    <img ref={imgRef} className="animated-pill" style={{ width: `${width}`}}  src={imgSrc} alt="Video inicial" />
  )
}