import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Heart } from 'lucide-react';

const CompactPremiumFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Abhishekkatale', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-katale/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/abhiii_2304/', label: 'Twitter' },
    { icon: Mail, href: 'mailto:abhishekkatale427@gmail.com', label: 'Email' }
  ];

  return (
    <>
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 text-white dark:text-gray-200 p-3 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-purple-500/25 dark:hover:shadow-purple-600/25 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Compact Footer */}
      <footer className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-900/80 dark:to-black text-white dark:text-gray-200 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10 dark:opacity-15">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 dark:from-purple-600/20 dark:to-cyan-600/20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            
            {/* Brand & Contact */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 dark:from-purple-500 dark:to-cyan-500 bg-clip-text text-transparent mb-2">
                Abhishek Katale
              </h3>
              <p className="text-gray-300 dark:text-gray-400 text-sm">
                Software Engineer <span className="text-purple-400 dark:text-purple-500">abhishekkatale427@gmail.com</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-white/10 dark:bg-gray-800/40 rounded-lg text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/60 backdrop-blur-sm border border-white/10 dark:border-gray-700/50 hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <div className="flex items-center space-x-2 text-gray-300 dark:text-gray-400 mb-1">
                <span className="text-sm">Made with</span>
                <Heart className="w-3 h-3 text-red-400 dark:text-red-500 animate-pulse" />
                <span className="text-sm">in India</span>
              </div>
              <p className="text-gray-400 dark:text-gray-500 text-xs">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 dark:via-purple-600 to-transparent"></div>
      </footer>
    </>
  );
};

export default CompactPremiumFooter;