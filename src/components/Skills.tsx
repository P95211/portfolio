
import { 
  Code, 
  GitBranch, 
  Github
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C/C++", icon: "💻", level: 85 },
        { name: "JavaScript", icon: "📜", level: 80 },
        { name: "Python", icon: "🐍", level: 75 },
        { name: "SQL", icon: "🗄️", level: 70 },
        { name: "HTML/CSS", icon: "🌐", level: 90 }
      ]
    },
    {
      title: "Libraries/Frameworks",
      skills: [
        { name: "React", icon: "⚛️", level: 85 },
        { name: "Tailwind CSS", icon: "🎨", level: 80 },
        { name: "Bootstrap", icon: "🅱️", level: 75 }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", icon: GitBranch, level: 80 },
        { name: "GitHub", icon: Github, level: 85 },
        { name: "VS Code", icon: Code, level: 90 },
        { name: "PyCharm", icon: "🐍", level: 70 }
      ]
    },
    {
      title: "Concepts & Others",
      skills: [
        { name: "DSA", icon: "📊", level: 80 },
        { name: "OOP", icon: "🏗️", level: 75 },
        { name: "DBMS", icon: "🗃️", level: 70 },
        { name: "Operating Systems", icon: "⚙️", level: 65 },
        { name: "UI/UX Design", icon: "🎨", level: 75 }
      ]
    }
  ];

  const renderIcon = (icon: any, name: string) => {
    if (typeof icon === 'string') {
      return <span className="text-2xl">{icon}</span>;
    }
    const IconComponent = icon;
    return <IconComponent size={24} className="text-teal-400" />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {renderIcon(skill.icon, skill.name)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-teal-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-teal-400 to-teal-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
