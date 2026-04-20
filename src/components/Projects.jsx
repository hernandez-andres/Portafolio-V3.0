import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "App de gestión economica personal StarBudget Orion",
    description: "Aplicación de gestión economica personal con visualización de datos en tiempo real y componentes de UI altamente responsivos. Cuenta con un asistente virtual con inteligencia artificial, con humor sarcástico. Fondo animado con tematica espacial",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "#",
    github: "https://github.com/hernandez-andres/StarBudget-Orion-V1.3",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Proyecto DEEM",
    description: "Desarrollo de aplicación para detección de emociones en un entorno educativo para infantes.",
    tech: ["Python", "Swift", "HTML", "CSS", "JavaScript"],
    demo: "En desarrollo",
    github: "En desarrollo",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Proyecto AURA",
    description: "Aplicación web con inteligencia artificial para juegos educativos.",
    tech: ["Swift"],
    demo: "En desarrollo",
    github: "En desarrollo",
    span: "md:col-span-1 md:row-span-1",
  },

];

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 px-6 relative max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Proyectos Destacados</h2>
        <div className="w-20 h-1 bg-neon-blue mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(250px,auto)] gap-6">
          {projects.map((project, index) => (
            <Tilt
              key={project.id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.02}
              className={`glass-panel p-8 flex flex-col justify-between group overflow-hidden ${project.span}`}
            >
              {/* Background Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue/0 via-neon-blue/5 to-neon-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                      <Code size={20} />
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-neon-blue transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono text-neon-blue bg-space-black/50 border border-neon-blue/20 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
