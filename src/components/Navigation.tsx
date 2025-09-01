
import { Terminal, User, Code, FolderOpen, Clock, MessageCircle, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Navigation = ({ currentSection, onNavigate, isCollapsed, onToggleCollapse }: NavigationProps) => {
  const navItems = [
    { id: 'terminal', label: 'Terminal', icon: Terminal },
    { id: 'user', label: 'User', icon: User },
    { id: 'arsenal', label: 'Arsenal', icon: Code },
    { id: 'case_files', label: 'Case Files', icon: FolderOpen },
    { id: 'attack_log', label: 'Attack Log', icon: Clock },
    { id: 'communications', label: 'Communications', icon: MessageCircle }
  ];

  return (
    <nav className={`fixed top-0 left-0 h-full bg-cyber-card/90 backdrop-blur-sm border-r border-cyber/30 z-50 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-cyber/30 flex items-center justify-between">
        <div className={`transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
          <h1 className="text-cyber-green font-bold text-lg glitch" data-text="Lucas Zhang">
            Lucas Zhang
          </h1>
          <p className="text-xs text-white">v1.0.0</p>
        </div>
        <button
          onClick={onToggleCollapse}
          className="text-cyber-green hover:text-cyber-blue transition-colors duration-200 p-1"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation Items */}
      <div className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center transition-all duration-300 rounded ${
                isCollapsed ? 'justify-center p-3' : 'space-x-3 p-3'
              } ${
                isActive 
                  ? 'bg-cyber-blue/20 border border-cyber-blue text-cyber-blue shadow-cyber' 
                  : 'hover:bg-cyber-card/50 border border-transparent hover:border-cyber/30'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'glow' : ''}`} />
              <span className={`transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden absolute' : 'opacity-100'} ${isActive ? 'glow' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Status Indicator */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className={`text-xs transition-all duration-300 ${isCollapsed ? 'flex justify-center' : 'flex justify-center'}`}>
          <div className="flex items-center space-x-2 text-cyber-green">
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
            <span className={`transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              SYSTEM ONLINE
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
