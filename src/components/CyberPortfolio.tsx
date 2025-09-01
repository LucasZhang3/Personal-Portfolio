
import { useState, useEffect } from 'react';
import { Terminal } from './Terminal';
import { Navigation } from './Navigation';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Timeline } from './sections/Timeline';
import { Contact } from './sections/Contact';

export const CyberPortfolio = () => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [currentSection, setCurrentSection] = useState('terminal');
  const [showNavigation, setShowNavigation] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(window.innerWidth < 1024);

  const handleTerminalComplete = () => {
    setShowTerminal(false);
    setShowNavigation(true);
    setCurrentSection('user');
  };

  const handleNavigate = (section: string) => {
    if (section === 'terminal') {
      setShowTerminal(true);
      setShowNavigation(false);
      setCurrentSection('terminal');
    } else {
      setShowTerminal(false);
      setShowNavigation(true);
      setCurrentSection(section);
    }
  };

  const handleToggleCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'terminal':
        return <Terminal onComplete={handleTerminalComplete} onNavigate={handleNavigate} />;
      case 'user':
        return <About />;
      case 'arsenal':
        return <Skills />;
      case 'case_files':
        return <Projects />;
      case 'attack_log':
        return <Timeline />;
      case 'communications':
        return <Contact />;
      default:
        return <Terminal onComplete={handleTerminalComplete} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-cyber-dark overflow-hidden">
      {/* CRT Overlay */}
      <div className="crt-overlay"></div>
      
      {/* Navigation */}
      {showNavigation && (
        <Navigation 
          currentSection={currentSection} 
          onNavigate={handleNavigate}
          isCollapsed={isNavCollapsed}
          onToggleCollapse={handleToggleCollapse}
        />
      )}
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        showNavigation ? (isNavCollapsed ? 'ml-16' : 'ml-64') : ''
      }`}>
        {renderSection()}
      </div>
    </div>
  );
};
