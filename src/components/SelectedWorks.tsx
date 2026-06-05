'use client';

import { motion } from 'framer-motion';

export default function SelectedWorks() {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Smooth expo curve
      },
    },
  };

  return (
    <section className="relative w-[95vw] max-w-[1600px] mx-auto py-24 px-4 md:px-0 selection:bg-neutral-800">
      
      {/* Section Header */}
      <div className="mb-20">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-3">
          SELECTED WORKS
        </h2>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-24 md:gap-36">
        
        {/* Project 1: Prime Capital Ledger */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Image */}
          <div className="relative aspect-[16/10] w-full rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden group hover:border-neutral-700 transition-colors duration-300">
            <img
              src="/prime-ledger.png"
              alt="Prime Capital Ledger"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Text Content */}
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
              Web Architecture
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Prime Capital Ledger
            </h3>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg mb-6">
              Consolidated shared investment capital and automated brokerage PDF parsing by engineering a type-safe Next.js architecture with a strict Redis caching layer.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Next.js</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Redis</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">TypeScript</span>
            </div>
          </div>
        </motion.div>

        {/* Project 2: Biometric Reflex Tester (Reversed Layout) */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Image (Placed second on desktop via order-last) */}
          <div className="relative aspect-[16/10] w-full rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden group hover:border-neutral-700 transition-colors duration-300 md:order-last">
            <img
              src="/f1-hardware.jpg"
              alt="Biometric Reflex Tester"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Text Content */}
          <div className="md:order-first">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
              Hardware & Low-level
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Biometric Reflex Tester
            </h3>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg mb-6">
              Evaluated human reflex latency in milliseconds by completely bypassing high-level OS latency, programming a bare-metal ATmega328P strictly in AVR Assembly.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">ATmega328P</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">AVR Assembly</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Biometrics</span>
            </div>
          </div>
        </motion.div>

        {/* Project 3: YuSurg Medical Simulator */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Image */}
          <div className="relative aspect-[16/10] w-full rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden group hover:border-neutral-700 transition-colors duration-300">
            <img
              src="/yusurg.png"
              alt="YuSurg Medical Simulator"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Text Content */}
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
              Software Systems
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              YuSurg Medical Simulator
            </h3>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg mb-6">
              Architected patient vital management and randomized malady treatment utilizing strict Object-Oriented design patterns and a persistent Spring Boot REST API.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Spring Boot</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Java</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">REST API</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Link at Bottom */}
      <div className="mt-24 flex justify-center">
        <a
          href="#"
          className="text-neutral-400 hover:text-white font-medium text-sm tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 group"
        >
          View All Projects
          <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>

    </section>
  );
}
