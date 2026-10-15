import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080c0b]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (Nav Links) — Zone 3 (Primary CTA) */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              className="text-xl sm:text-2xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-1.5 group"
            >
              <span>Champion</span>
              <span className="w-2 h-2 rounded-full bg-[#00e599] inline-block transition-transform group-hover:scale-125" />
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-zinc-300">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('home');
                }}
                className="hover:text-[#00e599] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('services');
                }}
                className="hover:text-[#00e599] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('about');
                }}
                className="hover:text-[#00e599] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('projects');
                }}
                className="hover:text-[#00e599] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('contact');
                }}
                className="hover:text-[#00e599] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Contact
              </a>
            </nav>

            {/* Zone 3: 1 Primary CTA Button */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('contact');
                }}
                className="btn-hover-glow inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-zinc-950 bg-[#00e599] rounded-xl whitespace-nowrap shrink-0 active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('contact');
                }}
                className="px-3 py-1.5 text-xs font-bold text-zinc-950 bg-[#00e599] rounded-lg"
              >
                Contact
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 text-zinc-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#080c0b]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10 border-b border-white/10 animate-in fade-in duration-200">
          <div className="flex flex-col gap-5 text-lg font-semibold text-zinc-200">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left py-2 hover:text-[#00e599] transition-colors border-b border-white/5"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('services')}
              className="text-left py-2 hover:text-[#00e599] transition-colors border-b border-white/5"
            >
              Services
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className="text-left py-2 hover:text-[#00e599] transition-colors border-b border-white/5"
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick('projects')}
              className="text-left py-2 hover:text-[#00e599] transition-colors border-b border-white/5"
            >
              Projects
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-left py-2 hover:text-[#00e599] transition-colors border-b border-white/5"
            >
              Contact
            </button>
          </div>

          <div className="pt-8">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-zinc-950 bg-[#00e599] rounded-xl hover:bg-[#2ee59d] transition-all shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="mt-4 text-center text-xs text-zinc-500">
              Tahir Iqbal · Python Developer
            </div>
          </div>
        </div>
      )}
    </>
  );
}
