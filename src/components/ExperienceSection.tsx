import { Calendar, MapPin, Building2, ArrowUpRight, Zap, Star, Trophy, Target } from 'lucide-react';
import Hatch from '../assests/Images/hatch.jpeg';
import Grownited from '../assests/Images/grownitedlogo.png';


const ExperienceSection = () => {
  const experiences = [
    {
      
      company: "Hatch",
      role: "Junior Software Developer Co-op",
      period: "Sep 2024 - Dec 2024",
      location: "On-Site",
      description: "Developed a Python-based data automation pipeline for NASA's hydrological datasets, converting complex .nc4 files into structured Excel outputs. Engineered data consistency with timestamp aggregation and built LSTM-based models achieving 82.2% accuracy for water inflow prediction.",
      logo: Hatch,
      technologies: ["Python","Machine Learning","Pandas","LSTM"],
      achievements: ["Automated extraction and transformation of large-scale NASA datasets", "Achieved 82.2% accuracy and RMSE of 3.61 with LSTM-based prediction", "Enhanced time-series consistency across 30,000+ records"],
      highlight: "Most Recent"
    },
    {
      
      company: "Grownited Pvt.Ltd",
      role: "Software Developer Intern",
      period: "Jan 2023 - May 2023",
      location: "Remote",
      description: "Orchestrated the development of a full-stack e-commerce platform using the MERN stack, boosting website traffic by 30% through responsive design and MongoDB query optimization. Led backend scaling with Node.js and revamped the frontend with React to enhance user experience and engagement.",
      logo: Grownited,
      technologies: ["MongoDB", "ReactJS", "REST APIs", "NodeJS","ExpressJS","Database Optimization"],
      achievements: ["30% increase in website traffic through responsive design", "15% boost in user satisfaction with modern UI/UX", "Scalable backend performance under high load"],
      highlight: "Performance Focus"
    }
  ];

  return (
    <section className="py-20  bg-portfolio-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-3 px-6 py-2 bg-card rounded-full border border-border mb-8">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Professional Experience</span>
          </div> */}
          
          <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>
          
          <p className="text-xl text-white max-w-2xl mx-auto">
            Building innovative solutions through strategic development
          </p>
        </div>

        {/* Simple Timeline */}
        <div className="relative">
          {/* Clean vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div className="relative group" key={index}>
                
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-black rounded-full border-4 border-white z-10 hidden md:block"></div>

                <div className="md:ml-20">
                  <div className="bg-black border border-white rounded-lg p-4 sm:p-6 lg:p-8 hover:border-primary/30 transition-all duration-300">
                    
                    {/* Header - Mobile Responsive */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black border border-black rounded-lg p-1 flex items-center justify-center flex-shrink-0">
                          <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = '<Building2 class="w-8 h-8 text-primary" />';
                              }
                            }}
                          />
                        </div>
                        
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-white break-words">{experience.company}</h3>
                          <p className="text-base sm:text-lg text-primary font-medium break-words">{experience.role}</p>
                        </div>
                      </div>
                      
                      {/* Date and Location - Mobile Responsive */}
                      <div className="text-left sm:text-right text-sm text-white flex-shrink-0">
                        <div className="flex items-center gap-2 mb-1 sm:justify-end">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2 sm:justify-end">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white leading-relaxed mb-6 text-sm sm:text-base">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary flex-shrink-0" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 sm:px-3 bg-primary/10 text-primary text-xs sm:text-sm rounded-md border border-primary/20 whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;