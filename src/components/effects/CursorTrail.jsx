import React, { useRef, useEffect } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const trail = [];
    const maxTrail = 20;
    const createDot = (x, y) => ({ x, y, opacity: 1, size: 3 });

    const onMove = (e) => {
      trail.push(createDot(e.clientX, e.clientY));
      if (trail.length > maxTrail) trail.shift();
    };

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.forEach((dot) => {
        dot.opacity -= 0.05;
        if (dot.opacity > 0) {
           ctx.beginPath();
           ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
           ctx.fillStyle = `rgba(0,255,213,${dot.opacity})`;
           ctx.fill();
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const onResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    animate();
    
    return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="cursorTrail" className="fixed inset-0 pointer-events-none z-50"></canvas>;
};

export default CursorTrail;