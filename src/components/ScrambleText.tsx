'use client';

import { useState, useEffect } from 'react';

const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

export default function ScrambleText({ 
  text, 
  duration = 600, 
  className = "" 
}: { 
  text: string; 
  duration?: number; 
  className?: string; 
}) {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    let frameId: number;
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      
      if (percent === 1) {
        setDisplayText(text);
        return;
      }
      
      const scrambled = text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        // Resolve letters smoothly from left to right
        const resolveThreshold = index / text.length;
        // Add a little randomness to the resolve threshold for a more organic feel
        if (percent > resolveThreshold) {
          return char;
        }
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join('');
      
      setDisplayText(scrambled);
      frameId = requestAnimationFrame(animate);
    };
    
    frameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(frameId);
  }, [text, duration]);

  return <span className={className}>{displayText}</span>;
}
