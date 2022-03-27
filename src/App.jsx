import React, { useState, useEffect } from 'react';
import { LocomotiveScrollComponent, FirstSection, PreloadVideo } from './components/index';
import "./global.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* <LocomotiveScrollComponent> */}
        { loading ? <PreloadVideo/> : <FirstSection/>}
      {/* </LocomotiveScrollComponent> */}
    </div>
  )
}

export default App
