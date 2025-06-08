
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-t from-portfolio-dark to-portfolio-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400">sreypatel3112@gmail.com</p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
              <Phone className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+1 (365) 883-4221</p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-gray-400">Hamilton, Ontario</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Srey-3112"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/srey-patel/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
          </a>
          <a
            href="mailto:sreypatel3112@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-green-400" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-gray-400">
            © 2024 Srey Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
