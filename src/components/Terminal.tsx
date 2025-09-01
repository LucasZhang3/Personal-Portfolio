
import { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  onComplete?: () => void;
  onNavigate?: (section: string) => void;
}

export const Terminal = ({ onComplete, onNavigate }: TerminalProps) => {
  const [step, setStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [hasPlayedSequence, setHasPlayedSequence] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const initSequence = [
    "Initiating secure connection...",
    "Port scan complete.",
    "Port 443: OPEN",
    "Port 80: OPEN", 
    "Port 22: OPEN",
    "Connected to: LUCAS-ZHANG.local",
    "Authorization granted.",
    "",
    ">_ Welcome to Lucas Zhang's Portfolio.",
    "Type a command or press a button to begin."
  ];

  useEffect(() => {
    // Check if sequence has been played this session
    const sequencePlayed = sessionStorage.getItem('terminalSequencePlayed');
    
    if (sequencePlayed) {
      setHasPlayedSequence(true);
      setStep(initSequence.length);
      setShowHelp(true);
      return;
    }

    // Play sequence for first time
    if (step < initSequence.length) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, step < 7 ? 800 : 1200);
      return () => clearTimeout(timer);
    } else {
      setShowHelp(true);
      sessionStorage.setItem('terminalSequencePlayed', 'true');
    }
  }, [step]);

  const commands = [
    { cmd: "user", desc: "Access subject profile" },
    { cmd: "arsenal", desc: "List available tools & skills" },
    { cmd: "case_files", desc: "View project repositories" },
    { cmd: "attack_log", desc: "Show progression timeline" },
    { cmd: "communications", desc: "Open communication channels" }
  ];

  const handleCommand = (command: string) => {
    if (onNavigate) {
      onNavigate(command);
    } else if (onComplete) {
      onComplete();
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = inputValue.toLowerCase().trim();
    const validCommands = ['user', 'arsenal', 'case_files', 'attack_log', 'communications'];
    
    if (validCommands.includes(command)) {
      handleCommand(command);
    }
    setInputValue('');
  };

  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark p-6 font-mono relative overflow-hidden">
      {/* CRT Overlay */}
      <div className="crt-overlay"></div>
      
      {/* Terminal Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="border border-cyber rounded-lg bg-cyber-card/20 backdrop-blur-sm shadow-cyber p-6">
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyber/30">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-cyber-pink"></div>
              <div className="w-3 h-3 rounded-full bg-cyber-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
            </div>
            <span className="text-sm text-cyber-blue">lucas@portfolio:~$</span>
          </div>

          {/* Terminal Output */}
          <div className="space-y-2 mb-6">
            {!hasPlayedSequence && initSequence.slice(0, step).map((line, index) => (
              <div key={index} className="text-cyber-green">
                {line.startsWith('>_') ? (
                  <span className="text-cyber-blue">{line}</span>
                ) : (
                  line
                )}
              </div>
            ))}
            {(step >= initSequence.length || hasPlayedSequence) && (
              <div 
                className="flex items-center cursor-text" 
                onClick={handleInputClick}
              >
                <span className="text-cyber-blue mr-2">$</span>
                <form onSubmit={handleInputSubmit} className="flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="bg-transparent border-none outline-none text-cyber-green w-full"
                    placeholder=""
                    autoFocus
                  />
                </form>
                <span className={showCursor ? "cursor-blink text-cyber-green" : "text-cyber-green"}>_</span>
              </div>
            )}
          </div>

          {/* Help Menu */}
          {showHelp && (
            <div className="animate-fadeInUp">
              <div className="text-white mb-4">Available Commands:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {commands.map((cmd, index) => (
                  <button
                    key={index}
                    onClick={() => handleCommand(cmd.cmd)}
                    className="text-left p-3 rounded border border-cyber/30 bg-cyber-card/30 hover:bg-cyber-card/50 hover:border-cyber hover:shadow-cyber transition-all duration-300 group"
                  >
                    <div className="text-cyber-green group-hover:glow">{cmd.cmd}</div>
                    <div className="text-xs text-white">{cmd.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
