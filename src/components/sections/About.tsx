
import { useState, useEffect } from 'react';
import { Shield, Code, BookOpen, Target } from 'lucide-react';

export const About = () => {
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const profileData = {
    name: 'Lucas Zhang',
    age: 16,
    location: 'Peoria, Arizona',
    classification: 'High School Operative',
    clearance: 'Junior',
    school: 'BASIS Peoria',
    gpa: '3.6 UW / 4.6 W',
    graduation: '2027',
    status: 'ACTIVE'
  };

  const description = "Curious enough to break it, skilled enough to fix it.";

  const focusAreas = [
    'Reverse Engineering',
    'Low-Level Programming',
    'Exploit Development',
    'Cyber Defense',
    'Offensive Security',
    'Machine Learning',
    'Web Systems Development',
    'Kernel Level Development'
  ];

  useEffect(() => {
    setShowContent(true);
    
    // Typing effect for description
    let index = 0;
    const timer = setInterval(() => {
      if (index < description.length) {
        setTypedText(description.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Years Coding', value: '4+', icon: Code },
    { label: 'Projects Built', value: '10+', icon: Target },
    { label: 'Languages Known', value: '6+', icon: BookOpen },
    { label: 'Relevant Courses', value: '8+', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark p-6 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyber-green mb-2 glitch" data-text="> access user">
            &gt; access user
          </h1>
          <div className="h-px bg-gradient-to-r from-cyber-blue to-transparent"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className={`border border-cyber bg-cyber-card/20 backdrop-blur-sm p-6 rounded-lg shadow-cyber transition-all duration-1000 ${showContent ? 'animate-fadeInUp' : 'opacity-0'}`}>
              {/* Profile Image */}
              <div className="w-32 h-32 mx-auto mb-6 border border-cyber-green rounded-lg overflow-hidden bg-cyber-green/10">
                <img 
                  src="/assets/profile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-left"
                />
              </div>

              {/* Profile Data */}
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-cyber/20">
                  <span className="text-cyber-yellow">Name:</span>
                  <span className="text-cyber-blue font-mono">{profileData.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-cyber/20">
                  <span className="text-cyber-yellow">Age:</span>
                  <span className="text-cyber-blue font-mono">{profileData.age}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-cyber/20">
                  <span className="text-cyber-yellow">Location:</span>
                  <span className="text-cyber-blue font-mono">{profileData.location}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-cyber/20">
                  <span className="text-cyber-yellow">Class:</span>
                  <span className="text-cyber-blue font-mono">{profileData.classification}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-cyber/20">
                  <span className="text-cyber-yellow">Clearance:</span>
                  <span className="text-cyber-blue font-mono">{profileData.clearance}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-cyber/20">
                  <span className="text-cyber-yellow">School:</span>
                  <span className="text-cyber-blue font-mono">{profileData.school}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-cyber/20">
                  <span className="text-cyber-yellow">GPA:</span>
                  <span className="text-cyber-blue font-mono">3.9 UW / 4.8 W</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-cyber-yellow">Grad:</span>
                  <span className="text-cyber-blue font-mono">{profileData.graduation}</span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
                <span className="text-cyber-green text-sm">ONLINE</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className={`border border-cyber bg-cyber-card/20 backdrop-blur-sm p-6 rounded-lg shadow-cyber transition-all duration-1000 delay-300 ${showContent ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <h2 className="text-xl text-cyber-green mb-4">[SUBJECT_ANALYSIS]</h2>
              <div className="text-cyber-blue leading-relaxed font-mono">
                {typedText}
                <span className="cursor-blink">|</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`border border-cyber bg-cyber-card/20 backdrop-blur-sm p-4 rounded-lg shadow-cyber hover:shadow-lg hover:border-cyber-blue transition-all duration-500 ${showContent ? 'animate-fadeInUp' : 'opacity-0'}`}
                    style={{ animationDelay: `${600 + index * 200}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-8 h-8 text-cyber-yellow glow" />
                      <div>
                        <div className="text-2xl font-bold text-cyber-green">{stat.value}</div>
                        <div className="text-sm text-white">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Focus Areas */}
            <div className={`border border-cyber bg-cyber-card/20 backdrop-blur-sm p-6 rounded-lg shadow-cyber transition-all duration-1000 delay-700 ${showContent ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <h2 className="text-xl text-cyber-green mb-4">[FOCUS_AREAS]</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {focusAreas.map((area, index) => (
                  <div
                    key={index}
                    className="border border-cyber/30 bg-cyber-card/30 backdrop-blur-sm p-3 rounded-lg hover:border-cyber hover:shadow-cyber transition-all duration-300"
                  >
                    <div className="text-cyber-blue font-mono text-sm">{area}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
