
import { Mail, Github, Phone } from 'lucide-react';

export const Contact = () => {
  const protocols = [
    {
      id: 'email',
      name: 'Email Protocol',
      icon: Mail,
      address: 'lucaszhang1118@gmail.com',
      command: 'nc -v lucaszhang1118@gmail.com 1337',
      description: 'Standard electronic communication channel'
    },
    {
      id: 'github',
      name: 'Git Repository',
      icon: Github,
      address: 'github.com/LucasZhang3',
      command: 'ssh github.com/LucasZhang3',
      description: 'Code repository and project showcase'
    },
    {
      id: 'phone',
      name: 'Voice Channel',
      icon: Phone,
      address: '+1-602-580-5905',
      command: 'call +1-602-580-5905',
      description: 'Secure voice communication line'
    }
  ];

  const getProtocolLink = (protocol) => {
    switch (protocol.id) {
      case 'email':
        return `mailto:${protocol.address}`;
      case 'github':
        return `https://${protocol.address}`;
      case 'phone':
        return `tel:${protocol.address}`;
      default:
        return '#';
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark p-6 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyber-green mb-2 glitch" data-text="> init communications">
            &gt; init communications
          </h1>
          <div className="h-px bg-gradient-to-r from-cyber-blue to-transparent"></div>
          <div className="mt-4 text-cyber-blue font-mono">
            Establishing secure communication channels...
          </div>
        </div>

        {/* Protocol List */}
        <div className="space-y-6">
          <h2 className="text-xl text-cyber-yellow">Available Protocols:</h2>
          
          {protocols.map((protocol) => {
            const Icon = protocol.icon;
            
            return (
              <div
                key={protocol.id}
                className="border border-cyber/30 bg-cyber-card/20 backdrop-blur-sm p-4 rounded-lg hover:border-cyber hover:shadow-cyber transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <Icon className="w-6 h-6 text-cyber-green" />
                  <div>
                    <h3 className="font-bold text-cyber-green">{protocol.name}</h3>
                    <p className="text-sm text-white">{protocol.description}</p>
                  </div>
                </div>
                
                <div className="bg-cyber-dark/50 p-3 rounded font-mono text-sm text-cyber-blue mb-3">
                  {protocol.command}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyber-yellow font-mono">{protocol.address}</span>
                  <a
                    href={getProtocolLink(protocol)}
                    target={protocol.id === 'github' ? '_blank' : '_self'}
                    rel={protocol.id === 'github' ? 'noopener noreferrer' : ''}
                    className="px-3 py-1 bg-cyber-green/20 border border-cyber-green rounded text-cyber-green hover:bg-cyber-green/30 hover:glow transition-all duration-300"
                  >
                    CONNECT
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Connection Status */}
        <div className="mt-12 border border-cyber bg-cyber-card/20 backdrop-blur-sm p-6 rounded-lg shadow-cyber">
          <h3 className="text-lg text-cyber-yellow mb-4">[SYSTEM_STATUS]</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse mx-auto mb-2"></div>
              <div className="text-cyber-green text-sm">Email Online</div>
            </div>
            <div>
              <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse mx-auto mb-2"></div>
              <div className="text-cyber-green text-sm">GitHub Active</div>
            </div>
            <div>
              <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse mx-auto mb-2"></div>
              <div className="text-cyber-green text-sm">Phone Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
