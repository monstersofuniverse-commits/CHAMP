import { motion } from 'motion/react';
import { Globe, Bot, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-7 h-7 text-[#00e599]" />;
      case 'Bot':
        return <Bot className="w-7 h-7 text-[#00e599]" />;
      case 'Terminal':
        return <Terminal className="w-7 h-7 text-[#00e599]" />;
      default:
        return <Globe className="w-7 h-7 text-[#00e599]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#060a09] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with scroll fade-in & slide-up */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-xs font-mono font-semibold text-[#00e599] uppercase tracking-wider mb-3">
            03 // What I Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Services & Solutions
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Focused engineering solutions combining intelligent voice interaction, responsive web architecture, and robust system scripting.
          </p>
        </motion.div>

        {/* 3 Services Cards Grid with staggered scroll reveal, card lift, and green hover glow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card card-lift rounded-3xl p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden group cursor-default"
            >
              {/* Top ambient highlight */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 bg-[#00e599]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00e599]/20 transition-all" 
                aria-hidden="true" 
              />

              <div>
                {/* Header: Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#00e599]/10 border border-[#00e599]/20 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-sm font-mono font-bold text-zinc-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00e599] transition-colors">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <div className="text-xs font-medium text-emerald-400/90 mb-4">
                  {service.subtitle}
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="pt-4 border-t border-white/10 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Key Deliverables
                  </div>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#00e599] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button with scale & glow hover */}
              <button
                onClick={() => onSelectService(service.title)}
                className="btn-hover-secondary w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-[#00e599] hover:text-zinc-950 hover:border-[#00e599] active:scale-95 cursor-pointer group/btn"
              >
                <span>Discuss {service.title}</span>
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
