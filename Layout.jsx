import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { createPageUrl } from './utils';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'gp590@scarletmail.rutgers.edu';
    
    // Try to open mail client
    window.location.href = `mailto:${email}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'Home' },
    { name: 'About', path: 'About' },
    { name: 'Skills', path: 'Skills' },
    { name: 'Projects', path: 'Projects' },
    { name: 'Experience', path: 'Experience' },
    { name: 'Education', path: 'Education' },
    { name: 'Honors', path: 'Honors' },
    { name: 'Contact', path: 'Contact' }
  ];

  const isActive = (path) => {
    return currentPath === createPageUrl(path) || (currentPath === '/' && path === 'Home');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-xl">GP</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-slate-800 font-bold text-lg">Gireeshee Pendela</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={createPageUrl(link.path)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-blue-800 text-white'
                      : 'text-slate-600 hover:text-blue-800 hover:bg-blue-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={createPageUrl(link.path)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-blue-800 text-white'
                      : 'text-slate-600 hover:bg-blue-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">GP</span>
                </div>
                <div className="text-xl font-bold">Gireeshee Pendela</div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Turning Data into Decisions, Code into Impact
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-amber-500">Quick Links</h3>
              <div className="space-y-2">
                {navLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.path}
                    to={createPageUrl(link.path)}
                    className="block text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="relative">
              <h3 className="font-semibold mb-4 text-amber-500">Get In Touch</h3>
              <div className="space-y-3">
                <button onClick={handleEmailClick} className="flex items-center space-x-2 text-slate-400 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>gp590@scarletmail.rutgers.edu</span>
                </button>
                {showCopied && (
                  <div className="absolute -top-8 left-0 bg-white text-slate-900 text-xs px-3 py-1 rounded-lg shadow-lg">
                    Email copied!
                  </div>
                )}
                <a href="tel:+18483914488" className="flex items-center space-x-2 text-slate-400 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 848-391-4488</span>
                </a>
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>New Brunswick, NJ 08901</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-6">
                <a
                  href="https://github.com/GireesheePendela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/gireeshee-pendela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={handleEmailClick}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-10 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Gireeshee Pendela. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        :root {
          --color-primary: #1E40AF;
          --color-secondary: #7C3AED;
          --color-accent: #F59E0B;
          --color-neutral: #334155;
        }
      `}</style>
    </div>
  );
}