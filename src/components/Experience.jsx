import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Hotel Antay Casino 5 estrellas, Copiapó",
    company: "Antay",
    period: "2011 - 2012",
    description: "Comencé siendo botones, luego pasé a recepcionista.",
  },
  {
    id: 2,
    role: "Hotel Chagall 4 estrellas, Copiapó",
    company: "Chagall",
    period: "2012 - 2013",
    description: "Primero entré como recepcionista diurno, y luego pasé a trabajar como auditor nocturno con tareas de gerencia de turno.",
  },
  {
    id: 3,
    role: "Hotel RQ, Antofagasta",
    company: "RQ",
    period: "2019 - 2021",
    description: "Trabajé como auditor nocturno, con tareas de gerencia de turno, durante todo el periodo.",
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 px-6 max-w-4xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Experiencia</h2>
        <div className="w-20 h-1 bg-neon-blue mb-16"></div>

        <div className="relative border-l border-glass-border ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="mb-12 pl-8 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-neon-blue rounded-full -left-[9px] top-1.5 shadow-[0_0_10px_#00f0ff]"></div>

              <div className="glass-panel p-6 hover:border-neon-blue transition-colors duration-300">
                <span className="text-neon-blue font-mono text-sm mb-2 block">{exp.period}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
