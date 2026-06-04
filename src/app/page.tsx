export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-white overflow-hidden selection:bg-gray-200">
      
      {/* Navigation / Header Scaffold */}
      <nav className="absolute top-0 w-full flex justify-between items-center p-6 text-sm font-medium text-gray-600">
        <div className="flex items-center gap-2 text-black">
          <span className="font-bold text-lg">▲ Tubagus Dafa</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-black transition-colors">Services</a>
          <a href="#" className="hover:text-black transition-colors">Selected Works</a>
          <a href="#" className="hover:text-black transition-colors">Process</a>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
          Contact Me
        </button>
      </nav>

      {/* Antigravity Hero Section */}
      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-4 mt-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-tight">
          Engineering systems for the <br />
          <span className="relative">
            next-gen enterprise.
            {/* Simulated gradient cursor from image_23917e */}
            <span className="absolute -right-4 top-1 h-[80%] w-[3px] bg-gradient-to-b from-blue-500 via-red-400 to-yellow-400 animate-pulse"></span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl">
          I build high-performance web applications, automate business workflows, and design embedded hardware solutions to solve complex operational bottlenecks.
        </p>

        {/* Pill Buttons aligned with image_2391be */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2">
            Initiate Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="bg-gray-100 text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Explore architecture
          </button>
        </div>
      </div>

    </main>
  );
}