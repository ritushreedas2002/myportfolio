// src/components/ui/BlurLightEffect.js
import React, { useEffect, useRef } from 'react';
import '@/components/ui/blur.css';
const BlurLightEffect = () => {
  const lightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const light = lightRef.current;
      if (light) {
        light.style.left = `${x}px`;
        light.style.top = `${y}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={lightRef} className="blur-light"></div>;
};

export default BlurLightEffect;
