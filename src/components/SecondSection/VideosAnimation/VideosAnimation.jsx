import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import video from "../../../assets/video.mp4";
import B12Bubble from "../../../assets/B12Left.svg";
import CBubble from "../../../assets/CRight.svg";
import { Orbit } from "../../index";
import { ScrollTrigger } from "gsap/all";

export function VideosAnimation({ someText }) {
  const videoOneRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(videoOneRef.current, { 
      scrollTrigger:  {
        trigger: videoOneRef.current,
        toggleActions: "restart pause reverse pause",
        start: "start center",
        scrub: true,
        markers: true
      },
      // y: 400,
      rotation: 360
    });
  }, []);

  return(
  <div className="videos-animations-container">
      <video ref={videoOneRef} id="video-animations" preload="metadata" muted autoPlay loop> 
        <source src={video} type="video/mp4"/>
      </video>
      <p className="middle-text">Para viver mais e melhor <br/> são necessários cuidados preventivos<br/> com o nosso corpo </p>
      <video id="video-animations" preload="metadata" muted autoPlay loop>
        <source src={video} type="video/mp4"/>
      </video>
      <video id="video-animations" preload="metadata" muted autoPlay loop>
        <source src={video} type="video/mp4"/>
      </video>
      <p className="bottom-text">e tudo começa de dentro para fora</p>
      <div className="b12-orbit-container">
        <img className="b12-left-bubble" src={B12Bubble} />
        <Orbit size="22vw" rotationSpeed="10" />
      </div>
      <div className="c-orbit-container">
        <img className="c-right-bubble" src={CBubble} />
        <Orbit size="20vw" rotationSpeed="10" />
      </div>

  </div>
    
  )
}
