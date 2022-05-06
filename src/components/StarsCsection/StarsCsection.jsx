import React, { useRef, useEffect, useState } from "react";
import { gsap, Linear } from "gsap";
import { RoughEase } from "gsap/EasePack";
import "./styles.css";

export function StarsCsection() {
  gsap.registerPlugin(RoughEase);
  let banner;
  let baseStar;
  const bannerRef = useRef(null);

  useEffect(() => {
    // const timer = setTimeout(() => {
    banner = document.querySelector("#bannerC");
    baseStar = document.querySelector(".starC");
    onLoad()
    // }, 100);
    // return () => clearTimeout(timer);
  }, []);

  const frag = document.createDocumentFragment();

  const appearMin = 0.3;
  const appearMax = 0.8;

  const delayMin = 2;
  const delayMax = 6;

  const durationMin = 0.3;
  const durationMax = 1;

  const numAnimations = 50;
  const numStars = 50;

  const stars = [];
  const eases = [];

  for (let i = 0; i < numAnimations; i++) {

    const ease = new RoughEase({
      template: Linear.easeNone,
      strength: random(1, 3),
      points: Math.floor(random(50, 200)),
      taper: "both",
      randomize: true,
      clamp: true
    });

    eases.push(ease);
  }

  function onLoad() {

    for (let i = 0; i < numStars; i++) {
      stars.push(createStar());
    }

    banner.appendChild(frag);
  }

  function createStar() {
    const star = baseStar.cloneNode(true);
    frag.appendChild(star);

    const width = banner.clientWidth;
    const height = banner.clientHeight;

    gsap.set(star, {
      rotation: random(360),
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      x: random(width),
      y: random(height),
    });

    const tl = new gsap.timeline({ repeat: -1, yoyo: true });

    for (let i = 0; i < numAnimations; i++) {

      const ease1 = eases[Math.floor(random(numAnimations))];
      const ease2 = eases[Math.floor(random(numAnimations))];

      const alpha = random(0.7, 1);
      const scale = random(0.15, 0.4);

      const appear = "+=" + random(appearMin, appearMax);
      const delay = "+=" + random(delayMin, delayMax);
      const duration1 = random(durationMin, durationMax);
      const duration2 = random(durationMin, durationMax);

      tl.to(star, duration1, { autoAlpha: alpha, scale: scale, ease: ease1 }, delay)
        .to(star, duration2, { autoAlpha: 0, scale: 0, ease: ease2 }, appear)
    }

    tl.progress(random(1));

    return {
      element: star,
      timeline: tl
    };
  }


  function random(min, max) {
    if (max == null) { max = min; min = 0; }
    if (min > max) { const tmp = min; min = max; max = tmp; }
    return min + (max - min) * Math.random();
  }

  return (
    <>
      <div id='bannerC' ref={bannerRef} >
        <div className='starC' ></div>
      </div>
    </>
  )
}