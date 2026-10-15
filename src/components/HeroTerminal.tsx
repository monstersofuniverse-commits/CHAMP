import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Volume2 } from 'lucide-react';

const SCRIPT_LINES = [
  { prefix: '$ ', text: 'python jarvis.py', isCommand: true },
  { prefix: '> ', text: 'Jarvis is listening...', isStatus: true },
  { prefix: '> ', text: '"Open my portfolio"', isQuote: true },
  { prefix: '> ', text: 'Opening Champion portfolio... Done', isSuccess: true }
];

export default function HeroTerminal() {
  const [completedLines, setCompletedLines] = useState<number[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isWaitingLoop, setIsWaitingLoop] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isWaitingLoop) {
      // Wait 2 seconds after the last line, then clear and restart
      timeoutId = setTimeout(() => {
        setCompletedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        setIsWaitingLoop(false);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }

    if (currentLineIndex < SCRIPT_LINES.length) {
      const currentFullText = SCRIPT_LINES[currentLineIndex].text;

      if (currentCharIndex < currentFullText.length) {
        // Typing current line character by character
        timeoutId = setTimeout(() => {
          setCurrentCharIndex((prev) => prev + 1);
        }, 45); // natural typing pace
      } else {
        // Current line finished typing
        if (currentLineIndex < SCRIPT_LINES.length - 1) {
          timeoutId = setTimeout(() => {
            setCompletedLines((prev) => [...prev, currentLineIndex]);
            setCurrentLineIndex((prev) => prev + 1);
            setCurrentCharIndex(0);
          }, 350);
        } else {
          // Last line finished, trigger 2-second wait
          setCompletedLines((prev) => [...prev, currentLineIndex]);
          setIsWaitingLoop(true);
        }
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentLineIndex, currentCharIndex, isWaitingLoop]);

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="w-full glass-card card-lift rounded-2xl p-4 sm:p-5 border border-[#00e599]/35 shadow-[0_0_35px_rgba(0,229,153,0.15)] relative overflow-hidden backdrop-blur-xl bg-[#070c0a]/90 font-mono text-xs"
    >
      {/* Ambient background glow inside terminal */}
      <div 
        className="absolute -top-10 -right-10 w-36 h-36 bg-[#00e599]/10 rounded-full blur-2xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Terminal Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          {/* Window control buttons */}
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          
          <span className="ml-1.5 text-[11px] text-zinc-400 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-[#00e599]" />
            <span>jarvis_engine.py</span>
          </span>
        </div>

        {/* Small pulsing green dot with "Live" label */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00e599]/10 border border-[#00e599]/25 text-[11px] font-bold text-[#00e599]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e599] animate-pulse" />
          <span>Live</span>
        </div>
      </div>

      {/* Terminal Screen Body with Auto-typing */}
      <div className="space-y-2 min-h-[96px] text-left leading-relaxed">
        {SCRIPT_LINES.map((line, index) => {
          // If this line hasn't started yet, don't show it
          if (index > currentLineIndex && !completedLines.includes(index)) {
            return null;
          }

          const isCurrentlyTyping = index === currentLineIndex && !isWaitingLoop;
          const isFinished = completedLines.includes(index);
          const visibleText = isFinished
            ? line.text
            : line.text.slice(0, currentCharIndex);

          let textColor = 'text-zinc-300';
          if (line.isCommand) textColor = 'text-white font-medium';
          if (line.isStatus) textColor = 'text-emerald-400';
          if (line.isQuote) textColor = 'text-[#00e599] font-semibold';
          if (line.isSuccess) textColor = 'text-emerald-300 font-bold';

          return (
            <div key={index} className="flex items-start">
              <span className="text-[#00e599] select-none mr-2 font-bold">
                {line.prefix}
              </span>
              <span className={textColor}>
                {visibleText}
                {isCurrentlyTyping && (
                  <span className="inline-block w-1.5 h-3.5 bg-[#00e599] ml-1 translate-y-0.5 animate-pulse" />
                )}
              </span>
            </div>
          );
        })}

        {isWaitingLoop && (
          <div className="flex items-center text-[10px] text-zinc-500 pt-1">
            <span className="inline-block w-1.5 h-3 bg-[#00e599]/70 mr-1 animate-pulse" />
            <span>Loop restarting in 2s...</span>
          </div>
        )}
      </div>

      {/* Voice Waveform Section Below Terminal Text */}
      <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] text-zinc-400">
          <Volume2 className="w-3.5 h-3.5 text-[#00e599]" />
          <span>Voice Waveform</span>
        </div>

        {/* Thin vertical green bars moving up and down smoothly */}
        <div className="flex items-center gap-1 h-7">
          {[12, 24, 16, 30, 20, 28, 14, 32, 22, 18, 26, 15, 29, 21, 13].map((height, i) => (
            <motion.span
              key={i}
              className="w-1 bg-[#00e599] rounded-full"
              animate={{
                height: [
                  `${Math.max(4, height * 0.25)}px`,
                  `${height}px`,
                  `${Math.max(4, height * 0.4)}px`
                ],
                opacity: [0.6, 1, 0.7]
              }}
              transition={{
                duration: 1.1 + (i % 5) * 0.18,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: (i * 0.08)
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
