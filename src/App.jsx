import React, { useState, useEffect } from 'react';
import PreLoader from './components/PreLoader';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <PreLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-space-black transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100 h-auto overflow-visible'}`}>

        {/* Navigation Sticky Header */}
        <motion.header
          className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: loading ? 0 : 2 }} // Wait for preloader only if it was loading
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-center">
            <nav className={`flex gap-6 md:gap-10 px-8 py-4 rounded-full transition-all duration-300 ${scrolled ? 'glass-panel shadow-lg shadow-black/50' : 'bg-transparent'}`}>
              <a href="#inicio" className="text-sm md:text-base font-semibold text-gray-300 hover:text-neon-blue transition-colors">Inicio</a>
              <a href="#proyectos" className="text-sm md:text-base font-semibold text-gray-300 hover:text-neon-blue transition-colors">Proyectos</a>
              <a href="#experiencia" className="text-sm md:text-base font-semibold text-gray-300 hover:text-neon-blue transition-colors">Experiencia</a>
              <a href="#contacto" className="text-sm md:text-base font-semibold text-gray-300 hover:text-neon-blue transition-colors">Contacto</a>
            </nav>
          </div>
        </motion.header>

        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>

        <footer className="text-center py-8 text-gray-500 text-sm border-t border-glass-border mt-12 relative z-10 bg-space-black">
          <p>© {new Date().getFullYear()} Andres Hernandez. Diseñado y Desarrollado por Andres Hernandez.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
