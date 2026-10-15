import { motion } from 'motion/react';
import { Code, Terminal, CheckCircle2, User, Sparkles } from 'lucide-react';
import { OWNER_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onContactClick: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 relative bg-[#060908] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Glassy Info Frame with scroll slide-up & card lift */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-card card-lift rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              
              {/* Green ambient backlight */}
              <div 
                className="absolute -top-12 -left-12 w-48 h-48 bg-[#00e599]/15 rounded-full blur-2xl pointer-events-none" 
                aria-hidden="true" 
              />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00e599]/15 border border-[#00e599]/30 flex items-center justify-center text-[#00e599]">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{OWNER_INFO.name}</h3>
                  <div className="text-xs text-[#00e599] font-mono">{OWNER_INFO.role}</div>
                </div>
              </div>

              {/* Verified Career Milestones */}
              <div className="space-y-4 mb-8">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Code className="w-4 h-4 text-[#00e599]" />
                    <span className="text-xs text-zinc-300">Experience Track</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">1 Year Hands-on</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-[#00e599]" />
                    <span className="text-xs text-zinc-300">Daily System</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">Linux (Ubuntu/Debian)</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-[#00e599]" />
                    <span className="text-xs text-zinc-300">Core Domain</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400">Voice AI & Automation</span>
                </div>
              </div>

              {/* Direct email callout */}
              <div className="p-4 rounded-2xl bg-[#00e599]/5 border border-[#00e599]/20 text-xs">
                <div className="text-zinc-400 mb-1">Direct inquiries to:</div>
                <div className="font-mono font-bold text-white">{OWNER_INFO.email}</div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Editorial Bio & Principles with scroll reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="text-xs font-mono font-semibold text-[#00e599] uppercase tracking-wider mb-3">
              05 // About Me
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Engineering Practical Python Solutions That Actually Work.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">
              {OWNER_INFO.aboutBio}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              Rather than getting lost in abstract theory, I spend my time shipping real utilities: voice assistants that listen and execute local instructions, web scrapers that organize unstructured data, and Linux cron daemons that keep servers running autonomously.
            </p>

            {/* Core commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00e599] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Pragmatic Code</div>
                  <div className="text-xs text-zinc-400">Clean, well-documented Python scripts built for maintainability.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00e599] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Terminal Native</div>
                  <div className="text-xs text-zinc-400">Deep comfort in Unix environments, bash, and server administration.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00e599] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Voice-First Experience</div>
                  <div className="text-xs text-zinc-400">Hands-on experience with speech recognition and audio synthesis.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00e599] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Real Verified Numbers</div>
                  <div className="text-xs text-zinc-400">Transparent stats: 1 year coding, 5 real projects completed.</div>
                </div>
              </div>
            </div>

            {/* Button with hover glow and scale */}
            <button
              onClick={onContactClick}
              className="btn-hover-glow inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-zinc-950 bg-[#00e599] rounded-xl active:scale-95 cursor-pointer"
            >
              <span>Get in Touch with Tahir</span>
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
