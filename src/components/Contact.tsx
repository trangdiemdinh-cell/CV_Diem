import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, UserCheck } from 'lucide-react';
import { personalInfo, refereesData } from '../data';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-forest-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Referees */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-forest-900 mb-4 flex items-center justify-center gap-3">
              <UserCheck className="text-emerald-500 w-8 h-8" /> Academic Referees
            </h2>
            <div className="w-20 h-1 bg-emerald-500 rounded mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {refereesData.map((ref, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <h4 className="text-xl font-bold text-forest-800 mb-1">{ref.name}</h4>
                <p className="text-emerald-600 font-medium text-sm mb-3">{ref.title}</p>
                <p className="text-slate-600 text-sm mb-2">{ref.institution}</p>
                <p className="text-slate-500 text-sm italic mb-4">"{ref.relationship}"</p>
                <a href={`mailto:${ref.email}`} className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700">
                  <Mail size={16} className="mr-2" /> {ref.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <div className="p-10 lg:p-16 bg-gradient-to-br from-forest-900 to-emerald-900 text-white">
            <h3 className="text-3xl font-heading font-bold mb-6">Get In Touch</h3>
            <p className="text-emerald-100 mb-12 leading-relaxed text-lg">
              I am open to academic collaborations, research projects, and consultancy opportunities. Please feel free to contact me.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-emerald-300" />
                </div>
                <div>
                  <h5 className="text-emerald-300 text-sm font-bold mb-1">Email</h5>
                  <p className="text-lg">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-emerald-300" />
                </div>
                <div>
                  <h5 className="text-emerald-300 text-sm font-bold mb-1">Phone</h5>
                  <p className="text-lg">{personalInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-emerald-300" />
                </div>
                <div>
                  <h5 className="text-emerald-300 text-sm font-bold mb-1">Location</h5>
                  <p className="text-lg">{personalInfo.organization}<br/>{personalInfo.pob}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 lg:p-16">
            <h3 className="text-2xl font-heading font-bold text-forest-900 mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-slate-50" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-slate-50" placeholder="Your email address" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-slate-50" placeholder="Research Collaboration" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-slate-50" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors flex justify-center items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}