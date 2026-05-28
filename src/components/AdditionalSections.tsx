import { motion } from 'framer-motion';
import { Globe, Award, TrendingUp, Presentation } from 'lucide-react';
import { skillsData, awardsData, internationalActivities, trainingCourses } from '../data';

export function AdditionalSections() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-forest-900 mb-4 flex items-center justify-center gap-3">
              <TrendingUp className="text-emerald-500 w-8 h-8" /> Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-emerald-500 rounded mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-forest-50/50 p-6 rounded-2xl border border-forest-100"
              >
                <h3 className="text-xl font-bold text-forest-800 capitalize mb-6 pb-4 border-b border-forest-200">
                  {category} Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1 font-medium text-slate-700">
                        <span>{skill.name}</span>
                        <span className="text-emerald-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-emerald-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* International & Training */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold text-forest-900 mb-6 flex items-center gap-2">
              <Globe className="text-emerald-500" /> International Activities
            </h3>
            <div className="space-y-4">
              {internationalActivities.map((act, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 transition-colors">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{act.name}</h4>
                    <p className="text-sm text-slate-600">{act.type} • {act.location}</p>
                    <div className="mt-2 text-xs font-semibold px-2 py-1 bg-forest-100 text-forest-700 inline-block rounded">
                      {act.year} - {act.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-bold text-forest-900 mb-6 flex items-center gap-2">
              <Presentation className="text-emerald-500" /> Training & Workshops
            </h3>
            <div className="grid gap-4">
              {trainingCourses.map((course, i) => (
                <div key={i} className="group flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 transition-all cursor-default">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform" />
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800">{course.name}</h4>
                    <p className="text-sm text-slate-500">{course.organization}</p>
                  </div>
                  <span className="text-sm font-bold text-emerald-600">{course.year}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-forest-900 mb-4 flex items-center justify-center gap-3">
              <Award className="text-emerald-500 w-8 h-8" /> Awards & Achievements
            </h2>
            <div className="w-20 h-1 bg-emerald-500 rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awardsData.map((award, i) => (
              <div key={i} className="bg-gradient-to-br from-forest-900 to-emerald-900 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
                <Award className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10" />
                <h4 className="text-lg font-bold mb-2 relative z-10">{award.title}</h4>
                <p className="text-emerald-100 text-sm mb-4 relative z-10">{award.organization}</p>
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-sm relative z-10">
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}