
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-resume-primary text-white py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Parag<span className="text-resume-accent">.dev</span></h3>
            <p className="mt-2 text-gray-300">Lead Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:sehra.parag@gmail.com"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/paragsehra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/paragsehra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Parag Sehra. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
