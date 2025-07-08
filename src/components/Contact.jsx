import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Clock, Globe, Linkedin, Github, Twitter, MessageCircle, CheckCircle, Star, Sparkles, ArrowRight, User, MessageSquare, Instagram } from 'lucide-react';

const PortfolioContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [focusedField, setFocusedField] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'abhishekkatale427@gmail.com',
      description: 'Drop me a line anytime',
      link: 'mailto:abhishekkatale427@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9579455452',
      description: 'Call me for urgent matters',
      link: 'tel:+919579455452',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Pune, Maharashtra, India',
      description: 'Available for remote work',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Availability',
      value: 'Available Now',
      description: 'Ready for new projects',
      link: '#',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishek-katale/', color: 'hover:text-blue-400' },
    { icon: Github, name: 'GitHub', url: 'https://github.com/Abhishekkatale', color: 'hover:text-gray-300' },
    { icon: Twitter, name: 'Twitter', url: 'https://x.com/AbhishekKatale2', color: 'hover:text-sky-400' },
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/abhiii_2304/', color: 'hover:text-pink-400' }
  ];

  const budgetOptions = [
    '$5K - $10K',
    '$10K - $25K',
    '$25K - $50K',
    '$50K+'
  ];

  const timelineOptions = [
    '1-2 weeks',
    '1-2 months',
    '3-6 months',
    '6+ months'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-900 dark:to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10 sm:opacity-20 dark:opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168,85,247,0.3) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/10 dark:bg-purple-700/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-80 sm:h-80 bg-pink-500/10 dark:bg-pink-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23A855F7%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%2210%22%20stroke%3D%22%23A855F7%22%20stroke-opacity%3D%220.1%22%20stroke-width%3D%221%22%20fill%3D%22none%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse dark:opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400 dark:text-purple-500 mr-2 animate-pulse" />
            <span className="text-purple-400 dark:text-purple-500 font-semibold tracking-widest text-xs sm:text-sm">GET IN TOUCH</span>
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400 dark:text-purple-500 ml-2 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-gray-100 mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-purple-200 dark:from-gray-100 dark:to-purple-300 bg-clip-text text-transparent">
              Let's Create Something
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 dark:from-purple-500 dark:via-pink-500 dark:to-purple-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your vision to life? Let's discuss your project and create something extraordinary.
          </p>
        </div>

        {/* Contact Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {contactInfo.map((info, index) => (
            <a
              key={info.title}
              href={info.link}
              className="group relative bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm border border-white/10 dark:border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:bg-white/10 dark:hover:bg-gray-800/50 hover:border-purple-500/30 dark:hover:border-purple-600/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-600/5 dark:to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className={`relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-gray-200" />
              </div>
              
              <h3 className="text-white dark:text-gray-100 font-bold text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-purple-400 dark:group-hover:text-purple-500 transition-colors">
                {info.title}
              </h3>
              <p className="text-gray-300 dark:text-gray-400 font-medium mb-1 text-sm sm:text-base break-words">{info.value}</p>
              <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm">{info.description}</p>
              
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 dark:text-purple-500" />
              </div>
            </a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm border border-white/10 dark:border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              {/* Form Header */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-gray-100 mb-2 flex items-center">
                  <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 dark:text-purple-500 mr-2 sm:mr-3" />
                  Send Message
                </h3>
                <p className="text-gray-300 dark:text-gray-400 text-sm sm:text-base">Fill out the form below and I'll get back to you within 24 hours.</p>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-3 sm:p-4 bg-green-500/20 dark:bg-green-600/20 border border-green-500/30 dark:border-green-600/30 rounded-xl flex items-center text-green-300 dark:text-green-400 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <label className="block text-gray-300 dark:text-gray-400 font-medium mb-2 text-sm sm:text-base">
                      <User className="w-4 h-4 inline mr-2" />
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 dark:bg-gray-700/30 border rounded-xl text-white dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                        focusedField === 'name' ? 'border-purple-400 dark:border-purple-500 bg-white/10 dark:bg-gray-700/50' : 'border-white/10 dark:border-gray-600/50 hover:border-white/20 dark:hover:border-gray-500/70'
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-gray-300 dark:text-gray-400 font-medium mb-2 text-sm sm:text-base">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 dark:bg-gray-700/30 border rounded-xl text-white dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                        focusedField === 'email' ? 'border-purple-400 dark:border-purple-500 bg-white/10 dark:bg-gray-700/50' : 'border-white/10 dark:border-gray-600/50 hover:border-white/20 dark:hover:border-gray-500/70'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 dark:text-gray-400 font-medium mb-2 text-sm sm:text-base">
                    <Star className="w-4 h-4 inline mr-2" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField('')}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 dark:bg-gray-700/30 border rounded-xl text-white dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                      focusedField === 'subject' ? 'border-purple-400 dark:border-purple-500 bg-white/10 dark:bg-gray-700/50' : 'border-white/10 dark:border-gray-600/50 hover:border-white/20 dark:hover:border-gray-500/70'
                    }`}
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-300 dark:text-gray-400 font-medium mb-2 text-sm sm:text-base">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 dark:bg-gray-700/30 border border-white/10 dark:border-gray-600/50 rounded-xl text-white dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:bg-white/10 dark:focus:bg-gray-700/50 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="" className="text-gray-500">Select budget</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option} className="bg-slate-800 dark:bg-gray-800 text-white dark:text-gray-300">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 dark:text-gray-400 font-medium mb-2 text-sm sm:text-base">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 dark:bg-gray-700/30 border border-white/10 dark:border-gray-600/50 rounded-xl text-white dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:bg-white/10 dark:focus:bg-gray-700/50 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="" className="text-gray-500">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option} className="bg-slate-800 dark:bg-gray-800 text-white dark:text-gray-300">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 dark:text-gray-400 font-medium mb-2 text-sm sm:text-base">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    required
                    rows={4}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 dark:bg-gray-700/30 border rounded-xl text-white dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base ${
                      focusedField === 'message' ? 'border-purple-400 dark:border-purple-500 bg-white/10 dark:bg-gray-700/50' : 'border-white/10 dark:border-gray-600/50 hover:border-white/20 dark:hover:border-gray-500/70'
                    }`}
                    placeholder="Tell me about your project, goals, and how I can help you achieve them..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group relative w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 text-white dark:text-gray-100 font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-800 dark:hover:to-pink-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 dark:hover:shadow-purple-600/25 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white dark:border-gray-200 border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            {/* Availability Card */}
            <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm border border-white/10 dark:border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-100 mb-4 sm:mb-6 flex items-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 dark:text-purple-500 mr-2 sm:mr-3" />
                Current Availability
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 dark:bg-green-500 rounded-full mr-3 animate-pulse flex-shrink-0" />
                  <span className="text-white dark:text-gray-200 font-medium text-sm sm:text-base">Available for new projects</span>
                </div>
                <div className="flex items-center text-gray-300 dark:text-gray-400">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-purple-400 dark:text-purple-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Open to remote work worldwide</span>
                </div>
                <div className="flex items-center text-gray-300 dark:text-gray-400">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-purple-400 dark:text-purple-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Typical response time: 2-4 hours</span>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-600/10 dark:to-pink-600/10 rounded-xl border border-purple-500/20 dark:border-purple-600/30">
                <p className="text-purple-300 dark:text-purple-400 font-medium mb-2 text-sm sm:text-base">🚀 Quick Start Available</p>
                <p className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm">
                  Need to get started immediately? I can begin working on your project within 24-48 hours.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm border border-white/10 dark:border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-100 mb-4 sm:mb-6">Connect With Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center p-3 sm:p-4 bg-white/5 dark:bg-gray-700/40 rounded-xl border border-white/10 dark:border-gray-600/60 hover:bg-white/10 dark:hover:bg-gray-700/70 hover:border-purple-500/30 dark:hover:border-purple-600/50 transition-all duration-300 hover:scale-105 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0 text-gray-300 dark:text-gray-400 group-hover:text-current" />
                    <span className="font-medium text-sm sm:text-base text-white dark:text-gray-300 group-hover:text-current">{social.name}</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 text-gray-300 dark:text-gray-400 group-hover:text-current" />
                  </a>
                ))}
              </div>
              
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  Follow me for updates on my latest projects and insights
                </p>
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-white/10 dark:bg-gray-700/50 rounded-full flex items-center justify-center text-gray-300 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-gray-700/80 transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-slate-900 to-transparent dark:from-black dark:to-transparent" />
    </section>
  );
};

export default PortfolioContact;