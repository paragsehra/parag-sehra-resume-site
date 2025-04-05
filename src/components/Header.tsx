
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-resume-primary font-heading font-bold text-2xl">
          Parag<span className="text-resume-accent">.</span><span className="text-resume-primary">dev</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-resume-dark hover:text-resume-accent transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          {/* <ThemeToggle /> */}
          <Button 
            variant="default" 
            className="bg-resume-accent hover:bg-resume-secondary transition-colors"
            onClick={() => window.open('public/Resources/Resume Parag Sehra Full stack 12+.pdf')}
          >
            Download CV
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-resume-primary" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white p-5 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-resume-dark hover:text-resume-accent py-2 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-resume-accent hover:bg-resume-secondary transition-colors w-full mt-2"
              onClick={() => window.open('public/Resources/Resume Parag Sehra Full stack 12+.pdf')}
            >
              Download CV
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
