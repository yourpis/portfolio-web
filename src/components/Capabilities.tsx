'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this component relative to the viewport.
  // Animation starts when the top of the container enters the bottom of the screen,
  // and completes when the center of the container reaches the center of the screen.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Transform scroll progress to scale, width, and border radius.
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const width = useTransform(scrollYProgress, [0, 1], ["85vw", "95vw"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["48px", "0px"]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-transparent py-20 px-4 md:px-0"
    >
      <motion.div
        style={{
          scale,
          width,
          borderRadius,
        }}
        className="mx-auto w-[95vw] max-w-[1600px] bg-neutral-900 border border-neutral-800 p-10 md:p-20 flex flex-col justify-center min-h-[90vh] text-white overflow-hidden selection:bg-neutral-800"
      >
        {/* Tier 1 Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-3">
            OPERATING CAPABILITIES
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            System Architecture & Execution
          </h3>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Engineering high-performance, statically generated web architectures and low-level firmware systems. Leveraging edge delivery networks, robust API design, and hardware-software integration to solve complex execution challenges.
          </p>
        </div>

        {/* 3-Column CSS Grid for Service Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Module 1 */}
          <div className="group relative bg-neutral-950/50 border border-neutral-800/80 rounded-2xl p-8 hover:border-neutral-700 transition-colors duration-300">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-white group-hover:scale-110 transition-transform duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Full-Stack Engineering</h4>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Designing scalable relational systems utilizing PostgreSQL, Redis caching layers, and JWT-based stateless authentication protocols for high-throughput workflows.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">PostgreSQL</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Redis</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">JWT</span>
            </div>
          </div>

          {/* Module 2 */}
          <div className="group relative bg-neutral-950/50 border border-neutral-800/80 rounded-2xl p-8 hover:border-neutral-700 transition-colors duration-300">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-white group-hover:scale-110 transition-transform duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Hardware Prototyping</h4>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Developing bare-metal microcontroller firmware and custom biometric scanning interfaces to bridge the gap between physical sensor hardware and web management systems.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Bare-Metal MCU</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Firmware</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Biometrics</span>
            </div>
          </div>

          {/* Module 3 */}
          <div className="group relative bg-neutral-950/50 border border-neutral-800/80 rounded-2xl p-8 hover:border-neutral-700 transition-colors duration-300">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-white group-hover:scale-110 transition-transform duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Production Logistics</h4>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Orchestrating high-pressure on-set logistics, directing talent, and managing cross-functional technical teams to meet strict deliverables.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">On-set Logistics</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Directing</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Operations</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
