import React, { useState, useEffect } from 'react';
import { FirstSection, PreloadVideo, SecondSection, ThirdSection } from './components/index';
import "./global.css";
import { ScrollTrigger } from "gsap/all";
import Cursor from "./components/CustomCursor/index"

function App() {
  
  const [loading, setLoading] = useState(true);
  ScrollTrigger.defaults({
    scroller: "#root"
  });

  return (
    <div>
      {/* <LocomotiveScrollComponent> */}
        { loading ? 
          <PreloadVideo setLoading={setLoading}/> 
          : 
          <>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <Cursor/>
          </>
          }
      {/* </LocomotiveScrollComponent> */}
    </div>
  )
}

export default App
