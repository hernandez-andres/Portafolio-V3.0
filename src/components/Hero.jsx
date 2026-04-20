import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollY } = useScroll();
  const yElement = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityElement = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Mesh Gradient that follows mouse */}
      <motion.div
        className="w-[40vw] h-[40vw] mesh-blob hidden md:block"
        animate={{
          x: mousePosition.x - (window.innerWidth / 2.5),
          y: mousePosition.y - (window.innerHeight / 2.5),
        }}
        transition={{ type: "tween", ease: "circOut", duration: 1.5 }}
      />

      {/* Background Dots */}
      <div className="absolute inset-0 bg-transparent bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none" />

      <motion.div
        className="z-10 text-center px-6 relative"
        style={{ y: yElement, opacity: opacityElement }}
      >
        <motion.p
          className="text-neon-blue font-mono mb-4 tracking-widest text-sm md:text-base uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Hola, mi nombre es
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Andres Hernandez.
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-5xl text-gray-400 font-bold mb-8 max-w-4xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          Construyo experiencias digitales <span className="text-white">de alto impacto.</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-xl mx-auto mb-10 text-lg md:text-xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          Soy un Desarrollador Frontend enfocado en UX/UI, apasionado por crear aplicaciones web modernas, rápidas y estéticamente insuperables. Traductor bilingüe titulado, con experiencia en hotelería.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          <a href="#proyectos" className="px-8 py-4 bg-neon-blue text-space-black font-semibold rounded-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
            Ver Proyectos
          </a>
          <a href="#contacto" className="px-8 py-4 glass-panel text-white font-semibold hover:border-neon-blue hover:text-neon-blue transition-all duration-300">
            Contáctame
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
