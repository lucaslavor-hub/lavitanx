import React, { useState, useEffect, useRef } from 'react';
import { LocomotiveScrollComponent, FirstSection, PreloadVideo, SecondSection, ThirdSection, FourthSection } from './components/index';
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

  

  useEffect(() => {
    //timeline

    const tl = gsap.timeline();
    tl.from(".background-second-section h2", { y: 100, duration: 1.8, ease: "power4.out", delay: 1, skewY:7, stagger: 0.3 });

  }, []);

  ScrollTrigger.scrollerProxy("#root", {	pinType: "fixed" });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div>
      {/* <LocomotiveScrollComponent> */}
      {loading ?
        <PreloadVideo setLoading={setLoading} />
        :
        <>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
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
