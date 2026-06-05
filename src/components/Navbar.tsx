'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide navbar if scrolling down and scrolled past a 50px threshold.
    // Show navbar when scrolling up.
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 text-sm font-medium text-neutral-400 backdrop-blur-md bg-neutral-950/70 border-b border-neutral-900/50"
    >
      <div className="flex items-center gap-2 text-white">
        <span className="font-bold text-lg">Tubagus Dafa</span>
      </div>
      <div className="hidden md:flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Services</a>
        <a href="#" className="hover:text-white transition-colors">Selected Works</a>
        <a href="#" className="hover:text-white transition-colors">Process</a>
      </div>
      <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors">
        Contact Me
      </button>
    </motion.nav>
  );
}
