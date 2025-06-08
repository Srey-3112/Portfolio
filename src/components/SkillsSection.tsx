
import { Code, Database, Brain, Globe, Server, Smartphone } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "AngularJS", "Tailwind CSS", "JavaScript", "HTML5"],
      color: "blue"
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["NodeJS", "Python", "Express", "REST APIs"],
      color: "green"
    },
    {
      icon: Database,
      title: "Database & Cloud",
      skills: ["MySQL","PostgreSQL", "MongoDB", "AWS"],
      color: "purple"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Keras", "NLP", "Data Science"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-500/50",
      green: "from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-500/50",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-500/50",
      orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30 hover:border-orange-500/50"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="activities" className="py-20 bg-portfolio-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive skill set spanning modern web development, cloud technologies, and artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-slide-up bg-gradient-to-br ${getColorClasses(category.color)} border`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-center py-2 px-3 bg-white/5 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-colors duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
