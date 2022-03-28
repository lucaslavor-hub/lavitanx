import React, { useState, useEffect } from 'react';
import { LocomotiveScrollComponent, FirstSection, PreloadVideo, Stars } from './components/index';
import "./global.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* <LocomotiveScrollComponent> */}
        { loading ? 
          <PreloadVideo/> 
          : 
          <>
            <FirstSection/>
            {/* <Stars height="100vh" width="100vw"/> */}
          </>
          }
      {/* </LocomotiveScrollComponent> */}
    </div>
  )
}

export default App
