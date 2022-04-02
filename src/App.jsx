import React, { useState, useEffect, useRef } from 'react';
import { LocomotiveScrollComponent, PreloadVideo, FirstSection, SecondSection, ThirdSection, FourthSection, AstronautInBottle } from './components/index';
import "./global.css";
import { ScrollTrigger, scrollerProxy } from "gsap/all";
import Cursor from "./components/CustomCursor/index"
import Footer from "./components/Footer/index";
import Csection from "./components/cSection/index";
import Popup from './components/Popup/index';
import gsap from "gsap";


function App() {
  const [loading, setLoading] = useState(true);
  ScrollTrigger.defaults({
    scroller: "#root"
  });


  ScrollTrigger.scrollerProxy("#root", { pinType: "fixed" });


  return (
    <div>
      {/* <LocomotiveScrollComponent> */}
      {loading && window.innerWidth > 900?
        <PreloadVideo setLoading={setLoading} />
        :
        <>
        
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <AstronautInBottle />
          <FourthSection />
          <Cursor />
          <div className="group1">
            <Csection></Csection>
            <Footer> </Footer>
          </div>
        </>
      }
      {/* </LocomotiveScrollComponent> */}
      
    </div>
  )
}

export default App
