import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye, Calendar, Users, Star, Filter, Search, ArrowRight, Code, Zap, Heart, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
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
      image: require("../assets/snaze.png"),
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
      category: 'Mobile',
      description: 'Join our sports club to get access to world-class coaching, facilities, and a range of sports activities tailored to help you achieve your goals. Swimming.',
      image: require("../assets/aspire.png"),
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
      description: 'Event Planning & Management ... We specialize in creating exceptional events that leave lasting impressions. Whether it a corporate function, private',
      image: require("../assets/efent.png"),
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
      description: 'Building innovative websites that inspire and engage. Digital Marketing. Empowering brands with creative digital strategies. Content Creation.',
      image: require("../assets/musitech.png"),
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
      description: 'Studio Musings, every line sketched, every material chosen, every detail considered — begins with a musing. A fleeting thought that blossoms into a concept.',
      image: require("../assets/studio.png"),
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
      description: 'Nestled amidst lush greenery, Krushi Unnati is a premium farmstay, where modern luxury meets nature’s serenity.',
      image: require("../assets/krushi.png"),
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23A855F7%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M40%2040m-20%200a20%2C20%200%201%2C1%2040%2C0a20%2C20%200%201%2C1%20-40%2C0%22/%3E%3Cpath%20d%3D%22M40%2040m-30%200a30%2C30%200%201%2C1%2060%2C0a30%2C30%200%201%2C1%20-60%2C0%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400 mr-4" />
            <span className="text-purple-400 font-semibold tracking-widest text-sm">MY WORK</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400 ml-4" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover my latest work showcasing innovative solutions, cutting-edge technologies, and exceptional user experiences.
          </p>
        </div>

        {/* Featured Projects Carousel */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 h-full">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="relative w-full h-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                      
                      {/* Project Stats Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <div className="flex space-x-4">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1">
                              <span className="text-white text-sm font-medium">{value} {key}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <a href={project.github} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                            <Github className="w-5 h-5" />
                          </a>
                          <a href={project.live} className="w-10 h-10 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-purple-400 font-semibold text-sm tracking-wide">{project.date} • FEATURED</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.awards.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.awards.map((award) => (
                            <div key={award} className="flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 px-3 py-1 rounded-lg text-sm">
                              <Trophy className="w-4 h-4 mr-1" />
                              {award}
                            </div>
                          ))}
                        </div>
                      )}

                      <button className="group flex items-center text-white font-semibold hover:text-purple-400 transition-all duration-300">
                        View Project Details
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Filter and Search */}
        <div className={`flex flex-col md:flex-row justify-between items-center mb-12 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 w-64"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
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

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400 font-semibold text-sm tracking-wide">{project.date}</span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    {project.stats.views}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.stats.users}
                    </div>
                  </div>
                  
                  <button className="text-purple-400 hover:text-white font-semibold text-sm transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioProjects;