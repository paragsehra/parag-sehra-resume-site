
import { Button } from '@/components/ui/button';
import { ArrowDown, Briefcase, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { useHref } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <div className="animate-slide-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 text-resume-primary">
              Parag Sehra
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-resume-accent mb-6">
              Lead Full Stack Developer
            </h2>
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="contact-item text-resume-muted">
                <Phone size={18} />
                <span>(509) 230-9168</span>
              </div>
              <div className="contact-item text-resume-muted">
                <Mail size={18} />
                <span>sehra.parag@gmail.com</span>
              </div>
              <div className="contact-item text-resume-muted">
                <MapPin size={18} />
                <span>Seattle, WA</span>
              </div>
              <div className="contact-item text-resume-muted">
                <Linkedin size={18} />
                <span>linkedin.com/in/paragsehra</span>
              </div>
            </div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Results-driven Senior Staff Engineer with 14+ years in software development. Experienced in web app
              architecture, design, and maintenance. Skilled in OOP, third-party integration, and design patterns. Strong
              communicator, leader, flexible, and team player.
            </p>
            <div className="flex flex-wrap gap-4">
            <HashLink smooth to="/#contact">
              <Button className="bg-resume-accent hover:bg-resume-secondary" size="lg">
                Contact Me
              </Button>
            </HashLink>
            <HashLink smooth to="/#projects">
              <Button variant="outline" size="lg" className="border-resume-accent text-resume-accent hover:bg-resume-accent/10">
                View Projects
              </Button>
            </HashLink>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 
                          flex items-center justify-center shadow-xl">
              <img
                src="Resources/ps.jpg"
                alt="Parag Sehra"
                className="w-56 h-56 md:w-76 md:h-76 rounded-full object-cover border-4 border-white"
              />
            </div>
            <div className="hidden md:block absolute -right-10 top-0 bg-white rounded-lg p-4 shadow-lg transform rotate-6 animate-fade-in animate-delay-300">
              <Briefcase className="text-resume-accent" />
              <p className="mt-1 font-medium text-resume-primary">14+ Years</p>
              <p className="text-sm text-resume-muted">Experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16 animate-bounce">
      <HashLink smooth to="/#experience" className="text-resume-accent p-2 rounded-full border border-resume-accent/30 hover:bg-resume-accent/10 transition-colors">
        <ArrowDown size={24} />
      </HashLink>
      </div>
    </section>
  );
};

export default Hero;
