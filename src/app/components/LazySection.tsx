import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export function LazySection({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px' 
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight: '200px' }} />}
    </div>
  );
}
