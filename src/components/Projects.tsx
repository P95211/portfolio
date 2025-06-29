import { Github, ArrowUp } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Myntra Clone",
      description: "A fully responsive e-commerce web application mimicking Myntra's user interface and functionality. Features include product browsing, filtering, and interactive shopping experience.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://uploads-ssl.webflow.com/5ef27cb65411b70949a151e9/63fde7df8593f02a95e7d5cf_01.png",
      github: "#",
      live: "#"
    },
    {
      title: "Country Data App",
      description: "Interactive web application that displays comprehensive country-specific data including demographics, geography, and economic information with search and filter capabilities.",
      techStack: ["React", "JavaScript", "REST API", "CSS"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "IMDB Data Analysis",
      description: "Python-based data analysis project that processes and visualizes IMDB movie data, providing insights into movie trends, ratings, and industry patterns.",
      techStack: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and problem-solving
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-teal-400"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.github}
                    className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-lg transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.live}
                    className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors"
                  >
                    <ArrowUp size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-teal-600/20 text-teal-400 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
