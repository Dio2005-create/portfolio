import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Send, Mail, Phone, MapPin, Check, MessageSquare, User, AtSign, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulation d'envoi (Remplacer par emailjs.sendForm si configuré)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      formRef.current?.reset();
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  // Animations variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0f172a] overflow-hidden py-24 px-4">
      {/* Background Decoratif (Blurry Blobs) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            Parlons de votre projet
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Envie de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">collaborer ?</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Que ce soit pour une opportunité, une question technique ou simplement dire bonjour, ma boîte de réception est toujours ouverte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {[
              { icon: Mail, title: 'Email', content: 'contact@example.com', link: 'mailto:contact@example.com', color: 'text-blue-400' },
              { icon: Phone, title: 'Téléphone', content: '+33 6 12 34 56 78', link: 'tel:+33612345678', color: 'text-cyan-400' },
              { icon: MapPin, title: 'Localisation', content: 'Paris, France', link: '#', color: 'text-emerald-400' },
            ].map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="group flex items-center p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/60 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`p-4 rounded-xl bg-slate-900/50 mr-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className={info.color} size={28} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{info.title}</p>
                  <p className="text-xl font-semibold text-slate-200">{info.content}</p>
                </div>
                <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-slate-500" size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Right Column: Glassmorphism Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-slate-700 to-slate-900 shadow-2xl">
              <div className="bg-[#0f172a]/90 backdrop-blur-2xl p-8 md:p-12 rounded-[23px]">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Nom */}
                    <div className="relative group">
                      <label className="flex items-center text-sm font-medium text-slate-400 mb-2 group-focus-within:text-blue-400 transition-colors">
                        <User size={16} className="mr-2" /> Nom complet
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full bg-slate-900/50 border-b-2 border-slate-700 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                        placeholder="Elon Musk"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <label className="flex items-center text-sm font-medium text-slate-400 mb-2 group-focus-within:text-blue-400 transition-colors">
                        <AtSign size={16} className="mr-2" /> Votre Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full bg-slate-900/50 border-b-2 border-slate-700 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                        placeholder="elon@mars.com"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <label className="flex items-center text-sm font-medium text-slate-400 mb-2 group-focus-within:text-blue-400 transition-colors">
                      <MessageSquare size={16} className="mr-2" /> Votre projet
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      className="w-full bg-slate-900/50 border-b-2 border-slate-700 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600 resize-none"
                      placeholder="Dites-moi tout..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isLoading}
                      className="relative w-full overflow-hidden group py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-bold text-white shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3"
                    >
                      <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                      
                      {isLoading ? (
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Envoyer le message</span>
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Status Toast Notification-like */}
                  <AnimatePresence>
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`p-4 rounded-xl flex items-center gap-3 ${
                          submitStatus === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}
                      >
                        {submitStatus === 'success' ? <Check size={20}/> : '✕'}
                        {submitStatus === 'success' ? 'Message envoyé avec succès !' : 'Erreur lors de l\'envoi.'}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;