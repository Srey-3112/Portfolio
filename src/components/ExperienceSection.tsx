
import { Calendar, MapPin, Building2, ArrowUpRight, Zap, Star, Trophy, Target } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      
      company: "Hatch",
      role: "Junior Software Developer Co-op",
      period: "Sep 2024 - Dec 2024",
      location: "On-Site",
      description: "Developed a Python-based data automation pipeline for NASA’s hydrological datasets, converting complex .nc4 files into structured Excel outputs. Engineered data consistency with timestamp aggregation and built LSTM-based models achieving 82.2% accuracy for water inflow prediction.",
      logo: "public/Images/hatch.jpeg",
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
      logo: "public/Images/grownitedlogo.png",
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
              <div className="relative group">
                
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-black rounded-full border-4 border-white z-10 hidden md:block"></div>

                <div className="md:ml-20">
                  <div className="bg-black border border-white rounded-lg p-8 hover:border-primary/30 transition-all duration-300">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-black border border-black rounded-lg p-1 flex items-center justify-center">
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
                        
                        <div>
                          <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
                          <p className="text-lg text-primary font-medium">{experience.role}</p>
                        </div>
                      </div>
                      
                      <div className="text-right text-sm text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20"
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
