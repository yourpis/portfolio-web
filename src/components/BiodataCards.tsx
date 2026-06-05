'use client';

import { motion } from 'framer-motion';

export default function BiodataCards() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Smooth expo curve
      },
    },
  };

  return (
    <section className="relative w-[95vw] max-w-[1600px] mx-auto py-16 px-4 md:px-0 selection:bg-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        
        {/* Left Card: The Engineer */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="group relative bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 min-h-[500px] flex flex-col justify-between hover:border-neutral-700 transition-colors duration-300"
        >
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">
              ENGINEERING DEPTH
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Full-Stack Engineer
            </h3>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg mb-6">
              Focusing on depth over breadth, I specialize in programming bare-metal AVR microcontrollers, writing efficient low-level firmware, and architecting type-safe, resilient web infrastructures. I bridge the physical-digital divide by designing solutions that scale from raw silicon registers up to global cloud API systems.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4">Credentials & Training</h4>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-semibold text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                CS50x
              </span>
              <span className="flex items-center gap-2 bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-semibold text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Red Hat Fundamentals
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Card: The Production Director */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15 }} // Slight stagger for the right card
          className="group relative bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 min-h-[500px] flex flex-col justify-between hover:border-neutral-700 transition-colors duration-300"
        >
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">
              LOGISTICS & LEADERSHIP
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Production Director
            </h3>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg mb-6">
              Commanding operational scale, I manage 10+ person specialized engineering and design teams. I design, enforce, and execute high-pressure crisis management protocols, streamline operational bottlenecks, and maintain strict production timelines to ensure complex projects ship on time, every time.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4">Operational Focus</h4>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-semibold text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                10+ Cross-Functional Teams
              </span>
              <span className="flex items-center gap-2 bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-semibold text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Crisis Mitigation Protocols
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
