import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Users, Leaf, Filter } from 'lucide-react';
import { projectsData } from '../data';
import { cn } from '../utils/cn';

export function Projects() {
  const categories = ["All", ...new Set(projectsData.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-forest-900 mb-4 flex items-center justify-center gap-3">
            <Microscope className="text-emerald-500 w-8 h-8" /> Research Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                  activeCategory === cat 
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20" 
                    : "bg-forest-50 text-forest-700 hover:bg-forest-100"
                )}
              >
                {activeCategory === cat && <Filter size={14} />}
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-300 hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <span className="inline-block px-3 py-1 bg-forest-50 text-forest-700 text-xs font-semibold rounded-full">
                      {project.period}
                    </span>
                    <span className="text-emerald-600 text-xs font-bold px-3 py-1 bg-emerald-50 rounded-full">
                      {project.role}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 font-medium">
                    <Users size={16} className="text-slate-400" /> Funded by: <span className="text-slate-700">{project.funder}</span>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {project.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-1 text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded">
                        <Leaf size={12} className="text-emerald-400" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}