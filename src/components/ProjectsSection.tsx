import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenJarvisDemo: () => void;
}

export default function ProjectsSection({ onSelectProject, onOpenJarvisDemo }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'All' | 'Voice AI' | 'Web & Automation' | 'Linux Tooling'>('All');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const featuredJarvis = PROJECTS_DATA.find((p) => p.id === 'jarvis-ai')!;
  const otherProjects = filteredProjects.filter((p) => p.id !== 'jarvis-ai');

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Filter Bar with scroll fade-in & slide-up */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-xs font-mono font-semibold text-[#00e599] uppercase tracking-wider mb-3">
              04 // Featured Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              Selected Works & Tools
            </h2>
            <p className="text-base text-zinc-400 max-w-xl">
              Real projects engineered in Python and Linux. Spearheaded by Jarvis AI voice assistant along with system automation utilities.
            </p>
          </div>

          {/* Functional interactive category filter tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white/5 border border-white/10 rounded-2xl self-start md:self-auto overflow-x-auto max-w-full">
            {(['All', 'Voice AI', 'Web & Automation', 'Linux Tooling'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`btn-hover-secondary px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  filter === category
                    ? 'bg-[#00e599] text-zinc-950 shadow-md font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category === 'All' ? `All (${PROJECTS_DATA.length})` : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Card: Jarvis AI (when filter is All or Voice AI) with card lift & glow */}
        <AnimatePresence mode="popLayout">
          {(filter === 'All' || filter === 'Voice AI') && (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
              <div className="glass-card card-lift rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#00e599]/30 relative overflow-hidden group hover:border-[#00e599]/60 transition-all shadow-[0_0_50px_rgba(0,229,153,0.08)]">
                
                {/* Background ambient gradient */}
                <div 
                  className="absolute top-0 right-0 w-96 h-96 bg-[#00e599]/10 rounded-full blur-3xl pointer-events-none -z-10" 
                  aria-hidden="true" 
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left: Project Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Unboxed metadata separator */}
                      <div className="flex items-center gap-2 text-xs font-mono text-[#00e599] mb-3">
                        <span>Flagship Project</span>
                        <span aria-hidden="true">·</span>
                        <span>Voice Assistant</span>
                        <span aria-hidden="true">·</span>
                        <span>Python 3</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 group-hover:text-[#00e599] transition-colors">
                        {featuredJarvis.title}
                      </h3>

                      <p className="text-base text-zinc-300 leading-relaxed mb-6">
                        {featuredJarvis.description}
                      </p>

                      {/* Features list */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                        {featuredJarvis.features.slice(0, 4).map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00e599] shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons with hover glow and scale */}
                    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                      <button
                        onClick={onOpenJarvisDemo}
                        className="btn-hover-glow inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-zinc-950 bg-[#00e599] rounded-xl active:scale-95 cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Test Live Voice Simulator</span>
                      </button>

                      <button
                        onClick={() => onSelectProject(featuredJarvis)}
                        className="btn-hover-secondary inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-xl active:scale-95 cursor-pointer"
                      >
                        <span>Inspect Code & Architecture</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right: Featured Project Visual */}
                  <div className="lg:col-span-5 relative">
                    <div className="rounded-2xl overflow-hidden border border-white/15 aspect-[16/10] bg-zinc-900 group-hover:border-[#00e599]/40 transition-colors">
                      <img
                        src={featuredJarvis.image}
                        alt="Jarvis Voice Assistant waveform interface"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Overlay prompt badge */}
                    <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 px-1 font-mono">
                      <span>Speech Recognition + pyttsx3</span>
                      <span className="text-[#00e599] font-bold">Wake-Word Active</span>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Secondary / Placeholder Cards Grid with staggered scroll reveal & hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(project)}
              className="glass-card card-lift rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#00e599]/40 hover:bg-white/[0.04] flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Visual thumbnail if available */}
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-[16/9] mb-5 bg-zinc-900 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category label unboxed */}
                  <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-zinc-300">
                    {project.category}
                  </div>
                </div>

                {/* Unboxed metadata separator */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                  <span>Project 0{index + 2}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#00e599]">{project.category}</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00e599] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-[#00e599] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h4>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-1.5 mb-6">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e599] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer tags and inspect button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-[11px]">
                  <span>{project.tags[0]}</span>
                  <span>·</span>
                  <span>{project.tags[1]}</span>
                </div>

                <span className="font-semibold text-emerald-400 group-hover:underline flex items-center gap-1">
                  View Code Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
