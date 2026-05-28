import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-slate-300 py-12 border-t border-forest-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">{personalInfo.name}</h3>
            <p className="text-emerald-200/80 mb-6 max-w-sm">
              {personalInfo.title}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Me</a></li>
              <li><a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a></li>
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">Publications</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-forest-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-forest-400">
            Designed for Academic Excellence
          </p>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-400 hover:-translate-y-1 transition-all"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
}