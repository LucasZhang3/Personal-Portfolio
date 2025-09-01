import { useState, useEffect } from 'react';
import { FileText, Lock, Unlock, AlertTriangle, Zap } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [decryptingIndex, setDecryptingIndex] = useState(-1);

  const projects = [
    {
      id: 'hand_led',
      filename: 'hand_led_arduino.py',
      title: 'Gesture LED Controller',
      status: 'decrypted',
      threat_level: 'LOW',
      icon: '✋',
      description: 'Arduino-based gesture recognition system that counts fingers using analog input and controls LED arrays.',
      details: [
        'Analog sensor input processing',
        'Real-time finger counting algorithm',
        'LED matrix control and patterns',
        'Hardware-software integration'
      ],
      tech: ['Arduino', 'C++', 'Analog Sensors', 'LED Control']
    },
    {
      id: 'spotify_controller',
      filename: 'spotify_controller_display.py',
      title: 'Spotify Controller Display with Arduino Mega',
      status: 'decrypted',
      threat_level: 'LOW',
      icon: '🎵',
      description: 'Arduino Mega with 16x2 LCD display and joystick module for live Spotify playback info display. Shows current song, artist, and progress with scrollable text.',
      details: [
        'Arduino Mega integration with 16x2 LCD display',
        'Joystick module for text scrolling navigation',
        'Live Spotify Web API data fetching via Python',
        'Serial communication between Python and Arduino'
      ],
      tech: ['Arduino', 'Python', 'Spotify Web API', 'pyserial', 'spotipy']
    },
    {
      id: 'network_scanner',
      filename: 'network_scanner.py',
      title: 'Network Scanner',
      status: 'decrypted',
      threat_level: 'MEDIUM',
      icon: '🌐',
      description: 'Advanced subnet scanner using raw ARP requests to discover active devices on local networks.',
      details: [
        'Custom ARP packet crafting and injection',
        'Real-time IP/MAC address enumeration', 
        'Multi-threaded scanning for performance',
        'Built with Python raw sockets'
      ],
      tech: ['Python', 'Raw Sockets', 'ARP Protocol', 'Threading']
    },
    {
      id: 'ip_analyzer',
      filename: 'ip_analysis_tool.py',
      title: 'IP Threat Analyzer',
      status: 'decrypted',
      threat_level: 'MEDIUM',
      icon: '🔍',
      description: 'Automated threat intelligence tool that queries public APIs to analyze IP addresses for malicious activity.',
      details: [
        'Integration with multiple threat intel APIs',
        'Automated report generation and categorization',
        'Bulk IP analysis with rate limiting',
        'JSON output for further processing'
      ],
      tech: ['Python', 'REST APIs', 'JSON', 'Threat Intelligence']
    },
    {
      id: 'file_metadata_tool',
      filename: 'file_metadata_tool.py',
      title: 'File Metadata Tool',
      status: 'decrypted',
      threat_level: 'MEDIUM',
      icon: '📄',
      description: 'Lightweight Streamlit web app for extracting and removing metadata from images, PDFs, and Word documents to protect privacy.',
      details: [
        'Extract metadata from JPG, PNG, PDF, and DOCX files',
        'Remove hidden metadata to protect privacy',
        'Web-based interface built with Streamlit',
        'Reveals author, creation dates, GPS location data'
      ],
      tech: ['Python', 'Streamlit', 'python-docx', 'pikepdf']
    },
    {
      id: 'arizona_soil_analysis',
      filename: 'arizona_soil_analysis',
      title: 'Arizona Soil Metals Explorer – Bluvia',
      status: 'decrypted',
      threat_level: 'HIGH',
      icon: '🌍',
      description: 'Ryniant Sciences Environmental Health Initiative - A scalable web app designed to predict and display heavy metal concentrations in soil across Arizona.',
      details: [
        'Interactive Arizona map with clickable locations',
        'Predicted concentrations of metals in soil (Fe, Cr, Mn, Mo, In, Ta)',
        'Health and safety risk scores based on predictions',
        'Public health alerts for dangerous contamination levels',
        'Real-time data visualization and mapping'
      ],
      tech: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Google Maps API', 'Lucide', 'ESLint']
    },
    {
      id: 'minecraft_triggerbot',
      filename: 'minecraft_yolo_triggerbot.py',
      title: 'Minecraft Zombie YOLOv5 Triggerbot',
      status: 'decrypted',
      threat_level: 'HIGH',
      icon: '🧟',
      description: 'Custom-trained YOLOv5 model for real-time zombie detection in Minecraft with automatic attack functionality and configurable GUI controls.',
      details: [
        'Custom YOLOv5 model trained for Minecraft zombie detection',
        'Real-time game window capture and analysis',
        'Automatic attack simulation with configurable distance threshold',
        'GUI interface for delay and distance adjustment'
      ],
      tech: ['Python', 'PyTorch', 'YOLOv5', 'OpenCV', 'pyautogui', 'keyboard']
    },
    {
      id: 'yolo_turret',
      filename: 'yolov5_turret.py',
      title: 'AI Tracking Turret',
      status: 'decrypted',
      threat_level: 'CRITICAL',
      icon: '🎯',
      description: 'Autonomous 2-axis turret system powered by YOLOv5 object detection for real-time target tracking.',
      details: [
        'YOLOv5 real-time object detection integration',
        'Servo motor control for 2-axis movement',
        'Computer vision pipeline optimization',
        'Live target tracking and following'
      ],
      tech: ['Python', 'YOLOv5', 'OpenCV', 'Arduino', 'Servo Control']
    }
  ];

  const handleProjectClick = (project, index) => {
    if (project.status === 'encrypted') return;
    
    setDecryptingIndex(index);
    setTimeout(() => {
      setSelectedProject(project);
      setDecryptingIndex(-1);
    }, 1500);
  };

  const getThreatColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-cyber-green';
      case 'MEDIUM': return 'text-cyber-yellow';
      case 'HIGH': return 'text-cyber-blue';
      case 'CRITICAL': return 'text-cyber-pink';
      default: return 'text-cyber-green';
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark p-6 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyber-green mb-2 glitch" data-text="> access case_files">
            &gt; access case_files
          </h1>
          <div className="h-px bg-gradient-to-r from-cyber-blue to-transparent"></div>
          <div className="mt-4 text-cyber-blue font-mono">
            /home/lucas/projects/ | {projects.length} files found
          </div>
        </div>

        {!selectedProject ? (
          /* File System View */
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project, index)}
                className={`border bg-cyber-card/20 backdrop-blur-sm p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  decryptingIndex === index
                    ? 'border-cyber-yellow shadow-lg animate-pulse'
                    : project.status === 'decrypted'
                    ? 'border-cyber/30 hover:border-cyber hover:shadow-cyber'
                    : 'border-red-500/30 hover:border-red-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{project.icon}</div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-cyber-blue" />
                        <span className="font-mono text-cyber-green">{project.filename}</span>
                        {project.status === 'decrypted' ? (
                          <Unlock className="w-4 h-4 text-cyber-green" />
                        ) : (
                          <Lock className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                      <p className="text-sm text-white mt-1">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-sm font-bold ${getThreatColor(project.threat_level)}`}>
                      {project.threat_level}
                    </div>
                    <div className="text-xs text-white">THREAT LEVEL</div>
                  </div>
                </div>

                {decryptingIndex === index && (
                  <div className="mt-4 text-cyber-yellow animate-pulse">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4" />
                      <span>DECRYPTING FILE...</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Project Detail View */
          <div className="space-y-6">
            <button
              onClick={() => setSelectedProject(null)}
              className="text-cyber-blue hover:text-cyber-green transition-colors"
            >
              ← Back to file system
            </button>

            <div className="border border-cyber bg-cyber-card/20 backdrop-blur-sm p-6 rounded-lg shadow-cyber">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{selectedProject.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-cyber-green">{selectedProject.title}</h2>
                    <p className="text-cyber-blue font-mono">{selectedProject.filename}</p>
                    <div className={`text-sm font-bold mt-2 ${getThreatColor(selectedProject.threat_level)}`}>
                      THREAT LEVEL: {selectedProject.threat_level}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg text-cyber-yellow mb-3">[PROJECT_OVERVIEW]</h3>
                <p className="text-white leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg text-cyber-yellow mb-3">[TECHNICAL_DETAILS]</h3>
                <ul className="space-y-2">
                  {selectedProject.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-cyber-green">▸</span>
                      <span className="text-white">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg text-cyber-yellow mb-3">[TECHNOLOGIES_USED]</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyber-blue/20 border border-cyber-blue rounded-full text-cyber-blue text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
