import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import video1 from "../../../assets/1.mp4";
import video2 from "../../../assets/2.mp4";
import video3 from "../../../assets/3.mp4";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import image3 from "../../../assets/3.jpg";
import B12Bubble from "../../../assets/B12Left.svg";
import CBubble from "../../../assets/CRight.svg";
import Moon from "../../../assets/moon2section.svg";
import { Orbit } from "../../index";
import { ScrollTrigger, Power4 } from "gsap/all";

export function VideosAnimation({ someText }) {
  const videoOneRef = useRef(null);
  const divVideoOneRef = useRef(null);
  const videoTwoRef = useRef(null);
  const divVideoTwoRef = useRef(null);
  const videoThreeRef = useRef(null);
  const divVideoThreeRef = useRef(null);
  const videosRef = useRef(null);
  const isMobile = window.innerWidth <= 900;

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    if (isMobile) {
      gsap.to(divVideoOneRef.current, { 
        scrollTrigger:  {
          trigger: videosRef.current,
          start: "top+=20% center",
          end: "top+=120% center",
          scrub: true,
        },
        y: "-34vw",
        rotation: 100,
      }); 
    } else {
      gsap.to(divVideoOneRef.current, { 
        scrollTrigger:  {
          trigger: videosRef.current,
          start: "top center",
          end: "top+=100% center",
          scrub: true,
        },
        y: "-34vw",
        rotation: 100,
      }); 
    }
    gsap.from(videoOneRef.current, { 
      scrollTrigger:  {
        trigger: videosRef.current,
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top+=1px bottom",
      },
      x: "-54vw",
      rotation: 40,
      opacity: 0,
    }); 


    gsap.from(videoTwoRef.current, { 
      scrollTrigger:  {
        trigger: videoTwoRef.current,
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top-1px bottom",
      },
      x: "-54vw",
      rotation: 30,
      opacity: 0,
    }); 

    gsap.to(divVideoTwoRef.current, { 
      scrollTrigger:  {
        trigger: divVideoThreeRef.current,
        start: "top-=10% center",
        end: "top+=400% center",
        scrub: true,
      },
      y: "-34vw",
      x:"-13vw",
      rotation: -90,
    }); 

    gsap.from(videoThreeRef.current, { 
      scrollTrigger:  {
        trigger: videoThreeRef.current,
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top-1px bottom",
      },
      x: "54vw",
      rotation: 70,
      opacity: 0,
    }); 

    gsap.to(divVideoThreeRef.current, { 
      scrollTrigger:  {
        trigger: divVideoThreeRef.current,
        start: "top-=10% center",
        end: "top+=300% center",
        scrub: true,
      },
      y: "-24vw",
      x:"4vw",
      rotation: 100,
    }); 


    gsap.from(".middle-text", { 
      scrollTrigger:  {
        trigger: ".middle-text",
        toggleActions: "restart none reverse none",
        start: "top-=295% bottom",
        end: "top-=270% bottom",
      },
      y: 100,
      opacity: 0,
      duration: 1.3,
      ease: Power4.easeInOut,

    });


    gsap.from(".bottom-text", { 
      scrollTrigger:  {
        trigger: ".white-wave-top",
        toggleActions: "restart none reverse none",
        start: "top center",
        end: "top center+=10%",
      },
      y: 100,
      opacity: 0,
      duration: 1.3,
      ease: Power4.easeOut,
    });

    let video1 = document.querySelector('.video-animations-one')
    let video2 = document.querySelector('.video-animations-two')
    let video3 = document.querySelector('.video-animations-three')

    hoverVideo(video1, divVideoOneRef.current, 4.06, "10vw 10vw 0 0", videoOneRef.current, "32vw", "18vw")
    hoverVideo(video2, divVideoTwoRef.current, 7.03, "19vw 0 0 0", videoTwoRef.current, "38.4vw", "21.6vw")
    hoverVideo(video3, divVideoThreeRef.current, -15.3, "7vw 0 0 0", videoThreeRef.current, "29vw", "16.3vw")
  }, []);

  function hoverVideo(video, current, rotation, marginBefore, currentVideo, width, height) {
    video.addEventListener('mouseover', (e) => {
      // document.querySelector("#root").style.overflow = "hidden";
      video.style.zIndex = "100";
      gsap.to(current, { 
        width: "64vw",
        height: "36vw",
        margin: "0",
        rotation: 0,
        opacity: 1,
      }); 
    })
    video.addEventListener('mouseout', (e) => {
      // document.querySelector("#root").style.overflow = "scroll";

      video.style.zIndex = "90";
      gsap.to(current, { 
        width: width,
        height: height,
        margin: marginBefore,
        rotation: rotation,
        opacity: 1,
      }); 
    })

    video.addEventListener('mouseover', (e) => {
      gsap.to(currentVideo, { 
        width: "64vw",
        height: "36vw",
      }); 
    })
    video.addEventListener('mouseout', (e) => {
      gsap.to(currentVideo, { 
        width: width,
        height: height,
      }); 
    })
  }

  return(
  <div ref={videosRef} className="videos-animations-container">
      <div ref={divVideoOneRef}  className="video-animations-one">
      {isMobile ? 
        <img className="mobile-video video-animations-one" ref={videoOneRef} src={image1} />
        :
        <video className="video-one-size" ref={videoOneRef}  preload="metadata" muted autoPlay loop> 
          <source src={video1} type="video/mp4"/>
        </video>
        }     
        {!isMobile && <p className="video-description">Envelhecimento saudável</p>}
      </div>

      <img src={Moon} className="moon-second-section"/>
      <p className="middle-text">Para viver mais e melhor <br/> são necessários cuidados preventivos<br/> com o nosso corpo </p>
       <div className="bottom-videos-container">
       <div ref={divVideoTwoRef} className="video-animations-two">

         {isMobile ? 
            <img className="mobile-video" ref={videoTwoRef} src={image2} />
            :
            <video className="video-two-size" ref={videoTwoRef} preload="metadata" muted autoPlay loop>
              <source src={video2} type="video/mp4"/>
            </video>
          }
          {!isMobile && <p className="video-description">Evitar danos ao DNA</p>}
          </div>
        <div ref={divVideoThreeRef} className="video-animations-three" >
        {isMobile ? 
            <img className="mobile-video" ref={videoThreeRef} src={image3} />
            :
          <video className="video-three-size" ref={videoThreeRef} preload="metadata" muted autoPlay loop>
            <source src={video3} type="video/mp4"/>
          </video>
        } 
        {!isMobile && <p className="video-description"> Regular os radicais livres </p>}
        </div>
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
