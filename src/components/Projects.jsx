import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye, Calendar, Users, Star, Filter, Search, ArrowRight, Code, Zap, Heart, Trophy, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const PortfolioProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'web', label: 'Web Apps', icon: Zap },
    { id: 'mobile', label: 'Mobile', icon: Heart },
    { id: 'ai', label: 'AI/ML', icon: Trophy }
  ];

  const projects = [
    {
      id: 1,
      title: 'Snaze E-commerce',
      category: 'web',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features real-time inventory, advanced analytics, and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com/musi-tech/Snaze',
      live: 'https://www.snaze.in/',
      featured: true,
      stats: { views: '15K', stars: 127, users: '2.3K' },
      date: '2025',
      awards: ['Best UI Design', 'Performance Excellence']
    },
    {
      id: 2,
      title: 'Aspire Sports Club',
      category: 'mobile',
      description: 'Join our sports club to get access to world-class coaching, facilities, and a range of sports activities tailored to help you achieve your goals.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com/musi-tech/Aspire-Sports-Academy',
      live: 'https://aspiresportsclub.com/',
      featured: true,
      stats: { views: '22K', stars: 89, users: '1.8K' },
      date: '2024',
      awards: ['Innovation Award']
    },
    {
      id: 3,
      title: 'Efent Event Planner',
      category: 'mobile',
      description: 'Event Planning & Management platform specializing in creating exceptional events that leave lasting impressions for corporate and private functions.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      technologies: ['Nest js', 'Tailwind CSS', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com/Abhishekkatale/efentt',
      live: 'https://www.efent.in/',
      featured: false,
      stats: { views: '8.5K', stars: 64, users: '950' },
      date: '2024',
      awards: []
    },
    {
      id: 4,
      title: 'Musitech',
      category: 'web',
      description: 'Building innovative websites that inspire and engage. Digital Marketing platform empowering brands with creative digital strategies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com/musi-tech/musitech',
      live: 'https://www.musitech.in/',
      featured: false,
      stats: { views: '12K', stars: 93, users: '1.2K' },
      date: '2024',
      awards: ['Best Data Visualization']
    },
    {
      id: 5,
      title: 'Studio Musigns',
      category: 'web',
      description: 'Studio Musings where every line sketched, every material chosen, every detail considered begins with a musing that blossoms into a concept.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
      technologies: ['Next js', 'Tailwind CSS', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com/Abhishekkatale/musigns',
      live: 'https://www.studiomusings.com/',
      featured: false,
      stats: { views: '6.8K', stars: 45, users: '580' },
      date: '2025',
      awards: []
    },
    {
      id: 6,
      title: 'Krushi Unnati',
      category: 'mobile',
      description: 'Nestled amidst lush greenery, Krushi Unnati is a premium farmstay where modern luxury meets nature\'s serenity.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Stripe', 'Redis'],
      github: 'https://github.com/Abhishekkatale/krushiunnatifarm',
      live: 'https://krushiunnati.vercel.app/',
      featured: true,
      stats: { views: '11K', stars: 78, users: '1.4K' },
      date: '2025',
      awards: ['User Experience Award']
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter(p => p.featured);

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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section ref={sectionRef} className="relative py-12 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 md:top-32 left-4 md:left-20 w-40 md:w-80 h-40 md:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 md:bottom-32 right-4 md:right-20 w-48 md:w-96 h-48 md:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23A855F7%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M40%2040m-20%200a20%2C20%200%201%2C1%2040%2C0a20%2C20%200%201%2C1%20-40%2C0%22/%3E%3Cpath%20d%3D%22M40%2040m-30%200a30%2C30%200%201%2C1%2060%2C0a30%2C30%200%201%2C1%20-60%2C0%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400 mr-2 md:mr-4" />
            <span className="text-purple-400 font-semibold tracking-widest text-xs md:text-sm">MY WORK</span>
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400 ml-2 md:ml-4" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Discover my latest work showcasing innovative solutions, cutting-edge technologies, and exceptional user experiences.
          </p>
        </div>

        {/* Featured Projects Carousel */}
        <div className={`mb-12 md:mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 overflow-hidden">
            <div className="relative h-auto md:h-96 lg:h-[500px]">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-8 h-full">
                    {/* Image Section */}
                    <div className="relative group order-1 lg:order-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="relative w-full h-48 md:h-64 lg:h-full object-cover rounded-xl md:rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl md:rounded-2xl" />
                      
                      {/* Project Stats Overlay */}
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {Object.entries(project.stats).map(([key, value]) => (
                              <div key={key} className="bg-black/30 backdrop-blur-sm rounded-md md:rounded-lg px-2 md:px-3 py-1">
                                <span className="text-white text-xs md:text-sm font-medium">{value} {key}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex space-x-1 md:space-x-2">
                            <a href={project.github} className="w-8 md:w-10 h-8 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                              <Github className="w-4 md:w-5 h-4 md:h-5" />
                            </a>
                            <a href={project.live} className="w-8 md:w-10 h-8 md:h-10 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300">
                              <ExternalLink className="w-4 md:w-5 h-4 md:h-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center order-2 lg:order-2 px-2 md:px-0">
                      <div className="mb-3 md:mb-4">
                        <span className="text-purple-400 font-semibold text-xs md:text-sm tracking-wide">{project.date} • FEATURED</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">{project.title}</h3>
                      <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                        {project.technologies.slice(0, isMobile ? 3 : project.technologies.length).map((tech) => (
                          <span key={tech} className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-md md:rounded-lg text-xs md:text-sm font-medium border border-purple-500/30">
                            {tech}
                          </span>
                        ))}
                        {isMobile && project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-md text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {project.awards.length > 0 && (
                        <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                          {project.awards.slice(0, isMobile ? 1 : project.awards.length).map((award) => (
                            <div key={award} className="flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 px-2 md:px-3 py-1 rounded-md md:rounded-lg text-xs md:text-sm">
                              <Trophy className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                              {award}
                            </div>
                          ))}
                          {isMobile && project.awards.length > 1 && (
                            <div className="flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 px-2 py-1 rounded-md text-xs">
                              <Trophy className="w-3 h-3 mr-1" />
                              +{project.awards.length - 1} more
                            </div>
                          )}
                        </div>
                      )}

                      <button className="group flex items-center text-white font-semibold hover:text-purple-400 transition-all duration-300 text-sm md:text-base">
                        View Project Details
                        <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls - Hidden on mobile for better UX */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute -bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Filter and Search */}
        <div className={`mb-8 md:mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white"
            >
              <span className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filter Projects
              </span>
              {showFilters ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {/* Filters */}
          <div className={`${showFilters || !isMobile ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
              <div className="w-full md:w-auto">
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveFilter(category.id);
                        if (isMobile) setShowFilters(false);
                      }}
                      className={`flex items-center justify-center md:justify-start px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
                        activeFilter === category.id
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                      }`}
                    >
                      <category.icon className="w-4 md:w-5 h-4 md:h-5 mr-1 md:mr-2" />
                      <span className="hidden sm:inline">{category.label}</span>
                      <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-64 pl-10 pr-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg md:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 text-sm md:text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl overflow-hidden hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Hover Overlay - Desktop only */}
                <div className={`hidden md:flex absolute inset-0 bg-black/80 backdrop-blur-sm items-center justify-center transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.live}
                      className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                    <button className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                      <Eye className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Mobile Action Buttons */}
                <div className="md:hidden absolute top-2 right-2 flex space-x-1">
                  <a
                    href={project.github}
                    className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    className="w-8 h-8 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-2 left-2 md:top-4 md:right-4 md:left-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center">
                    <Star className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                    Featured
                  </div>
                )}
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400 font-semibold text-xs md:text-sm tracking-wide">{project.date}</span>
                  <div className="flex items-center text-gray-400 text-xs md:text-sm">
                    <Eye className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                    {project.stats.views}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                  {project.technologies.slice(0, isMobile ? 2 : 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > (isMobile ? 2 : 3) && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                      +{project.technologies.length - (isMobile ? 2 : 3)} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                      {project.stats.users}
                    </div>
                  </div>
                  
                  <button className="text-purple-400 hover:text-white font-semibold text-xs md:text-sm transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 md:py-16">
            <div className="w-16 md:w-24 h-16 md:h-24 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 md:w-12 h-8 md:h-12 text-purple-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400 text-sm md:text-base">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Mobile Scroll Indicator */}
        {isMobile && filteredProjects.length > 3 && (
          <div className="flex justify-center mt-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <span className="text-gray-400 text-sm">Scroll for more projects</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioProjects;