import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA } from '../data/portfolioData';

function CountUpNumber({
  target,
  suffix = '',
  padZero = true,
  isVisible
}: {
  target: number;
  suffix?: string;
  padZero?: boolean;
  isVisible: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const duration = 1500; // smooth 1.5s professional count up

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // smooth cubic easing
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(ease * target);
      setDisplayValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target]);

  const formatted = padZero && target < 10
    ? (displayValue < 10 ? `0${displayValue}` : `${displayValue}`)
    : `${displayValue}`;

  return <span>{formatted}{suffix}</span>;
}

export default function StatsRow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  // Map the static stat strings to numeric targets
  const getNumericConfig = (rawNumber: string) => {
    if (rawNumber === '05') return { target: 5, suffix: '', padZero: true };
    if (rawNumber === '01') return { target: 1, suffix: '', padZero: true };
    if (rawNumber === '03') return { target: 3, suffix: '', padZero: true };
    if (rawNumber === '100%') return { target: 100, suffix: '%', padZero: false };
    return { target: parseInt(rawNumber) || 0, suffix: '', padZero: false };
  };

  return (
    <section ref={sectionRef} className="py-12 border-y border-white/10 relative bg-gradient-to-b from-[#080c0b] via-[#0c1411] to-[#080c0b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section label */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Real Experience & Verified Work
          </span>
        </motion.div>

        {/* Big Number Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS_DATA.map((stat, index) => {
            const config = getNumericConfig(stat.number);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card card-lift rounded-2xl p-6 sm:p-7 border border-white/10 text-center flex flex-col justify-center relative overflow-hidden group cursor-default"
              >
                {/* Subtle top-right ambient glow on hover */}
                <div 
                  className="absolute -top-12 -right-12 w-24 h-24 bg-[#00e599]/10 rounded-full blur-xl group-hover:bg-[#00e599]/25 transition-all pointer-events-none" 
                  aria-hidden="true"
                />

                {/* Big bold number with smooth counting animation */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-mono tracking-tight tabular-nums mb-2 group-hover:text-[#00e599] transition-colors">
                  <CountUpNumber
                    target={config.target}
                    suffix={config.suffix}
                    padZero={config.padZero}
                    isVisible={isInView}
                  />
                </div>

                {/* Label */}
                <div className="text-sm sm:text-base font-bold text-zinc-100 mb-1">
                  {stat.label}
                </div>

                {/* Subtext */}
                <div className="text-xs text-zinc-400 leading-snug">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
