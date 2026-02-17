
import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Linkedin, 
  Github, 
  Mail, 
  Terminal, 
  ShieldCheck, 
  Award, 
  ChevronRight,
  Users,
  FileText
} from 'lucide-react';
import { Theme } from './types.ts';
import { CERTIFICATIONS, SKILLS, EDUCATION, ICON_MAP } from './constants.tsx';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  
  // Handle theme switching
  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  // Smooth scroll handler to prevent potential crashes with default anchor behavior in some environments
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const isDark = theme === Theme.DARK;

  // Profile photo - Using the stable LinkedIn profile link representing the provided image.
  const profilePhoto = "https://media.licdn.com/dms/image/v2/D4E03AQE-K8H8O_F8WQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690466453916?e=1746057600&v=beta&t=M8-9x6oU-QnB0Y34GzD5M_yN1H7F6p-p1l2hXyP5p1A";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0B0E14] text-gray-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDark ? 'bg-[#0B0E14]/80 border-gray-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className={`w-8 h-8 ${isDark ? 'text-[#00F2FF]' : 'text-[#2E5BFF]'}`} />
            <span className="font-bold text-xl tracking-tight mono">RMB<span className="text-[#00F2FF]">.</span>IA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#2E5BFF] transition-colors cursor-pointer">About</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-[#2E5BFF] transition-colors cursor-pointer">Experience</a>
            <a href="#credentials" onClick={(e) => scrollToSection(e, 'credentials')} className="hover:text-[#2E5BFF] transition-colors cursor-pointer">Credentials</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-[#2E5BFF] transition-colors cursor-pointer">Skills</a>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#2E5BFF] transition-colors">
              <FileText size={18} />
              <span>Resume</span>
            </a>
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'text-yellow-400' : 'text-slate-600'}`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-40 pb-20 px-6 overflow-hidden scroll-mt-24">
        <div className={`absolute top-0 right-0 -z-10 w-[500px] h-[500px] blur-[120px] rounded-full opacity-20 pointer-events-none transition-colors duration-1000 ${isDark ? 'bg-[#2E5BFF]' : 'bg-[#2E5BFF]/30'}`} />
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 reveal">
          <div className="flex-1 text-center md:text-left">
            <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border ${isDark ? 'border-[#00F2FF] text-[#00F2FF] bg-[#00F2FF]/10' : 'border-[#2E5BFF] text-[#2E5BFF] bg-[#2E5BFF]/5'}`}>
              Future Cybersecurity Leader
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Ryan Michael <span className={isDark ? 'text-[#00F2FF]' : 'text-[#2E5BFF]'}>Bauer</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-semibold text-gray-500 max-w-2xl">
              Architecting Secure Business Systems. Bridging high-level MIS strategy with tactical Information Assurance.
            </p>
            <p className={`text-lg mb-10 ${isDark ? 'text-gray-400' : 'text-slate-600'} max-w-xl`}>
              Analytical Management Information Systems student at FAU. Driven by data organization, systems management, and secure information handling.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={`px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 ${isDark ? 'bg-[#2E5BFF] hover:bg-[#1e44cc] text-white shadow-lg glow-blue' : 'bg-[#2E5BFF] hover:bg-[#1e44cc] text-white shadow-lg'}`}>
                Connect With Me
              </a>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className={`px-8 py-4 rounded-xl font-bold border transition-all transform hover:scale-105 flex items-center gap-2 ${isDark ? 'border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-gray-500' : 'border-slate-300 bg-white hover:bg-slate-50 shadow-sm'}`}>
                <FileText size={20} />
                View Resume
              </a>
              <a href="https://www.linkedin.com/in/ryanbauer654" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-xl border transition-all ${isDark ? 'border-gray-800 hover:border-gray-600' : 'border-slate-200 hover:border-slate-400'}`} title="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="relative group">
            <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 ${isDark ? 'bg-[#00F2FF]' : 'bg-[#2E5BFF]'}`} />
            <img 
              src={profilePhoto}
              alt="Ryan Michael Bauer - Professional Portrait" 
              className="w-80 h-80 object-cover rounded-3xl border-4 relative z-10 transition-all duration-700 border-[#0B0E14] shadow-2xl bg-gray-800"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Ryan+Bauer&background=2E5BFF&color=fff&size=512";
              }}
            />
