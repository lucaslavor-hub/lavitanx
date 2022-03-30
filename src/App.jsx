import React, { useState, useEffect } from 'react';
import { LocomotiveScrollComponent, FirstSection, PreloadVideo, SecondSection } from './components/index';
import "./global.css";

function App() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div>
      <LocomotiveScrollComponent>
        {/* { loading ? 
          <PreloadVideo setLoading={setLoading}/> 
          : 
          <> */}
            <FirstSection/>
            <SecondSection/>
          {/* </>
          } */}
      </LocomotiveScrollComponent>
    </div>
  )
}

export default App
