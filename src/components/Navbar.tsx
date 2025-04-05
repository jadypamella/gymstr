
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gymstr-navy/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/05cc5987-1dba-47d1-b472-86707d23fd9d.png" 
              alt="GYMSTR" 
              className="h-10 md:h-12"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gymstr-beige hover:text-gymstr-orange transition-colors">
            How It Works
          </a>
          <a href="#partners" className="text-gymstr-beige hover:text-gymstr-orange transition-colors">
            Partners
          </a>
          <a href="#app" className="text-gymstr-beige hover:text-gymstr-orange transition-colors">
            App
          </a>
          <a href="#nostr" className="text-gymstr-beige hover:text-gymstr-orange transition-colors">
            Nostr
          </a>
          <a href="#pricing" className="text-gymstr-beige hover:text-gymstr-orange transition-colors">
            Pricing
          </a>
          <Button variant="outline" size="sm" href="#login">
            Login
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gymstr-beige hover:text-gymstr-orange focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-gymstr-navy/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          <a 
            href="#how-it-works" 
            className="block py-2 text-lg text-gymstr-beige hover:text-gymstr-orange"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#partners" 
            className="block py-2 text-lg text-gymstr-beige hover:text-gymstr-orange"
            onClick={() => setIsMenuOpen(false)}
          >
            Partners
          </a>
          <a 
            href="#app" 
            className="block py-2 text-lg text-gymstr-beige hover:text-gymstr-orange"
            onClick={() => setIsMenuOpen(false)}
          >
            App
          </a>
          <a 
            href="#nostr" 
            className="block py-2 text-lg text-gymstr-beige hover:text-gymstr-orange"
            onClick={() => setIsMenuOpen(false)}
          >
            Nostr
          </a>
          <a 
            href="#pricing" 
            className="block py-2 text-lg text-gymstr-beige hover:text-gymstr-orange"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <div className="pt-2">
            <Button variant="outline" href="#login" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
