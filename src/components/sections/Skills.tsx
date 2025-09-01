
import { useState } from 'react';
import { Code, Shield, Wrench } from 'lucide-react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = {
    languages: {
      title: 'Programming Languages',
      icon: Code,
      items: [
        'Python',
        'Java',
        'C++',
        'Assembly (x86/x64)',
        'HTML',
        'CSS',
        'JavaScript',
        'Arduino',
        'Rust',
        'Go'
      ]
    },
    frameworks: {
      title: 'Frameworks & APIs',
      icon: Wrench,
      items: [
        'ImGui',
        'WinAPI',
        'DirectX',
        'PyTorch',
        'YOLOv5',
        'React',
        'TailwindCSS',
        'Vite',
        'Node.js',
        'Electron'
      ]
    },
    security: {
      title: 'Cybersecurity',
      icon: Shield,
      items: [
        'Reverse Engineering',
        'DLL Injection',
        'Code Injection',
        'Memory Manipulation',
        'Hooking',
        'API Interception',
        'Kernel Driver Development',
        'Network Security',
        'Packet Analysis'
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <div className="min-h-screen bg-cyber-dark p-6 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyber-green mb-2 glitch" data-text="> load arsenal">
            &gt; load arsenal
          </h1>
          <div className="h-px bg-gradient-to-r from-cyber-blue to-transparent"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => {
            const { title, icon: Icon } = skillCategories[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-4 py-2 rounded border transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-cyber-blue/20 border-cyber-blue text-cyber-blue shadow-cyber glow'
                    : 'border-cyber/30 hover:border-cyber hover:bg-cyber-card/30'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].items.map((skill) => (
            <div
              key={skill}
              className="border border-cyber/30 bg-cyber-card/20 backdrop-blur-sm p-4 rounded-lg hover:border-cyber hover:shadow-cyber transition-all duration-300"
            >
              <h3 className="font-bold text-cyber-green text-center">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
