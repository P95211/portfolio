
import { useState } from "react";
import { Github, Mail } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-teal-400">
            Praveen Kumar
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/P95211" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:x@x.com"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-teal-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-gray-300 hover:text-teal-400 w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-300 hover:text-teal-400 w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-gray-300 hover:text-teal-400 w-full text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block px-3 py-2 text-gray-300 hover:text-teal-400 w-full text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-300 hover:text-teal-400 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
