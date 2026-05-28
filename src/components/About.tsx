import { motion } from 'framer-motion';
import { aboutData, educationData, certificationsData } from '../data';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-forest-900 mb-6">About Me</h2>
            <div className="w-20 h-1 bg-emerald-500 rounded mb-8"></div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>{aboutData.academicBackground}</p>
              <p>{aboutData.researchOrientation}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-forest-50 p-8 rounded-2xl border border-forest-100"
          >
            <h3 className="text-xl font-heading font-semibold text-forest-800 mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" /> Key Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {aboutData.expertise.map((item, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white text-forest-700 rounded-full text-sm font-medium shadow-sm border border-forest-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education & Certs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-forest-900 mb-6 flex items-center gap-3">
              <GraduationCap className="text-emerald-500 w-8 h-8" /> Education
            </h2>
            <div className="space-y-8">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-emerald-200">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white" />
                  <h4 className="text-xl font-bold text-forest-800">{edu.degree}</h4>
                  <div className="text-emerald-600 font-medium mb-2">{edu.university} | {edu.period}</div>
                  <div className="text-slate-600 space-y-1 text-sm mb-3">
                    <p><strong>GPA:</strong> {edu.gpa}</p>
                    <p><strong>Status:</strong> {edu.status}</p>
                    <p><strong>Language:</strong> {edu.language}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((ach, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-forest-100 text-forest-700 rounded">
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-heading font-bold text-forest-900 mb-6 flex items-center gap-3">
              <Award className="text-emerald-500 w-8 h-8" /> Certifications
            </h2>
            <div className="grid gap-6">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-forest-800">{cert.name}</h4>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-bold rounded-full text-sm">
                      {cert.score}
                    </span>
                  </div>
                  <p className="text-slate-600">{cert.institution}</p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
                    <span>Year: {cert.year}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>Level: {cert.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}