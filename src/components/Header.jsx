import React, { useState, useEffect, useContext } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram, ExternalLink, Code, Sparkles, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';

const PortfolioHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = ['Leadership','Communication','Problem Solving','Emotional Intelligence','Teamwork','Empathy'];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-900/70 dark:to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-50"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168,85,247,0.4) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse dark:opacity-70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 dark:bg-purple-600 rounded-full animate-ping opacity-20 dark:opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`relative z-10 p-6 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white dark:text-gray-200" />
            </div>
            <span className="text-white dark:text-gray-100 font-bold text-xl tracking-tight">Abhishek Katale</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-all duration-300 relative group font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {[
              { icon: Github, href: 'https://github.com/Abhishekkatale' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-katale/' },
              { icon: Mail, href: 'mailto:abhishekkatale427@gmail.com' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Activate light mode' : 'Activate dark mode'}
              className="w-10 h-10 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-300" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-purple-400 dark:text-purple-500 mr-2 animate-pulse" />
              <span className="text-purple-400 dark:text-purple-500 font-medium tracking-wide">SOFTWARE ENGINEER</span>
              <Sparkles className="w-6 h-6 text-purple-400 dark:text-purple-500 ml-2 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white dark:text-gray-100 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white dark:from-gray-100 dark:via-purple-300 dark:to-gray-100 bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 dark:from-purple-500 dark:via-pink-500 dark:to-purple-500 bg-clip-text text-transparent animate-pulse">
                Experiences
              </span>
            </h1>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <p className="text-xl text-gray-300 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate developer creating innovative solutions with cutting-edge technologies.
              Transforming ideas into powerful, scalable applications that make a difference.
            </p>
          </div>

          {/* CTA Buttons */}
         <div
  className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-700 ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
  }`}
>
  {/* View My Work Button */}
  <a
    href="#projects"
    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white dark:text-gray-100 font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-700 dark:hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 dark:hover:shadow-purple-600/25"
  >
    <span className="relative z-10 flex items-center">
      View My Work
      <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </span>
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
  </a>

  {/* Download Resume Button */}
  <a
    href="https://drive.google.com/file/d/1ucfJ_-X87tdjuQSAhd38lP_-1FYmlZ-s/view?usp=sharing"  // replace with actual direct download link
    download
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 border-2 border-white/20 dark:border-gray-700/50 text-white dark:text-gray-300 font-semibold rounded-full hover:bg-white/10 dark:hover:bg-gray-800/30 hover:border-white/40 dark:hover:border-gray-600/60 transition-all duration-300 backdrop-blur-sm hover:scale-105"
  >
    Download Resume
  </a>
</div>


          {/* Skills Showcase */}
          <div
            className={`transition-all duration-1000 delay-900 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {skills.map((skill, i) => (
                <div
                  key={skill}
                  className="px-6 py-3 bg-white/10 dark:bg-gray-800/40 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-full text-white dark:text-gray-300 font-medium hover:bg-white/20 dark:hover:bg-gray-700/60 hover:scale-110 transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`transition-all duration-1000 delay-1100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="flex flex-col items-center text-gray-400 dark:text-gray-500">
              <span className="text-sm mb-2 tracking-wide">SCROLL TO EXPLORE</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent dark:from-black dark:to-transparent" />
    </div>
  );
};

export default PortfolioHeader;
