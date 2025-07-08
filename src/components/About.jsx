import React, { useState, useEffect, useRef } from 'react';
import { Award, Coffee, Users, Zap, Code2, Briefcase, GraduationCap, Heart, Star, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

const PortfolioAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0 });
  const sectionRef = useRef(null);

  const stats = [
    { icon: Code2, label: 'Projects Completed', value: 15, suffix: '+' },
    { icon: Users, label: 'Community Members', value: 300, suffix: '+' },
    { icon: Coffee, label: 'Years Experience', value: 2, suffix: '+' },
    { icon: Award, label: 'Certifications', value: 5, suffix: '+' }
  ];

  const skills = [
    { name: 'Frontend Development', level: 92, icon: Code2 },
    { name: 'Data Science & ML', level: 88, icon: TrendingUp },
    { name: 'UI/UX Design', level: 85, icon: Heart },
    { name: 'Full Stack Development', level: 82, icon: Zap }
  ];

  const timeline = [
    {
      type: 'experience',
      year: 'May 2024 - Present',
      title: 'Web Developer',
      company: 'Musitech',
      description: 'Developing responsive websites with React, JavaScript, and MongoDB, focusing on performance optimization and user experience.',
      achievements: ['Increased mobile traffic by 30%', 'Reduced bounce rates by 15%', 'Improved page load times by 25%', 'Cut code integration errors by 50%']
    },
    {
      type: 'experience',
      year: 'Dec 2023 - Jan 2024',
      title: 'Data Science Intern',
      company: 'All India Council for Technical Education (AICTE)',
      description: 'Analyzed large datasets using Python and implemented machine learning algorithms for predictive analysis.',
      achievements: ['Built ML models with 92% accuracy', 'Improved decision-making by 10%', 'Enhanced predictive analysis by 18%', 'Drove 12% operational efficiency']
    },
    {
      type: 'education',
      year: '2021 - 2025',
      title: 'Bachelor of Engineering in Computer Science',
      company: 'Savitribai Phule Pune University',
      description: 'Currently pursuing B.E. in Computer Science with excellent academic performance and active participation in tech communities.',
      achievements: ['SGPA: 9.36', 'Lead of DataScience, Linux Club', 'Hacktoberfest 2024 Certified Contributor']
    },
    {
      type: 'education',
      year: '2019 - 2021',
      title: 'Higher Secondary Certificate (HSC)',
      company: 'Shri Santaji Junior College',
      description: 'Completed HSC in Maharashtra Board with distinction, building a strong foundation in science and mathematics.',
      achievements: ['88.40% in Maharashtra Board', 'Science Stream', 'Academic Excellence Award']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [stat.label.toLowerCase().replace(/[^a-z]/g, '')]: Math.floor(current)
        }));
      }, 30 + index * 10);
    });
  };

  return (
    <section id="about" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-900 dark:to-black overflow-hidden">
      {/* Background Elements - Optimized for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/10 dark:bg-purple-700/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/10 dark:bg-pink-700/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23A855F7%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M50%2050m-25%200a25%2C25%200%201%2C1%2050%2C0a25%2C25%200%201%2C1%20-50%2C0%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 dark:opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header - Mobile Optimized */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400 dark:to-purple-600 mr-2 sm:mr-4" />
            <span className="text-purple-400 dark:text-purple-500 font-semibold tracking-widest text-xs sm:text-sm">ABOUT ME</span>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400 dark:to-purple-600 ml-2 sm:ml-4" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white dark:text-gray-100 mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-white to-purple-200 dark:from-gray-100 dark:to-purple-300 bg-clip-text text-transparent">
              Software Engineer & Developer
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Passionate about building high-performance, responsive web applications and leveraging data science to create impactful digital solutions.
          </p>
        </div>

        {/* Stats Section - Mobile Grid Optimized */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-600/20 dark:to-pink-600/20 backdrop-blur-sm border border-white/10 dark:border-gray-700/50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 dark:text-purple-500" />
                </div>
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-full flex items-center justify-center">
                  <Star className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white dark:text-gray-200" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white dark:text-gray-100 mb-1 sm:mb-2">
                {index === 0 ? counters.projectscompleted || 0 : 
                 index === 1 ? counters.communitymembers || 0 :
                 index === 2 ? counters.yearsexperience || 0 :
                 counters.certifications || 0}{stat.suffix}
              </div>
              <div className="text-gray-400 dark:text-gray-500 font-medium text-xs sm:text-sm leading-tight px-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid - Mobile Stack */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column - Personal Info */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm border border-white/10 dark:border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-white/10 dark:hover:bg-gray-800/50 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-100 mb-4 sm:mb-6 flex items-center">
                <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400 dark:text-purple-500 mr-2 sm:mr-3" />
                My Story
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                <p>
                  Hi, I'm Abhishek Katale – a passionate Software Engineer & Web Developer with expertise in 
                  building high-performance, responsive, and visually engaging websites using React.js, Tailwind CSS, 
                  JavaScript, and modern frontend tools. I also have hands-on experience in Data Science and Machine Learning using Python.
                </p>
                <p>
                  I bring not just code, but clarity, creativity, and commitment to every project. My recent work includes 
                  building architecture portfolio websites, e-commerce platforms, and ML models with 92% accuracy. 
                  As a community leader and Hacktoberfest contributor, I believe in continuous learning and knowledge sharing.
                </p>
              </div>

              {/* Quick Facts - Mobile Optimized */}
              <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                {[
                  { label: 'Location', value: 'Pune, Maharashtra, India' },
                  { label: 'Education', value: 'B.E. Computer Science (SGPA: 9.36)' },
                  { label: 'Specialties', value: 'React.js, Python, Data Science' },
                  { label: 'Leadership', value: 'Lead of DataScience, Linux Club' }
                ].map((fact, index) => (
                  <div key={fact.label} className="flex items-start sm:items-center">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400 dark:text-purple-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="text-gray-400 dark:text-gray-500 text-sm sm:text-base sm:mr-2">{fact.label}:</span>
                      <span className="text-white dark:text-gray-300 font-medium text-sm sm:text-base">{fact.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills - Mobile Optimized */}
            <div className="mt-6 sm:mt-8 bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm border border-white/10 dark:border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-100 mb-4 sm:mb-6 flex items-center">
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400 dark:text-purple-500 mr-2 sm:mr-3" />
                Core Skills
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400 dark:text-purple-500 mr-2 sm:mr-3" />
                        <span className="text-white dark:text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 dark:text-purple-500 font-semibold text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/50 dark:group-hover:shadow-purple-600/50"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline - Mobile Optimized */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            {/* Tab Navigation - Mobile Optimized */}
            <div className="flex mb-6 sm:mb-8 bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1 sm:p-2 border border-white/10 dark:border-gray-700/50">
              {['experience', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 text-white dark:text-gray-100 shadow-lg'
                      : 'text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300'
                  }`}
                >
                  {tab === 'experience' ? (
                    <div className="flex items-center justify-center">
                      <Briefcase className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                      <span className="hidden xs:inline">Experience</span>
                      <span className="xs:hidden">Exp</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                      <span className="hidden xs:inline">Education</span>
                      <span className="xs:hidden">Edu</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Timeline - Mobile Optimized */}
            <div className="space-y-6 sm:space-y-8">
              {timeline
                .filter(item => item.type === activeTab)
                .map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3 sm:mr-6">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          {activeTab === 'experience' ? (
                            <Briefcase className="w-5 sm:w-6 h-5 sm:h-6 text-white dark:text-gray-200" />
                          ) : (
                            <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-white dark:text-gray-200" />
                          )}
                        </div>
                        {index < timeline.filter(item => item.type === activeTab).length - 1 && (
                          <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-purple-500/50 to-transparent dark:from-purple-600/50 dark:to-transparent ml-5 sm:ml-6 mt-3 sm:mt-4" />
                        )}
                      </div>
                      
                      <div className="flex-1 bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm border border-white/10 dark:border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 group-hover:bg-white/10 dark:hover:bg-gray-800/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-purple-400 dark:text-purple-500 font-semibold text-xs sm:text-sm tracking-wide">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-white dark:text-gray-100 mb-1">{item.title}</h4>
                        <p className="text-purple-300 dark:text-purple-400 font-medium mb-3 text-sm sm:text-base">{item.company}</p>
                        <p className="text-gray-300 dark:text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">{item.description}</p>
                        
                        <div className="space-y-1.5 sm:space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start text-xs sm:text-sm text-gray-400 dark:text-gray-500">
                              <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400 dark:text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAbout;