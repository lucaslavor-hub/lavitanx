import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import "./styles.css";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

import { FirstAnimationSection } from "../FirstAnimationSection/FirstAnimationSection";
import { SecondAnimationSection } from "../SecondAnimationSection/SecondAnimationSection";
export function Carousel() {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  useEffect(() => {

    let sections = gsap.utils.toArray("section"),
    currentSection = sections[0];

    gsap.defaults({overwrite: 'auto', duration: 0.3});

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: '+='+(i*200)+'%',
        end: '+=200%',
        onToggle: self => self.isActive && setSection(section),
        toggleActions: "restart none reverse none",
        // markers: true
      });
    });

    function setSection(newSection) {
      if (newSection !== currentSection) {
        gsap.to(currentSection, {autoAlpha: 0})
        gsap.to(newSection, { autoAlpha: 1});
        currentSection = newSection;
      }
    }

    ScrollTrigger.create({
    trigger: '#animations-container',
    toggleActions: "restart none reverse none",
    start: 'star start',
    end: '+=' + sections.length*2 + '00%',
    pin: true,
    invalidateOnRefresh: true

    });
  }, []);

    
  return(
    <div id="animations-container">
      <FirstAnimationSection />
      <SecondAnimationSection />
    </div>

  )
}
