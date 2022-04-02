import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import video from "../../assets/video.png";
import spheres from "../../assets/spheres.svg";
import logo from "../../assets/logo.png";
import "./styles.css";
import { BottomAnimations } from "./BottomAnimations/BottomAnimations";
import { Stars } from "..";
import videoPreload from "../../assets/video.mp4";


export function FirstSection({ someText }) {
  const backgroundBlurRef = useRef(null);
  const spheresRef = useRef(null);
  const logoRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const isMobile = window.innerWidth <= 900;

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (startAnimation) {
      gsap.to(backgroundBlurRef.current, { opacity: 1, duration: 3});
      gsap.to(spheresRef.current, { x:"-2vw", y:"-2vw",opacity: 1, duration: 3});
      gsap.to(logoRef.current, { y:"11vw", duration: 3});
    }
  }, [startAnimation]);

  return(
  <div className="first-section-container" >
    <Stars />
    <div className="images-container">
      <div ref={backgroundBlurRef} className="background-blur"/>
      {isMobile &&
      <div className="first-section-mobile">
        <div class="background-video">
         <video src={videoPreload} autoplay="" loop="" muted="muted" playsinline="" controlslist="nodownload"></video>
         <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js%22%3E"></script>
        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_klsab29v.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>
        </div>
      </ div>}
      {/*<img src={video} className="background-video" /> */}
      {/* <img src={logo} ref={logoRef} className="first-section-logo" alt="logotipo lavitanx" /> */}
      <img src={spheres} ref={spheresRef} className="first-section-spheres" alt="ilustracao de esferas" />
    </div>
    <BottomAnimations startAnimation={startAnimation} />
  </div>
    
  )
}
