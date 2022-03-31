import React, { useState, useEffect } from 'react';
import { LocomotiveScrollComponent, FirstSection, PreloadVideo, SecondSection, ThirdSection, FourthSection } from './components/index';
import "./global.css";
import { ScrollTrigger } from "gsap/all";
import Cursor from "./components/CustomCursor/index"
import Footer from "./components/Footer/index";


function App() {

  const [loading, setLoading] = useState(true);
  ScrollTrigger.defaults({
    scroller: "#root"
  });
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
          {/* <ThirdSection /> */}
          <FourthSection />
          <Cursor />
          <Footer> </Footer>
        </>
      }
      {/* </LocomotiveScrollComponent> */}
    </div>
  )
}

export default App
