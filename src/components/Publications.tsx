import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, ExternalLink, FileText } from 'lucide-react';
import { publicationsData } from '../data';

export function Publications() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPubs = publicationsData.filter(pub => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="publications" className="py-24 bg-forest-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-forest-900 mb-4 flex items-center justify-center gap-3">
            <BookOpen className="text-emerald-500 w-8 h-8" /> Publications
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mx-auto mb-8"></div>
          
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-all"
              placeholder="Search publications by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {filteredPubs.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-300 transition-all group"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="hidden sm:flex flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                    <FileText className="text-emerald-600 w-6 h-6" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-forest-100 text-forest-800 text-xs font-semibold rounded-full">
                      {pub.category}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">{pub.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-emerald-600 transition-colors">
                    {pub.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-3 font-medium">
                    {pub.authors}
                  </p>
                  
                  <p className="text-emerald-700 text-sm mb-4 font-semibold italic">
                    {pub.journal}
                  </p>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    {pub.doi && (
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                        DOI: {pub.doi} <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {filteredPubs.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No publications found matching your search criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}