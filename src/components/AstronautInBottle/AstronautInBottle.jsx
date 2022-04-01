import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./styles.css";
import pillBottle from "../../assets/open_bottle.png";
import bottleLid from "../../assets/bottle_lid.png";
import astronaut from "../../assets/pill_spacesuit.png";

import { pillsArray } from "../../assets/pills";


const pillsTopValues = [50, 33, 10, 2, 4, 5, 22, 50, 70, 50, 26, 90, 79, 93, 99, 37, 54, 93];
const pillsLeftValues = [0, 8, 18, 33, 50, 68, 75, 80, 65, 30, 80, 18, 36, 76, 97, 84, 33, 33];


export function AstronautInBottle() {
  const lidRef = useRef(null);
  const astronautRef = useRef(null);
  const bottleRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray('.one-floating-pill').forEach((image, index) => {
      const x = (window.innerWidth / 2) - (image.x + (image.width / 2));


      const positionInPixels = (pillsTopValues[index] / 100) * image.parentNode.clientHeight;
      const y = (image.parentNode.clientHeight - positionInPixels) - (image.height / 2);

      if (image) {
        gsap.to(image, {
          duration: 3,
          x: `+=${x}`,
          y: `+=${y + 120}`,
          scale: 0.8,
          scrollTrigger: {
            trigger: lidRef.current,
            start: "top top",
            toggleActions: "play none none none",
            // toggleActions: "play none reverse none",
          }
        })
      }
    })

    gsap.to(astronautRef.current, {
      duration: 4,
      scale: 0.8,
      y: `+= ${400}`,
      scrollTrigger: {
        trigger: lidRef.current,
        start: "top top",
        toggleActions: "play none none none",
        // toggleActions: "restart none reverse none",

      }
    })

    const containerHeight = 140; //vh page
    const y = containerHeight - 40 - 10; //  container - bottle - lid

    gsap.to(lidRef.current, {
      duration: 5,
      y: `+=${y + 2.5}vh`,
      scrollTrigger: {
        trigger: lidRef.current,
        start: "top top",
        toggleActions: "play none none none",
        // toggleActions: "restart none reverse none",
      }
    })
  }, []);


  return (
    <div className="astronaut-in-bottle-section">
      <img className="open-lid" src={bottleLid} alt="Tampa Lavitan X" ref={lidRef} />
      <img className="pill-astronaut" src={astronaut} alt="Astronauta" ref={astronautRef} />
      <img className="rest-of-bottle" src={pillBottle} alt="Lavitan X" ref={bottleRef} />

      <div className="floating-pills">
        {pillsArray.map((pill, index) => (
          <img
            className="one-floating-pill"
            src={pill}
            alt="Comprimido Lavitan X"
            style={{
              top: `${pillsTopValues[index]}% `, left: `${pillsLeftValues[index]}% `
            }}
          />
        ))}
      </div>
    </div>

  )
}
