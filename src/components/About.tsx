
export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">
              Best Frontend Developer & Problem Solver
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Computer Science graduate from Delhi University (2021-2024) with a deep love for web development and problem-solving. My journey in tech is driven by curiosity and the desire to create meaningful digital experiences.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              With expertise in modern web technologies like React, JavaScript, and C++, I enjoy tackling complex problems through Data Structures and Algorithms. I believe in building applications that are not only functional but also user-friendly and visually appealing.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-700 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-teal-400">3+</div>
                <div className="text-gray-300">Years Learning</div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-teal-400">10+</div>
                <div className="text-gray-300">Projects Built</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-700 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-6">Education & Focus</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                <div>
                  <h5 className="text-white font-medium">B.Sc. Computer Science</h5>
                  <p className="text-gray-300">Delhi University (2021-2024)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                <div>
                  <h5 className="text-white font-medium">Web Development</h5>
                  <p className="text-gray-300">Frontend Technologies & UI/UX</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                <div>
                  <h5 className="text-white font-medium">Problem Solving</h5>
                  <p className="text-gray-300">Data Structures & Algorithms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
