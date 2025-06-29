
export const Certifications = () => {
  const certifications = [
    {
      title: "Frontend Development Certification",
      platform: "YouTube & Udemy",
      description: "Comprehensive course covering React, JavaScript, HTML/CSS, and modern web development practices",
      year: "2023",
      badge: "🎓"
    },
    {
      title: "Data Structures & Algorithms",
      platform: "LeetCode & GeeksforGeeks",
      description: "Advanced problem-solving certification with focus on algorithms, data structures, and competitive programming",
      year: "2023",
      badge: "📊"
    },
    {
      title: "Full Stack Web Development",
      platform: "Udemy",
      description: "Complete web development bootcamp covering frontend and backend technologies",
      year: "2022",
      badge: "🚀"
    },
    {
      title: "Python Programming",
      platform: "YouTube",
      description: "Python fundamentals, data analysis, and application development certification",
      year: "2022",
      badge: "🐍"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications & Training</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Continuous learning and skill development through various platforms and courses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-teal-400 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{cert.badge}</div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-teal-600/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.platform}
                    </span>
                    <span className="text-gray-400 text-sm">{cert.year}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
