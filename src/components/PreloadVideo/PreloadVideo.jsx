import React, { useEffect, useState } from "react";
import video from "../../assets/video.mp4";
import "./styles.css";
import Cursor from "../CustomCursor/index"


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
    <div className="main-video-container">
      <button onClick={handleToggleMute} className="unmute-button">{muted ? <svg className = "soundOn" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15 23l-9.309-6h-5.691v-10h5.691l9.309-6v22zm-9-15.009v8.018l8 5.157v-18.332l-8 5.157zm14.228-4.219c2.327 1.989 3.772 4.942 3.772 8.229 0 3.288-1.445 6.241-3.77 8.229l-.708-.708c2.136-1.791 3.478-4.501 3.478-7.522s-1.342-5.731-3.478-7.522l.706-.706zm-2.929 2.929c1.521 1.257 2.476 3.167 2.476 5.299 0 2.132-.955 4.042-2.476 5.299l-.706-.706c1.331-1.063 2.182-2.729 2.182-4.591 0-1.863-.851-3.529-2.184-4.593l.708-.708zm-12.299 1.299h-4v8h4v-8z"/></svg>: <svg className = "soundOff" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18 23l-9.305-5.998.835-.651 7.47 4.815v-10.65l1-.781v13.265zm0-15.794l5.384-4.206.616.788-23.384 18.264-.616-.788 5.46-4.264h-2.46v-10h5.691l9.309-6v6.206zm-11.26 8.794l1.26-.984v-7.016h-4v8h2.74zm10.26-8.013v-5.153l-8 5.157v6.244l8-6.248z"/></svg>}</button>
      <button className="video-play" onClick={() => pressPlay()}>{videoPlaying? <svg className = "pauseButton" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10 24h-6v-24h6v24zm10 0h-6v-24h6v24zm-11-23h-4v22h4v-22zm10 0h-4v22h4v-22z"/></svg> : <svg className = "playButton" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/></svg>}</button>
      { buttonPass && <button className="button-pass" onClick={() => setLoading(false)}> <svg className = "goToWebsite" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg></button>}
      <video id="video" preload="metadata" muted={muted} autoPlay>
        <source src={video} type="video/mp4"/>
    </video>
    <Cursor></Cursor>
   </div>
  </>
  )
}