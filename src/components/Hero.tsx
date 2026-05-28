import { motion } from 'framer-motion';
import { Download, FileText, Mail, MapPin, Phone, Building } from 'lucide-react';
import { personalInfo } from '../data';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Aquatic Background" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/80 to-emerald-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-forest-900/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-6 border border-emerald-500/30">
            {personalInfo.organization}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight text-white">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-emerald-200 font-medium mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-forest-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/30">
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </a>
            <a href="#publications" className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-400/50 text-base font-medium rounded-md text-emerald-300 hover:bg-emerald-400/10 transition-colors">
              <FileText className="mr-2 h-5 w-5" /> View Publications
            </a>
            <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-400/50 text-base font-medium rounded-md text-emerald-300 hover:bg-emerald-400/10 transition-colors">
              <Download className="mr-2 h-5 w-5" /> Download CV
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2"><MapPin size={16} className="text-emerald-400"/> {personalInfo.pob}</div>
            <div className="flex items-center gap-2"><Phone size={16} className="text-emerald-400"/> {personalInfo.phone}</div>
            <div className="flex items-center gap-2"><Mail size={16} className="text-emerald-400"/> {personalInfo.email}</div>
            <div className="flex items-center gap-2"><Building size={16} className="text-emerald-400"/> {personalInfo.nationality}</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-72 h-72 sm:w-96 sm:h-96 relative flex-shrink-0"
        >
          <div className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="relative w-full h-full rounded-full border-4 border-white/10 p-2 overflow-hidden shadow-2xl bg-forest-900/50 backdrop-blur-sm">
            <img 
              src="/portrait.jpg" 
              alt={personalInfo.name} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}