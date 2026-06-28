import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 500,
  threshold = 0.1,
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const getTransform = () => {
    if (isVisible) return 'translateY(0) translateX(0) scale(1)';
    
    switch(direction) {
      case 'up':
        return 'translateY(40px)';
      case 'down':
        return 'translateY(-40px)';
      case 'left':
        return 'translateX(-40px)';
      case 'right':
        return 'translateX(40px)';
      case 'scale':
        return 'scale(0.92)';
      default:
        return 'translateY(40px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;