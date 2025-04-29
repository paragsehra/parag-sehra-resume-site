
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/#home', isHash: true },
    { label: 'Experience', href: '/#experience', isHash: true },
    { label: 'Projects', href: '/#projects', isHash: true },
    { label: 'Skills', href: '/#skills', isHash: true },
    { label: 'Education', href: '/#education', isHash: true },
    { label: 'Blog', href: '/blog', isHash: false },
    { label: 'Contact', href: '/#contact', isHash: true }
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
        <HashLink to="/#home" className="text-resume-primary font-heading font-bold text-2xl">
          Parag<span className="text-resume-accent">.</span><span className="text-resume-primary">dev</span>
        </HashLink>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            item.isHash ? (
              <HashLink
                key={item.label}
                smooth
                to={item.href}
                className="text-resume-dark hover:text-resume-accent transition-colors font-medium">
                {item.label}
              </HashLink>
            ) : (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-resume-accent' : 'text-resume-dark hover:text-resume-accent transition-colors'}`}>
                {item.label}
              </NavLink>
            )
          ))}
          <Button 
            variant="default" 
            className="bg-resume-accent hover:bg-resume-secondary transition-colors"
            onClick={() => window.open('Resources/Resume Parag Sehra Full stack 12+.pdf')}
          >
            Download CV
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
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
              item.isHash ? (
                <HashLink
                  key={item.label}
                  smooth
                  to={item.href}
                  className="text-resume-dark hover:text-resume-accent py-2 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </HashLink>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) => 
                    `py-2 font-medium ${isActive ? 'text-resume-accent' : 'text-resume-dark hover:text-resume-accent transition-colors'}`}
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </NavLink>
              )
            ))}
            <Button 
              variant="default" 
              className="bg-resume-accent hover:bg-resume-secondary transition-colors w-full mt-2"
              onClick={() => window.open('Resources/Resume Parag Sehra Full stack 12+.pdf')}
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
