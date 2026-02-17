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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-12 border-y ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-slate-100/40 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          <div className="text-center">
            <div className="text-4xl font-bold mono mb-1 text-[#2E5BFF]">3.622</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Cumulative GPA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mono mb-1 text-[#00C853]">9</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mono mb-1 text-[#2E5BFF]">2027</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Target M.S. Grad</div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-24">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center reveal">
          Cyber <span className="text-[#2E5BFF]">Experience</span>
        </h2>
        
        <div className="reveal">
          <div className={`rounded-2xl overflow-hidden shadow-2xl border transition-colors ${isDark ? 'bg-[#151921] border-gray-800' : 'bg-slate-900 border-slate-700'}`}>
            <div className="bg-gray-800/50 px-6 py-3 flex items-center justify-start border-b border-gray-700/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            <div className="p-8 mono text-sm md:text-base space-y-4">
              <div className="pl-4 border-l-2 border-[#2E5BFF]/30 space-y-4 text-gray-300">
                <div className="text-[#00F2FF] font-bold text-lg mb-2 underline">Horse Plinko Cyber Challenge (UCF)</div>
                <p className="flex items-start">
                  <ChevronRight size={18} className="mt-1 mr-2 text-[#2E5BFF] flex-shrink-0" />
                  <span>Participated in a high-stakes <span className="text-white font-bold">Red vs. Blue</span> team style competition.</span>
                </p>
                <p className="flex items-start">
                  <ChevronRight size={18} className="mt-1 mr-2 text-[#2E5BFF] flex-shrink-0" />
                  <span>Responsible for defending various websites and critical services from a wave of experienced attackers.</span>
                </p>
                <p className="flex items-start">
                  <ChevronRight size={18} className="mt-1 mr-2 text-[#2E5BFF] flex-shrink-0" />
                  <span>Managed complex infrastructure involving both <span className="text-white font-bold">Windows and Linux</span> machines under active threat.</span>
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <Award className="text-[#00C853]" />
                  <span className="text-[#00C853] font-bold">OUTCOME: Secured 3rd Place Finish</span>
                </div>
              </div>

              <div className="flex space-x-2 pt-4">
                <span className="text-green-400 opacity-60 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 px-6 scroll-mt-24 ${isDark ? 'bg-gray-900/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-20 text-center reveal">
            Academic <span className="text-[#2E5BFF]">Path</span>
          </h2>
          
          <div className="relative reveal">
            <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 ${isDark ? 'bg-gray-800' : 'bg-slate-300'}`} />
            
            <div className="space-y-16">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full border-4 z-10 transition-colors ${isDark ? 'bg-[#0B0E14] border-[#00F2FF]' : 'bg-white border-[#2E5BFF]'}`} />
                  
                  <div className="w-full md:w-1/2 pl-10 md:pl-0">
                    <div className={`p-8 rounded-2xl border transition-all ${isDark ? 'bg-[#151921] border-gray-800' : 'bg-white border-slate-200'} ${idx % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                      <span className="mono text-xs font-bold text-[#2E5BFF] block mb-2 uppercase tracking-widest">{edu.year}</span>
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <p className={`font-semibold mb-4 ${isDark ? 'text-[#00F2FF]' : 'text-[#2E5BFF]'}`}>{edu.institution}</p>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{edu.details}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-24">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            The <span className="text-[#2E5BFF]">Credential</span> Vault
          </h2>
          <p className="text-gray-500 font-medium">Verified Expertise Across Platforms</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className={`group p-8 rounded-2xl border transition-all duration-500 transform hover:-translate-y-2 ${isDark ? 'bg-[#151921] border-gray-800 hover:border-[#00F2FF] hover:glow-cyan' : 'bg-white border-slate-200 hover:border-[#2E5BFF] hover:shadow-xl'}`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${isDark ? 'bg-gray-800 text-[#00F2FF] group-hover:bg-[#00F2FF] group-hover:text-black' : 'bg-slate-100 text-[#2E5BFF] group-hover:bg-[#2E5BFF] group-hover:text-white'}`}>
                {ICON_MAP[cert.icon] || <Award />}
              </div>
              <h3 className="text-lg font-bold mb-1 leading-snug">{cert.name}</h3>
              <p className="text-sm opacity-60 mb-4">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-slate-100 text-slate-500'}`}>
                  {cert.category}
                </span>
                <span className="mono text-xs font-bold opacity-40">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 px-6 scroll-mt-24 ${isDark ? 'bg-gray-900/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div className="reveal">
              <h2 className="text-3xl font-extrabold mb-10 flex items-center">
                <Terminal className="mr-4 text-[#2E5BFF]" />
                Skills Radar
              </h2>
              
              <div className="space-y-10">
                {['Technical', 'Creative/Business'].map((cat) => (
                  <div key={cat}>
                    <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-6 opacity-40">{cat} Expertise</h3>
                    <div className="flex flex-wrap gap-3">
                      {SKILLS.filter(s => s.category === cat).map((skill, i) => (
                        <div key={i} className={`px-5 py-3 rounded-xl border font-semibold text-sm transition-all ${isDark ? 'bg-gray-900 border-gray-800 hover:border-[#00F2FF] hover:text-[#00F2FF]' : 'bg-white border-slate-200 hover:border-[#2E5BFF] hover:text-[#2E5BFF]'}`}>
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="reveal">
              <h2 className="text-3xl font-extrabold mb-10 flex items-center">
                <Users className="mr-4 text-[#00F2FF]" />
                Involvement
              </h2>
              
              <div className="space-y-6">
                <div className={`p-8 rounded-2xl border ${isDark ? 'bg-[#151921] border-gray-800' : 'bg-white border-slate-200'}`}>
                  <h3 className="font-bold text-xl mb-1">FAU Cybersecurity Club</h3>
                  <p className={`text-sm mb-4 font-bold ${isDark ? 'text-[#00F2FF]' : 'text-[#2E5BFF]'}`}>Fall 2025 - Present</p>
                  <p className="text-sm opacity-60">Actively participating in hands-on workshops and collegiate cyber competitions.</p>
                </div>
                <div className={`p-8 rounded-2xl border ${isDark ? 'bg-[#151921] border-gray-800' : 'bg-white border-slate-200'}`}>
                  <h3 className="font-bold text-xl mb-1">MIS Association</h3>
                  <p className={`text-sm mb-4 font-bold ${isDark ? 'text-[#00F2FF]' : 'text-[#2E5BFF]'}`}>Fall 2024 - Present</p>
                  <p className="text-sm opacity-60">Building bridges between business strategy and information technology management.</p>
                </div>
                <div className="flex gap-4">
                  <div className={`flex-1 p-6 rounded-2xl border text-center ${isDark ? 'bg-[#00C853]/5 border-[#00C853]/20' : 'bg-[#00C853]/5 border-[#00C853]/20'}`}>
                    <Award className="mx-auto mb-3 text-[#00C853]" />
                    <h4 className="font-bold text-sm">Dean's List</h4>
                    <p className="text-[10px] opacity-60 uppercase mt-1">4-Year Consecutive</p>
                  </div>
                  <div className={`flex-1 p-6 rounded-2xl border text-center ${isDark ? 'bg-[#2E5BFF]/5 border-[#2E5BFF]/20' : 'bg-[#2E5BFF]/5 border-[#2E5BFF]/20'}`}>
                    <ShieldCheck className="mx-auto mb-3 text-[#2E5BFF]" />
                    <h4 className="font-bold text-sm">FAU Grant</h4>
                    <p className="text-[10px] opacity-60 uppercase mt-1">Academic Achievement</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className={`py-20 px-6 scroll-mt-24 ${isDark ? 'bg-[#0B0E14] border-t border-gray-800' : 'bg-white border-t border-slate-200'}`}>
        <div className="max-w-6xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
            Let's <span className="text-[#2E5BFF]">Secure</span> the Future
          </h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Seeking opportunities to apply technical knowledge and contribute to high-level IT and cybersecurity initiatives.
          </p>
          
          <div className="flex justify-center gap-6 mb-16">
            <a href="https://www.linkedin.com/in/ryanbauer654" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${isDark ? 'border-gray-800 hover:border-[#00F2FF] hover:text-[#00F2FF]' : 'border-slate-200 hover:border-[#2E5BFF] hover:text-[#2E5BFF]'}`}>
              <Linkedin size={20} />
              <span className="font-bold">LinkedIn</span>
            </a>
            <a href="mailto:ryan.bauer654@gmail.com" className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${isDark ? 'border-gray-800 hover:border-[#00F2FF] hover:text-[#00F2FF]' : 'border-slate-200 hover:border-[#2E5BFF] hover:text-[#2E5BFF]'}`}>
              <Mail size={20} />
              <span className="font-bold">Email</span>
            </a>
          </div>
          
          <div className="pt-12 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="mono text-xs opacity-40">
              © 2024 Ryan Michael Bauer. Architecting Secure Systems.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="mono text-xs opacity-40 hover:opacity-100 transition-opacity">Built with React & Tailwind</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 mono text-xs opacity-40 hover:opacity-100 transition-opacity">
                <Github size={14} />
                <span>View Source</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;