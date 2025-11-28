import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Terminal, Shield, Wifi, Skull, Menu, X, Zap, Volume2, VolumeX, MessageCircle, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

// --- DATA ---
import { services, testimonials, skills, projects, blogPosts, navLinks, typewriterLines } from './data/portfolioData';

// --- HOOKS ---
import useTypewriter from './hooks/useTypewriter';

// --- UI & General Components ---
import PageHead from './components/ui/PageHead';
import HUD from './components/ui/HUD';
import GlitchText from './components/ui/GlitchText';

// --- EFFECT COMPONENTS ---
import CursorTrail from './components/effects/CursorTrail';
import ScanLines from './components/effects/ScanLines';
import ParticleField from './components/effects/ParticleField';
import CyberGrid from './components/effects/CyberGrid';
import EnergyPulse from './components/effects/EnergyPulse';
import MatrixCanvas from './components/effects/MatrixCanvas';

// --- LAZY-LOADED SECTION COMPONENTS ---
const AboutSectionLazy = lazy(() => import('./components/sections/AboutSection'));
const SkillsSectionLazy = lazy(() => import('./components/sections/SkillsSection'));
const ProjectsSectionLazy = lazy(() => import('./components/sections/ProjectsSection'));
const ServicesSectionLazy = lazy(() => import('./components/sections/ServicesSection'));
const TestimonialsSectionLazy = lazy(() => import('./components/sections/TestimonialsSection'));
const BlogSectionLazy = lazy(() => import('./components/sections/BlogSection'));
const ContactSectionLazy = lazy(() => import('./components/sections/ContactSection'));

export default function App() {
  const [booting, setBooting] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      if (soundEnabled) {
        audioRef.current.play().catch(error => console.log("Audio autoplay was prevented. User interaction needed."));
      } else {
        audioRef.current.pause();
      }
    }
  }, [soundEnabled]);

  const typedText = useTypewriter({ lines: typewriterLines, typingSpeed: 60, pause: 1200 });

  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-KE', { timeZone: 'Africa/Nairobi', hour12: true, hour: 'numeric', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => { document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'; }, [isMenuOpen]);

  const handleInputChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('[*] Sending transmission...');
    setTimeout(() => {
      setFormStatus('[✓] Transmission complete. Thank you!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 2000);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const sectionVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const gridContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const gridItemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  const SuspenseFallback = () => (
    <div className="flex justify-center items-center h-64">
      <div className="text-blue-400 neon">
        <span className="text-green-400">└─$</span> Loading module...
      </div>
    </div>
  );

  if (booting) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-green-400 font-mono text-lg animate-pulse">
        <p>{'>'} Initiating system sequence... <span className="blink">█</span></p>
      </div>
    );
  }

  return (
    <>
      <PageHead
        title="Derick Mokua | Backend Developer & Cybersecurity Engineer"
        description="Portfolio of Derick Mokua – Backend Developer & Cybersecurity Enthusiast specializing in secure, scalable systems."
      />

      <style>{`
        :root {
          --neon: #00ffd5;
          --neon-secondary: #00d4ff;
          --neon-faint: rgba(0, 255, 213, 0.08);
          --glass-bg: rgba(10, 10, 10, 0.5);
          --glass-border: rgba(0, 255, 213, 0.15);
          --glass-blur: 12px;
        }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        .neon {
          text-shadow: 0 0 8px var(--neon), 0 0 20px rgba(0,255,213,0.4), 0 0 40px rgba(0,255,213,0.1);
        }
        .glass-enhanced {
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.75) 0%, rgba(20, 20, 20, 0.55) 100%);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          box-shadow: 0 8px 32px rgba(0, 255, 213, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        .portfolio-section {
          transition: box-shadow 0.5s ease-out;
        }
        .portfolio-section:hover {
           box-shadow: inset 0 0 150px 50px rgba(0, 255, 213, 0.03);
        }
        .blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        @keyframes hologram {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .glitch { position: relative; display: inline-block; }
        .glitch:hover::before, .glitch:hover::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch:hover::before { animation: glitch 0.3s infinite; color: #00ffd5; z-index: -1; }
        .glitch:hover::after { animation: glitch 0.3s infinite reverse; color: #ff00ff; z-index: -2; }
        .cyber-grid {
          background:
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 213, 0.05) 25%, rgba(0, 255, 213, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 213, 0.05) 75%, rgba(0, 255, 213, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 213, 0.05) 25%, rgba(0, 255, 213, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 213, 0.05) 75%, rgba(0, 255, 213, 0.05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
          transform: perspective(500px) rotateX(60deg) scale(2);
          transform-origin: center center;
        }
        .pulse-ring {
          position: absolute;
          width: 600px;
          height: 600px;
          border: 2px solid rgba(0, 255, 213, 0.3);
          border-radius: 50%;
          animation: pulse-ring 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        .corner-accent { position: absolute; width: 20px; height: 20px; border-color: var(--neon); }
        .corner-accent.top-left { top: -1px; left: -1px; border-top: 2px solid; border-left: 2px solid; }
        .corner-accent.top-right { top: -1px; right: -1px; border-top: 2px solid; border-right: 2px solid; }
        .corner-accent.bottom-left { bottom: -1px; left: -1px; border-bottom: 2px solid; border-left: 2px solid; }
        .corner-accent.bottom-right { bottom: -1px; right: -1px; border-bottom: 2px solid; border-right: 2px solid; }
        .hologram-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 213, 0.1), transparent);
          animation: hologram 3s infinite;
          pointer-events: none;
        }
        .skill-bar-cyber {
          background: linear-gradient(90deg, #00ffd5, #00d4ff);
          box-shadow: 0 0 10px var(--neon), 0 0 20px var(--neon-faint), inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transition: width 1.2s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .form-input-cyber {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 255, 213, 0.2);
          transition: all 0.3s;
        }
        .form-input-cyber:focus {
          outline: none;
          border-color: var(--neon);
          box-shadow: 0 0 12px rgba(0, 255, 213, 0.3);
        }
        .cyber-button {
          background: linear-gradient(135deg, rgba(0, 255, 213, 0.2), rgba(0, 212, 255, 0.2));
          border: 2px solid var(--neon);
          color: var(--neon);
          position: relative;
          overflow: hidden;
        }
        .cyber-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        .cyber-button:hover::before { left: 100%; }
        .cyber-button:hover {
          box-shadow: 0 0 20px var(--neon), inset 0 0 20px rgba(0, 255, 213, 0.2);
          color: white;
        }
        .glow-green { box-shadow: 0 0 10px rgba(34, 197, 94, 0.5); }
        .glow-blue { box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
        .glow-yellow { box-shadow: 0 0 10px rgba(234, 179, 8, 0.5); }
        .glow-purple { box-shadow: 0 0 10px rgba(168, 85, 247, 0.5); }
        .aurora-project:hover { animation: pulse-aurora 2s infinite; }
        @keyframes pulse-aurora {
            0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); }
            50% { box-shadow: 0 0 35px rgba(168, 85, 247, 0.6); }
        }
        a, button, .cyber-button { cursor: crosshair; }
        .tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 8px;
          padding: 4px 8px;
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid var(--neon);
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        a:hover .tooltip { opacity: 1; }
        @media (max-width: 768px) { .hud { display: none; } }
        @media (prefers-reduced-motion: reduce) {
          .blink, .hologram-effect, .pulse-ring, .scan-lines, .aurora-project { animation: none !important; }
          canvas { display: none; }
        }
      `}</style>

      <audio ref={audioRef} loop src="[https://vgmsite.com/soundtracks/deus-ex-human-revolution-augmented-edition-gamerip/gqdxgnyf/2-01.%20Icarus%20-%20Main%20Theme.mp3](https://vgmsite.com/soundtracks/deus-ex-human-revolution-augmented-edition-gamerip/gqdxgnyf/2-01.%20Icarus%20-%20Main%20Theme.mp3)" />

      <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
        <MatrixCanvas opacity={0.08} scrollY={scrollY} />
        <ParticleField scrollY={scrollY} />
        <ScanLines />
        <CyberGrid scrollY={scrollY} />
        <EnergyPulse />
        <CursorTrail />
        <HUD scrollY={scrollY} />

        <motion.div
          className="fixed inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent -z-10"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        <header className="fixed top-0 left-0 right-0 h-16 px-4 flex items-center justify-between z-40 shadow-lg glass-enhanced border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <Skull className="text-cyan-400" size={20} />
            <GlitchText className="text-cyan-400 font-bold hidden sm:inline">DERICK MOKUA</GlitchText>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
              className="text-gray-300 hover:text-cyan-400 hover:neon transition-all duration-300 px-2 py-1 rounded"
            >
              Home
            </a>
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-300 hover:text-cyan-400 hover:neon transition-all duration-300 px-2 py-1 rounded">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={() => setSoundEnabled(!soundEnabled)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Wifi className="text-green-400" size={16} />
            <div className="text-xs text-gray-400 text-right">
              <div className="text-cyan-400">{currentTime} EAT</div>
              <div className="hidden sm:block">{currentDate}</div>
            </div>
          </div>
        </header>

        <div className={`fixed inset-0 top-16 z-30 md:hidden glass-enhanced flex flex-col items-center justify-center gap-4 text-xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
            className="text-gray-300 hover:text-cyan-400 hover:neon transition-all duration-300 px-4 py-2 rounded"
          >
            Home
          </a>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-300 hover:text-cyan-400 hover:neon transition-all duration-300 px-4 py-2 rounded">
              {link.name}
            </a>
          ))}
        </div>

        <main className="relative z-10">
          <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
            <motion.div className="max-w-5xl w-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="border border-cyan-500/30 shadow-2xl glass-enhanced rounded-lg relative overflow-hidden">
                <div className="corner-accent top-left" />
                <div className="corner-accent top-right" />
                <div className="corner-accent bottom-left" />
                <div className="corner-accent bottom-right" />
                <div className="hologram-effect" />
                <div className="bg-linear-to-br from-gray-900 to-gray-800 px-4 py-2 flex items-center justify-between border-b border-cyan-500/20 rounded-t-lg">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-cyan-400" />
                    <span className="text-sm text-gray-300">root@kali: ~/portfolio</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <div className="text-cyan-400 mb-2 neon" style={{ minHeight: '1.5em' }}>
                      {typedText}<span className="blink">█</span>
                    </div>
                    <div className="text-gray-300 mb-6 pl-4">
                      <span className="text-cyan-400">&gt;</span> Backend Developer | Security Engineer<br />
                      <span className="text-cyan-400">&gt;</span> Penetration Testing | Secure Infrastructure<br />
                      <span className="text-cyan-400">&gt;</span> Breaking Systems. Building Solutions.
                    </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white neon">
                    <GlitchText>DERICK MOKUA</GlitchText>
                  </h1>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="cyber-button px-6 py-2 rounded-md font-bold transition-all duration-300 shadow-lg flex items-center gap-2">
                      <Terminal size={16} /> INITIALIZE
                    </a>
                    <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="cyber-button px-6 py-2 rounded-md font-bold transition-all duration-300 shadow-lg flex items-center gap-2">
                      <Shield size={16} /> SCAN PROJECTS
                    </a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="cyber-button px-6 py-2 rounded-md font-bold transition-all duration-300 shadow-lg flex items-center gap-2">
                      <Zap size={16} /> ESTABLISH CONNECTION
                    </a>

                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <Suspense fallback={<SuspenseFallback />}>
            <AboutSectionLazy variants={sectionVariants} />
            <SkillsSectionLazy variants={sectionVariants} data={skills} gridVariants={gridContainerVariants} itemVariants={gridItemVariants} />
            <ServicesSectionLazy variants={sectionVariants} data={services} gridVariants={gridContainerVariants} itemVariants={gridItemVariants} />
            <ProjectsSectionLazy variants={sectionVariants} data={projects} gridVariants={gridContainerVariants} itemVariants={gridItemVariants} />
            <BlogSectionLazy variants={sectionVariants} data={blogPosts} gridVariants={gridContainerVariants} itemVariants={gridItemVariants} />
            <TestimonialsSectionLazy variants={sectionVariants} data={testimonials} gridVariants={gridContainerVariants} itemVariants={gridItemVariants} />
            <ContactSectionLazy variants={sectionVariants} formData={formData} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} formStatus={formStatus} />
          </Suspense>

          <footer className="relative py-8 px-4 border-t border-cyan-500/20 bg-black/50">
            <div className="max-w-5xl mx-auto text-center text-gray-400">
              <div className="flex justify-center items-center gap-6 mb-4">
                <a
                  href="mailto:contact@derickmokua.dev"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
              <p className="mb-2 text-cyan-400">Coded in the dark by Derick 🕶️</p>
              <p className="text-sm">&copy; 2025 Derick Mokua. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}