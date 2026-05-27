import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, User, Code, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjkebkla", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSucceeded(true);
        form.reset();
      } else {
        alert("Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      alert("Error de conexión. Revisa tu internet.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 relative max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row gap-12">
          {/* Info Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Pongámonos en contacto</h2>
            <div className="w-20 h-1 bg-neon-blue mb-8"></div>
            <p className="text-gray-400 mb-10 text-lg">
              Actualmente estoy abierto a nuevas oportunidades. Ya sea para un proyecto emocionante o simplemente para saludar, no dudes en escribirme.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-neon-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <p className="text-white font-medium">Andres.hernandez.p2020@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-neon-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Ubicación</h4>
                  <p className="text-white font-medium">Remoto / Global</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-neon-blue hover:border-neon-blue transition-all duration-300 transform hover:-translate-y-1">
                <Code size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-neon-blue hover:border-neon-blue transition-all duration-300 transform hover:-translate-y-1">
                <User size={20} />
              </a>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:w-1/2">
            {!succeeded ? (
              <form className="glass-panel p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-space-black/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="email">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-space-black/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="message">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full bg-space-black/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors duration-300 resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-neon-blue text-space-black font-bold text-lg py-4 rounded-lg hover:bg-white disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] mt-2 flex items-center justify-center gap-2"
                >
                  {submitting ? "Enviando..." : (
                    <>
                      <Send size={20} /> Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel p-12 flex flex-col items-center justify-center text-center gap-4 h-full"
              >
                <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center text-neon-blue mb-2">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white">¡Mensaje Recibido!</h3>
                <p className="text-gray-400">
                  Gracias por contactarme. Te responderé a la brevedad posible.
                </p>
                <button
                  onClick={() => setSucceeded(false)}
                  className="text-neon-blue hover:underline mt-4 text-sm"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;