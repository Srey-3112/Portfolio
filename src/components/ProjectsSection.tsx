
import { ExternalLink, Github } from 'lucide-react';
import stock from '../assests/Images/stockproject.png';
import watchwave from '../assests/Images/watchwaveproject.png';
import CBT from '../assests/Images/CBT.png';

const ProjectsSection = () => {
  const projects = [
    {
      title: "StockXpert: Real-Time Trading & Analytics Platform",
      description: "Developed a responsive stock trading platform using Angular and Node.js, reducing load times by 60%. Integrated real-time data via Finnhub and Polygon.io APIs and enhanced user analytics with MongoDB and Highcharts.",
      technologies: ["Angular", "NodeJS", "MongoDB", "GCP"],
      image: stock,
      github: "",
      demo: "https://drive.google.com/file/d/1PnAILv0GjZgYgMYiafdlGomfxlPa4XFF/view?usp=drive_link"
    },
    {
      title: "WatchWave: Real-Time Video Streaming Platform",
      description: "Built a dynamic video streaming platform using ReactJS and Material UI, integrating YouTube REST API for real-time content. Delivered a responsive, immersive UI with seamless navigation and deployed it on Netlify for uninterrupted access.",
      technologies: ["React", "Material UI", "Tailwind CSS", "Rest API"],
      image: watchwave,
      github: "https://github.com/Srey-3112/WatchWave",
      demo: "https://watchwave.netlify.app/"
    },
    {
      title: "Computer Based Testing: Secure Online Exam Platform",
      description: "Created a mobile-responsive exam platform using Django, reducing test time by 40%. Implemented role-based access with multi-factor authentication and real-time notifications, enhancing security and boosting user engagement by 50%.",
      technologies: ["Python", "Django", "MySql", "Authentication"],
      image: CBT,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Projects That <br />
            <span className="gradient-text">Define My Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center space-x-4 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
