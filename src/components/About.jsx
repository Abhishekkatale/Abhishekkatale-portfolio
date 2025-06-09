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
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23A855F7%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M50%2050m-25%200a25%2C25%200%201%2C1%2050%2C0a25%2C25%200%201%2C1%20-50%2C0%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400 mr-4" />
            <span className="text-purple-400 font-semibold tracking-widest text-sm">ABOUT ME</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400 ml-4" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Software Engineer & Developer
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about building high-performance, responsive web applications and leveraging data science to create impactful digital solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {index === 0 ? counters.projectscompleted || 0 : 
                 index === 1 ? counters.communitymembers || 0 :
                 index === 2 ? counters.yearsexperience || 0 :
                 counters.certifications || 0}{stat.suffix}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Heart className="w-6 h-6 text-purple-400 mr-3" />
                My Story
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
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

              {/* Quick Facts */}
              <div className="mt-8 space-y-3">
                {[
                  { label: 'Location', value: 'Pune, Maharashtra, India' },
                  { label: 'Education', value: 'B.E. Computer Science (SGPA: 9.36)' },
                  { label: 'Specialties', value: 'React.js, Python, Data Science' },
                  { label: 'Leadership', value: 'Lead of DataScience, Linux Club' }
                ].map((fact, index) => (
                  <div key={fact.label} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-400 mr-2">{fact.label}:</span>
                    <span className="text-white font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 text-purple-400 mr-3" />
                Core Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="w-5 h-5 text-purple-400 mr-3" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/50"
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

          {/* Right Column - Timeline */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            {/* Tab Navigation */}
            <div className="flex mb-8 bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              {['experience', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab === 'experience' ? (
                    <div className="flex items-center justify-center">
                      <Briefcase className="w-5 h-5 mr-2" />
                      Experience
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Education
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {timeline
                .filter(item => item.type === activeTab)
                .map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          {activeTab === 'experience' ? (
                            <Briefcase className="w-6 h-6 text-white" />
                          ) : (
                            <GraduationCap className="w-6 h-6 text-white" />
                          )}
                        </div>
                        {index < timeline.filter(item => item.type === activeTab).length - 1 && (
                          <div className="w-0.5 h-16 bg-gradient-to-b from-purple-500/50 to-transparent ml-6 mt-4" />
                        )}
                      </div>
                      
                      <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-purple-400 font-semibold text-sm tracking-wide">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-purple-300 font-medium mb-3">{item.company}</p>
                        <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                        
                        <div className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-400">
                              <ArrowRight className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                              {achievement}
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