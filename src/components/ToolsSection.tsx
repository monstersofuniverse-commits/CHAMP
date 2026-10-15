import { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, GitBranch, Cpu, Check, Copy } from 'lucide-react';
import { TOOLS_DATA } from '../data/portfolioData';

export default function ToolsSection() {
  const [selectedToolId, setSelectedToolId] = useState<string>('python');
  const [copiedCode, setCopiedCode] = useState(false);

  const activeTool = TOOLS_DATA.find((t) => t.id === selectedToolId) || TOOLS_DATA[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getToolIcon = (id: string) => {
    switch (id) {
      case 'python':
        return <Cpu className="w-6 h-6 text-[#00e599]" />;
      case 'linux':
        return <Terminal className="w-6 h-6 text-[#00e599]" />;
      case 'git':
        return <GitBranch className="w-6 h-6 text-[#00e599]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#00e599]" />;
    }
  };

  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Header with scroll fade-in & slide-up */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-xs font-mono font-semibold text-[#00e599] uppercase tracking-wider mb-3">
            02 // Core Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tools & Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            A focused, highly disciplined technical toolkit. Python for voice intelligence and backend logic, Linux for execution, and Git for reliable versioning.
          </p>
        </motion.div>

        {/* 3 Tool Selector Cards Grid with hover lift & soft green glow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TOOLS_DATA.map((tool, index) => {
            const isSelected = tool.id === selectedToolId;
            return (
              <motion.button
                key={tool.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedToolId(tool.id)}
                className={`card-lift text-left p-6 rounded-2xl relative overflow-hidden cursor-pointer ${
                  isSelected
                    ? 'glass-card border-[#00e599] shadow-[0_0_30px_rgba(0,229,153,0.18)] ring-1 ring-[#00e599]'
                    : 'glass-card border-white/10 hover:border-white/25 hover:bg-white/[0.04]'
                }`}
              >
                {/* Active Indicator bar on top */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#00e599]" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00e599]/10 border border-[#00e599]/20 flex items-center justify-center">
                    {getToolIcon(tool.id)}
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    {tool.experienceLevel}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1.5 flex items-center gap-2">
                  <span>{tool.name}</span>
                  {isSelected && (
                    <span className="text-xs font-normal text-[#00e599] font-mono">
                      (Selected)
                    </span>
                  )}
                </h3>

                <p className="text-xs text-zinc-400 mb-4 line-clamp-2">
                  {tool.description}
                </p>

                <div className="text-xs text-zinc-500 font-medium">
                  {tool.keyUseCases.length} Core Capabilities · Click to inspect code
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Interactive Tool Deep-Dive Box with scroll slide-up and card lift */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card card-lift rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Tool description and use cases */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00e599]/15 flex items-center justify-center">
                    {getToolIcon(activeTool.id)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {activeTool.name} Workflow
                    </h4>
                    <span className="text-xs text-zinc-400">{activeTool.category}</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {activeTool.description}
                </p>

                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  How Tahir applies {activeTool.name}:
                </div>

                <ul className="space-y-2.5 mb-6">
                  {activeTool.keyUseCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e599] mt-2 shrink-0" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500">
                <span>Production tested</span>
                <span className="font-mono text-[#00e599]">Verified in 5 Projects</span>
              </div>
            </div>

            {/* Right side: Real code or command terminal */}
            <div className="lg:col-span-7 bg-[#050807] rounded-2xl border border-white/10 p-4 sm:p-5 font-mono text-xs overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[11px] text-zinc-400">
                    {activeTool.name.toLowerCase()}-snippet.{activeTool.sampleCodeOrCommand.language === 'python' ? 'py' : 'sh'}
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(activeTool.sampleCodeOrCommand.code)}
                  className="btn-hover-secondary flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white cursor-pointer"
                  title="Copy snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00e599]" />
                      <span className="text-[10px] text-[#00e599]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code display */}
              <div className="overflow-x-auto max-h-[300px] scrollbar-thin scrollbar-thumb-zinc-700">
                <pre className="text-zinc-300 leading-relaxed">
                  <code>{activeTool.sampleCodeOrCommand.code}</code>
                </pre>
              </div>

              {/* Snippet summary footer */}
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-zinc-500 flex items-center justify-between">
                <span>{activeTool.sampleCodeOrCommand.explanation}</span>
                <span className="text-[#00e599] font-semibold">{activeTool.sampleCodeOrCommand.language}</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
