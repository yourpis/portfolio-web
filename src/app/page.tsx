'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Capabilities from '@/components/Capabilities';
import BiodataCards from '@/components/BiodataCards';
import SelectedWorks from '@/components/SelectedWorks';

export default function Home() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Split the Hero text into two parts to match the original line break structure.
  const textLine1 = "Engineering systems for the ";
  const textLine2 = "next-gen enterprise.";

  // Calculate delays for each character to simulate a human-like typing rhythm:
  // Starts with a hesitant initial delay, starts typing slowly, then accelerates as confidence increases.
  const line1Length = textLine1.length;
  const getCharDelay = (globalIndex: number) => {
    const initialDelay = 1.0; // Pause at the start to simulate "thinking"
    let delay = initialDelay;
    for (let i = 0; i < globalIndex; i++) {
      if (i < 8) {
        delay += 0.16; // Hesitant start ("Engine")
      } else if (i < 18) {
        delay += 0.09; // Mid speed ("ering syste")
      } else if (i < 28) {
        delay += 0.05; // Gaining speed ("ms for the")
      } else {
        delay += 0.025; // Confident fast burst ("next-gen enterprise.")
      }
    }
    return delay;
  };

  // Variants for staggered character-by-character typing.
  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const characterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline",
    },
  };

  // Variants for fading/sliding up other UI elements once typing completes.
  const revealVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6, // Way slower reveal for cinematic appearance
        ease: [0.16, 1, 0.3, 1], // Premium easeOutExpo curve
      },
    },
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-neutral-950 overflow-hidden selection:bg-neutral-800">
      
      <Navbar />

      {/* Antigravity Hero Section */}
      <div className="z-10 flex flex-col items-center justify-center text-center max-w-4xl px-4 min-h-screen w-full pt-20">
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => setIsTypingComplete(true)}
        >
          {Array.from(textLine1).map((char, index) => (
            <motion.span
              key={`l1-${index}`}
              variants={characterVariants}
              transition={{
                duration: 0.03,
                delay: getCharDelay(index),
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            variants={characterVariants}
            transition={{
              duration: 0.03,
              delay: getCharDelay(line1Length),
            }}
          >
            <br />
          </motion.span>
          {Array.from(textLine2).map((char, index) => (
            <motion.span
              key={`l2-${index}`}
              variants={characterVariants}
              transition={{
                duration: 0.03,
                delay: getCharDelay(line1Length + 1 + index),
              }}
            >
              {char}
            </motion.span>
          ))}
          {/* Blinking Mac Terminal Block Cursor following the typing flow */}
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "steps(2)",
            }}
            style={{
              background: "linear-gradient(to bottom, #22c55e, #eab308, #f97316, #ef4444, #a855f7, #3b82f6)"
            }}
            className="inline-block align-baseline translate-y-[0.06em] h-[0.85em] w-[0.5em] ml-1.5"
          />
        </motion.h1>
        
        <motion.p
          variants={revealVariants}
          initial="hidden"
          animate={isTypingComplete ? "visible" : "hidden"}
          transition={{
            ...revealVariants.visible.transition,
            delay: 0.15, // Delay slightly after the navigation starts to appear
          }}
          className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl"
        >
          Full-stack engineer. Production director. I ship software and lead teams through complexity.
        </motion.p>

        {/* Pill Buttons aligned with image_2391be */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          animate={isTypingComplete ? "visible" : "hidden"}
          transition={{
            ...revealVariants.visible.transition,
            delay: 0.3, // Stagger button group after the paragraph
          }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2">
            Initiate Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="bg-neutral-900 text-white border border-neutral-800 px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors">
            Explore architecture
          </button>
        </motion.div>

        {/* Stats/Proof Bar */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          animate={isTypingComplete ? "visible" : "hidden"}
          transition={{
            ...revealVariants.visible.transition,
            delay: 0.45, // Stagger slightly after the buttons
          }}
          className="mt-12 flex flex-wrap justify-center items-center gap-3 text-xs tracking-widest uppercase text-neutral-500 font-medium"
        >
          <span>3 PRODUCTION SYSTEMS</span>
          <span className="text-neutral-700">•</span>
          <span>2 LEADERSHIP ROLES</span>
          <span className="text-neutral-700">•</span>
          <span>CS50x</span>
          <span className="text-neutral-700">•</span>
          <span>RED HAT CERTIFIED</span>
        </motion.div>
      </div>

      <BiodataCards />

      <SelectedWorks />

      <Capabilities />

    </main>
  );
}