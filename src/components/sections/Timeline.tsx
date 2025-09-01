import { useState, useEffect } from 'react';
import { Users, Award, BookOpen, Briefcase } from 'lucide-react';

export const Timeline = () => {
  const [visibleEvents, setVisibleEvents] = useState(0);

  const timelineEvents = [
    {
      year: '2021',
      title: 'Joined Robotics Club',
      description: 'Started combining hardware and software development',
      type: 'club',
      icon: Users
    },
    {
      year: '2021',
      title: 'Joined Coding Club',
      description: 'Enhanced programming skills through collaborative projects',
      type: 'club',
      icon: Users
    },
    {
      year: '2022',
      title: 'Joined Math Club',
      description: 'Developed analytical and problem-solving skills',
      type: 'club',
      icon: Users
    },
    {
      year: '2023',
      title: 'Joined High School Speech and Debate',
      description: 'Started developing communication and analytical skills',
      type: 'club',
      icon: Users
    },
    {
      year: '2023',
      title: 'Computer Logic',
      description: 'Foundational course in computational thinking and logic systems',
      type: 'coursework',
      icon: BookOpen
    },
    {
      year: '2023',
      title: 'Intro to Circuits and Computing',
      description: 'Basics of electrical circuits and computing hardware',
      type: 'coursework',
      icon: BookOpen
    },
    {
      year: '2023',
      title: 'Became a Chemistry Teaching Assistant',
      description: 'Supported instruction, graded assignments, and assisted in labs for middle school chemistry at BASIS Peoria',
      type: 'leadership',
      icon: Award
    },
    {
      year: '2024',
      title: 'AP Precalculus',
      description: 'Advanced mathematical concepts in preparation for calculus',
      type: 'coursework',
      icon: BookOpen
    },
    {
      year: '2024',
      title: 'AP Computer Science Principles',
      description: 'Comprehensive introduction to computer science concepts',
      type: 'coursework',
      icon: BookOpen
    },
    {
      year: '2024',
      title: 'AP Physics 1',
      description: 'Algebra-based mechanics, systems, and basic dynamics',
      type: 'coursework',
      icon: BookOpen
    },
    {
      year: '2024',
      title: 'Worker at Jin\'s Sushi',
      description: 'Part-time work as a server',
      type: 'job',
      icon: Briefcase
    },
    {
      year: '2024',
      title: 'Middle School Debate Captain',
      description: 'Leadership role demonstrating communication and analytical skills',
      type: 'leadership',
      icon: Award
    },
    {
      year: '2025',
      title: 'AP Computer Science A',
      description: 'Advanced programming in Java and software development',
      type: 'coursework',
      icon: BookOpen
    },
    {
      year: '2025',
      title: 'AP Calculus AB',
      description: 'Introduction to differential and integral calculus',
      type: 'coursework',
      icon: BookOpen
    },
    {
      year: '2025',
      title: 'AP Physics 2',
      description: 'Advanced topics in electricity, magnetism, and modern physics',
      type: 'coursework',
      icon: BookOpen
    },
    {
      year: '2025',
      title: 'Frontend Intern – Bluvia (Ryniant Sciences)',
      description: 'Contributed to a real-world environmental health initiative at Ryniant Sciences. Worked on the frontend of a scalable web app that predicts and visualizes heavy metal concentrations in soil across Arizona.',
      type: 'internship',
      icon: Briefcase
    },
    {
      year: '2025',
      title: 'Calculus BC',
      description: 'Covers topics including sequences and series, parametric, polar, and vector functions.',
      type: 'coursework',
      icon: BookOpen
    },
    {
      year: '2025',
      title: 'Electrical Engineering Club',
      description: 'Working with Arduino hardware, circuits, and basic electronics projects.',
      type: 'club',
      icon: Users
    },
    {
      year: '2025',
      title: 'Machine Learning Club',
      description: 'Learning and applying machine learning concepts and algorithms.',
      type: 'club',
      icon: Users
    },
    {
      year: '2025',
      title: 'High School Debate Captain',
      description: 'Leadership role, organizing debates and coaching team members.',
      type: 'leadership',
      icon: Award
    },
    {
      year: '2025',
      title: 'Frontend Intern – Volneurum (Ryniant Sciences)',
      description: 'AI-driven drug research and discovery',
      type: 'internship',
      icon: Briefcase
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleEvents(prev => {
        if (prev < timelineEvents.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case 'club': return 'text-teal-400';
      case 'leadership': return 'text-yellow-400';
      case 'coursework': return 'text-green-400';
      case 'internship': return 'text-red-400';
      case 'job': return 'text-purple-400';
      default: return 'text-teal-400';
    }
  };

  const getTypeBg = (type) => {
    switch (type) {
      case 'club': return 'bg-teal-400/20 border-teal-400';
      case 'leadership': return 'bg-yellow-400/20 border-yellow-400';
      case 'coursework': return 'bg-green-400/20 border-green-400';
      case 'internship': return 'bg-red-400/20 border-red-400';
      case 'job': return 'bg-purple-400/20 border-purple-400';
      default: return 'bg-teal-400/20 border-teal-400';
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark p-6 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyber-green mb-2 glitch" data-text="> show attack_log">
            &gt; show attack_log
          </h1>
          <div className="h-px bg-gradient-to-r from-cyber-blue to-transparent"></div>
          <div className="mt-4 text-cyber-blue font-mono">
            Displaying chronological progression data...
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-cyber-green/30"></div>

          {/* Timeline events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isVisible = index < visibleEvents;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-start space-x-6 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                >
                  {/* Timeline marker */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center ${getTypeBg(event.type)}`}>
                    <Icon className={`w-6 h-6 ${getTypeColor(event.type)}`} />
                  </div>

                  {/* Event content */}
                  <div className="flex-1 pb-8">
                    <div className="border border-cyber bg-cyber-card/20 backdrop-blur-sm p-4 rounded-lg shadow-cyber">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-lg font-bold ${getTypeColor(event.type)}`}>
                          [{event.year}] {event.title}
                        </span>
                        <span className={`text-xs uppercase tracking-wider ${getTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                      {event.description && <p className="text-white">{event.description}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
