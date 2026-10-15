import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code2, Terminal, Sparkles, MessageSquareCode, Camera } from 'lucide-react';
import { OWNER_INFO } from '../data/portfolioData';
import HeroTerminal from './HeroTerminal';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onOpenJarvisDemo: () => void;
}

export default function Hero({ onExploreProjects, onContactClick, onOpenJarvisDemo }: HeroProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem('tahir_portfolio_photo');
    } catch {
      return null;
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setUserPhoto(dataUrl);
        try {
          localStorage.setItem('tahir_portfolio_photo', dataUrl);
        } catch {}
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle radial ambient background glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e599]/10 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-emerald-700/10 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Content with smooth page-load animations */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Kicker & Owner identity */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-400 mb-5"
            >
              <span className="text-[#00e599] font-mono font-medium">01 //</span>
              <span className="text-zinc-200">{OWNER_INFO.name}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-[#00e599]">{OWNER_INFO.role}</span>
            </motion.div>

            {/* Large Bold Hero Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6" 
              style={{ textWrap: 'balance' }}
            >
              I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e599] via-emerald-400 to-[#2ee59d]">Voice Assistants</span> and Web Tools.
            </motion.h1>

            {/* Short Bio */}
            <motion.p 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-8 max-w-2xl"
            >
              {OWNER_INFO.shortBio} Specialized in Python architecture, natural speech command pipelines, and resilient Linux automation.
            </motion.p>

            {/* Action Buttons with scale and glow hover */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <button
                onClick={onExploreProjects}
                className="btn-hover-glow w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-zinc-950 bg-[#00e599] rounded-2xl active:scale-95 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="btn-hover-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-2xl active:scale-95 cursor-pointer"
              >
                <span>Get in Touch</span>
              </button>

              <button
                onClick={onOpenJarvisDemo}
                className="btn-hover-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#00e599]" />
                <span>Test Jarvis Voice Simulator</span>
              </button>
            </motion.div>

            {/* Small Quick Highlights Row with gentle, slow floating motion */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl"
            >
              {/* Card 1: 1 Year of Coding - Floating Motion */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-card card-lift rounded-2xl p-3.5 border border-white/5 flex items-center gap-3 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00e599]/10 text-[#00e599] flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Experience</div>
                  <div className="text-sm font-bold text-white">1 Year of Coding</div>
                </div>
              </motion.div>

              {/* Card 2: Environment - Floating Motion (offset) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="glass-card card-lift rounded-2xl p-3.5 border border-white/5 flex items-center gap-3 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00e599]/10 text-[#00e599] flex items-center justify-center shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Environment</div>
                  <div className="text-sm font-bold text-white">Linux & Python</div>
                </div>
              </motion.div>

              {/* Card 3: Flagship - Floating Motion (offset) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
                className="glass-card card-lift rounded-2xl p-3.5 border border-white/5 flex items-center gap-3 col-span-2 sm:col-span-1 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00e599]/10 text-[#00e599] flex items-center justify-center shrink-0">
                  <MessageSquareCode className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Flagship</div>
                  <div className="text-sm font-bold text-white">Jarvis Voice AI</div>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* Right Column: Visual Showcase Frame & Animated Live Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col gap-5 justify-center"
          >
            
            {/* Main Visual Container */}
            <div className="relative w-full max-w-md lg:max-w-none mx-auto">
              {/* Outer decorative glowing ring */}
              <div 
                className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#00e599]/30 to-white/10 blur-xl opacity-60" 
                aria-hidden="true"
              />

              {/* Glass frame with soft glow & lift on hover */}
              <div className="relative glass-card card-lift rounded-3xl p-3 sm:p-4 border border-white/15 shadow-2xl overflow-hidden">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-900 group/portrait cursor-pointer"
                  title="Click to select original photo file"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <img
                    src={userPhoto || OWNER_INFO.portraitImage}
                    alt="Tahir Iqbal, Python developer"
                    referrerPolicy="no-referrer"
                    style={{ objectFit: 'cover' }}
                    className="w-full h-full object-cover object-center rounded-2xl transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c0b]/90 via-[#080c0b]/20 to-transparent pointer-events-none" />
                  
                  {/* Hover badge to upload exact file */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover/portrait:opacity-100 transition-opacity bg-black/85 backdrop-blur-md border border-white/20 text-[11px] text-zinc-200 px-2.5 py-1 rounded-xl flex items-center gap-1.5 shadow-lg">
                    <Camera className="w-3.5 h-3.5 text-[#00e599]" />
                    <span>Select Photo</span>
                  </div>
                  
                  {/* Overlay banner at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <span>Tahir Iqbal</span>
                        <span className="text-[#00e599] font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#00e599]/10">Python</span>
                      </div>
                      <div className="text-[11px] text-zinc-400">Automating tasks through voice & code</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-[#00e599]">Online</div>
                    </div>
                  </div>
                </div>

                {/* Floating mini stats cards on glass frame */}
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-zinc-400">Total Projects</span>
                    <span className="text-sm font-mono font-bold text-white">05 Shipped</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-zinc-400">Core Stack</span>
                    <span className="text-xs font-mono font-bold text-[#00e599]">Python 3.12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glassy Animated Dark Terminal with Green Glow & Voice Waveform */}
            <div className="w-full max-w-md lg:max-w-none mx-auto">
              <HeroTerminal />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
