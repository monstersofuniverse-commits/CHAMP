import { useState, useEffect, useRef } from 'react';
import { X, Mic, Volume2, Sparkles, Send, Play, RotateCcw } from 'lucide-react';

interface JarvisVoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  sender: 'user' | 'jarvis';
  text: string;
  timestamp: string;
}

export default function JarvisVoiceModal({ isOpen, onClose }: JarvisVoiceModalProps) {
  const [inputText, setInputText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(true);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      sender: 'jarvis',
      text: "Online and ready, sir. I am Jarvis, Tahir Iqbal's Python-built voice assistant. How may I assist your workflow today?",
      timestamp: '10:00 AM'
    }
  ]);

  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const speakText = (text: string) => {
    if (!speechEnabled || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 0.95;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } catch {
      setIsSpeaking(false);
    }
  };

  const handleCommand = (rawText: string) => {
    if (!rawText.trim()) return;
    const query = rawText.trim().toLowerCase();
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Add user query
    setLogs((prev) => [
      ...prev,
      { sender: 'user', text: rawText.trim(), timestamp: timeStr }
    ]);
    setInputText('');

    // Determine Jarvis response
    let response = '';
    if (query.includes('status') || query.includes('system') || query.includes('health')) {
      response = "All Python services operating optimally. Memory allocation: 42MB, Audio input stream: calibrated, Linux kernel: active.";
    } else if (query.includes('tahir') || query.includes('creator') || query.includes('developer') || query.includes('who are you')) {
      response = "I was engineered by Tahir Iqbal, a Python developer who builds voice assistants and web tools. He has 1 year of hands-on coding and 5 shipped projects.";
    } else if (query.includes('time') || query.includes('date')) {
      const current = new Date();
      response = `The local time is ${current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} on ${current.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}.`;
    } else if (query.includes('project') || query.includes('portfolio') || query.includes('code')) {
      response = "Tahir's portfolio highlights 5 projects: Jarvis AI, Linux Task Orchestrator, Web Data Pipeline, QuickVoice Transcriber, and Linux Health Daemon.";
    } else if (query.includes('contact') || query.includes('email') || query.includes('hire')) {
      response = "You can contact Tahir directly at Tahiriqbalpro@gmail.com or explore the Contact section below.";
    } else if (query.includes('joke') || query.includes('laugh')) {
      response = "Why do Python programmers prefer dark mode? Because light attracts bugs.";
    } else {
      response = `Command recognized: "${rawText.trim()}". Executing Python background handler and returning simulated voice telemetry.`;
    }

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { sender: 'jarvis', text: response, timestamp: timeStr }
      ]);
      speakText(response);
    }, 400);
  };

  const samplePresets = [
    "Jarvis, check system status",
    "Who is your developer?",
    "What projects did Tahir build?",
    "What is the current time?",
    "How do I contact Tahir?"
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#090e0c] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="jarvis-modal-title"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00e599]/15 border border-[#00e599]/30 flex items-center justify-center text-[#00e599]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 id="jarvis-modal-title" className="text-base font-bold text-white flex items-center gap-2">
                <span>Jarvis AI Simulator</span>
                <span className="text-[10px] font-mono text-[#00e599] bg-[#00e599]/10 px-2 py-0.5 rounded-full">
                  Python v3.12 Engine
                </span>
              </h3>
              <p className="text-xs text-zinc-400">Interactive voice & command testing console</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSpeechEnabled(!speechEnabled);
                if (speechEnabled && 'speechSynthesis' in window) window.speechSynthesis.cancel();
              }}
              title={speechEnabled ? "Mute speech audio" : "Enable speech audio"}
              className={`p-2 rounded-lg text-xs font-mono border transition-colors ${
                speechEnabled
                  ? 'text-[#00e599] border-[#00e599]/30 bg-[#00e599]/10'
                  : 'text-zinc-500 border-white/10 bg-white/5'
              }`}
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audio Visualizer Waveform Graphic */}
        <div className="px-6 py-3 bg-[#060a08] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-[#00e599] animate-pulse' : 'bg-zinc-600'}`} />
            <span>{isSpeaking ? 'JARVIS SPEAKING...' : 'LISTENING / READY'}</span>
          </div>

          {/* Dynamic soundwave bars */}
          <div className="flex items-center gap-1 h-6">
            {[14, 22, 35, 18, 28, 40, 26, 16, 32, 20].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-[#00e599] rounded-full transition-all duration-150"
                style={{
                  height: isSpeaking ? `${Math.max(6, (h * Math.random()) + 8)}px` : '4px',
                  opacity: isSpeaking ? 0.9 : 0.3
                }}
              />
            ))}
          </div>
        </div>

        {/* Command & Response History */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 text-xs sm:text-sm font-sans">
          {logs.map((log, index) => (
            <div
              key={index}
              className={`flex flex-col ${log.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className="flex items-center gap-2 mb-1 text-[11px] text-zinc-500 font-mono">
                <span>{log.sender === 'user' ? 'You' : 'Jarvis (Python Core)'}</span>
                <span>·</span>
                <span>{log.timestamp}</span>
              </div>
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                  log.sender === 'user'
                    ? 'bg-[#00e599] text-zinc-950 font-medium'
                    : 'glass-card border border-white/10 text-zinc-200'
                }`}
              >
                {log.text}
              </div>
            </div>
          ))}
          <div ref={logEndRef} />
        </div>

        {/* Preset Prompt Buttons */}
        <div className="px-6 py-2.5 bg-white/[0.02] border-t border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap shrink-0 flex items-center gap-1">
            <Play className="w-3 h-3 text-[#00e599]" />
            Presets:
          </span>
          {samplePresets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleCommand(preset)}
              className="text-[11px] text-zinc-300 hover:text-white hover:bg-white/10 px-2.5 py-1 rounded-lg bg-white/5 whitespace-nowrap shrink-0 transition-colors border border-white/5"
            >
              {preset}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputText);
          }}
          className="p-4 bg-[#080d0b] border-t border-white/10 flex items-center gap-2"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Jarvis or give a system command (e.g., 'check status')..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e599] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2.5 rounded-xl bg-[#00e599] text-zinc-950 font-bold hover:bg-[#2ee59d] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            aria-label="Send command"
          >
            <Send className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => {
              setLogs([
                {
                  sender: 'jarvis',
                  text: 'Console history cleared. Standing by for voice input.',
                  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
              ]);
            }}
            title="Clear history"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
