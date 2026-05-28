import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../data';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-forest-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-forest-900 mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-emerald-500 w-8 h-8" /> Professional Experience
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-forest-100 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-forest-800 mb-1 group-hover:text-emerald-600 transition-colors">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg text-slate-600 font-medium">
                      {exp.organization}
                    </h4>
                  </div>
                  <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-medium text-sm whitespace-nowrap self-start">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((req, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-600 leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}