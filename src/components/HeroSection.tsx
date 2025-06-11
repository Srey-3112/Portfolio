
import { Github, Linkedin, Mail, Code, Database, Brain } from 'lucide-react';
import pimage from '../assests/Images/ProfileImage.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
                Software Developer
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Srey</span>{' '}
              <span className="gradient-text">Patel</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              Pioneering Next-Generation Software Solutions with a Commitment to Excellence and Innovation.
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-gray-400">
              <Code className="w-8 h-8 hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
              <Database className="w-8 h-8 hover:text-green-400 transition-colors duration-300 cursor-pointer" />
              <Brain className="w-8 h-8 hover:text-purple-400 transition-colors duration-300 cursor-pointer" />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Srey-3112"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-white/10 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/srey-patel/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-white/10 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
            </a>
            <a
              href="mailto:sreypatel3112@gmail.com"
              className="p-3 glass-card rounded-full hover:bg-white/10 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-green-400" />
            </a>
          </div>
        </div>

        {/* Right Side - Avatar */}
        <div className="flex justify-center lg:justify-end animate-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center animate-glow">
              <img
                src={pimage}
                alt="Deep Patel"
                className="w-72 h-72 lg:w-88 lg:h-88 rounded-full object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center animate-float">
              <span className="text-2xl">JS</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
              <span className="text-2xl">C++</span>
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
              <span className="text-lg">SQL</span>
            </div>
            <div className="absolute top-8 -left-8 w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
              <span className="text-xl">NodeJS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
