import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./styles.css";
import pillBottle from "../../assets/pillBottle.png";
import { gallery, gridValues } from './galleryData'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import shadowCenter from '../../assets/shadowCenter.svg'
import { StarsFourth } from "../StarsFourth/StarsFourth";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Orbit2 } from "../Orbit2/Orbit2";
import Typical from 'react-typical'
import ReactRotatingText from 'react-rotating-text'
import pill9 from '../../assets/pills/pill_9.png';
import { AnimatedPill } from "..";

const maintext = "Vitaminas do Complexo B auxiliam na formação das células vermelhas do sangue e no processo de divisão celular\
\
Cromo quelato auxilia no metabolismo mais rápido de proteínas, carboidratos e gorduras\
\
O ferro auxilia no transporte do oxigênio no organismo\
\
Vitamina k auxilia na coagulação do sangue"

export function FourthSection() {
  const bottleRef = useRef(null);
  const scrollRef = useRef(null);
  const galleryRef = useRef(null);
  const endPillTrigger = useRef(null);
  const [typingEnded, setTypingEnded] = useState(0)
  const [typerTrigger, setTyperTrigger] = useState(false)

  const isMobile = window.innerWidth < 900;

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

    gsap.from(".fourth-normal-text", { 
      scrollTrigger:  {
        trigger: ".fourth-normal-text",
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => setTyperTriggerTrue(),
      },
    });

   
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(bottleRef.current, {
        scrollTrigger: {
          trigger: bottleRef.current,
          start: "center center",
          end: "top center-=100",
          endTrigger: endPillTrigger.current,
          toggleActions: "restart none none none",
          pin: true,
          scrub: 1,
          pinSpacing: false,
          pinType: 'fixed',
        },
      });
    }
  }, [isMobile]);



  useEffect(() => {
    gsap.utils.toArray('.fourth-image').forEach((image) => {
      const x = (window.innerWidth / 2) - (image.x + (image.width / 2));

      const trigger = isMobile ? '.pill-bottle-fourth' : '.fourth-number-one';

      if (image) {
        gsap.from(image, {
          duration: 3,
          x: `+=${x}`,
          y: `+=${-600}`,
          scale: 0.3,
          opacity: isMobile ? 1 : 0,
          imageRendering: false,
          lazy: true,
          scrollTrigger: {
            trigger: trigger,
            start: "center center",
            toggleActions: "play none none none",
            onLeave: () => !isMobile && setTimeout(moveImages, 3400),
            onEnter: () => isMobile && setTimeout(moveImages, 3400),
          }
        })

      }
    })
  }, [isMobile]);

  const setTyperTriggerTrue = () => {
    console.log("entrou")
    setTyperTrigger(true)
  }

  const typerTriggerFalse = () => {
    console.log("saiu")
    setTyperTrigger(false)
  }

  const moveImages = () => {
    gsap.utils.toArray('.fourth-image').forEach((image, index) => {
      const evenIndex = index % 2 === 0;

      if (!isMobile) {
        const xAmount = evenIndex ? '-=70' : '+=70';
        gsap.to(image, { duration: 60, x: xAmount, skewX: 0, imageRendering: false })
      } else {
        const xAmount = evenIndex ? '-=75' : '+=75';
        gsap.to(image, { duration: 60, x: xAmount, skewX: 0, imageRendering: false })
      }

      gsap.to(image, { duration: 3, skewX: 0, imageRendering: false })

      if (isMobile) setTimeout(() => gsap.to(image, { duration: 15, x: 0, imageRendering: false }), 15000)
    })
  }

  const skewImages = () => {
    if (!animationHappening) {
      setAnimationHappening(true);
      gsap.utils.toArray('.fourth-image').forEach((image, index) => {
        const evenIndex = index % 2 === 0;
        const xAmount = evenIndex ? '+=13' : '-=12';
        const skewAmount = evenIndex ? '-1deg' : '1deg';

        gsap.to(image, { duration: 2, x: xAmount, skewX: skewAmount, imageRendering: false })
      })
      setTimeout(() => setAnimationHappening(false), 2000)
    }
    var ReactRotatingText = require('react-rotating-text');
  }

  return (
    <div className="background-fourth-section">
      <h2 className="fourth-section-title">Lavitan X</h2>
      <h3 className="fourth-section-subtitle">BIO COMPLEX</h3>

      {!isMobile && (
        <StarsFourth />
      )}

      <div className="filled-fourth-orbit">
        <Orbit2 size="14vw" rotationSpeed="14" text="K" filled />
      </div>

      <img className="fourth-shadow-center" src={shadowCenter} alt="" draggable={false}></img>

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
          <h4 className="fourth-normal-text fourth-normal-text-right" style={{ textAlign: 'left' }} >

 
          { typerTrigger && 
            (<>
              { typingEnded > 0 && <><span>Vitaminas do Complexo B auxiliam na formação das células vermelhas do sangue e no processo de divisão celular</span> 
              <br/><br/></>}
              { typingEnded > 1 && <><span>Cromo quelato auxilia no metabolismo mais rápido de proteínas, carboidratos e gorduras</span>
              <br/><br/></>}
              { typingEnded > 2 && <><span>O ferro auxilia no transporte do oxigênio no organismo</span>
              <br/><br/></>}
              { typingEnded > 3 && <span>Vitamina k auxilia na coagulação do sangue</span> }
             { typingEnded == 0 && <ReactRotatingText className="write-words" typingInterval="30" items={["Vitaminas do Complexo B auxiliam na formação das células vermelhas do sangue e no processo de divisão celular"]} onTypingEnd={() => setTypingEnded(typingEnded+1)} />}
             { typingEnded == 1 && <ReactRotatingText className="write-words" typingInterval="30" items={["Cromo quelato auxilia no metabolismo mais rápido de proteínas, carboidratos e gorduras"]} onTypingEnd={() => setTypingEnded(typingEnded+1)} />}
             { typingEnded == 2 && <ReactRotatingText className="write-words" typingInterval="30" items={["O ferro auxilia no transporte do oxigênio no organismo"]} onTypingEnd={() => setTypingEnded(typingEnded+1)} />}
             { typingEnded == 3 && <ReactRotatingText className="write-words" typingInterval="30" items={["Vitamina k auxilia na coagulação do sangue"]} onTypingEnd={() => setTypingEnded(typingEnded+1)} />}         
            </>)
          }
          </h4>
        </div>

      </div>

      {!isMobile && (
        <>
          <div className="fourth-content" style={{ marginTop: '50px' }}>
            <div className="fourth-side-div fourth-side-div-left" style={{ alignItems: 'flex-end' }}>
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
              <h4 ref={endPillTrigger} className="fourth-number-one fourth-side-div-right">
                PARA <b style={{ color: '#FFC425' }}>Nº1</b>
                <br />
                DO ESPAÇO
              </h4>
            </div>
          </div>

          <div data-scroll-container ref={scrollRef} >
            <div className="fourth-scroll-content">
              <div className="fourth-section-image-gallery" ref={galleryRef}>
                <ScrollContainer vertical={false} onEndScroll={moveImages}
                  onScroll={skewImages}
                  className="drag-to-scroll"
                  hideScrollbars={false}
                >
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
                </ScrollContainer>

              </div>
            </div>
          </div>
        </>
      )}
      <div className="pill-container-fourth-section">
        <AnimatedPill width="100%" imgSrc={pill9} />
      </div>
      <div className="pill-container-fourth-section-two">
        <AnimatedPill width="100%" imgSrc={pill9} />
      </div>
      {isMobile && (
        <div className="fourth-content" style={{ marginTop: '50px' }}>
          <div className="fourth-side-div" style={{ alignItems: 'flex-end' }}>
            <h4 className="fourth-number-one">
              DE <b style={{ color: '#FFC425' }}>Nº1</b>
              <br />
              DO BRASIL
            </h4>
          </div>

          <div data-scroll-container ref={scrollRef}  >
            <div className="fourth-scroll-content">
              <div className="fourth-section-image-gallery" ref={galleryRef}>
                <ScrollContainer vertical={false} onEndScroll={moveImages}
                  onScroll={skewImages} style={{ width: '100vw' }}
                  className="drag-to-scroll"
                >
                  {gallery.slice(0, 8).map((image, index) => {
                    const values = gridValues[index % 2];
                    if (!values || index % 5 === 0) return null;

                    const [row, column, spanRow, spanColumn] = values;
                    return (
                      <img
                        src={image}
                        alt="Galéria de imagens"
                        draggable={false}
                        style={{ gridArea: `${row} / ${column + (index)} / span ${spanRow} / span ${spanColumn}` }}
                        data-scroll
                        className="fourth-image"
                      />
                    )
                  })}
                </ScrollContainer>

              </div>
            </div>
          </div>
          <div className="fourth-side-div">
            <h4 className="fourth-number-one">
              PARA <b style={{ color: '#FFC425' }}>Nº1</b>
              <br />
              DO ESPAÇO
            </h4>
          </div>
        </div>
      )}
    </div>

  )
}
