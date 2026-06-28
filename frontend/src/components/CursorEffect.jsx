import React, { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const glowRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Create glow element
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: fixed;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%);
      pointer-events: none;
      z-index: 999;
      transform: translate(-50%, -50%);
      transition: left 0.1s ease-out, top 0.1s ease-out;
    `;
    document.body.appendChild(glow);
    glowRef.current = glow;

    // Get all sections
    const sections = document.querySelectorAll('section');
    sectionsRef.current = sections;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Move glow
      if (glowRef.current) {
        glowRef.current.style.left = clientX + 'px';
        glowRef.current.style.top = clientY + 'px';
      }

      // Move sections
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;

      sections.forEach((section, index) => {
        const intensity = 0.015 + (index * 0.005);
        const xOffset = moveX * intensity * 100;
        const yOffset = moveY * intensity * 80;
        
        section.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        section.style.transition = 'transform 0.15s ease-out';
        section.style.willChange = 'transform';
      });
    };

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '0';
      }
      sections.forEach((section) => {
        section.style.transform = 'translate(0px, 0px)';
        section.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
      });
    };

    const handleMouseEnter = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      if (glowRef.current && glowRef.current.parentNode) {
        glowRef.current.parentNode.removeChild(glowRef.current);
      }
    };
  }, []);

  return null;
};

export default CursorEffect;