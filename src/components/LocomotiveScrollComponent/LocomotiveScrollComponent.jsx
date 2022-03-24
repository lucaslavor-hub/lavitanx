import React, { useEffect } from "react";

import "./styles.css";
import locomotiveScroll from 'locomotive-scroll';


export function LocomotiveScrollComponent(props) {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  }, []);

  return(
    <div className="scroll" ref={scrollRef}>{props.children}</div>  
  )
}