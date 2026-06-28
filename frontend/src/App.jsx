import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollAnimation from './components/ScrollAnimation';
import CursorEffect from './components/CursorEffect';

function App() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-x-hidden">
      {/* Cursor Effect */}
      <CursorEffect />
      
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="scale" duration={600} threshold={0} delay={0}>
            <Hero />
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" duration={600} delay={0}>
            <About />
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" duration={600} delay={0}>
            <Projects />
          </ScrollAnimation>
          
          <ScrollAnimation direction="left" duration={600} delay={0}>
            <Skills />
          </ScrollAnimation>
          
          <ScrollAnimation direction="right" duration={600} delay={0}>
            <Experience />
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" duration={600} delay={0}>
            <Contact />
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation direction="up" duration={600} delay={0}>
          <footer className="text-center py-8 px-6 border-t border-white/5 mt-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center items-center gap-6 mb-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] text-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-x-twitter"></i>
                </a>
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4"></div>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} NithishKumar. Built with ❤️ using MERN Stack
              </p>
            </div>
          </footer>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default App;