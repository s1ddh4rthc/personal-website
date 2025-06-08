import { useEffect, useRef } from 'react';

export default function VantaBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.VANTA && window.VANTA.NET && containerRef.current) {
      const effect = window.VANTA.NET({
        el: containerRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        
        // Tweakable params
        
        color: 0x0,        // main line/dot color
        backgroundColor: 0xebebeb,
        backgroundAlpha: 1,     // let your gradient show through
        maxDistance: 20.0,     // link length
        spacing:     15.0,      // dot spacing
        points:      10.0,      // number of dots
        showDots: false,

        scale:       1.0,
        scaleMobile: 1.0,
      });

      // cleanup on unmount
      return () => {
        if (effect.destroy) effect.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
      style={{ background: 'transparent' }}
    />
  );
}
