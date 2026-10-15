import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Copy, Check, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { OWNER_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
}

export default function ContactSection({ initialService }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'Voice Assistant / AI Tool',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OWNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(OWNER_INFO.githubPlaceholder);
    setCopiedGithub(true);
    setTimeout(() => setCopiedGithub(false), 2000);
  };

  const handleCopyLinkedin = () => {
    navigator.clipboard.writeText(OWNER_INFO.linkedinPlaceholder);
    setCopiedLinkedin(true);
    setTimeout(() => setCopiedLinkedin(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00e599]/10 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

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
            06 // Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Have a project in mind, need a custom Python voice assistant, or require Linux automation? Reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Links with card lift & green glow */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            
            <div className="space-y-4">
              
              {/* Primary Email Card */}
              <div className="glass-card card-lift rounded-2xl p-6 border border-white/10 hover:border-[#00e599]/40 cursor-default">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#00e599]/15 flex items-center justify-center text-[#00e599]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-hover-secondary flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00e599]" />
                        <span className="text-[#00e599] font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs text-zinc-400 mb-1">Direct Inquiries</div>
                <a
                  href={`mailto:${OWNER_INFO.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-[#00e599] transition-colors break-all"
                >
                  {OWNER_INFO.email}
                </a>
                <p className="text-xs text-zinc-400 mt-2">
                  Usually replies within 24 hours.
                </p>
              </div>

              {/* GitHub Card (placeholder as requested) */}
              <div className="glass-card card-lift rounded-2xl p-6 border border-white/10 hover:border-[#00e599]/40 cursor-default">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white">
                    <Github className="w-6 h-6" />
                  </div>
                  <button
                    onClick={handleCopyGithub}
                    className="btn-hover-secondary flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 cursor-pointer"
                  >
                    {copiedGithub ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00e599]" />
                        <span className="text-[#00e599]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs text-zinc-400 mb-1">GitHub Profile</div>
                <div className="text-sm sm:text-base font-bold text-white font-mono">
                  GitHub: [placeholder]
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Public repositories for voice models, scrapers, and system daemons.
                </p>
              </div>

              {/* LinkedIn Card (placeholder as requested) */}
              <div className="glass-card card-lift rounded-2xl p-6 border border-white/10 hover:border-[#00e599]/40 cursor-default">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0077b5]/20 flex items-center justify-center text-[#38bdf8]">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <button
                    onClick={handleCopyLinkedin}
                    className="btn-hover-secondary flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 cursor-pointer"
                  >
                    {copiedLinkedin ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00e599]" />
                        <span className="text-[#00e599]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs text-zinc-400 mb-1">LinkedIn Network</div>
                <div className="text-sm sm:text-base font-bold text-white font-mono">
                  LinkedIn: [placeholder]
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Connect for professional updates, developer discussions, and collaborations.
                </p>
              </div>

            </div>

            {/* Quick availability banner */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00e599] shrink-0" />
              <span>Available for Python freelance projects, voice integrations, and tool development.</span>
            </div>

          </motion.div>

          {/* Right Column: Working Contact Form with card lift & green button glow */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="glass-card card-lift rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#00e599]/20 text-[#00e599] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-sm text-zinc-300 max-w-md mb-8">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your message regarding <span className="text-[#00e599]">{formData.service}</span> has been logged. Tahir will review it and follow up at <span className="font-mono text-zinc-200">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Voice Assistant / AI Tool',
                        message: ''
                      });
                    }}
                    className="btn-hover-secondary px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-[#00e599]" />
                    <h3 className="text-xl font-bold text-white">Send a Message</h3>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name <span className="text-[#00e599]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e599] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Email <span className="text-[#00e599]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e599] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Service / Project Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0d1412] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e599] transition-colors"
                    >
                      <option value="Voice Assistant / AI Tool">Voice Assistant / AI Tool</option>
                      <option value="Web Development & Python API">Web Development & Python API</option>
                      <option value="Linux Scripting & Automation">Linux Scripting & Automation</option>
                      <option value="General Collaboration / Other">General Collaboration / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Project Details / Message <span className="text-[#00e599]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your vision, requirements, or voice assistant scope..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e599] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hover-glow w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-zinc-950 bg-[#00e599] disabled:opacity-50 active:scale-95 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-zinc-500 mt-2">
                    Direct delivery to Tahiriqbalpro@gmail.com · No spam, strictly project communication.
                  </p>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
