import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface Connection {
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay: number;
}

export function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Globe properties
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.35;

    // Generate random points on globe (representing cities/countries)
    const generatePoints = (count: number) => {
      const points = [];
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        const x = centerX + radius * Math.sin(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        points.push({ x, y, z, theta, phi });
      }
      return points;
    };

    const points = generatePoints(30);

    // Generate connections
    const connections: Connection[] = [];
    for (let i = 0; i < points.length; i++) {
      const connectionsPerPoint = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionsPerPoint; j++) {
        const targetIndex = Math.floor(Math.random() * points.length);
        if (targetIndex !== i) {
          connections.push({
            from: { x: points[i].x, y: points[i].y },
            to: { x: points[targetIndex].x, y: points[targetIndex].y },
            delay: Math.random() * 3,
          });
        }
      }
    }

    let animationFrame: number;
    let rotation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotation += 0.002;

      // Draw globe circle
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw latitude lines
      for (let i = 1; i < 5; i++) {
        const y = centerY + (radius * (i - 2.5)) / 2.5;
        const width = Math.sqrt(radius * radius - Math.pow((i - 2.5) * radius / 2.5, 2)) * 2;
        
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(centerX, y, width / 2, radius * 0.15, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw longitude lines
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4 + rotation;
        
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * Math.abs(Math.cos(angle)), radius, Math.PI / 2, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Rotate points
      const rotatedPoints = points.map(point => {
        const newTheta = point.theta + rotation;
        const x = centerX + radius * Math.sin(point.phi) * Math.cos(newTheta);
        const y = centerY + radius * Math.sin(point.phi) * Math.sin(newTheta);
        const z = radius * Math.cos(point.phi);
        
        return { x, y, z };
      });

      // Draw connections (only for visible points)
      const time = Date.now() / 1000;
      connections.forEach((conn, index) => {
        const fromIndex = Math.floor(index / 3);
        const toIndex = Math.floor(Math.random() * rotatedPoints.length);
        
        if (fromIndex < rotatedPoints.length && toIndex < rotatedPoints.length) {
          const from = rotatedPoints[fromIndex];
          const to = rotatedPoints[toIndex];
          
          // Only draw if both points are on the visible side
          if (from.z > -radius * 0.3 && to.z > -radius * 0.3) {
            const pulsePhase = ((time + conn.delay) % 2) / 2;
            const opacity = Math.sin(pulsePhase * Math.PI) * 0.4;
            
            // Draw connection line
            const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
            gradient.addColorStop(0, `rgba(6, 182, 212, ${opacity * 0.3})`);
            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity})`);
            gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity * 0.3})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            
            // Draw bezier curve for connection
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2 - 30;
            ctx.quadraticCurveTo(midX, midY, to.x, to.y);
            ctx.stroke();

            // Draw animated dot along the line
            const dotPosition = pulsePhase;
            const dotX = from.x + (to.x - from.x) * dotPosition;
            const dotY = from.y + (to.y - from.y) * dotPosition - 30 * Math.sin(dotPosition * Math.PI);
            
            ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 2})`;
            ctx.beginPath();
            ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Draw points (cities)
      rotatedPoints.forEach(point => {
        if (point.z > -radius * 0.3) {
          const size = (point.z + radius) / (radius * 2) * 3 + 2;
          const opacity = (point.z + radius) / (radius * 2) * 0.8 + 0.2;
          
          // Glow effect
          ctx.fillStyle = `rgba(6, 182, 212, ${opacity * 0.3})`;
          ctx.beginPath();
          ctx.arc(point.x, point.y, size + 2, 0, Math.PI * 2);
          ctx.fill();
          
          // Point
          ctx.fillStyle = `rgba(6, 182, 212, ${opacity})`;
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.6 }}
      />
    </motion.div>
  );
}
