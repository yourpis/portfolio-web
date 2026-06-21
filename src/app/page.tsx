'use client';

import { useState, useEffect } from 'react';
import ScrambleText from '@/components/ScrambleText';

export default function Home() {
  const [logoText, setLogoText] = useState('Tubagus Dafa');

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoText((prev) => (prev === 'Tubagus Dafa' ? 'tebe' : 'Tubagus Dafa'));
    }, 2000); // Switch every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[#FCFCFD] text-[#111827] selection:bg-[#111827]/10">
      <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-12 md:gap-24 relative z-10">
        
        {/* Left Side: Content (Apple-style Tile) */}
        <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col mt-8 md:mt-0 group">
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[9px] overflow-hidden transition-all duration-500 group-hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)] group-hover:scale-[1.01] group-hover:bg-white/80 flex flex-col h-full">
            
            {/* Tile Content */}
            <div className="p-8 md:p-10 flex flex-col justify-between h-full text-left md:text-right">
              <div>
                <h5 className="text-xl font-semibold text-[#111827] tracking-tight mb-4">
                  Tubagus Dafa
                </h5>
                <p className="text-base md:text-lg text-[#111827]/80 leading-[1.6] font-medium tracking-tight">
                  I am a full-stack software engineer who connects technical execution with business outcomes, helping teams plan, build, and ship web applications that meet real operational needs.
                </p>
              </div>

              <div className="mt-12 pt-6 border-t border-[#111827]/10">
                <p className="text-sm md:text-[15px] text-[#111827]/70 leading-relaxed font-light tracking-wide flex flex-col md:items-end gap-2">
                  <span>
                    A new portfolio is available. Check it out at{' '}
                    <a 
                      href="https://tebe.dev" 
                      className="text-[#111827] font-medium underline underline-offset-4 decoration-[#111827]/20 hover:decoration-[#111827] transition-all duration-300"
                    >
                      tebe.dev
                    </a>
                  </span>
                  <span>
                    Find me on{' '}
                    <a 
                      href="https://www.linkedin.com/in/tubagusdafa" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111827] underline underline-offset-4 decoration-[#111827]/20 hover:decoration-[#111827] transition-all duration-300"
                    >
                      LinkedIn
                    </a>
                    , or say hello at{' '}
                    <a 
                      href="mailto:tubagus.dafa@ui.ac.id" 
                      className="text-[#111827] underline underline-offset-4 decoration-[#111827]/20 hover:decoration-[#111827] transition-all duration-300"
                    >
                      tubagus.dafa@ui.ac.id
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Logo */}
        <div className="w-full md:w-1/2 flex-shrink-0 relative h-16 md:h-24 flex items-center md:justify-start">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-[#111827] absolute left-0 flex items-start">
            <ScrambleText text={logoText} duration={500} />
            <span className="text-xl md:text-2xl ml-1 md:ml-2 not-italic font-sans align-top leading-none text-[#111827]/50 mt-2">©</span>
          </h1>
        </div>

      </div>
    </main>
  );
}