import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./styles.css";
import pillBottle from "../../assets/pillBottle.svg";
import { gallery, gridValues } from './galleryData'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import shadowCenter from '../../assets/shadowCenter.svg'
import { StarsFourth } from "../StarsFourth/StarsFourth";
import { Orbit2 } from "../Orbit2/Orbit2";



export function FourthSection() {
  const bottleRef = useRef(null);
  const scrollRef = useRef(null);
  const galleryRef = useRef(null);

  const [animationHappening, setAnimationHappening] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scrollRef) {
      new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        direction: 'horizontal',
        multiplier: 0.5,
      })
    }
  }, []);


  useEffect(() => {
    gsap.to(bottleRef.current, {
      scrollTrigger: {
        trigger: bottleRef.current,
        start: "top top",
        end: "center center-=100",
        endTrigger: galleryRef.current,
        toggleActions: "restart none none none",
        pin: true,
        scrub: 1,
        pinSpacing: false,
        pinType: 'fixed',
      },
    });

  }, []);

  const skewImages = () => {
    if (!animationHappening) {
      setAnimationHappening(true);
      gsap.utils.toArray('.fourth-image').forEach((image, index) => {
        const evenIndex = index % 2 === 0;
        const xAmount = evenIndex ? '-=25' : '+=10';

        gsap.to(image, { duration: 0.25, x: xAmount, skewX: '-=7deg' })
        gsap.to(image, { duration: 2, x: 0, skewX: 0, delay: 0.5 })
      })
      setTimeout(() => setAnimationHappening(false), 2000)
    }
  }

  return (
    <div className="background-fourth-section">


      <h2 className="fourth-section-title">Lavitan X</h2>
      <h3 className="fourth-section-subtitle">BIO COMPLEX</h3>

      {/* <StarsFourth /> */}

      <div className="small-fourth-orbit">
        <Orbit2 size="14vw" rotationSpeed="10" text="D" />
      </div>

      <div className="filled-fourth-orbit">
        <Orbit2 size="14vw" rotationSpeed="10" text="K" filled />
      </div>

      <img className="fourth-shadow-center" src={shadowCenter} alt=""></img>

      <div className="fourth-content">

        <div className="fourth-side-div" style={{ alignItems: 'flex-end' }}>
          <h4 className="fourth-bold-text">O multivitamínico <br /> antioxidante</h4>
          <h4 className="fourth-normal-text">A combinação de vitaminas e minerais antioxidantes que o seu corpo precisa.</h4>
        </div>

        <img
          ref={bottleRef}
          src={pillBottle}
          className="pill-bottle-fourth"
          alt="Caixa Lavintax X"
          draggable={false}
        />

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

        <img
          src={pillBottle}
          style={{ opacity: 0 }}
          alt=""
          className="pill-bottle-fourth"
        />

        <div className="fourth-side-div">
          <h4 className="fourth-number-one">
            PARA <b style={{ color: '#FFC425' }}>Nº1</b>
            <br />
            DO ESPAÇO
          </h4>
        </div>
      </div>

      <div data-scroll-container ref={scrollRef}  >
        <div className="fourth-scroll-content">
          <div className="fourth-section-image-gallery" onScroll={skewImages} ref={galleryRef}>
            {gallery.map((image, index) => {
              const values = gridValues[index % 2];
              if (!values) return null;

              const [row, column, spanRow, spanColumn] = values;
              return (
                <img
                  src={image}
                  alt="Galéria de imagens"
                  draggable={false}
                  style={{ gridArea: `${row} / ${column + (index * 14)} / span ${spanRow} / span ${spanColumn}` }}
                  data-scroll
                  className="fourth-image"
                />
              )
            })}

          </div>
        </div>
      </div>


    </div>

  )
}
