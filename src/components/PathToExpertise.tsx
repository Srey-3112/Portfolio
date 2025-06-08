
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const PathToExpertise = () => {
  const courses = [
    'Web Technologies',
    'Database Systems',
    'Artificial Intelligence and Machine Learning',
    'Leadership of Innovation'
  ];

  return (
    <section id="experience" className="py-20 bg-portfolio-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Path to <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left - University Info */}
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">McMaster University</h3>
                <h3 className="text-xl font-semibold text-white">Hamilton, Ontario</h3>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-2">
                Master's of Engineering in Systema and Technology
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Specializing in creating robust and scalable software systems that solve real-world problems.
              </p>
            </div>
          </div>

          {/* Center - USC Logo */}
          <div className="flex justify-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="w-80 h-80 glass-card rounded-3xl flex items-center justify-center relative overflow-hidden">
              <img
                src="/Portfolio/Images/mcmasterlogo.webp"
                alt="McMaster Logo"
                className="w-60 h-60 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right - Course Work */}
          <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white">Course Work</h3>
            </div>

            <div className="space-y-3">
              {courses.map((course, index) => (
                <div
                  key={course}
                  className="glass-card p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                  style={{animationDelay: `${0.6 + index * 0.1}s`}}
                >
                  <p className="text-gray-300">{course}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>Expected Graduation Date - June, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathToExpertise;
