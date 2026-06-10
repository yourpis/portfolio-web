'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 50) {
      setIsShrunk(true);
    } else if (latest < previous) {
      setIsShrunk(false);
    }
  });

  const navVariants = {
    expanded: {
      width: isMobile ? "90%" : "600px",
      borderRadius: "999px",
      padding: isMobile ? "12px 16px" : "12px 24px",
    },
    shrunk: {
      width: isMobile ? "280px" : "360px",
      borderRadius: "999px",
      padding: "10px 16px",
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="expanded"
      animate={isShrunk ? "shrunk" : "expanded"}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="fixed left-1/2 -translate-x-1/2 z-50 bottom-6 md:bottom-auto md:top-6 bg-white/[0.03] backdrop-blur-lg border border-white/10 shadow-2xl flex items-center justify-between overflow-hidden text-sm font-medium text-neutral-400"
    >
      <div className="flex items-center gap-2 text-white flex-shrink-0 whitespace-nowrap">
        <span className="font-bold text-lg">Tubagus Dafa</span>
      </div>

      <AnimatePresence>
        {!isShrunk && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:flex gap-6 items-center overflow-hidden whitespace-nowrap"
          >
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Selected Works</a>
            <a href="#" className="hover:text-white transition-colors">Process</a>
          </motion.div>
        )}
      </AnimatePresence>

      <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors flex-shrink-0 whitespace-nowrap">
        Contact Me
      </button>
    </motion.nav>
  );
}

