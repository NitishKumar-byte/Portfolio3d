import React from 'react';
import profileImg from '../assets/profile.png'; // ✅ Import image from assets

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center pt-20 pb-12 px-6 overflow-hidden">
      {/* CSS Animated Rings Background - Only borders rotate, not the image */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-purple-500/20 animate-spin-slow"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-purple-400/15 animate-spin-slow-reverse"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full border border-purple-300/10 animate-spin-slow"></div>
        <div className="absolute w-[450px] h-[450px] rounded-full animate-spin-slow">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 22.5}deg) translateX(-50%) translateY(-50%) translateX(225px)`,
                boxShadow: '0 0 10px rgba(139,92,246,0.2)'
              }}
            />
          ))}
        </div>
        <div className="absolute w-[200px] h-[200px] rounded-full bg-purple-500/10 blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-2 rounded-2xl text-[#0b0d15] inline-block">N</span>
              <span className="text-white">ithish</span>
              <span className="text-purple-400 ml-2">Kumar</span>
            </h1>

            <p className="text-base md:text-xl text-gray-400 mt-2 flex items-center gap-2">
              <span className="text-purple-400">◆</span> B.TECH CSE | FULL STACK DEVELOPER
            </p>

            <div className="mt-4 space-y-1">
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                DESIGN BEYOND PIXELS.
              </p>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-purple-400 leading-tight">
                BUILD BEYOND LIMITS.
              </p>
            </div>

            <p className="mt-4 text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
              B.Tech CSE student passionate about building modern web applications.
              Transforming ideas into reality through clean code, innovative design,
              and scalable solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a 
                href="#projects" 
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="border border-gray-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>

            <div 
              className="mt-8 flex items-center gap-2 text-gray-500 text-sm cursor-pointer group"
              onClick={scrollToAbout}
            >
              <span className="group-hover:text-purple-400 transition-colors duration-300">Scroll Down</span>
              <svg className="w-4 h-4 animate-bounce text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Right Side - Image (No Rotation) */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Static Glow Border - No Rotation */}
              <div 
                className="relative rounded-full p-[3px]"
                style={{
                  background: 'conic-gradient(from 0deg, #7c3aed, #a78bfa, #7c3aed, #a78bfa, #7c3aed)',
                  boxShadow: '0 0 50px rgba(139,92,246,0.15)'
                }}
              >
                <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-[#1a1f2e] border-2 border-white/5">
                  {/* ✅ Image from assets/profile.png */}
                  <img 
                    src={profileImg} 
                    alt="Nithish Kumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#050505] border border-purple-500/30 rounded-full px-3 py-1 flex items-center gap-2 z-10">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-purple-300 font-medium">Available</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;