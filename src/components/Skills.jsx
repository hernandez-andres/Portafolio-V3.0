import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Layout, Code2, Cpu, Globe, Layers, Smartphone } from 'lucide-react';

const skills = [
  { name: "React", icon: <Code2 size={24} /> },
  { name: "Next.js", icon: <Globe size={24} /> },
  { name: "TypeScript", icon: <Terminal size={24} /> },
  { name: "Tailwind CSS", icon: <Layout size={24} /> },
  { name: "Node.js", icon: <Database size={24} /> },
  { name: "Framer Motion", icon: <Layers size={24} /> },
  { name: "React Native", icon: <Smartphone size={24} /> },
  { name: "GraphQL", icon: <Cpu size={24} /> },
];

const Skills = () => {
  // Duplicate array to create a seamless infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-24 px-6 overflow-hidden bg-space-black relative">
      <div className="max-w-7xl mx-auto mb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Stack Tecnológico</h2>
          <div className="w-20 h-1 bg-neon-blue"></div>
        </motion.div>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-space-black to-transparent z-10"></div>
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-space-black to-transparent z-10"></div>

        <motion.div
          className="flex gap-8 whitespace-nowrap py-8"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-8 py-4 glass-panel border-glass-border min-w-max hover:border-neon-blue transition-colors duration-300"
            >
              <span className="text-neon-blue">{skill.icon}</span>
              <span className="text-lg font-semibold text-white">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
