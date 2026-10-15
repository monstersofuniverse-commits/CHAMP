import { useEffect, useState } from 'react';
import { X, Check, Copy, ExternalLink, Terminal, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenJarvisDemo?: () => void;
}

export default function ProjectDetailModal({ project, onClose, onOpenJarvisDemo }: ProjectDetailModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-[#090e0c] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00e599] mb-1">
              <span>{project.category}</span>
              {project.isFeatured && <span>· Featured Work</span>}
            </div>
            <h3 id="project-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-zinc-300">
          
          {/* Project Preview Image */}
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video max-h-64 relative bg-zinc-900">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="text-xs text-white/90 font-mono">Verified Python Architecture</span>
              {project.id === 'jarvis-ai' && onOpenJarvisDemo && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenJarvisDemo();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#00e599] text-zinc-950 font-bold text-xs hover:bg-[#2ee59d] transition-colors"
                >
                  Launch Voice Simulator
                </button>
              )}
            </div>
          </div>

          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Overview & Objectives
            </h4>
            <p className="text-zinc-300 leading-relaxed text-sm">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
              Technical Capabilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e599] mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack unboxed text */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Stack & Libraries
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Source Code Snippet */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#00e599]" />
                  <span>Source Excerpt</span>
                </h4>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00e599]" />
                      <span className="text-[#00e599]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-[#050807] rounded-xl p-4 border border-white/10 font-mono text-xs overflow-x-auto max-h-48 scrollbar-thin">
                <pre className="text-emerald-300">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <div className="text-xs text-zinc-500">
            Repository: {project.githubUrl ? 'GitHub Ready' : 'In Private Development'}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-white/5 hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            {project.id === 'jarvis-ai' && onOpenJarvisDemo && (
              <button
                onClick={() => {
                  onClose();
                  onOpenJarvisDemo();
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-zinc-950 bg-[#00e599] hover:bg-[#2ee59d] transition-colors"
              >
                Test Voice Assistant
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
