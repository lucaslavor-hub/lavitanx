import React, { useState, useEffect } from 'react';
import { LocomotiveScrollComponent, FirstSection, PreloadVideo, SecondSection, ThirdSection, FourthSection } from './components/index';
import "./global.css";
import { ScrollTrigger, scrollerProxy } from "gsap/all";
import Cursor from "./components/CustomCursor/index"
import Footer from "./components/Footer/index";
import Csection from "./components/cSection/index";


function App() {
  
  const [loading, setLoading] = useState(true);
  ScrollTrigger.defaults({
    scroller: "#root"
  });

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
