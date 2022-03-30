import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import rocket from "../../assets/Rocket.png";
import whiteWaveBackground from "../../assets/whiteWaveBackground.svg";
import yellowSphereLeft from "../../assets/yellowSphereLeft.svg";
import yellowSphereRight from "../../assets/yellowSphereRight.svg";
import heart from "../../assets/Heart.svg";
import {ReactComponent as RocketLine} from '../../assets/rocketLine.svg';
import {ReactComponent as RocketAndLine} from '../../assets/rocketAndLine.svg';

export function ThirdSection() {
  // const backgroundRef = useRef(null);

  var animation;

  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  // useEffect(() => {
  //   gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
  //   gsap.set(".tractor", {transformOrigin: "50% 50%"});

  //   gsap.to("#motionSVG", {
  //     scrollTrigger: {
  //       trigger: "#motionPath",
  //       start: "top 20%",
  //       end: '+=5000px',
  //       scrub: 1,
  //       markers: true,
  //       onUpdate: self => {
  //         gsap.to(".tractor", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
  //       }
  //     },
  //     duration: 10,
  //     ease: "none",
  //     immediateRender: true,
  //     motionPath: {
  //       path: "#motionPath",
  //       align: "#motionPath",
  //       alignOrigin: [0.5, 0.5],
  //       autoRotate: 90,
  //     }
  //   });
  // }, []);
  useEffect(() => {
    gsap.to(".third-section", { y: "-70vw", opacity: 1, duration: 3});
  }, []);


  // useEffect(() => {
  //   gsap.to(backgroundRef.current, { y: "-24vw", opacity: 1, duration: 3});

  // }, []);
  
  return(
  <div className="third-section">
    <img className="white-wave-background"  src={whiteWaveBackground} />
    <img className="yellow-sphere-left"  src={yellowSphereLeft} />
    <img className="yellow-sphere-right"  src={yellowSphereRight} />
    <div className="heart-container">
      <img className="yellow-heart" src={heart} />
      <p className="heart-description">Previne o <br></br>envelhecimento precoce</p> 
    </div>
    {/* <img id="tractor"  src={rocket} /> */}
    {/* <RocketLine id="motionSVG" className="line"></RocketLine>
    <RocketAndLine id="motionSVG" className="line"></RocketAndLine> */}
      
  </div>
    
  )
}
