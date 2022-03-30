import React, { useEffect, useState } from "react";
import video from "../../assets/lavitanx.mp4";
import "./styles.css";


export function PreloadVideo({setLoading}) {
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [buttonPass, setButtonPass] = useState(false);

  const pressPlay = () => {
    const videoElem = document.getElementById("video");
    setVideoPlaying(!videoPlaying);
    if (!videoPlaying) { 
      videoElem.play() 
    } else {
      videoElem.pause()
    };
  }

  const handleToggleMute = () => setMuted(current => !current);

  useEffect(() => {
    const videoElem = document.getElementById("video");
    videoElem.addEventListener('ended',myHandler,false);
    function myHandler(e) {
      setLoading(false)
    }
  }, []);

  useEffect(() => {
      const timer = setTimeout(() => {
        setButtonPass(true);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);

  
  return(
  <>
    <div style={{ width: "100vw", height: "100vh", zIndex:1}}>
      <button onClick={handleToggleMute} className="unmute-button">{muted ? "Desmutar": "Mutar"}</button>
      <button className="video-play" onClick={() => pressPlay()}>{videoPlaying? "Pausar": "Play"}</button>
      { buttonPass && <button className="button-pass" onClick={() => setLoading(false)}> Ir para o site</button>}
      <video id="video" preload="metadata" muted={muted} autoPlay>
        <source src={video} type="video/mp4"/>
    </video>
   </div>
  </>
  )
}