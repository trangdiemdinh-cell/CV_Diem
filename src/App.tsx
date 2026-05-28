import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { AdditionalSections } from './components/AdditionalSections';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <AdditionalSections />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;