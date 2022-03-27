import React, { useEffect, useState } from "react";
import video from "../../assets/video.mp4";
import "./styles.css";


export function PreloadVideo() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const pressPlay = () => {
    const videoElem = document.getElementById("video");
    setVideoPlaying(!videoPlaying);
    if (!videoPlaying) { 
      videoElem.play() 
    } else {
      videoElem.pause()
    };
  }
  
  return(
  <>
    <div style={{ width: "100vw", height: "100vh", zIndex:1}}>
      <button className="video-play" onClick={() => pressPlay()}>{videoPlaying? "Pausar": "Play"}</button>
      <video id="video" preload="metadata">
        <source src={video} type="video/mp4"/>
    </video>
   </div>
  </>
  )
}