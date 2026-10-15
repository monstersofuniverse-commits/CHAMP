import { ArrowUp, Mail, Github, Linkedin } from 'lucide-react';
import { OWNER_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#060908] py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Brand & Developer Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-1.5 mb-2 group"
            >
              <span>Champion</span>
              <span className="w-2 h-2 rounded-full bg-[#00e599] inline-block transition-transform group-hover:scale-125" />
            </a>
            <p className="text-xs text-zinc-400 max-w-sm">
              Portfolio of {OWNER_INFO.name} · {OWNER_INFO.role}. Building voice assistants and web tools.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-zinc-400">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#00e599] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-[#00e599] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#00e599] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-[#00e599] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#00e599] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${OWNER_INFO.email}`}
              className="btn-hover-secondary w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#00e599]"
              title="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={OWNER_INFO.githubPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover-secondary w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#00e599]"
              title="GitHub [placeholder]"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={OWNER_INFO.linkedinPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover-secondary w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#00e599]"
              title="LinkedIn [placeholder]"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="btn-hover-secondary w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#00e599] cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-3">
          <div>
            © {new Date().getFullYear()} Champion · {OWNER_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3 font-mono">
            <span>Python 3.12</span>
            <span>·</span>
            <span>Linux Workstation</span>
            <span>·</span>
            <span>Git Version Control</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
