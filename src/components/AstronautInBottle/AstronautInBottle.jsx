import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./styles.css";
import pillBottle from "../../assets/open_bottle.png";
import bottleLid from "../../assets/bottle_lid.png";
import astronaut from "../../assets/pill_spacesuit.png";
import shadow from "../../assets/pill-shadow-section.svg";
import { Orbit2 } from "../Orbit2/Orbit2";

import { pillsArray } from "../../assets/pills";


const pillsTopValues = [50, 33, 10, 2, 4, 5, 22, 50, 70, 50, 26, 64, 79, 25, 70, 40, 28, 73];
const pillsLeftValues = [20, 20, 18, 33, 50, 68, 75, 60, 65, 30, 64, 45, 46, 46, 54, 70, 33, 33];


export function AstronautInBottle() {
  const lidRef = useRef(null);
  const astronautRef = useRef(null);
  const bottleRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray('.one-floating-pill').forEach((image, index) => {

      const x = (image.parentNode.clientWidth / 2) - (image.offsetLeft + (image.width / 2));

      const positionInPixels = (pillsTopValues[index] / 100) * image.parentNode.clientHeight;
      const y = (image.parentNode.clientHeight - positionInPixels) - (image.height / 2);

      if (image) {
        gsap.to(image, {
          duration: 3.5,
          x: `+=${x}`,
          y: `+=${y + 100}`,
          scale: 0.8,
          scrollTrigger: {
            trigger: lidRef.current,
            start: "bottom top",
            toggleActions: "play none reverse none",
          }
        })
      }
    })

    gsap.to(astronautRef.current, {
      duration: 3.75,
      scale: 0.8,
      y: `+= ${window.innerWidth > 1600 ? 600 : 400}`,
      scrollTrigger: {
        trigger: lidRef.current,
        start: "bottom top",
        toggleActions: "play none reverse none",

      }
    })

    const y = () => {
      if (window.innerWidth > 900) {
        const containerHeight = 140; //vh page
        const y = containerHeight - 50 - 13.15; //  container - bottle - lid

        return y + 4 // lid /4
      } else {
        const containerHeight = 100;
        const y = containerHeight - 40 - 10.5;

        return y + 2.625
      }
    }

    gsap.to(lidRef.current, {
      duration: 3.75,
      y: `+=${y()}vh`,
      scrollTrigger: {
        trigger: lidRef.current,
        start: "bottom top",
        toggleActions: "play none reverse none",
      }
    })
  }, []);


  return (
    <div className="astronaut-in-bottle-section">

      <div className="small-fourth-orbit">
        <Orbit2 size="14vw" rotationSpeed="10" text="D" />
      </div>

      <img className="pill-shadow-left" src={shadow} alt="" draggable={false}></img>

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
