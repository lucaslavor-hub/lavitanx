import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./styles.css";
import shadowRight from "../../assets/ShadowRight2.svg";
import shadowLeft from "../../assets/ShadowLeft2.svg";
import pillBottle from "../../assets/pillBottle.svg";
import { Orbit } from "..";
import { StarsSecond } from "../StarsSecond/StarsSecond";

export function FourthSection() {
  const bottleRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(bottleRef.current, {
      scrollTrigger: {
        trigger: bottleRef.current,
        start: "top top",
        end: "bottom+=2000",
        toggleActions: "restart none none none",
        pin: true,
        scrub: 1,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <div className="background-fourth-section">
      <h2 className="fourth-section-title">Lavitan X</h2>
      <h3 className="fourth-section-subtitle">BIO COMPLEX</h3>

      <div className="fourth-content">

        <div className="fourth-side-div" style={{ alignItems: 'flex-end' }}>
          <h4 className="fourth-bold-text">O multivitamínico <br /> antioxidante</h4>
          <h4 className="fourth-normal-text">A combinação de vitaminas e minerais antioxidantes que o seu corpo precisa.</h4>
        </div>
        <img ref={bottleRef} src={pillBottle} className="pill-bottle-fourth" alt="Caixa Lavintax X" />
        <div className="fourth-side-div">
          <h4 className="fourth-normal-text" style={{ textAlign: 'left' }} >
            Vitaminas do Complexo B auxiliam na formação das <b>células vermelhas</b> do sangue
            e no processo de <b>divisão celular</b>
          </h4>
        </div>

      </div>

      <div className="fourth-content" style={{ marginTop: '50px' }}>
        <div className="fourth-side-div" style={{ alignItems: 'flex-end' }}>
          <h4 className="fourth-number-one">
            DE <b style={{ color: '#FFC425' }}>Nº1</b>
            <br />
            DO BRASIL
          </h4>
        </div>
        <img src={pillBottle} style={{ opacity: 0 }} alt="" className="pill-bottle-fourth" />
        <div className="fourth-side-div">
          <h4 className="fourth-number-one">
            PARA <b style={{ color: '#FFC425' }}>Nº1</b>
            <br />
            DO ESPAÇO
          </h4>
        </div>
      </div>


    </div>

  )
}
