"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './page.css'; // Create and import a CSS file for styling

const Loader = () => {
  useEffect(() => {
  const timeline = gsap.timeline({
    onComplete: () => {
      console.log("Animation complete");
    },
  });

  timeline
    .fromTo(
      ".block",
      { width: "0%", opacity: 0 },
      { width: "5%", opacity: 1, ease: "power1.in", stagger: 0.04, delay: 2 }
    )
    .to(".loader", { x: 2, opacity: 0, ease: "expo.inOut", delay: 0.1 });
}, []);

  return (
    <div className="container">
      <div className="loader md:text-xl text-lg">loading</div>
      <div className="overlay">
        <div className="block block-1"></div>
        <div className="block block-2"></div>
        <div className="block block-3"></div>
        <div className="block block-4"></div>
        <div className="block block-5"></div>
        <div className="block block-6"></div>
        <div className="block block-7"></div>
        <div className="block block-8"></div>
        <div className="block block-9"></div>
        <div className="block block-10"></div>
        <div className="block block-11"></div>
        <div className="block block-12"></div>
        <div className="block block-13"></div>
        <div className="block block-14"></div>
        <div className="block block-15"></div>
        <div className="block block-16"></div>
        <div className="block block-17"></div>
        <div className="block block-18"></div>
        <div className="block block-19"></div>
        <div className="block block-20"></div>
      </div>
    </div>
  );
};

export default Loader;

