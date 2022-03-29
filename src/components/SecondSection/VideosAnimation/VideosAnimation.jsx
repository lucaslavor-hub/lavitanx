import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import video from "../../../assets/video.mp4";
import B12Bubble from "../../../assets/B12Left.svg";
import CBubble from "../../../assets/CRight.svg";
import Moon from "../../../assets/moon2section.svg";
import { Orbit } from "../../index";
import { ScrollTrigger } from "gsap/all";

export function VideosAnimation({ someText }) {
  const videoOneRef = useRef(null);
  const videosRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   gsap.from(videoOneRef.current, { 
  //     scrollTrigger:  {
  //       trigger: videosRef.current,
  //       toggleActions: "restart pause reverse pause",
  //       start: "start center",
  //       scrub: true,
  //       markers: true
  //     },
  //     x: "-54vw",
  //     rotation: 40,
  //   });
  // }, []);

  return(
  <div ref={videosRef} className="videos-animations-container">
      <video ref={videoOneRef} className="video-animations-one" preload="metadata" muted autoPlay loop> 
        <source src={video} type="video/mp4"/>
      </video>
      <img src={Moon} className="moon-second-section"/>
      <p className="middle-text">Para viver mais e melhor <br/> são necessários cuidados preventivos<br/> com o nosso corpo </p>
      <div className="bottom-videos-container">
        <video className="video-animations-two" preload="metadata" muted autoPlay loop>
          <source src={video} type="video/mp4"/>
        </video>
        <video className="video-animations-three" preload="metadata" muted autoPlay loop>
          <source src={video} type="video/mp4"/>
        </video>
      </div>
      <p className="bottom-text">e tudo começa de dentro para fora</p>
      <div className="b12-orbit-container">
        <img className="b12-left-bubble" src={B12Bubble} />
        <Orbit size="30vw" rotationSpeed="10" />
      </div>
      <div className="c-orbit-container">
        <img className="c-right-bubble" src={CBubble} />
        <Orbit size="19.5vw" rotationSpeed="10" />
      </div>

  </div>
    
  )
}
