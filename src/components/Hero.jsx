import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';

const PremiumPortfolioHero = () => {
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

  const skills = [
    { icon: Code, label: 'Full Stack Development', delay: '0ms' },
    { icon: Palette, label: 'UI/UX Design', delay: '200ms' },
    { icon: Zap, label: 'Performance Optimization', delay: '400ms' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-900/80 dark:to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 dark:from-purple-600/30 dark:to-pink-600/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${10 + mousePosition.x * 0.015}%`,
            bottom: `${20 + mousePosition.y * 0.015}%`,
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
        
        {/* Grid Pattern */}
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 dark:opacity-10" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6">
        <div className={`text-2xl font-bold bg-gradient-to-r from-white to-purple-200 dark:from-gray-100 dark:to-purple-300 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          Portfolio
        </div>
        <div className={`flex space-x-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <a href="#work" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-300 font-medium">Work</a>
          <a href="#about" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-300 font-medium">About</a>
          <a href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-300 font-medium">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-8 text-center">
        {/* Main Heading */}
        <div className={`mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 dark:from-gray-100 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent leading-tight">
            Creative
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 mx-auto mb-6 rounded-full" />
        </div>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-gray-300 dark:text-gray-400 mb-12 max-w-3xl leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Crafting exceptional digital experiences through innovative design and cutting-edge technology. 
          <span className="text-purple-300 dark:text-purple-400 font-medium"> Let's build something extraordinary together.</span>
        </p>

        {/* Skills */}
        <div className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-white/10 dark:bg-gray-800/40 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 dark:hover:shadow-purple-600/25"
              style={{ animationDelay: skill.delay }}
            >
              <skill.icon className="w-5 h-5 text-purple-300 dark:text-purple-400" />
              <span className="text-white dark:text-gray-300 font-medium">{skill.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 text-white dark:text-gray-100 px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-800 dark:hover:to-pink-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 dark:hover:shadow-purple-600/25 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>View My Work</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="group relative bg-transparent border border-white/30 dark:border-gray-700/50 text-white dark:text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 dark:hover:bg-gray-800/30 transition-all duration-300 hover:scale-105 hover:border-white/50 dark:hover:border-gray-600/60 backdrop-blur-sm">
            <span className="flex items-center justify-center space-x-2">
              <span>Get In Touch</span>
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className={`flex space-x-6 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="group relative w-12 h-12 bg-white/10 dark:bg-gray-800/40 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25 dark:hover:shadow-purple-600/25"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-gray-300 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-200 transition-colors duration-300" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black dark:bg-gray-900 text-white dark:text-gray-200 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.label}
              </div>
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PremiumPortfolioHero;